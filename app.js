(function bootstrapFieldAid() {
  const STORAGE_KEY = "fieldaid-mobile-v2";
  const appData = window.APP_DATA;
  const localeMap = {
    en: "en-US",
    uk: "uk-UA",
    ua: "uk-UA"
  };

  const riskLabels = {
    wildlife: { en: "Wildlife / bites", uk: "Тварини / укуси" },
    heat: { en: "Heat", uk: "Спека" },
    flood: { en: "Flood / storm", uk: "Повiнь / шторм" },
    war: { en: "Conflict / shelling", uk: "Вiйна / обстрiли" },
    infrastructure: { en: "Power / roads", uk: "Свiтло / дороги" }
  };

  const incidentLabels = {
    "fallen-tree": { en: "Fallen tree", uk: "Повале дерево" },
    "power-outage": { en: "Power outage", uk: "Вiдключення свiтла" },
    "blocked-road": { en: "Blocked road", uk: "Перекрита дорога" },
    medical: { en: "Medical risk", uk: "Медичний ризик" },
    fire: { en: "Fire / smoke", uk: "Пожежа / дим" },
    security: { en: "Security / conflict", uk: "Ризик безпеки" }
  };

  let installPromptEvent = null;
  let swRegistration = null;
  let toastTimer = null;
  let activePhrase = null;
  let activeCustomTranslation = "";

  const state = loadState();
  const refs = getRefs();

  init();

  function init() {
    bindEvents();
    registerServiceWorker();
    renderAll();
  }

  function getRefs() {
    return {
      installButton: document.querySelector("#install-button"),
      syncBadge: document.querySelector("#sync-badge"),
      locateButton: document.querySelector("#locate-button"),
      languageSelect: document.querySelector("#language-select"),
      homeCountrySelect: document.querySelector("#home-country-select"),
      destinationSelect: document.querySelector("#destination-select"),
      pinAreaButton: document.querySelector("#pin-area-button"),
      sosLocationTitle: document.querySelector("#sos-location-title"),
      sosLocationSubtitle: document.querySelector("#sos-location-subtitle"),
      sosLocationCard: document.querySelector("#sos-location-card"),
      sosServiceGrid: document.querySelector("#sos-service-grid"),
      sosConsularCard: document.querySelector("#sos-consular-card"),
      gpsHelpSubtitle: document.querySelector("#gps-help-subtitle"),
      sosHelpPoints: document.querySelector("#sos-help-points"),
      countryRules: document.querySelector("#country-rules"),
      weatherPanel: document.querySelector("#weather-panel"),
      translatorInput: document.querySelector("#translator-input"),
      translatorOutput: document.querySelector("#translator-output"),
      sosPhraseList: document.querySelector("#sos-phrase-list"),
      hazardsSubtitle: document.querySelector("#hazards-subtitle"),
      hazardsList: document.querySelector("#hazards-list"),
      alertZoneForm: document.querySelector("#alert-zone-form"),
      alertZoneList: document.querySelector("#alert-zone-list"),
      aidSubtitle: document.querySelector("#aid-subtitle"),
      aidGuides: document.querySelector("#aid-guides"),
      mapSubtitle: document.querySelector("#map-subtitle"),
      googleMapFrame: document.querySelector("#google-map-frame"),
      mapLegend: document.querySelector("#map-legend"),
      mapActions: document.querySelector("#map-actions"),
      mapFocusList: document.querySelector("#map-focus-list"),
      mapPointList: document.querySelector("#map-point-list"),
      profileSummary: document.querySelector("#profile-summary"),
      medicalCardForm: document.querySelector("#medical-card-form"),
      medicalBloodType: document.querySelector("#medical-blood-type"),
      medicalAllergies: document.querySelector("#medical-allergies"),
      medicalDiseases: document.querySelector("#medical-diseases"),
      medicalMedications: document.querySelector("#medical-medications"),
      medicalCardPreview: document.querySelector("#medical-card-preview"),
      contactForm: document.querySelector("#contact-form"),
      trustedContactList: document.querySelector("#trusted-contact-list"),
      noteForm: document.querySelector("#note-form"),
      notesList: document.querySelector("#notes-list"),
      incidentForm: document.querySelector("#incident-form"),
      incidentFeed: document.querySelector("#incident-feed"),
      popularDestinations: document.querySelector("#popular-destinations"),
      navTabs: Array.from(document.querySelectorAll(".nav-tab")),
      tabPanels: Array.from(document.querySelectorAll(".tab-panel")),
      phraseModal: document.querySelector("#phrase-modal"),
      phraseModalBody: document.querySelector("#phrase-modal-body"),
      phraseSpeakButton: document.querySelector("#phrase-speak-button"),
      phraseCloseButton: document.querySelector("#phrase-close-button"),
      toast: document.querySelector("#toast")
    };
  }

  function bindEvents() {
    refs.languageSelect.addEventListener("change", (event) => {
      state.language = event.target.value;
      activeCustomTranslation = "";
      saveState();
      renderAll();
    });

    refs.homeCountrySelect.addEventListener("change", (event) => {
      state.homeCountry = event.target.value;
      saveState();
      renderAll();
    });

    refs.destinationSelect.addEventListener("change", (event) => {
      state.destination = event.target.value;
      state.mapFocus = "destination";
      activeCustomTranslation = "";
      saveState();
      renderAll();
    });

    refs.locateButton.addEventListener("click", handleDetectLocation);
    refs.pinAreaButton.addEventListener("click", handlePinArea);
    refs.syncBadge.addEventListener("click", () => {
      renderSyncState();
      toast(t("statusUpdated"));
    });
    refs.installButton.addEventListener("click", async () => {
      setActiveTab("profile");
      if (installPromptEvent) {
        try {
          installPromptEvent.prompt();
          await installPromptEvent.userChoice;
          installPromptEvent = null;
        } catch (error) {
          // keep profile opening as the primary action
        }
      }
    });
    refs.alertZoneForm.addEventListener("submit", handleSaveZone);
    refs.medicalCardForm.addEventListener("submit", handleSaveMedicalCard);
    refs.contactForm.addEventListener("submit", handleSaveContact);
    refs.noteForm.addEventListener("submit", handleSaveNote);
    refs.incidentForm.addEventListener("submit", handleSaveIncident);

    refs.navTabs.forEach((button) => {
      button.addEventListener("click", () => setActiveTab(button.dataset.tabTarget));
    });

    refs.phraseSpeakButton.addEventListener("click", () => {
      if (activePhrase) {
        speakText(activePhrase.local, getDestination().localLanguageCode);
      }
    });

    refs.phraseCloseButton.addEventListener("click", () => refs.phraseModal.close());

    document.body.addEventListener("click", handleActionClick);

    window.addEventListener("online", renderSyncState);
    window.addEventListener("offline", renderSyncState);

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      installPromptEvent = event;
    });
  }

  function loadState() {
    const base = {
      language: getPreferredLanguage(),
      homeCountry: appData.defaultState.homeCountry,
      destination: appData.defaultState.destination,
      activeTab: "sos",
      pinnedDestinations: [appData.defaultState.destination],
      alertZones: [],
      trustedContacts: [],
      notes: [],
      incidentReports: [],
      lastLocation: null,
      mapFocus: "destination",
      medicalCard: {
        bloodType: "",
        allergies: "",
        chronicDiseases: "",
        medications: ""
      }
    };

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return base;
      }

      const saved = JSON.parse(raw);
      const savedLanguage = saved.language ? normalizeLanguage(saved.language) : base.language;
      return {
        ...base,
        ...saved,
        language: savedLanguage,
        pinnedDestinations: Array.isArray(saved.pinnedDestinations) ? saved.pinnedDestinations : base.pinnedDestinations,
        alertZones: Array.isArray(saved.alertZones) ? saved.alertZones : [],
        trustedContacts: Array.isArray(saved.trustedContacts) ? saved.trustedContacts : [],
        notes: Array.isArray(saved.notes) ? saved.notes : [],
        incidentReports: Array.isArray(saved.incidentReports) ? saved.incidentReports : [],
        medicalCard: typeof saved.medicalCard === "object" && saved.medicalCard ? { ...base.medicalCard, ...saved.medicalCard } : base.medicalCard
      };
    } catch (error) {
      return base;
    }
  }

  function saveState() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function t(key) {
    const dictionary = appData.copy[normalizeLanguage(state.language)] || appData.copy.en;
    return dictionary[key] || appData.copy.en[key] || key;
  }

  function pickText(value) {
    if (value == null) {
      return "";
    }

    if (typeof value === "string") {
      return value;
    }

    const language = normalizeLanguage(state.language);
    return value[language] || value.en || value.uk || Object.values(value)[0] || "";
  }

  function pickArray(value) {
    if (value == null) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    const language = normalizeLanguage(state.language);
    return value[language] || value.en || value.uk || [];
  }

  function normalizeLanguage(language) {
    return language === "ua" ? "uk" : appData.copy[language] ? language : "en";
  }

  function getPreferredLanguage() {
    const browserLanguage = (navigator.language || navigator.userLanguage || "").toLowerCase();
    if (browserLanguage.startsWith("uk") || browserLanguage.startsWith("ua")) {
      return "uk";
    }

    return appData.defaultState.language;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function biText(en, uk) {
    return { en, uk };
  }

  function getDestination() {
    return appData.destinations[state.destination] || appData.destinations[appData.defaultState.destination];
  }

  function getHomeCountry() {
    return appData.homeCountries.find((country) => country.id === state.homeCountry) || appData.homeCountries[0];
  }

  function getConsularSupport() {
    const homeCountry = getHomeCountry();
    const destination = getDestination();

    if (homeCountry.id === "ua" && destination.id === "athens") {
      return {
        title: pickText(biText("Embassy of Ukraine in Greece", "Посольство України в Грецiї")),
        note: pickText(biText("Official consular support for Ukrainians in Greece.", "Офiцiйна консульська допомога українцям у Грецiї.")),
        phone: "+302106800230",
        url: "https://greece.mfa.gov.ua",
        verified: true,
        address: "2 Stephanou Delta Str., 152 37 Filothei, Athens, Greece"
      };
    }

    if (homeCountry.consular) {
      return {
        title: pickText(homeCountry.consular.title),
        note: pickText(homeCountry.consular.note),
        phone: homeCountry.consular.phone,
        url: homeCountry.consular.url,
        verified: homeCountry.consular.verified,
        address: pickText(destination.consularPoint.address)
      };
    }

    return {
      title: `${pickText(homeCountry.label)} ${t("consularSupport")}`,
      note: `${pickText(homeCountry.label)} ${t("openConsularInfo").toLowerCase()}.`,
      phone: "",
      url: "",
      verified: false,
      address: pickText(destination.consularPoint.address)
    };
  }

  function renderAll() {
    state.language = normalizeLanguage(state.language);
    document.documentElement.lang = localeMap[state.language] || localeMap.en;
    document.title = `FieldAid - ${pickText(getDestination().name)}`;
    populateSelects();
    applyTranslations();
    renderSyncState();
    renderSOS();
    renderHazards();
    renderAid();
    renderMap();
    renderProfile();
    setActiveTab(state.activeTab || "sos", false);
  }

  function populateSelects() {
    refs.languageSelect.innerHTML = appData.languages
      .map((language) => `<option value="${language.id}">${escapeHtml(language.label)}</option>`)
      .join("");

    refs.homeCountrySelect.innerHTML = appData.homeCountries
      .map((country) => `<option value="${country.id}">${escapeHtml(pickText(country.label))}</option>`)
      .join("");

    refs.destinationSelect.innerHTML = appData.popularPlaces
      .map((place) => `<option value="${place.id}">${escapeHtml(pickText(place.name))} - ${escapeHtml(pickText(place.country))}</option>`)
      .join("");

    refs.languageSelect.value = state.language;
    refs.homeCountrySelect.value = state.homeCountry;
    refs.destinationSelect.value = state.destination;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });
  }

  function renderSyncState() {
    refs.syncBadge.textContent = navigator.onLine ? "online" : "offline";
  }

  function renderSOS() {
    const destination = getDestination();
    const homeCountry = getHomeCountry();
    const consular = getConsularSupport();
    const primaryMedical = destination.emergencyNumbers.find((item) => item.kind === "medical") || destination.emergencyNumbers[0];

    refs.sosLocationTitle.textContent = `${pickText(destination.name)}, ${pickText(destination.country)}`;
    refs.sosLocationSubtitle.textContent = `${t("localLanguage")}: ${destination.localLanguageName}`;

    refs.sosLocationCard.innerHTML = `
      <div class="hero-stack">
        <div class="hero-location">
          <h3>${escapeHtml(t("currentArea"))}: ${escapeHtml(pickText(destination.focus))}</h3>
          <p>${escapeHtml(pickText(destination.intro))}</p>
        </div>
        <button class="sos-button" type="button" data-action="call-primary">SOS</button>
        <p class="hero-caption">${escapeHtml(`${t("callEmergency")}: ${primaryMedical.number}`)}</p>
        <div class="action-row">
          <button class="secondary-button" type="button" data-action="share-location">${escapeHtml(t("shareLocation"))}</button>
          <button class="ghost-button" type="button" data-action="open-profile">${escapeHtml(t("openProfileSettings"))}</button>
        </div>
        <div class="hero-badges">
          <span class="pill active">${escapeHtml(t("localLanguage"))}: ${escapeHtml(destination.localLanguageName)}</span>
          <span class="pill">${escapeHtml(t("homeCountry"))}: ${escapeHtml(pickText(homeCountry.label))}</span>
        </div>
      </div>
    `;

    refs.sosServiceGrid.innerHTML = destination.emergencyNumbers
      .slice(0, 3)
      .map(
        (item) => `
          <a class="service-card" href="tel:${dialNumber(item.number)}" aria-label="${escapeHtml(pickText(item.label))}">
            <div class="service-ring">${iconSvg(serviceIconName(item.kind))}</div>
            <small>${escapeHtml(pickText(item.label))}</small>
            <strong class="service-number mono">${escapeHtml(item.number)}</strong>
            <span class="service-note">${escapeHtml(pickText(item.note))}</span>
          </a>
        `
      )
      .join("");

    refs.sosConsularCard.innerHTML = [
      `
      <article class="consular-card">
        <div class="badge-row">
          <span class="badge ${consular.verified ? "low" : "medium"}">${escapeHtml(consular.verified ? t("verifiedOfficial") : t("seedDirectory"))}</span>
          <span class="pill">${escapeHtml(t("consularSupport"))}</span>
        </div>
        <div>
          <strong>${escapeHtml(consular.title)}</strong>
          <p>${escapeHtml(consular.note)}</p>
          <p>${escapeHtml(consular.address)}</p>
        </div>
        <div class="consular-actions">
          ${
            consular.phone
              ? `<a class="link-button" href="tel:${dialNumber(consular.phone)}">${escapeHtml(consular.phone)}</a>`
              : ""
          }
          ${
            consular.url
              ? `<button class="link-button" type="button" data-action="open-external" data-url="${escapeHtml(consular.url)}">${escapeHtml(t("openConsularInfo"))}</button>`
              : ""
          }
        </div>
      </article>
      `,
      ...destination.hospitals.map((item) => {
        const mapUrl = googleExternalUrl(pointDescriptor(destination, item.x, item.y, item.name, item.address, item.name, item.mapQuery || mapSearchQuery(destination, item.name, item.address)));
        return `
          <article class="consular-card">
            <div class="badge-row">
              <span class="badge ${item.verified ? "low" : "medium"}">${escapeHtml(item.verified ? t("verifiedOfficial") : t("seedDirectory"))}</span>
              <span class="pill">${escapeHtml(t("hospitals"))}</span>
            </div>
            <div>
              <strong>${escapeHtml(item.name)}</strong>
              <p>${escapeHtml(item.address)}</p>
            </div>
            <div class="consular-actions">
              <a class="link-button" href="tel:${dialNumber(item.phone)}">${escapeHtml(item.phone)}</a>
              <button class="link-button" type="button" data-action="open-external" data-url="${escapeHtml(mapUrl)}">${escapeHtml(t("openFullMap"))}</button>
            </div>
          </article>
        `;
      }),
      ...destination.shelters.slice(0, 2).map((item) => {
        const title = pickText(item.name);
        const note = pickText(item.note);
        const mapUrl = googleExternalUrl(pointDescriptor(destination, item.x, item.y, title, note, title, mapSearchQuery(destination, title, note)));
        return `
          <article class="consular-card">
            <div class="badge-row">
              <span class="badge medium">${escapeHtml(t("seedDirectory"))}</span>
              <span class="pill">${escapeHtml(t("shelters"))}</span>
            </div>
            <div>
              <strong>${escapeHtml(title)}</strong>
              <p>${escapeHtml(note)}</p>
            </div>
            <div class="consular-actions">
              <button class="link-button" type="button" data-action="open-external" data-url="${escapeHtml(mapUrl)}">${escapeHtml(t("openFullMap"))}</button>
            </div>
          </article>
        `;
      })
    ].join("");

    const origin = state.lastLocation || destination.centroid;
    const helpPoints = buildSOSHelpPoints(destination, consular);

    refs.gpsHelpSubtitle.textContent = state.lastLocation ? t("gpsActive") : t("gpsHint");
    refs.sosHelpPoints.innerHTML = helpPoints
      .map(
        (item) => `
          <article class="mini-item help-point">
            <div class="mini-meta">
              <span class="badge ${item.tone}">${escapeHtml(item.type)}</span>
              <span class="pill">${escapeHtml(distanceLabel(origin, item.point))}</span>
            </div>
            <strong>${escapeHtml(item.point.title)}</strong>
            <p>${escapeHtml(item.point.subtitle)}</p>
            <div class="action-row">
              ${item.phone ? `<a class="link-button" href="tel:${dialNumber(item.phone)}">${escapeHtml(item.phone)}</a>` : ""}
              <button class="link-button" type="button" data-action="open-external" data-url="${escapeHtml(googleExternalUrl(item.point))}">${escapeHtml(t("openFullMap"))}</button>
            </div>
          </article>
        `
      )
      .join("");

    refs.countryRules.innerHTML = pickArray(destination.countryRules)
      .map((rule) => `<div class="rule-item">${escapeHtml(rule)}</div>`)
      .join("");

    refs.weatherPanel.innerHTML = `
      <p class="weather-summary">${escapeHtml(pickText(destination.weatherProfile.summary))}</p>
      <div class="weather-grid">
        ${pickArray(destination.weatherProfile.anomalies)
          .map((item) => `<span class="weather-chip">${escapeHtml(item)}</span>`)
          .join("")}
      </div>
    `;

    if (!activeCustomTranslation) {
      refs.translatorOutput.innerHTML = `
        <span class="sheet-label">${escapeHtml(t("translationResult"))}</span>
        <strong>${escapeHtml(destination.localLanguageName)}</strong>
        <p>${escapeHtml(t("phraseHint"))}</p>
      `;
    }

    refs.sosPhraseList.innerHTML = destination.phrasebook
      .map(
        (phrase) => `
          <button class="translation-row" type="button" data-action="show-phrase" data-id="${phrase.id}">
            <strong>${escapeHtml(pickText(phrase.source))}</strong>
            <span>${escapeHtml(destination.localLanguageName)}</span>
          </button>
        `
      )
      .join("");
  }

  function renderHazards() {
    const destination = getDestination();
    refs.hazardsSubtitle.textContent = `${t("officialFeed")} - ${pickText(destination.name)}`;

    refs.hazardsList.innerHTML = destination.alerts
      .map((alert) => {
        const tone = alert.severity === "critical" || alert.severity === "high" ? "alert" : alert.severity === "medium" ? "warning" : "info";
        return `
          <article class="hazard-card">
            <div class="hazard-strip ${tone}">
              <span class="icon-label">${iconSvg(hazardIconName(alert))}<span>${escapeHtml(pickText(alert.levelLabel))}</span></span>
              <span>${escapeHtml(pickText(alert.tag))}</span>
            </div>
            <div class="badge-row">
              <span class="badge ${alert.severity}">${escapeHtml(pickText(appData.dangerMeta[alert.severity].label))}</span>
            </div>
            <h3 class="icon-title">${iconSvg(hazardIconName(alert))}<span>${escapeHtml(pickText(alert.title))}</span></h3>
            <p>${escapeHtml(pickText(alert.body))}</p>
            <ul>
              ${pickArray(alert.actions)
                .map((item) => `<li>${escapeHtml(item)}</li>`)
                .join("")}
            </ul>
          </article>
        `;
      })
      .join("");

    const zones = state.alertZones
      .filter((zone) => zone.destination === destination.id)
      .sort((a, b) => b.createdAt - a.createdAt);

    refs.alertZoneList.innerHTML = zones.length
      ? zones
          .map(
            (zone) => `
              <article class="mini-item">
                <div class="mini-meta">
                  <span class="badge medium">${escapeHtml(pickText(riskLabels[zone.risk]))}</span>
                  <span class="pill">${escapeHtml(zone.radius)} km</span>
                </div>
                <strong>${escapeHtml(zone.name)}</strong>
                <p>${escapeHtml(zone.note || "")}</p>
                <div class="action-row">
                  <button class="ghost-button" type="button" data-action="delete-zone" data-id="${zone.id}">${escapeHtml(t("remove"))}</button>
                </div>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">${escapeHtml(t("emptyZones"))}</div>`;
  }

  function renderAid() {
    const destination = getDestination();
    const guideIds = getAidGuideIds(destination);
    refs.aidSubtitle.textContent = `${pickText(destination.name)} - ${pickText(destination.country)} · ${guideIds.length} ${t("aidSituationCount")}`;

    refs.aidGuides.innerHTML = guideIds
      .map((guideId) => {
        const guide = appData.aidGuides[guideId];
        const danger = appData.dangerMeta[guide.danger];
        const symptoms = pickArray(guide.symptoms);
        const steps = pickArray(guide.steps);
        const causes = pickArray(guide.causes).length ? pickArray(guide.causes) : pickArray(guide.watchFor);
        const whatToDo = pickArray(guide.whatToDo).length ? pickArray(guide.whatToDo) : steps.slice(0, 4);
        const overview = pickArray(guide.overview).length ? pickArray(guide.overview) : [pickText(guide.summary), ...pickArray(guide.avoid).slice(0, 2)];
        return `
          <details class="aid-card">
            <summary>
              <div class="aid-summary">
                <div class="badge-row">
                  <span class="badge ${guide.danger} icon-label">${iconSvg(aidIconName(guide.id))}<span>${escapeHtml(pickText(danger.label))}</span></span>
                </div>
                <div class="aid-summary-title icon-title">${iconSvg(aidIconName(guide.id))}<span>${escapeHtml(pickText(guide.title))}</span></div>
                <div class="symptom-chips">
                  ${symptoms
                    .slice(0, 5)
                    .map((item) => `<span>${escapeHtml(item)}</span>`)
                    .join("")}
                </div>
              </div>
            </summary>
            <div class="aid-body">
              <div>
                <strong>${escapeHtml(t("symptoms"))}</strong>
                <ul>
                  ${symptoms
                    .map((item) => `<li>${escapeHtml(item)}</li>`)
                    .join("")}
                </ul>
              </div>
              <div>
                <strong>${escapeHtml(t("quickSteps"))}</strong>
                <ol class="aid-step-list">
                  ${steps
                    .map(
                      (item, stepIndex) => `
                        <li class="aid-step">
                          <span class="aid-step-icon">${stepIndex + 1}</span>
                          <span>${escapeHtml(item)}</span>
                        </li>
                      `
                    )
                    .join("")}
                </ol>
              </div>
              <div class="action-row">
                <button class="link-button" type="button" data-action="open-external" data-url="${escapeHtml(youtubeSearchUrl(guide, destination))}">${escapeHtml(t("youtubeSearch"))}</button>
              </div>
              <div class="aid-info-grid">
                ${aidInfoBlock(t("causesTitle"), causes)}
                ${aidInfoBlock(t("whatToDoTitle"), whatToDo)}
                ${aidInfoBlock(t("overviewTitle"), overview)}
              </div>
            </div>
          </details>
        `;
      })
      .join("");
  }

  function renderMap() {
    const destination = getDestination();
    const consular = getConsularSupport();
    const customZones = state.alertZones.filter((zone) => zone.destination === destination.id);
    const reports = state.incidentReports.filter((item) => item.destination === destination.id);
    const criticalPoints = buildCriticalPoints(destination, customZones, reports);
    const focusedPoint = getFocusedMapPoint(criticalPoints);

    refs.mapSubtitle.textContent = `${pickText(destination.name)} - ${t("offlineReady")}`;
    refs.googleMapFrame.src = googleEmbedUrl(focusedPoint);

    refs.mapLegend.innerHTML = [
      legendItem("#1fca8d", t("hospitals")),
      legendItem("#f4c542", t("shelters")),
      legendItem("#ff2f3d", t("consularSupport")),
      legendItem("#ff9d28", t("route")),
      legendItem("#4f8df7", t("mapCustomZones")),
      legendItem("#ff9d28", t("mapIncidentReports"))
    ].join("");

    refs.mapActions.innerHTML = `
      <button class="secondary-button" type="button" data-action="focus-my-location">${escapeHtml(t("myLocation"))}</button>
      <button class="ghost-button" type="button" data-action="open-external" data-url="${escapeHtml(googleExternalUrl(focusedPoint))}">${escapeHtml(t("openFullMap"))}</button>
    `;

    refs.mapFocusList.innerHTML = criticalPoints
      .map(
        (point) => `
          <button class="focus-button ${state.mapFocus === point.id ? "is-active" : ""}" type="button" data-action="focus-map-point" data-id="${point.id}">
            <strong>${escapeHtml(point.title)}</strong>
            <small>${escapeHtml(point.subtitle)}</small>
          </button>
        `
      )
      .join("");

    refs.mapPointList.innerHTML = [
      ...destination.shelters.map(
        (item) => `
          <article class="mini-item">
            <div class="mini-meta">
              <span class="badge medium">${escapeHtml(t("shelters"))}</span>
            </div>
            <strong>${escapeHtml(pickText(item.name))}</strong>
            <p>${escapeHtml(pickText(item.type))}</p>
            <small>${escapeHtml(pickText(item.note))}</small>
          </article>
        `
      ),
      ...destination.hospitals.map(
        (item) => `
          <article class="mini-item">
            <div class="mini-meta">
              <span class="badge low">${escapeHtml(t("hospitals"))}</span>
              <span class="pill">${escapeHtml(item.verified ? t("verifiedOfficial") : t("seedDirectory"))}</span>
            </div>
            <strong>${escapeHtml(item.name)}</strong>
            <p>${escapeHtml(item.address)}</p>
            <div class="action-row">
              <a class="link-button" href="tel:${dialNumber(item.phone)}">${escapeHtml(item.phone)}</a>
              <button class="link-button" type="button" data-action="open-external" data-url="${escapeHtml(googleExternalUrl(pointDescriptor(destination, item.x, item.y, item.name, item.address, item.name, item.mapQuery || mapSearchQuery(destination, item.name, item.address))))}">${escapeHtml(t("openFullMap"))}</button>
            </div>
          </article>
        `
      ),
      `
        <article class="mini-item">
          <div class="mini-meta">
            <span class="badge critical">${escapeHtml(t("consularSupport"))}</span>
            <span class="pill">${escapeHtml(consular.verified ? t("verifiedOfficial") : t("seedDirectory"))}</span>
          </div>
          <strong>${escapeHtml(consular.title)}</strong>
          <p>${escapeHtml(consular.address)}</p>
          <small>${escapeHtml(consular.note)}</small>
          <div class="action-row">
            ${consular.phone ? `<a class="link-button" href="tel:${dialNumber(consular.phone)}">${escapeHtml(consular.phone)}</a>` : ""}
            ${consular.url ? `<button class="link-button" type="button" data-action="open-external" data-url="${escapeHtml(consular.url)}">${escapeHtml(t("openConsularInfo"))}</button>` : ""}
          </div>
        </article>
      `,
      ...customZones.map(
        (zone) => `
          <article class="mini-item">
            <div class="mini-meta">
              <span class="badge medium">${escapeHtml(t("mapCustomZones"))}</span>
              <span class="pill">${escapeHtml(pickText(riskLabels[zone.risk] || zone.risk))}</span>
              <span class="pill">${escapeHtml(zone.radius)} km</span>
            </div>
            <strong>${escapeHtml(zone.name)}</strong>
            <p>${escapeHtml(zone.note || t("watchFor"))}</p>
            <div class="action-row">
              <button class="link-button" type="button" data-action="focus-map-point" data-id="custom-zone-${escapeHtml(zone.id)}">${escapeHtml(t("tapPointHint"))}</button>
            </div>
          </article>
        `
      ),
      ...reports.map(
        (report) => `
          <article class="mini-item">
            <div class="mini-meta">
              <span class="badge high">${escapeHtml(t("mapIncidentReports"))}</span>
              <span class="pill">${escapeHtml(pickText(incidentLabels[report.type] || report.type))}</span>
            </div>
            <strong>${escapeHtml(report.description)}</strong>
            <small>${escapeHtml(formatDate(report.createdAt))}</small>
            <div class="action-row">
              <button class="link-button" type="button" data-action="focus-map-point" data-id="incident-${escapeHtml(report.id)}">${escapeHtml(t("tapPointHint"))}</button>
            </div>
          </article>
        `
      )
    ].join("");
  }

  function renderProfile() {
    const destination = getDestination();
    const homeCountry = getHomeCountry();
    const isPinned = state.pinnedDestinations.includes(destination.id);

    refs.profileSummary.innerHTML = `
      <span class="pill">${escapeHtml(t("profileSummary"))}: ${escapeHtml(pickText(destination.name))}</span>
      <span class="pill">${escapeHtml(t("homeCountry"))}: ${escapeHtml(pickText(homeCountry.label))}</span>
      <span class="pill">${escapeHtml(t("homeLanguage"))}: ${escapeHtml(homeCountry.primaryLanguage)}</span>
      <span class="pill">${escapeHtml(t("localLanguage"))}: ${escapeHtml(destination.localLanguageName)}</span>
      <span class="pill ${isPinned ? "active" : ""}">${escapeHtml(isPinned ? t("savedOffline") : t("offlineReady"))}</span>
    `;

    refs.medicalBloodType.value = state.medicalCard.bloodType || "";
    refs.medicalAllergies.value = state.medicalCard.allergies || "";
    refs.medicalDiseases.value = state.medicalCard.chronicDiseases || "";
    refs.medicalMedications.value = state.medicalCard.medications || "";
    renderMedicalCardPreview();

    refs.trustedContactList.innerHTML = state.trustedContacts.length
      ? state.trustedContacts
          .map(
            (contact) => `
              <article class="mini-item">
                <strong>${escapeHtml(contact.name)}</strong>
                <small>${escapeHtml(contact.channel)}</small>
                <div class="action-row">
                  <button class="secondary-button" type="button" data-action="alert-contact" data-id="${contact.id}">${escapeHtml(t("liveContacts"))}</button>
                  <button class="ghost-button" type="button" data-action="delete-contact" data-id="${contact.id}">${escapeHtml(t("remove"))}</button>
                </div>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">${escapeHtml(t("emptyContacts"))}</div>`;

    const destinationNotes = state.notes
      .filter((note) => note.destination === destination.id)
      .sort((a, b) => b.createdAt - a.createdAt);

    refs.notesList.innerHTML = destinationNotes.length
      ? destinationNotes
          .map(
            (note) => `
              <article class="mini-item">
                <strong>${escapeHtml(note.place)}</strong>
                <p>${escapeHtml(note.text)}</p>
                <small>${escapeHtml(formatDate(note.createdAt))}</small>
                <div class="action-row">
                  <button class="ghost-button" type="button" data-action="delete-note" data-id="${note.id}">${escapeHtml(t("remove"))}</button>
                </div>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">${escapeHtml(t("emptyNotes"))}</div>`;

    const reports = state.incidentReports
      .filter((report) => report.destination === destination.id)
      .sort((a, b) => b.createdAt - a.createdAt);

    refs.incidentFeed.innerHTML = reports.length
      ? reports
          .map(
            (report) => `
              <article class="mini-item">
                <div class="mini-meta">
                  <span class="badge medium">${escapeHtml(pickText(incidentLabels[report.type]))}</span>
                </div>
                <strong>${escapeHtml(report.description)}</strong>
                <small>${escapeHtml(formatDate(report.createdAt))}</small>
                <div class="action-row">
                  <button class="ghost-button" type="button" data-action="delete-report" data-id="${report.id}">${escapeHtml(t("remove"))}</button>
                </div>
              </article>
            `
          )
          .join("")
      : `<div class="empty-state">${escapeHtml(t("emptyReports"))}</div>`;

    refs.popularDestinations.innerHTML = appData.popularPlaces
      .map(
        (place) => `
          <article class="mini-item">
            <div class="mini-meta">
              <span class="badge ${place.id === state.destination ? "critical" : "low"}">${escapeHtml(t("touristHotspots"))}</span>
              <span class="pill">${escapeHtml(place.language)}</span>
            </div>
            <strong>${escapeHtml(pickText(place.name))}</strong>
            <p>${escapeHtml(pickText(place.country))}</p>
            <small>${escapeHtml(pickText(place.spotlight))}</small>
            <div class="action-row">
              <button class="secondary-button" type="button" data-action="select-destination" data-id="${place.id}">${escapeHtml(t("selectDestination"))}</button>
            </div>
          </article>
        `
      )
      .join("");
  }

  function setActiveTab(tabId, shouldSave = true) {
    state.activeTab = tabId;
    refs.navTabs.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.tabTarget === tabId);
    });
    refs.tabPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.tabPanel === tabId);
    });

    if (shouldSave) {
      saveState();
    }
  }

  async function handleDetectLocation() {
    try {
      const location = await getCurrentLocation();
      const destination = detectDestination(location.lat, location.lon);
      state.lastLocation = location;
      state.destination = destination.id;
      state.mapFocus = "me";
      activeCustomTranslation = "";
      saveState();
      renderAll();
      toast(t("locationDetected"));
    } catch (error) {
      toast(t("locationFallback"));
    }
  }

  function handlePinArea() {
    if (!state.pinnedDestinations.includes(state.destination)) {
      state.pinnedDestinations.push(state.destination);
      saveState();
    }
    renderProfile();
    toast(t("offlineSaved"));
  }

  function handleSaveZone(event) {
    event.preventDefault();
    const name = document.querySelector("#zone-name").value.trim();
    const risk = document.querySelector("#zone-risk").value;
    const radius = document.querySelector("#zone-radius").value;
    const note = document.querySelector("#zone-note").value.trim();

    if (!name) {
      return;
    }

    const point = syntheticPoint(state.alertZones.length + 2);
    state.alertZones.push({
      id: createId("zone"),
      destination: state.destination,
      name,
      risk,
      radius,
      note,
      x: point.x,
      y: point.y,
      createdAt: Date.now()
    });

    saveState();
    refs.alertZoneForm.reset();
    document.querySelector("#zone-radius").value = 5;
    renderHazards();
    renderMap();
    toast(t("customZoneSaved"));
  }

  function handleSaveMedicalCard(event) {
    event.preventDefault();
    state.medicalCard = {
      bloodType: refs.medicalBloodType.value.trim(),
      allergies: refs.medicalAllergies.value.trim(),
      chronicDiseases: refs.medicalDiseases.value.trim(),
      medications: refs.medicalMedications.value.trim()
    };

    saveState();
    renderMedicalCardPreview();
    toast(t("medicalCardSaved"));
  }

  function handleSaveContact(event) {
    event.preventDefault();
    const name = document.querySelector("#contact-name").value.trim();
    const channel = document.querySelector("#contact-channel").value.trim();

    if (!name || !channel) {
      return;
    }

    state.trustedContacts.push({
      id: createId("contact"),
      name,
      channel
    });

    saveState();
    refs.contactForm.reset();
    renderProfile();
    toast(t("contactSaved"));
  }

  function handleSaveNote(event) {
    event.preventDefault();
    const place = document.querySelector("#note-place").value.trim();
    const text = document.querySelector("#note-text").value.trim();

    if (!place || !text) {
      return;
    }

    state.notes.push({
      id: createId("note"),
      destination: state.destination,
      place,
      text,
      createdAt: Date.now()
    });

    saveState();
    refs.noteForm.reset();
    renderProfile();
    toast(t("noteSaved"));
  }

  function handleSaveIncident(event) {
    event.preventDefault();
    const type = document.querySelector("#incident-type").value;
    const description = document.querySelector("#incident-description").value.trim();

    if (!description) {
      return;
    }

    const point = syntheticPoint(state.incidentReports.length + 7);
    state.incidentReports.push({
      id: createId("report"),
      destination: state.destination,
      type,
      description,
      x: point.x,
      y: point.y,
      createdAt: Date.now()
    });

    saveState();
    refs.incidentForm.reset();
    renderProfile();
    renderMap();
    toast(t("reportSaved"));
  }

  async function handleActionClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) {
      return;
    }

    const action = target.dataset.action;
    const id = target.dataset.id;

    if (action === "share-location") {
      event.preventDefault();
      await shareLocation();
      return;
    }

    if (action === "call-primary") {
      event.preventDefault();
      const destination = getDestination();
      const primaryMedical = destination.emergencyNumbers.find((item) => item.kind === "medical") || destination.emergencyNumbers[0];
      window.location.href = `tel:${dialNumber(primaryMedical.number)}`;
      return;
    }

    if (action === "show-phrase") {
      event.preventDefault();
      openPhrase(id);
      return;
    }

    if (action === "translate-custom") {
      event.preventDefault();
      handleCustomTranslation();
      return;
    }

    if (action === "speak-custom-translation") {
      event.preventDefault();
      if (activeCustomTranslation) {
        speakText(activeCustomTranslation, getDestination().localLanguageCode);
      } else {
        toast(t("phraseHint"));
      }
      return;
    }

    if (action === "delete-zone") {
      event.preventDefault();
      removeById("alertZones", id);
      renderHazards();
      renderMap();
      return;
    }

    if (action === "delete-contact") {
      event.preventDefault();
      removeById("trustedContacts", id);
      renderProfile();
      return;
    }

    if (action === "delete-note") {
      event.preventDefault();
      removeById("notes", id);
      renderProfile();
      return;
    }

    if (action === "delete-report") {
      event.preventDefault();
      removeById("incidentReports", id);
      renderProfile();
      renderMap();
      return;
    }

    if (action === "select-destination") {
      event.preventDefault();
      state.destination = id;
      state.mapFocus = "destination";
      activeCustomTranslation = "";
      saveState();
      renderAll();
      toast(`${pickText(appData.destinations[id].name)} ${t("savedOffline").toLowerCase()}`);
      return;
    }

    if (action === "open-profile") {
      event.preventDefault();
      setActiveTab("profile");
      return;
    }

    if (action === "focus-my-location") {
      event.preventDefault();
      state.mapFocus = "me";
      saveState();
      if (!state.lastLocation) {
        await handleDetectLocation();
        return;
      }
      renderMap();
      return;
    }

    if (action === "focus-map-point") {
      event.preventDefault();
      state.mapFocus = id;
      saveState();
      renderMap();
      return;
    }

    if (action === "open-external") {
      event.preventDefault();
      openExternal(target.dataset.url || "");
      return;
    }

    if (action === "alert-contact") {
      event.preventDefault();
      const contact = state.trustedContacts.find((item) => item.id === id);
      if (contact) {
        const message = await buildEmergencyMessage();
        window.location.href = buildChannelLink(contact.channel, message);
        toast(t("shareReady"));
      }
    }
  }

  function openPhrase(phraseId) {
    const destination = getDestination();
    const phrase = destination.phrasebook.find((item) => item.id === phraseId);
    if (!phrase) {
      return;
    }

    activePhrase = phrase;
    refs.phraseModalBody.innerHTML = `
      <span class="sheet-label">${escapeHtml(pickText(phrase.source))}</span>
      <div class="sheet-title">${escapeHtml(phrase.local)}</div>
      <div class="sheet-subtitle">${escapeHtml(phrase.translit)}</div>
      <div class="pill">${escapeHtml(destination.localLanguageName)}</div>
    `;

    refs.phraseModal.showModal();
  }

  function handleCustomTranslation() {
    const destination = getDestination();
    const rawText = refs.translatorInput.value.trim();
    const result = buildCustomTranslation(rawText, destination);

    activeCustomTranslation = result.local;
    refs.translatorOutput.innerHTML = `
      <span class="sheet-label">${escapeHtml(t("translationResult"))}</span>
      <strong>${escapeHtml(result.local)}</strong>
      ${result.translit ? `<p>${escapeHtml(result.translit)}</p>` : ""}
      ${rawText ? `<small>${escapeHtml(rawText)}</small>` : ""}
    `;
  }

  function buildCustomTranslation(rawText, destination) {
    const text = rawText.toLowerCase();
    const keywordMap = [
      { id: "ambulance", words: ["ambulance", "emergency", "unconscious", "not breathing", "cannot breathe", "bleeding", "швидка", "екстр", "не диха", "кров", "непритом"] },
      { id: "fracture", words: ["broken leg", "broken arm", "broken bone", "fracture", "сломал", "сломала", "сломать", "слом", "перелом", "нога", "ногу", "рука", "руку", "зламав", "зламала", "злам", "перелом"] },
      { id: "doctor", words: ["doctor", "medical", "hospital", "sick", "injured", "fever", "лiкар", "медич", "хвор", "травм", "температур", "врач", "доктор", "больниц", "температур"] },
      { id: "allergy", words: ["allergy", "allergic", "sting", "swelling", "rash", "алерг", "укус", "набряк", "висип"] },
      { id: "pain", words: ["pain", "hurt", "burn", "bite", "бiль", "болить", "опiк", "боль", "болит", "ожог"] },
      { id: "hospital", words: ["nearest hospital", "clinic", "medical center", "лiкарня", "клiнiка", "медцентр"] },
      { id: "embassy", words: ["embassy", "consulate", "passport", "documents", "посольство", "консульство", "паспорт", "документ"] }
    ];
    const match = keywordMap.find((item) => item.words.some((word) => text.includes(word)));
    const phrase = destination.phrasebook.find((item) => item.id === (match ? match.id : "doctor")) || destination.phrasebook[0];

    if (!rawText) {
      return {
        local: phrase.local,
        translit: phrase.translit
      };
    }

    return {
      local: phrase.local,
      translit: phrase.translit
    };
  }

  function renderMedicalCardPreview() {
    const entries = [
      [t("bloodType"), state.medicalCard.bloodType],
      [t("allergies"), state.medicalCard.allergies],
      [t("chronicDiseases"), state.medicalCard.chronicDiseases],
      [t("medications"), state.medicalCard.medications]
    ].filter(([, value]) => value);

    refs.medicalCardPreview.innerHTML = entries.length
      ? `
        <article class="medical-card-show">
          <span class="sheet-label">${escapeHtml(t("medicalCardSubtitle"))}</span>
          <h4>${escapeHtml(t("medicalCardTitle"))}</h4>
          ${entries
            .map(
              ([label, value]) => `
                <div class="medical-row">
                  <span>${escapeHtml(label)}</span>
                  <strong>${escapeHtml(value)}</strong>
                </div>
              `
            )
            .join("")}
        </article>
      `
      : `<div class="empty-state">${escapeHtml(t("emptyMedicalCard"))}</div>`;
  }

  async function shareLocation() {
    const destination = getDestination();
    const location =
      state.lastLocation ||
      (await getCurrentLocation().catch(() => ({
        lat: destination.centroid.lat,
        lon: destination.centroid.lon,
        timestamp: Date.now()
      })));

    state.lastLocation = location;
    saveState();

    const message = await buildEmergencyMessage(location);
    const firstContact = state.trustedContacts[0];

    if (firstContact) {
      window.location.href = buildChannelLink(firstContact.channel, message);
      toast(t("shareReady"));
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({ title: "FieldAid SOS", text: message });
        toast(t("shareReady"));
        return;
      } catch (error) {
        // fallback to clipboard
      }
    }

    await copyText(message);
    toast(t("shareReady"));
  }

  async function buildEmergencyMessage(location) {
    const destination = getDestination();
    const medical = destination.emergencyNumbers.find((item) => item.kind === "medical") || destination.emergencyNumbers[0];
    const phrase = destination.phrasebook.find((item) => item.id === "doctor") || destination.phrasebook[0];
    const safeLocation = location || state.lastLocation || destination.centroid;
    const coords = `${Number(safeLocation.lat).toFixed(5)}, ${Number(safeLocation.lon).toFixed(5)}`;
    const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(coords)}`;

    return [
      "FieldAid SOS",
      `${pickText(destination.name)}, ${pickText(destination.country)}`,
      pickText(phrase.source),
      `${t("callEmergency")}: ${pickText(medical.label)} ${medical.number}`,
      `Coords: ${coords}`,
      `Map: ${mapUrl}`
    ].join("\n");
  }

  async function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
  }

  function speakText(text, lang) {
    if (!("speechSynthesis" in window)) {
      toast(t("notSupported"));
      return;
    }

    const speak = (voices = []) => {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = pickSpeechVoice(voices, lang);
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = speechFallbackLang(lang);
      }
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    };

    const voices = window.speechSynthesis.getVoices();
    if (voices.length) {
      speak(voices);
      return;
    }

    let didSpeak = false;
    window.speechSynthesis.onvoiceschanged = () => {
      if (didSpeak) {
        return;
      }
      didSpeak = true;
      speak(window.speechSynthesis.getVoices());
    };

    window.setTimeout(() => {
      if (!didSpeak) {
        didSpeak = true;
        speak([]);
      }
    }, 250);
  }

  function pickSpeechVoice(voices, lang) {
    const fallback = speechFallbackLang(lang).toLowerCase();
    const base = fallback.split("-")[0];
    return (
      voices.find((voice) => voice.lang.toLowerCase() === fallback) ||
      voices.find((voice) => voice.lang.toLowerCase().startsWith(`${base}-`)) ||
      null
    );
  }

  function speechFallbackLang(lang) {
    const normalized = String(lang || "").toLowerCase();
    if (normalized.startsWith("ar")) {
      return "ar-SA";
    }
    if (normalized.startsWith("el")) {
      return "el-GR";
    }
    return lang || "en-US";
  }

  async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("no-geolocation"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            timestamp: Date.now()
          });
        },
        () => reject(new Error("location-failed")),
        {
          enableHighAccuracy: true,
          timeout: 8000,
          maximumAge: 120000
        }
      );
    });
  }

  function detectDestination(lat, lon) {
    return Object.values(appData.destinations)
      .slice()
      .sort((a, b) => haversine(lat, lon, a.centroid.lat, a.centroid.lon) - haversine(lat, lon, b.centroid.lat, b.centroid.lon))[0];
  }

  function haversine(lat1, lon1, lat2, lon2) {
    const toRad = (value) => (value * Math.PI) / 180;
    const earth = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earth * c;
  }

  function getAidGuideIds(destination) {
    return [...new Set([...(destination.guideIds || []), ...(appData.coreGuideIds || []), ...Object.keys(appData.aidGuides)])].filter(
      (id) => appData.aidGuides[id]
    );
  }

  function aidInfoBlock(title, items) {
    return `
      <article class="aid-info-card">
        <strong>${escapeHtml(title)}</strong>
        <ul>
          ${items
            .slice(0, 5)
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("")}
        </ul>
      </article>
    `;
  }

  function buildSOSHelpPoints(destination, consular) {
    return [
      ...destination.hospitals.slice(0, 2).map((item) => ({
        type: t("hospitals"),
        tone: "low",
        phone: item.phone,
        point: pointDescriptor(destination, item.x, item.y, item.name, item.address, item.name, item.mapQuery || mapSearchQuery(destination, item.name, item.address))
      })),
      ...destination.shelters.slice(0, 2).map((item) => ({
        type: t("shelters"),
        tone: "medium",
        phone: "",
        point: pointDescriptor(destination, item.x, item.y, pickText(item.name), pickText(item.note), pickText(item.name), mapSearchQuery(destination, pickText(item.name), pickText(item.note)))
      })),
      {
        type: t("consularSupport"),
        tone: "critical",
        phone: consular.phone,
        point: pointDescriptor(destination, destination.consularPoint.x, destination.consularPoint.y, consular.title, consular.address, "consular-help", mapSearchQuery(destination, consular.title, consular.address))
      }
    ];
  }

  function distanceLabel(origin, point) {
    if (!origin || typeof origin.lat !== "number" || typeof origin.lon !== "number") {
      return t("nearby");
    }

    const km = haversine(origin.lat, origin.lon, point.lat, point.lon);
    return `${km < 10 ? km.toFixed(1) : Math.round(km)} km`;
  }

  function buildCriticalPoints(destination, customZones = [], reports = []) {
    const points = [];
    const consular = getConsularSupport();

    points.push(pointDescriptor(destination, 50, 50, t("myLocation"), `${pickText(destination.name)}, ${pickText(destination.country)}`, "me"));

    destination.hospitals.forEach((item, index) => {
      points.push(pointDescriptor(destination, item.x, item.y, item.name, item.address, `hospital-${index}`, item.mapQuery || mapSearchQuery(destination, item.name, item.address)));
    });

    destination.shelters.forEach((item, index) => {
      points.push(pointDescriptor(destination, item.x, item.y, pickText(item.name), pickText(item.type), `shelter-${index}`, mapSearchQuery(destination, pickText(item.name), pickText(item.note))));
    });

    points.push(pointDescriptor(destination, destination.consularPoint.x, destination.consularPoint.y, consular.title, consular.address, "consular", mapSearchQuery(destination, consular.title, consular.address)));

    customZones.forEach((zone) => {
      const label = pickText(riskLabels[zone.risk] || zone.risk);
      const subtitle = [label, zone.radius ? `${zone.radius} km` : "", zone.note || ""].filter(Boolean).join(" · ");
      points.push(pointDescriptor(destination, zone.x, zone.y, zone.name, subtitle, `custom-zone-${zone.id}`));
    });

    reports.forEach((report) => {
      const label = pickText(incidentLabels[report.type] || report.type);
      points.push(pointDescriptor(destination, report.x, report.y, label, report.description, `incident-${report.id}`));
    });

    return points;
  }

  function pointDescriptor(destination, x, y, title, subtitle, id, query) {
    const coords = approximateCoords(destination, x, y);
    return {
      id: id || createId("point"),
      title,
      subtitle,
      lat: coords.lat,
      lon: coords.lon,
      query: query || ""
    };
  }

  function approximateCoords(destination, x, y) {
    const scale = 0.006;
    const lat = destination.centroid.lat + (50 - y) * scale;
    const lonScale = scale / Math.max(0.35, Math.cos((destination.centroid.lat * Math.PI) / 180));
    const lon = destination.centroid.lon + (x - 50) * lonScale;
    return { lat, lon };
  }

  function getFocusedMapPoint(points) {
    if (state.mapFocus === "me" && state.lastLocation) {
      return {
        id: "me",
        title: t("myLocation"),
        subtitle: t("currentLocation"),
        lat: state.lastLocation.lat,
        lon: state.lastLocation.lon
      };
    }

    return points.find((point) => point.id === state.mapFocus) || {
      id: "destination",
      title: pickText(getDestination().name),
      subtitle: pickText(getDestination().country),
      lat: getDestination().centroid.lat,
      lon: getDestination().centroid.lon
    };
  }

  function googleEmbedUrl(point) {
    const query = point.query || `${point.lat},${point.lon}`;
    return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=13&output=embed`;
  }

  function googleExternalUrl(point) {
    const query = point.query || `${point.lat},${point.lon}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  function youtubeSearchUrl(guide, destination) {
    const query = pickText(guide.title);
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  }

  function openExternal(url) {
    if (!url) {
      return;
    }

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function mapSearchQuery(destination, title, address) {
    return [title, address, pickText(destination.name), pickText(destination.country)].filter(Boolean).join(" ");
  }

  function serviceIconName(kind) {
    return kind === "medical" ? "medical" : kind === "fire" ? "fire" : "police";
  }

  function hazardIconName(alert) {
    const text = `${pickText(alert.tag)} ${pickText(alert.title)}`.toLowerCase();
    if (text.includes("heat") || text.includes("спек")) return "heat";
    if (text.includes("storm") || text.includes("flood") || text.includes("шторм") || text.includes("пов")) return "storm";
    if (text.includes("wildlife") || text.includes("bite") || text.includes("укус")) return "bite";
    if (text.includes("conflict") || text.includes("air") || text.includes("вiйн") || text.includes("тривог")) return "shelter";
    return alert.severity === "critical" || alert.severity === "high" ? "alert" : "info";
  }

  function aidIconName(id) {
    if (/heat|burn|sun/i.test(id)) return "heat";
    if (/bleeding|blast|fracture|sprain|head|chest|stroke/i.test(id)) return "medical";
    if (/allerg|sting|bite|jelly|tick|snake|plant/i.test(id)) return "bite";
    if (/drowning|hypothermia|altitude|shelter/i.test(id)) return "shelter";
    if (/choking|cpr|asthma/i.test(id)) return "airway";
    return "aid";
  }

  function iconSvg(name) {
    const icons = {
      medical: '<path d="M12 4v16M4 12h16"/>',
      fire: '<path d="M12 21c3.2-1.2 5-3.5 5-6.4 0-2.9-1.9-4.6-3-6.6-.8 1.5-1.7 2.4-3 3.2.4-2.7-.7-4.8-2.3-6.2C8.7 8.3 7 10.2 7 13.8 7 17 8.7 19.7 12 21z"/>',
      police: '<path d="M12 3l7 3v5c0 4.5-2.7 8.1-7 10-4.3-1.9-7-5.5-7-10V6l7-3z"/>',
      heat: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>',
      storm: '<path d="M8 17H6.8A4.8 4.8 0 018 7.6 6 6 0 0119 11a3.5 3.5 0 01-.5 7H16"/><path d="M13 13l-3 5h4l-2 4"/>',
      bite: '<path d="M8 5c2 0 3 1.5 4 3 1-1.5 2-3 4-3 2.2 0 4 1.8 4 4 0 4-4.4 7.3-8 10-3.6-2.7-8-6-8-10 0-2.2 1.8-4 4-4z"/><path d="M8 13h8"/>',
      shelter: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
      airway: '<path d="M12 3v18"/><path d="M12 9c-3 0-5-1.5-6-4"/><path d="M12 9c3 0 5-1.5 6-4"/><path d="M12 14c-3 0-5 1.5-6 4"/><path d="M12 14c3 0 5 1.5 6 4"/>',
      alert: '<path d="M12 3l10 18H2L12 3z"/><path d="M12 9v5M12 17h.01"/>',
      info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
      aid: '<path d="M8 3h8v5h5v8h-5v5H8v-5H3V8h5V3z"/>'
    };
    return `<svg class="inline-svg-icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.info}</svg>`;
  }

  function removeById(key, id) {
    state[key] = state[key].filter((item) => item.id !== id);
    saveState();
  }

  function legendItem(color, label) {
    return `
      <span class="legend-item">
        <span class="legend-dot" style="background:${color}"></span>
        ${escapeHtml(label)}
      </span>
    `;
  }

  function dialNumber(value) {
    return String(value).replace(/[^\d+]/g, "");
  }

  function buildChannelLink(channel, message) {
    const normalized = channel.replace(/\s+/g, "");
    if (normalized.includes("@")) {
      return `mailto:${normalized}?subject=${encodeURIComponent("FieldAid SOS")}&body=${encodeURIComponent(message)}`;
    }
    return `sms:${normalized}?body=${encodeURIComponent(message)}`;
  }

  function syntheticPoint(seed) {
    const x = 24 + (seed * 11) % 50;
    const y = 26 + (seed * 7) % 46;
    return { x, y };
  }

  function formatDate(value) {
    const locale = localeMap[state.language] || localeMap.en;
    return new Date(value).toLocaleString(locale, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function createId(prefix) {
    return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
  }

  function toast(message) {
    refs.toast.textContent = message;
    refs.toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      refs.toast.classList.remove("is-visible");
    }, 2400);
  }

  async function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    try {
      swRegistration = await navigator.serviceWorker.register("./service-worker.js");
    } catch (error) {
      swRegistration = null;
    }
  }
})();
