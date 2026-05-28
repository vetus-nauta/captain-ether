# Localization Architect Handoff

## Activation Trigger

Use when Captain Ether or Maritime Games needs interface localization,
system-language detection, locale fallback decisions, or localization QA scope.

## Current Baseline

The public PWA interface is mostly hardcoded in Russian with English product
names in selected registry fields. Training content currently teaches Russian
source prompts into English Sea Speak answers.

Required PWA UI language set from Director/User consultation:

- English (`en`, product label `eng`)
- Russian (`ru`)
- German (`de`)
- Italian (`it`)
- Spanish (`es`, product label `esp`)
- Serbian/Montenegrin/Croatian shared Latin UI (`sr`, aliases `sr`, `me`,
  `hr`)
- Mandarin Chinese (`zh`)

Unsupported system languages must start in English.

## Last Completed Task

TASK-CE-0020 Public Stream Selector Localization Contract:

- task:
  `content/captain-ether/roles/localization-architect/tasks/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md`;
- report:
  `content/captain-ether/roles/localization-architect/reports/task-ce-0020-public-stream-selector-localization-contract-2026-05-28.md`;
- sprint:
  `CE-SPRINT-0019 Public Stream Selector Contract`;
- mode:
  report-only / contract-first;
- result:
  `PASS`.

The selector contract must keep UI locale separate from learner stream. Browser
or system locale may choose interface copy, but must not silently select
`english_native` training content.

## First Useful Task

When the local selector implementation sprint opens, verify that selector keys
exist for `en`, `ru`, `de`, `it`, `es`, `sr`, and `zh`, with English fallback
and no locale-to-stream inference.

## Standing Rule

After the PWA localization foundation is active, every later implementation
task must state localization impact. UI copy must use i18n keys with English as
the fallback. Content growth must distinguish interface language from learner
source language and Sea Speak target English.
