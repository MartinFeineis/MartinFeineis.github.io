async function loadResume() {
    try {
        const data = JSON.parse(document.getElementById('resumeData').textContent);
        const resumeDiv = document.getElementById("resume");

        // Header Section
        const header = document.createElement("div");
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
                    ${data.profile.KeyAchievments.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        `;
        resumeDiv.appendChild(header);

        // Skills Section
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

        // Jobs Section
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

        // Contact Form Section
        const contactSection = document.createElement("div");
        contactSection.classList.add("section");
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
        resumeDiv.appendChild(contactSection);
    } catch (error) {
        console.error("Error loading JSON:", error);
        document.getElementById("resume").innerHTML = `<p>Error loading resume. Please try again later.</p>`;
    }
}

loadResume();
