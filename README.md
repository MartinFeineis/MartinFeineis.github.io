# Instructions

Update résumé content in `src/` (`src/resume.json`, `src/index.html`, `src/styles.css`, `src/message.js`), then run:

```
npm install   # first time only, installs jsdom
node build.js
```

This rebuilds `index.html` in the repo root and copies `styles.css` alongside it (the HTML links the stylesheet; `message.js` is still inlined). GitHub Pages serves these from the root directly. Then commit and push.
