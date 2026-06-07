# Instructions

Update résumé content in `src/` (`src/resume.json`, `src/index.html`, `src/styles.css`, `src/message.js`), then run:

```
npm install   # first time only, installs jsdom
node build.js
```

This rebuilds `index.html` in the repo root (CSS and `message.js` are inlined into it), which GitHub Pages serves directly. Then commit and push.
