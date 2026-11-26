// Translations for gioplus.app.
//
// English lives in index.html. Every translatable element carries data-i18n="key"
// (or data-i18n-attr="attribute:key" for alt and aria-label). German is the DE table below.
// EN only holds strings that are not in the HTML by default: texts set from JavaScript
// and the "live" variants used once APP_STORE_URL is set.
//
// The German page /de/index.html is generated from index.html and this file:
//
//     node build-de.js
//
// Run it after every change to index.html or to this file, then commit both pages.
// The language of a page is its <html lang>; the switch in the navigation links between "/" and "/de/".
//
// The German wording follows the app (Gio/Localizable.xcstrings), so the page and the
// app use the same terms: Beugung, Streckung, Bewegungsumfang, Wochenverlauf, ...

const I18N = (() => {
    const EN = {
        'meta.title': 'Gio+ - Digital Goniometer App for iPhone, iPad, Mac & Apple Watch',
        'cta.liveShort': 'Download',
        'cta.live': 'Download on the App Store',
        'hero.badgeLive': 'Goniometer app · iPhone, iPad, Mac and Apple Watch',
        'tl.current': 'Current',
        'tl.selected': 'Selected',
        'tl.play': 'Play',
        'tl.stop': 'Stop',
        'tl.avg': 'avg',
        'tl.delta': '+{d}° flexion in {n} days',
    };

    const DE = {
        // Meta
        'meta.title': 'Gio+ - Digitales Goniometer als App für iPhone, iPad, Mac & Apple Watch',
        'meta.description': 'Gio+ ist ein Tagebuch für die Beweglichkeit deiner Gelenke, für Training, Sport und Alltag. Die Kamera von iPhone, iPad oder Mac misst wie ein digitales Goniometer, wie weit sich Ellbogen, Knie oder Schulter beugen und strecken lassen, und die App hält deinen Bewegungsumfang über die Wochen fest. Ohne Konto, ohne Server: Deine Daten bleiben auf deinem Gerät und in deiner iCloud.',
        'meta.ogTitle': 'Gio+ - Das digitale Goniometer für iPhone, iPad, Mac und Apple Watch',
        'meta.ogDescription': 'Dokumentiere deine Beweglichkeit: Miss mit der Kamera von iPhone, iPad oder Mac, wie weit sich Ellbogen, Knie oder Schulter beugen und strecken lassen, und sieh Woche für Woche, was sich verändert.',
        'theme.toggle': 'Zwischen hellem und dunklem Modus wechseln',

        // Navigation and buttons
        'nav.range': 'Alltagsbereich',
        'nav.features': 'Funktionen',
        'nav.devices': 'Geräte',
        'nav.privacy': 'Datenschutz',
        'nav.pro': 'Pro',
        'cta.soonShort': 'Demnächst',
        'cta.soon': 'Demnächst im App Store',
        'cta.liveShort': 'Laden',
        'cta.live': 'Im App Store laden',

        // Terms shared with the app
        't.extension': 'Streckung',
        't.flexion': 'Beugung',
        't.rom': 'Bewegungsumfang',
        'joint.elbow': 'Ellbogen',
        'joint.knee': 'Knie',
        'joint.shoulder': 'Schulter <span class="text-muted font-normal">(Anheben nach vorn)</span>',
        'joint.elbowPlain': 'Ellbogen',
        'joint.kneePlain': 'Knie',
        'joint.shoulderPlain': 'Schulter',

        // 03 Who it is for
        'for.label': 'Für wen',
        'for.h2': 'Wann Menschen ihre Beweglichkeit festhalten',
        'for.p': 'Beim Dehnen, im Krafttraining, beim Yoga oder aus Neugier: Wer seine Beweglichkeit regelmäßig misst, sieht, was sich über Wochen verändert.',
        'for.elbow1': 'Dehnen und Mobility-Training',
        'for.elbow2': 'Klettern und Bouldern',
        'for.elbow3': 'Kraftsport: Klimmzüge, Dips, Liegestütze',
        'for.elbow4': 'Wurf- und Schlägersportarten',
        'for.elbow5': 'Yoga und Kampfsport',
        'for.knee1': 'Tiefe Kniebeuge',
        'for.knee2': 'Laufen und Radfahren',
        'for.knee3': 'Yoga: Fersensitz und Hocke',
        'for.knee4': 'Fußball, Handball, Basketball',
        'for.knee5': 'Tanz und Turnen',
        'for.knee6': 'Alltag: Treppe, Hocke, Knien',
        'for.shoulder1': 'Überkopf-Position im Kraftsport',
        'for.shoulder2': 'Schwimmen',
        'for.shoulder3': 'Klettern und Turnen',
        'for.shoulder4': 'Wurf- und Schlägersportarten',
        'for.shoulder5': 'Yoga und Mobility-Training',
        'for.shoulderNote': 'Gemessen wird das Anheben des Arms nach vorn.',
        'for.notice': 'Gio+ misst nur. Die App gibt keine Trainings- oder Übungsempfehlung. Bei Beschwerden oder nach einer Verletzung sprich mit Fachleuten, bevor du an deine Grenzen gehst.',

        // Hero
        'hero.badge': 'Goniometer-App · Demnächst für iPhone, iPad, Mac und Apple Watch',
        'hero.badgeLive': 'Goniometer-App · iPhone, iPad, Mac und Apple Watch',
        'hero.claim': 'Die fortschrittlichste Goniometer-App.',
        'hero.h1': 'Dokumentiere deine Beweglichkeit mit iPhone, iPad, Mac oder Apple Watch.',
        'hero.notice': 'Zur Selbstbeobachtung. Kein Medizinprodukt.',
        'hero.p': 'Gio+ misst 38 Gelenkbewegungen von der Halswirbelsäule bis zur Großzehe: mit der Kamera, mit dem Lagesensor deines iPhones, aus einem Foto oder von Hand eingetragen. Jede Messung wird mit Datum gespeichert. So siehst du Woche für Woche, wie sich deine Beweglichkeit verändert.',
        'pro.r1b': 'Alle 38 Bewegungen in 10 Körperregionen',
        'hero.watch': 'So misst Gio+',
        'hero.historyAlt': 'Gio+ Verlauf: Wochenverlauf und die Kurve deines Bewegungsumfangs',
        'hero.progressAlt': 'Gio+ Fortschritt: Alltagsbereich des Ellbogens',
        'hero.dev': 'Entwickelt von',
        'hero.alt': 'Gio+ Goniometer-App auf dem iPhone: Erfolge, Wochenverlauf und der Alltagsbereich des Ellbogens',
        'readout.label': 'Ellbogenbeugung',
        'readout.sub': 'So viel braucht der Alltag',

        // 01 Measurement
        'hero.cameraAlt': 'Gio+ Kamera-Messung: Eine Person steht seitlich zur Kamera, die App zeichnet den Ellbogenwinkel von 101° ins Kamerabild',
        'how.h2': 'Dein Gerät als digitales Goniometer',
        'how.p': 'Ein Goniometer ist ein Winkelmesser für Gelenke. Gio+ liest den Winkel aus dem Kamerabild, mit dem iPhone-Sensor oder mit der Apple Watch. Du kannst ihn auch aus einem Foto bestimmen oder von Hand eintragen.',

        // 02 Functional range
        'range.h2': 'Wie weit du vom Alltagsbereich entfernt bist',
        'range.p': 'Für die meisten Alltagsbewegungen braucht man weniger als den vollen Bewegungsumfang. Gio+ zeigt deinen Bogen neben diesem Alltagsbereich und wie viele Grad noch fehlen.',
        'range.fig': 'Abb. 1 · Fortschritt, Ellbogen',
        'range.caption': 'Richtwerte in Gio+ für Ellbogen, Knie und Schulter',
        'range.thJoint': 'Gelenk',
        'range.thFunc': 'Alltag',
        'range.thRef': 'Referenz',
        'range.thSource': 'Quelle',
        'range.note': 'Richtwerte wie in der App. Sie hängen von der Aufgabe und von der Messmethode ab.',

        // App screens rebuilt on the page (wording as in the app)
        'app.functionalRange': 'Alltagsbereich',
        'app.avg3': 'Ø der letzten 3 Messtage',
        'app.ofFunctional': 'von 100° Alltagsbereich',
        'app.yourArc': 'Dein Bogen',
        'app.legendFunc': 'Alltag 30–130°',
        'app.legendRef': 'Referenz 0–145°',
        'app.reached': '✓ Alltagsbereich erreicht',
        'app.toFunctional': 'noch 5° bis Alltagsbereich',
        'app.weeklyTrend': 'Wochenverlauf',
        'app.wk40': 'KW 40',
        'app.wk41': 'KW 41',
        'app.wk42': 'KW 42',
        'app.wk43': 'KW 43',
        'app.wk44': 'KW 44',
        'app.wk45': 'KW 45',
        'app.spoon': 'Löffel zum Mund',
        'app.newspaper': 'Zeitung lesen',
        'app.cup': 'Becher zum Mund',
        'app.phone': 'Telefon ans Ohr',
        'app.reachedShort': 'erreicht',
        'app.toGo5': 'noch 5°',
        'app.toGo11': 'noch 11°',
        'app.today': 'Heute',
        'app.measuredToday': 'Heute gemessen',
        'app.streak': '5 Tage in Folge',
        'app.elbowRight': 'Ellbogen · rechts',
        'app.rangeWeeks': 'Umfang · letzte 6 Wochen',

        // 03 Features
        'feat.aLabel': 'A · Kamera',
        'feat.aH': 'Mit der Kamera messen',
        'feat.aP': 'Winkelbogen und Gradzahl liegen direkt auf dem Kamerabild, wie bei einem Goniometer.',
        'feat.sLabel': 'B · Sensor',
        'feat.sH': 'Mit dem iPhone-Sensor messen',
        'feat.sP': 'Leg das iPhone am Körper an, sein Lagesensor misst den Winkel. Für 22 Bewegungen.',
        'feat.wLabel': 'C · Apple Watch',
        'feat.wH': 'Mit der Apple Watch messen',
        'feat.wP': 'Die Uhr am Handgelenk misst sieben Armbewegungen und schickt das Ergebnis ans iPhone.',
        'feat.bLabel': 'G · Verlauf',
        'feat.bH': 'Verlauf und Wochenverlauf',
        'feat.bP': 'Eine Kurve zeigt deinen Umfang Tag für Tag. Pro ergänzt den Wochenverlauf und den Fotoverlauf.',
        'feat.cLabel': 'H · Erfolge',
        'feat.dLabel': 'I · Fotoverlauf',
        'feat.eLabel': 'J · Widgets',
        'feat.fLabel': 'F · Sprachansagen',
        'v.h3': 'Ansagen führen durch die Messung',
        'v.p': 'Du stehst 1 bis 2 m vom Gerät entfernt. Gio+ sagt an, was als Nächstes kommt, und nennt jeden Wert.',
        'v.say1': '„Streckung 43 Grad. Jetzt beugen und halten.“',
        'v.say2': '„Fertig. Mittelwert Streckung 43 Grad, Beugung 101 Grad.“',
        'feat.pLabel': 'K · Personen',
        'ppl.h3': 'Mehrere Personen in einer App',
        'ppl.p': 'Leg weitere Personen an, etwa Familienmitglieder, Trainingspartner oder die Mitglieder einer Sportgruppe. Messungen, Fotos und Erfolge gehören immer zu einer Person.',
        'ppl.knee': 'Knie · links',
        'ppl.shoulder': 'Schulter · rechts',
        'feat.phLabel': 'D · Foto',
        'ph.h3': 'Winkel aus einem Foto',
        'ph.p': 'Gio+ erkennt den Winkel auf einem Foto. Die drei Punkte kannst du verschieben oder selbst setzen.',
        'feat.rLabel': 'E · Bewegungen',
        'reg.h3': '38 Bewegungen in 10 Körperregionen',
        'reg.p': 'Von der Halswirbelsäule bis zur Großzehe. Jede Bewegung hat ihren eigenen Verlauf, getrennt für links und rechts.',
        'reg.neck': 'Halswirbelsäule',
        'reg.trunk': 'Rumpf',
        'reg.shoulder': 'Schulter',
        'reg.elbow': 'Ellbogen',
        'reg.forearm': 'Unterarm',
        'reg.wrist': 'Handgelenk',
        'reg.hand': 'Hand und Finger',
        'reg.hip': 'Hüfte',
        'reg.knee': 'Knie',
        'reg.ankle': 'Sprunggelenk und Fuß',
        'feat.xLabel': 'L · Export',
        'x.h3': 'Deine Daten zum Mitnehmen',
        'x.p': 'Exportiere deine Messungen als Tabelle oder als Gio+-Sicherung, etwa für eigene Auswertungen oder ein anderes Gerät.',
        'x.csv': 'Tabelle (CSV)',
        'x.csvSub': 'Für Numbers und Excel',
        'x.backup': 'Gio+-Sicherung',
        'x.backupSub': 'Zum Einlesen auf einem anderen Gerät',
        'for.more': 'Gio+ misst außerdem Halswirbelsäule, Rumpf, Unterarm, Handgelenk, Hand und Finger, Hüfte sowie Sprunggelenk und Fuß.',
        'feat.cH': 'Meilensteine aus dem Alltag',
        'feat.cP': 'Erfolge motivieren dich, Schritt für Schritt deine Ziele zu erreichen.',

        // Photo history and time-lapse
        'tl.first': 'Erste Messung',
        'tl.current': 'Aktuell',
        'tl.selected': 'Ausgewählt',
        'tl.title': 'Zeitraffer',
        'tl.play': 'Abspielen',
        'tl.stop': 'Stopp',
        'tl.avg': 'Ø',
        'tl.delta': '+{d}° Beugung in {n} Tagen',
        'tl.sliderLabel': 'Position im Zeitraffer',
        'tl.h3': 'Fotoverlauf und Zeitraffer',
        'tl.p': 'Zu jeder Messung gehört ein Foto. Der Zeitraffer spielt sie der Reihe nach ab und zeigt deinen Fortschritt als Bewegung.',

        // Widgets
        'w.h3': 'Widgets',
        'w.p': 'Auf Home- und Sperrbildschirm zeigen Widgets, ob du heute schon gemessen hast und wie sich dein Umfang entwickelt.',

        // Planned
        'dev.label': 'In Arbeit',
        'dv.h2': 'Welches Gerät wie misst',
        'dv.p': 'Gio+ läuft auf iPhone, iPad, Mac und Apple Watch. Deine Messungen gleichen sich über deine private iCloud ab: Du misst auf einem Gerät und verfolgst deinen Fortschritt auf einem anderen.',
        'dv.camera': 'Kamera',
        'dv.sensor': 'Lagesensor',
        'dv.photo': 'Foto',
        'dv.manual': 'Manuell hinzufügen',
        'dev.report': 'Ein Bericht über deine Messungen',
        'dev.notes': 'Notizen zu jeder Messung',

        // 04 Privacy
        'priv.h2': 'Wo deine Daten liegen',
        'priv.p': 'Deine Messwerte gehören dir. Sie bleiben auf deinen Geräten und, wenn du willst, in deiner privaten iCloud.',
        'priv.aLabel': 'Lokal',
        'priv.aH': 'Auf deinem Gerät',
        'priv.aP': 'Messungen, Fotos und Profile liegen auf deinem Gerät. Gio+ funktioniert auch offline.',
        'priv.bLabel': 'Abgleich',
        'priv.bH': 'In deiner iCloud',
        'priv.bP': 'Deine Geräte gleichen sich über deine private iCloud ab. Das lässt sich abschalten.',
        'priv.cLabel': 'Kein Server',
        'priv.cH': 'Ohne Konto und Server',
        'priv.cP': 'Gio+ schickt keine Daten an Server. Die Kamerabilder werden auf dem Gerät ausgewertet.',
        'priv.more': 'Details in der <a href="/terms.html#privacy-policy" class="text-text underline underline-offset-4 decoration-line hover:text-strong">Datenschutzerklärung</a> (auf Englisch).',

        // 05 Free and Pro
        'pro.label': 'Kostenlos und Pro',
        'pro.h2': 'Was kostenlos ist und was Pro ergänzt',
        'pro.p': 'Messen, Fortschritt, Erfolge und der Verlauf der letzten 4 Wochen sind kostenlos. Pro gibt es als Abo oder als einmaligen Kauf.',
        'pro.caption': 'Vergleich von Gio+ kostenlos und Gio+ Pro',
        'pro.thFeature': 'Funktion',
        'pro.thFree': 'Kostenlos',
        'pro.r1': 'Messen mit Kamera, Sensor, Foto oder von Hand',
        'pro.r2': 'Fortschritt mit Alltagsbereich',
        'pro.r3': 'Verlauf der Werte',
        'pro.r3free': '4 Wochen',
        'pro.r3pro': 'Gesamt',
        'pro.r5': 'Fotoverlauf und Zeitraffer',
        'pro.r6': 'Liste aller Messungen',
        'pro.r7': 'Erfolge',
        'pro.r8': 'Personen',
        'pro.r8free': 'Eine',
        'pro.r8pro': 'Beliebig viele',
        'pro.r9': 'Export, Import und iCloud-Abgleich',
        'pro.r11': 'Steuerelement, Kurzbefehle und Siri',
        'pro.r13': 'Dunkelmodus, Erinnerung, Sprachansagen',

        // Download and notice
        'dl.h2': 'Gio+ für iPhone, iPad, Mac und Apple Watch',
        'dl.p': 'Kostenlos laden. Kein Konto nötig.',
        'notice.label': 'Hinweis',
        'notice.p': 'Gio+ dient der Selbstbeobachtung und ist kein Medizinprodukt. Die App stellt keine Diagnose und gibt keine Behandlungs- oder Übungsempfehlung. Die Messwerte sind Schätzungen und ersetzen nicht den Rat deiner Ärztin, deines Arztes oder deiner Physiotherapie.',

        // Footer
        'footer.tagline': 'Die Goniometer-App für Beweglichkeit und Mobility-Training. Für iPhone, iPad, Mac und Apple Watch.',
        'footer.legal': 'Rechtliches',
        'footer.privacy': 'Datenschutzerklärung',
        'footer.terms': 'Nutzungsbedingungen',
        'footer.imprint': 'Impressum',
    };

    const original = {}; // text as written in the HTML, by key
    const api = { lang: 'en', tables: { EN, DE }, t, set, init };

    function t(key) {
        if (api.lang === 'de' && key in DE) return DE[key];
        if (key in EN) return EN[key];
        return original[key] ?? key;
    }

    function remember() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (!(key in original)) original[key] = el.innerHTML.trim().replace(/\s+/g, ' ');
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            el.dataset.i18nAttr.split(';').forEach(pair => {
                const [attr, key] = pair.split(':');
                if (!(key in original)) original[key] = el.getAttribute(attr);
            });
        });
    }

    // Applies a language to the page. Each page is already written in its language,
    // so this mostly matters for keys switched at runtime (the "live" App Store texts).
    function set(lang) {
        api.lang = lang === 'de' ? 'de' : 'en';
        document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            el.dataset.i18nAttr.split(';').forEach(pair => {
                const [attr, key] = pair.split(':');
                el.setAttribute(attr, t(key));
            });
        });
        document.querySelectorAll('a[data-lang]').forEach(link => {
            if (link.dataset.lang === api.lang) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
        });
        document.dispatchEvent(new CustomEvent('gio:lang', { detail: api.lang }));
    }

    function init() {
        remember();
        // Remember an explicit choice, so "/" does not send a German browser back to "/de/"
        document.querySelectorAll('a[data-lang]').forEach(link => {
            link.addEventListener('click', () => {
                try { localStorage.setItem('gio-lang', link.dataset.lang); } catch (e) {}
            });
        });
        set(document.documentElement.lang);
    }

    return api;
})();
