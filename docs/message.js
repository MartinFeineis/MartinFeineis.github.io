
// Message handling functionality
function createMessageSection() {
    const contact = document.createElement("div");
    contact.classList.add("section");
    contact.innerHTML = `
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
        </div>
    `;

    // Handle form submission
    contact.querySelector('#messageForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const msgBody = {
            Sender: document.getElementById('sender').value,
            Recipient: 'Resume github page',
            Message: document.getElementById('message').value
        };

        try {
            const res = await fetch('https://api.404founders.com/send', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(msgBody)
            });
            const data = await res.json();
            document.getElementById('sentMessageId').textContent = data.MsgId;
            document.getElementById('messageStatus').style.display = 'block';
            document.getElementById('messageForm').reset();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    });

    return contact;
}

// Export the function for use in script.js
window.createMessageSection = createMessageSection;
