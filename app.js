// Target Dates: Yıl, Ay (0-indeskli, Eylül=8), Gün, Saat, Dakika, Saniye
const TARGET_GYGK = new Date(2026, 8, 6, 10, 15, 0).getTime();
const TARGET_OABT = new Date(2026, 8, 12, 10, 15, 0).getTime();

// ============== MOTIVASYON SÖZLERİ ==============
const QUOTES = [
  {q:'Hayatta en hakiki mürşit ilimdir.', p:'Atatürk'},
  {q:'Matematik, aklın müziğidir.', p:'James Joseph Sylvester'},
  {q:'Eğitim, insanın içindeki ateşin yakılmasıdır.', p:'Socrates'},
  {q:'Başarı, hazırlık fırsatla buluştuğunda ortaya çıkar.', p:'Seneca'},
  {q:'Bugünün çalışması, yarının başarısını hazırlar.', p:'Atatürk'},
  {q:'Matematik, sonsuzluğun bilimidir.', p:'Leibniz'},
  {q:'Çalışmadan, yorulmadan, üretmeden rahat yaşamak... bu bir insanın harcı değildir.', p:'Atatürk'},
  {q:'Bir şeyi yapmak imkânsız görünüyorsa, o şeyi yapana kadar imkânsız kalır.', p:'Nelson Mandela'},
  {q:'Geometri, Tanrı\'nın düşüncesidir.', p:'Platon'},
  {q:'Zorluklar insanı kendini bulmaya zorlar.', p:'Epiktetos'},
  {q:'Bilgi güçtür; öğrenen her şeye sahip olur.', p:'Francis Bacon'},
  {q:'Küçük fırsatlar çoğu zaman büyük başarıların başlangıcıdır.', p:'Demosthenes'},
  {q:'Sabır, başarının en güçlü silahıdır.', p:'Ali ibn Abi Talib'},
  {q:'Öğrenmek bir hazinedir; öğreten onu her yere taşır.', p:'Çin Atasözü'}
];

// Günlük Motivasyon Sözü Seçimi
const now = new Date();
const doy = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
const dailyQuote = QUOTES[doy % QUOTES.length];
document.addEventListener("DOMContentLoaded", () => {
    const quoteEl = document.getElementById('daily-quote');
    if (quoteEl) {
        quoteEl.innerHTML = `"${dailyQuote.q}"<br><b style="color:#3b82f6">— ${dailyQuote.p}</b>`;
    }
});

// ==== OFFLINE YEDEK SORU HAVUZU (sorular_db.js DOSYASINDAN GELIR) ====
// E-Tablo ulaşılamazsa veya direkt bu dosyayı kullanmak isterseniz YEDEK_SORULAR otomatik devreye girer.


// Subject Database
const subjectsData = [
    {
        id: 'matematik',
        title: 'Matematik',
        qCount: 30,
        icon: '➗',
        iconClass: 'icon-math',
        topics: [
            'Temel Matematik İşlemleri',
            'Sayı Problemleri',
            'Temel Problemler',
            'Yüzde - Oran - Orantı',
            'İşçi - Havuz Problemleri',
            'Hız - Zaman',
            'Grafik - Tablo Yorumlama'
        ]
    },
    {
        id: 'turkce',
        title: 'Türkçe',
        qCount: 30,
        icon: '📚',
        iconClass: 'icon-turkish',
        topics: [
            'Sözcükte Anlam',
            'Cümlede Anlam',
            'Anlam Bilgisi (Paragraf, Sözel Mantık)',
            'Dil Bilgisi',
            'Yazım Kuralları',
            'Noktalama İşaretleri'
        ]
    },
    {
        id: 'tarih',
        title: 'Tarih',
        qCount: 27,
        icon: '🏺',
        iconClass: 'icon-history',
        topics: [
            'Osmanlı Öncesi Türk Tarihi',
            'Osmanlı Tarihi',
            'Atatürk İlkeleri ve İnkılap Tarihi',
            'Kurtuluş Savaşı',
            'Çağdaş Türk ve Dünya Tarihi'
        ]
    },
    {
        id: 'cografya',
        title: 'Coğrafya',
        qCount: 18,
        icon: '🌍',
        iconClass: 'icon-geo',
        topics: [
            'Türkiye\'nin Fiziki Coğrafyası',
            'Beşeri ve Ekonomik Coğrafya',
            'Türkiye\'nin Yer Şekilleri',
            'Harita Bilgisi'
        ]
    },
    {
        id: 'vatandaslik',
        title: 'Vatandaşlık',
        qCount: 9,
        icon: '⚖️',
        iconClass: 'icon-citiz',
        topics: [
            'Anayasa',
            'Yasama - Yürütme - Yargı',
            'Temel Hak ve Ödevler',
            'İdare Hukuku (temel düzey)'
        ]
    },
    {
        id: 'guncel',
        title: 'Güncel Bilgiler',
        qCount: 6,
        icon: '📰',
        iconClass: 'icon-curr',
        topics: [
            'Güncel Olaylar',
            'Uluslararası Kuruluşlar',
            'Kültürel ve Ekonomik Gelişmeler'
        ]
    },
    {
        id: 'oabt-sayilar',
        title: 'ÖABT: Sayılar',
        qCount: 'Alan',
        icon: '🔢',
        iconClass: 'icon-math',
        topics: [
            'Doğal Sayılar', 'Tam Sayılar', 'Rasyonel Sayılar', 'Gerçek Sayılar', 'Ondalık Sayılar', 'Basamak Sistemi', 'Pozitif ve Negatif Sayılar', 'Bölme ve Bölünebilme Kuralları'
        ]
    },
    {
        id: 'oabt-analiz',
        title: 'ÖABT: Analiz',
        qCount: 'Alan',
        icon: '📈',
        iconClass: 'icon-math',
        topics: [
            'Fonksiyonlar', 'Limit', 'Türev', 'İntegral'
        ]
    },
    {
        id: 'oabt-cebir',
        title: 'ÖABT: Cebir',
        qCount: 'Alan',
        icon: '🧮',
        iconClass: 'icon-math',
        topics: [
            'Cebirsel İşlemler', 'Matrisler', 'Lineer Denklem Sistemleri'
        ]
    },
    {
        id: 'oabt-geometri',
        title: 'ÖABT: Geometri',
        qCount: 'Alan',
        icon: '📐',
        iconClass: 'icon-math',
        topics: [
            'Nokta, Doğru, Düzlem', 'Analitik Geometri', 'Dönüşüm Geometrisi'
        ]
    },
    {
        id: 'oabt-uygulamali',
        title: 'ÖABT: Uyg. Matematik',
        qCount: 'Alan',
        icon: '📊',
        iconClass: 'icon-math',
        topics: [
            'Ölçme', 'İstatistik ve Olasılık', 'Geometrik Cisimlerin Alan ve Hacimleri'
        ]
    },
    {
        id: 'oabt-egitim',
        title: 'ÖABT: Alan Eğitimi',
        qCount: 'Alan',
        icon: '👨‍🏫',
        iconClass: 'icon-turkish',
        topics: [
            'Matematik Öğretim İlke ve Yöntemleri', 'İlköğretim Matematik Müfredatı'
        ]
    }
];

// App State
let userProgress = JSON.parse(localStorage.getItem('kpssProgress')) || {};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCountdowns();
    renderTopics();
    updateOverallProgress();
    generatePlanner();
    initQuiz();
});

// Navigation Logic
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.page-section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active classes
            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked
            e.target.classList.add('active');
            const targetId = e.target.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Countdown Logic
function initCountdowns() {
    function updateTimers() {
        const now = new Date().getTime();

        // GY-GK Countdown
        const distGygk = TARGET_GYGK - now;
        updateTimeBox('days-gygk', 'hours-gygk', 'minutes-gygk', distGygk);

        // OABT Countdown
        const distOabt = TARGET_OABT - now;
        updateTimeBox('days-oabt', 'hours-oabt', 'minutes-oabt', distOabt);
    }

    function updateTimeBox(dId, hId, mId, distance) {
        if (distance < 0) {
            document.getElementById(dId).innerText = "00";
            document.getElementById(hId).innerText = "00";
            document.getElementById(mId).innerText = "00";
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById(dId).innerText = String(days).padStart(2, '0');
        document.getElementById(hId).innerText = String(hours).padStart(2, '0');
        document.getElementById(mId).innerText = String(minutes).padStart(2, '0');
    }

    updateTimers();
    setInterval(updateTimers, 60000); // update every minute
}

// Render Topics
function renderTopics() {
    const grid = document.getElementById('topic-grid');
    grid.innerHTML = '';

    subjectsData.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card glass-panel';
        
        let topicHtml = '';
        subject.topics.forEach((topic, idx) => {
            const topicId = `${subject.id}-${idx}`;
            const isChecked = userProgress[topicId] ? 'checked' : '';
            topicHtml += `
                <label class="topic-item">
                    <input type="checkbox" id="${topicId}" data-subject="${subject.id}" onchange="toggleTopic('${topicId}')" ${isChecked}>
                    <span>${topic}</span>
                </label>
            `;
        });

        card.innerHTML = `
            <div class="subject-header">
                <div class="subject-title">
                    <div class="subject-icon ${subject.iconClass}">${subject.icon}</div>
                    <h3>${subject.title}</h3>
                </div>
                <div class="subject-count">${subject.qCount} Soru</div>
            </div>
            <div class="topic-list">
                ${topicHtml}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Update Progress
window.toggleTopic = function(topicId) {
    userProgress[topicId] = !userProgress[topicId];
    localStorage.setItem('kpssProgress', JSON.stringify(userProgress));
    updateOverallProgress();
};

function updateOverallProgress() {
    let totalTopics = 0;
    let completedTopics = 0;

    subjectsData.forEach(sub => {
        totalTopics += sub.topics.length;
        sub.topics.forEach((_, idx) => {
            if (userProgress[`${sub.id}-${idx}`]) completedTopics++;
        });
    });

    const percent = totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);
    document.getElementById('total-progress-text').innerText = `${percent}%`;
    document.getElementById('total-progress-bar').style.width = `${percent}%`;
}

// Planner Generation
function generatePlanner() {
    const days = [
        { name: 'Pazartesi', routine: ['ÖABT: Analiz / Sayılar (Konu + Test)', 'Türkçe (30 Paragraf + Dil Bilgisi)'], color: '#3b82f6' },
        { name: 'Salı', routine: ['ÖABT: Cebir (Konu + Oku)', 'GY-GK Matematik (Soru Çözümü)'], color: '#10b981' },
        { name: 'Çarşamba', routine: ['ÖABT: Geometri (Analitik + Dönüşüm)', 'Tarih (Yeni Konu + Test)'], color: '#8b5cf6' },
        { name: 'Perşembe', routine: ['ÖABT: Uygulamalı Matematik (İstatistik/Olasılık)', 'Coğrafya (Harita Çalışması)'], color: '#ef4444' },
        { name: 'Cuma', routine: ['ÖABT: Alan Eğitimi (%20 Ağırlık)', 'Vatandaşlık ve Güncel Bilgiler'], color: '#f59e0b' },
        { name: 'Cumartesi', routine: ['ÖABT: Genel Tekrar', 'ÖABT: Alan Denemesi ve Analiz'], color: '#ec4899' },
        { name: 'Pazar', routine: ['GY-GK Türkiye Geneli Deneme', 'Tüm Denemelerin Kapsamlı Analizi', 'Eksik Konu Kapatma'], color: '#6366f1' }
    ];

    const plannerGrid = document.getElementById('planner-grid');
    plannerGrid.innerHTML = '';

    days.forEach(day => {
        let tasksHtml = day.routine.map(task => `<div class="task-pill" style="border-left: 3px solid ${day.color}">${task}</div>`).join('');
        
        const row = document.createElement('div');
        row.className = 'day-row';
        row.innerHTML = `
            <div class="day-name">${day.name}</div>
            <div class="day-tasks">${tasksHtml}</div>
        `;
        plannerGrid.appendChild(row);
    });
}

// ---------------- QUIZ SYSTEM ----------------
// Google Sheets üzerinden yayınlanmış CSV dosyasının linkini buraya yapıştırın.
// Örnek: 'https://docs.google.com/spreadsheets/d/e/.../pub?gid=0&single=true&output=csv'
const SPREADSHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1JL7jqw1iId6x5Fj38UnieQmXasMJN1h-FbNncNWG_C4/pub?gid=0&single=true&output=csv';

let questionBank = [];
let currentQuestionIndex = 0;
let quizScore = 0;

// E-Tablodan verileri çekme fonksiyonu
async function fetchQuestionsFromSheet() {
    if (!SPREADSHEET_CSV_URL) {
        useFallbackQuestions();
        startQuizFlow();
        return;
    }

    try {
        const response = await fetch(SPREADSHEET_CSV_URL);
        const csvText = await response.text();
        
        // PapaParse kullanarak CSV'yi parse et
        Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: function(results) {
                // E-tablo formatı: Kategori, Soru, A, B, C, D, E, DogruCevap (A/B/C/D/E), Aciklama
                const parsedQuestions = results.data.map(row => {
                    const options = [row['A'], row['B'], row['C'], row['D'], row['E']].filter(Boolean);
                    
                    // Doğru cevap indeksini bul (A=0, B=1, C=2, D=3, E=4)
                    const dogruHarf = (row['DogruCevap'] || '').toUpperCase().trim();
                    const harfListesi = ['A', 'B', 'C', 'D', 'E'];
                    const correctIdx = harfListesi.indexOf(dogruHarf);

                    return {
                        category: row['Kategori'] || 'Genel',
                        question: row['Soru'] || 'Soru metni bulunamadı.',
                        options: options.length > 0 ? options : ['Seçenek yok'],
                        correctIndex: correctIdx >= 0 ? correctIdx : 0,
                        explanation: row['Aciklama'] || 'Açıklama bulunmuyor.'
                    };
                });

                if (parsedQuestions.length > 0) {
                    questionBank = parsedQuestions;
                } else {
                    useFallbackQuestions();
                }
                startQuizFlow();
            },
            error: function(error) {
                console.error("CSV Parse Hatası:", error);
                useFallbackQuestions();
                startQuizFlow();
            }
        });
    } catch (error) {
        console.error("Sorular çekilemedi:", error);
        useFallbackQuestions();
        startQuizFlow();
    }
}

function useFallbackQuestions() {
    if (typeof YEDEK_SORULAR !== 'undefined' && YEDEK_SORULAR.length > 0) {
        questionBank = [...YEDEK_SORULAR];
    } else {
        questionBank = [
            { category: 'Hata', question: 'Sorular yüklenemedi. İnternet ve veritabanı dosyalarınızı kontrol edin.', options: ['Tamam'], correctIndex: 0, explanation: '' }
        ];
    }
}

function initQuiz() {
    const qText = document.getElementById('quiz-question-text');
    if(qText) {
        qText.innerHTML = '<div style="text-align:center; padding: 20px;">Sorular internetten yükleniyor... <br> Lütfen bekleyin. ⏳</div>';
    }
    fetchQuestionsFromSheet();
}

function startQuizFlow() {
    // Rastgele sırala
    questionBank.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    quizScore = 0;
    loadQuestion();
    
    // Yalnızca bir kez event listener eklemek için eski butonu klonlayıp temizliyoruz
    const oldBtn = document.getElementById('btn-next-question');
    const newBtn = oldBtn.cloneNode(true);
    oldBtn.parentNode.replaceChild(newBtn, oldBtn);

    newBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if(currentQuestionIndex < questionBank.length) {
            loadQuestion();
        } else {
            document.getElementById('quiz-question-text').innerHTML = `
                🎉 <b>Tebrikler Testi Bitirdin!</b> <br><br>
                Toplam Skorun: ${quizScore} / ${questionBank.length * 10} <br><br>
                Çözümleri pekiştirmek için yarın tekrar çözmeni öneririm!
            `;
            document.getElementById('quiz-options-container').innerHTML = '';
            document.getElementById('quiz-feedback').classList.remove('show');
            newBtn.style.display = 'none';
        }
    });
}

function loadQuestion() {
    const q = questionBank[currentQuestionIndex];
    document.getElementById('quiz-category').innerText = q.category;
    document.getElementById('quiz-question-text').innerText = (currentQuestionIndex + 1) + ". " + q.question;
    document.getElementById('quiz-score-val').innerText = quizScore;
    
    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D', 'E'];
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${letters[idx]}</span> <span class="option-text">${opt}</span>`;
        btn.onclick = () => selectOption(idx, btn);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('quiz-feedback').className = 'quiz-feedback'; // Hide feedback
    document.getElementById('btn-next-question').style.display = 'none';
}

function selectOption(selectedIndex, btnElement) {
    const q = questionBank[currentQuestionIndex];
    const optionsContainer = document.getElementById('quiz-options-container');
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    
    // Disable all
    buttons.forEach(b => b.disabled = true);
    
    const feedbackEl = document.getElementById('quiz-feedback');
    const fTitle = document.getElementById('feedback-title');
    const fText = document.getElementById('feedback-text');

    if(selectedIndex === q.correctIndex) {
        btnElement.classList.add('correct');
        quizScore += 10;
        document.getElementById('quiz-score-val').innerText = quizScore;
        feedbackEl.classList.add('success');
        fTitle.innerText = "✅ Doğru Cevap!";
    } else {
        btnElement.classList.add('wrong');
        buttons[q.correctIndex].classList.add('correct');
        feedbackEl.classList.add('error');
        fTitle.innerText = "❌ Yanlış Cevap";
    }

    fText.innerText = q.explanation;
    feedbackEl.classList.add('show');
    document.getElementById('btn-next-question').style.display = 'block';
}

// ---------------- MINI DENEME SYSTEM ----------------
let denQueue = [];
let denIdx = 0;
let denResults = [];

function buildDeneme() {
    let qs = [];
    
    // Veritabanından istenen anahtar kelimeye sahip kategorideki soruları çeker
    function add(keyword, denCat, n) {
        if (typeof YEDEK_SORULAR === 'undefined') return;
        
        let pool = YEDEK_SORULAR.filter(q => {
            let cat = (q.category || '').toLowerCase();
            return cat.includes(keyword.toLowerCase());
        });
        
        // Eğer o kategoride yeterli/hiç soru yoksa diğerlerinden rastgele doldur
        if (pool.length < n) {
            let backupPool = YEDEK_SORULAR.filter(q => !qs.includes(q));
            pool = pool.concat(backupPool).slice(0, n);
            pool.sort(() => 0.5 - Math.random());
        }
        
        let shuffled = [...pool].sort(() => 0.5 - Math.random());
        shuffled.slice(0, n).forEach(q => {
            qs.push({ ...q, denCat: denCat });
        });
    }

    add('Türkçe', 'Türkçe', 5);
    add('Matematik', 'Matematik', 5);
    add('Tarih', 'Tarih', 4);
    add('Coğraf', 'Coğrafya', 3);
    add('Vatandaşlık', 'Vatandaşlık', 2);
    add('Güncel', 'Güncel', 1);

    add('Sayılar', 'ÖABT Sayılar', 2);
    add('Geometri', 'ÖABT Geometri', 2);
    add('Analiz', 'ÖABT Analiz', 2);
    add('Cebir', 'ÖABT Cebir', 2);
    add('Alan Eği', 'ÖABT Alan Eğitimi', 2);

    return qs;
}

document.addEventListener('DOMContentLoaded', () => {
    const btnStartDen = document.getElementById('btn-start-deneme');
    if (btnStartDen) {
        btnStartDen.addEventListener('click', () => {
            denQueue = buildDeneme();
            denIdx = 0;
            denResults = [];
            document.getElementById('den-info').style.display = 'none';
            document.getElementById('den-result').style.display = 'none';
            document.getElementById('den-box').style.display = 'block';
            loadDen();
        });
    }

    const btnDenSkip = document.getElementById('btn-den-skip');
    if (btnDenSkip) {
        btnDenSkip.addEventListener('click', () => {
            denResults.push({ cat: denQueue[denIdx].denCat, ans: -1, correct: false, skipped: true });
            denIdx++;
            loadDen();
        });
    }

    const btnDenNxt = document.getElementById('btn-den-nxt');
    if (btnDenNxt) {
        btnDenNxt.addEventListener('click', () => {
            denIdx++;
            loadDen();
        });
    }

    const btnDenRestart = document.getElementById('btn-den-restart');
    if (btnDenRestart) {
        btnDenRestart.addEventListener('click', () => {
            document.getElementById('den-result').style.display = 'none';
            document.getElementById('den-info').style.display = 'block';
        });
    }
});

function loadDen() {
    if (denIdx >= denQueue.length) {
        showDenResult();
        return;
    }
    const q = denQueue[denIdx];
    document.getElementById('den-cat').innerText = q.denCat;
    document.getElementById('den-cnt').innerText = (denIdx + 1) + " / " + denQueue.length;
    document.getElementById('den-txt').innerText = (denIdx + 1) + ". " + q.q;
    
    const optsCnt = document.getElementById('den-opts');
    optsCnt.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D', 'E'];
    q.opts.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${letters[i]}</span> <span class="option-text">${opt}</span>`;
        btn.onclick = () => selDen(i, btn);
        optsCnt.appendChild(btn);
    });

    document.getElementById('den-fb').style.display = 'none';
    document.getElementById('btn-den-nxt').style.display = 'none';
    document.getElementById('btn-den-skip').style.display = 'block';
}

function selDen(i, btnElement) {
    const q = denQueue[denIdx];
    const optsCnt = document.getElementById('den-opts');
    const buttons = optsCnt.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    document.getElementById('btn-den-skip').style.display = 'none';
    
    const correct = (i === q.ans);
    const fbEl = document.getElementById('den-fb');
    const fTitle = document.getElementById('den-fbt');
    const fText = document.getElementById('den-fbtx');

    if (correct) {
        btnElement.classList.add('correct');
        fbEl.className = 'quiz-feedback success show';
        fTitle.innerText = '✅ Doğru';
    } else {
        btnElement.classList.add('wrong');
        if (buttons[q.ans]) buttons[q.ans].classList.add('correct');
        fbEl.className = 'quiz-feedback error show';
        fTitle.innerText = '❌ Yanlış';
    }
    fText.innerText = q.exp || '';
    fbEl.style.display = 'flex';
    
    denResults.push({ cat: q.denCat, ans: i, correct: correct, skipped: false });
    document.getElementById('btn-den-nxt').style.display = 'block';
}

function showDenResult() {
    document.getElementById('den-box').style.display = 'none';
    document.getElementById('den-result').style.display = 'block';
    
    let dogru = 0, yanlis = 0, bos = 0;
    let catMap = {};
    
    denResults.forEach(r => {
        if (!catMap[r.cat]) catMap[r.cat] = {d: 0, y: 0, b: 0};
        if (r.skipped) { bos++; catMap[r.cat].b++; }
        else if (r.correct) { dogru++; catMap[r.cat].d++; }
        else { yanlis++; catMap[r.cat].y++; }
    });
    
    const net = (dogru - yanlis * 0.25).toFixed(2);
    
    let gygkD = 0, gygkY = 0, oabtD = 0, oabtY = 0;
    denResults.forEach(r => {
        if (r.skipped) return;
        if (r.cat.includes('ÖABT')) {
            if (r.correct) oabtD++; else oabtY++;
        } else {
            if (r.correct) gygkD++; else gygkY++;
        }
    });
    
    const gygkNet = gygkD - gygkY * 0.25;
    const oabtNet = oabtD - oabtY * 0.25;
    const gygkPuan = Math.max(0, Math.round((gygkNet/20) * 100 * 0.9 + 50));
    const oabtPuan = Math.max(0, Math.round((oabtNet/10) * 100 * 0.9 + 50));

    document.getElementById('res-dogru').innerText = dogru;
    document.getElementById('res-yanlis').innerText = yanlis;
    document.getElementById('res-bos').innerText = bos;
    document.getElementById('res-net').innerText = net;
    document.getElementById('res-gygk').innerText = gygkPuan;
    document.getElementById('res-oabt').innerText = oabtPuan;

    const subR = document.getElementById('sub-results');
    subR.innerHTML = '';
    Object.keys(catMap).forEach(cat => {
        const c = catMap[cat];
        const tot = c.d + c.y + c.b;
        const pct = tot > 0 ? Math.round((c.d / tot) * 100) : 0;
        const clr = pct >= 70 ? '#10b981' : pct >= 40 ? '#f59e0b' : '#ef4444';
        
        subR.innerHTML += `
            <div style="display: flex; justify-content: space-between; padding: 10px; background: rgba(255,255,255,0.03); border-left: 3px solid ${clr}; border-radius: 8px;">
                <span style="font-weight: 600;">${cat}</span>
                <span style="color: #8b949e;">${c.d}/${tot} (%${pct})</span>
            </div>
        `;
    });

    const ai = document.getElementById('ai-analysis');
    ai.innerHTML = '';
    let aiLines = [];
    aiLines.push(`✅ <b>Toplam Net:</b> ${net} | <b>GYGK:</b> ${gygkNet.toFixed(2)} | <b>ÖABT:</b> ${oabtNet.toFixed(2)}`);
    if (yanlis > dogru * 0.5) aiLines.push(`⚠️ Yanlış sayın fazla, cevaplarken daha dikkatli ol!`);
    if (bos > 5) aiLines.push(`📌 ${bos} soruyu boş bıraktın, bilmediğin konularda cesaretlen.`);
    if (gygkPuan >= 75) aiLines.push(`🎯 GY-GK bölümünde harika gidiyorsun.`);
    
    aiLines.forEach(l => {
        ai.innerHTML += `<div style="padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">${l}</div>`;
    });
}

