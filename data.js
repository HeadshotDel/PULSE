(function createFieldAidData() {
  function bi(en, uk) {
    return { en, uk };
  }

  function homeCountry(id, en, uk, primaryLanguage, consular) {
    return {
      id,
      label: bi(en, uk),
      primaryLanguage,
      consular: consular || null
    };
  }

  const copy = {
    en: {
      appTitle: "Travel First Aid",
      currentLocation: "Current Location",
      localEmergencyServices: "Local Emergency Services",
      quickTranslation: "Quick Translation",
      showLocals: "To show locals",
      hazardsKicker: "Local Hazards",
      hazardsTitle: "Warnings for your current area",
      alertZonesTitle: "Custom Alert Zones",
      zoneName: "Zone name",
      zoneRisk: "Risk type",
      zoneRadius: "Radius (km)",
      zoneNote: "What to watch",
      saveZone: "Save zone",
      firstAidKicker: "First Aid",
      firstAidTitle: "Contextual guides for this destination",
      mapKicker: "Offline Map",
      mapTitle: "Hospitals, shelters, and consular points",
      mapLegend: "Map legend",
      criticalPointsTitle: "Critical Points",
      tapPointHint: "Tap a point to focus it on the map",
      profileKicker: "Profile",
      profileTitle: "Traveler settings and offline tools",
      profileSubtitle: "Pick your language, home country, destination, contacts, notes, and saved reports.",
      openProfileSettings: "Open Profile Settings",
      travelSettings: "Travel Settings",
      uiLanguage: "Interface language",
      homeCountry: "Home country",
      destination: "Destination",
      saveOffline: "Save offline pack",
      trustedContactsTitle: "Trusted Contacts",
      contactName: "Name",
      contactChannel: "Phone or email",
      saveContact: "Save contact",
      notesTitle: "Personal Notes",
      notePlace: "Place",
      noteText: "Note",
      saveNote: "Save note",
      incidentTitle: "Incident Reports",
      incidentType: "Type",
      incidentDescription: "Description",
      saveIncident: "Save report",
      popularPlacesTitle: "30 Popular Destinations",
      tabSos: "SOS",
      tabHazards: "Hazards",
      tabAid: "First Aid",
      tabMap: "Map",
      tabProfile: "Profile",
      speakPhrase: "Speak",
      close: "Close",
      callNow: "Call now",
      openGuide: "Open guide",
      showTranslation: "Show translation",
      shareLocation: "Share live location",
      remove: "Remove",
      currentArea: "Current area",
      localLanguage: "Local language",
      homeLanguage: "Primary language",
      savedOffline: "Saved offline",
      offlineReady: "Offline ready",
      tapToAlert: "Tap to share live location and alert trusted contacts",
      localHazards: "Key local hazards",
      dangerLevel: "Danger level",
      symptoms: "Symptoms",
      doThis: "What to do",
      avoidThis: "Avoid",
      watchFor: "Watch for",
      sourceGuide: "Source guide",
      videoGuide: "Detailed guide",
      youtubeSearch: "YouTube search",
      shelters: "Shelters",
      hospitals: "Hospitals",
      consularSupport: "Embassy / Consulate",
      myLocation: "My location",
      openFullMap: "Open full Google Maps",
      emergencyAssembly: "Emergency point",
      route: "Route",
      popularLanguageTag: "Popular language",
      countryTag: "Country",
      selectDestination: "Use this destination",
      officialFeed: "Offline alert feed",
      verifiedOfficial: "Official source",
      seedDirectory: "Seed travel directory",
      customZoneSaved: "New alert zone saved.",
      contactSaved: "Contact saved.",
      noteSaved: "Note saved.",
      reportSaved: "Report saved to your offline feed.",
      offlineSaved: "Offline pack pinned on device.",
      locationDetected: "Location detected. Destination updated.",
      locationFallback: "Could not read your exact location. Keeping the selected destination.",
      copied: "Copied to clipboard.",
      shareReady: "Emergency message is ready.",
      notSupported: "This feature is not supported on this device.",
      emptyZones: "No custom alert zones yet.",
      emptyContacts: "Add at least one trusted contact.",
      emptyNotes: "Your notes for this destination will appear here.",
      emptyReports: "No saved reports yet.",
      phraseHint: "Tap a phrase to open a large translation card.",
      touristHotspots: "Tourist hotspot",
      liveContacts: "Trusted contact alert",
      profileSummary: "Travel profile",
      callEmergency: "Call emergency line",
      openConsularInfo: "Open consular help",
      notificationReady: "Push alert is ready.",
      notificationDenied: "Notifications were denied by the browser.",
      statusUpdated: "Status refreshed.",
      nearbyHelpTitle: "Nearest Help by GPS",
      countryRulesTitle: "General Rules in This Country",
      weatherTitle: "Weather and Possible Anomalies",
      translatorTitle: "Emergency Translator",
      translatorPlaceholder: "Describe the problem or type what you need...",
      translateButton: "Translate",
      readAloud: "Read aloud",
      translationResult: "Translation result",
      templatePhrases: "Template phrases",
      aidSituationCount: "emergency situations",
      quickSteps: "Rapid steps",
      causesTitle: "Causes",
      whatToDoTitle: "What to do",
      overviewTitle: "General info",
      medicalCardTitle: "Medical Card",
      medicalCardSubtitle: "Show to Emergency Responders",
      bloodType: "Blood Type",
      allergies: "Allergies",
      chronicDiseases: "Chronic Diseases",
      medications: "Medications",
      saveMedicalCard: "Save Medical Card",
      medicalCardSaved: "Medical card saved.",
      emptyMedicalCard: "Add critical medical info before travel.",
      gpsActive: "GPS active",
      gpsHint: "Tap the location circle for exact GPS",
      nearby: "nearby"
    },
    uk: {
      appTitle: "Туристична Перша Допомога",
      currentLocation: "Поточна Локацiя",
      localEmergencyServices: "Мiсцевi Екстренi Служби",
      quickTranslation: "Швидкий Переклад",
      showLocals: "Щоб показати мiсцевим",
      hazardsKicker: "Local Hazards",
      hazardsTitle: "Попередження для поточної зони",
      alertZonesTitle: "Власнi Зони Ризику",
      zoneName: "Назва зони",
      zoneRisk: "Тип ризику",
      zoneRadius: "Радiус (км)",
      zoneNote: "Що вiдстежувати",
      saveZone: "Зберегти зону",
      firstAidKicker: "Перша Допомога",
      firstAidTitle: "Контекстнi гiди для цього напрямку",
      mapKicker: "Офлайн Мапа",
      mapTitle: "Лiкарнi, укриття та консульськi точки",
      mapLegend: "Легенда мапи",
      criticalPointsTitle: "Критичнi Точки",
      tapPointHint: "Торкнiться точки, щоб сфокусувати її на мапi",
      profileKicker: "Профiль",
      profileTitle: "Налаштування мандрiвника та офлайн-iнструменти",
      profileSubtitle: "Оберiть мову, країну, напрямок, контакти, нотатки та збереженi репорти.",
      openProfileSettings: "Вiдкрити Налаштування Профiлю",
      travelSettings: "Налаштування Подорожi",
      uiLanguage: "Мова iнтерфейсу",
      homeCountry: "Країна проживання",
      destination: "Напрямок",
      saveOffline: "Зберегти офлайн-пакет",
      trustedContactsTitle: "Довiренi Контакти",
      contactName: "Iм'я",
      contactChannel: "Телефон або email",
      saveContact: "Зберегти контакт",
      notesTitle: "Особистi Нотатки",
      notePlace: "Мiсце",
      noteText: "Нотатка",
      saveNote: "Зберегти нотатку",
      incidentTitle: "Репорти Про Подiї",
      incidentType: "Тип",
      incidentDescription: "Опис",
      saveIncident: "Зберегти репорт",
      popularPlacesTitle: "30 Популярних Напрямкiв",
      tabSos: "SOS",
      tabHazards: "Hazards",
      tabAid: "First Aid",
      tabMap: "Map",
      tabProfile: "Profile",
      speakPhrase: "Озвучити",
      close: "Закрити",
      callNow: "Зателефонувати",
      openGuide: "Вiдкрити гiд",
      showTranslation: "Показати переклад",
      shareLocation: "Подiлитися live location",
      remove: "Видалити",
      currentArea: "Поточний район",
      localLanguage: "Мiсцева мова",
      homeLanguage: "Основна мова",
      savedOffline: "Збережено офлайн",
      offlineReady: "Офлайн готово",
      tapToAlert: "Торкнiться, щоб надiслати live location i сповiстити довiренi контакти",
      localHazards: "Ключовi локальнi ризики",
      dangerLevel: "Рiвень небезпеки",
      symptoms: "Симптоми",
      doThis: "Що робити",
      avoidThis: "Чого уникати",
      watchFor: "Стежити за",
      sourceGuide: "Джерело",
      videoGuide: "Детальний гiд",
      youtubeSearch: "Пошук на YouTube",
      shelters: "Укриття",
      hospitals: "Лiкарнi",
      consularSupport: "Посольство / Консульство",
      myLocation: "Моя локацiя",
      openFullMap: "Вiдкрити Google Maps",
      emergencyAssembly: "Точка безпеки",
      route: "Маршрут",
      popularLanguageTag: "Популярна мова",
      countryTag: "Країна",
      selectDestination: "Обрати цей напрямок",
      officialFeed: "Офлайн-стрiчка попереджень",
      verifiedOfficial: "Офiцiйне джерело",
      seedDirectory: "Seed travel directory",
      customZoneSaved: "Нову зону ризику збережено.",
      contactSaved: "Контакт збережено.",
      noteSaved: "Нотатку збережено.",
      reportSaved: "Репорт додано до офлайн-стрiчки.",
      offlineSaved: "Офлайн-пакет закрiплено на пристрої.",
      locationDetected: "Локацiю визначено. Напрямок оновлено.",
      locationFallback: "Не вдалося отримати точну локацiю. Залишено вибраний напрямок.",
      copied: "Скопiйовано.",
      shareReady: "Екстрене повiдомлення готове.",
      notSupported: "Ця функцiя не пiдтримується на цьому пристрої.",
      emptyZones: "Поки що немає власних зон ризику.",
      emptyContacts: "Додайте хоча б один довiрений контакт.",
      emptyNotes: "Тут з'являться вашi нотатки для цього напрямку.",
      emptyReports: "Поки що немає збережених репортiв.",
      phraseHint: "Торкнiться фрази, щоб вiдкрити велику картку перекладу.",
      touristHotspots: "Туристична точка",
      liveContacts: "Сповiщення довiрених контактiв",
      profileSummary: "Профiль подорожi",
      callEmergency: "Викликати екстрену лiнiю",
      openConsularInfo: "Вiдкрити консульську допомогу",
      notificationReady: "Push-alert готовий.",
      notificationDenied: "Сповiщення було вiдхилено браузером.",
      statusUpdated: "Статус оновлено.",
      nearbyHelpTitle: "Найближча допомога за GPS",
      countryRulesTitle: "Загальнi правила поведiнки в цiй країнi",
      weatherTitle: "Погода та можливi аномалiї",
      translatorTitle: "Екстрений перекладач",
      translatorPlaceholder: "Опишiть проблему або напишiть, що вам потрiбно...",
      translateButton: "Перекласти",
      readAloud: "Озвучити",
      translationResult: "Результат перекладу",
      templatePhrases: "Шаблоннi фрази",
      aidSituationCount: "екстрених ситуацiй",
      quickSteps: "Швидкi кроки",
      causesTitle: "Причини",
      whatToDoTitle: "Що робити",
      overviewTitle: "Загальна iнформацiя",
      medicalCardTitle: "Медична картка",
      medicalCardSubtitle: "Показати екстреним службам",
      bloodType: "Група кровi",
      allergies: "Алергiї",
      chronicDiseases: "Хронiчнi захворювання",
      medications: "Лiки",
      saveMedicalCard: "Зберегти медичну картку",
      medicalCardSaved: "Медичну картку збережено.",
      emptyMedicalCard: "Додайте критично важливу медичну iнформацiю перед подорожжю.",
      gpsActive: "GPS активний",
      gpsHint: "Натиснiть коло локацiї для точного GPS",
      nearby: "поруч"
    }
  };

  const languages = [
    { id: "en", label: "English" },
    { id: "uk", label: "Українська" }
  ];

  const homeCountries = [
    homeCountry("ua", "Ukraine", "Україна", "Ukrainian", {
      title: bi("Ukraine MFA emergency line", "Гаряча лiнiя МЗС України"),
      phone: "+380442381588",
      note: bi("Emergency help for Ukrainians abroad.", "Екстрена допомога українцям за кордоном."),
      url: "https://unity.gov.ua/en/government-hotlines/government-hotlines-help-ministry-of-foreign-affairs/",
      verified: true
    }),
    homeCountry("us", "United States", "США", "English", {
      title: bi("U.S. citizens emergency assistance", "Екстрена допомога громадянам США"),
      phone: "+12025014444",
      note: bi("24/7 overseas emergency assistance line.", "Цiлодобова екстрена допомога за кордоном."),
      url: "https://travel.state.gov/content/travel/en/international-travel/emergencies.html",
      verified: true
    }),
    homeCountry("uk", "United Kingdom", "Велика Британiя", "English", {
      title: bi("British consular help", "Британська консульська допомога"),
      phone: "",
      note: bi("Use the FCDO contact page for local embassy support.", "Використовуйте сторiнку FCDO для локальної консульської допомоги."),
      url: "https://www.gov.uk/world/embassies",
      verified: true
    }),
    homeCountry("ca", "Canada", "Канада", "English / French"),
    homeCountry("de", "Germany", "Нiмеччина", "German"),
    homeCountry("fr", "France", "Францiя", "French"),
    homeCountry("it", "Italy", "Iталiя", "Italian"),
    homeCountry("es", "Spain", "Iспанiя", "Spanish"),
    homeCountry("pt", "Portugal", "Португалiя", "Portuguese"),
    homeCountry("nl", "Netherlands", "Нiдерланди", "Dutch"),
    homeCountry("pl", "Poland", "Польща", "Polish"),
    homeCountry("tr", "Turkey", "Туреччина", "Turkish"),
    homeCountry("ae", "United Arab Emirates", "ОАЕ", "Arabic"),
    homeCountry("sa", "Saudi Arabia", "Саудiвська Аравiя", "Arabic"),
    homeCountry("in", "India", "Iндiя", "Hindi / English"),
    homeCountry("cn", "China", "Китай", "Chinese"),
    homeCountry("jp", "Japan", "Японiя", "Japanese"),
    homeCountry("kr", "South Korea", "Пiвденна Корея", "Korean"),
    homeCountry("sg", "Singapore", "Сингапур", "English / Malay / Chinese"),
    homeCountry("th", "Thailand", "Таїланд", "Thai"),
    homeCountry("id", "Indonesia", "Iндонезiя", "Indonesian"),
    homeCountry("au", "Australia", "Австралiя", "English"),
    homeCountry("nz", "New Zealand", "Нова Зеландiя", "English"),
    homeCountry("mx", "Mexico", "Мексика", "Spanish"),
    homeCountry("br", "Brazil", "Бразилiя", "Portuguese"),
    homeCountry("ar", "Argentina", "Аргентина", "Spanish"),
    homeCountry("eg", "Egypt", "Єгипет", "Arabic"),
    homeCountry("za", "South Africa", "ПАР", "English / Zulu"),
    homeCountry("ch", "Switzerland", "Швейцарiя", "German / French / Italian"),
    homeCountry("cz", "Czech Republic", "Чехiя", "Czech")
  ];

  const dangerMeta = {
    low: { label: bi("Low", "Низький"), percent: 18 },
    medium: { label: bi("Medium", "Середнiй"), percent: 46 },
    high: { label: bi("High", "Високий"), percent: 72 },
    critical: { label: bi("Critical", "Критичний"), percent: 90 }
  };

  const quickAidUk = {
    burn: {
      title: "Опiки та ошпарювання",
      summary: "Швидко охолодiть опiк, знiмiть тiснi речi, накрийте чисто та звернiться по допомогу при глибоких або великих опiках.",
      symptoms: ["почервонiла або пухирчаста шкiра", "бiль", "набряк", "бiлi або обвугленi дiлянки", "ознаки шоку"],
      steps: ["Охолоджуйте проточною водою щонайменше 20 хвилин.", "Знiмiть каблучки, годинник i тiсний одяг, якщо вони не прилипли.", "Накрийте чистою неприлипною пов'язкою або харчовою плiвкою.", "Викликайте допомогу при опiках обличчя, дихальних шляхiв, хiмiчних, електричних або великих опiках."],
      avoid: ["не наносити масло чи жир", "не проколювати пухирi", "не зривати одяг, що прилип"],
      watchFor: ["проблеми з диханням", "велика зона пухирiв", "глибока бiла або чорна шкiра", "сплутанiсть або непритомнiсть"],
      causes: ["гарячi рiдини", "сонце", "вогонь", "хiмiкати", "електрика"],
      whatToDo: ["спочатку охолодити", "захистити вiд iнфекцiї", "контролювати шок", "звернутися по допомогу при тяжких опiках"],
      overview: ["Тяжкiсть опiку залежить вiд глибини, площi, мiсця та ураження дихальних шляхiв.", "Дiтям i людям старшого вiку потрiбен ранiший медичний огляд.", "Хiмiчнi та електричнi опiки можуть бути серйознiшими, нiж здаються."]
    },
    fractureSprain: {
      title: "Перелом або сильне розтягнення",
      summary: "Знерухомте травму, зменшiть набряк i не навантажуйте болючу або деформовану кiнцiвку.",
      symptoms: ["бiль", "набряк", "синець", "деформацiя", "неможливо наступати"],
      steps: ["Зупинiть рух i пiдтримайте ушкоджену частину.", "Прикладіть холод через тканину.", "Пiднiмiть кiнцiвку, якщо це комфортно i безпечно.", "Звернiться по допомогу при деформацiї, онімiннi, вiдкритiй ранi або сильному болю."],
      avoid: ["не випрямляти кiнцiвку силою", "не масажувати ймовiрний перелом", "не дозволяти ходити при серйознiй травмi"],
      watchFor: ["онiмiння пальцiв", "синя або бліда шкiра", "зростання набряку", "сильний бiль"],
      causes: ["падiння", "ковзання", "ДТП", "травми на маршрутах", "спорт або воднi активностi"],
      whatToDo: ["пiдтримати", "охолодити", "пiдняти", "транспортувати обережно"],
      overview: ["Розтягнення i перелом спочатку можуть виглядати схоже.", "Знерухомлення зменшує подальше пошкодження тканин.", "Порушення чутливостi або кольору кiнцiвки є термiновою ознакою."]
    },
    choking: {
      title: "Удавлення",
      summary: "Дiйте швидко, якщо людина не може кашляти, говорити, дихати або синiє.",
      symptoms: ["беззвучний кашель", "не може говорити", "хапається за горло", "синi губи", "колапс"],
      steps: ["Запитайте, чи людина вдавилася, i викликайте екстрену допомогу.", "Дайте до 5 ударiв мiж лопатками, якщо кашель неефективний.", "Виконайте абдомiнальнi поштовхи, якщо ви навченi i це доречно.", "Почнiть СЛР, якщо людина втратила свiдомiсть."],
      avoid: ["не шукати предмет наослiп у ротi", "не давати воду", "не вiдкладати виклик допомоги"],
      watchFor: ["втрата свiдомостi", "слабкий кашель", "синi губи", "особливi технiки для немовлят або вагiтних"],
      causes: ["їжа", "дрiбнi предмети", "блювотнi маси", "погано пережована їжа", "аспiрацiя пiсля алкоголю"],
      whatToDo: ["заохочувати кашель, якщо вiн ефективний", "удари по спинi", "абдомiнальнi поштовхи", "СЛР при втратi свiдомостi"],
      overview: ["Сильний кашель означає, що повiтря ще проходить.", "Беззвучне удавлення загрожує життю.", "Для немовлят i вагiтних потрiбнi змiненi технiки."]
    },
    cprUnresponsive: {
      title: "Без свiдомостi або не дихає",
      summary: "Викликайте екстрену допомогу, починайте компресiї грудної клiтки та використайте AED, якщо доступний.",
      symptoms: ["без свiдомостi", "не дихає нормально", "агональнi вдихи", "немає руху", "сiрий або синiй колiр"],
      steps: ["Перевiрте небезпеку, реакцiю та дихання.", "Викликайте екстрену допомогу на гучному зв'язку.", "Починайте сильнi швидкi натискання в центрi грудної клiтки.", "Використайте AED одразу, коли вiн доступний, i дотримуйтесь пiдказок."],
      avoid: ["не чекати повної впевненостi", "не переривати компресiї надовго", "не перемiщувати людину, якщо мiсце безпечне"],
      watchFor: ["повернення нормального дихання", "пiдказки AED", "прибуття рятувальникiв", "втома пiд час компресiй"],
      causes: ["зупинка серця", "утоплення", "електротравма", "тяжка травма", "передозування або алкоголь"],
      whatToDo: ["викликати", "натискати", "дефiбрилювати", "продовжувати до прибуття допомоги"],
      overview: ["СЛР лише руками краще, нiж бездiяльнiсть.", "AED створенi для людей без спецiальної пiдготовки.", "Мiняйте людину, що робить компресiї, якщо є помiчник."]
    },
    allergicReaction: {
      title: "Тяжка алергiчна реакцiя",
      summary: "Використайте автоiнжектор адреналiну, якщо доступний, i негайно викликайте екстрену допомогу.",
      symptoms: ["набряк губ або язика", "свистяче дихання", "кропив'янка", "блювання", "слабкiсть або непритомнiсть"],
      steps: ["Викликайте екстрену допомогу.", "Використайте автоiнжектор адреналiну, якщо вiн призначений або доступний.", "Покладiть людину, якщо сидячи не легше дихати.", "Дайте другу дозу, якщо симптоми тривають i iнструкцiя це дозволяє."],
      avoid: ["не чекати, що мине само", "не змушувати стояти або ходити", "не покладатися на антигiстамiннi при проблемах з диханням"],
      watchFor: ["погiршення дихання", "колапс", "повернення симптомiв", "блювання пiсля їжi"],
      causes: ["їжа", "укуси комах", "лiки", "латекс", "невiдомi алергени"],
      whatToDo: ["адреналiн спочатку", "викликати екстрену допомогу", "контролювати дихання", "готуватися до СЛР"],
      overview: ["Анафiлаксiя може розвинутися за хвилини.", "Адреналiн є першим екстреним засобом.", "Симптоми можуть повернутися пiсля тимчасового покращення."]
    },
    asthmaAttack: {
      title: "Напад астми",
      summary: "Посадiть людину прямо, допоможiть скористатися iнгалятором i викликайте допомогу, якщо дихання не полегшується.",
      symptoms: ["свистяче дихання", "кашель", "стискання в грудях", "задишка", "важко говорити"],
      steps: ["Посадiть прямо i зберiгайте спокiй.", "Допоможiть використати швидкодiючий iнгалятор, бажано зі спейсером.", "Повторюйте за особистим планом астми.", "Викликайте екстрену допомогу, якщо симптоми тяжкi або не полiпшуються."],
      avoid: ["не класти людину плазом", "не залишати саму", "не зволiкати, якщо губи синiють"],
      watchFor: ["синi губи", "тиха грудна клiтка", "виснаження", "неможливо говорити реченнями"],
      causes: ["фiзичне навантаження", "пил", "дим", "холодне повiтря", "алергени", "iнфекцiя"],
      whatToDo: ["сидiти прямо", "iнгалятор", "зменшити тригери", "викликати допомогу при тяжкому станi"],
      overview: ["Астма може швидко стати небезпечною.", "Спейсер допомагає лiкам потрапити в легенi.", "Тиха грудна клiтка може бути небезпечнiшою за гучне свистяче дихання."]
    },
    chestPain: {
      title: "Бiль у грудях або ознаки iнфаркту",
      summary: "Будь-який незрозумiлий тиск у грудях, пiт, нудоту або бiль у руцi чи щелепi вважайте екстреною ситуацiєю.",
      symptoms: ["тиск у грудях", "задишка", "пiтливiсть", "нудота", "бiль у руцi, спинi, шиї або щелепi"],
      steps: ["Негайно викликайте екстрену допомогу.", "Забезпечте спокiй i нерухомiсть.", "Допоможiть прийняти призначенi серцевi лiки, якщо вони є.", "Будьте готовi почати СЛР, якщо людина втратить свiдомiсть."],
      avoid: ["не дозволяти йти шукати допомогу", "не їхати самому за кермом, якщо ви пацiєнт", "не iгнорувати легкi симптоми"],
      watchFor: ["колапс", "посилення задишки", "нерiвне дихання", "втрата свiдомостi"],
      causes: ["iнфаркт", "стенокардiя", "теплове перевантаження", "панiка", "проблеми з легенями"],
      whatToDo: ["викликати", "спокiй", "контроль стану", "СЛР за потреби"],
      overview: ["Ознаки iнфаркту можуть бути непомiтними.", "У жiнок, людей старшого вiку та людей з дiабетом симптоми можуть бути нетиповими.", "Швидка допомога значно покращує шанси."]
    },
    strokeSigns: {
      title: "Ознаки iнсульту",
      summary: "Використайте FAST: обличчя, рука, мовлення, час викликати допомогу.",
      symptoms: ["перекiс обличчя", "слабкiсть руки", "нечiтке мовлення", "раптова сплутанiсть", "раптовий сильний головний бiль"],
      steps: ["Негайно викликайте екстрену допомогу.", "Запишiть час початку симптомiв.", "Тримайте людину в безпецi та спокої.", "Не давайте їжу або напої."],
      avoid: ["не чекати, що симптоми минуть", "не давати аспiрин без вказiвки", "не дозволяти просто поспати"],
      watchFor: ["блювання", "посилення слабкостi", "судоми", "зниження свiдомостi"],
      causes: ["закупорка судини", "крововилив у мозок", "високий тиск", "порушення ритму серця"],
      whatToDo: ["розпiзнати FAST", "викликати", "записати час", "стежити за дихальними шляхами"],
      overview: ["Лiкування iнсульту залежить вiд часу.", "Симптоми можуть зникати i повертатися.", "Час початку симптомiв важливий для лiкарнi."]
    },
    hypothermia: {
      title: "Переохолодження",
      summary: "Перемiстiть з холоду, знiмiть мокрий одяг, поступово зiгрiвайте тулуб i поводьтеся обережно.",
      symptoms: ["тремтiння", "сплутанiсть", "нечiтке мовлення", "незграбнiсть", "сонливiсть"],
      steps: ["Перемiстiть у захищене мiсце i знiмiть мокрi речi.", "Спершу зiгрiвайте груди, шию i голову.", "Дайте ковдри та теплий солодкий напiй лише якщо людина повнiстю при свiдомостi.", "Викликайте допомогу при сплутаностi, сильному холодi або сонливостi."],
      avoid: ["не розтирати кiнцiвки сильно", "не використовувати пряме сильне тепло", "не давати алкоголь"],
      watchFor: ["тремтiння припинилося", "повiльне дихання", "сплутанiсть", "колапс"],
      causes: ["холодний дощ", "вiтер", "мокрий одяг", "занурення у воду", "висота"],
      whatToDo: ["укриття", "сухий одяг", "зiгрiти тулуб", "обережне поводження"],
      overview: ["Переохолодження можливе i вище нуля, якщо мокро та вiтряно.", "Сплутанiсть є серйозною ознакою.", "Грубi рухи можуть погiршити серцевий ритм."]
    },
    drowning: {
      title: "Утоплення або майже утоплення",
      summary: "Безпечно витягнiть людину, викликайте допомогу i починайте дихання/СЛР, якщо дихання ненормальне.",
      symptoms: ["кашель пiсля води", "важко дихати", "синi губи", "без свiдомостi", "блювання"],
      steps: ["Викликайте екстрену допомогу.", "Витягуйте з води лише якщо це безпечно для вас.", "Перевiрте дихання i починайте СЛР за потреби.", "Зiгрiйте i спостерiгайте навiть якщо стало краще."],
      avoid: ["не заходити в небезпечну воду без пiдтримки", "не вважати, що все минуло", "не вiдкладати огляд при проблемах з диханням"],
      watchFor: ["тривалий кашель", "сонливiсть", "погiршення дихання", "бiль у грудях"],
      causes: ["небезпечнi течiї", "алкоголь", "втома", "холодна вода", "раптова глибина"],
      whatToDo: ["безпечний порятунок", "виклик", "дихальнi шляхи i СЛР", "медичний огляд"],
      overview: ["Проблеми з диханням можуть погiршитися пiсля вдихання води.", "Безпека рятувальника першочергова.", "Дiтей потрiбно уважно спостерiгати пiсля будь-якого занурення."]
    },
    eyeInjury: {
      title: "Травма ока або хiмiчний бризок",
      summary: "Негайно промивайте хiмiчнi бризки i захистiть око вiд тертя та тиску.",
      symptoms: ["бiль", "почервонiння", "затуманений зiр", "вiдчуття стороннього тiла", "контакт з хiмiкатом"],
      steps: ["Промивайте хiмiчне ураження чистою водою щонайменше 15 хвилин.", "Не трiть око.", "При серйознiй травмi легко прикрийте обидва ока.", "Термiново звернiться при змiнi зору, порiзах або хiмiкатах."],
      avoid: ["не видаляти предмет, що застряг", "не тиснути", "не використовувати випадковi краплi пiсля хiмiкатiв"],
      watchFor: ["втрата зору", "сильний бiль", "кров в оцi", "хiмiчний опiк"],
      causes: ["пiсок", "гiлки", "хiмiкати", "контактнi лiнзи", "спорт або ДТП"],
      whatToDo: ["промити хiмiкати", "захистити", "уникати тиску", "термiнова очна допомога"],
      overview: ["Хiмiчнi бризки потребують негайної реакцiї.", "Предмети, що застрягли, мають видаляти медики.", "Обидва ока рухаються разом, тому прикриття обох зменшує рух."]
    },
    animalBite: {
      title: "Укус або подряпина тварини",
      summary: "Добре промийте, зупинiть кровотечу i термiново звернiться щодо ризику сказу або iнфекцiї.",
      symptoms: ["прокол", "кровотеча", "набряк", "почервонiння", "бiль"],
      steps: ["Промивайте милом i проточною водою кiлька хвилин.", "Натиснiть при кровотечi.", "Накрийте чистою пов'язкою.", "Звернiться до медикiв, особливо пiсля контакту з собакою, мавпою, кажаном або дикою твариною."],
      avoid: ["не iгнорувати малi проколи", "не наближатися до тварини знову", "не вiдкладати консультацiю щодо сказу"],
      watchFor: ["поширення почервонiння", "лихоманка", "гнiй", "онiмiння", "невiдомий статус вакцинацiї тварини"],
      causes: ["собаки", "мавпи", "кажани", "коти", "дикi тварини", "годування тварин"],
      whatToDo: ["промити", "накрити", "зафiксувати iнформацiю про тварину", "медичний огляд"],
      overview: ["Профiлактика сказу пiсля деяких контактiв термiнова.", "Проколи легко iнфiкуються.", "Фото з безпечної вiдстанi може допомогти визначити тварину."]
    },
    seizure: {
      title: "Судомний напад",
      summary: "Захистiть вiд травм, засiчiть час, тримайте дихальнi шляхи вiльними i викликайте допомогу, якщо напад триває понад 5 хвилин.",
      symptoms: ["судоми", "завмирання", "сплутанiсть", "втрата усвiдомлення", "сонливiсть пiсля"],
      steps: ["Приберiть небезпечнi предмети навколо.", "Пiдкладіть щось м'яке пiд голову i послабте тiсний одяг.", "Засiчiть час нападу.", "Викликайте екстрену допомогу, якщо напад триває понад 5 хвилин, повторюється або стався пiсля травми."],
      avoid: ["не стримувати людину силою", "не класти нiчого в рот", "не давати їжу або напої до повного пробудження"],
      watchFor: ["напад понад 5 хвилин", "проблеми з диханням", "травма", "вагiтнiсть", "напад у водi"],
      causes: ["епiлепсiя", "лихоманка", "травма голови", "низький цукор", "алкогольна абстиненцiя"],
      whatToDo: ["захистити", "засiкти час", "пiсля нападу покласти на бiк", "викликати при тривалому нападi"],
      overview: ["Бiльшiсть нападiв зупиняються самi.", "Головне завдання - запобiгти травмi.", "Сплутанiсть пiсля нападу може тривати кiлька хвилин."]
    },
    panicShock: {
      title: "Панiка, шок або гострий стрес",
      summary: "Перемiстiть у спокiйнiше мiсце, сповiльнiть дихання, перевiрте травми i звернiться по допомогу, якщо стан не минає.",
      symptoms: ["швидке дихання", "тремтiння", "стискання в грудях", "блiда шкiра", "сплутанiсть"],
      steps: ["Вiдiйдiть вiд безпосередньої небезпеки.", "Говорiть коротко i допоможiть дихати повiльнiше.", "Перевiрте приховану травму або зневоднення.", "Викликайте медичну допомогу при болю в грудях, непритомностi або сильнiй сплутаностi."],
      avoid: ["не оточувати людину натовпом", "не iгнорувати бiль у грудях", "не залишати сплутану людину саму"],
      watchFor: ["непритомнiсть", "посилення болю в грудях", "суїцидальнi думки", "сильна сплутанiсть"],
      causes: ["аварiї", "натовпи", "повiтрянi тривоги", "злочин", "тепловий стрес", "медичний страх"],
      whatToDo: ["безпека", "дихання", "рiдина, якщо людина при свiдомостi", "медична перевiрка при червоних прапорцях"],
      overview: ["Панiка може нагадувати серцеву або дихальну проблему.", "Шок пiсля травми є фiзично небезпечним.", "Спокiйнi короткi iнструкцiї допомагають повернути контроль."]
    },
    diabeticEmergency: {
      title: "Дiабетична невiдкладна ситуацiя",
      summary: "Дайте швидкий цукор лише якщо людина при свiдомостi i може ковтати; викликайте допомогу при сплутаностi або втратi свiдомостi.",
      symptoms: ["пiтливiсть", "тремтiння", "сплутанiсть", "слабкiсть", "незвична поведiнка"],
      steps: ["Запитайте, чи є дiабет.", "Якщо людина при свiдомостi i ковтає, дайте глюкозу, сiк або солодкий напiй.", "Перевiрте покращення через 10-15 хвилин.", "Викликайте екстрену допомогу при втратi свiдомостi, судомах або вiдсутностi покращення."],
      avoid: ["не давати їжу або напої непритомнiй людинi", "не давати iнсулiн без її плану", "не iгнорувати сплутанiсть"],
      watchFor: ["втрата свiдомостi", "судоми", "посилення сплутаностi", "блювання"],
      causes: ["пропущена їжа", "додаткове навантаження", "iнсулiн або лiки", "хвороба", "спека i зневоднення"],
      whatToDo: ["цукор, якщо безпечно", "спостереження", "виклик при тяжкому станi", "положення на боцi при втратi свiдомостi"],
      overview: ["Низький цукор може виглядати як сп'янiння.", "Спека i подорожi збiльшують ризик.", "Медична картка допомагає рятувальникам."]
    },
    poisoning: {
      title: "Отруєння або передозування",
      summary: "Викликайте екстрену або токсикологiчну допомогу, збережiть упаковку i не викликайте блювання без вказiвки.",
      symptoms: ["блювання", "сплутанiсть", "сонливiсть", "змiни дихання", "опiки навколо рота"],
      steps: ["Вiдiйдiть вiд небезпеки, якщо є випари.", "Викликайте екстрену допомогу або консультацiю з отруєнь.", "Збережiть упаковку продукту або флакони лiкiв.", "Непритомну людину, яка дихає, покладiть на бiк."],
      avoid: ["не викликати блювання", "не давати їжу або напої без вказiвки", "не чекати симптомiв пiсля серйозного контакту"],
      watchFor: ["повiльне дихання", "судоми", "колапс", "хiмiчнi опiки"],
      causes: ["лiки", "алкоголь", "побутова хiмiя", "рослини", "чадний газ", "харчовi токсини"],
      whatToDo: ["викликати", "визначити речовину", "захистити дихальнi шляхи", "виконувати професiйнi iнструкцiї"],
      overview: ["Рiзнi отрути потребують рiзного лiкування.", "Упаковка допомагає медикам.", "Чадний газ потребує свiжого повiтря i термiнової допомоги."]
    }
  };

  function quickAidGuide(id, danger, title, summary, symptoms, steps, avoid, watchFor, causes, whatToDo, overview) {
    const uk = quickAidUk[id] || {};
    return {
      id,
      danger,
      title: bi(title, uk.title || title),
      summary: bi(summary, uk.summary || summary),
      symptoms: bi(symptoms, uk.symptoms || symptoms),
      steps: bi(steps, uk.steps || steps),
      avoid: bi(avoid, uk.avoid || avoid),
      watchFor: bi(watchFor, uk.watchFor || watchFor),
      causes: bi(causes, uk.causes || causes),
      whatToDo: bi(whatToDo, uk.whatToDo || whatToDo),
      overview: bi(overview, uk.overview || overview),
      sourceUrl: "",
      videoUrl: ""
    };
  }

  const aidGuides = {
    heatIllness: {
      id: "heatIllness",
      danger: "high",
      title: bi("Heatstroke and Dehydration", "Тепловий Удар i Зневоднення"),
      summary: bi(
        "Move the person to shade, cool fast, and call emergency services for confusion, collapse, or very hot skin.",
        "Перемiстiть людину в тiнь, швидко охолоджуйте та викликайте екстрену допомогу при сплутаностi, колапсi або дуже гарячiй шкiрi."
      ),
      symptoms: bi(
        ["dizziness", "headache", "nausea", "rapid pulse", "confusion", "muscle cramps"],
        ["запаморочення", "головний бiль", "нудота", "частий пульс", "сплутанiсть", "м'язовi судоми"]
      ),
      steps: bi(
        [
          "Move the person to shade or a cool indoor area.",
          "Loosen clothing and apply cool wet cloths or water to the skin.",
          "If fully alert, give cool water in small sips.",
          "Call emergency help for collapse, confusion, seizure, or loss of consciousness."
        ],
        [
          "Перемiстiть людину в тiнь або прохолодне примiщення.",
          "Послабте одяг i прикладайте прохолоднi мокрi тканини або воду до шкiри.",
          "Якщо людина при свiдомостi, давайте прохолодну воду малими ковтками.",
          "Викликайте екстрену допомогу при колапсi, сплутаностi, судомах або втратi свiдомостi."
        ]
      ),
      avoid: bi(
        ["do not give alcohol", "do not leave the person alone", "do not force fluids into someone with altered consciousness"],
        ["не давайте алкоголь", "не залишайте людину саму", "не вливайте рiдину людинi з порушеною свiдомiстю"]
      ),
      watchFor: bi(
        ["hot dry skin", "confusion", "fainting", "seizure"],
        ["гаряча суха шкiра", "сплутанiсть", "непритомнiсть", "судоми"]
      ),
      sourceUrl: "https://www.cdc.gov/niosh/heat-stress/about/illnesses.html",
      videoUrl: "https://www.redcross.org/take-a-class/resources/learn-first-aid/heat-stroke"
    },
    insectSting: {
      id: "insectSting",
      danger: "medium",
      title: bi("Insect Bites and Stings", "Укуси та Жалення Комах"),
      summary: bi(
        "Remove the stinger if present, cool the area, and react immediately to any sign of anaphylaxis.",
        "Видалiть жало, якщо воно є, охолодiть мiсце та негайно реагуйте на будь-якi ознаки анафiлаксiї."
      ),
      symptoms: bi(
        ["sharp pain", "itching", "redness", "swelling", "wheezing if allergic"],
        ["рiзкий бiль", "свербiж", "почервонiння", "набряк", "свистяче дихання при алергiї"]
      ),
      steps: bi(
        [
          "Remove the stinger with a clean edge or tweezers.",
          "Wash with soap and water and apply a cold pack through cloth.",
          "Monitor breathing and facial swelling.",
          "Use prescribed epinephrine if available and call emergency services for severe reactions."
        ],
        [
          "Видалiть жало чистим краєм або пiнцетом.",
          "Промийте водою з милом i прикладiть холодний компрес через тканину.",
          "Стежте за диханням i набряком обличчя.",
          "Використайте призначений адреналiн, якщо вiн є, i викликайте екстрену допомогу при тяжкiй реакцiї."
        ]
      ),
      avoid: bi(
        ["do not scratch the area", "do not ignore face or tongue swelling"],
        ["не розчiсуйте мiсце", "не iгноруйте набряк обличчя або язика"]
      ),
      watchFor: bi(
        ["wheezing", "hoarseness", "rapid swelling", "collapse"],
        ["свистяче дихання", "осиплiсть", "швидкий набряк", "колапс"]
      ),
      sourceUrl: "https://www.redcross.org/take-a-class/resources/learn-first-aid/insect-bites-and-stings",
      videoUrl: "https://www.redcross.org/take-a-class/resources/learn-first-aid/insect-bites-and-stings"
    },
    tickBite: {
      id: "tickBite",
      danger: "medium",
      title: bi("Tick Bite", "Укус Клiща"),
      summary: bi(
        "Remove the tick with steady upward pressure, clean the area, and watch for rash or fever in the days ahead.",
        "Видалiть клiща рiвним потягуванням вгору, обробiть мiсце та стежте за висипом або температурою в наступнi днi."
      ),
      symptoms: bi(
        ["attached tick", "red spot", "possible rash later", "fatigue or fever later"],
        ["присмоктаний клiщ", "червона пляма", "можливий висип пiзнiше", "втома або температура пiзнiше"]
      ),
      steps: bi(
        [
          "Use fine-tipped tweezers and grasp close to the skin.",
          "Pull upward steadily without twisting.",
          "Wash the area and your hands after removal.",
          "Seek medical advice if a rash, fever, or body aches develop."
        ],
        [
          "Використовуйте тонкий пiнцет i захопiть клiща якнайближче до шкiри.",
          "Тягнiть рiвно вгору без прокручування.",
          "Промийте мiсце та руки пiсля видалення.",
          "Звернiться до лiкаря, якщо з'явиться висип, температура або ломота."
        ]
      ),
      avoid: bi(
        ["do not burn the tick", "do not use oil or petroleum jelly"],
        ["не припiкайте клiща", "не використовуйте олiю чи вазелiн"]
      ),
      watchFor: bi(
        ["fever", "ring-shaped rash", "muscle aches"],
        ["температура", "кiльцеподiбний висип", "ломота у м'язах"]
      ),
      sourceUrl: "https://www.cdc.gov/ticks/after-a-tick-bite/index.html",
      videoUrl: "https://www.cdc.gov/ticks/after-a-tick-bite/index.html"
    },
    jellyfish: {
      id: "jellyfish",
      danger: "medium",
      title: bi("Jellyfish Sting", "Опiк Медузи"),
      summary: bi(
        "Leave the water, remove tentacles carefully, and relieve pain with hot water if tolerated.",
        "Вийдiть з води, обережно приберiть щупальця та зменшуйте бiль гарячою водою, якщо це переносимо."
      ),
      symptoms: bi(
        ["burning pain", "redness", "swelling", "sometimes breathing difficulty"],
        ["пекучий бiль", "почервонiння", "набряк", "iнколи утруднене дихання"]
      ),
      steps: bi(
        [
          "Get out of the water immediately.",
          "Remove tentacles with a towel, card, or gloved hand.",
          "Use water as hot as can be tolerated for at least 20 minutes.",
          "Call emergency help for breathing problems or widespread symptoms."
        ],
        [
          "Негайно вийдiть з води.",
          "Приберiть щупальця рушником, карткою або рукою в рукавичцi.",
          "Використовуйте гарячу воду, яку можна терпіти, щонайменше 20 хвилин.",
          "Викликайте екстрену допомогу при проблемах з диханням або поширених симптомах."
        ]
      ),
      avoid: bi(
        ["do not rub with bare hands", "do not return to the water after a severe sting"],
        ["не трiть голими руками", "не повертайтеся у воду пiсля сильного опiку"]
      ),
      watchFor: bi(
        ["shortness of breath", "generalized swelling", "collapse"],
        ["задишка", "загальний набряк", "колапс"]
      ),
      sourceUrl: "https://www.redcross.org/take-a-class/resources/learn-first-aid/jellyfish-stings",
      videoUrl: "https://www.redcross.org/take-a-class/resources/learn-first-aid/jellyfish-stings"
    },
    plantRash: {
      id: "plantRash",
      danger: "medium",
      title: bi("Plant Rash or Skin Exposure", "Висип або Подразнення Вiд Рослин"),
      summary: bi(
        "Wash the irritant off the skin quickly, remove contaminated clothing, and manage itching or blisters.",
        "Швидко змийте подразник зi шкiри, знiмiть забруднений одяг i контролюйте свербiж або пухирцi."
      ),
      symptoms: bi(
        ["itching", "red streaks", "blisters", "swelling"],
        ["свербiж", "червонi смуги", "пухирцi", "набряк"]
      ),
      steps: bi(
        [
          "Wash the skin with soap and water as soon as possible.",
          "Remove contaminated clothing and rinse exposed gear.",
          "Use cool compresses and monitor for worsening swelling.",
          "Seek medical care for face exposure, severe swelling, or breathing difficulty."
        ],
        [
          "Якнайшвидше промийте шкiру водою з милом.",
          "Знiмiть забруднений одяг i промийте спорядження.",
          "Використовуйте прохолоднi компреси та стежте за наростанням набряку.",
          "Звернiться до лiкаря при ураженнi обличчя, сильному набряку або проблемах з диханням."
        ]
      ),
      avoid: bi(
        ["do not keep wearing contaminated clothing", "do not burn poisonous plants nearby"],
        ["не продовжуйте носити забруднений одяг", "не спалюйте отруйнi рослини поруч"]
      ),
      watchFor: bi(
        ["fever", "pus", "spreading swelling"],
        ["температура", "гнiй", "поширення набряку"]
      ),
      sourceUrl: "https://www.cdc.gov/niosh/outdoor-workers/about/poisonous-plants.html",
      videoUrl: "https://www.fda.gov/consumers/consumer-updates/outsmarting-poison-ivy-and-other-poisonous-plants"
    },
    severeBleeding: {
      id: "severeBleeding",
      danger: "critical",
      title: bi("Severe Bleeding", "Сильна Кровотеча"),
      summary: bi(
        "Apply firm direct pressure immediately and call emergency services. Use a tourniquet only if trained and needed.",
        "Негайно застосуйте прямий сильний тиск i викликайте екстренi служби. Використовуйте турнiкет лише якщо навченi й це потрiбно."
      ),
      symptoms: bi(
        ["rapid blood loss", "soaked dressings", "weakness", "shock"],
        ["швидка крововтрата", "промокання пов'язок", "слабкiсть", "шок"]
      ),
      steps: bi(
        [
          "Call emergency services and make sure the scene is safe.",
          "Apply direct pressure with cloth or dressing.",
          "If life-threatening bleeding continues and you are trained, use a tourniquet.",
          "Keep monitoring breathing and responsiveness."
        ],
        [
          "Викликайте екстренi служби та переконайтеся, що мiсце безпечне.",
          "Застосуйте прямий тиск тканиною або пов'язкою.",
          "Якщо кровотеча триває i загрожує життю, а ви навченi, використайте турнiкет.",
          "Постiйно стежте за диханням i свiдомiстю."
        ]
      ),
      avoid: bi(
        ["do not remove pressure unnecessarily", "do not delay emergency help"],
        ["не знiмайте тиск без потреби", "не зволiкайте з викликом допомоги"]
      ),
      watchFor: bi(
        ["cold skin", "confusion", "fainting"],
        ["холодна шкiра", "сплутанiсть", "непритомнiсть"]
      ),
      sourceUrl: "https://www.redcross.org/fast",
      videoUrl: "https://www.redcross.org/take-a-class/classes/first-aid-for-severe-bleeding-online/a6R0V0000015EvD.html"
    },
    blastInjury: {
      id: "blastInjury",
      danger: "critical",
      title: bi("Blast and Debris Injury", "Травма Вiд Вибуху та Уламкiв"),
      summary: bi(
        "Move only if the area remains unsafe, control life-threatening bleeding first, and watch for breathing problems after an explosion.",
        "Перемiщуйтеся лише якщо зона все ще небезпечна, спочатку контролюйте загрозливу кровотечу i стежте за проблемами з диханням пiсля вибуху."
      ),
      symptoms: bi(
        ["bleeding", "penetrating wounds", "breathing difficulty", "hearing loss", "confusion"],
        ["кровотеча", "проникаючi рани", "утруднене дихання", "втрата слуху", "сплутанiсть"]
      ),
      steps: bi(
        [
          "If the area is still dangerous, move to cover or a safer position first.",
          "Apply direct pressure to severe bleeding and use a tourniquet only if trained and necessary.",
          "Keep the person low, calm, and monitor breathing closely.",
          "Avoid re-entering damaged structures unless officials direct it."
        ],
        [
          "Якщо зона все ще небезпечна, спочатку перемiстiться в укриття або безпечнiшу позицiю.",
          "Застосуйте прямий тиск при сильнiй кровотечi та використовуйте турнiкет лише якщо навченi i це потрiбно.",
          "Тримайте людину нижче, спокiйно та уважно стежте за диханням.",
          "Не повертайтеся в пошкодженi будiвлi без вказiвок офiцiйних служб."
        ]
      ),
      avoid: bi(
        ["do not use elevators", "do not stop for belongings", "do not move unstable debris"],
        ["не користуйтеся лiфтами", "не зупиняйтеся за речами", "не рухайте нестiйкi уламки"]
      ),
      watchFor: bi(
        ["shortness of breath", "collapse", "worsening confusion", "heavy bleeding"],
        ["задишка", "колапс", "посилення сплутаностi", "сильна кровотеча"]
      ),
      sourceUrl: "https://www.ready.gov/explosions",
      videoUrl: "https://www.ready.gov/explosions"
    },
    shelterSafety: {
      id: "shelterSafety",
      danger: "high",
      title: bi("Shelter and Air Alert Safety", "Безпека В Укриттi та Пiд Час Тривоги"),
      summary: bi(
        "Go to the nearest shelter early, stay away from windows, and keep essentials ready before the alert escalates.",
        "Йдiть до найближчого укриття завчасно, тримайтеся подалi вiд вiкон i майте готовi необхiднi речi ще до посилення тривоги."
      ),
      symptoms: bi(
        ["panic", "disorientation", "shortness of breath from smoke or dust", "minor impact injuries"],
        ["панiка", "дезорiєнтацiя", "задишка вiд диму або пилу", "дрiбнi травми вiд ударiв"]
      ),
      steps: bi(
        [
          "Move to the nearest shelter, metro, underpass, or protected core of a building as soon as the alert starts.",
          "Stay away from windows, glass, and visibly weakened stairways.",
          "Keep water, documents, battery power, and one offline contact plan ready.",
          "Leave only after the all-clear and local safety assessment."
        ],
        [
          "Прямуйте до найближчого укриття, метро, переходу або захищеного ядра будiвлi одразу на початку тривоги.",
          "Тримайтеся подалi вiд вiкон, скла та явно ослаблених сходiв.",
          "Майте напоготовi воду, документи, заряд i один офлайн-план зв'язку.",
          "Виходьте лише пiсля вiдбою та локальної оцiнки безпеки."
        ]
      ),
      avoid: bi(
        ["do not wait near windows", "do not ignore official alerts", "do not leave shelter too early"],
        ["не чекайте бiля вiкон", "не iгноруйте офiцiйнi сповiщення", "не виходьте з укриття надто рано"]
      ),
      watchFor: bi(
        ["structural damage", "smoke", "dust breathing issues", "further official instructions"],
        ["пошкодження конструкцiй", "дим", "проблеми з диханням через пил", "подальшi офiцiйнi вказiвки"]
      ),
      sourceUrl: "https://www.ready.gov/shelter",
      videoUrl: "https://www.ready.gov/shelter"
    },
    snakebite: {
      id: "snakebite",
      danger: "high",
      title: bi("Snake Bite", "Укус Змiї"),
      summary: bi(
        "Keep the person still, immobilize the limb, and get emergency medical help quickly.",
        "Тримайте людину нерухомо, знерухомте кiнцiвку та швидко органiзуйте екстрену медичну допомогу."
      ),
      symptoms: bi(
        ["puncture marks", "pain", "swelling", "nausea", "weakness"],
        ["слiди проколу", "бiль", "набряк", "нудота", "слабкiсть"]
      ),
      steps: bi(
        [
          "Move away from the snake and calm the person.",
          "Remove tight items and keep the bitten limb still.",
          "Arrange urgent transport to medical care.",
          "Monitor breathing and overall condition."
        ],
        [
          "Вiдiйдiть вiд змiї та заспокойте людину.",
          "Знiмiть усе тiсне i тримайте укушену кiнцiвку нерухомо.",
          "Органiзуйте термiнове транспортування до медичної допомоги.",
          "Стежте за диханням i загальним станом."
        ]
      ),
      avoid: bi(
        ["do not cut the wound", "do not suck venom", "do not apply ice"],
        ["не розрiзайте рану", "не висмоктуйте отруту", "не прикладайте лiд"]
      ),
      watchFor: bi(
        ["difficulty breathing", "vomiting", "widespread swelling"],
        ["утруднене дихання", "блювання", "поширений набряк"]
      ),
      sourceUrl: "https://www.who.int/health-topics/snakebite",
      videoUrl: "https://www.redcross.org/take-a-class/resources/learn-first-aid/venomous-snake-bites"
    },
    altitude: {
      id: "altitude",
      danger: "high",
      title: bi("Altitude Sickness", "Висотна Хвороба"),
      summary: bi(
        "Rest, stop ascending, and go lower if symptoms worsen or become severe.",
        "Вiдпочиньте, припинiть пiдйом i спускайтеся нижче, якщо симптоми посилюються або стають тяжкими."
      ),
      symptoms: bi(
        ["headache", "nausea", "fatigue", "shortness of breath", "poor coordination"],
        ["головний бiль", "нудота", "втома", "задишка", "погана координацiя"]
      ),
      steps: bi(
        [
          "Stop climbing and rest.",
          "Hydrate and keep warm.",
          "Descend if symptoms worsen, breathing is difficult, or walking becomes unsteady.",
          "Seek urgent help for confusion, severe breathlessness, or collapse."
        ],
        [
          "Припинiть пiдйом i вiдпочиньте.",
          "Пийте воду та зберiгайте тепло.",
          "Спускайтеся нижче, якщо симптоми посилюються, важко дихати або порушується хода.",
          "Термiново звертайтеся по допомогу при сплутаностi, сильнiй задишцi або колапсi."
        ]
      ),
      avoid: bi(
        ["do not keep climbing with worsening symptoms", "do not ignore confusion or severe breathlessness"],
        ["не продовжуйте пiдйом при погiршеннi симптомiв", "не iгноруйте сплутанiсть чи сильну задишку"]
      ),
      watchFor: bi(
        ["blue lips", "severe breathlessness", "confusion", "collapse"],
        ["синi губи", "сильна задишка", "сплутанiсть", "колапс"]
      ),
      sourceUrl: "https://www.nhs.uk/conditions/altitude-sickness/",
      videoUrl: "https://www.nhs.uk/conditions/altitude-sickness/"
    },
    foodWater: {
      id: "foodWater",
      danger: "medium",
      title: bi("Food and Waterborne Illness", "Харчове та Водне Отруєння"),
      summary: bi(
        "Hydrate early, watch for dehydration, and seek medical care for persistent vomiting, blood, or severe weakness.",
        "Рано починайте регiдратацiю, стежте за зневодненням i звертайтеся до лiкаря при тривалому блюваннi, кровi або сильнiй слабкостi."
      ),
      symptoms: bi(
        ["vomiting", "diarrhea", "stomach cramps", "fever", "dehydration"],
        ["блювання", "дiарея", "спазми живота", "температура", "зневоднення"]
      ),
      steps: bi(
        [
          "Sip oral rehydration fluid or clean water frequently.",
          "Rest in shade or a cool room.",
          "Seek care for blood in stool, inability to keep fluids down, or symptoms lasting more than a day or two.",
          "Use your regular medical plan if you have one."
        ],
        [
          "Часто пийте регiдратацiйний розчин або чисту воду.",
          "Вiдпочивайте в тiнi або прохолодному примiщеннi.",
          "Звертайтеся по допомогу при кровi в випорожненнях, неможливостi пити або якщо симптоми тривають довше доби-двох.",
          "Користуйтеся своїм звичним медичним планом, якщо вiн є."
        ]
      ),
      avoid: bi(
        ["do not ignore dehydration", "do not take unknown local medicines without understanding them"],
        ["не iгноруйте зневоднення", "не приймайте невiдомi локальнi лiки без розумiння їх дiї"]
      ),
      watchFor: bi(
        ["dry mouth", "very little urine", "blood", "fainting"],
        ["сухiсть у ротi", "дуже мала кiлькiсть сечi", "кров", "непритомнiсть"]
      ),
      sourceUrl: "https://www.nhs.uk/conditions/food-poisoning/",
      videoUrl: "https://www.nhs.uk/conditions/food-poisoning/"
    },
    burn: quickAidGuide(
      "burn",
      "medium",
      "Burns and Scalds",
      "Cool the burn quickly, remove tight items, cover it cleanly, and seek help for deep or large burns.",
      ["red or blistered skin", "pain", "swelling", "white or charred patches", "shock signs"],
      ["Cool under running water for at least 20 minutes.", "Remove rings, watches, and tight clothing unless stuck.", "Cover with clean non-stick dressing or plastic wrap.", "Call emergency care for face, airway, chemical, electrical, or large burns."],
      ["do not apply butter or oils", "do not break blisters", "do not peel stuck clothing"],
      ["breathing trouble", "large blistering area", "deep white or black skin", "confusion or fainting"],
      ["hot liquids", "sun exposure", "fire", "chemicals", "electricity"],
      ["cool first", "protect from infection", "treat shock", "get urgent care for severe burns"],
      ["Burn severity depends on depth, size, location, and airway involvement.", "Children and older adults need earlier medical review.", "Chemical and electrical burns can be more serious than they first look."]
    ),
    fractureSprain: quickAidGuide(
      "fractureSprain",
      "medium",
      "Fracture or Bad Sprain",
      "Immobilize the injury, control swelling, and avoid walking on a painful or deformed limb.",
      ["pain", "swelling", "bruising", "deformity", "unable to bear weight"],
      ["Stop movement and support the injured part.", "Apply a cold pack wrapped in cloth.", "Elevate if comfortable and safe.", "Seek medical care for deformity, numbness, open wounds, or severe pain."],
      ["do not force a limb straight", "do not massage a suspected fracture", "do not let the person walk on a serious injury"],
      ["numb fingers or toes", "blue or pale skin", "increasing swelling", "severe pain"],
      ["falls", "slips", "traffic incidents", "trail injuries", "sports or water activities"],
      ["support", "cool", "elevate", "transport safely"],
      ["Sprains and fractures can look similar in the first hour.", "Immobilization prevents worsening tissue damage.", "Neurovascular symptoms are urgent."]
    ),
    choking: quickAidGuide(
      "choking",
      "critical",
      "Choking",
      "Act fast if the person cannot cough, speak, breathe, or is turning blue.",
      ["silent cough", "unable to speak", "hands to throat", "blue lips", "collapse"],
      ["Ask if they are choking and call emergency services.", "Give up to 5 back blows if they cannot cough effectively.", "Give abdominal thrusts if trained and appropriate.", "Start CPR if they become unresponsive."],
      ["do not blind-sweep the mouth", "do not give water", "do not delay calling for help"],
      ["loss of consciousness", "weak cough", "blue lips", "pregnancy or infant choking differences"],
      ["food", "small objects", "vomit", "poorly chewed meals", "alcohol-related aspiration"],
      ["encourage cough if effective", "back blows", "abdominal thrusts", "CPR if unresponsive"],
      ["A strong cough means some air is moving.", "Silent choking is life-threatening.", "Infants and pregnant people need modified techniques."]
    ),
    cprUnresponsive: quickAidGuide(
      "cprUnresponsive",
      "critical",
      "Unresponsive or Not Breathing",
      "Call emergency services, start chest compressions, and use an AED if available.",
      ["unresponsive", "not breathing normally", "gasping", "no movement", "gray or blue color"],
      ["Check danger, response, and breathing.", "Call emergency services on speaker.", "Start hard, fast chest compressions in the center of the chest.", "Use an AED as soon as it arrives and follow prompts."],
      ["do not wait for certainty", "do not stop compressions for long", "do not move unless the location is unsafe"],
      ["normal breathing returning", "AED prompts", "rescuers arriving", "exhaustion during compressions"],
      ["cardiac arrest", "drowning", "electric shock", "severe trauma", "drug or alcohol emergencies"],
      ["call", "compress", "defibrillate", "continue until help arrives"],
      ["Hands-only CPR is better than doing nothing.", "AEDs are designed for non-specialists.", "Switch compressors if someone else can help."]
    ),
    allergicReaction: quickAidGuide(
      "allergicReaction",
      "critical",
      "Severe Allergic Reaction",
      "Use an epinephrine auto-injector if available and call emergency services immediately.",
      ["swelling of lips or tongue", "wheezing", "hives", "vomiting", "faintness"],
      ["Call emergency services.", "Use epinephrine auto-injector if prescribed or available.", "Lay the person down unless breathing is easier sitting up.", "Give a second dose if symptoms persist and instructions allow."],
      ["do not wait to see if it passes", "do not make them stand or walk", "do not rely on antihistamines for breathing symptoms"],
      ["worse breathing", "collapse", "return of symptoms", "vomiting after food exposure"],
      ["foods", "insect stings", "medicines", "latex", "unknown allergens"],
      ["epinephrine first", "call emergency care", "monitor breathing", "prepare for CPR"],
      ["Anaphylaxis can escalate in minutes.", "Epinephrine is the first-line emergency treatment.", "Symptoms can return after initial improvement."]
    ),
    asthmaAttack: quickAidGuide(
      "asthmaAttack",
      "high",
      "Asthma Attack",
      "Help the person sit upright, use their reliever inhaler, and call emergency care if breathing stays difficult.",
      ["wheezing", "coughing", "chest tightness", "shortness of breath", "trouble speaking"],
      ["Sit upright and stay calm.", "Use a reliever inhaler with spacer if available.", "Repeat according to the person's asthma plan.", "Call emergency services if symptoms are severe or not improving."],
      ["do not lie the person flat", "do not leave them alone", "do not delay help if lips turn blue"],
      ["blue lips", "silent chest", "exhaustion", "unable to speak full sentences"],
      ["exercise", "dust", "smoke", "cold air", "allergens", "respiratory infection"],
      ["sit upright", "reliever inhaler", "reduce triggers", "call if severe"],
      ["Asthma can become life-threatening quickly.", "A spacer helps medication reach the lungs.", "A silent chest can be more dangerous than loud wheezing."]
    ),
    chestPain: quickAidGuide(
      "chestPain",
      "critical",
      "Chest Pain or Heart Attack Signs",
      "Treat unexplained chest pressure, sweating, nausea, or pain spreading to arm or jaw as an emergency.",
      ["chest pressure", "shortness of breath", "sweating", "nausea", "pain in arm, back, neck, or jaw"],
      ["Call emergency services immediately.", "Keep the person resting and still.", "Help them take prescribed heart medication if they have it.", "Be ready to start CPR if they become unresponsive."],
      ["do not let them walk to find help", "do not drive yourself if you are the patient", "do not ignore mild symptoms"],
      ["collapse", "worsening breathlessness", "irregular breathing", "loss of consciousness"],
      ["heart attack", "angina", "heat strain", "panic symptoms", "lung problems"],
      ["call", "rest", "monitor", "CPR if needed"],
      ["Heart attack symptoms can be subtle.", "Women, older adults, and people with diabetes may have atypical signs.", "Fast emergency response improves survival."]
    ),
    strokeSigns: quickAidGuide(
      "strokeSigns",
      "critical",
      "Stroke Signs",
      "Use FAST: face drooping, arm weakness, speech trouble, time to call emergency services.",
      ["face droop", "arm weakness", "slurred speech", "sudden confusion", "sudden severe headache"],
      ["Call emergency services immediately.", "Note the time symptoms started.", "Keep the person safe and resting.", "Do not give food or drink."],
      ["do not wait for symptoms to pass", "do not give aspirin unless instructed", "do not let the person sleep it off"],
      ["vomiting", "worsening weakness", "seizure", "reduced consciousness"],
      ["blocked blood vessel", "bleeding in the brain", "high blood pressure", "heart rhythm problems"],
      ["recognize FAST", "call", "record time", "keep airway safe"],
      ["Stroke treatment is time-sensitive.", "Symptoms may come and go.", "The start time matters for hospital decisions."]
    ),
    hypothermia: quickAidGuide(
      "hypothermia",
      "high",
      "Hypothermia",
      "Move out of cold, remove wet clothing, warm the core gradually, and handle gently.",
      ["shivering", "confusion", "slurred speech", "clumsiness", "drowsiness"],
      ["Move to shelter and remove wet layers.", "Warm the chest, neck, and head first.", "Use blankets and warm sweet drinks only if fully awake.", "Call emergency care for confusion, severe cold, or drowsiness."],
      ["do not rub limbs hard", "do not use direct high heat", "do not give alcohol"],
      ["stopped shivering", "slow breathing", "confusion", "collapse"],
      ["cold rain", "wind", "wet clothing", "immersion", "high altitude"],
      ["shelter", "dry", "warm core", "gentle handling"],
      ["Hypothermia can happen above freezing when wet and windy.", "Confusion is a serious sign.", "Rough movement can worsen heart rhythm problems."]
    ),
    drowning: quickAidGuide(
      "drowning",
      "critical",
      "Drowning or Near-Drowning",
      "Get the person out safely, call emergency services, and start rescue breathing/CPR if not breathing normally.",
      ["coughing after water", "difficulty breathing", "blue lips", "unresponsive", "vomiting"],
      ["Call emergency services.", "Remove from water only if safe for you.", "Check breathing and start CPR if needed.", "Keep warm and monitor even if they seem better."],
      ["do not enter dangerous water without support", "do not assume recovery is complete", "do not delay medical review after breathing problems"],
      ["persistent cough", "sleepiness", "worse breathing", "chest pain"],
      ["rip currents", "alcohol", "fatigue", "cold water", "unexpected depth"],
      ["safe rescue", "call", "airway and CPR", "medical review"],
      ["Breathing problems can worsen after water inhalation.", "Rescuer safety comes first.", "Children need close monitoring after any submersion event."]
    ),
    eyeInjury: quickAidGuide(
      "eyeInjury",
      "medium",
      "Eye Injury or Chemical Splash",
      "Rinse chemical splashes immediately and protect the eye from rubbing or pressure.",
      ["pain", "redness", "blurred vision", "foreign body sensation", "chemical exposure"],
      ["Flush chemical exposure with clean water for at least 15 minutes.", "Do not rub the eye.", "Cover both eyes loosely if a serious injury is suspected.", "Seek urgent care for vision changes, cuts, or chemicals."],
      ["do not remove embedded objects", "do not apply pressure", "do not use random drops after chemicals"],
      ["vision loss", "severe pain", "blood in eye", "chemical burn"],
      ["sand", "branches", "chemicals", "contact lenses", "sports or traffic injuries"],
      ["rinse chemicals", "protect", "avoid pressure", "urgent eye care"],
      ["Chemical splashes are time-critical.", "Embedded objects should be handled by clinicians.", "Both eyes move together, so covering both can reduce movement."]
    ),
    animalBite: quickAidGuide(
      "animalBite",
      "high",
      "Animal Bite or Scratch",
      "Wash deeply, control bleeding, and seek urgent medical advice for rabies or infection risk.",
      ["puncture wound", "bleeding", "swelling", "redness", "pain"],
      ["Wash with soap and running water for several minutes.", "Apply pressure for bleeding.", "Cover with a clean dressing.", "Seek medical care, especially after dog, monkey, bat, or wild animal exposure."],
      ["do not ignore small punctures", "do not approach the animal again", "do not delay rabies advice"],
      ["spreading redness", "fever", "pus", "numbness", "unknown animal vaccination status"],
      ["dogs", "monkeys", "bats", "cats", "wildlife", "feeding animals"],
      ["wash", "dress", "document the animal", "medical review"],
      ["Rabies prevention is urgent after some exposures.", "Puncture wounds can become infected.", "Photos from a safe distance can help identify the animal."]
    ),
    seizure: quickAidGuide(
      "seizure",
      "high",
      "Seizure",
      "Protect from injury, time the seizure, keep the airway clear, and call help if it lasts more than 5 minutes.",
      ["shaking", "staring", "confusion", "loss of awareness", "sleepiness after"],
      ["Clear hazards around the person.", "Cushion the head and loosen tight clothing.", "Time the seizure.", "Call emergency services if it lasts over 5 minutes, repeats, or follows injury."],
      ["do not hold them down", "do not put anything in the mouth", "do not give food or drink until alert"],
      ["seizure over 5 minutes", "breathing trouble", "injury", "pregnancy", "water-related seizure"],
      ["epilepsy", "fever", "head injury", "low blood sugar", "alcohol withdrawal"],
      ["protect", "time", "recovery position after", "call if prolonged"],
      ["Most seizures stop on their own.", "The main job is preventing injury.", "Recovery confusion can last minutes."]
    ),
    panicShock: quickAidGuide(
      "panicShock",
      "medium",
      "Panic, Shock, or Acute Stress",
      "Move to a calmer place, slow breathing, check for injury, and seek help if symptoms do not settle.",
      ["rapid breathing", "trembling", "chest tightness", "pale skin", "confusion"],
      ["Move away from immediate danger.", "Use slow breathing and simple reassurance.", "Check for hidden injury or dehydration.", "Call medical help if chest pain, fainting, or severe confusion occurs."],
      ["do not crowd the person", "do not dismiss chest pain", "do not leave a confused person alone"],
      ["fainting", "worsening chest pain", "suicidal thoughts", "severe confusion"],
      ["accidents", "crowds", "air alerts", "crime", "heat stress", "medical fear"],
      ["safety", "breathing", "fluids if alert", "medical check for red flags"],
      ["Panic can mimic heart or breathing emergencies.", "Shock after injury is physical and dangerous.", "Calm instructions help people regain control."]
    ),
    diabeticEmergency: quickAidGuide(
      "diabeticEmergency",
      "high",
      "Diabetic Emergency",
      "Give fast sugar only if the person is awake and able to swallow; call help if confused or unconscious.",
      ["sweating", "shaking", "confusion", "weakness", "unusual behavior"],
      ["Ask if they have diabetes.", "If awake and swallowing, give glucose, juice, or sugary drink.", "Recheck improvement after 10 to 15 minutes.", "Call emergency services if unconscious, seizing, or not improving."],
      ["do not give food or drink to an unconscious person", "do not give insulin unless it is their plan", "do not ignore confusion"],
      ["loss of consciousness", "seizure", "worsening confusion", "vomiting"],
      ["missed meal", "extra exercise", "insulin or medicine", "illness", "heat and dehydration"],
      ["sugar if safe", "monitor", "call if severe", "recovery position if unconscious"],
      ["Low blood sugar can look like intoxication.", "Heat and travel schedules increase risk.", "Medical ID or a Medical Card helps responders."]
    ),
    poisoning: quickAidGuide(
      "poisoning",
      "critical",
      "Poisoning or Overdose",
      "Call emergency services or poison help, keep packaging, and do not make the person vomit unless instructed.",
      ["vomiting", "confusion", "sleepiness", "breathing changes", "burns around mouth"],
      ["Move away from danger if fumes are present.", "Call emergency services or poison advice.", "Keep product packaging or pill bottles.", "Put unconscious breathing person in recovery position."],
      ["do not induce vomiting", "do not give food or drink unless instructed", "do not wait for symptoms after serious exposure"],
      ["slow breathing", "seizure", "collapse", "chemical burns"],
      ["medicines", "alcohol", "cleaning chemicals", "plants", "carbon monoxide", "food toxins"],
      ["call", "identify substance", "protect airway", "follow professional instructions"],
      ["Different poisons need different treatment.", "Packaging helps clinicians.", "Carbon monoxide requires fresh air and urgent care."]
    )
  };

  const coreGuideIds = [
    "severeBleeding",
    "cprUnresponsive",
    "choking",
    "allergicReaction",
    "heatIllness",
    "chestPain",
    "strokeSigns",
    "asthmaAttack",
    "burn",
    "fractureSprain",
    "snakebite",
    "foodWater",
    "animalBite",
    "seizure",
    "diabeticEmergency",
    "hypothermia",
    "drowning",
    "eyeInjury",
    "poisoning",
    "panicShock",
    "insectSting",
    "tickBite",
    "jellyfish",
    "plantRash",
    "altitude",
    "blastInjury",
    "shelterSafety"
  ];

  const phraseBase = {
    doctor: { source: bi("I need a doctor", "Менi потрiбен лiкар") },
    ambulance: { source: bi("Please call an ambulance", "Будь ласка, викличте швидку") },
    allergy: { source: bi("I have an allergy", "У мене алергiя") },
    pain: { source: bi("I am in severe pain", "У мене сильний бiль") },
    hospital: { source: bi("Take me to the nearest hospital", "Вiдвезiть мене до найближчої лiкарнi") },
    embassy: { source: bi("Help me contact my embassy", "Допоможiть зв'язатися з посольством") }
  };

  const phraseLocales = {
    en: {
      doctor: { local: "I need a doctor", translit: "I need a doctor" },
      ambulance: { local: "Please call an ambulance", translit: "Please call an ambulance" },
      allergy: { local: "I have an allergy", translit: "I have an allergy" },
      pain: { local: "I am in severe pain", translit: "I am in severe pain" },
      hospital: { local: "Take me to the nearest hospital", translit: "Take me to the nearest hospital" },
      embassy: { local: "Help me contact my embassy", translit: "Help me contact my embassy" }
    },
    uk: {
      doctor: { local: "Менi потрiбен лiкар", translit: "Meni potriben likar" },
      ambulance: { local: "Будь ласка, викличте швидку", translit: "Bud laska, vyklychte shvydku" },
      allergy: { local: "У мене алергiя", translit: "U mene alerhiia" },
      pain: { local: "У мене сильний бiль", translit: "U mene sylnyi bil" },
      hospital: { local: "Вiдвезiть мене до найближчої лiкарнi", translit: "Vidvezit mene do naiblyzhchoi likarni" },
      embassy: { local: "Допоможiть зв'язатися з посольством", translit: "Dopomozhit zviazatyssia z posolstvom" }
    },
    es: {
      doctor: { local: "Necesito un medico", translit: "Necesito un medico" },
      ambulance: { local: "Llame a una ambulancia, por favor", translit: "Llame a una ambulancia, por favor" },
      allergy: { local: "Tengo una alergia", translit: "Tengo una alergia" },
      pain: { local: "Tengo mucho dolor", translit: "Tengo mucho dolor" },
      hospital: { local: "Lleveme al hospital mas cercano", translit: "Lleveme al hospital mas cercano" },
      embassy: { local: "Ayudeme a contactar a mi embajada", translit: "Ayudeme a contactar a mi embajada" }
    },
    fr: {
      doctor: { local: "J'ai besoin d'un medecin", translit: "Jai besoin dun medecin" },
      ambulance: { local: "Appelez une ambulance, s'il vous plait", translit: "Appelez une ambulance, sil vous plait" },
      allergy: { local: "J'ai une allergie", translit: "Jai une allergie" },
      pain: { local: "J'ai tres mal", translit: "Jai tres mal" },
      hospital: { local: "Emmenez-moi a l'hopital le plus proche", translit: "Emmenez-moi a lhopital le plus proche" },
      embassy: { local: "Aidez-moi a contacter mon ambassade", translit: "Aidez-moi a contacter mon ambassade" }
    },
    it: {
      doctor: { local: "Ho bisogno di un medico", translit: "Ho bisogno di un medico" },
      ambulance: { local: "Chiami un'ambulanza, per favore", translit: "Chiami unambulanza, per favore" },
      allergy: { local: "Ho un'allergia", translit: "Ho unallergia" },
      pain: { local: "Ho un forte dolore", translit: "Ho un forte dolore" },
      hospital: { local: "Portami all'ospedale piu vicino", translit: "Portami allospedale piu vicino" },
      embassy: { local: "Aiutami a contattare la mia ambasciata", translit: "Aiutami a contattare la mia ambasciata" }
    },
    pt: {
      doctor: { local: "Preciso de um medico", translit: "Preciso de um medico" },
      ambulance: { local: "Chame uma ambulancia, por favor", translit: "Chame uma ambulancia, por favor" },
      allergy: { local: "Tenho alergia", translit: "Tenho alergia" },
      pain: { local: "Estou com muita dor", translit: "Estou com muita dor" },
      hospital: { local: "Leve-me ao hospital mais proximo", translit: "Leve-me ao hospital mais proximo" },
      embassy: { local: "Ajude-me a contactar a minha embaixada", translit: "Ajude-me a contactar a minha embaixada" }
    },
    th: {
      doctor: { local: "ฉันต้องการแพทย์", translit: "Chan tongkan phaet" },
      ambulance: { local: "กรุณาเรียกรถพยาบาล", translit: "Karuna riak rot phayaban" },
      allergy: { local: "ฉันมีอาการแพ้", translit: "Chan mi akan pae" },
      pain: { local: "ฉันเจ็บมาก", translit: "Chan jep mak" },
      hospital: { local: "พาฉันไปโรงพยาบาลที่ใกล้ที่สุด", translit: "Pha chan pai rong phayaban thi klai thi sut" },
      embassy: { local: "ช่วยติดต่อสถานทูตของฉัน", translit: "Chuai titto sathantut khong chan" }
    },
    ja: {
      doctor: { local: "医者が必要です", translit: "Isha ga hitsuyo desu" },
      ambulance: { local: "救急車を呼んでください", translit: "Kyukyu sha o yonde kudasai" },
      allergy: { local: "アレルギーがあります", translit: "Arerugi ga arimasu" },
      pain: { local: "ひどい痛みがあります", translit: "Hidoi itami ga arimasu" },
      hospital: { local: "一番近い病院に連れて行ってください", translit: "Ichiban chikai byoin ni tsurete itte kudasai" },
      embassy: { local: "大使館に連絡するのを手伝ってください", translit: "Taishikan ni renraku suru no o tetsudatte kudasai" }
    },
    ko: {
      doctor: { local: "의사가 필요합니다", translit: "Uisaga piryohamnida" },
      ambulance: { local: "구급차를 불러 주세요", translit: "Gugeupchareul bulleo juseyo" },
      allergy: { local: "알레르기가 있습니다", translit: "Allereugiga itseumnida" },
      pain: { local: "심한 통증이 있습니다", translit: "Simhan tongjeung-i itseumnida" },
      hospital: { local: "가장 가까운 병원으로 데려다 주세요", translit: "Gajang gakkaun byeongwon-euro deryeoda juseyo" },
      embassy: { local: "대사관에 연락할 수 있게 도와주세요", translit: "Daesagwan-e yeollakhal su itge dowajuseyo" }
    },
    ar: {
      doctor: { local: "أحتاج إلى طبيب", translit: "Ahtaj ila tabib" },
      ambulance: { local: "من فضلك اتصل بسيارة إسعاف", translit: "Min fadlik ittasel bisayarat iisaf" },
      allergy: { local: "لدي حساسية", translit: "Laday hasasiya" },
      pain: { local: "أعاني من ألم شديد", translit: "Ueani min alam shadid" },
      hospital: { local: "خذني إلى أقرب مستشفى", translit: "Khudhni ila aqrab mustashfa" },
      embassy: { local: "ساعدني في الاتصال بسفارتي", translit: "Saeidni fi alaitisal bisafarati" }
    },
    tr: {
      doctor: { local: "Doktora ihtiyacim var", translit: "Doktora ihtiyacim var" },
      ambulance: { local: "Lutfen ambulans cagir", translit: "Lutfen ambulans cagir" },
      allergy: { local: "Alerjim var", translit: "Alerjim var" },
      pain: { local: "Cok siddetli agrim var", translit: "Cok siddetli agrim var" },
      hospital: { local: "Beni en yakin hastaneye gotur", translit: "Beni en yakin hastaneye gotur" },
      embassy: { local: "Elciligimle iletisim kurmama yardim et", translit: "Elciligimle iletisim kurmama yardim et" }
    },
    de: {
      doctor: { local: "Ich brauche einen Arzt", translit: "Ich brauche einen Arzt" },
      ambulance: { local: "Bitte rufen Sie einen Krankenwagen", translit: "Bitte rufen Sie einen Krankenwagen" },
      allergy: { local: "Ich habe eine Allergie", translit: "Ich habe eine Allergie" },
      pain: { local: "Ich habe starke Schmerzen", translit: "Ich habe starke Schmerzen" },
      hospital: { local: "Bringen Sie mich ins nachste Krankenhaus", translit: "Bringen Sie mich ins nachste Krankenhaus" },
      embassy: { local: "Bitte helfen Sie mir, meine Botschaft zu kontaktieren", translit: "Bitte helfen Sie mir, meine Botschaft zu kontaktieren" }
    },
    nl: {
      doctor: { local: "Ik heb een dokter nodig", translit: "Ik heb een dokter nodig" },
      ambulance: { local: "Bel alstublieft een ambulance", translit: "Bel alstublieft een ambulance" },
      allergy: { local: "Ik heb een allergie", translit: "Ik heb een allergie" },
      pain: { local: "Ik heb erge pijn", translit: "Ik heb erge pijn" },
      hospital: { local: "Breng me naar het dichtstbijzijnde ziekenhuis", translit: "Breng me naar het dichtstbijzijnde ziekenhuis" },
      embassy: { local: "Help me mijn ambassade te contacteren", translit: "Help me mijn ambassade te contacteren" }
    },
    cs: {
      doctor: { local: "Potrebuji lekare", translit: "Potrebuji lekare" },
      ambulance: { local: "Prosim zavolejte sanitku", translit: "Prosim zavolejte sanitku" },
      allergy: { local: "Mam alergii", translit: "Mam alergii" },
      pain: { local: "Mam silnou bolest", translit: "Mam silnou bolest" },
      hospital: { local: "Odvezte me do nejblizsi nemocnice", translit: "Odvezte me do nejblizsi nemocnice" },
      embassy: { local: "Pomozte mi kontaktovat ambasadu", translit: "Pomozte mi kontaktovat ambasadu" }
    },
    el: {
      doctor: { local: "Χρειαζομαι γιατρο", translit: "Chreiazomai giatro" },
      ambulance: { local: "Παρακαλω καλεστε ασθενοφορο", translit: "Parakalo kaleste asthenoforo" },
      allergy: { local: "Εχω αλλεργια", translit: "Echo allergia" },
      pain: { local: "Εχω εντονο πονο", translit: "Echo entono pono" },
      hospital: { local: "Πηγαιντε με στο κοντινοτερο νοσοκομειο", translit: "Pigaine me sto kontinitero nosokomeio" },
      embassy: { local: "Βοηθηστε με να επικοινωνησω με την πρεσβεια μου", translit: "Voithiste me na epikoinoniso me tin presveia mou" }
    },
    id: {
      doctor: { local: "Saya butuh dokter", translit: "Saya butuh dokter" },
      ambulance: { local: "Tolong panggil ambulans", translit: "Tolong panggil ambulans" },
      allergy: { local: "Saya punya alergi", translit: "Saya punya alergi" },
      pain: { local: "Saya kesakitan", translit: "Saya kesakitan" },
      hospital: { local: "Bawa saya ke rumah sakit terdekat", translit: "Bawa saya ke rumah sakit terdekat" },
      embassy: { local: "Tolong bantu hubungi kedutaan saya", translit: "Tolong bantu hubungi kedutaan saya" }
    }
  };

  const emergencySystems = {
    eu: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "112", note: bi("Single emergency line", "Єдина екстрена лiнiя"), verified: true },
      { kind: "medical", label: bi("Medical", "Медична"), number: "112", note: bi("Single emergency line", "Єдина екстрена лiнiя"), verified: true },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "112", note: bi("Single emergency line", "Єдина екстрена лiнiя"), verified: true }
    ],
    uk: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "999", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: true },
      { kind: "medical", label: bi("Medical", "Медична"), number: "999", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: true },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "999", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: true }
    ],
    us: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "911", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: true },
      { kind: "medical", label: bi("Medical", "Медична"), number: "911", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: true },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "911", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: true }
    ],
    th: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "191", note: bi("Police emergency", "Екстрена полiцiя"), verified: true },
      { kind: "medical", label: bi("Medical", "Медична"), number: "1669", note: bi("Emergency medical service", "Екстрена медична допомога"), verified: true },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "199", note: bi("Fire and rescue", "Пожежа та порятунок"), verified: true }
    ],
    ua: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "102", note: bi("Police emergency", "Екстрена полiцiя"), verified: true },
      { kind: "medical", label: bi("Medical", "Медична"), number: "103", note: bi("Emergency medical care", "Екстрена медична допомога"), verified: true },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "101", note: bi("Fire and rescue", "Пожежа та порятунок"), verified: true }
    ],
    jp: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "110", note: bi("Police emergency", "Екстрена полiцiя"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "119", note: bi("Ambulance and fire dispatch", "Швидка та пожежна лiнiя"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "119", note: bi("Ambulance and fire dispatch", "Швидка та пожежна лiнiя"), verified: false }
    ],
    kr: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "112", note: bi("Police emergency", "Екстрена полiцiя"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "119", note: bi("Ambulance and fire dispatch", "Швидка та пожежна лiнiя"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "119", note: bi("Ambulance and fire dispatch", "Швидка та пожежна лiнiя"), verified: false }
    ],
    sg: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "999", note: bi("Police emergency", "Екстрена полiцiя"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "995", note: bi("Ambulance dispatch", "Виклик швидкої"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "995", note: bi("Fire and ambulance dispatch", "Пожежна та швидка"), verified: false }
    ],
    ae: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "999", note: bi("Police emergency", "Екстрена полiцiя"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "998", note: bi("Ambulance dispatch", "Виклик швидкої"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "997", note: bi("Fire emergency", "Екстрена пожежна"), verified: false }
    ],
    tr: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "112", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "112", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "112", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false }
    ],
    au: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "000", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "000", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "000", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false }
    ],
    nz: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "111", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "111", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "111", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false }
    ],
    mx: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "911", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "911", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "911", note: bi("National emergency line", "Нацiональна екстрена лiнiя"), verified: false }
    ],
    br: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "190", note: bi("Police emergency", "Екстрена полiцiя"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "192", note: bi("Ambulance dispatch", "Виклик швидкої"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "193", note: bi("Fire emergency", "Екстрена пожежна"), verified: false }
    ],
    ar: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "911", note: bi("Police emergency", "Екстрена полiцiя"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "107", note: bi("Ambulance dispatch", "Виклик швидкої"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "100", note: bi("Fire emergency", "Екстрена пожежна"), verified: false }
    ],
    universal: [
      { kind: "police", label: bi("Police", "Полiцiя"), number: "112", note: bi("Seed emergency line - verify locally", "Seed екстрена лiнiя - перевiрте локально"), verified: false },
      { kind: "medical", label: bi("Medical", "Медична"), number: "112", note: bi("Seed emergency line - verify locally", "Seed екстрена лiнiя - перевiрте локально"), verified: false },
      { kind: "fire", label: bi("Fire", "Пожежна"), number: "112", note: bi("Seed emergency line - verify locally", "Seed екстрена лiнiя - перевiрте локально"), verified: false }
    ]
  };

  const outlineTemplates = {
    beach: "M14 62 C18 34 34 18 56 15 C77 12 88 30 86 48 C84 67 69 84 47 86 C27 88 11 78 14 62 Z",
    city: "M18 22 C35 15 63 15 79 23 L85 42 C82 68 69 84 47 86 C27 88 14 72 14 48 Z",
    island: "M22 66 C14 49 20 25 44 18 C67 12 87 28 84 50 C82 68 66 83 45 85 C32 86 24 79 22 66 Z",
    mountain: "M12 76 L26 42 L40 60 L55 28 L71 56 L88 34 L88 88 L12 88 Z",
    desert: "M12 70 C20 54 34 44 51 39 C66 34 78 24 87 18 L88 88 L12 88 Z",
    conflict: "M14 20 L54 16 C75 17 88 32 88 50 C88 68 74 84 54 85 L18 82 C12 62 11 39 14 20 Z"
  };

  function cloneEmergencySet(systemKey) {
    const set = emergencySystems[systemKey] || emergencySystems.universal;
    return set.map((item) => ({ ...item }));
  }

  function makePhrasebook(langKey) {
    const target = phraseLocales[langKey] || phraseLocales.en;
    return Object.keys(phraseBase).map((id) => ({
      id,
      source: phraseBase[id].source,
      local: target[id].local,
      translit: target[id].translit
    }));
  }

  function makeHospitals(seed, emergencyNumbers) {
    const medical = emergencyNumbers.find((item) => item.kind === "medical") || emergencyNumbers[0];
    return [
      {
        name: `${seed.name} Central Emergency Hospital`,
        phone: medical.number,
        address: `Main emergency hospital zone in ${seed.name}`,
        x: 67,
        y: 42,
        verified: false
      },
      {
        name: `${seed.name} Tourist Medical Clinic`,
        phone: medical.number,
        address: `Tourist support clinic near the central district of ${seed.name}`,
        x: 44,
        y: 66,
        verified: false
      }
    ];
  }

  function makeAlerts(seed) {
    if (seed.profile === "conflict") {
      return [
        {
          title: bi("Air Alerts and Missile Risk", "Повiтрянi Тривоги та Ракетна Загроза"),
          severity: "critical",
          levelLabel: bi("ALERT", "ТРИВОГА"),
          tag: bi("Conflict", "Вiйна"),
          body: bi(
            "Move immediately to the nearest shelter, metro, underpass, or protected core of a building. Stay away from windows and glass.",
            "Негайно прямуйте до найближчого укриття, метро, переходу або захищеного ядра будiвлi. Тримайтеся подалi вiд вiкон та скла."
          ),
          actions: bi(
            ["know two nearby shelters", "carry documents, water, and a power bank", "leave only after the all-clear and local assessment"],
            ["знайте два найближчi укриття", "майте при собi документи, воду та power bank", "виходьте лише пiсля вiдбою та локальної оцiнки"]
          )
        },
        {
          title: bi("Debris and Unexploded Objects", "Уламки та Нерозiрванi Предмети"),
          severity: "critical",
          levelLabel: bi("ALERT", "ТРИВОГА"),
          tag: bi("Safety", "Безпека"),
          body: bi(
            "Do not touch suspicious objects. Mark the place from a safe distance and call emergency services.",
            "Не торкайтеся пiдозрiлих предметiв. Позначте мiсце з безпечної вiдстанi та викликайте екстренi служби."
          ),
          actions: bi(
            ["keep distance", "warn other people", "avoid parking nearby"],
            ["тримайте дистанцiю", "попереджайте iнших", "не паркуйтеся поруч"]
          )
        },
        {
          title: bi("Power and Network Outages", "Вiдключення Свiтла та Зв'язку"),
          severity: "high",
          levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
          tag: bi("Infrastructure", "Iнфраструктура"),
          body: bi(
            "Keep your phone charged, save the offline map, and pre-arrange a meeting point if messaging goes down.",
            "Тримайте телефон зарядженим, зберiгайте офлайн-мапу та заздалегiдь домовляйтеся про точку зустрiчi, якщо зникне зв'язок."
          ),
          actions: bi(
            ["charge whenever possible", "keep paper addresses", "avoid elevators during unstable power"],
            ["заряджайте пристрої за можливостi", "тримайте паперовi адреси", "уникайте лiфтiв при нестабiльному живленнi"]
          )
        }
      ];
    }

    if (seed.profile === "mountain") {
      return [
        {
          title: bi("Altitude and Weather Exposure", "Висота та Погодні Ризики"),
          severity: "high",
          levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
          tag: bi("Mountain", "Гори"),
          body: bi(
            "Rapid elevation gain, cold wind, and poor visibility can turn a short route into a rescue situation.",
            "Швидкий набiр висоти, холодний вiтер та погана видимiсть можуть перетворити короткий маршрут на рятувальну ситуацiю."
          ),
          actions: bi(
            ["carry layers and water", "turn back early if symptoms worsen", "download the route before departure"],
            ["майте шари одягу та воду", "розвертайтеся рано при погiршеннi", "завантажуйте маршрут до виходу"]
          )
        },
        {
          title: bi("Trail Injuries and Falls", "Травми та Падiння На Маршрутах"),
          severity: "high",
          levelLabel: bi("ALERT", "ТРИВОГА"),
          tag: bi("Safety", "Безпека"),
          body: bi(
            "Uneven ground, cliffs, and sudden weather changes increase the risk of serious injury far from quick rescue access.",
            "Нерiвний рельєф, урвища та рiзкi змiни погоди збiльшують ризик серйозних травм далеко вiд швидкої допомоги."
          ),
          actions: bi(
            ["leave route details with someone", "carry a light bandage kit", "avoid solo hikes in poor visibility"],
            ["залишайте комусь маршрут", "майте легку перев'язувальну аптечку", "уникайте соло-походiв при поганiй видимостi"]
          )
        },
        {
          title: bi("Cold Stress and Late Return", "Переохолодження та Пiзнє Повернення"),
          severity: "medium",
          levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
          tag: bi("Environment", "Довкiлля"),
          body: bi(
            "Temperatures drop quickly after sunset even in popular tourist areas. Build a return margin into your route.",
            "Температура швидко падає пiсля заходу сонця навiть у популярних туристичних районах. Плануйте маршрут iз запасом часу."
          ),
          actions: bi(
            ["track sunset time", "carry a headlamp", "keep one sheltered fallback point"],
            ["враховуйте час заходу сонця", "майте налобний лiхтар", "тримайте запасну захищену точку"]
          )
        }
      ];
    }

    if (seed.profile === "desert") {
      return [
        {
          title: bi("Extreme Heat and Dehydration", "Екстремальна Спека та Зневоднення"),
          severity: "high",
          levelLabel: bi("ALERT", "ТРИВОГА"),
          tag: bi("Heat", "Спека"),
          body: bi(
            "Desert heat builds fast. Shade, water, and short exposure windows matter more than distance.",
            "Пустельна спека наростає дуже швидко. Тiнь, вода i короткi виходи важливiшi за вiдстань."
          ),
          actions: bi(
            ["plan midday breaks", "carry extra water", "avoid long walks without shade"],
            ["плануйте полуденнi перерви", "майте запас води", "уникайте довгих переходiв без тiнi"]
          )
        },
        {
          title: bi("Traffic and Road Isolation", "Дороги та Вiддаленi Дiлянки"),
          severity: "medium",
          levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
          tag: bi("Transport", "Транспорт"),
          body: bi(
            "Popular desert routes may still leave you far from fast medical access. Save a return point before moving out.",
            "Навiть популярнi пустельнi маршрути можуть залишати вас далеко вiд швидкої медичної допомоги. Збережiть точку повернення заздалегiдь."
          ),
          actions: bi(
            ["save transport contacts", "carry phone power", "share your route before leaving"],
            ["зберiгайте транспортнi контакти", "майте заряд для телефону", "дiлiться маршрутом перед виходом"]
          )
        },
        {
          title: bi("Air Quality and Dust", "Якiсть Повiтря та Пил"),
          severity: "medium",
          levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
          tag: bi("Environment", "Довкiлля"),
          body: bi(
            "Dust, traffic haze, and dry air can worsen breathing conditions and dehydration.",
            "Пил, трафiковий смог i сухе повiтря можуть погiршувати дихальнi симптоми та зневоднення."
          ),
          actions: bi(
            ["carry water", "limit exertion during haze", "keep respiratory medication accessible"],
            ["майте воду", "зменшуйте навантаження при смозi", "тримайте лiки для дихання пiд рукою"]
          )
        }
      ];
    }

    if (seed.profile === "island") {
      return [
        {
          title: bi("Monsoon Rain and Coastal Flooding", "Мусоннi Зливи та Прибережнi Пiдтоплення"),
          severity: "high",
          levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
          tag: bi("Storm", "Шторм"),
          body: bi(
            "Heavy rain can block island roads and trails quickly. Leave early and avoid low ground during storms.",
            "Сильний дощ може швидко перекривати дороги та стежки на островi. Вирушайте ранiше та уникайте низин пiд час штормiв."
          ),
          actions: bi(
            ["leave with daylight", "save an inland fallback point", "watch road closures after rain"],
            ["виходьте завчасно при денному свiтлi", "майте запасну внутрiшню точку", "стежте за перекриттями дорiг пiсля дощу"]
          )
        },
        {
          title: bi("Jellyfish and Reef Cuts", "Медузи та Порiзи На Рифах"),
          severity: "medium",
          levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
          tag: bi("Marine", "Море"),
          body: bi(
            "Popular beaches can still have jellyfish, reef cuts, and strong current zones after weather changes.",
            "Навiть популярнi пляжi можуть мати медуз, порiзи на рифах i сильнi течiї пiсля змiн погоди."
          ),
          actions: bi(
            ["swim in marked zones", "wear water shoes where needed", "leave the water early if conditions change"],
            ["плавайте в позначених зонах", "носiть взуття для води де потрiбно", "виходьте з води при змiнi умов"]
          )
        },
        {
          title: bi("Mosquito and Animal Exposure", "Комахи та Контакт iз Тваринами"),
          severity: "medium",
          levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
          tag: bi("Wildlife", "Тварини"),
          body: bi(
            "Humid island settings increase bites, scratches, and skin infections if wounds are ignored.",
            "Вологi острiвнi умови збiльшують ризик укусiв, подряпин i шкiрних iнфекцiй, якщо рани iгнорувати."
          ),
          actions: bi(
            ["clean even small wounds", "carry repellent", "avoid feeding animals"],
            ["обробляйте навiть дрiбнi рани", "майте репелент", "не годуйте тварин"]
          )
        }
      ];
    }

    if (seed.profile === "beach") {
      return [
        {
          title: bi("Heat and Dehydration", "Спека та Зневоднення"),
          severity: "high",
          levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
          tag: bi("Heat", "Спека"),
          body: bi(
            "Sun exposure, long city walks, and open waterfronts can push dehydration faster than expected.",
            "Сонце, довгi переходи мiстом i вiдкритi набережнi можуть викликати зневоднення швидше, нiж очiкується."
          ),
          actions: bi(
            ["start with water before walking", "take shade breaks", "avoid peak midday hours"],
            ["пийте воду ще до виходу", "робiть паузи в тiнi", "уникайте пiкових полуденних годин"]
          )
        },
        {
          title: bi("Sea Conditions and Rip Current Risk", "Стан Моря та Небезпечнi Течiї"),
          severity: "high",
          levelLabel: bi("ALERT", "ТРИВОГА"),
          tag: bi("Marine", "Море"),
          body: bi(
            "Marked beaches can still become unsafe after wind or storms. Respect local flags and lifeguard guidance.",
            "Навiть позначенi пляжi можуть стати небезпечними пiсля вiтру або шторму. Дотримуйтеся локальних прапорiв та вказiвок рятувальникiв."
          ),
          actions: bi(
            ["check flags before entering", "avoid swimming alone", "leave the water when surf grows"],
            ["дивiться на прапори перед заходом у воду", "не плавайте наодинцi", "виходьте з води при посиленнi хвиль"]
          )
        },
        {
          title: bi("Tourist Zone Petty Risk", "Ризики У Туристичних Зонах"),
          severity: "medium",
          levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
          tag: bi("Safety", "Безпека"),
          body: bi(
            "Crowded promenades and beach access points increase the chance of distraction, lost phones, or medical separation from companions.",
            "Переповненi набережнi та виходи до пляжу збiльшують ризик втрати телефону, вiдволiкання та роз'єднання з супутниками."
          ),
          actions: bi(
            ["agree on a meeting point", "keep one offline contact note", "charge the phone before beach time"],
            ["домовтеся про точку зустрiчi", "майте один офлайн-контакт", "заряджайте телефон перед часом на пляжi"]
          )
        }
      ];
    }

    return [
      {
        title: bi("Urban Heat and Long Walking Days", "Мiська Спека та Довгi Переходи"),
        severity: "high",
        levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
        tag: bi("Heat", "Спека"),
        body: bi(
          "Dense tourist schedules, queues, and open plazas can lead to heat stress faster than expected.",
          "Насичений туристичний графiк, черги та вiдкритi площi можуть спричинити тепловий стрес швидше, нiж очiкується."
        ),
        actions: bi(
          ["carry water", "plan shade stops", "use public transport for long midday moves"],
          ["майте воду", "плануйте зупинки в тiнi", "використовуйте транспорт для довгих полуденних переходiв"]
        )
      },
      {
        title: bi("Crowds and Transport Disruption", "Натовпи та Збої Транспорту"),
        severity: "medium",
        levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
        tag: bi("Transport", "Транспорт"),
        body: bi(
          "Popular districts can change flow quickly during events, strikes, or weather. Keep one alternate route.",
          "Популярнi райони можуть швидко змiнювати рух пiд час подiй, страйкiв або погоди. Тримайте один запасний маршрут."
        ),
        actions: bi(
          ["download one backup route", "keep hotel address offline", "set a fallback meeting point"],
          ["завантажте резервний маршрут", "майте адресу готелю офлайн", "визначте запасну точку зустрiчi"]
        )
      },
      {
        title: bi("Food and Water Illness", "Харчове та Водне Отруєння"),
        severity: "medium",
        levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
        tag: bi("Health", "Здоров'я"),
        body: bi(
          "Travel pace can hide early dehydration from stomach illness. Start fluids earlier than you think.",
          "Темп подорожi може приховувати раннє зневоднення вiд шлункових розладiв. Починайте регiдратацiю ранiше."
        ),
        actions: bi(
          ["carry rehydration salts", "rest early", "seek care if symptoms persist"],
          ["майте регiдратацiйнi солi", "рано вiдпочивайте", "звертайтеся по допомогу, якщо симптоми тривають"]
        )
      }
    ];
  }

  function makeCommonAlerts(seed) {
    const profileTag = {
      beach: bi("Beach", "Пляж"),
      island: bi("Island", "Острiв"),
      city: bi("City", "Мiсто"),
      mountain: bi("Mountain", "Гори"),
      desert: bi("Desert", "Пустеля"),
      conflict: bi("Safety", "Безпека")
    }[seed.profile] || bi("Travel", "Подорож");

    return [
      {
        title: bi("Heat, UV, and Dehydration", "Спека, UV та зневоднення"),
        severity: seed.profile === "desert" || seed.profile === "beach" ? "high" : "medium",
        levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
        tag: bi("Weather", "Погода"),
        body: bi(
          "Long walking days, queues, and direct sun can cause dehydration before you feel thirsty.",
          "Довгi прогулянки, черги та пряме сонце можуть спричинити зневоднення ще до вiдчуття спраги."
        ),
        actions: bi(["carry water", "take shade breaks", "reduce midday exertion"], ["майте воду", "робiть перерви в тiнi", "зменшуйте навантаження опiвднi"])
      },
      {
        title: bi("Heavy Rain, Flooding, and Hail", "Сильний дощ, пiдтоплення та град"),
        severity: seed.profile === "island" || seed.profile === "mountain" ? "high" : "medium",
        levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
        tag: bi("Storm", "Шторм"),
        body: bi(
          "Storm cells can block streets, trails, and underpasses quickly. Hail can injure exposed people.",
          "Грозовi осередки можуть швидко блокувати вулицi, маршрути та пiдземнi переходи. Град може травмувати людей на вiдкритому мiсцi."
        ),
        actions: bi(["avoid underpasses in floods", "move indoors during hail", "keep shoes and phone power ready"], ["уникайте пiдземних переходiв при пiдтопленнi", "заходьте в примiщення пiд час граду", "тримайте взуття i заряд телефону готовими"])
      },
      {
        title: bi("Food, Water, and Traveler Illness", "Їжа, вода та хвороби мандрiвника"),
        severity: "medium",
        levelLabel: bi("WARNING", "ПОПЕРЕДЖЕННЯ"),
        tag: bi("Medical", "Медицина"),
        body: bi(
          "New food, heat, and fast schedules can turn stomach illness into dehydration.",
          "Нова їжа, спека та швидкий темп подорожi можуть швидко перетворити розлад шлунка на зневоднення."
        ),
        actions: bi(["start oral rehydration early", "avoid risky water", "seek help for blood, fever, or severe weakness"], ["починайте регiдратацiю рано", "уникайте небезпечної води", "звертайтеся по допомогу при кровi, температурi або сильнiй слабкостi"])
      },
      {
        title: bi("Insects, Animals, and Plants", "Комахи, тварини та рослини"),
        severity: seed.profile === "island" || seed.profile === "beach" ? "medium" : "low",
        levelLabel: bi("NOTICE", "УВАГА"),
        tag: profileTag,
        body: bi(
          "Bites, scratches, and plant exposure can become serious if swelling, fever, or allergy symptoms appear.",
          "Укуси, подряпини та контакт з рослинами можуть стати серйозними, якщо з'являються набряк, температура або ознаки алергiї."
        ),
        actions: bi(["clean wounds", "use repellent", "do not feed animals"], ["обробляйте рани", "використовуйте репелент", "не годуйте тварин"])
      },
      {
        title: bi("Crowds, Transport, and Restricted Areas", "Натовпи, транспорт та обмеженi зони"),
        severity: seed.profile === "conflict" ? "high" : "medium",
        levelLabel: bi("NOTICE", "УВАГА"),
        tag: bi("Security", "Безпека"),
        body: bi(
          "Crowds, demonstrations, closures, or restricted zones can separate groups and delay medical access.",
          "Натовпи, демонстрацiї, перекриття або обмеженi зони можуть роз'єднати групу i затримати доступ до медичної допомоги."
        ),
        actions: bi(["keep a meeting point", "carry hotel address offline", "leave restricted areas early"], ["майте точку зустрiчi", "збережiть адресу готелю офлайн", "заздалегiдь залишайте обмеженi зони"])
      }
    ];
  }

  function makeWeatherProfile(seed) {
    const byProfile = {
      beach: {
        summary: "Hot sun, humidity, rough surf after wind, and sudden rain are the main weather factors.",
        summaryUk: "Гаряче сонце, вологiсть, сильнi хвилi пiсля вiтру та раптовий дощ - головнi погоднi фактори.",
        anomalies: ["high UV and heat index", "strong rain and street flooding", "rough sea and rip currents"],
        anomaliesUk: ["високий UV та iндекс спеки", "сильний дощ i пiдтоплення вулиць", "бурхливе море та небезпечнi течiї"]
      },
      island: {
        summary: "Island weather can switch from heat to heavy rain quickly, with roads blocked by water or debris.",
        summaryUk: "Острiвна погода може швидко змiнюватися вiд спеки до зливи, а дороги блокуються водою або уламками.",
        anomalies: ["monsoon rain", "coastal flooding", "lightning and strong wind"],
        anomaliesUk: ["мусонний дощ", "прибережне пiдтоплення", "блискавка та сильний вiтер"]
      },
      mountain: {
        summary: "Elevation changes bring colder wind, low visibility, hail, rain, or snow even near tourist towns.",
        summaryUk: "Змiна висоти приносить холодний вiтер, погану видимiсть, град, дощ або снiг навiть поряд з туристичними мiстами.",
        anomalies: ["sudden cold", "hail or heavy rain", "fog and low visibility"],
        anomaliesUk: ["раптовий холод", "град або сильний дощ", "туман i низька видимiсть"]
      },
      desert: {
        summary: "Dry heat, dust, and long exposed routes increase dehydration and breathing strain.",
        summaryUk: "Суха спека, пил i довгi вiдкритi маршрути збiльшують ризик зневоднення та навантаження на дихання.",
        anomalies: ["extreme heat", "dust and poor air quality", "rapid dehydration"],
        anomaliesUk: ["екстремальна спека", "пил i погана якiсть повiтря", "швидке зневоднення"]
      },
      conflict: {
        summary: "Weather combines with power outages, shelter movement, and damaged infrastructure.",
        summaryUk: "Погода поєднується з вiдключеннями, перемiщенням до укриття та пошкодженою iнфраструктурою.",
        anomalies: ["heat or cold exposure during alerts", "storm water near shelters", "smoke, dust, and poor air"],
        anomaliesUk: ["спека або холод пiд час тривог", "зливова вода бiля укриттiв", "дим, пил i погане повiтря"]
      },
      city: {
        summary: "Urban heat, sudden storms, hail, and transport disruption are the main short-notice risks.",
        summaryUk: "Мiська спека, раптовi грози, град i збої транспорту - головнi ризики без довгого попередження.",
        anomalies: ["urban heat", "heavy rain and hail", "air pollution or smoke"],
        anomaliesUk: ["мiська спека", "сильний дощ i град", "забруднення повiтря або дим"]
      }
    };
    const profile = byProfile[seed.profile] || byProfile.city;
    return {
      summary: bi(profile.summary, profile.summaryUk),
      anomalies: bi(profile.anomalies, profile.anomaliesUk)
    };
  }

  function makeCountryRules(seed) {
    const shared = [
      "Keep emergency numbers saved and use the phone call button in SOS.",
      "Carry ID, insurance, and hotel address offline.",
      "Follow official alerts, lifeguards, police instructions, and local signage.",
      "Avoid demonstrations, restricted zones, and unsafe shortcuts."
    ];
    const sharedUk = [
      "Збережiть екстренi номери i використовуйте кнопку дзвiнка в SOS.",
      "Майте офлайн ID, страховку та адресу готелю.",
      "Дотримуйтесь офiцiйних сповiщень, вказiвок рятувальникiв, полiцiї та локальних знакiв.",
      "Уникайте демонстрацiй, обмежених зон i небезпечних коротких шляхiв."
    ];

    if (seed.profile === "conflict") {
      return bi(
        ["Move to shelter during alerts.", "Stay away from windows and damaged structures.", "Do not touch debris or suspicious objects.", ...shared.slice(0, 3)],
        ["Переходьте в укриття пiд час тривог.", "Тримайтеся подалi вiд вiкон i пошкоджених конструкцiй.", "Не торкайтеся уламкiв або пiдозрiлих предметiв.", ...sharedUk.slice(0, 3)]
      );
    }

    if (seed.profile === "beach" || seed.profile === "island") {
      return bi(
        ["Respect beach flags and lifeguards.", "Avoid swimming alone or after alcohol.", "Leave the water when weather changes.", ...shared],
        ["Поважайте пляжнi прапори та вказiвки рятувальникiв.", "Не плавайте наодинцi або пiсля алкоголю.", "Виходьте з води при змiнi погоди.", ...sharedUk]
      );
    }

    if (seed.profile === "mountain") {
      return bi(
        ["Share your route before leaving.", "Turn back early in bad weather.", "Carry layers, water, and offline map.", ...shared],
        ["Повiдомте маршрут перед виходом.", "Розвертайтеся рано при поганiй погодi.", "Майте шари одягу, воду та офлайн-мапу.", ...sharedUk]
      );
    }

    return bi(shared, sharedUk);
  }

  function makeDangerZones(seed) {
    if (seed.profile === "conflict") {
      return [
        { x: 54, y: 44, r: 14, severity: "critical", label: bi("Alert corridor", "Зона тривоги") },
        { x: 72, y: 68, r: 10, severity: "high", label: bi("Infrastructure risk", "Iнфраструктурний ризик") }
      ];
    }

    if (seed.profile === "mountain") {
      return [
        { x: 37, y: 52, r: 13, severity: "high", label: bi("Exposure zone", "Зона ризику погоди") },
        { x: 68, y: 58, r: 9, severity: "medium", label: bi("Trail injury risk", "Ризик травм на маршруті") }
      ];
    }

    if (seed.profile === "desert") {
      return [
        { x: 62, y: 48, r: 14, severity: "high", label: bi("Heat zone", "Зона спеки") },
        { x: 34, y: 70, r: 10, severity: "medium", label: bi("Road isolation", "Вiддаленi дороги") }
      ];
    }

    if (seed.profile === "island" || seed.profile === "beach") {
      return [
        { x: 70, y: 68, r: 12, severity: "high", label: bi("Sea hazard", "Морський ризик") },
        { x: 38, y: 40, r: 12, severity: "medium", label: bi("Heat zone", "Зона спеки") }
      ];
    }

    return [
      { x: 42, y: 36, r: 12, severity: "high", label: bi("Urban heat", "Мiська спека") },
      { x: 74, y: 64, r: 10, severity: "medium", label: bi("Transport pressure", "Транспортний тиск") }
    ];
  }

  function makeShelters(seed) {
    if (seed.profile === "conflict") {
      return [
        {
          name: bi("Metro Shelter", "Укриття в Метро"),
          type: bi("Underground shelter", "Пiдземне укриття"),
          note: bi("Primary shelter during air alerts.", "Основне укриття пiд час повiтряної тривоги."),
          x: 50,
          y: 62
        },
        {
          name: bi("Protected Parking Core", "Захищений Паркiнг"),
          type: bi("Temporary shelter", "Тимчасове укриття"),
          note: bi("Use only when open and locally approved.", "Використовуйте лише коли доступно та дозволено локально."),
          x: 36,
          y: 54
        }
      ];
    }

    if (seed.profile === "mountain") {
      return [
        {
          name: bi("Trail Rescue Hut", "Рятувальний Хатинок"),
          type: bi("Sheltered rest point", "Захищена точка вiдпочинку"),
          note: bi("Fallback point for storms or altitude symptoms.", "Запасна точка при штормi або симптомах висоти."),
          x: 58,
          y: 72
        }
      ];
    }

    if (seed.profile === "desert") {
      return [
        {
          name: bi("Cooling Point", "Пункт Охолодження"),
          type: bi("Indoor cooling shelter", "Прохолодне примiщення"),
          note: bi("Use during extreme midday heat.", "Використовуйте в пiкову денну спеку."),
          x: 48,
          y: 66
        }
      ];
    }

    return [
      {
        name: bi("Emergency Assembly Point", "Точка Безпеки"),
        type: bi("Safe meetup point", "Безпечна точка зустрiчi"),
        note: bi("Use if you lose contact or need a fallback location.", "Використовуйте, якщо загубили зв'язок або потрiбна запасна точка."),
        x: 52,
        y: 72
      }
    ];
  }

  function makeRoutes(seed) {
    if (seed.profile === "conflict") {
      return [
        { label: bi("Route to nearest shelter", "Маршрут до найближчого укриття"), points: "78,72 68,66 58,63 50,62" },
        { label: bi("Route to trauma center", "Маршрут до травма-центру"), points: "24,76 38,68 52,56 67,42" }
      ];
    }

    if (seed.profile === "mountain") {
      return [
        { label: bi("Route to rescue hut", "Маршрут до рятувального пункту"), points: "20,78 34,70 48,72 58,72" },
        { label: bi("Descent to medical access", "Спуск до медичного доступу"), points: "70,60 60,62 52,56 44,50" }
      ];
    }

    return [
      { label: bi("Route to hospital", "Маршрут до лiкарнi"), points: "24,74 38,68 52,58 67,42" },
      { label: bi("Route to safe point", "Маршрут до точки безпеки"), points: "72,74 64,70 58,72 52,72" }
    ];
  }

  function makeQuickBadges(seed) {
    const byProfile = {
      beach: [bi("Beach", "Пляж"), bi("Heat", "Спека"), bi("Sea risk", "Морський ризик")],
      island: [bi("Island", "Острiв"), bi("Storms", "Шторми"), bi("Marine", "Море")],
      city: [bi("City", "Мiсто"), bi("Transit", "Транспорт"), bi("Medical", "Медицина")],
      mountain: [bi("Mountain", "Гори"), bi("Altitude", "Висота"), bi("Weather", "Погода")],
      desert: [bi("Desert", "Пустеля"), bi("Heat", "Спека"), bi("Road risk", "Дорожнi ризики")],
      conflict: [bi("Shelters", "Укриття"), bi("Alerts", "Тривоги"), bi("Medical", "Медицина")]
    };
    return byProfile[seed.profile] || byProfile.city;
  }

  function makeIntro(seed) {
    if (seed.profile === "conflict") {
      return bi(
        `${seed.name} needs a war-focused offline profile with shelters, trauma routes, outage planning, and live alert behavior.`,
        `${seed.name} потребує воєнного офлайн-профiлю з укриттями, маршрутами до травма-допомоги, планом при вiдключеннях та поведiнкою пiд час тривог.`
      );
    }
    if (seed.profile === "mountain") {
      return bi(
        `${seed.name} combines altitude, weather shifts, and slower rescue access than a city trip.`,
        `${seed.name} поєднує висоту, рiзкi змiни погоди та повiльнiший рятувальний доступ, нiж мiська подорож.`
      );
    }
    if (seed.profile === "desert") {
      return bi(
        `${seed.name} is shaped by heat, dry air, road exposure, and fast dehydration during sightseeing.`,
        `${seed.name} визначається спекою, сухим повiтрям, дорожнiми дiлянками та швидким зневодненням пiд час огляду мiста.`
      );
    }
    if (seed.profile === "island") {
      return bi(
        `${seed.name} mixes humid heat, marine risk, sudden rain, and remote stretches with weaker connectivity.`,
        `${seed.name} поєднує вологу спеку, морськi ризики, раптовi дощi та вiддаленi дiлянки зi слабшим зв'язком.`
      );
    }
    if (seed.profile === "beach") {
      return bi(
        `${seed.name} combines long sunny walking days, beach exposure, and fast access to urban emergency services.`,
        `${seed.name} поєднує довгi сонячнi прогулянки, пляжне навантаження та швидкий доступ до мiських екстрених служб.`
      );
    }
    return bi(
      `${seed.name} is a busy tourist destination where crowd flow, heat, transport changes, and food safety matter.`,
      `${seed.name} — це насичений туристичний напрямок, де важливi потоки людей, спека, змiни транспорту та безпека їжi.`
    );
  }

  const destinationSeeds = [
    { id: "phuket", name: "Phuket", nameUk: "Пхукет", country: "Thailand", countryUk: "Таїланд", localLanguageName: "Thai", localLanguageCode: "th-TH", phraseLang: "th", system: "th", profile: "beach", mapShape: "beach", centroid: { lat: 7.8804, lon: 98.3923 }, spotlight: "Beach island emergency profile" },
    { id: "bangkok", name: "Bangkok", nameUk: "Бангкок", country: "Thailand", countryUk: "Таїланд", localLanguageName: "Thai", localLanguageCode: "th-TH", phraseLang: "th", system: "th", profile: "city", mapShape: "city", centroid: { lat: 13.7563, lon: 100.5018 }, spotlight: "Dense city travel hub" },
    { id: "bali", name: "Bali", nameUk: "Балi", country: "Indonesia", countryUk: "Iндонезiя", localLanguageName: "Indonesian", localLanguageCode: "id-ID", phraseLang: "id", system: "universal", profile: "island", mapShape: "island", centroid: { lat: -8.4095, lon: 115.1889 }, spotlight: "Island and surf profile" },
    { id: "singapore", name: "Singapore", nameUk: "Сингапур", country: "Singapore", countryUk: "Сингапур", localLanguageName: "English / Malay", localLanguageCode: "en-SG", phraseLang: "en", system: "sg", profile: "city", mapShape: "city", centroid: { lat: 1.3521, lon: 103.8198 }, spotlight: "Urban tropical destination" },
    { id: "tokyo", name: "Tokyo", nameUk: "Токiо", country: "Japan", countryUk: "Японiя", localLanguageName: "Japanese", localLanguageCode: "ja-JP", phraseLang: "ja", system: "jp", profile: "city", mapShape: "city", centroid: { lat: 35.6762, lon: 139.6503 }, spotlight: "Major world city" },
    { id: "seoul", name: "Seoul", nameUk: "Сеул", country: "South Korea", countryUk: "Пiвденна Корея", localLanguageName: "Korean", localLanguageCode: "ko-KR", phraseLang: "ko", system: "kr", profile: "city", mapShape: "city", centroid: { lat: 37.5665, lon: 126.9780 }, spotlight: "Fast-moving city profile" },
    { id: "dubai", name: "Dubai", nameUk: "Дубай", country: "United Arab Emirates", countryUk: "ОАЕ", localLanguageName: "Arabic / English", localLanguageCode: "ar-AE", phraseLang: "ar", system: "ae", profile: "desert", mapShape: "desert", centroid: { lat: 25.2048, lon: 55.2708 }, spotlight: "Desert heat and urban travel" },
    { id: "istanbul", name: "Istanbul", nameUk: "Стамбул", country: "Turkey", countryUk: "Туреччина", localLanguageName: "Turkish", localLanguageCode: "tr-TR", phraseLang: "tr", system: "tr", profile: "city", mapShape: "city", centroid: { lat: 41.0082, lon: 28.9784 }, spotlight: "Historic transit-heavy city" },
    { id: "cappadocia", name: "Cappadocia", nameUk: "Каппадокiя", country: "Turkey", countryUk: "Туреччина", localLanguageName: "Turkish", localLanguageCode: "tr-TR", phraseLang: "tr", system: "tr", profile: "mountain", mapShape: "mountain", centroid: { lat: 38.6431, lon: 34.8276 }, spotlight: "Hiking and altitude-style travel" },
    { id: "barcelona", name: "Barcelona", nameUk: "Барселона", country: "Spain", countryUk: "Iспанiя", localLanguageName: "Spanish / Catalan", localLanguageCode: "es-ES", phraseLang: "es", system: "eu", profile: "beach", mapShape: "beach", centroid: { lat: 41.3851, lon: 2.1734 }, spotlight: "Beach city and heat profile" },
    { id: "paris", name: "Paris", nameUk: "Париж", country: "France", countryUk: "Францiя", localLanguageName: "French", localLanguageCode: "fr-FR", phraseLang: "fr", system: "eu", profile: "city", mapShape: "city", centroid: { lat: 48.8566, lon: 2.3522 }, spotlight: "Dense urban tourism" },
    { id: "rome", name: "Rome", nameUk: "Рим", country: "Italy", countryUk: "Iталiя", localLanguageName: "Italian", localLanguageCode: "it-IT", phraseLang: "it", system: "eu", profile: "city", mapShape: "city", centroid: { lat: 41.9028, lon: 12.4964 }, spotlight: "Historic city and long walking days" },
    { id: "lisbon", name: "Lisbon", nameUk: "Лiсабон", country: "Portugal", countryUk: "Португалiя", localLanguageName: "Portuguese", localLanguageCode: "pt-PT", phraseLang: "pt", system: "eu", profile: "beach", mapShape: "beach", centroid: { lat: 38.7223, lon: -9.1393 }, spotlight: "Hill city with coastal trips" },
    { id: "london", name: "London", nameUk: "Лондон", country: "United Kingdom", countryUk: "Велика Британiя", localLanguageName: "English", localLanguageCode: "en-GB", phraseLang: "en", system: "uk", profile: "city", mapShape: "city", centroid: { lat: 51.5072, lon: -0.1276 }, spotlight: "Transit-heavy megacity" },
    { id: "amsterdam", name: "Amsterdam", nameUk: "Амстердам", country: "Netherlands", countryUk: "Нiдерланди", localLanguageName: "Dutch / English", localLanguageCode: "nl-NL", phraseLang: "nl", system: "eu", profile: "city", mapShape: "city", centroid: { lat: 52.3676, lon: 4.9041 }, spotlight: "Canals, crowds, bike traffic" },
    { id: "prague", name: "Prague", nameUk: "Прага", country: "Czech Republic", countryUk: "Чехiя", localLanguageName: "Czech", localLanguageCode: "cs-CZ", phraseLang: "cs", system: "eu", profile: "city", mapShape: "city", centroid: { lat: 50.0755, lon: 14.4378 }, spotlight: "Historic city and nightlife flow" },
    { id: "vienna", name: "Vienna", nameUk: "Вiдень", country: "Austria", countryUk: "Австрiя", localLanguageName: "German", localLanguageCode: "de-AT", phraseLang: "de", system: "eu", profile: "city", mapShape: "city", centroid: { lat: 48.2082, lon: 16.3738 }, spotlight: "City museums and transit" },
    { id: "zurich", name: "Zurich", nameUk: "Цюрих", country: "Switzerland", countryUk: "Швейцарiя", localLanguageName: "German", localLanguageCode: "de-CH", phraseLang: "de", system: "eu", profile: "mountain", mapShape: "mountain", centroid: { lat: 47.3769, lon: 8.5417 }, spotlight: "Lake city with alpine access" },
    { id: "athens", name: "Athens", nameUk: "Афiни", country: "Greece", countryUk: "Грецiя", localLanguageName: "Greek", localLanguageCode: "el-GR", phraseLang: "el", system: "eu", profile: "beach", mapShape: "beach", centroid: { lat: 37.9838, lon: 23.7275 }, spotlight: "City plus island departure hub" },
    { id: "marrakech", name: "Marrakech", nameUk: "Марракеш", country: "Morocco", countryUk: "Марокко", localLanguageName: "Arabic / French", localLanguageCode: "ar-MA", phraseLang: "ar", system: "universal", profile: "desert", mapShape: "desert", centroid: { lat: 31.6295, lon: -7.9811 }, spotlight: "Desert gateway and medina travel" },
    { id: "cairo", name: "Cairo", nameUk: "Каїр", country: "Egypt", countryUk: "Єгипет", localLanguageName: "Arabic", localLanguageCode: "ar-EG", phraseLang: "ar", system: "universal", profile: "desert", mapShape: "desert", centroid: { lat: 30.0444, lon: 31.2357 }, spotlight: "Heat and large-city navigation" },
    { id: "cape-town", name: "Cape Town", nameUk: "Кейптаун", country: "South Africa", countryUk: "ПАР", localLanguageName: "English", localLanguageCode: "en-ZA", phraseLang: "en", system: "universal", profile: "beach", mapShape: "beach", centroid: { lat: -33.9249, lon: 18.4241 }, spotlight: "Coastal hikes and city beaches" },
    { id: "new-york", name: "New York", nameUk: "Нью-Йорк", country: "United States", countryUk: "США", localLanguageName: "English", localLanguageCode: "en-US", phraseLang: "en", system: "us", profile: "city", mapShape: "city", centroid: { lat: 40.7128, lon: -74.0060 }, spotlight: "Fast urban emergency access" },
    { id: "mexico-city", name: "Mexico City", nameUk: "Мехiко", country: "Mexico", countryUk: "Мексика", localLanguageName: "Spanish", localLanguageCode: "es-MX", phraseLang: "es", system: "mx", profile: "city", mapShape: "city", centroid: { lat: 19.4326, lon: -99.1332 }, spotlight: "Large city with altitude factor" },
    { id: "rio", name: "Rio de Janeiro", nameUk: "Рiо-де-Жанейро", country: "Brazil", countryUk: "Бразилiя", localLanguageName: "Portuguese", localLanguageCode: "pt-BR", phraseLang: "pt", system: "br", profile: "beach", mapShape: "beach", centroid: { lat: -22.9068, lon: -43.1729 }, spotlight: "Beach and hillside city profile" },
    { id: "buenos-aires", name: "Buenos Aires", nameUk: "Буенос-Айрес", country: "Argentina", countryUk: "Аргентина", localLanguageName: "Spanish", localLanguageCode: "es-AR", phraseLang: "es", system: "ar", profile: "city", mapShape: "city", centroid: { lat: -34.6037, lon: -58.3816 }, spotlight: "Large walking city" },
    { id: "sydney", name: "Sydney", nameUk: "Сiдней", country: "Australia", countryUk: "Австралiя", localLanguageName: "English", localLanguageCode: "en-AU", phraseLang: "en", system: "au", profile: "beach", mapShape: "beach", centroid: { lat: -33.8688, lon: 151.2093 }, spotlight: "Beach city and surf safety" },
    { id: "queenstown", name: "Queenstown", nameUk: "Квiнстаун", country: "New Zealand", countryUk: "Нова Зеландiя", localLanguageName: "English", localLanguageCode: "en-NZ", phraseLang: "en", system: "nz", profile: "mountain", mapShape: "mountain", centroid: { lat: -45.0312, lon: 168.6626 }, spotlight: "Adventure and mountain profile" },
    { id: "reykjavik", name: "Reykjavik", nameUk: "Рейк'явiк", country: "Iceland", countryUk: "Iсландiя", localLanguageName: "Icelandic / English", localLanguageCode: "en-IS", phraseLang: "en", system: "eu", profile: "mountain", mapShape: "mountain", centroid: { lat: 64.1466, lon: -21.9426 }, spotlight: "Cold weather gateway" },
    { id: "kyiv", name: "Kyiv", nameUk: "Київ", country: "Ukraine", countryUk: "Україна", localLanguageName: "Ukrainian", localLanguageCode: "uk-UA", phraseLang: "uk", system: "ua", profile: "conflict", mapShape: "conflict", centroid: { lat: 50.4501, lon: 30.5234 }, spotlight: "Conflict and shelter profile" }
  ];

  function buildDestination(seed) {
    const emergencyNumbers = cloneEmergencySet(seed.system);
    const hospitals = makeHospitals(seed, emergencyNumbers);
    const shelters = makeShelters(seed);
    const routes = makeRoutes(seed);

    return {
      id: seed.id,
      name: bi(seed.name, seed.nameUk),
      country: bi(seed.country, seed.countryUk),
      focus: bi(`${seed.name}, ${seed.country}`, `${seed.nameUk}, ${seed.countryUk}`),
      localLanguageName: seed.localLanguageName,
      localLanguageCode: seed.localLanguageCode,
      profile: seed.profile,
      guideIds: (() => {
        if (seed.profile === "conflict") {
          return ["blastInjury", "shelterSafety", "severeBleeding", "heatIllness", "foodWater"];
        }
        if (seed.profile === "mountain") {
          return ["altitude", "severeBleeding", "tickBite", "snakebite"];
        }
        if (seed.profile === "desert") {
          return ["heatIllness", "foodWater", "insectSting"];
        }
        if (seed.profile === "island") {
          return ["heatIllness", "jellyfish", "insectSting", "foodWater"];
        }
        if (seed.profile === "beach") {
          return ["heatIllness", "jellyfish", "insectSting", "foodWater"];
        }
        return ["heatIllness", "foodWater", "insectSting", "tickBite"];
      })(),
      intro: makeIntro(seed),
      quickBadges: makeQuickBadges(seed),
      emergencyNumbers,
      hospitals,
      consularPoint: {
        name: bi("Embassy / consular district", "Посольство / консульський район"),
        address: bi(`Consular access point in ${seed.name}`, `Консульська точка доступу в ${seed.nameUk}`),
        x: 26,
        y: 54
      },
      alerts: [...makeAlerts(seed), ...makeCommonAlerts(seed)].slice(0, 8),
      countryRules: makeCountryRules(seed),
      weatherProfile: makeWeatherProfile(seed),
      map: {
        outlinePath: outlineTemplates[seed.mapShape] || outlineTemplates.city,
        riverPath: seed.profile === "conflict" ? "M60 18 C56 30 56 42 60 52 C64 63 67 73 67 84" : "",
        dangerZones: makeDangerZones(seed)
      },
      shelters,
      routes,
      phrasebook: makePhrasebook(seed.phraseLang),
      centroid: seed.centroid,
      lastSync: "2026-04-24",
      spotlight: bi(seed.spotlight, seed.spotlight)
    };
  }

  const destinations = Object.fromEntries(destinationSeeds.map((seed) => [seed.id, buildDestination(seed)]));

  const popularPlaces = destinationSeeds.map((seed) => ({
    id: seed.id,
    name: bi(seed.name, seed.nameUk),
    country: bi(seed.country, seed.countryUk),
    language: seed.localLanguageName,
    spotlight: bi(seed.spotlight, seed.spotlight)
  }));

  window.APP_DATA = {
    defaultState: {
      language: "en",
      homeCountry: "ua",
      destination: "phuket"
    },
    languages,
    homeCountries,
    copy,
    dangerMeta,
    aidGuides,
    coreGuideIds,
    destinations,
    popularPlaces
  };
})();
