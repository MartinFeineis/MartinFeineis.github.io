const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

(async () => {
    try {
        // Paths to files
        const htmlFilePath = path.resolve(__dirname, 'src', 'index.html');
        const resumeFilePath = path.resolve(__dirname, 'src', 'resume.json');
        const outDir = __dirname; // GitHub Pages serves from the repo root
        const cssFilePath = path.resolve(__dirname, 'src', 'styles.css');

        // Read the files
        const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
        const data = JSON.parse(fs.readFileSync(resumeFilePath, 'utf8'));

        // Initialize jsdom with the HTML content
        const dom = new JSDOM(htmlContent, {
            runScripts: 'dangerously',
            resources: 'usable',
        });

        // Header Section
        

        if (fs.existsSync(cssFilePath)) {
            const cssContent = fs.readFileSync(cssFilePath, 'utf8');

            // Create a <style> tag and add the CSS content
            const styleEl = dom.window.document.createElement('style');
            styleEl.textContent = cssContent;
            dom.window.document.head.appendChild(styleEl);

            console.log('CSS styles embedded into the HTML head.');
        }

        const header = dom.window.document.createElement("div");
        header.classList.add("header", "row", "align-items-center", "mb-4");
        header.innerHTML = `
            <div class="col-md-3">
                <img src="${data.profile.pictures[0].src}" alt="${data.profile.pictures[0].altText}" class="img-fluid rounded-circle profile-img">
            </div>
            <div class="col-md-9">
                <h1 class="mb-3">${data.profile.Name}</h1>
                <p class="lead">${data.profile.Description}</p>
                <h3 class="mt-4">Key Achievements</h3>
                <ul class="achievements-list">
                    ${data.profile.KeyAchievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
                <div class="profile-links mt-3">
                    ${data.profile.userlinks.map(link => {
                        const { bgimg, ...rest } = link;
                        const [name, url] = Object.entries(rest)[0];
                        const icon = bgimg ? `<img src="${bgimg}" alt="" class="link-icon">` : '';
                        return `<a href="${url}" class="btn btn-outline-primary btn-sm me-2 mb-2" target="_blank" rel="noopener">${icon}${name}</a>`;
                    }).join('')}
                </div>
            </div>
        `;
        dom.window.document.body.appendChild(header);

        // Skills Section
        const skills = dom.window.document.createElement("div");
        skills.classList.add("section");
        skills.innerHTML = `
            <h2>Skills</h2>
            <table class="skills-table">
                <tbody>
                    ${data.Skills.reduce((rows, skill, index) => {
                        if (index % 2 === 0) rows.push([]);
                        rows[Math.floor(index / 2)].push(skill);
                        return rows;
                    }, []).map(row => {
                        let leftSkill = row[0];
                        let rightSkill = row[1];
                        const leftName = Object.keys(leftSkill)[0];
                        const leftRating = Object.values(leftSkill)[0];
                        const leftStars = '★'.repeat(leftRating) + '☆'.repeat(5 - leftRating);

                        let rightContent = '';
                        if (rightSkill) {
                            const rightName = Object.keys(rightSkill)[0];
                            const rightRating = Object.values(rightSkill)[0];
                            const rightStars = '★'.repeat(rightRating) + '☆'.repeat(5 - rightRating);
                            rightContent = `
                                <td class="skill-name">${rightName}</td>
                                <td class="star-rating">${rightStars}</td>`;
                        } else {
                            rightContent = `<td class="skill-name"></td><td class="star-rating"></td>`;
                        }

                        return `
                            <tr>
                                <td class="skill-name">${leftName}</td>
                                <td class="star-rating">${leftStars}</td>
                                <td class="divider"></td>
                                ${rightContent}
                            </tr>`;
                    }).join('')}
                </tbody>
            </table>`;
        dom.window.document.body.appendChild(skills);

        // Tech Stack Section
        const techStack = dom.window.document.createElement("div");
        techStack.classList.add("section", "tech-stack-section");
        techStack.innerHTML = `
            <h2>Tech Stack</h2>
            <p>${data.TechIcons.Description}</p>
            <div class="tech-grid">
                ${Object.entries(data.TechIcons.techstack).map(([key, tech]) => `
                    <div class="tech-item">
                        <img src="${tech.bgimg}" alt="${tech.title}" class="tech-icon">
                        <h4>${tech.title}</h4>
                        <p>${tech.desc}</p>
                        ${tech.links && tech.links.length
                            ? `<p>${tech.links.map(l => `<a href="${l.target}" target="_blank" rel="noopener">${l.name}</a>`).join(' · ')}</p>`
                            : ''}
                    </div>
                `).join('')}
            </div>`;
        dom.window.document.body.appendChild(techStack);

        // Jobs Section
        const jobs = dom.window.document.createElement("div");
        jobs.classList.add("section");
        jobs.innerHTML = `<h2>Work Experience</h2>`;
        data.jobs.forEach(job => {
            jobs.innerHTML += `
                <h3>${job.Company}</h3>
                ${job.Positions.map(pos => `
                    <div>
                        <h4>${pos.Title} (${pos.StartDate} - ${pos.EndDate})</h4>
                        <ul>
                            ${pos.Responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                        </ul>
                    </div>
                `).join("")}
            `;
        });
        dom.window.document.body.appendChild(jobs);

        // About Me Section
        const about = dom.window.document.createElement("div");
        about.classList.add("section");
        about.innerHTML = `
            <h2>About Me</h2>
            <p>${data.profile.AboutMe}</p>`;
        dom.window.document.body.appendChild(about);

        // Contact Form Section
        const contactSection = dom.window.document.createElement("div");
        contactSection.classList.add("section", "contact-section");
        contactSection.innerHTML = `
            <h2>Contact</h2>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#contactForm" aria-expanded="false">
                Contact Me
            </button>
            <div class="collapse mt-3" id="contactForm">
                <div class="card card-body">
                    <form id="messageForm">
                        <div class="input-group mb-3">
                            <span class="input-group-text">From:</span>
                            <input type="text" id="sender" class="form-control" placeholder="Your name" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Message:</span>
                            <textarea id="message" class="form-control" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <div id="messageStatus" class="mt-3" style="display: none;">
                        <p>Your message ID: <span id="sentMessageId"></span></p>
                    </div>
                </div>
            </div>`;
        dom.window.document.body.appendChild(contactSection);

        // Reference message.js in the output HTML for dynamic functionality
        const messageFilePath = path.resolve(__dirname, 'src', 'message.js');

        if (fs.existsSync(messageFilePath)) {
            const messageScriptContent = fs.readFileSync(messageFilePath, 'utf8');
        
            // Create a <script> tag and embed the JS content
            const messageScript = dom.window.document.createElement('script');
            messageScript.textContent = messageScriptContent;
            dom.window.document.body.appendChild(messageScript);
            console.log('message.js embedded inline into the HTML.');
        }

        // Wait for rendering to complete
        await new Promise((resolve) => {
            dom.window.addEventListener('load', () => {
                setTimeout(resolve, 500);
            });
        });

        // Save the final HTML directly to the repo root (no manual copy step)
        const outputFilePath = path.resolve(outDir, 'index.html');
        fs.writeFileSync(outputFilePath, dom.serialize());
        console.log(`Static HTML file created at: ${outputFilePath}`);
    } catch (error) {
        console.error('Error during build:', error);
    }
})();
