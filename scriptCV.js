// --- CV Translations ---
const cvTranslations = {
    en: {
        "cv.statement": "Studying in the UK, my work is driven by a passion for experimentation, blending digital methods with the tactile qualities of fine art. I aim to engage viewers as participants, challenging the boundaries between creator and audience, and reflecting on how technology influences our perceptions and narratives. Through my projects, I explore art's evolving role in society, envisioning new possibilities at the nexus of art, technology, and interaction.",
        
        "cv.edu.title": "Education",
        "cv.edu.1.time": "Sep 2022 - May 2025",
        "cv.edu.1.desc": "Kingston School of Art: BA (Hons) Fine Art - result pending",
        "cv.edu.2.time": "Sep 2021 - May 2022",
        "cv.edu.2.desc": "Central Academy of Fine Arts: International Foundation Course",

        "cv.exhib.title": "Exhibitions (Group shows)",
        "cv.exhib.1": "Space of Enquiry: Stanley Picker Gallery Kingston School of Art Grange Road, 4 - 9 May, 2024",
        "cv.exhib.2": "The Copy Loop: Crit Space, Kingston School of Art River House, 22 - 24 Apr, 2024",
        "cv.exhib.3": "Swan Show: The Swan, Kingston Upon Thames, 12 Mar, 2024",
        "cv.exhib.4": "Publication as Exhibition: Stanley Picker Gallery, Kingston Upon Thames, 14 Dec, 2023",
        "cv.exhib.5": "Bursary Award Pop Show: Kingston University, 17 Oct, 2023",
        "cv.exhib.6": "Collision, Collaboration, Collusion: The Swan, Kingston Upon Thames, 29 Nov - 1 Dec, 2022",
        "cv.exhib.7": "Exhibition about Body Shaming: Shanghai Himalayas Museum, China, 14 May - 14 July, 2021",

        "cv.work.title": "Workshop/Event",
        "cv.work.1": "Picturing Nature: An Exploration of Potential of Photography and Collage, 13 Feb - 20 Feb",
        "cv.work.2": "Participation in the Course Rep Programme, academic year 22-23",

        "cv.lang.title": "Languages",
        "cv.lang.content": "Chinese & English"
    },
    zh: {
        "cv.statement": "我在英国学习，我的作品源于对实验的热情，将数字方法与纯艺术的触感品质相结合。我旨在让观众作为参与者参与其中，挑战创作者与观众之间的界限，并反思技术如何影响我们的感知和叙事。通过我的项目，我探索艺术在社会中不断演变的角色，设想艺术、技术和互动交汇处的新可能性。",
        
        "cv.edu.title": "教育背景",
        "cv.edu.1.time": "2022年9月 - 2025年5月",
        "cv.edu.1.desc": "金斯顿艺术学院：纯艺术学士（荣誉）- 结果待定",
        "cv.edu.2.time": "2021年9月 - 2022年5月",
        "cv.edu.2.desc": "中央美术学院：国际预科课程",

        "cv.exhib.title": "展览经历 (群展)",
        "cv.exhib.1": "Space of Enquiry: Stanley Picker Gallery, 金斯顿艺术学院 Grange Road, 2024年5月4日-9日",
        "cv.exhib.2": "The Copy Loop: Crit Space, 金斯顿艺术学院 River House, 2024年4月22日-24日",
        "cv.exhib.3": "Swan Show: The Swan, Kingston Upon Thames, 2024年3月12日",
        "cv.exhib.4": "Publication as Exhibition: Stanley Picker Gallery, Kingston Upon Thames, 2023年12月14日",
        "cv.exhib.5": "Bursary Award Pop Show: 金斯顿大学, 2023年10月17日",
        "cv.exhib.6": "Collision, Collaboration, Collusion: The Swan, Kingston Upon Thames, 2022年11月29日-12月1日",
        "cv.exhib.7": "身材焦虑主题展: 上海喜马拉雅美术馆, 中国, 2021年5月14日-7月14日",

        "cv.work.title": "工作坊 / 活动",
        "cv.work.1": "Picturing Nature: 摄影与拼贴潜力的探索, 2月13日 - 2月20日",
        "cv.work.2": "参与课程代表计划 (Course Rep Programme), 22-23学年",

        "cv.lang.title": "语言能力",
        "cv.lang.content": "中文 & 英文"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Draggable Tag Logic (Same as Main Page) ---
    const dragItem = document.getElementById('language-tag');
    let isDragging = false;
    let currentX; let currentY;
    let initialX; let initialY;
    let xOffset = 0; let yOffset = 0;

    dragItem.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", drag);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        if (e.target.closest('#language-tag') && !e.target.closest('button')) {
            isDragging = true;
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;
            dragItem.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        }
    }

    // --- 2. Language Switching Logic ---
    const langButtons = document.querySelectorAll('.lang-btn');
    const langDisplay = document.getElementById('current-lang-display');
    const body = document.body;

    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = btn.dataset.lang;
            setCvLanguage(selectedLang);
        });
    });

    function setCvLanguage(lang) {
        // Update Tag Display
        langDisplay.textContent = lang === 'en' ? 'ENGLISH' : '中文';

        // Update Body Class for Fonts
        if (lang === 'en') {
            body.classList.remove('lang-zh');
            body.classList.add('lang-en');
        } else {
            body.classList.remove('lang-en');
            body.classList.add('lang-zh');
        }

        // Update CV Text Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if(cvTranslations[lang][key]) {
                el.textContent = cvTranslations[lang][key];
            }
        });
    }
});