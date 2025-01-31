const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

(async () => {
    try {
        // Paths to files
        const htmlFilePath = path.resolve(__dirname, 'src', 'index.html');
        const scriptFilePath = path.resolve(__dirname, 'src', 'script.js');
        const messageFilePath = path.resolve(__dirname, 'src', 'message.js');
        const resumeFilePath = path.resolve(__dirname, 'src', 'resume.json');

        // Read the files
        const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
        const scriptContent = fs.readFileSync(scriptFilePath, 'utf8');
        const messageContent = fs.readFileSync(messageFilePath, 'utf8');
        const resumeContent = fs.readFileSync(resumeFilePath, 'utf8');

        // Initialize jsdom with the HTML content
        const dom = new JSDOM(htmlContent, {
            runScripts: 'dangerously', // Enables script execution
            resources: 'usable' // Loads external resources
        });

        // Attach the resume JSON data to the DOM
        const scriptEl = dom.window.document.createElement('script');
        scriptEl.id = 'resumeData';
        scriptEl.type = 'application/json';
        scriptEl.textContent = resumeContent;
        dom.window.document.body.appendChild(scriptEl);

        // Attach and execute message.js
        const messageEl = dom.window.document.createElement('script');
        messageEl.textContent = messageContent;
        dom.window.document.body.appendChild(messageEl);

        // Attach and execute script.js
        const scriptEl2 = dom.window.document.createElement('script');
        scriptEl2.textContent = scriptContent;
        dom.window.document.body.appendChild(scriptEl2);

        // Wait for the script execution to complete
        await new Promise(resolve => {
            dom.window.addEventListener('load', () => {
                setTimeout(resolve, 500); // Allow time for async functions
            });
        });

        // Save the rendered HTML
        const outputFilePath = path.resolve(__dirname, 'dist', 'index.html');
        const outputDir = path.dirname(outputFilePath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(outputFilePath, dom.serialize());
        console.log(`Static HTML file created at: ${outputFilePath}`);
    } catch (error) {
        console.error('Error during build:', error);
    }
})();
