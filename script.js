
const localUrl = "resume.json";

async function loadResume() {
    try {
        const response = await fetch(localUrl);
        const data = await response.json();

        const resumeDiv = document.getElementById("resume");

        // Header
        const header = document.createElement("div");
        header.classList.add("header", "row", "align-items-center", "mb-4");
        header.innerHTML = `
            <div class="col-md-3">
                <img src="${data.profile.pictures[0].src}" alt="${data.profile.pictures[0].altText}" class="img-fluid rounded-circle profile-img">
            </div>
            <div class="col-md-9">
                <h1 class="mb-3">${data.profile.Name}</h1>
                <p class="lead">${data.profile.Description}</p>
            </div>
        `;
        resumeDiv.appendChild(header);

        // Skills
        const skills = document.createElement("div");
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
        resumeDiv.appendChild(skills);

        // Jobs
        const jobs = document.createElement("div");
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
        resumeDiv.appendChild(jobs);

        // Tech Stack
        const techStack = document.createElement("div");
        techStack.classList.add("section");
        techStack.innerHTML = `
            <h2>Technologies</h2>
            <div class="tech-grid">
                ${Object.entries(data.TechIcons.techstack).map(([key, tech]) => `
                    <div class="tech-item">
                        <img src="${tech.bgimg}" alt="${tech.title}" class="tech-icon">
                        <h4>${tech.title}</h4>
                        <p>${tech.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
        resumeDiv.appendChild(techStack);

        // Picture Gallery
        // const gallery = document.createElement("div");
        // gallery.classList.add("section");
        // const activePictures = data.profile.pictures.filter(picture => picture.isActive);
        // gallery.innerHTML = `
        //     <h2>Picture Gallery</h2>
        //     <div class="picture-gallery">${activePictures.map(picture => `
        //             <img src="${picture.src}" alt="${picture.altText}">
        //         `).join("")
        //     }</div>`;
        // resumeDiv.appendChild(gallery);

        // User Links
        if (data.profile.userlinks && data.profile.userlinks.length) {
            const userLinks = document.createElement("div");
            userLinks.classList.add("section");
            userLinks.innerHTML = `<h2>Links</h2>`;
            data.profile.userlinks.forEach(link => {
                const [key, value] = Object.entries(link)[0];
                userLinks.innerHTML += `<p><a href="${value}" target="_blank">${key}</a></p>`;
            });
            resumeDiv.appendChild(userLinks);
        }

        // Add message section
        resumeDiv.appendChild(createMessageSection());

    } catch (error) {
        console.error("Error loading JSON:", error);
        document.getElementById("resume").innerHTML = `<p>Error loading resume. Please try again later.</p>`;
    }
}

loadResume();
