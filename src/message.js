document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const messageStatus = document.getElementById('messageStatus');
    const sentMessageId = document.getElementById('sentMessageId');

    if (messageForm) {
        messageForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default form submission

            const sender = document.getElementById('sender').value;
            const message = document.getElementById('message').value;

            if (!sender || !message) {
                alert('Please fill in all fields.');
                return;
            }

            const msgBody = {
                Sender: sender,
                Recipient: 'Resume GitHub Page',
                Message: message
            };

            try {
                const res = await fetch('https://api.404founders.com/send', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(msgBody)
                });

                if (!res.ok) {
                    throw new Error(`Error: ${res.statusText}`);
                }

                const data = await res.json();
                sentMessageId.textContent = data.MsgId;
                messageStatus.style.display = 'block';
                messageForm.reset();
            } catch (error) {
                console.error('Error sending message:', error);
                alert('There was an error sending your message. Please try again later.');
            }
        });
    }
});
