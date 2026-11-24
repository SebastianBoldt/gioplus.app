// Language switch for gioplus.app.
//
// English lives in the HTML. Every translatable element carries data-i18n="key"
// (or data-i18n-attr="attribute:key" for alt and aria-label). German is the DE table below.
// EN only holds strings that are not in the HTML by default: texts set from JavaScript
// and the "live" variants used once APP_STORE_URL is set.
//
// The German wording follows the app (Gio/Localizable.xcstrings), so the page and the
// app use the same terms: Beugung, Streckung, Bewegungsumfang, Wochenverlauf, ...

const I18N = (() => {
    const EN = {
        'meta.title': 'Gio+ - Goniometer App for iPhone | Measure Elbow, Knee & Shoulder Range of Motion',
        'cta.liveShort': 'Download',
        'cta.live': 'Download on the App Store',
        'hero.badgeLive': 'Goniometer app · iPhone, iPad and Mac',
        'tl.current': 'Current',
        'tl.selected': 'Selected',
        'tl.play': 'Play',
        'tl.stop': 'Stop',
        'tl.avg': 'avg',
        'tl.delta': '+{d}° flexion in {n} days',
    };

    const DE = {
        // Meta
        'meta.title': 'Gio+ - Goniometer-App für iPhone | Beweglichkeit von Ellbogen, Knie & Schulter messen',
        'meta.description': 'Gio+ dokumentiert deinen Heilungsverlauf nach einer Verletzung oder Operation. Die iPhone-Kamera misst wie ein Goniometer, wie weit sich Ellbogen, Knie oder Schulter beugen und strecken lassen, und die App hält deinen Bewegungsumfang über die Wochen der Reha fest. Ohne Konto, ohne Server: Deine Daten bleiben auf deinem Gerät und in deiner iCloud.',
        'theme.toggle': 'Zwischen hellem und dunklem Modus wechseln',

        // Navigation and buttons
        'nav.measure': 'Messung',
        'nav.range': 'Funktioneller Bereich',
        'nav.features': 'Funktionen',
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

        // Hero
        'hero.badge': 'Goniometer-App · Demnächst für iPhone, iPad und Mac',
        'hero.badgeLive': 'Goniometer-App · iPhone, iPad und Mac',
        'hero.h1': 'Dokumentiere deinen Heilungsverlauf mit der iPhone-Kamera.',
        'hero.p': 'Nach einer Verletzung oder Operation misst Gio+, wie weit sich Ellbogen, Knie oder Schulter beugen und strecken lassen. Jede Messung wird mit Datum und Fotos gespeichert. Über die Wochen der Reha entsteht so ein Protokoll deiner Heilung: wo du angefangen hast, was sich verändert hat und welche Alltagsbewegungen wieder gehen.',
        'hero.watch': 'Messung ansehen',
        'hero.dev': 'Entwickelt von',
        'hero.alt': 'Gio+ Goniometer-App auf dem iPhone: Erfolge, Wochenverlauf und der funktionelle Bereich des Ellbogens',
        'readout.label': 'Beispielmessung',
        'readout.sub': 'Rechter Ellbogen, 3 Wiederholungen',

        // 01 Measurement
        'how.videoLabel': 'Bildschirmaufnahme: Gio+ misst den rechten Ellbogen. Der Arm wird gebeugt und gestreckt, jeder Wert wird gehalten, dann erscheint das Ergebnis.',
        'how.fig': 'Abb. 1 · Bildschirmaufnahme (App auf Englisch), rechter Ellbogen, Wiederholung 2 und 3 von 3',
        'how.h2': 'Dein iPhone als Goniometer',
        'how.p': 'In der Physiotherapie wird der Gelenkwinkel mit einem Goniometer abgelesen. Gio+ liest ihn aus dem Kamerabild. Deine erste Messung ist der Ausgangswert deiner Reha, jede spätere wird damit verglichen.',
        'how.s1h': 'iPhone aufstellen',
        'how.s1p': 'Lehn es an oder nutz einen Ständer und geh 1 bis 2 m zurück. Eine Checkliste prüft vier Punkte: Das Gerät steht senkrecht (höchstens 8° Neigung), das Gelenk ist erkannt, du stehst seitlich zur Kamera, und der Abstand passt. Sind alle vier 1,5 s lang grün, startet die Messung von selbst.',
        'how.s2h': 'Dreimal strecken und beugen',
        'how.s2p': 'Ein Wert zählt, wenn du das Gelenk 2 s am Anschlag hältst und es sich dabei um höchstens 3° bewegt. Sprachansagen, Ton und Haptik sagen dir, was als Nächstes kommt. Du musst also nicht auf den Bildschirm schauen.',
        'how.s3h': 'Ergebnis prüfen',
        'how.s3p': 'Streckdefizit, Beugung und Bewegungsumfang werden als Mittelwert der drei Runden gespeichert, dazu je ein Foto der Endpositionen. Du kannst eine Messung auch von Hand oder aus zwei Fotos eintragen. Gio+ erkennt den Winkel im Foto, und du kannst ihn anpassen.',

        // 02 Functional range
        'range.h2': 'Wie weit du vom Alltagsbereich entfernt bist',
        'range.p': 'Die meisten Alltagsbewegungen brauchen weniger als den vollen Umfang eines gesunden Gelenks. Die Reha hat damit ein Ziel, das du Schritt für Schritt erreichen kannst. Gio+ zeichnet deinen aktuellen Bogen neben den funktionellen und den normalen Bereich, und du liest ab, wie viele Grad dir beim Beugen und beim Strecken fehlen.',
        'range.fig': 'Abb. 2 · Fortschritt, Ellbogen',
        'range.caption': 'Richtwerte in Gio+ für Ellbogen, Knie und Schulter',
        'range.thJoint': 'Gelenk',
        'range.thFunc': 'Funktionell',
        'range.thSource': 'Quelle',
        'range.note': 'Richtwerte wie in der App. Sie hängen von der Aufgabe und von der Messmethode ab.',

        // App screens rebuilt on the page (wording as in the app)
        'app.functionalRange': 'Funktioneller Bereich',
        'app.avg3': 'Ø der letzten 3 Messtage',
        'app.ofFunctional': 'von 100° funktionell',
        'app.yourArc': 'Dein Bogen',
        'app.legendFunc': 'Funktionell 30–130°',
        'app.reached': '✓ funktionell erreicht',
        'app.toFunctional': 'noch 5° bis funktionell',
        'app.weeklyTrend': 'Wochenverlauf',
        'app.wk40': 'KW 40',
        'app.wk41': 'KW 41',
        'app.wk42': 'KW 42',
        'app.wk43': 'KW 43',
        'app.wk44': 'KW 44',
        'app.wk45': 'KW 45',
        'app.spoon': 'Löffel zum Mund',
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
        'feat.h2': 'Messung, Verlauf und Erfolge',
        'feat.p': 'Gio+ begleitet deine Reha ab der ersten Messung. Es speichert jeden Wert, vergleicht ihn mit deinem Ausgangswert und mit dem funktionellen Bereich und hält jede Alltagsbewegung, die wieder geht, als Erfolg fest.',
        'feat.aLabel': 'A · Kamera',
        'feat.aH': 'Mit der Kamera messen',
        'feat.aP': 'Das Overlay funktioniert wie ein Goniometer: Gestrichelte 0°-Linie, Winkelbogen, Gradzahl und Halte-Ring liegen direkt auf dem Kamerabild. Die Live-Ansicht zeigt nur den aktuellen Winkel und speichert nichts.',
        'feat.aRep': 'WIEDERHOLUNG 2 / 3',
        'feat.bLabel': 'B · Verlauf',
        'feat.bH': 'Verlauf und Wochenverlauf',
        'feat.bP': 'Eine Kurve zeigt Umfang, Beugung oder Streckdefizit Tag für Tag, mit der Veränderung seit deiner ersten Messung. Pro ergänzt den Wochenverlauf und den Fotoverlauf mit Vergleich und Zeitraffer.',
        'feat.cLabel': 'C · Erfolge',
        'feat.cH': 'Meilensteine aus dem Alltag',
        'feat.cP': 'Die meisten Erfolge hängen an einer Alltagsbewegung: Beim Ellbogen reichen etwa 115° Beugung, um einen Löffel zum Mund zu führen. Andere gibt es für mehr Umfang (+10°, +25°, +50°) und für Serien von 3 bis 30 Messtagen.',

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
        'tl.fig': 'Abb. 3 · Fotoverlauf, Beispielwerte. Drück auf Abspielen oder zieh den Regler.',
        'tl.h3': 'Fotoverlauf und Zeitraffer',
        'tl.p': 'Zu jeder gespeicherten Messung gehört je ein Foto der Start- und der Endposition. Der Zeitraffer spielt diese Fotos der Reihe nach ab, alle 0,6 s eines, und macht die Veränderung zwischen deiner ersten und deiner letzten Messung als Bewegung sichtbar.',
        'tl.dt1': 'Vergleich',
        'tl.dd1': 'Erste Messung neben einer beliebigen späteren, mit der Veränderung in Grad und der Zahl der Tage dazwischen',
        'tl.dd2': 'Abspielen und stoppen oder mit dem Regler Messung für Messung durchgehen',
        'tl.dt3': 'Übersicht',
        'tl.dd3': 'Alle Fotos als Raster, für Beugung und für Streckung',
        'tl.dt4': 'Speicherung',
        'tl.dd4': 'Fotos werden ohne Overlay gespeichert, das Overlay wird beim Anzeigen neu gezeichnet. Das Speichern lässt sich abschalten.',

        // Widgets
        'w.h3': 'Widgets, Kontrollzentrum und Siri',
        'w.p': 'Widgets zeigen, ob du heute schon gemessen hast und wie sich dein Umfang in den letzten Wochen verändert hat. Ein Steuerelement oder ein Siri-Kurzbefehl öffnet direkt die Kameramessung.',
        'w.dd1': 'Funktioneller Bereich, Verlauf und Heute messen, auf Home- und Sperrbildschirm; einstellbar nach Person, Gelenk, Seite und Messwert',
        'w.dt2': 'Steuerelement',
        'w.dd2': 'Startet eine Messung aus dem Kontrollzentrum, vom Sperrbildschirm oder mit der Action-Taste',
        'w.dt3': 'Siri &amp; Kurzbefehle',
        'w.dd3': 'Messung starten oder Fortschritt anzeigen, mit Person, Gelenk und Seite',
        'w.dt4': 'Erinnerung',
        'w.dd4': 'Täglich zur festen Uhrzeit, als lokale Mitteilung',
        'w.fig': 'Abb. 4 · Widgets, Beispielwerte',

        // Planned
        'dev.label': 'In Arbeit',
        'dev.report': 'Ein Bericht über deine Messungen',
        'dev.notes': 'Notizen und eine Schmerzskala zu jeder Messung',

        // 04 Privacy
        'priv.h2': 'Wo deine Daten liegen',
        'priv.p': 'Messwerte zur Beweglichkeit sind Gesundheitsdaten. Gio+ speichert sie an zwei Orten: auf deinem iPhone und, wenn du den Abgleich eingeschaltet lässt, in deiner privaten iCloud.',
        'priv.aLabel': 'Lokal',
        'priv.aH': 'Auf deinem Gerät',
        'priv.aP': 'Messungen, Fotos und Profile liegen in einer Datenbank auf dem Gerät. Gio+ funktioniert auch offline.',
        'priv.bLabel': 'Abgleich',
        'priv.bH': 'In deiner iCloud',
        'priv.bP': 'Deine Geräte gleichen sich über deine private iCloud ab. Abschalten kannst du das jederzeit in den Einstellungen.',
        'priv.cLabel': 'Kein Server',
        'priv.cH': 'Ohne Konto und Server',
        'priv.cP': 'Gio+ schickt keine Daten an eigene oder fremde Server. Die Kamerabilder werden auf dem Gerät ausgewertet.',
        'priv.more': 'Details in der <a href="terms.html#privacy-policy" class="text-text underline underline-offset-4 decoration-line hover:text-strong">Datenschutzerklärung</a> (auf Englisch).',

        // 05 Free and Pro
        'pro.label': 'Kostenlos und Pro',
        'pro.h2': 'Was kostenlos ist und was Pro ergänzt',
        'pro.p': 'Messen, Fortschritt, Erfolge und der Verlauf der letzten 4 Wochen bleiben kostenlos, für eine Person. Pro gibt es als Monatsabo, als 6-Monats-Abo oder als einmaligen Kauf. Damit unterstützt du einen unabhängigen Entwickler.',
        'pro.caption': 'Vergleich von Gio+ kostenlos und Gio+ Pro',
        'pro.thFeature': 'Funktion',
        'pro.thFree': 'Kostenlos',
        'pro.r1': 'Messen: Kamera, Live-Ansicht, manuell',
        'pro.r2': 'Fortschritt mit funktionellem Bereich',
        'pro.r3': 'Verlauf der Werte',
        'pro.r3free': '4 Wochen',
        'pro.r3pro': 'Gesamt',
        'pro.r5': 'Fotoverlauf mit Vergleich und Zeitraffer',
        'pro.r6': 'Liste aller Messungen',
        'pro.r7': 'Erfolge',
        'pro.r8': 'Personen',
        'pro.r8free': 'Eine',
        'pro.r8pro': 'Beliebig viele',
        'pro.r9': 'Export, Import und iCloud-Abgleich',
        'pro.r11': 'Steuerelement, Kurzbefehle und Siri',
        'pro.r12': 'Farbthemen',
        'pro.r12free': 'Standard',
        'pro.r12pro': 'Alle',
        'pro.r13': 'Hell und Dunkel, Erinnerung, Sprachansagen',

        // Download and notice
        'dl.h2': 'Gio+ für iPhone, iPad und Mac',
        'dl.p': 'Kostenlos laden. Kein Konto. Das Protokoll deiner Heilung bleibt auf deinem Gerät und in deiner iCloud.',
        'notice.label': 'Hinweis',
        'notice.p': 'Gio+ ist kein Medizinprodukt. Die Messwerte sind Schätzungen aus dem Kamerabild. Sie helfen dir, deinen eigenen Fortschritt zu verfolgen, und ersetzen weder eine Diagnose noch den Rat deiner Ärztin, deines Arztes oder deiner Physiotherapie.',

        // Footer
        'footer.tagline': 'Die Goniometer-App, die deine Reha dokumentiert. Für iPhone, iPad und Mac.',
        'footer.legal': 'Rechtliches',
        'footer.privacy': 'Datenschutzerklärung',
        'footer.terms': 'Nutzungsbedingungen',
        'footer.imprint': 'Impressum',
    };

    const original = {}; // English as written in the HTML, by key
    const api = { lang: 'en', t, set, init };

    function t(key) {
        if (api.lang === 'de' && key in DE) return DE[key];
        if (key in EN) return EN[key];
        return original[key] ?? key;
    }

    function remember() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            // keep the key the element was written with, even if it is switched to a "live" key later
            const key = el.dataset.i18nSource || el.dataset.i18n;
            if (!(key in original)) original[key] = el.innerHTML.trim().replace(/\s+/g, ' ');
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            el.dataset.i18nAttr.split(';').forEach(pair => {
                const [attr, key] = pair.split(':');
                if (!(key in original)) original[key] = el.getAttribute(attr);
            });
        });
        original['meta.description'] = document.querySelector('meta[name="description"]').content;
    }

    function set(lang) {
        api.lang = lang === 'de' ? 'de' : 'en';
        document.documentElement.lang = api.lang;
        document.title = t('meta.title');
        document.querySelector('meta[name="description"]').content = t('meta.description');
        document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            el.dataset.i18nAttr.split(';').forEach(pair => {
                const [attr, key] = pair.split(':');
                el.setAttribute(attr, t(key));
            });
        });
        document.querySelectorAll('[data-lang]').forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.lang === api.lang));
        });
        try { localStorage.setItem('gio-lang', api.lang); } catch (e) {}
        document.dispatchEvent(new CustomEvent('gio:lang', { detail: api.lang }));
    }

    // Saved choice first, then the browser language, then English
    function init() {
        remember();
        let lang = null;
        try { lang = localStorage.getItem('gio-lang'); } catch (e) {}
        if (!lang) lang = (navigator.language || 'en').toLowerCase().startsWith('de') ? 'de' : 'en';
        document.querySelectorAll('[data-lang]').forEach(button => {
            button.addEventListener('click', () => set(button.dataset.lang));
        });
        set(lang);
    }

    return api;
})();
