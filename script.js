
const jsonUrl = "https://media.404founders.com/martinfeineis/profile.json";

async function loadResume() {
    try {
        const response = await fetch(jsonUrl);
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
                        <p>${pos.Responsibilities}</p>
                    </div>
                `).join("")}
            `;
        });
        resumeDiv.appendChild(jobs);

        // Skills
        const skills = document.createElement("div");
        skills.classList.add("section");
        skills.innerHTML = `<h2>Skills</h2>`;
        data.Skills.forEach(skill => {
            skills.innerHTML += `<p>${Object.keys(skill)[0]} (${Object.values(skill)[0]}/5) - ${skill.category}</p>`;
        });
        resumeDiv.appendChild(skills);

        // Picture Gallery
        const gallery = document.createElement("div");
        gallery.classList.add("section");
        gallery.innerHTML = `<h2>Picture Gallery</h2><div class="picture-gallery">`;
        const activePictures = data.profile.pictures.filter(picture => picture.isActive);
        gallery.innerHTML += activePictures.map(picture => `
            <img src="${picture.src}" alt="${picture.altText}">
        `).join("") + "</div>";
        resumeDiv.appendChild(gallery);

    } catch (error) {
        console.error("Error loading JSON:", error);
        document.getElementById("resume").innerHTML = `<p>Error loading resume. Please try again later.</p>`;
    }
}

loadResume();
