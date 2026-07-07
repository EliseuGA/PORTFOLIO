/* =========================================================
   CADEIRANTE MAROMBA — THE LOST ARCHIVE — script.js
   "Nada é interface. Tudo é objeto."
========================================================= */

/* =========================================================
   O INVENTÁRIO — cada vídeo é um item catalogado do acervo.
   Para adicionar um projeto: copie uma linha e edite os campos.
   f = arquivo em videos/ · yt = ID do YouTube
   status: EXPORTADO | APROVADO | ARQUIVADO | PUBLICADO | ENTREGUE
   (os metadados abaixo são plausíveis — confira e corrija à vontade)
========================================================= */
const ARCHIVE = {
  motion: [
    {f:'introIcebergCaioxpo_8mb.mp4',            label:'ICEBERG_INTRO.mov',   cliente:'caioxapo',       ano:'2025', peso:'7.4 GB', status:'EXPORTADO'},
    {f:'editVonGusto.mp4',                        label:'EDIT_VONGUSTO.mov',   cliente:'Von Gusto',      ano:'2025', peso:'3.2 GB', status:'APROVADO'},
    {f:'badboysRDR2_8mb.mp4',                     label:'BADBOYS_RDR2.mov',    cliente:'Acervo pessoal', ano:'2024', peso:'5.8 GB', status:'ARQUIVADO'},
    {f:'introFnafDoom.mp4',                       label:'FNAF_DOOM.mov',       cliente:'caioxapo',       ano:'2025', peso:'4.1 GB', status:'EXPORTADO'},
    {f:'cancerDeBOLA_8mb.mp4',                    label:'PROJETO_CDB.mov',     cliente:'—',              ano:'2025', peso:'6.6 GB', status:'EXPORTADO'},
    {f:'introPoppyPlaytime_8mb.mp4',              label:'POPPY_INTRO.mov',     cliente:'caioxapo',       ano:'2025', peso:'5.0 GB', status:'APROVADO'},
    {f:'editDarthVader_1920x1080p_8mb.mp4',       label:'VADER_EDIT.mov',      cliente:'Acervo pessoal', ano:'2024', peso:'2.9 GB', status:'ARQUIVADO'},
    {f:'VideoLisboa FINALIZADO_8mb.mp4',          label:'LISBOA_FINAL.mov',    cliente:'Particular',     ano:'2024', peso:'9.3 GB', status:'EXPORTADO'},
    {f:'introRVTHEREYET_8mb.mp4',                 label:'RV_THERE_YET.mov',    cliente:'RV There Yet',   ano:'2026', peso:'7.7 GB', status:'EXPORTADO'}
  ],
  longos: [
    {yt:'wfXfG8ULGDY', label:'DOC_ARQUIVO_01.mp4', ano:'2025'},
    {yt:'nnONog3UGMk', label:'DOC_ARQUIVO_02.mp4', ano:'2025'},
    {yt:'2TCUJv1k6Fc', label:'DOC_ARQUIVO_03.mp4', ano:'2025'},
    {yt:'jed83po7YzY', label:'DOC_ARQUIVO_04.mp4', ano:'2026'},
    {yt:'mYKNXIumILY', label:'DOC_ARQUIVO_05.mp4', ano:'2026'},
    {yt:'C0plDAADgWc', label:'DOC_ARQUIVO_06.mp4', ano:'2026'}
  ],
  shorts: [
    {f:'rageLol_1080x1920_8mb.mp4',        label:'RAGE_LOL.mp4',      cliente:'Von Gusto', ano:'2025', peso:'820 MB', status:'ENTREGUE'},
    {f:'eraHumano_CONFIA_1080x1920p.mp4',  label:'ERA_HUMANO.mp4',    cliente:'caioxapo',  ano:'2025', peso:'640 MB', status:'ENTREGUE'},
    {f:'gustaoTapao_1080x1920p_8mb.mp4',   label:'GUSTAO_TAPAO.mp4',  cliente:'Von Gusto', ano:'2025', peso:'710 MB', status:'ENTREGUE'},
    {f:'sonoGusto_1080x1920p_8mb.mp4',     label:'SONO_GUSTO.mp4',    cliente:'Von Gusto', ano:'2025', peso:'590 MB', status:'ENTREGUE'},
    {f:'gustoCS2_1080x1920p_8mb.mp4',      label:'GUSTO_CS2.mp4',     cliente:'Von Gusto', ano:'2026', peso:'880 MB', status:'ENTREGUE'},
    {f:'mavalgasBURRO_1080x1920p_8mb.mp4', label:'MAVALGAS.mp4',      cliente:'Mavalgas',  ano:'2026', peso:'760 MB', status:'ENTREGUE'},
    {f:'gritoGusto_1080x1920p_8mb.mp4',    label:'GRITO_GUSTO.mp4',   cliente:'Von Gusto', ano:'2026', peso:'540 MB', status:'ENTREGUE'}
  ]
};
const ST_CLASS = {EXPORTADO:'exp', APROVADO:'apr', ARQUIVADO:'arc', PUBLICADO:'pub', ENTREGUE:'ent'};

/* ---------- TRADUÇÕES ----------
   Artefatos do acervo (carimbos, status, nomes de documento)
   permanecem em PT mesmo no modo EN: objetos encontrados não se traduzem. */
const translations = {
  pt: {
    "nav.port":"INVENTÁRIO","nav.serv":"GAVETA","nav.about":"FICHA","nav.contact":"BRIEFING",
    "hero.eyebrow":"Editor de Vídeo · Motion Designer · Documentarista",
    "hero.postit":"lembrete:<br>fazer HISTÓRIA.",
    "hero.label":"ITEM Nº 001 · EM ATIVIDADE · INTERIOR DE SP",
    "hero.hint":"insira a fita<br>pra assistir ↙",
    "hero.tapetag":"assista! →",
    "hero.cta":"Protocolar um briefing →",
    "port.eyebrow":"REF: CM-01 · INVENTÁRIO DE MÍDIAS","port.title":"Trabalhos selecionados",
    "port.sub":"Cada item foi catalogado. Toque para reproduzir.",
    "port.motion":"Caixa A — Motion","port.long":"Caixa B — Longos","port.shorts":"Caixa C — Shorts",
    "thumb.eyebrow":"REF: CM-02 · IMPRESSÕES E ARTES","thumb.title":"Thumbnails & Artes","thumb.sub":"Cada arte é pensada para converter o scroll em clique.",
    "wf.eyebrow":"REF: CM-03 · PROVA DE PROCESSO","wf.title":"Do bruto ao luxo","wf.play":"Reproduzir","wf.raw":"BRUTO","wf.edit":"EDITADO",
    "wf.mod":"mod: 11/2025 · reexportado 2x · 16:9 · H.264",
    "wf.cap":"O segredo não está no corte. Está na <strong>intenção.</strong>",
    "proc.eyebrow":"REF: CM-04 · PROTOCOLO DE PRODUÇÃO","proc.title":"Como trabalharemos juntos?","proc.sub":"Do primeiro \"oi\" até o arquivo na sua mão.","proc.stamp":"Protocolo padrão",
    "proc.s1.t":"Briefing","proc.s1.d":"Você me conta sua ideia e o que quer transmitir. Quanto mais eu entender do seu canal, melhor o corte final.",
    "proc.s2.t":"Edição","proc.s2.d":"Mergulho no material bruto. Cada corte, cada música e cada efeito marcam sua presença.",
    "proc.s3.t":"Revisão","proc.s3.d":"Você assiste, aponta o que quer ajustar, e eu faço acontecer.",
    "proc.s4.t":"Entrega","proc.s4.d":"Arquivo em alta qualidade, saindo direto do forno. Pronto pra postar, pronto pra crescer.",
    "sv.eyebrow":"REF: CM-05 · GAVETA DE PROJETOS","sv.title":"Serviços","sv.sub":"Quatro pastas. Escolha a que faz sentido para o seu canal agora.",
    "sv.badge":"MAIS PEDIDO","sv.cta":"ABRIR PROJETO →",
    "sv.foot1":"GAVETA 02 — 4 PASTAS CATALOGADAS","sv.foot2":"ÚLTIMA ATUALIZAÇÃO: 2026",
    "sv.a.t":"Vídeos Longos","sv.a.d":"Para quem precisa que o público fique até o final — vlogs, podcasts, gameplays, documentários.","sv.a.props":"TIPO: Projeto Premiere · PRAZO: até 10 dias úteis",
    "sv.a.l1":"Edição completa com ritmo e narrativa","sv.a.l2":"Trilha sonora e efeitos sonoros","sv.a.l3":"Color grading e tratamento de imagem","sv.a.l4":"Textos e legendas animadas",
    "sv.b.t":"Pacote Completo","sv.b.d":"A solução total. Do vídeo longo ao short, passando pelo motion e pela arte — tudo com a mesma identidade.","sv.b.props":"TIPO: Pacote comprimido · CONTÉM: 4 itens",
    "sv.b.l1":"Edição de vídeo longo","sv.b.l2":"Corte e edição de Shorts/Reels","sv.b.l3":"Motion graphics e intros","sv.b.l4":"Thumbnail personalizada",
    "sv.c.t":"Shorts & Reels","sv.c.d":"Conteúdo vertical que prende em menos de 3 segundos. Feito para viralizar no YouTube Shorts, Instagram e TikTok.","sv.c.props":"TIPO: Projeto Premiere · PRAZO: até 4 dias úteis",
    "sv.c.l1":"Edição dinâmica e impactante","sv.c.l2":"Cortes sincronizados com a música","sv.c.l3":"Legendas estilizadas","sv.c.l4":"Formato 9:16 otimizado",
    "sv.d.t":"Motion + Thumb","sv.d.d":"A identidade visual do seu canal. Intros, encerramento, overlays e thumbnails que fazem o algoritmo parar de rolar.","sv.d.props":"TIPO: After Effects + PSD · ENTREGA: editáveis",
    "sv.d.l1":"Intro animada sob medida","sv.d.l2":"Outro de encerramento","sv.d.l3":"Lower thirds e overlays","sv.d.l4":"Thumbnail pensada para converter",
    "test.eyebrow":"REF: CM-06 · CORRESPONDÊNCIA RECEBIDA","test.title":"O que dizem sobre mim","test.stamp":"Arquivada",
    "test.a.s":"edição + sprites","test.b.s":"qualidade do vídeo","test.c.s":"vídeos do canal",
    "test.a":"Quando vi o nível da edição, não pensei duas vezes antes de entrar em contato. Ele fez uma edição elogiada por muitos, e ainda desenhou os sprites do meu personagem e a thumbnail. Grande trabalho!",
    "test.b":"A edição desse vídeo está impecável, de verdade. É um dos vídeos mais bonitos que já vi no YouTube ultimamente. Muito maneiro, e a qualidade ficou incrível.",
    "test.c":"Precisava de alguém que entendesse de jogos e soubesse editar com energia. Os vídeos ficaram com a cara que eu queria — o primeiro que postei teve mais de 800K de views, e todos elogiaram a edição.",
    "about.eyebrow":"REF: CM-07 · FICHA DO ACERVO",
    "note.title":"lembrete","note.1":"tratar do gado","note.2":"responder cliente","note.3":"renderizar episódio 8","note.5":"comprar sal mineral",
    "hero.warn":"NÃO REMOVER",
    "port.count":"ACERVO EM EXPANSÃO · <b>DEZENAS DE ITENS</b> CATALOGADOS · 3 CAIXAS ABERTAS",
    "sv.dead":"projetos antigos, testes e versões que ficaram pelo caminho. guardados, mas fora de catálogo.","sv.deadstamp":"Arquivado",
    "about.k1":"Responsável","about.k2":"Especialidade","about.v2":"Narrativas e edição cinematográfica","about.k3":"Base","about.v3":"Interior de SP, Brasil","about.k4":"Arquivo iniciado","about.k5":"Estado","about.v5":"Em atividade","about.k6":"Última atualização","about.v6":"Hoje",
    "fa.title":"Arquivo Cadeirante Maromba","fa.sub":"Um acervo pessoal de vídeos, artes e documentos de produção. Ainda em expansão — o visitante recebeu autorização temporária para explorar.",
    "fa.l1":"Estado do acervo","fa.v1":"EM ATIVIDADE","fa.l2":"Iniciado em","fa.l3":"Caixas de mídia abertas","fa.l4":"Documentado","fa.v4":"ANOS DE TRABALHO","fa.l5":"Última atualização",
    "about.title":"Sou editor. Sou designer.<br>Mas antes de tudo, sou <span class=\"signal-txt\">criador.</span>",
    "about.note":"qualidade &gt; quantidade.<br>sempre.",
    "about.f1":"NOME: <b>Eliseu (\"Cadeirante Maromba\")</b>","about.f2":"FUNÇÃO: <b>Editor & Documentarista</b>","about.f3":"BASE: <b>Interior de SP, Brasil</b>","about.f4":"STATUS: <b>Em atividade</b>",
    "about.p1":"Meu nome é Eliseu, mas provavelmente você me conhece como Cadeirante Maromba.",
    "about.p2":"Eu edito vídeos porque gosto de descobrir o que faz uma história funcionar. Um corte no momento certo, uma trilha que entra alguns segundos depois, um silêncio bem colocado... são esses detalhes que fazem alguém continuar assistindo.",
    "about.p3":"Cresci consumindo muito conteúdo na internet, documentários e jogos, e é daí que vem meu maior defeito e minha maior qualidade: eu sou EXTREMAMENTE crítico. Não aguento vídeo genérico. Corte sem intenção, trilha jogada de qualquer jeito, thumbnail preguiçosa... isso realmente me incomoda.",
    "about.p4":"Quando pego um projeto, meu objetivo não é simplesmente terminar a edição. É fazer com que ela pareça inevitável, como se cada escolha tivesse exatamente um motivo para existir.",
    "about.quote":"\"Você cria. Eu cuido do resto.\"",
    "about.st1":"PARCERIAS","about.st2":"ALCANÇADOS","about.st3":"DE CUIDADO",
    "faq.eyebrow":"REF: CM-08 · MANUAL DO CLIENTE","faq.title":"Perguntas frequentes","faq.page":"PÁGINA 07",
    "faq.q1":"Como funciona a cobrança?","faq.a1":"A cobrança é feita por <strong>valor fixo por projeto</strong>, combinado no briefing. Para projetos maiores, também trabalho por hora editada.",
    "faq.q2":"Qual é o prazo de entrega?","faq.a2":"Vídeos longos saem em até <strong>3 a 10 dias úteis</strong> após o recebimento do material. Shorts e Reels em até <strong>4 dias úteis</strong>. Motion e identidade combinamos no briefing. Artes, thumbnails e sprites de 4 a 14 dias após a confirmação do pagamento.",
    "faq.q3":"Quantas revisões estão incluídas?","faq.a3":"São <strong>3 rodadas de revisão</strong> incluídas. Se precisar de mais, resolvemos juntos — o objetivo é você ficar 100% satisfeito.",
    "faq.q4":"Como funciona o pagamento?","faq.a4":"<strong>50% de entrada</strong> antes de começar, os outros 50% na entrega. Aceito Pix, PayPal, transferência e outros meios combinados pelo WhatsApp.",
    "faq.q5":"Em quais formatos você entrega?","faq.a5":"<strong>MP4 (H.264/H.265)</strong> na proporção certa pra cada plataforma — 16:9 no YouTube, 9:16 no Shorts/Reels/TikTok. Formato diferente? É só pedir.",
    "faq.q6":"Como envio o material?","faq.a6":"Prefiro receber via <strong>Google Drive ou WeTransfer</strong>. Manda o link com tudo — gravações, áudios, referências — e eu começo assim que a entrada for confirmada.",
    "faq.q7":"E se eu cancelar o projeto?","faq.a7":"<strong>Antes do início:</strong> reembolso integral. <strong>Depois do início, antes da 1ª prévia:</strong> 50% de reembolso. <strong>Depois da 1ª prévia:</strong> sem reembolso — o trabalho já foi feito.",
    "ct.eyebrow":"REF: CM-09 · NOVO BRIEFING","ct.title":"Pronto para adicionar um projeto ao NOSSO arquivo?",
    "ct.sub":"Preencha o briefing ao lado — ele entra direto na fila do acervo. Respondo em até 24h.",
    "ct.wpp":"WhatsApp","ct.mail":"E-mail","ct.avail":"Arquivo aberto para novos projetos",
    "ct.discordCopied":"copiado! ✓",
    "ct.mascoteBubble":"Vamos fazer HISTÓRIA juntos?",
    "deco.n1":"<b>EXTRA!</b> Editor local transforma bruto em ouro puro.",
    "deco.n2":"<b>VIRAL!</b> Vídeo estoura da noite pro dia; edição leva o crédito.",
    "deco.wanted":"<b>Procurado</b> Editor que faz história. Recompensa: 1 inscrição.",
    "form.name":"Seu nome","form.channel":"Canal / Marca","form.email":"Seu e-mail","form.phone":"Telefone / WhatsApp",
    "form.service":"Qual pasta abrir?","form.select":"Selecione um serviço",
    "form.o1":"Edição de vídeos longos","form.o2":"Edição de Shorts / Reels","form.o3":"Motion Graphics / Intro","form.o4":"Thumbnail / Arte","form.o5":"Pacote completo","form.o6":"Outro",
    "form.msg":"Descreva o projeto","form.submit":"Protocolar briefing","form.note":"Sem spam. Sem robô. Só eu do outro lado.",
    "footer.end":"FIM DO ARQUIVO","footer.made":"Feito com suor e muito café.",
    "footer.secret":"você fuçou até o fim do arquivo. gostei de você. :)"
  },
  en: {
    "nav.port":"INVENTORY","nav.serv":"DRAWER","nav.about":"PROFILE","nav.contact":"BRIEFING",
    "hero.eyebrow":"Video Editor · Motion Designer · Documentary Maker",
    "hero.postit":"reminder:<br>make HISTORY.",
    "hero.label":"ITEM Nº 001 · EM ATIVIDADE · INTERIOR DE SP",
    "hero.hint":"insert the tape<br>to watch ↙",
    "hero.tapetag":"watch! →",
    "hero.cta":"File a briefing →",
    "port.eyebrow":"REF: CM-01 · MEDIA INVENTORY","port.title":"Selected work",
    "port.sub":"Every item has been catalogued. Tap to play.",
    "port.motion":"Box A — Motion","port.long":"Box B — Long-form","port.shorts":"Box C — Shorts",
    "thumb.eyebrow":"REF: CM-02 · PRINTS & ART","thumb.title":"Thumbnails & Art","thumb.sub":"Every thumbnail is built to turn a scroll into a click.",
    "wf.eyebrow":"REF: CM-03 · PROCESS PROOF","wf.title":"From raw to polished","wf.play":"Play","wf.raw":"RAW","wf.edit":"EDITED",
    "wf.mod":"mod: 11/2025 · re-exported 2x · 16:9 · H.264",
    "wf.cap":"The secret isn't in the cut. It's in the <strong>intention.</strong>",
    "proc.eyebrow":"REF: CM-04 · PRODUCTION PROTOCOL","proc.title":"How we'll work together?","proc.sub":"From the first message to the final file in your hands.","proc.stamp":"Protocolo padrão",
    "proc.s1.t":"Briefing","proc.s1.d":"You tell me your idea and what you want to say. The more I understand your channel, the better the final cut.",
    "proc.s2.t":"Editing","proc.s2.d":"I dive into the raw footage. Every cut, track and effect carries your presence.",
    "proc.s3.t":"Review","proc.s3.d":"You watch, point out what to adjust, and I make it happen.",
    "proc.s4.t":"Delivery","proc.s4.d":"High-quality file, hot off the press. Ready to post, ready to grow.",
    "sv.eyebrow":"REF: CM-05 · PROJECT DRAWER","sv.title":"Services","sv.sub":"Four folders. Pick the one that makes sense for your channel right now.",
    "sv.badge":"MOST REQUESTED","sv.cta":"OPEN PROJECT →",
    "sv.foot1":"DRAWER 02 — 4 FOLDERS CATALOGUED","sv.foot2":"LAST UPDATE: 2026",
    "sv.a.t":"Long Videos","sv.a.d":"For creators who need their audience to stay until the end — vlogs, podcasts, gameplays, documentaries.","sv.a.props":"TYPE: Premiere project · TURNAROUND: up to 10 business days",
    "sv.a.l1":"Full edit with pacing and narrative","sv.a.l2":"Soundtrack and sound effects","sv.a.l3":"Color grading and image treatment","sv.a.l4":"Animated text and subtitles",
    "sv.b.t":"Full Package","sv.b.d":"The all-in-one solution. Long video, shorts, motion and art — all with the same identity.","sv.b.props":"TYPE: Compressed package · CONTAINS: 4 items",
    "sv.b.l1":"Long video editing","sv.b.l2":"Shorts/Reels cutting and editing","sv.b.l3":"Motion graphics and intros","sv.b.l4":"Custom thumbnail",
    "sv.c.t":"Shorts & Reels","sv.c.d":"Vertical content that hooks in under 3 seconds. Made to go viral on YouTube Shorts, Instagram and TikTok.","sv.c.props":"TYPE: Premiere project · TURNAROUND: up to 4 business days",
    "sv.c.l1":"Dynamic, impactful editing","sv.c.l2":"Cuts synced to the music","sv.c.l3":"Styled subtitles","sv.c.l4":"Optimized 9:16 format",
    "sv.d.t":"Motion + Thumb","sv.d.d":"Your channel's visual identity. Intros, outros, overlays and thumbnails that make the algorithm stop scrolling.","sv.d.props":"TYPE: After Effects + PSD · DELIVERY: editable files",
    "sv.d.l1":"Custom animated intro","sv.d.l2":"End screen / outro","sv.d.l3":"Lower thirds and overlays","sv.d.l4":"Click-optimized thumbnail",
    "test.eyebrow":"REF: CM-06 · RECEIVED CORRESPONDENCE","test.title":"What they say about me","test.stamp":"Arquivada",
    "test.a.s":"editing + sprites","test.b.s":"video quality","test.c.s":"channel videos",
    "test.a":"When I saw the editing quality, I didn't think twice before reaching out. The edit got praised by a lot of people, and he also designed my character sprites and thumbnail. Great work!",
    "test.b":"The editing on this video is truly flawless. It's one of the nicest-looking videos I've seen on YouTube lately. Really cool, and the quality was incredible.",
    "test.c":"I needed someone who understood games and could edit with energy. The videos got exactly the vibe I wanted — the first one I posted got over 800K views, and everyone praised the edit.",
    "about.eyebrow":"REF: CM-07 · OPERATOR FILE",
    "note.title":"reminder","note.1":"tend to the cattle","note.2":"reply to client","note.3":"render episode 8","note.5":"buy mineral salt",
    "hero.warn":"DO NOT REMOVE",
    "port.count":"ARCHIVE EXPANDING · <b>DOZENS OF ITEMS</b> CATALOGUED · 3 BOXES OPEN",
    "sv.dead":"old projects, tests and versions that fell by the wayside. kept, but off the catalog.","sv.deadstamp":"Arquivado",
    "about.k1":"Responsible","about.k2":"Specialty","about.v2":"Narrative and cinematic editing","about.k3":"Base","about.v3":"São Paulo countryside, Brazil","about.k4":"Archive started","about.k5":"Status","about.v5":"Active","about.k6":"Last updated","about.v6":"Today",
    "fa.title":"Cadeirante Maromba Archive","fa.sub":"A personal archive of videos, art and production documents. Still expanding — the visitor was granted temporary authorization to explore.",
    "fa.l1":"Archive status","fa.v1":"ACTIVE","fa.l2":"Started in","fa.l3":"Open media boxes","fa.l4":"Documented","fa.v4":"YEARS OF WORK","fa.l5":"Last updated",
    "about.title":"I'm an editor. A designer.<br>But above all, I'm a <span class=\"signal-txt\">creator.</span>",
    "about.note":"quality &gt; quantity.<br>always.",
    "about.f1":"NAME: <b>Eliseu (\"Cadeirante Maromba\")</b>","about.f2":"ROLE: <b>Editor & Documentary Maker</b>","about.f3":"BASE: <b>São Paulo countryside, Brazil</b>","about.f4":"STATUS: <b>Active</b>",
    "about.p1":"My name is Eliseu, but you probably know me as Cadeirante Maromba.",
    "about.p2":"I edit videos because I like figuring out what makes a story work. A cut at the right moment, a track that comes in a few seconds late, a well-placed silence... those are the details that make someone keep watching.",
    "about.p3":"I grew up consuming a lot of content online, documentaries and games, and that's where my biggest flaw and my biggest quality come from: I'm EXTREMELY critical. I can't stand generic videos. Cuts with no intention, music thrown in carelessly, lazy thumbnails... that genuinely bothers me.",
    "about.p4":"When I take on a project, my goal isn't just to finish the edit. It's to make it feel inevitable, as if every choice had exactly one reason to exist.",
    "about.quote":"\"You create. I handle the rest.\"",
    "about.st1":"PARTNERSHIPS","about.st2":"REACHED","about.st3":"OF CARE",
    "faq.eyebrow":"REF: CM-08 · CLIENT MANUAL","faq.title":"Frequently asked questions","faq.page":"PAGE 07",
    "faq.q1":"How does pricing work?","faq.a1":"Pricing is a <strong>fixed rate per project</strong>, agreed on during the briefing. For larger projects I can also work hourly.",
    "faq.q2":"What's the turnaround time?","faq.a2":"Long videos ship in <strong>3 to 10 business days</strong> after I receive the footage. Shorts and Reels within <strong>4 business days</strong>. Motion and identity projects depend on the briefing. Art, thumbnails and sprites take 4 to 14 days after payment is confirmed.",
    "faq.q3":"How many revisions are included?","faq.a3":"<strong>3 revision rounds</strong> are included. Need more? We'll sort it out together — the goal is for you to be 100% happy.",
    "faq.q4":"How does payment work?","faq.a4":"<strong>50% upfront</strong> before I start, the remaining 50% on delivery. I accept Pix, PayPal, bank transfer and other methods arranged via WhatsApp.",
    "faq.q5":"What formats do you deliver in?","faq.a5":"<strong>MP4 (H.264/H.265)</strong> in the right ratio for each platform — 16:9 for YouTube, 9:16 for Shorts/Reels/TikTok. Need something else? Just ask.",
    "faq.q6":"How do I send you the footage?","faq.a6":"I prefer <strong>Google Drive or WeTransfer</strong>. Send the link with everything and I'll start once the deposit is confirmed.",
    "faq.q7":"What if I cancel the project?","faq.a7":"<strong>Before start:</strong> full refund. <strong>After start, before the first preview:</strong> 50% refund. <strong>After the first preview:</strong> no refund — the work has already been done.",
    "ct.eyebrow":"REF: CM-09 · NEW BRIEFING","ct.title":"Ready to add a project to OUR archive?",
    "ct.sub":"Fill in the briefing — it goes straight into the archive queue. I reply within 24h.",
    "ct.wpp":"WhatsApp","ct.mail":"E-mail","ct.avail":"Archive open for new projects",
    "ct.discordCopied":"copied! ✓",
    "ct.mascoteBubble":"Shall we make HISTORY together?",
    "deco.n1":"<b>EXTRA!</b> Local editor turns raw footage into pure gold.",
    "deco.n2":"<b>VIRAL!</b> Video blows up overnight; the edit takes the credit.",
    "deco.wanted":"<b>Wanted</b> Editor who makes history. Reward: 1 subscription.",
    "form.name":"Your name","form.channel":"Channel / Brand","form.email":"Your e-mail","form.phone":"Phone / WhatsApp",
    "form.service":"Which folder to open?","form.select":"Select a service",
    "form.o1":"Long video editing","form.o2":"Shorts / Reels editing","form.o3":"Motion Graphics / Intro","form.o4":"Thumbnail / Art","form.o5":"Full package","form.o6":"Other",
    "form.msg":"Describe the project","form.submit":"File the briefing","form.note":"No spam. No bots. Just me on the other end.",
    "footer.end":"END OF ARCHIVE","footer.made":"Made with sweat and lots of coffee.",
    "footer.secret":"you dug all the way to the end of the archive. i like you. :)"
  }
};

const DISCORD_USER = 'cadeirantemaromba';
let currentLang = localStorage.getItem('cm-lang') || 'pt';

/* ---------- RENDER DO INVENTÁRIO ---------- */
function metaCell(k,v){ return `<span>${k}: <b>${v}</b></span>`; }
function renderArchive(){
  /* Caixa A — motion (16:9 locais) */
  const gm = document.querySelector('#cat-motion .vgrid');
  gm.innerHTML = ARCHIVE.motion.map((it,i)=>{
    const no = 'CM-01' + String(i+1).padStart(2,'0');
    return `<div class="rec h16 halftone">
      <div class="rec-label"><span class="rec-no">${no}</span><span class="rec-fn">${it.label}</span><span class="st ${ST_CLASS[it.status]}">${it.status}</span></div>
      <div class="frame"><video muted loop controls playsinline class="lazy" preload="none"><source data-src="videos/${it.f}" type="video/mp4"></video></div>
      <div class="rec-meta">${metaCell('CLIENTE',it.cliente)}${metaCell('ANO',it.ano)}${metaCell('PESO',it.peso)}${metaCell('FORMATO','16:9')}</div>
    </div>`;
  }).join('');

  /* Caixa B — longos (YouTube) */
  const gl = document.querySelector('#cat-longos .vgrid');
  gl.innerHTML = ARCHIVE.longos.map((it,i)=>{
    const no = 'CM-02' + String(i+1).padStart(2,'0');
    return `<div class="rec h16 yt halftone" data-vid="${it.yt}">
      <div class="rec-label"><span class="rec-no">${no}</span><span class="rec-fn">${it.label}</span><span class="st pub">PUBLICADO</span></div>
      <div class="frame"><img loading="lazy" alt="Vídeo do YouTube"><div class="ytp"><span></span></div></div>
      <div class="rec-meta">${metaCell('PLATAFORMA','YouTube')}${metaCell('ANO',it.ano)}${metaCell('PESO','ONLINE')}${metaCell('FORMATO','16:9')}</div>
    </div>`;
  }).join('');

  /* Caixa C — shorts (9:16 locais) */
  const gs = document.querySelector('#cat-shorts .vgrid');
  gs.innerHTML = ARCHIVE.shorts.map((it,i)=>{
    const no = 'CM-04' + String(i+1).padStart(2,'0');
    return `<div class="rec v916 halftone">
      <div class="rec-label"><span class="rec-no">${no}</span><span class="rec-fn">${it.label}</span><span class="st ${ST_CLASS[it.status]}">${it.status}</span></div>
      <div class="frame"><video muted loop controls playsinline class="lazy" preload="none"><source data-src="videos/${it.f}" type="video/mp4"></video></div>
      <div class="rec-meta">${metaCell('CLIENTE',it.cliente)}${metaCell('ANO',it.ano)}${metaCell('PESO',it.peso)}${metaCell('FORMATO','9:16')}</div>
    </div>`;
  }).join('');
}

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

/* ---------- REGISTRO DE ACESSO ---------- */
function initBoot(){
  const id = String(Math.floor(1000 + Math.random()*9000));
  const d = new Date();
  const dd = String(d.getDate()).padStart(2,'0');
  const mm = String(d.getMonth()+1).padStart(2,'0');
  document.getElementById('visId').textContent = id;
  document.getElementById('visDate').textContent = `${dd}/${mm}/${d.getFullYear()}`;
  const briefNo = document.getElementById('briefNo');
  if(briefNo) briefNo.textContent = 'CM-' + id;
  setTimeout(()=>document.getElementById('boot').classList.add('hide'), 1700);
}

/* ---------- BARRA DO ARQUIVO — REF da seção atual ---------- */
function initChrome(){
  const tbSection = document.getElementById('tbSection');
  const sections = [
    {id:'inicio', label:'CM-00 · MESA'},
    {id:'trabalhos', label:'CM-01 · INVENTÁRIO'},
    {id:'servicos', label:'CM-05 · GAVETA'},
    {id:'sobre', label:'CM-07 · FICHA'},
    {id:'contato', label:'CM-09 · BRIEFING'}
  ];
  let ticking = false;
  function onScroll(){
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

/* ---------- CRT: a fita liga a TV; pause e volume ---------- */
function initCrt(){
  const tape = document.getElementById('tapeBtn');
  const power = document.getElementById('crtPower');
  const video = document.getElementById('crtVideo');
  const screen = document.getElementById('crtScreen');
  const led = document.getElementById('crtLed');
  const ctrl = document.getElementById('crtCtrl');
  const vol = document.getElementById('crtVol');
  const pauseBtn = document.getElementById('crtPause');
  const tic = document.getElementById('crtTic');
  const stat = document.getElementById('crtStatic');
  const roll = document.getElementById('crtRoll');
  let isOn = false;
  video.style.display='none';

  function updatePauseIcon(){
    pauseBtn.textContent = video.paused ? '▶' : '⏸';
    pauseBtn.setAttribute('aria-label', video.paused ? 'Tocar' : 'Pausar');
  }

  function powerOn(){
    if(isOn) return;
    isOn = true;
    video.style.display='block';
    video.load();
    video.volume = vol.value/100;
    video.muted = false;
    video.play().catch(()=>{ video.muted = true; video.play().catch(()=>{}); });
    power.classList.add('off');
    led.classList.add('on');
    ctrl.classList.add('on');
    updatePauseIcon();
  }

  function insertTape(){
    if(isOn) return;
    tape.classList.add('inserted');
    tape.disabled = true;
    const hint = document.getElementById('tapeHint');
    if(hint) hint.classList.add('hide');
    tic.classList.add('run');
    setTimeout(()=>{
      stat.classList.add('run');
      roll.classList.add('run');
    }, 820);
    setTimeout(powerOn, 1180);
  }
  tape.addEventListener('click', insertTape);
  power.addEventListener('click', insertTape); /* tela também aceita clique — acessibilidade mobile */

  function togglePlay(){
    if(!isOn) return;
    if(video.paused) video.play().catch(()=>{});
    else video.pause();
    updatePauseIcon();
  }
  pauseBtn.addEventListener('click', togglePlay);
  screen.addEventListener('click', (e)=>{ if(isOn) togglePlay(); });

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
  const tabs = document.querySelectorAll('.btab');
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
  document.querySelectorAll('.rec.yt').forEach(wrap=>{
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

/* ---------- PROVA DE PROCESSO + volume ---------- */
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

/* ---------- FAQ ---------- */
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
    span.textContent = currentLang==='pt' ? 'Protocolando...' : 'Filing...';
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

/* ---------- MASCOTE: pop suave + fala alinhada ---------- */
function initMascote(){
  const mascote = document.getElementById('contactMascote');
  const bubble = document.getElementById('mascoteBubble');
  if(!mascote || !bubble) return;
  let hideTimer = null;
  mascote.addEventListener('click', ()=>{
    mascote.classList.remove('pop');
    void mascote.offsetWidth;
    mascote.classList.add('pop');
    bubble.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(()=>bubble.classList.remove('show'), 3000);
  });
}

/* ---------- POST-IT ESCONDIDO NO RODAPÉ ---------- */
function initFootSecret(){
  const btn = document.getElementById('footSecret');
  const note = document.getElementById('secretNote');
  if(!btn || !note) return;
  btn.addEventListener('click', ()=>note.classList.toggle('show'));
}

/* ---------- REVEAL ON SCROLL ---------- */
function initReveal(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('on'); io.unobserve(entry.target); }
    });
  }, {threshold:.08});
  document.querySelectorAll('.rec,.letter,.fold,.doc-item,.ti,.sec-head').forEach(el=>{
    el.classList.add('reveal'); io.observe(el);
  });
}

/* ---------- TARJA DO ACERVO ---------- */
function buildTape(){
  const items = currentLang==='pt'
    ? ['ACERVO EM EXPANSÃO','MOTION GRAPHICS','COLOR GRADING','SOUND DESIGN','ROTEIRO','THUMBNAILS','SHORTS & REELS']
    : ['ARCHIVE EXPANDING','MOTION GRAPHICS','COLOR GRADING','SOUND DESIGN','SCRIPTING','THUMBNAILS','SHORTS & REELS'];
  const track = document.getElementById('tapeTrack');
  let html='';
  for(let r=0;r<2;r++){ items.forEach(i=>{ html += `<span>${i}</span><i class="tape-dot"></i>`; }); }
  track.innerHTML = html;
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  renderArchive();               /* o inventário nasce dos dados */
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
  initFootSecret();
  initReveal();

  console.log('%cARQUIVO CADEIRANTE MAROMBA%c\nvocê abriu o console. curioso do jeito certo.\nREF: CM-2026 · acesso registrado.', 'font-family:monospace;font-size:14px;font-weight:bold;color:#E13327', 'font-family:monospace;color:#6b6154');
});
