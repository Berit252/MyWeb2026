// --- 1. 原始项目数据 (保留所有链接与描述) ---
const projectData = [
    { 
        id: 1, year: 2022, 
        title_en: "Queuing for the Unknown", title_zh: "排队等待未知", 
        time: "2022.10", 
        intro_en: "..", 
        intro_zh: "一组合作作品。",
        small_img: "https://i.postimg.cc/3wq1QJwZ/2022-10-23-00-38-52.png", 
        link: "DetailPages/QueuingUnknown.html"
    },
    { 
        id: 2, year: 2022, 
        title_en: "Emotion Value", title_zh: "情绪价值", 
        time: "2022.11", 
        intro_en: "..", 
        intro_zh: "..",
        small_img: "https://i.postimg.cc/JnCTH25G/sha256-7.png", 
        link: "DetailPages/EmotionValue.html"
    },
    { 
        id: 3, year: 2022, 
        title_en: "Damage", title_zh: "伤", 
        time: "2022.11", 
        intro_en: "..", 
        intro_zh: "..",
        small_img: "https://i.postimg.cc/j20hCgP3/y22-pairings-show-24.jpg", 
        link: "DetailPages/Damage.html"
    },
    { 
        id: 4, year: 2022, 
        title_en: "Falling of Hidden Emotions", title_zh: "隐匿情感的坠落", 
        time: "2022.11", 
        intro_en: "..", 
        intro_zh: "..",
        small_img: "https://i.postimg.cc/tgckGCTQ/C042.jpg", 
        link: "DetailPages/FallingOfHiddenEmotions.html"
    },
    { 
        id: 5, year: 2023, 
        title_en: "Please Hold My Hand", title_zh: "请握住我的手", 
        time: "2023.03", 
        intro_en: "..", 
        intro_zh: "..",
        small_img: "https://i.postimg.cc/brx9nx9M/wu-guanproject-88.jpg", 
        link: "DetailPages/PleaseHoldMyHand.html"
    },  
    { 
        id: 6, year: 2024, 
        title_en: "Copyloop (Group Project)", title_zh: "拷贝回路（合作作品）", 
        time: "2024.04", 
        intro_en: "An experimental video based on the others' works.", 
        intro_zh: "在copyloop这个合作作品中，我制作的实验影片。",
        small_img: "https://i.postimg.cc/vZMS0B1t/copy_Loop11.png", 
        link: "DetailPages/Copyloop.html"
    },
    { 
        id: 7, year: 2024, 
        title_en: "Sentences Popping Machine", title_zh: "词句机器", 
        time: "2024.03", 
        intro_en: "What do I need? What should I do? The more guidance I get, the more confused I get in the maze with no signposts.", 
        intro_zh: "我需要什么？我要做什么？越多指引让我越是疑惑。",
        small_img: "https://i.postimg.cc/vZhMzCmw/SPWExhibition_View_20_2.jpg", 
        link: "DetailPages/SentencesPoppingMachine.html"
    },
    { 
        id: 8, year: 2024, 
        title_en: "Simulation & Dreams - Video Game", title_zh: "模拟与梦境 - 3D电子游戏", 
        time: "2024.05", 
        intro_en: "Drawing on the theories about simulation, I designed a first person video game.", 
        intro_zh: "基于传播学的驯化理论，我做了个第一人称游戏。",
        small_img: "https://i.postimg.cc/4NrXypSd/Final_1.jpg", 
        link: "DetailPages/SDGameVideo.html"
    },
    { 
        id: 9, year: 2024, 
        title_en: "Simulation & Dreams - Dream Frames", title_zh: "模拟与梦境 - 梦境碎片", 
        time: "2024.05.", 
        intro_en: "Random drop of some pieces of my dreams.", 
        intro_zh: "随机的梦境碎片。",
        small_img: "https://i.postimg.cc/WzFQcHjt/Dream_Frames_8.jpg", 
        link: "DetailPages/SDInstallation.html"
    },
    { 
        id: 10, year: 2023, 
        title_en: "Close Up A Bit", title_zh: "靠近一点", 
        time: "2023.10", 
        intro_en: "Communicate with me here without words, just get closer.", 
        intro_zh: "不要言语，靠近我。",
        small_img: "https://i.postimg.cc/vm0jgsZf/Close_Up_ABit_22.jpg", 
        link: "DetailPages/CloseUpABit.html"
    },
    { 
        id: 11, year: 2023, 
        title_en: "Flow", title_zh: "流", 
        time: "2023.09", 
        intro_en: "An experimental video.", 
        intro_zh: "一个体验感实验视频。",
        small_img: "https://i.postimg.cc/d1QsF4Zr/C028.jpg", 
        link: "DetailPages/Flow.html"
    },
    { 
        id: 12, year: 2023, 
        title_en: "The Same Underneath", title_zh: "同源", 
        time: "2023.09", 
        intro_en: "An installation using ANS's structure as inspiration.", 
        intro_zh: "一个以自主神经系统结构为灵感的装置作品。",
        small_img: "https://i.postimg.cc/fLWzsBSz/C022.jpg", 
        link: "DetailPages/TheSameUnderneath.html"
    },
    { 
        id: 13, year: 2023, 
        title_en: "Robo World 1 - Ramadan Manual", title_zh: "RW1：祭祀手册", 
        time: "2023.12", 
        intro_en: "This set of manuals is written from the perspective of a fictional futuristic machine.", 
        intro_zh: "这是从一个原创的虚构未来机器世界的角度编写的一组手册。",
        small_img: "https://i.postimg.cc/mgD7ZfKb/Final_05.jpg", 
        link: "DetailPages/RamadanManual.html"
    },
    { 
        id: 14, year: 2025, 
        title_en: "Path Drift", title_zh: "路径偏移", 
        time: "2025.11", 
        intro_en: "A third-person game exploring themes of discipline, diverse perspectives, and the meaning of freedom.", 
        intro_zh: "一个探讨规训、多样化视角、自由等议题的第三人称电脑游戏。",
        small_img: "https://i.postimg.cc/xC6MbgjV/Highres_Screenshot_2025_10_16_22_51_34.png", 
        link: "DetailPages/PathDrift.html"
    },
    { 
        id: 15, year: 2025, 
        title_en: "Robo World 2 - Taste Machine", title_zh: "RW2:味觉模拟机", 
        time: "2025.12", 
        intro_en: "Using 3D digital space, players are introduced to a taste machine built by AI.", 
        intro_zh: "我利用一个3d虚拟空间来展示这一AI建造的味觉模拟系统。",
        small_img: "https://i.postimg.cc/76nxx3CD/IMG_7449.jpg", 
        link: "DetailPages/TasteMachine.html"
    },
    { 
        id: 16, year: 2026, 
        title_en: "Robo World 3.0", title_zh: "Robo World 3.0", 
        time: "2026.04", 
        intro_en: "Using a 2D game to show interactions between different robos.", 
        intro_zh: "一个以2D视觉小说为框架的多分支无限循环小游戏。",
        small_img: "https://i.postimg.cc/yY1t4b5K/DSC02765.jpg", 
        link: "DetailPages/RoboWorld3.html"
    }
];

// --- 2. 核心状态 ---
let currentLang = 'en';
let activeProjectId = null;
let currentFilterYear = 'All';

// --- 3. 语言字典 ---
const translations = {
    en: {
        "filter.all": "ALL",
        "label.intro": "Overview",
        "btn.view": "VIEW_DETAILS",
        "nav.contact": "CONTACT",
        "nav.cv": "CV",
        "nav.video": "VIDEOS",
        "nav.other": "OTHERS"
    },
    zh: {
        "filter.all": "全部项目",
        "label.intro": "项目简介",
        "btn.view": "查看详情",
        "nav.contact": "联系方式",
        "nav.cv": "个人简历",
        "nav.video": "视频作品",
        "nav.other": "其他链接"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const workGridArea = document.getElementById('work-grid-area');
    const langButtons = document.querySelectorAll('.lang-btn');
    const navGroups = document.querySelectorAll('.nav-group');

    // --- 逻辑 A: 渲染作品网格 ---
    function renderGrid() {
        workGridArea.innerHTML = '';
        const filteredData = currentFilterYear === 'All'
            ? projectData
            : projectData.filter(p => p.year.toString() === currentFilterYear);

        filteredData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'work-card';
            card.dataset.id = project.id; 
            card.innerHTML = `<img src="${project.small_img}" alt="project">`;
            
            card.addEventListener('click', (e) => {
                // 强制传入标准的整型 ID 规避双类型隐患
                selectProject(parseInt(project.id), e.currentTarget);
            });
            
            // 保持正确的高亮常亮类映射
            if (project.id === activeProjectId) {
                card.classList.add('active');
            }
            
            workGridArea.appendChild(card);
        });
    }

    // --- 逻辑 B: 深度优化的项目选择与更新逻辑 ---
    function selectProject(id, cardElement = null) {
        // 🚩 核心修复 1: 统一执行严格的整型转换匹配，彻底消除查找断层
        const targetId = parseInt(id);
        const project = projectData.find(p => p.id === targetId);
        if (!project) return;
        
        activeProjectId = targetId;

        // 全局遍历清除旧卡片状态，精准点亮当前点击卡片
        document.querySelectorAll('.work-card').forEach(card => {
            card.classList.remove('active');
            if (parseInt(card.dataset.id) === targetId) {
                card.classList.add('active');
            }
        });

        if (cardElement) {
            cardElement.classList.add('active');
        }

        // 动态加载中英文字段
        const title = currentLang === 'en' ? project.title_en : project.title_zh;
        const intro = currentLang === 'en' ? project.intro_en : project.intro_zh;
        
        // 安全填充 DOM 内容
        const titleEl = document.getElementById('work-title');
        const timeEl = document.getElementById('work-time');
        const introEl = document.getElementById('work-intro-text');
        const viewBtn = document.getElementById('view-detail-btn');

        if (titleEl) titleEl.textContent = title;
        if (timeEl) timeEl.textContent = `TIMESTAMP: ${project.time}`;
        if (introEl) introEl.textContent = intro;
        
        if (viewBtn) {
            viewBtn.onclick = () => {
                if (project.link) window.location.href = project.link;
            };
        }

        // 激活详情面板可见状态
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.classList.add('active');
        }

        // 🚩 核心修复 2: 竖屏/移动端弹窗逻辑结构重塑
        if (window.innerWidth <= 768 || document.documentElement.clientWidth <= 768) {
            document.body.style.overflow = 'hidden'; // 锁定背景层静止

            // 查找或创建唯一的移动端专属关闭按钮
            let closeBtn = document.querySelector('.close-modal');
            if (!closeBtn) {
                closeBtn = document.createElement('div');
                closeBtn.className = 'close-modal';
                closeBtn.textContent = 'CLOSE_[X]';
                
                // 优先追加到实际装载文字节点的 .panel-inner 内部，彻底规避外层 Flex 高度挤压塌陷
                const panelInner = document.querySelector('.panel-inner');
                if (panelInner) {
                    panelInner.appendChild(closeBtn);
                } else if (detailPanel) {
                    detailPanel.appendChild(closeBtn);
                }
            }

            // 🚩 核心修复 3: 绑定安全完整的销毁生命周期
            closeBtn.onclick = (e) => {
                e.stopPropagation();
                if (detailPanel) detailPanel.classList.remove('active');
                document.body.style.overflow = 'auto'; // 恢复系统级滚动
                
                // 彻底释放状态机残留，保证后续通过导航切换/筛选时系统状态绝对干净一致
                document.querySelectorAll('.work-card').forEach(c => c.classList.remove('active'));
                activeProjectId = null; 
            };
        }
    }

    // --- 逻辑 C: 底部弹出菜单切换 ---
    navGroups.forEach(group => {
        const trigger = group.querySelector('.trigger');
        trigger.addEventListener('click', function(e) {
            e.stopPropagation(); 
            navGroups.forEach(otherGroup => {
                if (otherGroup !== group) otherGroup.classList.remove('active');
            });
            group.classList.toggle('active');
        });
    });

    document.addEventListener('click', function() {
        navGroups.forEach(group => group.classList.remove('active'));
    });

    // --- 逻辑 D: 语言切换逻辑 ---
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentLang = btn.dataset.lang;
            document.body.className = `lang-${currentLang}`;
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                if(translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });

            // 仅在实际存在选定激活项目时进行重载，杜绝移动端关闭弹窗后意外复燃弹出的 Bug
            if (activeProjectId !== null) {
                selectProject(activeProjectId);
            }
        });
    });

    // --- 逻辑 E: 年份筛选器 ---
    document.querySelectorAll('.year-filter').forEach(filter => {
        filter.addEventListener('click', () => {
            document.querySelectorAll('.year-filter').forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            currentFilterYear = filter.dataset.year;
            renderGrid();
        });
    });

    // --- 逻辑 G: 联系方式自动复制与反馈 ---
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        let copyTimeout;
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault(); // 阻止 <a> 标签默认的锚点跳转行为
            e.stopPropagation();

            // 目标拷贝数据
            const emailAddress = "berittang252@gmail.com"; 

            // 调用现代原生剪贴板 API 写入数据
            navigator.clipboard.writeText(emailAddress).then(() => {
                // 清除可能存在的重复点击定时器
                clearTimeout(copyTimeout);

                // 缓存原本的静态多语言 key 对应的真实文案 (支持当前语种无缝映射)
                const originalText = translations[currentLang]["nav.contact"];

                // 切换为极客终端代码风的成功提示文案
                contactBtn.textContent = currentLang === 'en' ? "EMAIL_COPIED_[✓]" : "邮箱已复制_[✓]";
                
                // 赋予短暂的高亮强调色 (利用内联样式强制越权点亮)
                contactBtn.style.color = "var(--accent)";
                contactBtn.style.borderColor = "var(--accent)";

                // 1.5秒后平滑还原为初始导航状态
                copyTimeout = setTimeout(() => {
                    contactBtn.textContent = originalText;
                    contactBtn.style.color = ""; // 移交回静态 CSS 接管
                    contactBtn.style.borderColor = "";
                }, 1500);
            }).catch(err => {
                console.error("Failed to copy email: ", err);
                // 降级防线：如果用户浏览器权限受限，显示文本直观提示
                contactBtn.textContent = "berittang252@gmail.com";
            });
        });
    }

    // --- 逻辑 F: 页面初始化加载 ---
    renderGrid();
});