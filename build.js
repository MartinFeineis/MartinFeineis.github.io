
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const path = require('path');

async function buildStaticPage() {
  // Read resume data from src folder
  const resumeData = JSON.parse(fs.readFileSync('src/resume.json', 'utf8'));
  
  // Read template from src folder
  let template = fs.readFileSync('src/index.html', 'utf8');
  
  // Create a virtual DOM environment
  const dom = new JSDOM(template);
  global.window = dom.window;
  global.document = dom.window.document;
  
  // Read source files from src folder
  const messageJs = fs.readFileSync('src/message.js', 'utf8');
  const scriptJs = fs.readFileSync('src/script.js', 'utf8');
  
  // Add resume data to HTML
  const resumeDataScript = dom.window.document.createElement('script');
  resumeDataScript.id = 'resumeData';
  resumeDataScript.type = 'application/json';
  resumeDataScript.textContent = JSON.stringify(resumeData);
  dom.window.document.head.appendChild(resumeDataScript);
  
  // Create and execute scripts in the virtual DOM
  const messageScript = dom.window.document.createElement('script');
  messageScript.textContent = messageJs;
  dom.window.eval(messageJs); // Execute message.js first
  dom.window.document.body.appendChild(messageScript);

  const mainScript = dom.window.document.createElement('script');
  mainScript.textContent = scriptJs;
  dom.window.eval(scriptJs); // Then execute script.js
  dom.window.document.body.appendChild(mainScript);
  
  // Wait for the resume to load and any dynamic content to be generated
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Get the final HTML with all dynamic content
  const finalHtml = dom.serialize();
  
  // Ensure docs directory exists
  if (!fs.existsSync('docs')) {
    fs.mkdirSync('docs');
  }
  
  // Write files to docs directory
  fs.writeFileSync('docs/index.html', finalHtml);
  fs.copyFileSync('src/styles.css', 'docs/styles.css');
  fs.copyFileSync('src/message.js', 'docs/message.js');
  fs.copyFileSync('src/resume.json', 'docs/resume.json');
}

buildStaticPage().catch(console.error);
