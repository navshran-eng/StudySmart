# StudySmart — Maharashtra State Board bilingual starter

A static, GitHub Pages-ready learning website for Classes 1–12 with English/Marathi interface and original concept notes.

## Files
- `index.html` — home and class directory
- `class-1.html` … `class-12.html` — separate class pages
- `subject.html?class=6&subject=Science` — subject page template (each URL is separate)
- `chapter.html?class=6&subject=Science&chapter=core-science` — chapter/topic page template
- `data.js` — bilingual notes and practice Q&A
- `app.js`, `style.css` — shared functionality and responsive styling

## Publish/update on GitHub Pages
1. Download and unzip the project.
2. Open your `navshran-eng/StudySmart` repository on GitHub.
3. Choose **Add file → Upload files**.
4. Upload all files and the `assets` folder contents from this project into the repository root (not inside a nested `StudySmart_Upgrade` folder). Keep the existing `index.html`, `data.js`, `app.js`, `style.css`, `class-1.html` … `class-12.html`, `subject.html`, `chapter.html`, and `README.md` at the top level.
5. Commit the changes to branch `main`.
6. GitHub Pages should redeploy automatically. Wait a few minutes, then open `https://navshran-eng.github.io/StudySmart/`.

## Important content scope
This is a functional first upgrade, **not yet a complete official chapter-by-chapter syllabus**. It includes an original bilingual sample topic for Mathematics, Science/EVS/Physics, English, and Marathi in each class. Some exact subject names, textbooks, chapter ordering, and content vary by medium, academic year, and (for Classes 11–12) stream. Verify the current prescribed textbook and exam portion with your school. The site links to the official official textbook library: https://ebooks.eprescribed textbook.in/ebook.aspx.

Do not copy full textbook chapters, images, or exercises into the site without checking prescribed textbook's permissions/licensing policy: https://services.eprescribed textbook.in/copyright/.

## Local preview
Open `index.html` in a browser. If the browser blocks local scripts, run a simple local server from this folder (for example, `python -m http.server 8000`) and visit `http://localhost:8000/`.
