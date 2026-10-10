# StudySmart — Starter Website

A responsive static education website built with HTML, CSS and vanilla JavaScript. It is designed to be published on GitHub Pages and expanded gradually.

## Included
- Class 1–12 class filter
- Board, subject and text-search filters
- English/Marathi interface toggle
- Chapter cards and chapter reading dialog
- Practice MCQs with score feedback
- Print dialog (users can choose “Save as PDF” in their browser)
- Premium-labelled demo card and interest/suggestion UI
- Responsive desktop and mobile layout
- Starter chapter data in `data.js`

## Important content note
This is a working starter template, not a complete textbook library for every class or board. It includes a few sample chapters to demonstrate the structure. Add and verify content before advertising it as complete or syllabus-aligned. Use original notes or material you have permission to publish; do not upload copyrighted textbook scans or copied guides without permission.

## Run locally
1. Download or clone this repository.
2. Keep `index.html`, `style.css`, `script.js`, and `data.js` in the same folder.
3. Open `index.html` in a modern browser. For best local testing, use VS Code with the Live Server extension.

No build step or package installation is required.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new repository, e.g. `studysmart`.
2. Upload the four project files (`index.html`, `style.css`, `script.js`, `data.js`) and this README.
3. Open repository **Settings → Pages**.
4. Under build/deployment, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The Pages settings will show the live URL, usually `https://YOUR-USERNAME.github.io/studysmart/`.

The exact URL depends on your GitHub username and repository name. Do not guess it before publishing.

## Add a chapter
Open `data.js`. Append a new object to `window.STUDYSMART_DATA`. Example:

```js
{
  id: "cbse-class-6-math-whole-numbers",
  board: "CBSE",
  classLevel: 6,
  subject: "Mathematics",
  title: { en: "Whole Numbers", mr: "पूर्ण संख्या" },
  summary: {
    en: "A short chapter summary.",
    mr: "धड्याचा थोडक्यात सारांश."
  },
  level: "Free",
  icon: "➕",
  notes: {
    en: {
      overview: "Write an original, syllabus-checked overview here.",
      points: ["Key point one", "Key point two"],
      example: "Add a worked example.",
      questions: [{
        q: "Sample question?",
        options: ["Option A", "Option B", "Option C"],
        answer: 1,
        explanation: "Explain why the answer is correct."
      }]
    },
    mr: {
      overview: "इथे स्वतःचा आणि अभ्यासक्रमाशी पडताळलेला आढावा लिहा.",
      points: ["महत्त्वाचा मुद्दा एक", "महत्त्वाचा मुद्दा दोन"],
      example: "उदाहरण जोडा.",
      questions: [{
        q: "नमुना प्रश्न?",
        options: ["पर्याय अ", "पर्याय ब", "पर्याय क"],
        answer: 1,
        explanation: "उत्तर योग्य का आहे ते समजावून सांगा."
      }]
    }
  }
}
```

### Supported fields
- `id`: unique string; do not reuse IDs.
- `board`: use `CBSE`, `Maharashtra State Board`, `Gujarat State Board`, `ICSE`, or `General`.
- `classLevel`: number from 1 to 12.
- `subject`: e.g. `Mathematics`, `Science`, `English`, `Marathi`, `History`, `Biology`.
- `title` and `summary`: provide both `en` and `mr` for bilingual content.
- `level`: `Free` or `Premium`.
- `notes`: provide both `en` and `mr`. Each quiz question's `answer` is a zero-based option index.

## Premium and payments
Premium is only a visual/demo label in this starter. It does not securely protect content, authenticate users, or accept payment. Do not store payment secrets or pretend client-side JavaScript is access control. Before selling content, use a reputable payment provider and a server-side verification/access system, and publish refund, privacy and terms policies. For an early static site, consider selling downloadable products through a trusted hosted storefront instead of collecting card details yourself.

## Privacy and student safety
- Do not collect children's personal details unless you have an appropriate privacy and consent process.
- Add a contact email and privacy policy before collecting submissions.
- The current topic suggestion interaction only prepares/copies text; it does not send information to a server.
- Avoid making unverified claims that notes match a particular board's latest syllabus.

## Customization
- Brand name, labels and UI translations are in `index.html` and `script.js`.
- Visual styles are in `style.css`.
- Chapter catalogue and content are in `data.js`.
- Google Fonts are loaded from an external service; use system fonts or host fonts locally if you want to remove that external request.
