const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

(async () => {
    try {
        // Paths to files
        const htmlFilePath = path.resolve(__dirname, 'src', 'index.html');
        const scriptFilePath = path.resolve(__dirname, 'src', 'script.js');
        const resumeFilePath = path.resolve(__dirname, 'src', 'resume.json');
        const distPath = path.resolve(__dirname, 'dist');

        // Read the files
        const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
        const scriptContent = fs.readFileSync(scriptFilePath, 'utf8');
        const resumeContent = fs.readFileSync(resumeFilePath, 'utf8');

        // Initialize jsdom with the HTML content
        const dom = new JSDOM(htmlContent, {
            runScripts: 'dangerously',
            resources: 'usable',
        });

        // Attach the resume JSON data to the DOM
        const scriptEl = dom.window.document.createElement('script');
        scriptEl.id = 'resumeData';
        scriptEl.type = 'application/json';
        scriptEl.textContent = resumeContent;
        dom.window.document.body.appendChild(scriptEl);

        // Attach and execute script.js (to render content dynamically)
        const scriptEl2 = dom.window.document.createElement('script');
        scriptEl2.textContent = scriptContent;
        dom.window.document.body.appendChild(scriptEl2);

        // Reference message.js in the output HTML for dynamic functionality
        const messageScript = dom.window.document.createElement('script');
        messageScript.src = 'message.js'; // Include message.js as an external script
        dom.window.document.body.appendChild(messageScript);

        // Wait for rendering to complete
        await new Promise((resolve) => {
            dom.window.addEventListener('load', () => {
                setTimeout(resolve, 500);
            });
        });

        // Save the final HTML to the dist directory
        if (!fs.existsSync(distPath)) {
            fs.mkdirSync(distPath, { recursive: true });
        }

        const outputFilePath = path.resolve(distPath, 'index.html');
        fs.writeFileSync(outputFilePath, dom.serialize());
        console.log(`Static HTML file created at: ${outputFilePath}`);

        // Copy message.js to the dist directory
        const messageFilePath = path.resolve(__dirname, 'src', 'message.js');
        fs.copyFileSync(messageFilePath, path.resolve(distPath, 'message.js'));
        console.log('message.js copied to the dist directory.');
    } catch (error) {
        console.error('Error during build:', error);
    }
})();
