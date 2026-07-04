/* =========================================================
   CADEIRANTE MAROMBA — script.js
========================================================= */

/* ---------- TRADUÇÕES ---------- */
const translations = {
  pt: {
    "boot.tip":"Carregando portfólio...",
    "nav.port":"Portfólio","nav.serv":"Serviços","nav.about":"Sobre","nav.contact":"Contato",
    "hero.eyebrow":"Editor de Vídeo · Motion Designer · Artista",
    "hero.sub":"Bruto vira corte. Corte vira <strong>história.</strong>",
    "hero.cta":"Vamos trabalhar juntos →",
    "hero.bubble":"Se eu fosse você, apertava o play.",
    "port.eyebrow":"// C:\\PORTFOLIO","port.title":"Trabalhos selecionados","port.motion":"Motion","port.long":"Vídeos Longos","port.shorts":"Shorts",
    "thumb.eyebrow":"// C:\\ARTES","thumb.title":"Thumbnails & Artes","thumb.sub":"Cada arte é pensada para converter o scroll em clique.",
    "wf.eyebrow":"// C:\\PROCESSO.MOV","wf.title":"Do bruto ao luxo","wf.play":"Play","wf.raw":"BRUTO","wf.edit":"EDITADO",
    "wf.cap":"O segredo não está no corte. Está na <strong>intenção.</strong>",
    "proc.eyebrow":"// SETUP.EXE","proc.title":"Como trabalharemos juntos?","proc.sub":"Do primeiro \"oi\" até o arquivo na sua mão.",
    "proc.s1.t":"Briefing","proc.s1.d":"Você me conta sua ideia e o que quer transmitir. Quanto mais eu entender do seu canal, melhor o corte final.",
    "proc.s2.t":"Edição","proc.s2.d":"Mergulho no material bruto. Cada corte, cada música e cada efeito marcam sua presença.",
    "proc.s3.t":"Revisão","proc.s3.d":"Você assiste, aponta o que quer ajustar, e eu faço acontecer.",
    "proc.s4.t":"Entrega","proc.s4.d":"Arquivo em alta qualidade, saindo direto do forno. Pronto pra postar, pronto pra crescer.",
    "sv.eyebrow":"// C:\\SERVICOS","sv.title":"Serviços","sv.sub":"Escolha o que faz sentido para o seu canal agora.","sv.badge":"Mais pedido","sv.cta":"Quero esse →",
    "sv.a.t":"Vídeos Longos","sv.a.d":"Para quem precisa que o público fique até o final — vlogs, podcasts, gameplays, documentários.",
    "sv.a.l1":"Edição completa com ritmo e narrativa","sv.a.l2":"Trilha sonora e efeitos sonoros","sv.a.l3":"Color grading e tratamento de imagem","sv.a.l4":"Textos e legendas animadas","sv.a.l5":"Entrega em até 10 dias úteis",
    "sv.b.t":"Pacote Completo","sv.b.d":"A solução total. Do vídeo longo ao short, passando pelo motion e pela arte — tudo com a mesma identidade.",
    "sv.b.l1":"Edição de vídeo longo","sv.b.l2":"Corte e edição de Shorts/Reels","sv.b.l3":"Motion graphics e intros","sv.b.l4":"Thumbnail personalizada","sv.b.l5":"Revisões incluídas",
    "sv.c.t":"Shorts & Reels","sv.c.d":"Conteúdo vertical que prende em menos de 3 segundos. Feito para viralizar no YouTube Shorts, Instagram e TikTok.",
    "sv.c.l1":"Edição dinâmica e impactante","sv.c.l2":"Cortes sincronizados com a música","sv.c.l3":"Legendas estilizadas","sv.c.l4":"Formato 9:16 otimizado","sv.c.l5":"Entrega em até 4 dias úteis",
    "sv.d.t":"Motion + Thumb","sv.d.d":"A identidade visual do seu canal. Intros, encerramento, overlays e thumbnails que fazem o algoritmo parar de rolar.",
    "sv.d.l1":"Intro animada sob medida","sv.d.l2":"Outro de encerramento","sv.d.l3":"Lower thirds e overlays","sv.d.l4":"Thumbnail pensada para converter","sv.d.l5":"Arquivos editáveis na entrega",
    "test.eyebrow":"// GUESTBOOK.TXT","test.title":"O que dizem sobre mim",
    "test.a":"Quando vi o nível da edição, não pensei duas vezes antes de entrar em contato. Ele fez uma edição elogiada por muitos, e ainda desenhou os sprites do meu personagem e a thumbnail. Grande trabalho!",
    "test.b":"A edição desse vídeo está impecável, de verdade. É um dos vídeos mais bonitos que já vi no YouTube ultimamente. Muito maneiro, e a qualidade ficou incrível.",
    "test.c":"Precisava de alguém que entendesse de jogos e soubesse editar com energia. Os vídeos ficaram com a cara que eu queria — o primeiro que postei teve mais de 800K de views, e todos elogiaram a edição.",
    "about.eyebrow":"// README.TXT",
    "about.title":"Sou editor. Sou designer.<br>Mas antes de tudo, sou <span class=\"signal-txt\">criador.</span>",
    "about.p1":"Cada segundo de vídeo que sai daqui foi pensado por alguém que entende o que é criar conteúdo — a pressão do prazo, a ansiedade da entrega, a esperança de que o vídeo vai funcionar.",
    "about.p2":"Não edito no piloto automático. Cada projeto recebe atenção total, do primeiro corte à última trilha.",
    "about.p3":"Você cria. Eu cuido do resto.","about.st1":"Parcerias feitas","about.st2":"Pessoas alcançadas","about.st3":"De foco e cuidado",
    "faq.eyebrow":"// HELP.HLP","faq.title":"Perguntas frequentes",
    "faq.q1":"Como funciona a cobrança?","faq.a1":"A cobrança é feita por <strong>valor fixo por projeto</strong>, combinado no briefing. Para projetos maiores, também trabalho por hora editada.",
    "faq.q2":"Qual é o prazo de entrega?","faq.a2":"Vídeos longos saem em até <strong>3 a 10 dias úteis</strong> após o recebimento do material. Shorts e Reels em até <strong>4 dias úteis</strong>. Motion e identidade combinamos no briefing. Artes, thumbnails e sprites de 4 a 14 dias após a confirmação do pagamento.",
    "faq.q3":"Quantas revisões estão incluídas?","faq.a3":"São <strong>3 rodadas de revisão</strong> incluídas. Se precisar de mais, resolvemos juntos — o objetivo é você ficar 100% satisfeito.",
    "faq.q4":"Como funciona o pagamento?","faq.a4":"<strong>50% de entrada</strong> antes de começar, os outros 50% na entrega. Aceito Pix, PayPal, transferência e outros meios combinados pelo WhatsApp.",
    "faq.q5":"Em quais formatos você entrega?","faq.a5":"<strong>MP4 (H.264/H.265)</strong> na proporção certa pra cada plataforma — 16:9 no YouTube, 9:16 no Shorts/Reels/TikTok. Formato diferente? É só pedir.",
    "faq.q6":"Como envio o material?","faq.a6":"Prefiro receber via <strong>Google Drive ou WeTransfer</strong>. Manda o link com tudo — gravações, áudios, referências — e eu começo assim que a entrada for confirmada.",
    "faq.q7":"E se eu cancelar o projeto?","faq.a7":"<strong>Antes do início:</strong> reembolso integral. <strong>Depois do início, antes da 1ª prévia:</strong> 50% de reembolso. <strong>Depois da 1ª prévia:</strong> sem reembolso — o trabalho já foi feito.",
    "ct.eyebrow":"// EXPORTAR.MP4","ct.title":"Pronto para criar algo que vale a pena assistir?","ct.sub":"Respondo em até 24h. Procuro entender o seu canal antes de qualquer coisa.",
    "ct.wpp":"WhatsApp","ct.mail":"E-mail","ct.avail":"Disponível para novos projetos","ct.formTitle":"novo_projeto.exe",
    "ct.discordCopied":"copiado! ✓",
    "ct.mascoteBubble":"Vamos fazer HISTÓRIA juntos?",
    "deco.n1":"<b>EXTRA!</b> Editor local transforma bruto em ouro puro.",
    "deco.n2":"<b>VIRAL!</b> Vídeo estoura da noite pro dia; edição leva o crédito.",
    "deco.wanted":"<b>Procurado</b> Editor que faz história. Recompensa: 1 inscrição.",
    "form.name":"Seu nome","form.channel":"Canal / Marca","form.email":"Seu e-mail","form.phone":"Telefone / WhatsApp",
    "form.service":"O que você precisa?","form.select":"Selecione um serviço",
    "form.o1":"Edição de vídeos longos","form.o2":"Edição de Shorts / Reels","form.o3":"Motion Graphics / Intro","form.o4":"Thumbnail / Arte","form.o5":"Pacote completo","form.o6":"Outro",
    "form.msg":"Me conta mais","form.submit":"Enviar mensagem","form.note":"Sem spam. Sem robô. Só eu do outro lado.",
    "footer.made":"Feito com suor e muito café."
  },
  en: {
    "boot.tip":"Loading portfolio...",
    "nav.port":"Portfolio","nav.serv":"Services","nav.about":"About","nav.contact":"Contact",
    "hero.eyebrow":"Video Editor · Motion Designer · Artist",
    "hero.sub":"Raw becomes a cut. A cut becomes <strong>history.</strong>",
    "hero.cta":"Let's work together →",
    "hero.bubble":"If I were you, I'd press play.",
    "port.eyebrow":"// C:\\PORTFOLIO","port.title":"Selected work","port.motion":"Motion","port.long":"Long Videos","port.shorts":"Shorts",
    "thumb.eyebrow":"// C:\\ART","thumb.title":"Thumbnails & Art","thumb.sub":"Every thumbnail is built to turn a scroll into a click.",
    "wf.eyebrow":"// C:\\PROCESS.MOV","wf.title":"From raw to polished","wf.play":"Play","wf.raw":"RAW","wf.edit":"EDITED",
    "wf.cap":"The secret isn't in the cut. It's in the <strong>intention.</strong>",
    "proc.eyebrow":"// SETUP.EXE","proc.title":"How we'll work together?","proc.sub":"From the first message to the final file in your hands.",
    "proc.s1.t":"Briefing","proc.s1.d":"You tell me your idea and what you want to say. The more I understand your channel, the better the final cut.",
    "proc.s2.t":"Editing","proc.s2.d":"I dive into the raw footage. Every cut, track and effect carries your presence.",
    "proc.s3.t":"Review","proc.s3.d":"You watch, point out what to adjust, and I make it happen.",
    "proc.s4.t":"Delivery","proc.s4.d":"High-quality file, hot off the press. Ready to post, ready to grow.",
    "sv.eyebrow":"// C:\\SERVICES","sv.title":"Services","sv.sub":"Pick what makes sense for your channel right now.","sv.badge":"Most requested","sv.cta":"I want this →",
    "sv.a.t":"Long Videos","sv.a.d":"For creators who need their audience to stay until the end — vlogs, podcasts, gameplays, documentaries.",
    "sv.a.l1":"Full edit with pacing and narrative","sv.a.l2":"Soundtrack and sound effects","sv.a.l3":"Color grading and image treatment","sv.a.l4":"Animated text and subtitles","sv.a.l5":"Delivery within 10 business days",
    "sv.b.t":"Full Package","sv.b.d":"The all-in-one solution. Long video, shorts, motion and art — all with the same identity.",
    "sv.b.l1":"Long video editing","sv.b.l2":"Shorts/Reels cutting and editing","sv.b.l3":"Motion graphics and intros","sv.b.l4":"Custom thumbnail","sv.b.l5":"Revisions included",
    "sv.c.t":"Shorts & Reels","sv.c.d":"Vertical content that hooks in under 3 seconds. Made to go viral on YouTube Shorts, Instagram and TikTok.",
    "sv.c.l1":"Dynamic, impactful editing","sv.c.l2":"Cuts synced to the music","sv.c.l3":"Styled subtitles","sv.c.l4":"Optimized 9:16 format","sv.c.l5":"Delivery within 4 business days",
    "sv.d.t":"Motion + Thumb","sv.d.d":"Your channel's visual identity. Intros, outros, overlays and thumbnails that make the algorithm stop scrolling.",
    "sv.d.l1":"Custom animated intro","sv.d.l2":"End screen / outro","sv.d.l3":"Lower thirds and overlays","sv.d.l4":"Click-optimized thumbnail","sv.d.l5":"Editable files on delivery",
    "test.eyebrow":"// GUESTBOOK.TXT","test.title":"What they say about me",
    "test.a":"When I saw the editing quality, I didn't think twice before reaching out. The edit got praised by a lot of people, and he also designed my character sprites and thumbnail. Great work!",
    "test.b":"The editing on this video is truly flawless. It's one of the nicest-looking videos I've seen on YouTube lately. Really cool, and the quality was incredible.",
    "test.c":"I needed someone who understood games and could edit with energy. The videos got exactly the vibe I wanted — the first one I posted got over 800K views, and everyone praised the edit.",
    "about.eyebrow":"// README.TXT",
    "about.title":"I'm an editor. A designer.<br>But above all, I'm a <span class=\"signal-txt\">creator.</span>",
    "about.p1":"Every second of video that leaves here was made by someone who knows what it feels like to create content — the deadline pressure, the delivery anxiety, the hope that it will actually work.",
    "about.p2":"I don't edit on autopilot. Every project gets full attention, from the first cut to the last track.",
    "about.p3":"You create. I handle the rest.","about.st1":"Partnerships made","about.st2":"People reached","about.st3":"Of focus and care",
    "faq.eyebrow":"// HELP.HLP","faq.title":"Frequently asked questions",
    "faq.q1":"How does pricing work?","faq.a1":"Pricing is a <strong>fixed rate per project</strong>, agreed on during the briefing. For larger projects I can also work hourly.",
    "faq.q2":"What's the turnaround time?","faq.a2":"Long videos ship in <strong>3 to 10 business days</strong> after I receive the footage. Shorts and Reels within <strong>4 business days</strong>. Motion and identity projects depend on the briefing. Art, thumbnails and sprites take 4 to 14 days after payment is confirmed.",
    "faq.q3":"How many revisions are included?","faq.a3":"<strong>3 revision rounds</strong> are included. Need more? We'll sort it out together — the goal is for you to be 100% happy.",
    "faq.q4":"How does payment work?","faq.a4":"<strong>50% upfront</strong> before I start, the remaining 50% on delivery. I accept Pix, PayPal, bank transfer and other methods arranged via WhatsApp.",
    "faq.q5":"What formats do you deliver in?","faq.a5":"<strong>MP4 (H.264/H.265)</strong> in the right ratio for each platform — 16:9 for YouTube, 9:16 for Shorts/Reels/TikTok. Need something else? Just ask.",
    "faq.q6":"How do I send you the footage?","faq.a6":"I prefer <strong>Google Drive or WeTransfer</strong>. Send the link with everything and I'll start once the deposit is confirmed.",
    "faq.q7":"What if I cancel the project?","faq.a7":"<strong>Before start:</strong> full refund. <strong>After start, before the first preview:</strong> 50% refund. <strong>After the first preview:</strong> no refund — the work has already been done.",
    "ct.eyebrow":"// EXPORT.MP4","ct.title":"Ready to create something worth watching?","ct.sub":"I reply within 24h. I like understanding your channel before anything else.",
    "ct.wpp":"WhatsApp","ct.mail":"E-mail","ct.avail":"Available for new projects","ct.formTitle":"new_project.exe",
    "ct.discordCopied":"copied! ✓",
    "ct.mascoteBubble":"Shall we make HISTORY together?",
    "deco.n1":"<b>EXTRA!</b> Local editor turns raw footage into pure gold.",
    "deco.n2":"<b>VIRAL!</b> Video blows up overnight; the edit takes the credit.",
    "deco.wanted":"<b>Wanted</b> Editor who makes history. Reward: 1 subscription.",
    "form.name":"Your name","form.channel":"Channel / Brand","form.email":"Your e-mail","form.phone":"Phone / WhatsApp",
    "form.service":"What do you need?","form.select":"Select a service",
    "form.o1":"Long video editing","form.o2":"Shorts / Reels editing","form.o3":"Motion Graphics / Intro","form.o4":"Thumbnail / Art","form.o5":"Full package","form.o6":"Other",
    "form.msg":"Tell me more","form.submit":"Send message","form.note":"No spam. No bots. Just me on the other end.",
    "footer.made":"Made with sweat and lots of coffee."
  }
};

const DISCORD_USER = 'cadeirantemaromba';
let currentLang = localStorage.getItem('cm-lang') || 'pt';

/* ---------- I18N ---------- */
function applyTranslations(lang){
  const t = translations[lang];
  if(!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(t[key]) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key = el.getAttribute('data-i18n-html');
    if(t[key]) el.innerHTML = t[key];
  });
  document.documentElement.setAttribute('lang', lang==='pt'?'pt-BR':'en');
  document.documentElement.setAttribute('data-lang', lang);
}
function toggleLang(){
  currentLang = currentLang==='pt' ? 'en' : 'pt';
  applyTranslations(currentLang);
  localStorage.setItem('cm-lang', currentLang);
  buildTape();
}

/* ---------- BOOT SCREEN ---------- */
function initBoot(){
  const boot = document.getElementById('boot');
  setTimeout(()=>boot.classList.add('hide'), 1300);
}

/* ---------- TASKBAR + BARRA COM MASCOTE ---------- */
function initChrome(){
  const fill = document.getElementById('pbarFill');
  const rider = document.getElementById('pbarRider');
  const tbSection = document.getElementById('tbSection');
  const sections = [
    {id:'inicio', label:'INÍCIO'},
    {id:'trabalhos', label:'PORTFÓLIO'},
    {id:'servicos', label:'SERVIÇOS'},
    {id:'sobre', label:'SOBRE'},
    {id:'contato', label:'CONTATO'}
  ];
  let ticking = false;
  function onScroll(){
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max>0 ? window.scrollY/max : 0;
    fill.style.width = (pct*100)+'%';
    if(rider) rider.style.left = (pct*100)+'%';
    let current = sections[0].label;
    sections.forEach(s=>{
      const el = document.getElementById(s.id);
      if(el && el.getBoundingClientRect().top < 140) current = s.label;
    });
    tbSection.textContent = current;
    ticking = false;
  }
  window.addEventListener('scroll', ()=>{ if(!ticking){requestAnimationFrame(onScroll);ticking=true} }, {passive:true});
  onScroll();

  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', e=>{
      const href = link.getAttribute('href');
      if(!href || href==='#') return;
      const target = document.querySelector(href);
      if(!target) return;
      e.preventDefault();
      const navH = document.getElementById('taskbar').offsetHeight + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - navH + 1;
      window.scrollTo({top, behavior:'smooth'});
    });
  });
}

/* ---------- CRT: liga com clique + controle de volume ---------- */
function initCrt(){
  const btn = document.getElementById('crtBtn');
  const power = document.getElementById('crtPower');
  const video = document.getElementById('crtVideo');
  const led = document.getElementById('crtLed');
  const ctrl = document.getElementById('crtCtrl');
  const vol = document.getElementById('crtVol');
  video.style.display='none';

  btn.addEventListener('click', ()=>{
    video.style.display='block';
    video.load();
    video.volume = vol.value/100;
    video.muted = false;
    video.play().catch(()=>{ video.muted = true; video.play().catch(()=>{}); });
    power.classList.add('off');
    led.classList.add('on');
    ctrl.classList.add('on');
  });

  vol.addEventListener('input', ()=>{
    const v = vol.value/100;
    video.volume = v;
    video.muted = (v === 0);
  });
}

/* ---------- LAZY VIDEO ---------- */
function loadLazy(container){
  (container||document).querySelectorAll('.lazy').forEach(video=>{
    video.querySelectorAll('source[data-src]').forEach(s=>{
      if(!s.getAttribute('src')) s.setAttribute('src', s.getAttribute('data-src'));
    });
    if(video.readyState===0) video.load();
  });
}
function initPortfolio(){
  const tabs = document.querySelectorAll('.folder');
  const cats = document.querySelectorAll('.cat');
  tabs.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const cat = btn.dataset.cat;
      cats.forEach(c=>{c.querySelectorAll('video').forEach(v=>v.pause());c.classList.remove('active')});
      tabs.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById('cat-'+cat);
      target.classList.add('active');
      loadLazy(target);
    });
  });
}
function initVideoObserver(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      const v = entry.target;
      if(entry.isIntersecting){ loadLazy(v.closest('.cat')||v.parentElement); v.play().catch(()=>{}); }
      else v.pause();
    });
  }, {threshold:.3});
  document.querySelectorAll('.lazy').forEach(v=>io.observe(v));
}

/* ---------- YOUTUBE ---------- */
function initYouTube(){
  document.querySelectorAll('.vw.yt').forEach(wrap=>{
    const vid = wrap.dataset.vid;
    const img = wrap.querySelector('img');
    if(img){
      img.src = `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`;
      img.onerror = ()=>{ img.src = `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`; img.onerror=null; };
    }
    wrap.querySelector('.frame').addEventListener('click', ()=>{
      wrap.querySelector('.frame').innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&rel=0&modestbranding=1" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
    });
  });
}

/* ---------- WORKFLOW + volume ---------- */
function initWorkflow(){
  const box = document.getElementById('wfBox');
  const video = document.getElementById('wfVideo');
  const cover = document.getElementById('wfCover');
  const volBox = document.getElementById('wfVol');
  const vol = document.getElementById('wfVolRange');

  box.addEventListener('click', ()=>{
    if(video.paused){
      if(video.readyState===0) video.load();
      video.volume = vol.value/100;
      video.muted = false;
      video.play().catch(()=>{video.muted=true;video.play().catch(()=>{})});
      cover.classList.add('off');
      volBox.classList.add('on');
    } else {
      video.pause();
      cover.classList.remove('off');
      volBox.classList.remove('on');
    }
  });

  /* o slider não pode pausar o vídeo ao ser clicado */
  ['click','pointerdown','input'].forEach(evt=>{
    volBox.addEventListener(evt, e=>e.stopPropagation());
  });
  vol.addEventListener('input', ()=>{
    const v = vol.value/100;
    video.volume = v;
    video.muted = (v === 0);
  });
}

/* ---------- MODAL ---------- */
function openModal(el){
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const img = el.querySelector('img');
  modalImg.src = img.src; modalImg.alt = img.alt;
  modal.classList.add('open'); document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('imgModal').classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

/* ---------- FAQ (corrigido: sem atributo hidden travando) ---------- */
function initFaq(){
  document.querySelectorAll('.fq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.closest('.fq');
      const open = item.classList.contains('open');
      document.querySelectorAll('.fq').forEach(i=>{
        i.classList.remove('open');
        i.querySelector('.fq-q').setAttribute('aria-expanded','false');
      });
      if(!open){ item.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
    });
  });
}

/* ---------- FORM ---------- */
function initForm(){
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('submitBtn');
  form.addEventListener('submit', ()=>{
    btn.disabled = true;
    const span = btn.querySelector('span');
    span.textContent = currentLang==='pt' ? 'Enviando...' : 'Sending...';
    setTimeout(()=>{ btn.disabled=false; span.textContent = translations[currentLang]['form.submit']; }, 6000);
  });
}

/* ---------- DISCORD: copia o nome de usuário ---------- */
function initDiscord(){
  const btn = document.getElementById('discordBtn');
  if(!btn) return;
  const original = btn.textContent;
  btn.addEventListener('click', ()=>{
    const done = ()=>{
      btn.textContent = translations[currentLang]['ct.discordCopied'];
      btn.classList.add('copied');
      setTimeout(()=>{ btn.textContent = original; btn.classList.remove('copied'); }, 2200);
    };
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(DISCORD_USER).then(done).catch(()=>fallbackCopy(done));
    } else {
      fallbackCopy(done);
    }
  });
  function fallbackCopy(done){
    const ta = document.createElement('textarea');
    ta.value = DISCORD_USER;
    ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta);
    ta.select();
    try{ document.execCommand('copy'); done(); }catch(e){ alert(DISCORD_USER); }
    document.body.removeChild(ta);
  }
}

/* ---------- MASCOTE DO CONTATO: pop + fala ---------- */
function initMascote(){
  const mascote = document.getElementById('contactMascote');
  const bubble = document.getElementById('mascoteBubble');
  if(!mascote || !bubble) return;
  let hideTimer = null;
  mascote.addEventListener('click', ()=>{
    /* reinicia a animação de pop */
    mascote.classList.remove('pop');
    void mascote.offsetWidth;
    mascote.classList.add('pop');
    /* mostra a caixinha de fala */
    bubble.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(()=>bubble.classList.remove('show'), 2800);
  });
}

/* ---------- REVEAL ON SCROLL ---------- */
function initReveal(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('on'); io.unobserve(entry.target); }
    });
  }, {threshold:.08});
  document.querySelectorAll('.scard,.tc,.wiz-card,.ti,.vw,.vp-wrap,.sec-head').forEach(el=>{
    el.classList.add('reveal'); io.observe(el);
  });
}

/* ---------- TAPE MARQUEE — separador losango minimalista ---------- */
function buildTape(){
  const items = currentLang==='pt'
    ? ['MOTION GRAPHICS','COLOR GRADING','SOUND DESIGN','ROTEIRO','THUMBNAILS','SHORTS & REELS']
    : ['MOTION GRAPHICS','COLOR GRADING','SOUND DESIGN','SCRIPTING','THUMBNAILS','SHORTS & REELS'];
  const track = document.getElementById('tapeTrack');
  let html='';
  for(let r=0;r<2;r++){ items.forEach(i=>{ html += `<span>${i}</span><i class="tape-dot"></i>`; }); }
  track.innerHTML = html;
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  applyTranslations(currentLang);
  buildTape();
  document.getElementById('imgModal').addEventListener('click', function(e){ if(e.target===this) closeModal(); });
  document.getElementById('langBtn').addEventListener('click', toggleLang);
  const activeCat = document.querySelector('.cat.active');
  if(activeCat) loadLazy(activeCat);

  initBoot();
  initChrome();
  initCrt();
  initPortfolio();
  initVideoObserver();
  initYouTube();
  initWorkflow();
  initFaq();
  initForm();
  initDiscord();
  initMascote();
  initReveal();
});
