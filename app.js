const express = require('express');
const app = express();
app.use(express.json());

const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1496434230853505134/As0uOLlQSiHA-9VstbrsFGZYFr5LJPTEj1WTiNRrS1pQSXTp6OpM8VCIMKsT7xkXUb-0';

app.post('/send', async (req, res) => {
    try {
        const response = await fetch(DISCORD_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        res.status(response.status).send('ok');
    } catch(e) {
        res.status(500).send('error');
    }
});

app.listen(3000, () => console.log('Proxy running on port 3000'));
