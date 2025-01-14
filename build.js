
const fs = require('fs');

async function buildStaticPage() {
  // Read resume data
  const resumeData = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
  
  // Read template
  let template = fs.readFileSync('index.html', 'utf8');
  
  // Insert the resume data directly into the template
  const staticHtml = template.replace(
    '<div id="resume"></div>', 
    `<div id="resume">${generateResumeHtml(resumeData)}</div>`
  );
  
  // Write to dist directory
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  fs.writeFileSync('dist/index.html', staticHtml);
  
  // Copy other assets
  fs.copyFileSync('styles.css', 'dist/styles.css');
  fs.copyFileSync('message.js', 'dist/message.js');
  fs.copyFileSync('resume.json', 'dist/resume.json');
}

function generateResumeHtml(data) {
  // Generate the same HTML structure as your dynamic script.js
  return `
    <div class="header row align-items-center mb-4">
      <!-- Your existing HTML structure here -->
    </div>
    <!-- Rest of your resume sections -->
  `;
}

buildStaticPage();
