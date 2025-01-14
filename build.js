
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function buildStaticPage() {
  // Read resume data
  const resumeData = JSON.parse(fs.readFileSync('src/resume.json', 'utf8'));
  
  // Read template
  let template = fs.readFileSync('index.html', 'utf8');
  
  // Create a virtual DOM environment
  const dom = new JSDOM(template);
  global.window = dom.window;
  global.document = dom.window.document;
  
  // Load Bootstrap's classes
  const bootstrapScript = document.createElement('script');
  bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
  document.body.appendChild(bootstrapScript);
  
  // Execute message.js and script.js in the virtual DOM
  const messageJs = fs.readFileSync('message.js', 'utf8');
  const scriptJs = fs.readFileSync('script.js', 'utf8');
  
  // Add resume data to HTML
  const resumeDataScript = dom.window.document.createElement('script');
  resumeDataScript.id = 'resumeData';
  resumeDataScript.type = 'application/json';
  resumeDataScript.textContent = JSON.stringify(resumeData);
  dom.window.document.head.appendChild(resumeDataScript);
  
  // Create script elements and add them to DOM in correct order
  const messageScript = dom.window.document.createElement('script');
  messageScript.textContent = messageJs;
  dom.window.document.body.appendChild(messageScript);

  const mainScript = dom.window.document.createElement('script');
  mainScript.textContent = scriptJs;
  dom.window.document.body.appendChild(mainScript);

  // Execute the scripts
  dom.window.eval(messageJs);
  dom.window.eval(scriptJs);
  
  // Wait for the resume to load
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Get the final HTML
  const finalHtml = dom.serialize();
  
  // Write to docs directory
  if (!fs.existsSync('docs')) {
    fs.mkdirSync('docs');
  }
  fs.writeFileSync('docs/index.html', finalHtml);
  
  // Copy other assets
  fs.copyFileSync('styles.css', 'docs/styles.css');
  fs.copyFileSync('message.js', 'docs/message.js');
  fs.copyFileSync('src/resume.json', 'docs/resume.json');
}

buildStaticPage().catch(console.error);
