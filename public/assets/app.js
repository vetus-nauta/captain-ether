const state = {
  user: null,
  csrf: null,
  registry: [],
  progress: null,
  watch: null,
  currentQuestion: null,
  usedHint: false,
  lastResult: null,
  postLoginAction: null,
  answerBusy: false,
  finishBusy: false,
  finalResult: null,
};

const SUPPORTED_LOCALES = ['en', 'ru', 'de', 'it', 'es', 'sr', 'zh'];

const I18N = {
  en: {
    'profile.login': 'Log in',
    'profile.logout': 'Log out',
    'status.active': 'Available',
    'status.prototype': 'Prototype / draft',
    'status.preproduction': 'In design',
    'status.planned': 'Planned',
    'status.soon': 'Soon',
    'action.open': 'Open',
    'action.prototypeCard': 'Prototype card',
    'action.projectCard': 'Project card',
    'action.details': 'Details',
    'language.eyebrow': 'Language',
    'language.reminder': 'Interface language follows your system settings. Unsupported languages start in English.',
    'home.eyebrow': 'Game hub',
    'home.copy': 'Choose a maritime trainer: radio exchange, watch decisions, and future sailing and vessel modules live in one game domain.',
    'home.openCaptain': 'Open Captain Ether',
    'home.lostOars': 'Revise phrases',
    'home.answerLog': 'Answer log',
    'home.platform': 'Platform',
    'home.active': 'Available',
    'home.planned': 'In work',
    'home.watches': 'Watches',
    'home.oars': 'Oars',
    'home.progressTitle': 'Training progress',
    'home.progressCopy': 'Your next useful move should come from revision load and recent watches, not guesswork.',
    'home.progressAction': 'Start recommended watch',
    'home.progressLastLevel': 'Last level',
    'home.progressRecommended': 'Recommended',
    'home.progressBranch': 'Recommended branch',
    'home.progressNextStep': 'Next step',
    'home.progressPace': 'Recommended pace',
    'home.progressLength': 'Recommended length',
    'home.progressWeakTypes': 'Weak by type',
    'home.progressWeakBranches': 'Weak by branch',
    'home.progressTopTopics': 'Top topics',
    'home.progressRecent': 'Recent watch',
    'home.progressEmpty': 'No completed watches yet. Start with a short watch and build rhythm first.',
    'home.progressStep.clear_revision': 'Clear the current revision load before stepping up.',
    'home.progressStep.build_rhythm': 'Build three clean short watches before pushing the pace.',
    'home.progressStep.step_up': 'Revision is under control. Step up to the next watch level.',
    'home.progressStep.hold_course': 'Hold this level and smooth out repeated weak points.',
    'home.gamesTitle': 'Maritime games',
    'home.management': 'Management',
    'home.managementCopy': 'A shared base for users, groups, crews, competitions, and results. The game scenario stays separate.',
    'disclaimer.eyebrow': 'Disclaimer',
    'disclaimer.title': 'Training simulator, not navigation instruction',
    'disclaimer.copy1': 'Captain Ether is a game-based trainer for maritime English and radio exchange. It helps practise wording, but does not replace official documents, training, licensing, vessel procedures, master instructions, or flag-state requirements.',
    'disclaimer.copy2': 'Phrase, topic, and term structure is guided by:',
    'disclaimer.copy3': 'Content is adapted for training and yacht practice; before real radio exchange and navigation decisions, use current official publications and local rules for the sailing area.',
    'disclaimer.copy4': 'The account model is planned as one ecosystem: a future brkovic.ltd user should enter game.brkovic.ltd through shared signed login without a second registration. The email code here remains a temporary fallback login method until the shared account is launched.',
    'notFound.eyebrow': 'Route not found',
    'notFound.title': 'This game is not in the registry',
    'notFound.copy': 'Path {path} does not match entry_route in the game registry.',
    'nav.games': 'Game selection',
    'brief.status': 'Status',
    'brief.route': 'Route',
    'brief.prototype': 'Prototype',
    'brief.openGame': 'Open game',
    'brief.launchPrototype': 'Open staged prototype',
    'level.beginner': 'Beginner',
    'level.intermediate': 'Intermediate',
    'level.advanced': 'Advanced',
    'type.word': 'Word',
    'type.short_expression': 'Short phrase',
    'type.phrase': 'Radio phrase',
    'branch.core_radio': 'Core radio',
    'branch.marina_harbour': 'Marina / harbour',
    'branch.navigation_reports': 'Navigation reports',
    'branch.safety_securite': 'Safety / securite',
    'branch.traffic_collision': 'Traffic / collision',
    'branch.urgency_panpan': 'Urgency / pan-pan',
    'branch.distress_mayday': 'Distress / mayday',
    'branch.onboard_operations': 'Onboard operations',
    'branch.vts_port_control': 'VTS / port control',
    'branch.review_minimal_pairs': 'Minimal pairs',
    'lostReason.wrong': 'for revision',
    'lostReason.skip': 'skipped',
    'lostReason.hint': 'after hint',
    'auth.eyebrow': 'Login',
    'auth.title': 'Captain Ether is waiting for watch',
    'auth.copy': 'Log in by email to save watches, hints, and Lost Oars.',
    'auth.email': 'Email',
    'auth.getCode': 'Get code',
    'auth.codeLabel': '6-digit code',
    'auth.submit': 'Log in',
    'auth.requesting': 'Warming up the radio...',
    'auth.localCode': 'Local code: {code}',
    'auth.sent': 'Code sent by email.',
    'auth.verifying': 'Checking call sign...',
    'auth.firstWatchTitle': 'Log in to take your first watch',
    'auth.firstWatchCopy': 'The code keeps your watch, hints, and Lost Oars attached to this Captain Ether session.',
    'firstRun.eyebrow': 'Captain Ether',
    'firstRun.title': 'Take your first radio watch',
    'firstRun.copy': 'Start with a calm 12-call watch: plain radio words, short phrases, and first replies on air.',
    'firstRun.primary': 'Take first watch',
    'firstRun.loginPrimary': 'Log in and take first watch',
    'firstRun.readyTitle': 'Ready for the first watch',
    'firstRun.readyCopy': 'Beginner mode is selected. You can start now; harder watches stay secondary until the first rhythm is clear.',
    'firstRun.beginnerBadge': 'Recommended first',
    'firstRun.beginnerTitle': 'Beginner short watch',
    'firstRun.beginnerCopy': '12 calls. No exam noise. The goal is to answer calmly and see the standard form.',
    'firstRun.whatTitle': 'What happens next',
    'firstRun.what1': 'You translate one short call into English Sea Speak.',
    'firstRun.what2': 'The system shows the standard form after each answer.',
    'firstRun.what3': 'The summary tells you the next useful move without technical pressure.',
    'firstRun.otherTitle': 'Other watches',
    'firstRun.otherCopy': 'Use these after the first watch or when you already know the radio rhythm.',
    'firstRun.showLevels': 'Show other levels',
    'firstRun.hideLevels': 'Hide other levels',
    'firstRun.backHub': 'Back to game hub',
    'levels.eyebrow': 'Captain Ether',
    'levels.title': 'Choose a watch',
    'levels.copy': 'Short radio watches: no exam noise, from simple words to working phrases.',
    'levels.start': 'Start watch',
    'levelCopy.beginnerTitle': 'Short watch',
    'levelCopy.beginnerText': '12 calls: words, short phrases, and first replies on air.',
    'levelCopy.intermediateTitle': 'Working radio',
    'levelCopy.intermediateText': '16 calls: marina, course, speed, VTS, and clarifications.',
    'levelCopy.advancedTitle': 'Mixed watch',
    'levelCopy.advancedText': '20 calls: denser situations, quieter hints.',
    'status.loadingRadio': 'Warming up the radio...',
    'watch.eyebrow': 'Short watch',
    'watch.progressLabel': 'Watch progress {index} of {total}',
    'watch.finalCall': 'Final call',
    'watch.remaining': 'After this {count}',
    'watch.instruction': 'Translate into English Sea Speak',
    'watch.previous': 'Previous answer',
    'watch.answerLabel': 'Your answer',
    'watch.answer': 'Answer',
    'watch.checking': 'Checking...',
    'watch.viewSummary': 'View summary',
    'watch.closing': 'Closing watch...',
    'watch.answerError': 'Keep your answer. The radio link did not close cleanly.',
    'watch.hint': 'Hint',
    'watch.hintStep': 'Hint 1 of 1',
    'watch.hintSupportive': 'Hint support',
    'watch.hintStandard': 'Hint support',
    'watch.hintSparse': 'Hint pressure',
    'watch.skip': 'Skip',
    'watch.skipSupportive': 'Skip support',
    'watch.skipStandard': 'Skip pressure',
    'watch.skipLimited': 'Skip pressure',
    'watch.noHint': 'No hints. The radio is honest.',
    'watch.hintLabel': 'Hint',
    'watch.side': 'Watch',
    'watch.level': 'Level',
    'watch.type': 'Type',
    'watch.topic': 'Topic',
    'watch.context': 'Watch context',
    'watch.partnerTitle': 'Reserved partner space',
    'watch.partnerCopy': 'Future maritime partner message. It stays outside the answer flow.',
    'watch.exitHub': 'Exit to hub',
    'result.standardAccepted': 'Accepted, here is the standard form',
    'result.youWrote': 'You wrote',
    'result.standardForm': 'Standard form',
    'result.finalComplete': 'Final call complete',
    'result.clean.recovery': 'Good. Keep it calm and repeat the standard form.',
    'result.clean.steady': 'Accepted. Keep the watch rhythm.',
    'result.clean.push': 'Correct. Next call.',
    'result.hint.recovery': 'Accepted with support. Use the standard form once more.',
    'result.hint.steady': 'Accepted with hint. Try the next call clean.',
    'result.hint.push': 'Hint used. Standard form below.',
    'result.soft.recovery': 'Accepted. Check the standard form calmly.',
    'result.soft.steady': 'Accepted. Standard form below.',
    'result.soft.push': 'Accepted. Tighten to the standard form.',
    'result.weak.recovery': 'Not yet. Slow down and rebuild the call.',
    'result.weak.steady': 'Not yet. The station would ask for a repeat.',
    'result.weak.push': 'Wrong. Correct form below.',
    'summary.eyebrow': 'Watch closed',
    'summary.title': 'Watch closed calmly',
    'summary.title.recovery': 'Recovery watch closed',
    'summary.title.steady': 'Watch closed steadily',
    'summary.title.push': 'Push watch closed',
    'summary.guidance.recovery': 'Lower pressure next: clear the heaviest oars first.',
    'summary.guidance.steady': 'Hold the rhythm and keep the next watch balanced.',
    'summary.guidance.push': 'Shorter feedback, denser calls: keep the radio tight.',
    'summary.clean': 'Clean',
    'summary.hint': 'With hint',
    'summary.revision': 'To revise',
    'summary.score': 'Score',
    'summary.continue': 'Continue',
    'summary.nextTitle': 'Next move',
    'summary.nextWatch': 'Start recommended watch',
    'summary.nextBranchWatch': 'Start focused watch',
    'summary.reviseNow': 'Revise now',
    'summary.recommendedLevel': 'Recommended level',
    'summary.recommendedBranch': 'Recommended branch',
    'summary.recommendedPace': 'Recommended pace',
    'summary.recommendedLength': 'Recommended length',
    'summary.debriefTitle': 'Why this route',
    'summary.pressureBranches': 'Pressure by branch',
    'summary.pressureTypes': 'Pressure by type',
    'summary.driver.revision_load': 'Revision load is still high: {count}',
    'summary.driver.branch_pressure': 'Most pressure in {branch}: {count}',
    'summary.driver.type_pressure': 'Main friction in {type}: {count}',
    'summary.driver.hint_load': 'Hints still carry too much of the watch: {count}',
    'summary.driver.spelling_load': 'Spelling slowed the watch: {count}',
    'summary.driver.rhythm_build': 'You still need watch rhythm before stepping up: {count}',
    'summary.driver.step_up_ready': 'This watch is steady enough for {level}: {count}',
    'summary.driver.watch_errors': 'Wrong or skipped calls still distort the route: {count}',
    'summary.driver.consistency': 'Clean calls are holding the route together: {count}',
    'pace.profile.recovery': 'Recovery',
    'pace.profile.steady': 'Steady',
    'pace.profile.push': 'Push',
    'pace.intensity.lighter': 'lighter',
    'pace.intensity.standard': 'standard',
    'pace.intensity.denser': 'denser',
    'pace.calls': '{count} calls',
    'hint.mode.supportive': 'supportive',
    'hint.mode.standard': 'standard',
    'hint.mode.sparse': 'sparse',
    'skip.mode.supportive': 'supportive',
    'skip.mode.standard': 'standard',
    'skip.mode.limited': 'limited',
    'lost.title': 'Calm revision',
    'lost.hasItems': 'Not a penalty: fix a few phrases and return to watch.',
    'lost.empty': 'All calm: nothing to revise right now.',
    'lost.priorityTitle': 'Revision route',
    'lost.priorityCopy': 'Clear the heaviest weak points first, then return straight into the recommended watch.',
    'lost.priorityBranch': 'Priority branch',
    'lost.returnRecommended': 'Return to recommended watch',
    'lost.autoReturn': 'Revision cleared. Returning to recommended watch...',
    'lost.answerAria': 'Revision answer',
    'lost.check': 'Check',
    'lost.home': 'Hub',
    'lost.newWatch': 'New watch',
    'lost.review': 'Revision',
    'lost.hint': 'Hint',
    'empty.none': 'none',
    'log.wrong': 'wrong',
    'log.skip': 'skip',
    'log.hint': 'hint',
    'log.spelling': 'spelling',
    'log.variant': 'variant',
    'log.accepted_variant': 'accepted variant',
    'log.soft_accept': 'understood',
    'flag.possible_missing_variant': 'check variant',
    'flag.prompt_or_hint_friction': 'check hint',
    'flag.accepted_variant_review': 'to dictionary',
    'flag.standard_form_friction': 'standard form',
    'flag.common_spelling_review': 'common typo',
    'flag.repeated_pattern': 'repeats',
    'date.none': 'no date',
    'answerLog.adminRequired': 'Admin role required.',
    'answerLog.loading': 'Collecting answer log...',
    'answerLog.title': 'Answer log',
    'answerLog.stored': 'Stored',
    'answerLog.filtered': 'Filtered',
    'answerLog.groups': 'Groups',
    'answerLog.updated': 'Updated',
    'answerLog.kinds': 'Kinds',
    'answerLog.refresh': 'Refresh',
    'answerLog.back': 'To watches',
    'answerLog.noGroups': 'No disputed answers yet.',
    'answerLog.latest': 'Latest entries',
    'answerLog.rawTitle': 'Raw events without identity',
    'answerLog.time': 'Time',
    'answerLog.kind': 'Kind',
    'answerLog.answer': 'Answer',
    'answerLog.standard': 'Standard',
    'answerLog.records': '{count} records',
    'answerLog.noPrompt': 'No prompt',
    'answerLog.noAnswers': 'No answers.',
    'answerLog.empty': '[empty]',
    'answerLog.noEntries': 'No entries.',
    'locale': 'en-US',
  },
};

const GAME_COPY = {
  en: {
    captain_ether: {
      title: 'Captain Ether',
      description: 'Maritime radio exchange training game.',
      hub_note: 'Active Nav Desk game for Sea Speak, VHF, and working radio phrases.',
      stage: 'Available',
    },
    wind_rider: {
      title: 'Wind Rider',
      description: 'Sails, wind, sail physics, and helm control.',
      stage: 'Planned',
    },
    mystic_boatswain: {
      title: 'Mystic Boatswain',
      description: 'Names of parts, spaces, equipment, and fittings on yachts and ships.',
      stage: 'Planned',
    },
  },
  ru: {
    captain_ether: {
      title: 'Капитан — Эфир',
      description: 'Морская игра-тренажёр радиообмена.',
      hub_note: 'Активная игра Nav Desk для Sea Speak, УКВ и рабочих фраз радиообмена.',
      stage: 'Доступно',
    },
    wind_rider: {
      title: 'Оседлавший ветер',
      description: 'Паруса, ветер, физика паруса и управление.',
      stage: 'Запланировано',
    },
    mystic_boatswain: {
      title: 'Мистический боцман',
      description: 'Названия частей, помещений, оборудования и узлов яхт и кораблей.',
      stage: 'Запланировано',
    },
  },
  de: {
    captain_ether: { title: 'Captain Ether', description: 'Maritimes Funkverkehr-Trainingsspiel.', hub_note: 'Aktives Nav-Desk-Spiel für Sea Speak, UKW und Arbeitsphrasen im Funk.', stage: 'Verfügbar' },
    wind_rider: { title: 'Wind Rider', description: 'Segel, Wind, Segelphysik und Steuerung.', stage: 'Geplant' },
    mystic_boatswain: { title: 'Mystic Boatswain', description: 'Namen von Teilen, Räumen, Ausrüstung und Beschlägen auf Yachten und Schiffen.', stage: 'Geplant' },
  },
  it: {
    captain_ether: { title: 'Captain Ether', description: 'Gioco di training per comunicazioni radio marittime.', hub_note: 'Gioco Nav Desk attivo per Sea Speak, VHF e frasi operative radio.', stage: 'Disponibile' },
    wind_rider: { title: 'Wind Rider', description: 'Vele, vento, fisica della vela e governo.', stage: 'Pianificato' },
    mystic_boatswain: { title: 'Mystic Boatswain', description: 'Nomi di parti, locali, attrezzature e accessori di yacht e navi.', stage: 'Pianificato' },
  },
  es: {
    captain_ether: { title: 'Captain Ether', description: 'Juego de entrenamiento de comunicación radio marítima.', hub_note: 'Juego activo de Nav Desk para Sea Speak, VHF y frases operativas de radio.', stage: 'Disponible' },
    wind_rider: { title: 'Wind Rider', description: 'Velas, viento, física de vela y gobierno.', stage: 'Planificado' },
    mystic_boatswain: { title: 'Mystic Boatswain', description: 'Nombres de partes, espacios, equipos y herrajes de yates y buques.', stage: 'Planificado' },
  },
  sr: {
    captain_ether: { title: 'Captain Ether', description: 'Pomorska igra za trening radio-komunikacije.', hub_note: 'Aktivna Nav Desk igra za Sea Speak, VHF i radne radio fraze.', stage: 'Dostupno' },
    wind_rider: { title: 'Wind Rider', description: 'Jedra, vetar, fizika jedra i upravljanje.', stage: 'Planirano' },
    mystic_boatswain: { title: 'Mystic Boatswain', description: 'Nazivi delova, prostora, opreme i okova na jahtama i brodovima.', stage: 'Planirano' },
  },
  zh: {
    captain_ether: { title: 'Captain Ether', description: '海事无线电通信训练游戏。', hub_note: '用于 Sea Speak、VHF 和工作无线电短语的 Nav Desk 活跃游戏。', stage: '可用' },
    wind_rider: { title: 'Wind Rider', description: '帆、风、帆的物理和操控。', stage: '已计划' },
    mystic_boatswain: { title: 'Mystic Boatswain', description: '游艇和船舶的部件、舱室、设备和属具名称。', stage: '已计划' },
  },
};

I18N.ru = {
  ...I18N.en,
  'profile.login': 'Войти',
  'profile.logout': 'Выйти',
  'status.active': 'Доступно',
  'status.prototype': 'Прототип / draft',
  'status.preproduction': 'Проектируется',
  'status.planned': 'Запланировано',
  'status.soon': 'Скоро',
  'action.open': 'Открыть',
  'action.prototypeCard': 'Карточка прототипа',
  'action.projectCard': 'Карточка проекта',
  'action.details': 'Подробнее',
  'language.eyebrow': 'Язык',
  'language.reminder': 'Язык интерфейса следует системным настройкам. Если системный язык не поддержан, старт будет на English.',
  'home.eyebrow': 'Игровой хаб',
  'home.copy': 'Выберите морской тренажёр: радиообмен, решения вахтенного, будущие парусные и судовые модули живут в одном игровом домене.',
  'home.openCaptain': 'Открыть Капитан — Эфир',
  'home.lostOars': 'Доработать фразы',
  'home.answerLog': 'Журнал ответов',
  'home.platform': 'Платформа',
  'home.active': 'Доступно',
  'home.planned': 'В работе',
  'home.watches': 'Вахты',
  'home.oars': 'Вёсла',
  'home.progressTitle': 'Учебный прогресс',
  'home.progressCopy': 'Следующий полезный шаг игрока должен идти из нагрузки на доработку и недавних вахт, а не из догадки.',
  'home.progressAction': 'Начать рекомендованную вахту',
  'home.progressLastLevel': 'Последний уровень',
  'home.progressRecommended': 'Рекомендовано',
  'home.progressBranch': 'Рекомендованная ветка',
  'home.progressNextStep': 'Следующий шаг',
  'home.progressPace': 'Рекомендованный темп',
  'home.progressLength': 'Рекомендованная длина',
  'home.progressWeakTypes': 'Слабые места по типу',
  'home.progressWeakBranches': 'Слабые места по ветке',
  'home.progressTopTopics': 'Основные темы',
  'home.progressRecent': 'Последняя вахта',
  'home.progressEmpty': 'Пока нет завершённых вахт. Начни с короткой и набери ритм.',
  'home.progressStep.clear_revision': 'Сначала сними текущую нагрузку на доработку, потом поднимай уровень.',
  'home.progressStep.build_rhythm': 'Собери три спокойные короткие вахты, потом ускоряйся.',
  'home.progressStep.step_up': 'Доработка под контролем. Можно переходить на следующий уровень.',
  'home.progressStep.hold_course': 'Держи этот уровень и вычищай повторяющиеся слабые места.',
  'home.gamesTitle': 'Морские игры',
  'home.management': 'Управление',
  'home.managementCopy': 'Общая основа для пользователей, групп, экипажей, соревнований и результатов. Игровой сценарий остаётся отдельным.',
  'disclaimer.eyebrow': 'Дисклеймер',
  'disclaimer.title': 'Учебный тренажёр, не навигационная инструкция',
  'disclaimer.copy1': '«Капитан — Эфир» сделан как игровой тренажёр морского английского и радиообмена. Он помогает отрабатывать формулировки, но не заменяет официальные документы, подготовку, лицензирование, судовые процедуры, указания капитана и требования администрации флага.',
  'disclaimer.copy2': 'При проектировании структуры фраз, тем и терминов программа ориентируется на:',
  'disclaimer.copy3': 'Контент адаптирован для обучения и яхтенной практики; перед реальным радиообменом и навигационными решениями нужно использовать актуальные официальные издания и локальные правила района плавания.',
  'disclaimer.copy4': 'Аккаунтная модель заложена как единая экосистема: будущий пользователь brkovic.ltd должен входить в game.brkovic.ltd через общий подписанный вход без второй регистрации. Email-код здесь остаётся временным fallback-способом входа до запуска общего аккаунта.',
  'notFound.eyebrow': 'Маршрут не найден',
  'notFound.title': 'Такой игры нет в реестре',
  'notFound.copy': 'Путь {path} не совпадает с entry_route в игровом реестре.',
  'nav.games': 'К выбору игр',
  'brief.status': 'Статус',
  'brief.route': 'Маршрут',
  'brief.prototype': 'Прототип',
  'brief.openGame': 'Открыть игру',
  'brief.launchPrototype': 'Открыть staged prototype',
  'level.beginner': 'Новичок',
  'level.intermediate': 'Средний',
  'level.advanced': 'Продвинутый',
  'type.word': 'Слово',
  'type.short_expression': 'Короткая фраза',
  'type.phrase': 'Радиофраза',
  'branch.core_radio': 'Базовый радиообмен',
  'branch.marina_harbour': 'Марина / гавань',
  'branch.navigation_reports': 'Навигационные доклады',
  'branch.safety_securite': 'Безопасность / securite',
  'branch.traffic_collision': 'Трафик / столкновение',
  'branch.urgency_panpan': 'Срочность / pan-pan',
  'branch.distress_mayday': 'Бедствие / mayday',
  'branch.onboard_operations': 'Судовые операции',
  'branch.vts_port_control': 'VTS / порт-контроль',
  'branch.review_minimal_pairs': 'Минимальные пары',
  'lostReason.wrong': 'на доработку',
  'lostReason.skip': 'пропущено',
  'lostReason.hint': 'после подсказки',
  'auth.eyebrow': 'Вход',
  'auth.title': 'Капитан — Эфир ждёт вахту',
  'auth.copy': 'Войдите по email, чтобы сохранять вахты, подсказки и потерянные вёсла.',
  'auth.getCode': 'Получить код',
  'auth.codeLabel': '6-значный код',
  'auth.submit': 'Войти',
  'auth.requesting': 'Эфир прогревается...',
  'auth.localCode': 'Локальный код: {code}',
  'auth.sent': 'Код отправлен на email.',
  'auth.verifying': 'Проверяем позывной...',
  'auth.firstWatchTitle': 'Войдите, чтобы начать первую вахту',
  'auth.firstWatchCopy': 'Код привяжет вахту, подсказки и Lost Oars к этой сессии Captain Ether.',
  'firstRun.eyebrow': 'Captain Ether',
  'firstRun.title': 'Начните первую радиовахту',
  'firstRun.copy': 'Спокойная вахта на 12 вызовов: базовые радиослова, короткие фразы и первые ответы в эфире.',
  'firstRun.primary': 'Начать первую вахту',
  'firstRun.loginPrimary': 'Войти и начать первую вахту',
  'firstRun.readyTitle': 'Первая вахта готова',
  'firstRun.readyCopy': 'Выбран beginner. Можно начинать; сложные вахты остаются вторым действием, пока не появится ритм.',
  'firstRun.beginnerBadge': 'Рекомендуется первой',
  'firstRun.beginnerTitle': 'Короткая beginner-вахта',
  'firstRun.beginnerCopy': '12 вызовов. Без экзаменационного шума. Цель - спокойно ответить и увидеть стандартную форму.',
  'firstRun.whatTitle': 'Что будет дальше',
  'firstRun.what1': 'Вы переводите один короткий вызов в английский Sea Speak.',
  'firstRun.what2': 'После ответа система показывает стандартную форму.',
  'firstRun.what3': 'Итог подсказывает следующий полезный шаг без технического давления.',
  'firstRun.otherTitle': 'Другие вахты',
  'firstRun.otherCopy': 'Используйте их после первой вахты или если уже понимаете ритм радиообмена.',
  'firstRun.showLevels': 'Показать другие уровни',
  'firstRun.hideLevels': 'Скрыть другие уровни',
  'firstRun.backHub': 'Вернуться в игровой хаб',
  'levels.eyebrow': 'Капитан — Эфир',
  'levels.title': 'Выберите вахту',
  'levels.copy': 'Короткие радио-вахты: без экзаменационного шума, от простых слов к рабочим фразам.',
  'levels.start': 'Начать вахту',
  'levelCopy.beginnerTitle': 'Короткая вахта',
  'levelCopy.beginnerText': '12 вызовов: слова, короткие фразы и первые ответы в эфире.',
  'levelCopy.intermediateTitle': 'Рабочая связь',
  'levelCopy.intermediateText': '16 вызовов: марина, курс, скорость, VTS и уточнения.',
  'levelCopy.advancedTitle': 'Смешанная вахта',
  'levelCopy.advancedText': '20 вызовов: ситуации плотнее, подсказки скромнее.',
  'status.loadingRadio': 'Эфир прогревается...',
  'watch.eyebrow': 'Короткая вахта',
  'watch.progressLabel': 'Прогресс вахты {index} из {total}',
  'watch.finalCall': 'Финальный вызов',
  'watch.remaining': 'После этого {count}',
  'watch.instruction': 'Переведите на английский Sea Speak',
  'watch.previous': 'Предыдущий ответ',
  'watch.answerLabel': 'Ваш ответ',
  'watch.answer': 'Ответить',
  'watch.checking': 'Проверяем...',
  'watch.viewSummary': 'Показать итог',
  'watch.closing': 'Закрываем вахту...',
  'watch.answerError': 'Ответ сохранён в поле. Радиосвязь не закрылась чисто.',
  'watch.hint': 'Подсказка',
  'watch.hintStep': 'Подсказка 1 из 1',
  'watch.hintSupportive': 'Поддержка подсказки',
  'watch.hintStandard': 'Поддержка подсказки',
  'watch.hintSparse': 'Давление подсказки',
  'watch.skip': 'Пропустить',
  'watch.skipSupportive': 'Поддержка пропуска',
  'watch.skipStandard': 'Давление пропуска',
  'watch.skipLimited': 'Давление пропуска',
  'watch.noHint': 'Подсказок нет. Эфир честный.',
  'watch.hintLabel': 'Подсказка',
  'watch.side': 'Вахта',
  'watch.level': 'Уровень',
  'watch.type': 'Тип',
  'watch.topic': 'Тема',
  'watch.context': 'Контекст вахты',
  'watch.partnerTitle': 'Место для партнера',
  'watch.partnerCopy': 'Будущее сообщение морского партнера. Оно не вмешивается в ответ.',
  'watch.exitHub': 'Выйти в хаб',
  'result.standardAccepted': 'Засчитано, вот стандартная форма',
  'result.youWrote': 'Вы написали',
  'result.standardForm': 'Стандартная форма',
  'result.finalComplete': 'Финальный вызов завершён',
  'result.clean.recovery': 'Хорошо. Спокойно повтори стандартную форму.',
  'result.clean.steady': 'Принято. Держи ритм вахты.',
  'result.clean.push': 'Верно. Следующий вызов.',
  'result.hint.recovery': 'Принято с поддержкой. Еще раз закрепи стандартную форму.',
  'result.hint.steady': 'Принято с подсказкой. Следующий вызов попробуй чисто.',
  'result.hint.push': 'Подсказка использована. Стандартная форма ниже.',
  'result.soft.recovery': 'Засчитано. Спокойно проверь стандартную форму.',
  'result.soft.steady': 'Засчитано. Стандартная форма ниже.',
  'result.soft.push': 'Засчитано. Подтяни до стандартной формы.',
  'result.weak.recovery': 'Пока нет. Сбавь темп и собери вызов заново.',
  'result.weak.steady': 'Пока нет. Станция попросила бы повторить.',
  'result.weak.push': 'Неверно. Правильная форма ниже.',
  'summary.eyebrow': 'Вахта закрыта',
  'summary.title': 'Вахта закрыта спокойно',
  'summary.title.recovery': 'Восстановительная вахта закрыта',
  'summary.title.steady': 'Вахта закрыта ровно',
  'summary.title.push': 'Ускоряющая вахта закрыта',
  'summary.guidance.recovery': 'Дальше меньше давления: сначала тяжелые Lost Oars.',
  'summary.guidance.steady': 'Держим ритм и оставляем следующую вахту сбалансированной.',
  'summary.guidance.push': 'Короче обратная связь, плотнее вызовы: держи эфир собранным.',
  'summary.clean': 'Чисто',
  'summary.hint': 'С подсказкой',
  'summary.revision': 'На доработку',
  'summary.score': 'Счёт',
  'summary.continue': 'Продолжить',
  'summary.nextTitle': 'Следующий ход',
  'summary.nextWatch': 'Начать рекомендованную вахту',
  'summary.nextBranchWatch': 'Начать целевую вахту',
  'summary.reviseNow': 'Сразу в доработку',
  'summary.recommendedLevel': 'Рекомендованный уровень',
  'summary.recommendedBranch': 'Рекомендованная ветка',
  'summary.recommendedPace': 'Рекомендованный темп',
  'summary.recommendedLength': 'Рекомендованная длина',
  'summary.debriefTitle': 'Почему такой маршрут',
  'summary.pressureBranches': 'Давление по ветке',
  'summary.pressureTypes': 'Давление по типу',
  'summary.driver.revision_load': 'Нагрузка на доработку все еще высокая: {count}',
  'summary.driver.branch_pressure': 'Главное давление идет из ветки {branch}: {count}',
  'summary.driver.type_pressure': 'Основное трение сейчас в типе {type}: {count}',
  'summary.driver.hint_load': 'Подсказки все еще слишком сильно держат вахту: {count}',
  'summary.driver.spelling_load': 'Орфография тормозила ход вахты: {count}',
  'summary.driver.rhythm_build': 'До следующего шага еще нужен ритм вахт: {count}',
  'summary.driver.step_up_ready': 'Эта вахта уже достаточно ровная для {level}: {count}',
  'summary.driver.watch_errors': 'Ошибки и пропуски еще заметно искажают маршрут: {count}',
  'summary.driver.consistency': 'Чистые вызовы уже держат маршрут: {count}',
  'pace.profile.recovery': 'Восстановительный',
  'pace.profile.steady': 'Ровный',
  'pace.profile.push': 'Ускоряющий',
  'pace.intensity.lighter': 'легче',
  'pace.intensity.standard': 'стандарт',
  'pace.intensity.denser': 'плотнее',
  'pace.calls': '{count} вызовов',
  'hint.mode.supportive': 'щадящий',
  'hint.mode.standard': 'стандарт',
  'hint.mode.sparse': 'жестче',
  'skip.mode.supportive': 'щадящий',
  'skip.mode.standard': 'стандарт',
  'skip.mode.limited': 'ограничен',
  'lost.title': 'Спокойная доработка',
  'lost.hasItems': 'Не штраф: закрепим пару фраз и вернёмся на вахту.',
  'lost.empty': 'Всё спокойно: сейчас нечего дорабатывать.',
  'lost.priorityTitle': 'Маршрут доработки',
  'lost.priorityCopy': 'Сначала снимай самые тяжелые слабые места, потом сразу возвращайся в рекомендованную вахту.',
  'lost.priorityBranch': 'Приоритетная ветка',
  'lost.returnRecommended': 'Вернуться в рекомендованную вахту',
  'lost.autoReturn': 'Доработка закрыта. Возвращаю в рекомендованную вахту...',
  'lost.answerAria': 'Ответ для доработки',
  'lost.check': 'Проверить',
  'lost.home': 'В хаб',
  'lost.newWatch': 'Новая вахта',
  'lost.review': 'Доработка',
  'lost.hint': 'Подсказка',
  'empty.none': 'нет',
  'log.wrong': 'ошибка',
  'log.skip': 'пропуск',
  'log.hint': 'подсказка',
  'log.spelling': 'написание',
  'log.variant': 'вариант',
  'log.accepted_variant': 'принятый вариант',
  'log.soft_accept': 'смысл принят',
  'flag.possible_missing_variant': 'проверить вариант',
  'flag.prompt_or_hint_friction': 'проверить подсказку',
  'flag.accepted_variant_review': 'в словарь',
  'flag.standard_form_friction': 'стандартная форма',
  'flag.common_spelling_review': 'частая опечатка',
  'flag.repeated_pattern': 'повторяется',
  'date.none': 'нет даты',
  'answerLog.adminRequired': 'Admin role required.',
  'answerLog.loading': 'Собираем журнал ответов...',
  'answerLog.title': 'Журнал ответов',
  'answerLog.stored': 'В хранилище',
  'answerLog.filtered': 'Отфильтровано',
  'answerLog.groups': 'Групп',
  'answerLog.updated': 'Обновлено',
  'answerLog.kinds': 'Типы',
  'answerLog.refresh': 'Обновить',
  'answerLog.back': 'К вахтам',
  'answerLog.noGroups': 'Пока нет спорных ответов.',
  'answerLog.latest': 'Последние записи',
  'answerLog.rawTitle': 'Сырые события без identity',
  'answerLog.time': 'Время',
  'answerLog.kind': 'Тип',
  'answerLog.answer': 'Ответ',
  'answerLog.standard': 'Стандарт',
  'answerLog.records': '{count} записей',
  'answerLog.noPrompt': 'Без prompt',
  'answerLog.noAnswers': 'Нет ответов.',
  'answerLog.empty': '[пусто]',
  'answerLog.noEntries': 'Нет записей.',
  'locale': 'ru-RU',
};

const LOCALE_OVERRIDES = {
  de: {
    'profile.login': 'Einloggen', 'profile.logout': 'Ausloggen', 'status.active': 'Verfügbar', 'status.prototype': 'Prototyp / Draft', 'status.preproduction': 'In Planung', 'status.planned': 'Geplant', 'status.soon': 'Bald', 'action.open': 'Öffnen', 'action.prototypeCard': 'Prototypkarte', 'action.projectCard': 'Projektkarte', 'action.details': 'Details',
    'language.eyebrow': 'Sprache', 'language.reminder': 'Die Oberfläche folgt den Systemeinstellungen. Nicht unterstützte Sprachen starten auf Englisch.',
    'home.copy': 'Wähle einen maritimen Trainer: Funkverkehr, Wachentscheidungen und künftige Segel- und Schiffsmodule in einer Game-Domain.', 'home.openCaptain': 'Captain Ether öffnen', 'home.lostOars': 'Phrasen üben', 'home.answerLog': 'Antwortprotokoll', 'home.platform': 'Plattform', 'home.active': 'Verfügbar', 'home.planned': 'In Arbeit', 'home.watches': 'Wachen', 'home.oars': 'Ruder', 'home.gamesTitle': 'Maritime Spiele', 'home.management': 'Verwaltung',
    'disclaimer.title': 'Trainingssimulator, keine Navigationsanweisung', 'notFound.title': 'Dieses Spiel ist nicht im Register', 'nav.games': 'Zur Spielauswahl',
    'level.beginner': 'Anfänger', 'level.intermediate': 'Mittel', 'level.advanced': 'Fortgeschritten', 'type.word': 'Wort', 'type.short_expression': 'Kurze Phrase', 'type.phrase': 'Funkphrase',
    'auth.eyebrow': 'Login', 'auth.title': 'Captain Ether wartet auf die Wache', 'auth.copy': 'Melde dich per E-Mail an, um Wachen, Hinweise und Lost Oars zu speichern.', 'auth.getCode': 'Code erhalten', 'auth.codeLabel': '6-stelliger Code', 'auth.submit': 'Einloggen', 'auth.requesting': 'Funk wird vorbereitet...', 'auth.localCode': 'Lokaler Code: {code}', 'auth.sent': 'Code per E-Mail gesendet.', 'auth.verifying': 'Rufzeichen wird geprüft...',
    'levels.title': 'Wache wählen', 'levels.copy': 'Kurze Funkwachen: ohne Prüfungsrauschen, von einfachen Wörtern zu Arbeitsphrasen.', 'levels.start': 'Wache starten', 'levelCopy.beginnerTitle': 'Kurze Wache', 'levelCopy.intermediateTitle': 'Arbeitsfunk', 'levelCopy.advancedTitle': 'Gemischte Wache',
    'status.loadingRadio': 'Funk wird vorbereitet...', 'watch.instruction': 'In englisches Sea Speak übersetzen', 'watch.previous': 'Vorherige Antwort', 'watch.answerLabel': 'Deine Antwort', 'watch.answer': 'Antworten', 'watch.hint': 'Hinweis', 'watch.skip': 'Überspringen', 'watch.level': 'Level', 'watch.type': 'Typ', 'watch.topic': 'Thema', 'watch.exitHub': 'Zum Hub',
    'result.standardAccepted': 'Akzeptiert, hier ist die Standardform', 'result.standardForm': 'Standardform', 'summary.title': 'Wache ruhig geschlossen', 'summary.clean': 'Sauber', 'summary.hint': 'Mit Hinweis', 'summary.revision': 'Zu üben', 'summary.score': 'Punktzahl', 'summary.continue': 'Weiter',
    'lost.title': 'Ruhige Übung', 'lost.hasItems': 'Keine Strafe: ein paar Phrasen festigen und zurück zur Wache.', 'lost.empty': 'Alles ruhig: gerade nichts zu üben.', 'lost.check': 'Prüfen', 'lost.home': 'Hub', 'lost.newWatch': 'Neue Wache',
    'answerLog.title': 'Antwortprotokoll', 'answerLog.loading': 'Antwortprotokoll wird gesammelt...', 'answerLog.refresh': 'Aktualisieren', 'answerLog.back': 'Zu den Wachen', 'locale': 'de-DE',
  },
  it: {
    'profile.login': 'Accedi', 'profile.logout': 'Esci', 'status.active': 'Disponibile', 'status.prototype': 'Prototipo / draft', 'status.preproduction': 'In progettazione', 'status.planned': 'Pianificato', 'status.soon': 'Presto', 'action.open': 'Apri', 'action.prototypeCard': 'Scheda prototipo', 'action.projectCard': 'Scheda progetto', 'action.details': 'Dettagli',
    'language.eyebrow': 'Lingua', 'language.reminder': 'La lingua dell’interfaccia segue le impostazioni di sistema. Le lingue non supportate partono in inglese.',
    'home.eyebrow': 'Hub giochi', 'home.copy': 'Scegli un trainer marittimo: radio, decisioni di guardia e futuri moduli vela e nave in un unico dominio.', 'home.openCaptain': 'Apri Captain Ether', 'home.lostOars': 'Ripassa frasi', 'home.answerLog': 'Registro risposte', 'home.platform': 'Piattaforma', 'home.active': 'Disponibili', 'home.planned': 'In lavorazione', 'home.watches': 'Guardie', 'home.oars': 'Remi', 'home.gamesTitle': 'Giochi marittimi', 'home.management': 'Gestione', 'home.managementCopy': 'Una base condivisa per utenti, gruppi, equipaggi, competizioni e risultati. Lo scenario di gioco resta separato.',
    'disclaimer.eyebrow': 'Avvertenza',
    'auth.title': 'Captain Ether aspetta la guardia', 'auth.copy': 'Accedi con email per salvare guardie, suggerimenti e Lost Oars.', 'auth.getCode': 'Ricevi codice', 'auth.submit': 'Accedi', 'auth.requesting': 'Radio in preparazione...', 'auth.sent': 'Codice inviato via email.', 'auth.verifying': 'Controllo nominativo...',
    'levels.title': 'Scegli una guardia', 'levels.start': 'Inizia guardia', 'watch.instruction': 'Traduci in Sea Speak inglese', 'watch.answerLabel': 'La tua risposta', 'watch.answer': 'Rispondi', 'watch.hint': 'Suggerimento', 'watch.skip': 'Salta', 'watch.exitHub': 'Esci al hub',
    'result.standardAccepted': 'Accettato, ecco la forma standard', 'result.standardForm': 'Forma standard', 'summary.title': 'Guardia chiusa con calma', 'summary.continue': 'Continua', 'lost.title': 'Ripasso calmo', 'lost.empty': 'Tutto tranquillo: niente da ripassare ora.', 'lost.check': 'Controlla', 'locale': 'it-IT',
  },
  es: {
    'profile.login': 'Entrar', 'profile.logout': 'Salir', 'status.active': 'Disponible', 'status.prototype': 'Prototipo / borrador', 'status.preproduction': 'En diseño', 'status.planned': 'Planificado', 'status.soon': 'Próximamente', 'action.open': 'Abrir', 'action.prototypeCard': 'Ficha de prototipo', 'action.projectCard': 'Ficha de proyecto', 'action.details': 'Detalles',
    'language.eyebrow': 'Idioma', 'language.reminder': 'El idioma de la interfaz sigue la configuración del sistema. Los idiomas no compatibles inician en inglés.',
    'home.eyebrow': 'Hub de juegos', 'home.copy': 'Elige un entrenador marítimo: radio, decisiones de guardia y futuros módulos de vela y buque en un solo dominio.', 'home.openCaptain': 'Abrir Captain Ether', 'home.lostOars': 'Repasar frases', 'home.answerLog': 'Registro de respuestas', 'home.platform': 'Plataforma', 'home.active': 'Disponibles', 'home.planned': 'En curso', 'home.watches': 'Guardias', 'home.oars': 'Remos', 'home.gamesTitle': 'Juegos marítimos', 'home.management': 'Gestión', 'home.managementCopy': 'Una base compartida para usuarios, grupos, tripulaciones, competiciones y resultados. El escenario de juego queda separado.',
    'disclaimer.eyebrow': 'Aviso',
    'auth.title': 'Captain Ether espera la guardia', 'auth.copy': 'Entra con email para guardar guardias, pistas y Lost Oars.', 'auth.getCode': 'Obtener código', 'auth.submit': 'Entrar', 'auth.requesting': 'Preparando radio...', 'auth.sent': 'Código enviado por email.', 'auth.verifying': 'Comprobando indicativo...',
    'levels.title': 'Elige una guardia', 'levels.start': 'Iniciar guardia', 'watch.instruction': 'Traduce al Sea Speak inglés', 'watch.answerLabel': 'Tu respuesta', 'watch.answer': 'Responder', 'watch.hint': 'Pista', 'watch.skip': 'Saltar', 'watch.exitHub': 'Salir al hub',
    'result.standardAccepted': 'Aceptado, esta es la forma estándar', 'result.standardForm': 'Forma estándar', 'summary.title': 'Guardia cerrada con calma', 'summary.continue': 'Continuar', 'lost.title': 'Repaso tranquilo', 'lost.empty': 'Todo tranquilo: nada que repasar ahora.', 'lost.check': 'Comprobar', 'locale': 'es-ES',
  },
  sr: {
    'profile.login': 'Prijava', 'profile.logout': 'Odjava', 'status.active': 'Dostupno', 'status.prototype': 'Prototip / draft', 'status.preproduction': 'U projektovanju', 'status.planned': 'Planirano', 'status.soon': 'Uskoro', 'action.open': 'Otvori', 'action.prototypeCard': 'Kartica prototipa', 'action.projectCard': 'Kartica projekta', 'action.details': 'Detalji',
    'language.eyebrow': 'Jezik', 'language.reminder': 'Jezik interfejsa prati sistemska podešavanja. Nepodržani jezici startuju na engleskom.',
    'home.eyebrow': 'Hub igara', 'home.copy': 'Izaberi pomorski trening: radio-vezu, odluke na straži i buduće jedriličarske i brodske module u jednom domenu.', 'home.openCaptain': 'Otvori Captain Ether', 'home.lostOars': 'Doradi fraze', 'home.answerLog': 'Dnevnik odgovora', 'home.platform': 'Platforma', 'home.active': 'Dostupno', 'home.planned': 'U radu', 'home.watches': 'Straže', 'home.oars': 'Vesla', 'home.gamesTitle': 'Pomorske igre', 'home.management': 'Upravljanje', 'home.managementCopy': 'Zajednička osnova za korisnike, grupe, posade, takmičenja i rezultate. Scenario igre ostaje odvojen.',
    'disclaimer.eyebrow': 'Napomena',
    'auth.title': 'Captain Ether čeka stražu', 'auth.copy': 'Prijavi se emailom da sačuvaš straže, pomoći i Lost Oars.', 'auth.getCode': 'Dobij kod', 'auth.submit': 'Prijava', 'auth.requesting': 'Radio se priprema...', 'auth.sent': 'Kod je poslat emailom.', 'auth.verifying': 'Proveravamo pozivni znak...',
    'levels.title': 'Izaberi stražu', 'levels.start': 'Počni stražu', 'watch.instruction': 'Prevedi na engleski Sea Speak', 'watch.answerLabel': 'Tvoj odgovor', 'watch.answer': 'Odgovori', 'watch.hint': 'Pomoć', 'watch.skip': 'Preskoči', 'watch.exitHub': 'Izlaz u hub',
    'result.standardAccepted': 'Prihvaćeno, ovo je standardna forma', 'result.standardForm': 'Standardna forma', 'summary.title': 'Straža mirno zatvorena', 'summary.continue': 'Nastavi', 'lost.title': 'Mirna dorada', 'lost.empty': 'Sve mirno: sada nema šta da se doradi.', 'lost.check': 'Proveri', 'locale': 'sr-Latn',
  },
  zh: {
    'profile.login': '登录', 'profile.logout': '退出', 'status.active': '可用', 'status.prototype': '原型 / 草稿', 'status.preproduction': '设计中', 'status.planned': '已计划', 'status.soon': '即将推出', 'action.open': '打开', 'action.prototypeCard': '原型卡片', 'action.projectCard': '项目卡片', 'action.details': '详情',
    'language.eyebrow': '语言', 'language.reminder': '界面语言跟随系统设置。不支持的语言会以 English 启动。',
    'home.copy': '选择海事训练器：无线电通信、值班决策以及未来的帆船和船舶模块都在同一游戏域中。', 'home.openCaptain': '打开 Captain Ether', 'home.lostOars': '复习短语', 'home.answerLog': '答案日志', 'home.platform': '平台', 'home.active': '可用', 'home.planned': '进行中', 'home.watches': '值班', 'home.oars': '桨', 'home.gamesTitle': '海事游戏',
    'auth.title': 'Captain Ether 正在等待值班', 'auth.copy': '使用 email 登录以保存值班、提示和 Lost Oars。', 'auth.getCode': '获取代码', 'auth.codeLabel': '6 位代码', 'auth.submit': '登录', 'auth.requesting': '无线电预热中...', 'auth.sent': '代码已发送到 email。', 'auth.verifying': '正在检查呼号...',
    'levels.title': '选择值班', 'levels.start': '开始值班', 'watch.instruction': '翻译成英语 Sea Speak', 'watch.answerLabel': '你的答案', 'watch.answer': '回答', 'watch.hint': '提示', 'watch.skip': '跳过', 'watch.exitHub': '返回 hub',
    'result.standardAccepted': '已接受，这是标准形式', 'result.standardForm': '标准形式', 'summary.title': '值班已平稳结束', 'summary.continue': '继续', 'lost.title': '平稳复习', 'lost.empty': '一切正常：现在没有需要复习的内容。', 'lost.check': '检查', 'locale': 'zh-CN',
  },
};

Object.entries(LOCALE_OVERRIDES).forEach(([locale, values]) => {
  I18N[locale] = { ...I18N.en, ...values };
});

function normalizeLocale(value) {
  const code = String(value || '').toLowerCase().replace(/_/g, '-');
  if (code.startsWith('zh')) return 'zh';
  if (code.startsWith('sr') || code.startsWith('hr') || code.startsWith('bs') || code.startsWith('me')) return 'sr';
  if (code.startsWith('en')) return 'en';
  if (code.startsWith('ru')) return 'ru';
  if (code.startsWith('de')) return 'de';
  if (code.startsWith('it')) return 'it';
  if (code.startsWith('es')) return 'es';
  return null;
}

function detectLocale() {
  const candidates = [...(navigator.languages || []), navigator.language].filter(Boolean);
  for (const candidate of candidates) {
    const locale = normalizeLocale(candidate);
    if (locale && SUPPORTED_LOCALES.includes(locale)) return locale;
  }
  return 'en';
}

const locale = detectLocale();
document.documentElement.lang = t('locale').split('-').slice(0, locale === 'sr' ? 2 : 1).join('-');

function t(key) {
  return I18N[locale]?.[key] ?? I18N.en[key] ?? key;
}

function tf(key, values = {}) {
  return t(key).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
}

function localizeShellMetadata() {
  document.title = locale === 'ru' ? 'Brkovic Maritime Games' : 'Brkovic Maritime Games';
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('home.copy'));
  document.querySelector('meta[name="apple-mobile-web-app-title"]')?.setAttribute('content', 'Brkovic Games');
}

localizeShellMetadata();

function languageReminderMarkup() {
  return html`
    <aside class="language-reminder" aria-label="${escapeHtml(t('language.eyebrow'))}">
      <strong>${escapeHtml(t('language.eyebrow'))}</strong>
      <span>${escapeHtml(t('language.reminder'))}</span>
    </aside>
  `;
}

const app = document.querySelector('#app');
const profileArea = document.querySelector('#profileArea');

async function api(path, options = {}) {
  const response = await fetch(path, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(state.csrf ? { 'X-CSRF-Token': state.csrf } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok === false) {
    throw new Error(data.error || `Request failed: ${response.status}`);
  }
  return data;
}

function html(strings, ...values) {
  return strings.reduce((result, chunk, index) => result + chunk + (values[index] ?? ''), '');
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }[char]));
}

function renderProfile() {
  if (!state.user) {
    profileArea.innerHTML = `<button class="button ghost" id="loginTopButton">${escapeHtml(t('profile.login'))}</button>`;
    document.querySelector('#loginTopButton')?.addEventListener('click', renderLogin);
    return;
  }

  profileArea.innerHTML = html`
    <span class="profile-chip">${escapeHtml(state.user.email)}</span>
    <button class="button ghost" id="logoutButton">${escapeHtml(t('profile.logout'))}</button>
  `;
  document.querySelector('#logoutButton')?.addEventListener('click', async () => {
    await api('/api/auth/logout.php', { method: 'POST', body: '{}' });
    state.user = null;
    state.csrf = null;
    renderProfile();
    renderLogin();
  });
}

function isAdmin() {
  return state.user?.role === 'admin';
}

async function ensureRegistry() {
  if (state.registry.length) return state.registry;
  const data = await api('/api/games/registry.php');
  state.registry = data.registry.games || [];
  return state.registry;
}

function gameStatusCopy(game) {
  if (game.status === 'active') {
    return { label: localGameField(game, 'stage') || t('status.active'), className: '', action: t('action.open') };
  }
  if (game.status === 'prototype') {
    return { label: localGameField(game, 'stage') || t('status.prototype'), className: 'planned', action: t('action.prototypeCard') };
  }
  if (game.status === 'preproduction') {
    return { label: localGameField(game, 'stage') || t('status.preproduction'), className: 'planned', action: t('action.projectCard') };
  }
  return { label: localGameField(game, 'stage') || t(`status.${game.status}`) || t('status.soon'), className: 'planned', action: t('action.details') };
}

function localGameField(game, field) {
  return GAME_COPY[locale]?.[game.slug]?.[field]
    || GAME_COPY.en?.[game.slug]?.[field]
    || game[`${field}_${locale}`]
    || game[`${field}_en`]
    || game[`${field}_ru`]
    || '';
}

function gameCard(game) {
  const status = gameStatusCopy(game);
  const planned = game.status !== 'active';
  return html`
    <article class="game-card ${planned ? 'is-planned' : ''}">
      <span class="status-pill ${status.className}">${escapeHtml(status.label)}</span>
      <div>
        <strong>${escapeHtml(localGameField(game, 'title'))}</strong>
        <p class="muted">${escapeHtml(localGameField(game, 'description'))}</p>
        ${localGameField(game, 'hub_note') ? `<small class="game-note">${escapeHtml(localGameField(game, 'hub_note'))}</small>` : ''}
      </div>
      <button class="button ${planned ? '' : 'primary'}" data-game="${escapeHtml(game.slug)}">
        ${escapeHtml(status.action)}
      </button>
    </article>
  `;
}

async function loadProgress() {
  if (!state.user) return null;
  const data = await api('/api/captain-ether/progress.php');
  state.progress = data.progress;
  return state.progress;
}

function progressStepCopy(step) {
  return t(`home.progressStep.${step}`) || step || '';
}

function nextWatchActionLabel(summary) {
  if ((summary?.next_step || '') === 'clear_revision') {
    return t('summary.reviseNow');
  }
  if ((summary?.recommended_watch?.mode || '') === 'focused_branch') {
    return t('summary.nextBranchWatch');
  }
  return t('summary.nextWatch');
}

function branchLabel(branch) {
  return t(`branch.${branch}`) || branch || '';
}

function paceProfileLabel(profile) {
  return t(`pace.profile.${profile}`) || profile || '';
}

function paceIntensityLabel(intensity) {
  return t(`pace.intensity.${intensity}`) || intensity || '';
}

function watchPacingLabel(pacing) {
  if (!pacing || typeof pacing !== 'object') return t('empty.none');
  return `${paceProfileLabel(pacing.profile || 'steady')} / ${paceIntensityLabel(pacing.intensity || 'standard')}`;
}

function watchLengthCopy(length) {
  return tf('pace.calls', { count: length ?? 0 });
}

function hintModeLabel(mode) {
  return t(`hint.mode.${mode}`) || mode || '';
}

function skipModeLabel(mode) {
  return t(`skip.mode.${mode}`) || mode || '';
}

function summaryDriverCopy(driver) {
  if (!driver || typeof driver !== 'object') return '';
  switch (driver.kind) {
    case 'revision_load':
    case 'hint_load':
    case 'spelling_load':
    case 'rhythm_build':
    case 'watch_errors':
    case 'consistency':
      return tf(`summary.driver.${driver.kind}`, { count: driver.count ?? 0 });
    case 'branch_pressure':
      return tf('summary.driver.branch_pressure', { branch: branchLabel(driver.branch || ''), count: driver.count ?? 0 });
    case 'type_pressure':
      return tf('summary.driver.type_pressure', { type: questionTypeLabel(driver.type || 'phrase'), count: driver.count ?? 0 });
    case 'step_up_ready':
      return tf('summary.driver.step_up_ready', { level: levelLabel(driver.level || 'beginner'), count: driver.count ?? 0 });
    default:
      return '';
  }
}

function labeledCountMapMarkup(map, labeler = (key) => key) {
  const entries = Object.entries(map || {});
  if (!entries.length) return `<span class="muted">${escapeHtml(t('empty.none'))}</span>`;
  return entries.map(([key, value]) => html`
    <span class="mini-pill">${escapeHtml(labeler(key))} ${escapeHtml(value)}</span>
  `).join('');
}

function progressRecentWatchMarkup(progress) {
  const recent = progress?.recent_watch;
  if (!recent) {
    return `<p class="muted">${escapeHtml(t('home.progressEmpty'))}</p>`;
  }

  return html`
    <div class="stat-grid progress-overview__recent">
      <div class="stat-card"><small>${escapeHtml(t('summary.clean'))}</small><strong>${recent.clean}</strong></div>
      <div class="stat-card"><small>${escapeHtml(t('summary.hint'))}</small><strong>${recent.hint}</strong></div>
      <div class="stat-card"><small>${escapeHtml(t('summary.revision'))}</small><strong>${recent.lost}</strong></div>
      <div class="stat-card"><small>${escapeHtml(t('home.watches'))}</small><strong>${progress.completed_watches ?? 0}</strong></div>
    </div>
  `;
}

function progressOverviewMarkup() {
  if (!state.user || !state.progress) return '';

  const progress = state.progress;
  const weakSummary = progress.weak_points_summary || {};
  const recommendedWatch = progress.recommended_watch || { level: progress.recommended_level || 'beginner', mode: 'mixed' };
  const recommendedLevel = recommendedWatch.level || progress.recommended_level || 'beginner';
  const recommendedBranch = progress.recommended_branch || recommendedWatch.branch || '';
  const recommendedPacing = recommendedWatch.pacing || { profile: 'steady', intensity: 'standard' };
  const recommendedLength = recommendedWatch.length || recommendedPacing.target_length || 0;

  return html`
    <section class="panel progress-overview">
      <div class="section-head">
        <p class="eyebrow">${escapeHtml(t('levels.eyebrow'))}</p>
        <h2>${escapeHtml(t('home.progressTitle'))}</h2>
        <p class="muted">${escapeHtml(t('home.progressCopy'))}</p>
      </div>
      <div class="progress-overview__grid">
        <div class="progress-overview__meta">
          <div class="stat-grid">
            <div class="stat-card"><small>${escapeHtml(t('home.progressLastLevel'))}</small><strong>${escapeHtml(levelLabel(progress.last_level || 'beginner'))}</strong></div>
            <div class="stat-card"><small>${escapeHtml(t('home.progressRecommended'))}</small><strong>${escapeHtml(levelLabel(recommendedLevel))}</strong></div>
            <div class="stat-card"><small>${escapeHtml(t('home.progressBranch'))}</small><strong>${escapeHtml(recommendedBranch ? branchLabel(recommendedBranch) : t('empty.none'))}</strong></div>
            <div class="stat-card"><small>${escapeHtml(t('home.oars'))}</small><strong>${progress.unresolved_lost_oars ?? 0}</strong></div>
          </div>
          <div>
            <p class="eyebrow">${escapeHtml(t('home.progressNextStep'))}</p>
            <p class="muted">${escapeHtml(progressStepCopy(progress.next_step))}</p>
            <p class="muted">${escapeHtml(t('home.progressPace'))}: ${escapeHtml(watchPacingLabel(recommendedPacing))} · ${escapeHtml(watchLengthCopy(recommendedLength))}</p>
          </div>
          <div class="actions">
            <button class="button primary" id="recommendedWatchButton">${escapeHtml(t('home.progressAction'))}</button>
            <button class="button amber" id="progressLostOarsButton">${escapeHtml(t('home.lostOars'))}</button>
          </div>
        </div>
        <div class="progress-overview__meta">
          <div>
            <p class="eyebrow">${escapeHtml(t('home.progressWeakTypes'))}</p>
            <div class="pill-row">${labeledCountMapMarkup(weakSummary.by_type, questionTypeLabel)}</div>
          </div>
          <div>
            <p class="eyebrow">${escapeHtml(t('home.progressWeakBranches'))}</p>
            <div class="pill-row">${labeledCountMapMarkup(weakSummary.by_branch, branchLabel)}</div>
          </div>
          <div>
            <p class="eyebrow">${escapeHtml(t('home.progressTopTopics'))}</p>
            <div class="pill-row">${countMapMarkup(weakSummary.top_topics)}</div>
          </div>
          <div>
            <p class="eyebrow">${escapeHtml(t('home.progressRecent'))}</p>
            ${progressRecentWatchMarkup(progress)}
          </div>
        </div>
      </div>
    </section>
  `;
}

async function renderHome() {
  await ensureRegistry();
  if (state.user) {
    await loadProgress().catch(() => null);
  }
  const activeGames = state.registry.filter((game) => game.status === 'active').length;
  const plannedGames = state.registry.length - activeGames;

  app.innerHTML = html`
    ${languageReminderMarkup()}
    <section class="hero-grid">
      <div class="panel">
        <p class="eyebrow">${escapeHtml(t('home.eyebrow'))}</p>
        <h1 class="hero-title">Maritime Games</h1>
        <p class="muted">${escapeHtml(t('home.copy'))}</p>
        <div class="actions">
          <button class="button primary" id="startWatchButton">${escapeHtml(t('home.openCaptain'))}</button>
          <button class="button amber" id="lostOarsButton">${escapeHtml(t('home.lostOars'))}</button>
          ${isAdmin() ? `<button class="button" id="answerLogButton">${escapeHtml(t('home.answerLog'))}</button>` : ''}
        </div>
      </div>
      <aside class="panel">
        <p class="eyebrow">${escapeHtml(t('home.platform'))}</p>
        <div class="stat-grid">
          <div class="stat-card"><small>${escapeHtml(t('home.active'))}</small><strong>${activeGames}</strong></div>
          <div class="stat-card"><small>${escapeHtml(t('home.planned'))}</small><strong>${plannedGames}</strong></div>
          <div class="stat-card"><small>${escapeHtml(t('home.watches'))}</small><strong>${state.progress?.completed_watches ?? 0}</strong></div>
          <div class="stat-card"><small>${escapeHtml(t('home.oars'))}</small><strong>${state.progress?.unresolved_lost_oars ?? 0}</strong></div>
        </div>
      </aside>
    </section>

    ${progressOverviewMarkup()}

    <section class="panel">
      <div class="section-head">
        <p class="eyebrow">${escapeHtml(t('home.eyebrow'))}</p>
        <h2>${escapeHtml(t('home.gamesTitle'))}</h2>
      </div>
      <div class="game-grid">
        ${state.registry.map(gameCard).join('')}
      </div>
    </section>

    <section class="panel">
      <p class="eyebrow">${escapeHtml(t('home.management'))}</p>
      <p class="admin-note muted">${escapeHtml(t('home.managementCopy'))}</p>
    </section>

    <section class="panel disclaimer-panel">
      <p class="eyebrow">${escapeHtml(t('disclaimer.eyebrow'))}</p>
      <h2>${escapeHtml(t('disclaimer.title'))}</h2>
      <p class="muted">${escapeHtml(t('disclaimer.copy1'))}</p>
      <p class="muted">${escapeHtml(t('disclaimer.copy2'))}</p>
      <ul class="source-list">
        <li>IMO Standard Marine Communication Phrases, Resolution A.918(22).</li>
        <li>STCW Convention and STCW Code requirements for understanding and using SMCP where applicable.</li>
        <li>COLREG 1972 — Convention on the International Regulations for Preventing Collisions at Sea.</li>
        <li>ITU Radio Regulations, ITU Maritime Manual and ITU-R M.1171 radiotelephony procedures.</li>
        <li>International Code of Signals and International Radiotelephony Spelling Alphabet.</li>
        <li>IALA Maritime Buoyage System and IHO Hydrographic Dictionary S-32 for navigation terminology references.</li>
      </ul>
      <p class="muted">${escapeHtml(t('disclaimer.copy3'))}</p>
      <p class="muted">${escapeHtml(t('disclaimer.copy4'))}</p>
    </section>
  `;

  document.querySelector('#startWatchButton')?.addEventListener('click', () => openGame('captain_ether'));
  document.querySelector('#lostOarsButton')?.addEventListener('click', () => {
    if (!state.user) renderLogin();
    else renderLostOars();
  });
  document.querySelector('#recommendedWatchButton')?.addEventListener('click', () => {
    const recommendation = state.progress?.recommended_watch || { level: state.progress?.recommended_level || 'beginner', mode: 'mixed' };
    startWatch(recommendation.level || 'beginner', recommendation);
  });
  document.querySelector('#progressLostOarsButton')?.addEventListener('click', () => {
    if (!state.user) renderLogin();
    else renderLostOars();
  });
  document.querySelector('#answerLogButton')?.addEventListener('click', renderAnswerLog);
  document.querySelectorAll('[data-game]')?.forEach((button) => {
    button.addEventListener('click', () => openGame(button.dataset.game));
  });
}

function routeSlugFromPath() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const match = state.registry.find((game) => game.entry_route === path);
  return match?.slug || null;
}

function gameFromCurrentPath() {
  const slug = routeSlugFromPath();
  return slug ? state.registry.find((game) => game.slug === slug) : null;
}

async function renderCurrentRoute() {
  await ensureRegistry();
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/' || path === '/index.html') {
    await renderHome();
    return;
  }

  const game = gameFromCurrentPath();
  if (game) {
    renderGameRoute(game);
    return;
  }

  renderNotFoundRoute(path);
}

function navigateHome() {
  window.history.pushState({}, '', '/');
  renderHome();
}

function openGame(slug) {
  const game = state.registry.find((item) => item.slug === slug);
  if (!game) return;
  window.history.pushState({}, '', game.entry_route || '/');
  renderGameRoute(game);
}

function renderGameRoute(game) {
  if (game.slug === 'captain_ether') {
    renderCaptainFirstRun();
    return;
  }
  renderGameBrief(game);
}

function renderNotFoundRoute(path) {
  app.innerHTML = html`
    ${languageReminderMarkup()}
    <section class="panel product-brief">
      <p class="eyebrow">${escapeHtml(t('notFound.eyebrow'))}</p>
      <h1>${escapeHtml(t('notFound.title'))}</h1>
      <p class="muted">${tf('notFound.copy', { path: `<strong>${escapeHtml(path)}</strong>` })}</p>
      <div class="actions">
        <button class="button primary" id="notFoundHomeButton">${escapeHtml(t('nav.games'))}</button>
      </div>
    </section>
  `;
  document.querySelector('#notFoundHomeButton')?.addEventListener('click', navigateHome);
}

function renderGameBrief(game) {
  const status = gameStatusCopy(game);
  const launchRoute = game.launch_route || '';
  app.innerHTML = html`
    ${languageReminderMarkup()}
    <section class="panel product-brief">
      <p class="eyebrow">${escapeHtml(status.label)}</p>
      <h1>${escapeHtml(localGameField(game, 'title'))}</h1>
      <p class="muted">${escapeHtml(localGameField(game, 'description'))}</p>
      ${localGameField(game, 'hub_note') ? `<p class="muted">${escapeHtml(localGameField(game, 'hub_note'))}</p>` : ''}
      <div class="stat-grid product-brief__meta">
        <div class="stat-card"><small>${escapeHtml(t('brief.status'))}</small><strong>${escapeHtml(status.label)}</strong></div>
        <div class="stat-card"><small>${escapeHtml(t('brief.route'))}</small><strong>${escapeHtml(game.entry_route || '/')}</strong></div>
        ${launchRoute ? `<div class="stat-card"><small>${escapeHtml(t('brief.prototype'))}</small><strong>${escapeHtml(launchRoute)}</strong></div>` : ''}
      </div>
      <div class="actions">
        <button class="button" id="briefHomeButton">${escapeHtml(t('nav.games'))}</button>
        ${game.status === 'active' ? `<button class="button primary" id="briefOpenButton">${escapeHtml(t('brief.openGame'))}</button>` : ''}
        ${launchRoute ? `<button class="button primary" id="briefLaunchPrototypeButton">${escapeHtml(t('brief.launchPrototype'))}</button>` : ''}
      </div>
    </section>
  `;
  document.querySelector('#briefHomeButton')?.addEventListener('click', navigateHome);
  document.querySelector('#briefOpenButton')?.addEventListener('click', () => renderGameRoute(game));
  document.querySelector('#briefLaunchPrototypeButton')?.addEventListener('click', () => {
    window.location.href = launchRoute;
  });
}

function levelLabel(level) {
  return t(`level.${level}`) || t('level.beginner');
}

function questionTypeLabel(type) {
  return t(`type.${type}`) || t('type.phrase');
}

function lostReasonLabel(reason) {
  return t(`lostReason.${reason}`) || t('lostReason.wrong');
}

function renderLogin(options = {}) {
  const title = options.title || t('auth.title');
  const copy = options.copy || t('auth.copy');
  const afterLogin = typeof options.afterLogin === 'function' ? options.afterLogin : null;
  if (afterLogin) {
    state.postLoginAction = afterLogin;
  }
  app.innerHTML = html`
    ${languageReminderMarkup()}
    <section class="panel auth-panel">
      <div>
        <p class="eyebrow">${escapeHtml(t('auth.eyebrow'))}</p>
        <h1>${escapeHtml(title)}</h1>
        <p class="muted">${escapeHtml(copy)}</p>
      </div>
      <form class="auth-form" id="loginForm">
        <label>
          <span>${escapeHtml(t('auth.email'))}</span>
          <input type="email" name="email" autocomplete="email" required placeholder="name@example.com" />
        </label>
        <button class="button primary" type="submit">${escapeHtml(t('auth.getCode'))}</button>
      </form>
      <form class="auth-form is-hidden" id="codeForm">
        <label>
          <span>${escapeHtml(t('auth.codeLabel'))}</span>
          <input type="text" name="code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" required placeholder="000000" />
        </label>
        <button class="button primary" type="submit">${escapeHtml(t('auth.submit'))}</button>
      </form>
      <p class="status-line" id="authStatus" role="status" aria-live="polite"></p>
    </section>
  `;
  let email = '';
  const loginForm = document.querySelector('#loginForm');
  const codeForm = document.querySelector('#codeForm');
  const status = document.querySelector('#authStatus');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    email = new FormData(loginForm).get('email');
    status.textContent = t('auth.requesting');
    try {
      const data = await api('/api/auth/request-code.php', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      loginForm.classList.add('is-hidden');
      codeForm.classList.remove('is-hidden');
      codeForm.querySelector('input')?.focus();
      status.textContent = data.dev_code
        ? tf('auth.localCode', { code: data.dev_code })
        : t('auth.sent');
    } catch (error) {
      status.textContent = error.message;
    }
  });

  codeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const code = new FormData(codeForm).get('code');
    status.textContent = t('auth.verifying');
    try {
      const data = await api('/api/auth/verify-code.php', {
        method: 'POST',
        body: JSON.stringify({ email, code }),
      });
      state.user = data.user;
      state.csrf = data.csrf;
      renderProfile();
      const next = state.postLoginAction;
      state.postLoginAction = null;
      if (typeof next === 'function') {
        await next();
      } else {
        await renderCurrentRoute();
      }
    } catch (error) {
      status.textContent = error.message;
    }
  });
}

function renderCaptainFirstRun(options = {}) {
  const isReady = !!state.user || options.ready;
  app.innerHTML = html`
    ${languageReminderMarkup()}
    <section class="captain-first-run">
      <div class="panel captain-first-run__hero">
        <p class="eyebrow">${escapeHtml(t('firstRun.eyebrow'))}</p>
        <h1>${escapeHtml(isReady ? t('firstRun.readyTitle') : t('firstRun.title'))}</h1>
        <p class="muted">${escapeHtml(isReady ? t('firstRun.readyCopy') : t('firstRun.copy'))}</p>
        <div class="first-watch-card" aria-label="${escapeHtml(t('firstRun.beginnerTitle'))}">
          <span class="status-pill">${escapeHtml(t('firstRun.beginnerBadge'))}</span>
          <strong>${escapeHtml(t('firstRun.beginnerTitle'))}</strong>
          <p class="muted">${escapeHtml(t('firstRun.beginnerCopy'))}</p>
        </div>
        <div class="actions">
          <button class="button primary" id="firstWatchButton">${escapeHtml(state.user ? t('firstRun.primary') : t('firstRun.loginPrimary'))}</button>
          <button class="button ghost" id="firstRunBackButton">${escapeHtml(t('firstRun.backHub'))}</button>
        </div>
        <p class="status-line" id="firstRunStatus" role="status" aria-live="polite"></p>
      </div>
      <aside class="panel captain-first-run__side">
        <p class="eyebrow">${escapeHtml(t('firstRun.whatTitle'))}</p>
        <ol class="first-run-steps">
          <li>${escapeHtml(t('firstRun.what1'))}</li>
          <li>${escapeHtml(t('firstRun.what2'))}</li>
          <li>${escapeHtml(t('firstRun.what3'))}</li>
        </ol>
        <div class="first-run-secondary">
          <p class="eyebrow">${escapeHtml(t('firstRun.otherTitle'))}</p>
          <p class="muted">${escapeHtml(t('firstRun.otherCopy'))}</p>
          <button class="button" id="toggleLevelsButton" type="button" aria-expanded="false">${escapeHtml(t('firstRun.showLevels'))}</button>
        </div>
      </aside>
    </section>
    <section class="panel captain-levels captain-levels--secondary is-hidden" id="secondaryLevels">
      <p class="eyebrow">${escapeHtml(t('levels.eyebrow'))}</p>
      <h2>${escapeHtml(t('levels.title'))}</h2>
      <p class="muted">${escapeHtml(t('levels.copy'))}</p>
      <div class="game-grid">
        ${['intermediate', 'advanced'].map((level) => html`
          <article class="game-card">
            <span class="status-pill">${levelLabel(level)}</span>
            <strong>${levelCopy(level).title}</strong>
            <p class="muted">${levelCopy(level).text}</p>
            <button class="button" data-level="${level}">${escapeHtml(t('levels.start'))}</button>
          </article>
        `).join('')}
      </div>
      ${isAdmin() ? `<div class="actions"><button class="button" id="answerLogLevelButton">${escapeHtml(t('home.answerLog'))}</button></div>` : ''}
    </section>
  `;

  document.querySelector('#firstWatchButton')?.addEventListener('click', startFirstWatchFlow);
  document.querySelector('#firstRunBackButton')?.addEventListener('click', navigateHome);
  document.querySelector('#toggleLevelsButton')?.addEventListener('click', (event) => {
    const levels = document.querySelector('#secondaryLevels');
    const expanded = !levels?.classList.contains('is-hidden');
    levels?.classList.toggle('is-hidden', expanded);
    event.currentTarget.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    event.currentTarget.textContent = expanded ? t('firstRun.showLevels') : t('firstRun.hideLevels');
  });
  document.querySelectorAll('#secondaryLevels [data-level]').forEach((button) => {
    button.addEventListener('click', () => {
      const level = button.dataset.level;
      if (!state.user) {
        renderLogin({
          title: t('auth.firstWatchTitle'),
          copy: t('auth.firstWatchCopy'),
          afterLogin: () => startWatch(level),
        });
        return;
      }
      startWatch(level);
    });
  });
  document.querySelector('#answerLogLevelButton')?.addEventListener('click', renderAnswerLog);
}

function startFirstWatchFlow() {
  if (!state.user) {
    renderLogin({
      title: t('auth.firstWatchTitle'),
      copy: t('auth.firstWatchCopy'),
      afterLogin: () => startWatch('beginner', { mode: 'mixed' }),
    });
    return;
  }
  startWatch('beginner', { mode: 'mixed' });
}

function renderLevelSelect() {
  app.innerHTML = html`
    ${languageReminderMarkup()}
    <section class="panel captain-levels">
      <p class="eyebrow">${escapeHtml(t('levels.eyebrow'))}</p>
      <h1>${escapeHtml(t('levels.title'))}</h1>
      <p class="muted">${escapeHtml(t('levels.copy'))}</p>
      <div class="game-grid">
        ${['beginner', 'intermediate', 'advanced'].map((level) => html`
          <article class="game-card">
            <span class="status-pill">${levelLabel(level)}</span>
            <strong>${levelCopy(level).title}</strong>
            <p class="muted">${levelCopy(level).text}</p>
            <button class="button primary" data-level="${level}">${escapeHtml(t('levels.start'))}</button>
          </article>
        `).join('')}
      </div>
      ${isAdmin() ? `<div class="actions"><button class="button" id="answerLogLevelButton">${escapeHtml(t('home.answerLog'))}</button></div>` : ''}
    </section>
  `;
  document.querySelectorAll('[data-level]').forEach((button) => {
    button.addEventListener('click', () => startWatch(button.dataset.level));
  });
  document.querySelector('#answerLogLevelButton')?.addEventListener('click', renderAnswerLog);
}

function levelCopy(level) {
  return {
    beginner: { title: t('levelCopy.beginnerTitle'), text: t('levelCopy.beginnerText') },
    intermediate: { title: t('levelCopy.intermediateTitle'), text: t('levelCopy.intermediateText') },
    advanced: { title: t('levelCopy.advancedTitle'), text: t('levelCopy.advancedText') },
  }[level];
}

async function startWatch(level, options = {}) {
  app.innerHTML = `<section class="panel"><p class="status-line" role="status" aria-live="polite">${escapeHtml(t('status.loadingRadio'))}</p></section>`;
  const body = { level };
  if (options && typeof options === 'object') {
    if (options.mode) body.mode = options.mode;
    if (options.branch) body.branch = options.branch;
    if (options.learner_stream) body.learner_stream = options.learner_stream;
  }
  const data = await api('/api/captain-ether/start-watch.php', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  state.watch = data.watch;
  state.currentQuestion = data.watch.current;
  state.usedHint = false;
  state.lastResult = null;
  state.answerBusy = false;
  state.finishBusy = false;
  state.finalResult = null;
  renderWatch();
}

function renderWatch() {
  const q = state.currentQuestion;
  const finalResult = state.finalResult;
  const controlsLocked = state.answerBusy || state.finishBusy || !!finalResult;
  const progress = Math.round((q.index / state.watch.total) * 100);
  const remainingAfterThis = state.watch.total - q.index - 1;
  const hintPolicy = state.watch.hint_policy || {};
  const hintMode = q.hint_mode || hintPolicy.mode || 'standard';
  const hintReward = q.hint_reward ?? hintPolicy.reward ?? 0.5;
  const hintAvailable = q.hint_available !== false;
  const skipPolicy = state.watch.skip_policy || {};
  const skipMode = q.skip_mode || skipPolicy.mode || 'standard';
  const skipReward = q.skip_reward ?? skipPolicy.reward ?? 0;
  const skipAvailable = q.skip_available !== false;
  app.innerHTML = html`
    <section class="watch-layout captain-watch" aria-busy="${state.answerBusy || state.finishBusy ? 'true' : 'false'}">
      <div class="panel question-card">
        <header class="watch-hud">
          <div>
            <p class="eyebrow">${escapeHtml(t('watch.eyebrow'))}</p>
            <strong>${q.index + 1} / ${state.watch.total}</strong>
          </div>
          <div class="watch-progress" aria-label="${escapeHtml(tf('watch.progressLabel', { index: q.index, total: state.watch.total }))}">
            <span>${remainingAfterThis === 0 ? escapeHtml(t('watch.finalCall')) : escapeHtml(tf('watch.remaining', { count: remainingAfterThis }))}</span>
            <div class="progress-line" style="--progress:${progress}%"><span></span></div>
          </div>
        </header>

        <section class="question-stage" aria-labelledby="questionPrompt">
          <div class="question-meta">
            <span>${escapeHtml(t('watch.instruction'))}</span>
            <small>${questionTypeLabel(q.type)} · ${escapeHtml(q.topic)}</small>
          </div>
          <p class="question-prompt" id="questionPrompt">${escapeHtml(q.prompt)}</p>
        </section>

        <div id="resultBox" class="result-box result-box--previous ${resultClass(finalResult || state.lastResult)} ${finalResult || state.lastResult ? '' : 'is-hidden'}">
          ${finalResult ? resultMarkup(finalResult, t('result.finalComplete')) : (state.lastResult ? resultMarkup(state.lastResult, t('watch.previous')) : '')}
        </div>

        <form class="answer-form" id="answerForm">
          <label class="answer-field" for="answerInput">
            <span>${escapeHtml(t('watch.answerLabel'))}</span>
            <input id="answerInput" autocomplete="off" placeholder="English radio phrase" ${controlsLocked ? 'disabled' : ''} />
          </label>
          <button class="button primary" id="answerButton" type="${finalResult ? 'button' : 'submit'}" ${state.answerBusy || state.finishBusy ? 'disabled' : ''}>
            ${escapeHtml(state.answerBusy ? t('watch.checking') : (state.finishBusy ? t('watch.closing') : (finalResult ? t('watch.viewSummary') : t('watch.answer'))))}
          </button>
        </form>
        <div class="watch-tools">
          <button class="button" id="hintButton" type="button" ${hintAvailable && !controlsLocked ? '' : 'disabled'}>${escapeHtml(t('watch.hintStep'))}</button>
          <button class="button ghost" id="skipButton" type="button" ${skipAvailable && !controlsLocked ? '' : 'disabled'}>${escapeHtml(t('watch.skip'))}</button>
        </div>
        <div id="hintBox" class="result-box result-box--hint is-hidden">
          <span class="result-box__label">${escapeHtml(t('watch.hintLabel'))}</span>
          <p>${escapeHtml(q.hint || t('watch.noHint'))}</p>
        </div>
        <p class="status-line" id="watchStatus" role="status" aria-live="polite"></p>
      </div>
      <aside class="panel watch-side">
        <p class="eyebrow">${escapeHtml(t('watch.context'))}</p>
        <div class="watch-side__grid">
          <div><small>${escapeHtml(t('watch.level'))}</small><strong>${levelLabel(q.level)}</strong></div>
          <div><small>${escapeHtml(t('watch.type'))}</small><strong>${questionTypeLabel(q.type)}</strong></div>
          <div><small>${escapeHtml(t('watch.topic'))}</small><strong>${escapeHtml(q.topic)}</strong></div>
          <div><small>${escapeHtml(hintMode === 'sparse' ? t('watch.hintSparse') : (hintMode === 'supportive' ? t('watch.hintSupportive') : t('watch.hintStandard')))}</small><strong>${escapeHtml(hintModeLabel(hintMode))} · ${hintReward}</strong></div>
          <div><small>${escapeHtml(skipMode === 'limited' ? t('watch.skipLimited') : (skipMode === 'supportive' ? t('watch.skipSupportive') : t('watch.skipStandard')))}</small><strong>${escapeHtml(skipModeLabel(skipMode))} · ${skipReward}</strong></div>
        </div>
        <div class="partner-slot" aria-label="${escapeHtml(t('watch.partnerTitle'))}">
          <strong>${escapeHtml(t('watch.partnerTitle'))}</strong>
          <p>${escapeHtml(t('watch.partnerCopy'))}</p>
        </div>
        <button class="button ghost" id="backHomeButton">${escapeHtml(t('watch.exitHub'))}</button>
      </aside>
    </section>
  `;

  if (!finalResult) document.querySelector('#answerInput')?.focus();
  document.querySelector('#hintButton')?.addEventListener('click', () => {
    if (!hintAvailable) return;
    state.usedHint = true;
    document.querySelector('#hintBox')?.classList.remove('is-hidden');
  });
  document.querySelector('#answerForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    submitAnswer(false);
  });
  document.querySelector('#answerButton')?.addEventListener('click', () => {
    if (state.finalResult) finishWatch();
  });
  document.querySelector('#skipButton')?.addEventListener('click', () => {
    if (!skipAvailable) return;
    submitAnswer(true);
  });
  document.querySelector('#backHomeButton')?.addEventListener('click', navigateHome);
}

function resultClass(result) {
  if (!result) return '';
  if (result.correct && ['spelling', 'variant', 'understood_non_standard'].includes(result.match_type)) return 'is-soft-correct';
  return result.correct ? 'is-correct' : 'is-wrong';
}

function resultTitle(result) {
  if (result?.message_key) {
    return t(result.message_key);
  }
  if (result.correct && ['spelling', 'variant', 'understood_non_standard'].includes(result.match_type)) {
    return t('result.standardAccepted');
  }
  return result.message;
}

function resultMarkup(result, label = null) {
  return html`
    ${label ? `<span class="result-box__label">${escapeHtml(label)}</span>` : ''}
    <strong>${escapeHtml(resultTitle(result))}</strong>
    ${result.user_answer !== undefined ? `<p><span>${escapeHtml(t('result.youWrote'))}</span>${escapeHtml(result.user_answer || '—')}</p>` : ''}
    <p><span>${escapeHtml(t('result.standardForm'))}</span>${escapeHtml(result.target_text)}</p>
  `;
}

async function submitAnswer(skipped) {
  if (state.answerBusy || state.finishBusy || state.finalResult) return;
  const input = document.querySelector('#answerInput');
  const submittedAnswer = skipped ? '' : input.value;
  const status = document.querySelector('#watchStatus');
  state.answerBusy = true;
  document.querySelector('#answerButton')?.setAttribute('disabled', 'disabled');
  document.querySelector('#hintButton')?.setAttribute('disabled', 'disabled');
  document.querySelector('#skipButton')?.setAttribute('disabled', 'disabled');
  input?.setAttribute('disabled', 'disabled');
  if (status) status.textContent = t('watch.checking');

  try {
    const data = await api('/api/captain-ether/submit-answer.php', {
      method: 'POST',
      body: JSON.stringify({
        watch_id: state.watch.id,
        index: state.currentQuestion.index,
        answer: submittedAnswer,
        used_hint: state.usedHint,
        skipped,
      }),
    });

    data.user_answer = submittedAnswer;
    state.answerBusy = false;
    state.lastResult = data;
    if (data.done) {
      state.finalResult = data;
      renderWatch();
      return;
    }
    state.currentQuestion = data.next;
    state.usedHint = false;
    renderWatch();
  } catch (error) {
    state.answerBusy = false;
    document.querySelector('#answerButton')?.removeAttribute('disabled');
    if (state.currentQuestion?.hint_available !== false) {
      document.querySelector('#hintButton')?.removeAttribute('disabled');
    }
    if (state.currentQuestion?.skip_available !== false) {
      document.querySelector('#skipButton')?.removeAttribute('disabled');
    }
    input?.removeAttribute('disabled');
    if (status) status.textContent = `${t('watch.answerError')} ${error.message}`;
  }
}

async function finishWatch() {
  if (state.finishBusy) return;
  state.finishBusy = true;
  const status = document.querySelector('#watchStatus');
  const button = document.querySelector('#answerButton');
  if (status) status.textContent = t('watch.closing');
  if (button) {
    button.setAttribute('disabled', 'disabled');
    button.textContent = t('watch.closing');
  }
  let data;
  try {
    data = await api('/api/captain-ether/finish-watch.php', {
      method: 'POST',
      body: JSON.stringify({ watch_id: state.watch.id }),
    });
  } catch (error) {
    state.finishBusy = false;
    if (button) {
      button.removeAttribute('disabled');
      button.textContent = t('watch.viewSummary');
    }
    if (status) status.textContent = error.message;
    return;
  }
  state.finalResult = null;
  const s = data.summary;
  const recommendedLevel = s.recommended_level || 'beginner';
  const recommendedBranch = s.recommended_branch || '';
  const recommendedWatch = s.recommended_watch || { level: recommendedLevel, mode: 'mixed' };
  const recommendedPacing = recommendedWatch.pacing || { profile: 'steady', intensity: 'standard' };
  const recommendedLength = recommendedWatch.length || recommendedPacing.target_length || 0;
  const debrief = s.debrief || {};
  const drivers = Array.isArray(debrief.drivers) ? debrief.drivers.map(summaryDriverCopy).filter(Boolean) : [];
  const summaryTitle = s.title_key ? t(s.title_key) : t('summary.title');
  const summaryGuidance = s.guidance_key ? t(s.guidance_key) : '';
  app.innerHTML = html`
    <section class="panel watch-summary">
      <p class="eyebrow">${escapeHtml(t('summary.eyebrow'))}</p>
      <h1>${escapeHtml(summaryTitle)}</h1>
      ${summaryGuidance ? `<p class="muted">${escapeHtml(summaryGuidance)}</p>` : ''}
      <div class="stat-grid">
        <div class="stat-card"><small>${escapeHtml(t('summary.clean'))}</small><strong>${s.clean}</strong></div>
        <div class="stat-card"><small>${escapeHtml(t('summary.hint'))}</small><strong>${s.hint}</strong></div>
        <div class="stat-card"><small>${escapeHtml(t('summary.revision'))}</small><strong>${s.unresolved_lost_oars}</strong></div>
        <div class="stat-card"><small>${escapeHtml(t('summary.score'))}</small><strong>${s.final_score}</strong></div>
      </div>
      <div class="progress-overview__meta watch-summary__next">
        <div>
          <p class="eyebrow">${escapeHtml(t('summary.nextTitle'))}</p>
          <p class="muted">${escapeHtml(progressStepCopy(s.next_step))}</p>
        </div>
        <div class="stat-grid progress-overview__recent">
          <div class="stat-card"><small>${escapeHtml(t('summary.recommendedLevel'))}</small><strong>${escapeHtml(levelLabel(recommendedLevel))}</strong></div>
          <div class="stat-card"><small>${escapeHtml(t('summary.recommendedBranch'))}</small><strong>${escapeHtml(recommendedBranch ? branchLabel(recommendedBranch) : t('empty.none'))}</strong></div>
          <div class="stat-card"><small>${escapeHtml(t('summary.recommendedPace'))}</small><strong>${escapeHtml(watchPacingLabel(recommendedPacing))}</strong></div>
          <div class="stat-card"><small>${escapeHtml(t('summary.recommendedLength'))}</small><strong>${escapeHtml(watchLengthCopy(recommendedLength))}</strong></div>
        </div>
      </div>
      <div class="progress-overview__meta watch-summary__debrief">
        <div>
          <p class="eyebrow">${escapeHtml(t('summary.debriefTitle'))}</p>
          <div class="pill-row">
            ${drivers.length ? drivers.map((driver) => `<span class="mini-pill amber">${escapeHtml(driver)}</span>`).join('') : `<span class="muted">${escapeHtml(t('empty.none'))}</span>`}
          </div>
        </div>
        <div>
          <p class="eyebrow">${escapeHtml(t('summary.pressureBranches'))}</p>
          <div class="pill-row">${labeledCountMapMarkup(debrief.pressure_by_branch, branchLabel)}</div>
        </div>
        <div>
          <p class="eyebrow">${escapeHtml(t('summary.pressureTypes'))}</p>
          <div class="pill-row">${labeledCountMapMarkup(debrief.pressure_by_type, questionTypeLabel)}</div>
        </div>
      </div>
      <div class="actions">
        <button class="button amber" id="collectButton">${escapeHtml(t('home.lostOars'))}</button>
        <button class="button primary" id="continueButton">${escapeHtml(nextWatchActionLabel(s))}</button>
      </div>
      <p class="status-line" id="summaryStatus"></p>
    </section>
  `;
  document.querySelector('#collectButton')?.addEventListener('click', renderLostOars);
  document.querySelector('#continueButton')?.addEventListener('click', async () => {
    const status = document.querySelector('#summaryStatus');
    if ((s.next_step || '') === 'clear_revision') {
      renderLostOars();
      return;
    }

    if ((s.unresolved_lost_oars || 0) > 0) {
      const skip = await api('/api/captain-ether/skip-cleanup.php', {
        method: 'POST',
        body: JSON.stringify({ learner_stream: s.learner_stream }),
      });
      status.textContent = skip.message;
      if (skip.force_hangar) {
        setTimeout(renderLostOars, 800);
        return;
      }
    }

    await loadProgress().catch(() => null);
    startWatch(recommendedLevel, s.recommended_watch || { level: recommendedLevel, mode: 'mixed' });
  });
}

async function renderLostOars() {
  const lostData = await api('/api/captain-ether/lost-oars.php');
  const items = lostData.lost_oars || [];
  const recommendedWatch = lostData.recommended_watch || state.progress?.recommended_watch || { level: lostData.recommended_level || 'beginner', mode: 'mixed' };
  const recommendedLevel = recommendedWatch.level || lostData.recommended_level || 'beginner';
  const recommendedBranch = lostData.recommended_branch || recommendedWatch.branch || '';
  app.innerHTML = html`
    <section class="panel lost-oars-panel">
      <p class="eyebrow">Lost Oars</p>
      <h1>${escapeHtml(t('lost.title'))}</h1>
      <p class="muted">${items.length ? escapeHtml(t('lost.hasItems')) : escapeHtml(t('lost.empty'))}</p>
      <div class="progress-overview__meta watch-summary__next">
        <div>
          <p class="eyebrow">${escapeHtml(t('lost.priorityTitle'))}</p>
          <p class="muted">${escapeHtml(t('lost.priorityCopy'))}</p>
          <p class="muted">${escapeHtml(progressStepCopy(lostData.next_step))}</p>
        </div>
        <div class="stat-grid progress-overview__recent">
          <div class="stat-card"><small>${escapeHtml(t('summary.recommendedLevel'))}</small><strong>${escapeHtml(levelLabel(recommendedLevel))}</strong></div>
          <div class="stat-card"><small>${escapeHtml(t('lost.priorityBranch'))}</small><strong>${escapeHtml(recommendedBranch ? branchLabel(recommendedBranch) : t('empty.none'))}</strong></div>
        </div>
      </div>
      <div class="lost-list">
        ${items.map((item) => html`
          <article class="lost-item ${item.focus_match ? 'is-priority' : ''}" data-lost="${escapeHtml(item.item_id)}">
            <strong>${escapeHtml(item.prompt)}</strong>
            <small class="muted">${questionTypeLabel(item.type)} · ${escapeHtml(item.topic)} · ${escapeHtml(item.branch ? branchLabel(item.branch) : t('empty.none'))} · ${lostReasonLabel(item.reason)}</small>
            <div class="answer-row lost-answer-row">
              <input placeholder="English radio phrase" aria-label="${escapeHtml(t('lost.answerAria'))}" />
              <button class="button primary">${escapeHtml(t('lost.check'))}</button>
            </div>
            <button class="button ghost" data-hint>${escapeHtml(t('lost.hint'))}</button>
            <div class="result-box result-box--hint is-hidden">
              <span class="result-box__label">${escapeHtml(t('watch.hintLabel'))}</span>
              <p>${escapeHtml(item.hint)}</p>
            </div>
          </article>
        `).join('')}
      </div>
      <div class="actions">
        <button class="button" id="homeFromHangar">${escapeHtml(t('lost.home'))}</button>
        <button class="button primary" id="newWatchFromHangar">${escapeHtml(t('lost.returnRecommended'))}</button>
      </div>
      <p class="status-line" id="lostStatus"></p>
    </section>
  `;

  const goToRecommendedWatch = async (watch = recommendedWatch) => {
    await loadProgress().catch(() => null);
    const nextWatch = watch || state.progress?.recommended_watch || { level: state.progress?.recommended_level || 'beginner', mode: 'mixed' };
    startWatch(nextWatch.level || 'beginner', nextWatch);
  };

  document.querySelectorAll('[data-lost]').forEach((card) => {
    card.querySelector('[data-hint]')?.addEventListener('click', () => {
      card.querySelector('.result-box')?.classList.remove('is-hidden');
    });
    card.querySelector('.button.primary')?.addEventListener('click', async () => {
      const input = card.querySelector('input');
      const resultBox = card.querySelector('.result-box');
      const resolveData = await api('/api/captain-ether/resolve-lost-oar.php', {
        method: 'POST',
        body: JSON.stringify({ item_id: card.dataset.lost, learner_stream: lostData.learner_stream, answer: input.value }),
      });
      resultBox.classList.remove('is-hidden');
      resultBox.classList.remove('is-correct', 'is-wrong', 'is-soft-correct');
      resultBox.classList.add(resultClass(resolveData));
      resultBox.innerHTML = resultMarkup(resolveData, t('lost.review'));
      if (resolveData.correct) {
        card.remove();
        await loadProgress().catch(() => null);
        const remainingCards = document.querySelectorAll('[data-lost]');
        if (remainingCards.length === 0) {
          document.querySelector('.lost-list').innerHTML = `<p class="muted">${escapeHtml(t('lost.empty'))}</p>`;
          document.querySelector('.lost-oars-panel > .muted').textContent = t('lost.empty');
          document.querySelector('#lostStatus').textContent = t('lost.autoReturn');
          setTimeout(() => {
            goToRecommendedWatch(resolveData.recommended_watch || recommendedWatch);
          }, 450);
        }
      }
    });
  });

  document.querySelector('#homeFromHangar')?.addEventListener('click', navigateHome);
  document.querySelector('#newWatchFromHangar')?.addEventListener('click', () => goToRecommendedWatch());
}

function countMapMarkup(map) {
  const entries = Object.entries(map || {});
  if (!entries.length) return `<span class="muted">${escapeHtml(t('empty.none'))}</span>`;
  return entries.map(([key, value]) => html`
    <span class="mini-pill">${escapeHtml(key)} ${escapeHtml(value)}</span>
  `).join('');
}

function logKindLabel(kind) {
  return t(`log.${kind}`) || kind || 'unknown';
}

function reviewFlagLabel(flag) {
  return t(`flag.${flag}`) || flag;
}

function compactDate(value) {
  if (!value) return t('date.none');
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(t('locale'), {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function answerLogGroupCard(group) {
  return html`
    <article class="answer-log-card">
      <header class="answer-log-card__head">
        <div>
          <small class="muted">${escapeHtml(group.item_id)}</small>
          <strong>${escapeHtml(group.prompt || t('answerLog.noPrompt'))}</strong>
        </div>
        <span class="status-pill">${escapeHtml(tf('answerLog.records', { count: group.total }))}</span>
      </header>
      <p class="answer-log-target">${escapeHtml(group.target_text || '')}</p>
      <div class="answer-log-meta">
        <div>${countMapMarkup(group.by_kind)}</div>
        <div>${(group.review_flags || []).map((flag) => `<span class="mini-pill amber">${escapeHtml(reviewFlagLabel(flag))}</span>`).join('')}</div>
      </div>
      <div class="answer-log-answers">
        ${(group.top_answers || []).map((answer) => html`
          <div class="answer-log-answer">
            <span>${escapeHtml(answer.answer || t('answerLog.empty'))}</span>
            <small>${escapeHtml(answer.total)} · ${countMapMarkup(Object.fromEntries(Object.entries(answer.by_kind || {}).map(([kind, value]) => [logKindLabel(kind), value])))}</small>
          </div>
        `).join('') || `<p class="muted">${escapeHtml(t('answerLog.noAnswers'))}</p>`}
      </div>
    </article>
  `;
}

function answerLogEntryRow(entry) {
  return html`
    <tr>
      <td>${escapeHtml(compactDate(entry.observed_at))}</td>
      <td><code>${escapeHtml(entry.item_id)}</code></td>
      <td>${escapeHtml(logKindLabel(entry.log_kind))}</td>
      <td>${escapeHtml(entry.answer || t('answerLog.empty'))}</td>
      <td>${escapeHtml(entry.target_text || '')}</td>
    </tr>
  `;
}

async function renderAnswerLog() {
  if (!isAdmin()) {
    app.innerHTML = `<section class="panel"><p class="status-line">${escapeHtml(t('answerLog.adminRequired'))}</p></section>`;
    return;
  }

  app.innerHTML = `<section class="panel"><p class="status-line">${escapeHtml(t('answerLog.loading'))}</p></section>`;
  const data = await api('/api/captain-ether/answer-log.php?limit=80&group_limit=16&answer_limit=5');
  const summary = data.summary || {};
  const groups = data.review_groups || [];
  const entries = data.entries || [];

  app.innerHTML = html`
    <section class="panel answer-log-panel">
      <div class="section-head">
        <p class="eyebrow">Captain Ether QA</p>
        <h1>${escapeHtml(t('answerLog.title'))}</h1>
      </div>
      <div class="stat-grid">
        <div class="stat-card"><small>${escapeHtml(t('answerLog.stored'))}</small><strong>${summary.stored_entries ?? 0}</strong></div>
        <div class="stat-card"><small>${escapeHtml(t('answerLog.filtered'))}</small><strong>${summary.filtered_entries ?? 0}</strong></div>
        <div class="stat-card"><small>${escapeHtml(t('answerLog.groups'))}</small><strong>${groups.length}</strong></div>
        <div class="stat-card"><small>${escapeHtml(t('answerLog.updated'))}</small><strong>${escapeHtml(compactDate(summary.updated_at))}</strong></div>
      </div>
      <div class="answer-log-summary">
        <div>
          <small class="muted">${escapeHtml(t('answerLog.kinds'))}</small>
          <div class="pill-row">${countMapMarkup(Object.fromEntries(Object.entries(summary.by_kind || {}).map(([kind, value]) => [logKindLabel(kind), value])))}</div>
        </div>
        <div>
          <small class="muted">Matcher</small>
          <div class="pill-row">${countMapMarkup(summary.by_match_type)}</div>
        </div>
      </div>
      <div class="actions">
        <button class="button primary" id="answerLogRefreshButton">${escapeHtml(t('answerLog.refresh'))}</button>
        <button class="button" id="answerLogBackButton">${escapeHtml(t('answerLog.back'))}</button>
      </div>
    </section>

    <section class="answer-log-grid">
      ${groups.map(answerLogGroupCard).join('') || `<article class="panel"><p class="muted">${escapeHtml(t('answerLog.noGroups'))}</p></article>`}
    </section>

    <section class="panel answer-log-table-panel">
      <div class="section-head">
        <p class="eyebrow">${escapeHtml(t('answerLog.latest'))}</p>
        <h2>${escapeHtml(t('answerLog.rawTitle'))}</h2>
      </div>
      <div class="answer-log-table-wrap">
        <table class="answer-log-table">
          <thead>
            <tr>
              <th>${escapeHtml(t('answerLog.time'))}</th>
              <th>Item</th>
              <th>${escapeHtml(t('answerLog.kind'))}</th>
              <th>${escapeHtml(t('answerLog.answer'))}</th>
              <th>${escapeHtml(t('answerLog.standard'))}</th>
            </tr>
          </thead>
          <tbody>
            ${entries.map(answerLogEntryRow).join('') || `<tr><td colspan="5">${escapeHtml(t('answerLog.noEntries'))}</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;

  document.querySelector('#answerLogRefreshButton')?.addEventListener('click', renderAnswerLog);
  document.querySelector('#answerLogBackButton')?.addEventListener('click', renderLevelSelect);
}

async function boot() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {});
  }
  const me = await api('/api/auth/me.php');
  state.user = me.user;
  state.csrf = me.csrf;
  renderProfile();
  await renderCurrentRoute();
}

window.addEventListener('popstate', async () => {
  await renderCurrentRoute();
});

boot().catch((error) => {
  app.innerHTML = `<section class="panel"><p class="status-line">${escapeHtml(error.message)}</p></section>`;
});
