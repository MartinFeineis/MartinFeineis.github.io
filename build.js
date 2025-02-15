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
        const cssFilePath = path.resolve(__dirname, 'src', 'styles.css');
        const resumeFilePath = path.resolve(__dirname, 'src', 'resume.json');
        const distPath = path.resolve(__dirname, 'dist');

        // Read the files
        const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
        let scriptContent = fs.readFileSync(scriptFilePath, 'utf8'); // Will be modified to include JSON
        const messageScriptContent = fs.readFileSync(messageFilePath, 'utf8');
        const cssContent = fs.existsSync(cssFilePath) ? fs.readFileSync(cssFilePath, 'utf8') : '';

        // Read and parse JSON safely
        let resumeData = {};
        try {
            resumeData = JSON.parse(fs.readFileSync(resumeFilePath, 'utf8'));
        } catch (error) {
            console.error('Error parsing resume.json:', error);
            resumeData = {}; // Fallback to empty object
        }

        // Embed JSON data directly into script.js
        scriptContent = `const resumeData = ${JSON.stringify(resumeData)};\n` + scriptContent;

        // Initialize jsdom with the HTML content
        const dom = new JSDOM(htmlContent, {
            runScripts: 'dangerously',
            resources: 'usable',
        });

        const document = dom.window.document;

        // Inject resume data directly into the DOM
        const resumeContainer = document.querySelector('#resume'); // Ensure there's an element with id="resume"
        if (resumeContainer) {
            const name = resumeData.profile?.Name || 'Unknown Name';
            const title = resumeData.profile?.Description || 'No Title Available';

            // Extracting experience correctly from "jobs"
            const experienceList = (resumeData.jobs || []).map(job =>
                `<h2>${job.Company}</h2>
                <ul>
                    ${(job.Positions || []).map(pos =>
                        `<li><strong>${pos.Title}</strong> (${pos.StartDate} - ${pos.EndDate})</li>
                        <ul>
                            ${(pos.Responsibilities || []).map(resp => `<li>${resp}</li>`).join('')}
                        </ul>`
                    ).join('')}
                </ul>`
            ).join('');

            resumeContainer.innerHTML = `
                <h1>${name}</h1>
                <p>${title}</p>
                ${experienceList || '<p>No experience listed</p>'}
            `;
        }

        // Inline updated script.js into the HTML
        const scriptEl = document.createElement('script');
        scriptEl.textContent = scriptContent;
        document.body.appendChild(scriptEl);

        // Inline message.js into the HTML
        const messageScriptEl = document.createElement('script');
        messageScriptEl.textContent = messageScriptContent;
        document.body.appendChild(messageScriptEl);

        // Inline CSS into the HTML
        if (cssContent) {
            const styleEl = document.createElement('style');
            styleEl.textContent = cssContent;
            document.head.appendChild(styleEl);
        }

        // Wait for rendering to complete
        await new Promise((resolve) => {
            dom.window.addEventListener('load', () => {
                setTimeout(resolve, 500);
            });
        });

        // Ensure the dist directory exists
        if (!fs.existsSync(distPath)) {
            fs.mkdirSync(distPath, { recursive: true });
        }

        // Save the final HTML to the dist directory
        const outputFilePath = path.resolve(distPath, 'index.html');
        fs.writeFileSync(outputFilePath, dom.serialize());
        console.log(`Static HTML file created at: ${outputFilePath}`);

    } catch (error) {
        console.error('Error during build:', error);
    }
})();
