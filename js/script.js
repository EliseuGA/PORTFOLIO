/* =============================================
   TRADUÇÕES (i18n)
============================================= */
const translations = {
    pt: {
        // Nav
        "nav.portfolio": "Portfólio",
        "nav.services":  "Serviços",
        "nav.about":     "Sobre",
        "nav.contact":   "Contato",
        // Hero
        "hero.eyebrow": "Editor de Vídeo & Motion Designer",
        "hero.sub":     "Transformo gravações brutas em vídeos que as pessoas assistem até o fim.",
        "hero.cta":     "Vamos trabalhar juntos →",
        // Portfolio
        "portfolio.eyebrow": "// trabalhos selecionados",
        "portfolio.title":   "MEUS TRABALHOS",
        "portfolio.motion":  "Motion",
        "portfolio.long":    "Vídeos Longos",
        "portfolio.shorts":  "Shorts",
        // Thumbs
        "thumbs.eyebrow": "// artes & design",
        "thumbs.title":   "THUMBNAILS & ARTS",
        "thumbs.sub":     "Cada arte é pensada para converter o scroll em clique.",
        // Workflow
        "workflow.eyebrow":  "// processo real",
        "workflow.title":    "Do bruto ao luxo",
        "workflow.play":     "PLAY",
        "workflow.raw":      "BRUTO",
        "workflow.edit":     "EDITADO",
        "workflow.caption":  "O segredo não está no corte, está na <strong>INTENÇÃO!</strong>",
        // Process
        "process.eyebrow":     "// transparência total",
        "process.title":       "Como trabalhamos juntos",
        "process.sub":         "Sem surpresas. Sem enrolação. Do primeiro \"oi\" até o arquivo na sua mão.",
        "process.s1.title":    "Briefing",
        "process.s1.desc":     "Você me conta tudo — estilo, referências, o que quer transmitir. Quanto mais eu entender o seu canal, melhor o resultado final.",
        "process.s2.title":    "Edição",
        "process.s2.desc":     "Mergulho no material bruto. Cada corte, cada trilha, cada efeito tem uma razão de existir. Nada é aleatório.",
        "process.s3.title":    "Revisão",
        "process.s3.desc":     "Você assiste, aponta o que quer ajustar e eu faço acontecer. Sem julgamento, sem drama. O vídeo é seu.",
        "process.s4.title":    "Entrega",
        "process.s4.desc":     "Arquivo em alta qualidade, no formato certo para cada plataforma. Pronto pra postar, pronto pra crescer.",
        // Services
        "services.eyebrow": "// o que eu ofereço",
        "services.title":   "Serviços",
        "services.sub":     "Escolha o que faz sentido para o seu canal agora.",
        "sv.badge":          "Mais pedido",
        "sv.cta":            "Quero esse →",
        "sv.long.title":     "Vídeos Longos",
        "sv.long.desc":      "Para quem precisa que o público fique até o final — vlogs, podcasts, gameplays, documentários.",
        "sv.long.l1": "Edição completa com ritmo e narrativa",
        "sv.long.l2": "Trilha sonora e efeitos sonoros",
        "sv.long.l3": "Color grading e tratamento de imagem",
        "sv.long.l4": "Textos e legendas animadas",
        "sv.long.l5": "Entrega em até 5 dias úteis",
        "sv.pack.title":     "Pacote Completo",
        "sv.pack.desc":      "A solução total. Do vídeo longo ao short, passando pelo motion e pela arte. Tudo com a mesma identidade.",
        "sv.pack.l1": "Edição de vídeo longo",
        "sv.pack.l2": "Corte e edição de Shorts/Reels",
        "sv.pack.l3": "Motion graphics e intros",
        "sv.pack.l4": "Thumbnail personalizada",
        "sv.pack.l5": "Revisões incluídas",
        "sv.short.title":    "Shorts & Reels",
        "sv.short.desc":     "Conteúdo vertical que prende em menos de 3 segundos. Feito para viralizar no YouTube Shorts, Instagram e TikTok.",
        "sv.short.l1": "Edição dinâmica e impactante",
        "sv.short.l2": "Cortes sincronizados com a música",
        "sv.short.l3": "Legendas estilizadas",
        "sv.short.l4": "Formato 9:16 otimizado",
        "sv.short.l5": "Entrega em até 2 dias úteis",
        "sv.motion.title":   "Motion + Thumb",
        "sv.motion.desc":    "A identidade visual do seu canal. Intros, vinhetas, overlays e thumbnails que fazem o algoritmo e o público pararem para olhar.",
        "sv.motion.l1": "Intro animada sob medida",
        "sv.motion.l2": "Vinheta de encerramento",
        "sv.motion.l3": "Lower thirds e overlays",
        "sv.motion.l4": "Thumbnail pensada para converter",
        "sv.motion.l5": "Arquivos editáveis na entrega",
        // Testimonials
        "test.eyebrow": "// sem filtro",
        "test.title":   "O que dizem sobre mim",
        // About
        "about.eyebrow": "// sobre mim",
        "about.title":   "Sou editor. Sou designer.<br>Mas antes de tudo, sou <span class=\"accent-cyan\">criador.</span>",
        "about.p1":      "Cada segundo de vídeo que sai daqui foi pensado por alguém que entende o que é criar conteúdo — a pressão do prazo, a ansiedade com a entrega, a esperança de que o vídeo vai funcionar.",
        "about.p2":      "Não faço edição no piloto automático. Cada projeto recebe atenção total, do primeiro corte à última trilha. Meu objetivo é que, quando você assistir ao resultado, sinta que valeu cada centavo.",
        "about.p3":      "Você cria. Eu cuido do resto.",
        "about.stat1":   "Parcerias feitas",
        "about.stat2":   "Pessoas alcançadas",
        "about.stat3":   "De cuidado e foco",
        // FAQ
        "faq.eyebrow":   "// dúvidas comuns",
        "faq.title":     "Perguntas frequentes",
        "faq.q1":  "Como funciona a cobrança?",
        "faq.a1":  "A cobrança pode ser feita de duas formas: por <strong>valor fixo por projeto</strong> ou por <strong>hora editada</strong>. O fixo garante previsibilidade para você; a hora é ideal para projetos maiores e mais variáveis. Conversamos qual faz mais sentido no briefing.",
        "faq.q2":  "Qual é o prazo de entrega?",
        "faq.a2":  "Vídeos longos saem em até <strong>3 a 5 dias úteis</strong> após o recebimento do material. Shorts e Reels em até <strong>2 dias úteis</strong>. Projetos de motion e identidade combinamos no briefing.",
        "faq.q3":  "Quantas revisões estão incluídas?",
        "faq.a3":  "São <strong>3 rodadas de revisão</strong> incluídas. Se precisar de mais, resolvemos juntos — o objetivo é você ficar 100% satisfeito.",
        "faq.q4":  "Como funciona o pagamento?",
        "faq.a4":  "<strong>50% de entrada</strong> antes de começar, outros 50% na entrega. Aceito Pix, transferência e outros meios que combinamos pelo WhatsApp.",
        "faq.q5":  "Em quais formatos você entrega?",
        "faq.a5":  "<strong>MP4 (H.264/H.265)</strong> nas proporções certas para cada plataforma — 16:9 para YouTube, 9:16 para Shorts/Reels/TikTok. Formato diferente? É só pedir.",
        "faq.q6":  "Como envio o material?",
        "faq.a6":  "Prefiro receber via <strong>Google Drive ou WeTransfer</strong>. Você manda o link com tudo — gravações, áudios, referências — e eu começo assim que a entrada for confirmada.",
        "faq.ctaText": "Ficou com alguma dúvida?",
        "faq.ctaBtn":  "Fala comigo →",
        // Contact
        "contact.eyebrow":  "// vamos trabalhar juntos",
        "contact.title":    "Pronto para criar algo que vale a pena assistir?",
        "contact.sub":      "Respondo em até 24h. Pode me mandar uma mensagem sem cerimônia — adoro entender o projeto antes de qualquer coisa.",
        "contact.whatsapp": "WhatsApp",
        "contact.email":    "E-mail",
        "contact.avail":    "Aceitando novos projetos",
        // Form
        "form.name":    "Seu nome",
        "form.channel": "Canal / Marca",
        "form.service": "O que você precisa?",
        "form.select":  "Selecione um serviço",
        "form.opt1":    "Edição de vídeos longos",
        "form.opt2":    "Edição de Shorts / Reels",
        "form.opt3":    "Motion Graphics / Intro",
        "form.opt4":    "Thumbnail / Arte",
        "form.opt5":    "Pacote completo",
        "form.opt6":    "Outro",
        "form.message": "Me conta mais",
        "form.submit":  "Enviar mensagem",
        "form.note":    "Sem spam. Sem robô. Só eu do outro lado.",
        // Footer
        "footer.made":  "Feito com foco e muito café."
    },
    en: {
        // Nav
        "nav.portfolio": "Portfolio",
        "nav.services":  "Services",
        "nav.about":     "About",
        "nav.contact":   "Contact",
        // Hero
        "hero.eyebrow": "Video Editor & Motion Designer",
        "hero.sub":     "I turn files into HISTORY",
        "hero.cta":     "LET'S WORK TOGUETHER!",
        // Portfolio
        "portfolio.eyebrow": "// selected work",
        "portfolio.title":   "MY WORKS",
        "portfolio.motion":  "Motion",
        "portfolio.long":    "Long Videos",
        "portfolio.shorts":  "Shorts",
        // Thumbs
        "thumbs.eyebrow": "// art & design",
        "thumbs.title":   "THUMBNAILS & ARTS",
        "thumbs.sub":     "Every thumbnail is crafted to turn the scroll into a click.",
        // Workflow
        "workflow.eyebrow":  "// real process",
        "workflow.title":    "FROM RAGS TO RICHES",
        "workflow.play":     "PLAY",
        "workflow.raw":      "RAW",
        "workflow.edit":     "EDITED",
        "workflow.caption":  "The secret isn't in the cut, it's in the <strong>INTENTION.</strong>",
        // Process
        "process.eyebrow":     "// full transparency",
        "process.title":       "HOW WE'LL WORK TOGUETHER?",
        "process.sub":         "From the first message to the final file in your hands.",
        "process.s1.title":    "BRIEFING",
        "process.s1.desc":     "You tell me all about your idea and what you want to convey, and I'll transform it into your visual identity. The more I understand about your channel, the better the final result.",
        "process.s2.title":    "EDITING",
        "process.s2.desc":     "I dive into the raw footage. Every cut, every track, every effect has a reason.",
        "process.s3.title":    "REVIEW",
        "process.s3.desc":     "You watch, point out what you want to adjust, and I make it happen.",
        "process.s4.title":    "DELIVERY",
        "process.s4.desc":     "High-quality file hot off the press. Ready to post, ready to grow!",
        // Services
        "services.eyebrow": "// what I offer",
        "services.title":   "SERVICES",
        "services.sub":     "Pick what makes sense for your channel right now.",
        "sv.badge":          "Most requested",
        "sv.cta":            "I want this →",
        "sv.long.title":     "Long Videos",
        "sv.long.desc":      "For creators who need their audience to stay until the end — vlogs, podcasts, gameplays, documentaries.",
        "sv.long.l1": "Full edit with pacing and narrative",
        "sv.long.l2": "Soundtrack and sound effects",
        "sv.long.l3": "Color grading and image treatment",
        "sv.long.l4": "Animated text and subtitles",
        "sv.long.l5": "Delivery within 5 business days",
        "sv.pack.title":     "Full Package",
        "sv.pack.desc":      "The all-in-one solution. From long video to short, through motion and art — all with the same identity.",
        "sv.pack.l1": "Long video editing",
        "sv.pack.l2": "Shorts/Reels cutting and editing",
        "sv.pack.l3": "Motion graphics and intros",
        "sv.pack.l4": "Custom thumbnail",
        "sv.pack.l5": "Revisions included",
        "sv.short.title":    "Shorts & Reels",
        "sv.short.desc":     "Vertical content that hooks in under 3 seconds. Made to go viral on YouTube Shorts, Instagram and TikTok.",
        "sv.short.l1": "Dynamic and impactful editing",
        "sv.short.l2": "Cuts synced to the music",
        "sv.short.l3": "Styled subtitles",
        "sv.short.l4": "Optimized 9:16 format",
        "sv.short.l5": "Delivery within 2 business days",
        "sv.motion.title":   "Motion + Thumb",
        "sv.motion.desc":    "Your channel's visual identity. Intros, outros, overlays and thumbnails that make both the algorithm and the audience stop scrolling.",
        "sv.motion.l1": "Custom animated intro",
        "sv.motion.l2": "Outro / end screen",
        "sv.motion.l3": "Lower thirds and overlays",
        "sv.motion.l4": "Click-optimized thumbnail",
        "sv.motion.l5": "Editable files on delivery",
        // Testimonials
        "test.eyebrow": "// unfiltered",
        "test.title":   "What they say about me",
        // About
        "about.eyebrow": "// about me",
        "about.title":   "I'm an editor. A designer.<br>But above all, I'm a <span class=\"accent-cyan\">creator.</span>",
        "about.p1":      "Every second of video that leaves here was thought through by someone who knows what it feels like to create content — the deadline pressure, the delivery anxiety, the hope that the video will actually work.",
        "about.p2":      "I don't edit on autopilot. Every project gets my full attention, from the first cut to the last track. My goal is simple: when you watch the result, you should feel it was worth every penny.",
        "about.p3":      "You create. I handle the rest.",
        "about.stat1":   "Partnerships made",
        "about.stat2":   "People reached",
        "about.stat3":   "Of care and focus",
        // FAQ
        "faq.eyebrow":   "// common questions",
        "faq.title":     "Frequently asked questions",
        "faq.q1":  "How does pricing work?",
        "faq.a1":  "Pricing can be either a <strong>fixed project rate</strong> or <strong>per hour edited</strong>. Fixed gives you predictability; hourly works better for larger, more variable projects. We'll figure out what makes more sense during the briefing.",
        "faq.q2":  "What's the turnaround time?",
        "faq.a2":  "Long videos ship within <strong>3 to 5 business days</strong> after receiving the footage. Shorts and Reels in up to <strong>2 business days</strong>. Motion and identity projects depend on complexity — we sort that out in the briefing.",
        "faq.q3":  "How many revisions are included?",
        "faq.a3":  "<strong>3 revision rounds</strong> are included. If you need more, we'll figure it out together — the goal is for you to be 100% happy.",
        "faq.q4":  "How does payment work?",
        "faq.a4":  "<strong>50% upfront</strong> If it's a fixed-price project, 50% down payment before starting, and the remaining 50% upon delivery. I accept Pix, bank transfer, and other methods that we can discuss via WhatsApp.",
        "faq.q5":  "What formats do you deliver in?",
        "faq.a5":  "<strong>MP4 (H.264/H.265)</strong> in the right aspect ratio for each platform — 16:9 for YouTube, 9:16 for Shorts/Reels/TikTok. Need something different? Just ask.",
        "faq.q6":  "How do I send you the footage?",
        "faq.a6":  "I prefer receiving files via <strong>Google Drive or WeTransfer</strong>. Send me the link with everything — recordings, audio, references — and I'll get started once the deposit is confirmed.",
        "faq.ctaText": "Still have a question?",
        "faq.ctaBtn":  "Talk to me →",
        // Contact
        "contact.eyebrow":  "// let's work together",
        "contact.title":    "Ready to create something worth watching?",
        "contact.sub":      "I respond within 24h. Feel free to reach out — I love learning about the project before anything else.",
        "contact.whatsapp": "WhatsApp",
        "contact.email":    "E-mail",
        "contact.avail":    "Currently accepting new projects",
        // Form
        "form.name":    "Your name",
        "form.channel": "Channel / Brand",
        "form.service": "What do you need?",
        "form.select":  "Select a service",
        "form.opt1":    "Long video editing",
        "form.opt2":    "Shorts / Reels editing",
        "form.opt3":    "Motion Graphics / Intro",
        "form.opt4":    "Thumbnail / Art",
        "form.opt5":    "Full package",
        "form.opt6":    "Other",
        "form.message": "Tell me more",
        "form.submit":  "Send message",
        "form.note":    "No spam. No bots. Just me on the other side.",
        // Footer
        "footer.made": "Made with focus and lots of coffee."
    }
};

/* =============================================
   ESTADO GLOBAL
============================================= */
let currentLang = 'pt';

/* =============================================
   I18N ENGINE
============================================= */
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!t[key]) return;

        // Elements that safely render HTML (p, span, h2, h3, label)
        const htmlTags = ['P', 'SPAN', 'H2', 'H3', 'LABEL', 'A', 'BUTTON'];
        if (htmlTags.includes(el.tagName)) {
            el.innerHTML = t[key];
        } else {
            el.textContent = t[key];
        }
    });

    // Translate placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    document.documentElement.setAttribute('data-lang', lang);
}

function toggleLang() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyTranslations(currentLang);
    localStorage.setItem('cm-lang', currentLang);
}

/* =============================================
   NAVBAR: scroll behavior
============================================= */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scroll = window.scrollY;

                // Scrolled style
                navbar.classList.toggle('scrolled', scroll > 40);

                // Hide on scroll down, show on scroll up
                if (scroll > 120) {
                    navbar.style.transform = scroll > lastScroll
                        ? 'translateY(-110%)'
                        : 'translateY(0)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }

                lastScroll = scroll;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* =============================================
   PORTFOLIO CATEGORY SWITCHER
============================================= */
function initPortfolio() {
    const btns = document.querySelectorAll('.pmenu-btn');
    const panels = document.querySelectorAll('.cat-panel');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-cat');

            // Pause all videos and clear sources to free memory
            panels.forEach(panel => {
                panel.querySelectorAll('video').forEach(v => {
                    v.pause();
                });
                panel.classList.remove('active');
            });

            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const target = document.getElementById('cat-' + cat);
            if (!target) return;
            target.classList.add('active');

            // Lazy-load videos in newly visible panel
            loadLazyVideos(target);
        });
    });
}

/* =============================================
   LAZY VIDEO LOADING (performance)
============================================= */
function loadLazyVideos(container) {
    const videos = container ? container.querySelectorAll('.lazy-video') : document.querySelectorAll('.lazy-video');

    videos.forEach(video => {
        const sources = video.querySelectorAll('source[data-src]');
        sources.forEach(source => {
            if (!source.src || source.src === window.location.href) {
                source.src = source.getAttribute('data-src');
            }
        });

        if (video.readyState === 0) {
            video.load();
        }
    });
}

/* =============================================
   INTERSECTION OBSERVER: autoplay muted videos
============================================= */
function initVideoObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                loadLazyVideos(video.parentElement);
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.lazy-video').forEach(v => observer.observe(v));
}

/* =============================================
   YOUTUBE CLICK-TO-LOAD
============================================= */
function initYouTube() {
    document.querySelectorAll('.vwrap.yt').forEach(wrap => {
        wrap.addEventListener('click', () => {
            const vid = wrap.getAttribute('data-vid');
            if (!vid) return;

            wrap.innerHTML = `<iframe
                src="https://www.youtube.com/embed/${vid}?autoplay=1&rel=0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
            </iframe>`;
        });
    });
}

/* =============================================
   WORKFLOW PLAYER
============================================= */
function initWorkflow() {
    const wrapper = document.getElementById('workflowWrapper');
    const video   = document.getElementById('workflowVideo');
    const overlay = document.getElementById('wfOverlay');

    if (!wrapper || !video || !overlay) return;

    wrapper.addEventListener('click', () => {
        if (video.paused) {
            // Load if not loaded
            if (video.readyState === 0) video.load();
            video.muted = false;
            video.play().catch(() => { video.muted = true; video.play(); });
            overlay.classList.add('hidden');
        } else {
            video.pause();
            overlay.classList.remove('hidden');
        }
    });
}

/* =============================================
   THUMBNAIL MODAL
============================================= */
function openModal(el) {
    const modal   = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const img     = el.querySelector('img');

    if (!img || !modal) return;

    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imgModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

// Close on backdrop click
document.getElementById('imgModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

/* =============================================
   FAQ ACCORDION
============================================= */
function initFaq() {
    document.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
            const item   = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('open');
                i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
            });

            // Open clicked if it was closed
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/* =============================================
   CONTACT FORM
============================================= */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const btn  = document.getElementById('submitBtn');
    if (!form || !btn) return;

    form.addEventListener('submit', () => {
        btn.disabled = true;
        btn.querySelector('span').textContent =
            currentLang === 'pt' ? 'Enviando...' : 'Sending...';

        // Re-enable after 6s fallback
        setTimeout(() => {
            btn.disabled = false;
            btn.querySelector('span').textContent =
                translations[currentLang]['form.submit'];
        }, 6000);
    });
}

/* =============================================
   SMOOTH SCROLL OFFSET (for fixed navbar)
============================================= */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const offset = 72; // navbar height
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

/* =============================================
   REVEAL ON SCROLL (subtle, performance-safe)
============================================= */
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(
        '.scard, .tcard, .tl-item, .thumb-item, .vitem'
    ).forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

/* =============================================
   INIT
============================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Language: restore from localStorage
    const saved = localStorage.getItem('cm-lang');
    if (saved && saved !== 'pt') {
        currentLang = saved;
        applyTranslations(currentLang);
    }

    // Lang toggle button
    document.getElementById('langToggle')?.addEventListener('click', toggleLang);

    // Load active portfolio panel's lazy videos on start
    const activePanel = document.querySelector('.cat-panel.active');
    if (activePanel) loadLazyVideos(activePanel);

    initNavbar();
    initPortfolio();
    initVideoObserver();
    initYouTube();
    initWorkflow();
    initFaq();
    initContactForm();
    initSmoothScroll();
    initReveal();
});