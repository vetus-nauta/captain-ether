#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const driverPath = process.env.CAPTAIN_ETHER_ATLAS_VERIFY_DRIVER_PATH || '';
const uri = process.env.CAPTAIN_ETHER_ATLAS_VERIFY_URI || '';
const database = process.env.CAPTAIN_ETHER_ATLAS_VERIFY_DATABASE || 'captain_ether';
const storageRoot = process.env.CAPTAIN_ETHER_ATLAS_VERIFY_STORAGE_ROOT || '';
const pretty = !['0', 'false', 'no', 'off'].includes(String(process.env.CAPTAIN_ETHER_ATLAS_VERIFY_PRETTY || '1').toLowerCase());

if (!driverPath || !uri || !storageRoot) {
  console.error('Missing required parity verifier environment: DRIVER_PATH, URI, STORAGE_ROOT.');
  process.exit(1);
}

const { MongoClient } = require(driverPath);

const META_KEYS = new Set([
  '_id',
  'mirrored_at',
  'migrated_at',
  'migrated_from',
  'session_id',
  'user_id',
]);

function readJson(name, fallback) {
  const file = path.join(storageRoot, `${name}.json`);
  if (!fs.existsSync(file)) {
    return { exists: false, data: fallback };
  }
  return {
    exists: true,
    data: JSON.parse(fs.readFileSync(file, 'utf8')),
  };
}

function deepClean(value) {
  if (Array.isArray(value)) return value.map(deepClean);
  if (value && typeof value === 'object') {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      if (META_KEYS.has(key)) continue;
      out[key] = deepClean(child);
    }
    return out;
  }
  return value;
}

function sortObject(value) {
  if (Array.isArray(value)) return value.map(sortObject);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.keys(value)
      .sort((a, b) => a.localeCompare(b))
      .map((key) => [key, sortObject(value[key])])
  );
}

function normalizeProgressJson(store) {
  return sortObject(deepClean(store));
}

function normalizeProgressMongo(documents) {
  const users = {};
  for (const doc of documents) {
    const userId = String(doc?.user_id || '');
    if (!userId) continue;
    users[userId] = doc;
  }
  return sortObject(deepClean({ users }));
}

function normalizeWeakPointsJson(store) {
  return sortObject(deepClean(store));
}

function normalizeWeakPointsMongo(documents) {
  const users = {};
  for (const doc of documents) {
    const userId = String(doc?.user_id || '');
    const itemId = String(doc?.item_id || '');
    if (!userId || !itemId) continue;
    if (!users[userId]) users[userId] = {};
    users[userId][itemId] = doc;
  }
  return sortObject(deepClean({ users }));
}

function normalizeWatchSessionsJson(store) {
  return sortObject(deepClean(store));
}

function normalizeWatchSessionsMongo(documents) {
  const sessions = {};
  for (const doc of documents) {
    const sessionId = String(doc?.session_id || doc?.id || '');
    if (!sessionId) continue;
    sessions[sessionId] = doc;
  }
  return sortObject(deepClean({ sessions }));
}

function normalizeAnswerLogsJson(store) {
  return sortObject(
    deepClean({
      entries: Array.isArray(store?.entries) ? store.entries : [],
    })
  );
}

function normalizeAnswerLogsMongo(documents) {
  return sortObject(
    deepClean({
      entries: documents.filter((doc) => doc && doc._id !== '__meta__'),
    })
  );
}

function firstDiff(a, b, p = '') {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return { path: `${p}.length`, a: a.length, b: b.length };
    for (let index = 0; index < a.length; index += 1) {
      const diff = firstDiff(a[index], b[index], `${p}[${index}]`);
      if (diff) return diff;
    }
    return null;
  }

  if ((a && typeof a === 'object') || (b && typeof b === 'object')) {
    if (!a || !b || Array.isArray(a) || Array.isArray(b)) {
      return { path: p, a, b };
    }
    const keys = [...new Set([...Object.keys(a), ...Object.keys(b)])].sort((x, y) => x.localeCompare(y));
    for (const key of keys) {
      if (!(key in a) || !(key in b)) {
        return { path: p ? `${p}.${key}` : key, a: a[key], b: b[key] };
      }
      const diff = firstDiff(a[key], b[key], p ? `${p}.${key}` : key);
      if (diff) return diff;
    }
    return null;
  }

  return a === b ? null : { path: p, a, b };
}

async function main() {
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 15000 });
  await client.connect();
  try {
    const db = client.db(database);
    const [
      progressDocs,
      weakPointsDocs,
      watchSessionsDocs,
      answerLogsDocs,
    ] = await Promise.all([
      db.collection('progress').find({}).sort({ $natural: 1 }).toArray(),
      db.collection('weak_points').find({}).sort({ $natural: 1 }).toArray(),
      db.collection('watch_sessions').find({}).sort({ $natural: 1 }).toArray(),
      db.collection('answer_logs').find({}).sort({ $natural: 1 }).toArray(),
    ]);

    const progressJson = readJson('progress', { users: {} });
    const weakPointsJson = readJson('weak_points', { users: {} });
    const watchSessionsJson = readJson('watch_sessions', { sessions: {} });
    const answerLogsJson = readJson('captain_answer_logs', { entries: [], total_logged: 0, updated_at: null });

    const progressLeft = normalizeProgressJson(progressJson.data);
    const progressRight = normalizeProgressMongo(progressDocs);
    const weakLeft = normalizeWeakPointsJson(weakPointsJson.data);
    const weakRight = normalizeWeakPointsMongo(weakPointsDocs);
    const watchLeft = normalizeWatchSessionsJson(watchSessionsJson.data);
    const watchRight = normalizeWatchSessionsMongo(watchSessionsDocs);
    const answerLeft = normalizeAnswerLogsJson(answerLogsJson.data);
    const answerRight = normalizeAnswerLogsMongo(answerLogsDocs);

    const summary = {
      storage_root: storageRoot,
      database,
      generated_at: new Date().toISOString(),
      progress: {
        json_users: Object.keys(progressLeft.users || {}).length,
        mongo_users: Object.keys(progressRight.users || {}).length,
        parity: JSON.stringify(progressLeft) === JSON.stringify(progressRight),
        first_diff: firstDiff(progressLeft, progressRight),
      },
      weak_points: {
        json_users: Object.keys(weakLeft.users || {}).length,
        mongo_users: Object.keys(weakRight.users || {}).length,
        parity: JSON.stringify(weakLeft) === JSON.stringify(weakRight),
        first_diff: firstDiff(weakLeft, weakRight),
      },
      watch_sessions: {
        json_sessions: Object.keys(watchLeft.sessions || {}).length,
        mongo_sessions: Object.keys(watchRight.sessions || {}).length,
        parity: JSON.stringify(watchLeft) === JSON.stringify(watchRight),
        first_diff: firstDiff(watchLeft, watchRight),
      },
      answer_logs: {
        json_present: answerLogsJson.exists,
        json_entries: Array.isArray(answerLeft.entries) ? answerLeft.entries.length : 0,
        mongo_entries: Array.isArray(answerRight.entries) ? answerRight.entries.length : 0,
        parity: answerLogsJson.exists ? JSON.stringify(answerLeft) === JSON.stringify(answerRight) : null,
        first_diff: answerLogsJson.exists ? firstDiff(answerLeft, answerRight) : null,
      },
    };

    console.log(JSON.stringify(summary, null, pretty ? 2 : 0));
  } finally {
    await client.close();
  }
}

main().catch((error) => {
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
});
