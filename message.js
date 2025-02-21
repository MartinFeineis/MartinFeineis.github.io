document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const messageStatus = document.getElementById('messageStatus');
    const sentMessageId = document.getElementById('sentMessageId');

    if (!messageForm) return; // Exit if the form is missing

    messageForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        const senderInput = document.getElementById('sender');
        const messageInput = document.getElementById('message');

        if (!senderInput || !messageInput) {
            console.error('Form elements are missing.');
            return;
        }

        const sender = senderInput.value.trim();
        const message = messageInput.value.trim();

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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(msgBody)
            });

            if (!res.ok) {
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            }

            let data;
            try {
                data = await res.json(); // Try parsing response
            } catch (parseError) {
                throw new Error('Failed to parse server response.');
            }

            if (data?.MsgId) {
                sentMessageId.textContent = data.MsgId;
                messageStatus.style.display = 'block';
                messageForm.reset();
            } else {
                throw new Error('Invalid response format.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Computer says NO!');
        }
    });
});