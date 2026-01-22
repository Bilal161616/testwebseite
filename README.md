# BauMeister GmbH - Website

Eine professionelle Website für eine deutsche Baufirma, erstellt mit HTML, CSS und JavaScript.

## 🌟 Features

- **Vollständig auf Deutsch** - Alle Inhalte in deutscher Sprache
- **Responsive Design** - Perfekt auf allen Geräten (Desktop, Tablet, Mobile)
- **Moderne Ästhetik** - Professionelles Design mit Animationen und Übergängen
- **4 Hauptseiten:**
  - Startseite (index.html)
  - Leistungen (leistungen.html)
  - Über Uns (ueber-uns.html)
  - Kontakt (kontakt.html)
- **Interaktive Elemente:**
  - Mobile Navigation
  - Scroll-Animationen
  - Kontaktformular mit Validierung
  - Smooth Scrolling

## 📁 Projektstruktur

```
´etest projekt/
├── index.html           # Startseite
├── leistungen.html      # Leistungsübersicht
├── ueber-uns.html       # Über Uns Seite
├── kontakt.html         # Kontaktseite
├── vercel.json          # Vercel Konfiguration
├── css/
│   └── styles.css       # Alle Styles
├── js/
│   └── main.js          # JavaScript Funktionalität
└── README.md            # Diese Datei
```

## 🚀 Deployment auf Vercel

### Option 1: Vercel CLI (empfohlen)

1. **Vercel CLI installieren** (benötigt Node.js):
   ```bash
   npm install -g vercel
   ```

2. **Im Projektordner anmelden**:
   ```bash
   vercel login
   ```

3. **Website deployen**:
   ```bash
   vercel
   ```

4. **Für Production deployen**:
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Web Interface (ohne Node.js)

1. Gehen Sie zu [vercel.com](https://vercel.com)
2. Klicken Sie auf "Sign Up" oder "Login"
3. Wählen Sie "Add New Project"
4. Wählen Sie "Import Git Repository" ODER "Deploy from GitHub"

**Wenn Sie kein Git verwenden:**

1. Erstellen Sie ein GitHub Repository
2. Laden Sie alle Dateien hoch
3. Verbinden Sie Vercel mit GitHub
4. Wählen Sie das Repository aus
5. Klicken Sie auf "Deploy"

**Alternative ohne Git:**

1. Zippen Sie den gesamten Projektordner
2. Gehen Sie zu [vercel.com/new](https://vercel.com/new)
3. Wählen Sie "Deploy from template" oder nutzen Sie Vercel CLI

### Option 3: Drag & Drop (einfachste Methode)

1. Installieren Sie Vercel CLI: `npm install -g vercel`
2. Führen Sie im Projektordner aus: `vercel`
3. Folgen Sie den Anweisungen

## 🌐 Lokales Testen

Sie können die Website lokal testen, indem Sie einfach die `index.html` Datei in Ihrem Browser öffnen:

1. Navigieren Sie zum Projektordner
2. Doppelklicken Sie auf `index.html`
3. Die Website öffnet sich in Ihrem Standard-Browser

**Oder verwenden Sie einen lokalen Server** (empfohlen für beste Ergebnisse):

Mit Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Mit PHP:
```bash
php -S localhost:8000
```

Dann öffnen Sie `http://localhost:8000` in Ihrem Browser.

## 🎨 Anpassungen

### Farben ändern

Öffnen Sie `css/styles.css` und ändern Sie die CSS-Variablen im `:root` Bereich:

```css
:root {
  --primary-orange: hsl(25, 95%, 53%);
  --secondary-blue: hsl(210, 100%, 45%);
  /* ... weitere Farben */
}
```

### Inhalte ändern

Öffnen Sie die entsprechende HTML-Datei und bearbeiten Sie den Text direkt.

### Logo/Firmennamen ändern

Suchen Sie nach "BauMeister" in allen HTML-Dateien und ersetzen Sie es durch Ihren Firmennamen.

## 📱 Browser-Kompatibilität

- ✅ Chrome (neueste Version)
- ✅ Firefox (neueste Version)
- ✅ Safari (neueste Version)
- ✅ Edge (neueste Version)
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

## 📝 SEO-Optimierung

Die Website ist bereits SEO-optimiert mit:
- Meta-Beschreibungen auf jeder Seite
- Semantischem HTML
- Optimierter Überschriftenstruktur
- Schnellen Ladezeiten
- Responsive Design

## 🔧 Technologie-Stack

- **HTML5** - Struktur
- **CSS3** - Styling mit modernen Features (CSS Grid, Flexbox, Animationen)
- **Vanilla JavaScript** - Interaktivität ohne Frameworks
- **Google Fonts** - Inter & Outfit Schriftarten

## 📞 Support

Bei Fragen oder Problemen können Sie:
- Die HTML/CSS/JS Dateien direkt bearbeiten
- Die Vercel Dokumentation konsultieren: [vercel.com/docs](https://vercel.com/docs)

## 📄 Lizenz

Dieses Projekt ist für Ihre persönliche und kommerzielle Nutzung frei verfügbar.

---

**Erstellt mit ❤️ für professionelle Bauunternehmen**
