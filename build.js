
const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function buildStaticPage() {
  // Read resume data
  const resumeData = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
  
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
  
  // Inject resume data into window object
  dom.window.resumeData = resumeData;
  
  // Create and execute scripts in virtual DOM
  const messageScript = dom.window.eval(messageJs);
  const mainScript = dom.window.eval(scriptJs);
  
  // Wait for the resume to load
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Get the final HTML
  const finalHtml = dom.serialize();
  
  // Write to dist directory
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  fs.writeFileSync('dist/index.html', finalHtml);
  
  // Copy other assets
  fs.copyFileSync('styles.css', 'dist/styles.css');
  fs.copyFileSync('message.js', 'dist/message.js');
  fs.copyFileSync('resume.json', 'dist/resume.json');
}

buildStaticPage().catch(console.error);
