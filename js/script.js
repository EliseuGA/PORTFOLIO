/* =========================================================
   CADEIRANTE MAROMBA - THE LOST ARCHIVE - script.js
   "Nada é interface. Tudo é objeto."
========================================================= */

/* aplica preferência de movimento imediatamente, evitando "piscar" animação */
if(localStorage.getItem('cm-motion') === 'off'){
  document.documentElement.classList.add('no-motion');
}

/* =========================================================
   O INVENTÁRIO - cada vídeo é um item catalogado do acervo.
   Para adicionar um projeto: copie uma linha e edite os campos.
   f = arquivo em videos/ · yt = ID do YouTube
   status: EXPORTADO | APROVADO | ARQUIVADO | PUBLICADO | ENTREGUE
   (os metadados abaixo são plausíveis - confira e corrija à vontade)
========================================================= */
const ARCHIVE = {
  motion: [
    {f:'introIcebergCaioxpo_8mb.mp4',            label:'ICEBERG_INTRO.mov',   cliente:'caioxapo',       ano:'2025', peso:'7.4 GB', status:'EXPORTADO'},
    {f:'editVonGusto.mp4',                        label:'EDIT_VONGUSTO.mov',   cliente:'Von Gusto',      ano:'2025', peso:'3.2 GB', status:'APROVADO'},
    {f:'badboysRDR2_8mb.mp4',                     label:'BADBOYS_RDR2.mov',    cliente:'Acervo pessoal', ano:'2024', peso:'5.8 GB', status:'ARQUIVADO'},
    {f:'introFnafDoom.mp4',                       label:'FNAF_DOOM.mov',       cliente:'caioxapo',       ano:'2025', peso:'4.1 GB', status:'EXPORTADO'},
    {f:'cancerDeBOLA_8mb.mp4',                    label:'PROJETO_CDB.mov',     cliente:'-',              ano:'2025', peso:'6.6 GB', status:'EXPORTADO'},
    {f:'introPoppyPlaytime_8mb.mp4',              label:'POPPY_INTRO.mov',     cliente:'caioxapo',       ano:'2025', peso:'5.0 GB', status:'APROVADO'},
    {f:'editDarthVader_1920x1080p_8mb.mp4',       label:'VADER_EDIT.mov',      cliente:'Acervo pessoal', ano:'2024', peso:'2.9 GB', status:'ARQUIVADO'},
    {f:'VideoLisboa FINALIZADO_8mb.mp4',          label:'LISBOA_FINAL.mov',    cliente:'Particular',     ano:'2024', peso:'9.3 GB', status:'EXPORTADO'},
    {f:'introRVTHEREYET_8mb.mp4',                 label:'RV_THERE_YET.mov',    cliente:'RV There Yet',   ano:'2026', peso:'7.7 GB', status:'EXPORTADO'}
  ],
  /* cat: 'explicativo' (documentário/análise/iceberg, estilo Amin Wake e caioxapo)
           | 'gameplay' (você jogando) - usado pelas sub-abas da Caixa B */
  longos: [
    {yt:'nnONog3UGMk', label:'DOC_ARQUIVO_02.mp4', ano:'2025', cat:'explicativo'},
    {yt:'iGDj6OzDSZc', label:'DOC_ARQUIVO_07.mp4', ano:'2026', cat:'explicativo'},
    {yt:'019QUG1fmro', label:'DOC_ARQUIVO_08.mp4', ano:'2026', cat:'explicativo'},
    {yt:'1ixhxSVZtIo', label:'DOC_ARQUIVO_09.mp4', ano:'2026', cat:'explicativo'},
    {yt:'wfXfG8ULGDY', label:'DOC_ARQUIVO_01.mp4', ano:'2025', cat:'gameplay'},
    {yt:'2TCUJv1k6Fc', label:'DOC_ARQUIVO_03.mp4', ano:'2025', cat:'gameplay'},
    {yt:'jed83po7YzY', label:'DOC_ARQUIVO_04.mp4', ano:'2026', cat:'gameplay'},
    {yt:'mYKNXIumILY', label:'DOC_ARQUIVO_05.mp4', ano:'2026', cat:'gameplay'},
    {yt:'C0plDAADgWc', label:'DOC_ARQUIVO_06.mp4', ano:'2026', cat:'gameplay'},
    {yt:'HAG4VlghNrE', label:'DOC_ARQUIVO_10.mp4', ano:'2026', cat:'gameplay'},
    {yt:'hrvagCX452I', label:'DOC_ARQUIVO_11.mp4', ano:'2026', cat:'gameplay'},
    {yt:'jAbU6qjZBKM', label:'DOC_ARQUIVO_12.mp4', ano:'2026', cat:'gameplay'}
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

/* =========================================================
   ESTUDO DE CASO - AMIN WAKE
   Cinco trechos da abertura do documentário + reações do público.
   poster = frame extraído de cada clipe, usado no card do carrossel
   e como poster do <video> (evita quadro cinza/preto na troca de clipe).
========================================================= */
const CASE_STUDY = [
  {f:'Iceberg_8mb.mp4',          poster:'img/posters/Iceberg_8mb_poster.jpg',         tab:'COLD_OPEN.mov',    desc:'gancho de abertura do vídeo',   time:'0:25'},
  {f:'IntroAMINWAKE_8mb.mp4',    poster:'img/posters/IntroAMINWAKE_8mb_poster.jpg',   tab:'IDENT_CANAL.mov',  desc:'abertura assinatura do canal',  time:'0:29'},
  {f:'IntroCHINA_8mb.mp4',       poster:'img/posters/IntroCHINA_8mb_poster.jpg',      tab:'ABERTURA_TEMA.mov',desc:'introdução do tema central',    time:'0:30'},
  {f:'IntroTOPICO1_8mb.mp4',     poster:'img/posters/IntroTOPICO1_8mb_poster.jpg',    tab:'TOPICO_01.mov',    desc:'abertura do primeiro capítulo', time:'1:14'},
  {f:'JoyceChu_Climax_8mb.mp4',  poster:'img/posters/JoyceChu_Climax_8mb_poster.jpg', tab:'CLIMAX.mov',       desc:'clímax do primeiro ato',        time:'2:12'}
];

const REVIEWS = {
  pt: [
    {h:'@er1czn',          t:'que edição é essa meus amigos, sensacional!'},
    {h:'@miyazune',        t:'Eu tô tão feliz de ver esse vídeo antecipadamente, principalmente porque ele é o mais bem editado de todo o canal 🐯'},
    {h:'@p1xelzon',        t:'QUE EDIÇÃO É ESSA? AMEI, o cara capricha muito na edição'},
    {h:'@miyamotlethmor',  t:'Brabíssimo, adorei a edição!'},
    {h:'@Matheuxx-q5g',    t:'mano... eu pensei que eu tava assistindo a um filme de enorme produção por causa dessa introdução, se superou demais, muito fera a intro kkkkk'},
    {h:'@shinokagess',     t:'Só de ver os primeiros segundos já fiquei impressionado com a qualidade dessa edição, parabéns ao Amin e a todos envolvidos 🙏'}
  ],
  en: [
    {h:'@er1czn',          t:'what editing is this, incredible!'},
    {h:'@miyazune',        t:"I'm so happy to see this video early, especially because it's the best-edited one on the whole channel 🐯"},
    {h:'@p1xelzon',        t:'WHAT EDITING IS THIS? LOVED IT, this guy puts so much care into the editing'},
    {h:'@miyamotlethmor',  t:'Incredible, loved the editing!'},
    {h:'@Matheuxx-q5g',    t:"dude... I thought I was watching a huge production movie because of that intro, it went above and beyond, such a great intro haha"},
    {h:'@shinokagess',     t:'Just from the first seconds I was already impressed by the editing quality, congrats to Amin and everyone involved 🙏'}
  ]
};

const REVIEW_FEATURED = {
  pt:'Se você busca trabalhar com alguém profissional, esse é o cara! De longe a melhor experiência que tive com um editor. O trabalho superou demais as minhas expectativas 🔥',
  en:"If you're looking to work with a professional, this is the guy! By far the best experience I've had with an editor. The work went way beyond my expectations 🔥"
};

/* =========================================================
   CARROSSEL DE DEPOIMENTOS - CORRESPONDÊNCIA
   3 cartas visíveis por vez, girando sozinho; ao navegar manualmente
   (setas ou bolinhas), pausa nesse depoimento por um tempo e depois
   volta a girar sozinho de onde parou.
========================================================= */
const TESTIMONIALS = [
  {photo:'img/caioxapoProfile.png',   name:'caioxapo',  handle:'@caioxapo',  subjectKey:'test.a.s', bodyKey:'test.a', foot:'12 mil views no 2º vídeo',                        year:'2025'},
  {photo:'img/rapositoProfile.jpg',   name:'Raposito',  handle:'@Raposito',  subjectKey:'test.b.s', bodyKey:'test.b', foot:'235 mil inscritos · jul/2026',                     year:'2025'},
  {photo:'img/aminAvatar.jpg',        name:'Amin Wake', handle:'@aminwake',  subjectKey:'test.d.s', bodyKey:'test.d', foot:'documentário completo · caso de estudo acima ↑',  year:'2026'},
  {photo:'img/vonGustoProfile.jpeg',  name:'Von Gusto', handle:'@v0ngusto',  subjectKey:'test.c.s', bodyKey:'test.c', foot:'851 mil views · 1º vídeo do canal',                year:'2025'}
];

/* =========================================================
   TERMOS DE USO E POLÍTICA DE PRIVACIDADE
   Conteúdo simples e direto, sem textão. Aberto num modal a partir
   dos links do rodapé e da checkbox de consentimento do briefing.
========================================================= */
const LEGAL = {
  privacy: {
    pt: `
      <h2>Política de Privacidade</h2>
      <span class="legal-updated">Última atualização: 2026</span>
      <p>Este site é o portfólio pessoal de Eliseu (Cadeirante Maromba), editor de vídeo autônomo. Esta página explica, de forma direta, quais dados são coletados por aqui e para que servem.</p>
      <h3>Quais dados eu coleto</h3>
      <p>Só o que você mesmo digita no formulário de briefing: nome, canal ou marca (opcional), e-mail, telefone/WhatsApp (opcional) e a descrição do projeto.</p>
      <h3>Para que uso esses dados</h3>
      <p>Exclusivamente para responder ao seu pedido de orçamento e manter contato sobre o projeto. Não uso para outra finalidade, não vendo e não compartilho com terceiros para fins de marketing.</p>
      <h3>Como esses dados são processados</h3>
      <p>O formulário é enviado através do <strong>Formspree</strong> (formspree.io), um serviço terceirizado de processamento de formulários, e chega direto no meu e-mail. Não mantenho um banco de dados próprio com essas informações.</p>
      <h3>Armazenamento no navegador</h3>
      <p>O site guarda algumas preferências no armazenamento local do seu navegador (localStorage), como idioma escolhido e se as animações estão ativadas. Isso fica só no seu aparelho, não é enviado pra mim, e não é usado para rastreamento. Este site não usa cookies de rastreamento nem ferramentas de analytics de terceiros.</p>
      <h3>Seus direitos</h3>
      <p>Conforme a LGPD (Lei Geral de Proteção de Dados), você pode pedir a qualquer momento para eu confirmar quais dados tenho sobre você, corrigi-los ou apagá-los. É só chamar pelo e-mail ou WhatsApp que aparecem no rodapé do site.</p>
      <h3>Por quanto tempo guardo os dados</h3>
      <p>Pelo tempo necessário para conduzir o projeto conversado, ou até você pedir a remoção.</p>
      <h3>Mudanças nesta política</h3>
      <p>Esta política pode ser atualizada de vez em quando. A versão que vale é sempre a publicada aqui.</p>
    `,
    en: `
      <h2>Privacy Policy</h2>
      <span class="legal-updated">Last updated: 2026</span>
      <p>This site is the personal portfolio of Eliseu (Cadeirante Maromba), an independent video editor. This page explains, plainly, what data is collected here and why.</p>
      <h3>What data I collect</h3>
      <p>Only what you type into the briefing form yourself: name, channel or brand (optional), email, phone/WhatsApp (optional), and the project description.</p>
      <h3>What I use it for</h3>
      <p>Exclusively to respond to your quote request and stay in touch about the project. I do not use it for any other purpose, do not sell it, and do not share it with third parties for marketing.</p>
      <h3>How this data is processed</h3>
      <p>The form is sent through <strong>Formspree</strong> (formspree.io), a third-party form processing service, and lands directly in my email. I do not keep my own database of this information.</p>
      <h3>Browser storage</h3>
      <p>The site stores a few preferences in your browser's local storage (localStorage), such as chosen language and whether animations are enabled. That stays on your device, is never sent to me, and is not used for tracking. This site does not use tracking cookies or third-party analytics tools.</p>
      <h3>Your rights</h3>
      <p>You can ask at any time for me to confirm what data I hold about you, correct it, or delete it. Just reach out through the email or WhatsApp listed in the footer.</p>
      <h3>How long I keep it</h3>
      <p>For as long as needed to run the project we discussed, or until you ask me to remove it.</p>
      <h3>Changes to this policy</h3>
      <p>This policy may be updated occasionally. The version that applies is always the one published here.</p>
    `
  },
  terms: {
    pt: `
      <h2>Termos de Uso</h2>
      <span class="legal-updated">Última atualização: 2026</span>
      <p>Este site é o portfólio pessoal de Eliseu (Cadeirante Maromba), com o objetivo de apresentar trabalhos de edição de vídeo e motion design, e receber pedidos de orçamento.</p>
      <h3>Propriedade dos conteúdos</h3>
      <p>Os vídeos, artes e textos exibidos aqui pertencem a Eliseu ou aos respectivos clientes que autorizaram a exibição como parte do portfólio. Não é permitido copiar, redistribuir ou reutilizar esse material sem autorização prévia.</p>
      <h3>Sobre o formulário de briefing</h3>
      <p>Preencher o formulário não gera compromisso automático de contratação nem de prestação de serviço. É apenas o primeiro contato. Prazo, valor e forma de pagamento de cada projeto são combinados diretamente por e-mail ou WhatsApp, conforme descrito na seção de perguntas frequentes.</p>
      <h3>Uso do site</h3>
      <p>O conteúdo é fornecido como está. Partes do site podem ser atualizadas, corrigidas ou removidas a qualquer momento, sem aviso prévio.</p>
      <h3>Isenção de responsabilidade</h3>
      <p>Eliseu não se responsabiliza por decisões tomadas com base apenas nas informações deste site, sem conversa direta antes de fechar um projeto.</p>
      <h3>Legislação aplicável</h3>
      <p>Estes termos são regidos pelas leis brasileiras.</p>
      <h3>Dúvidas</h3>
      <p>Qualquer dúvida sobre estes termos, é só chamar pelos contatos do rodapé.</p>
    `,
    en: `
      <h2>Terms of Use</h2>
      <span class="legal-updated">Last updated: 2026</span>
      <p>This site is the personal portfolio of Eliseu (Cadeirante Maromba), showcasing video editing and motion design work and collecting quote requests.</p>
      <h3>Content ownership</h3>
      <p>The videos, art, and text shown here belong to Eliseu or to the respective clients who authorized their display as part of the portfolio. Copying, redistributing, or reusing this material without prior authorization is not allowed.</p>
      <h3>About the briefing form</h3>
      <p>Filling in the form does not automatically create a commitment to hire or to deliver a service. It is only the first point of contact. Timeline, price, and payment terms for each project are agreed directly by email or WhatsApp, as described in the FAQ section.</p>
      <h3>Use of the site</h3>
      <p>Content is provided as is. Parts of the site may be updated, corrected, or removed at any time, without prior notice.</p>
      <h3>Disclaimer</h3>
      <p>Eliseu is not responsible for decisions made based solely on the information on this site, without a direct conversation before starting a project.</p>
      <h3>Governing law</h3>
      <p>These terms are governed by Brazilian law.</p>
      <h3>Questions</h3>
      <p>Any questions about these terms, just reach out through the contacts in the footer.</p>
    `
  }
};

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
    "port.motion":"Caixa A · Motion","port.long":"Caixa B · Longos","port.shorts":"Caixa C · Shorts",
    "port.sub.explicativo":"Explicativo","port.sub.gameplay":"Gameplay",
    "port.featured":"PEÇA CENTRAL DO ACERVO","port.featuredhint":"produção própria · clique para assistir","port.mtipo":"TIPO","port.mtipoval":"Documentário autoral","port.mano":"ANO","port.mdur":"DURAÇÃO","port.mrole":"FUNÇÃO","port.mroleval":"Direção e edição",
    "thumb.eyebrow":"REF: CM-02 · IMPRESSÕES E ARTES","thumb.title":"Thumbnails & Artes","thumb.sub":"Cada arte é pensada para converter o scroll em clique.",
    "cs.eyebrow":"REF: CM-CS · ESTUDO DE CASO",
    "cs.title":"Do roteiro à tela",
    "cs.sub":"Cinco trechos da abertura que constroem o clima antes do primeiro corte duro. Documentário completo para o canal de Amin Wake.",
    "cs.meta":"CLIENTE: <b>Amin Wake</b> · ENTREGA: <b>2026</b> · FORMATO: <b>16:9</b>",
    "cs.watchfull":"Assistir completo →",
    "cs.reveyebrow":"REF: CM-CS-R · REAÇÕES DO PÚBLICO",
    "cs.err":"não foi possível carregar este clipe. Confira o arquivo em /videos",
    "cs.channelname":"Canal: Amin Wake",
    "cs.channelstats":"236 mil inscritos · 16.901.375 visualizações",
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
    "sv.foot1":"GAVETA 02 · 4 PASTAS CATALOGADAS","sv.foot2":"ÚLTIMA ATUALIZAÇÃO: 2026",
    "sv.a.t":"Vídeos Longos","sv.a.d":"Para quem precisa que o público fique até o final: vlogs, podcasts, gameplays, documentários.","sv.a.props":"TIPO: Projeto Premiere · PRAZO: até 10 dias úteis",
    "sv.a.l1":"Edição completa com ritmo e narrativa","sv.a.l2":"Trilha sonora e efeitos sonoros","sv.a.l3":"Color grading e tratamento de imagem","sv.a.l4":"Textos e legendas animadas",
    "sv.b.t":"Pacote Completo","sv.b.d":"A solução total. Do vídeo longo ao short, passando pelo motion e pela arte, tudo com a mesma identidade.","sv.b.props":"TIPO: Pacote comprimido · CONTÉM: 4 itens",
    "sv.b.l1":"Edição de vídeo longo","sv.b.l2":"Corte e edição de Shorts/Reels","sv.b.l3":"Motion graphics e intros","sv.b.l4":"Thumbnail personalizada",
    "sv.c.t":"Shorts & Reels","sv.c.d":"Conteúdo vertical que prende em menos de 3 segundos. Feito para viralizar no YouTube Shorts, Instagram e TikTok.","sv.c.props":"TIPO: Projeto Premiere · PRAZO: até 4 dias úteis",
    "sv.c.l1":"Edição dinâmica e impactante","sv.c.l2":"Cortes sincronizados com a música","sv.c.l3":"Legendas estilizadas","sv.c.l4":"Formato 9:16 otimizado",
    "sv.d.t":"Motion + Thumb","sv.d.d":"A identidade visual do seu canal. Intros, encerramento, overlays e thumbnails que fazem o algoritmo parar de rolar.","sv.d.props":"TIPO: After Effects + PSD · ENTREGA: editáveis",
    "sv.d.l1":"Intro animada sob medida","sv.d.l2":"Outro de encerramento","sv.d.l3":"Lower thirds e overlays","sv.d.l4":"Thumbnail pensada para converter",
    "test.eyebrow":"REF: CM-06 · CORRESPONDÊNCIA RECEBIDA","test.title":"O que dizem sobre mim","test.stamp":"Arquivada",
    "test.a.s":"edição + sprites","test.b.s":"edição do iceberg","test.c.s":"vídeos do canal",
    "test.a":"Quando vi o nível da edição, não pensei duas vezes antes de entrar em contato. Ele fez uma edição elogiada por muitos, e ainda desenhou os sprites do meu personagem e a thumbnail. Grande trabalho!",
    "test.b":"Pô, a edição tá muito boa, mano. Não é um assunto que eu curto, não sou muito fã de Analog Horror, mas o vídeo ficou mó bom. A qualidade tá muito boa. Parabéns!",
    "test.c":"Precisava de alguém que entendesse de jogos e soubesse editar com energia. O primeiro vídeo que postei no canal passou de 851 mil views, e a edição foi muito elogiada.",
    "test.d.s":"documentário completo",
    "test.d":"Se você busca trabalhar com alguém profissional, esse é o cara! De longe a melhor experiência que tive com um editor. O trabalho superou demais as minhas expectativas 🔥",
    "about.eyebrow":"REF: CM-07 · FICHA DO ACERVO",
    "note.title":"lembrete","note.1":"tratar do gado","note.2":"responder cliente","note.3":"renderizar episódio 8","note.5":"comprar sal mineral",
    "boot.warn":"⚠ AVISO: este acervo contém edições com efeitos visuais intensos, flashes e movimento. Se você tem sensibilidade a isso, desative as animações no botão <b>◐</b> no topo da tela.",
    "a11y.motion":"Animações e efeitos","a11y.note":"Desativa fades, tremidas e movimento em todo o site.","a11y.warn":"Este acervo contém edições com <b>flashes, movimento e efeitos visuais intensos</b>. Se você tem sensibilidade a isso ou epilepsia fotossensível, desative as animações abaixo.",
    "hero.warn":"NÃO REMOVER",
    "port.count":"ACERVO EM EXPANSÃO · <b>DEZENAS DE ITENS</b> CATALOGADOS · 3 CAIXAS ABERTAS",
    "sv.dead":"projetos antigos, testes e versões que ficaram pelo caminho. guardados, mas fora de catálogo.","sv.deadstamp":"Arquivado",
    "about.k1":"Responsável","about.k2":"Especialidade","about.v2":"Narrativas e edição cinematográfica","about.k3":"Base","about.v3":"Interior de SP, Brasil","about.k4":"Arquivo iniciado","about.k5":"Estado","about.v5":"Em atividade","about.k6":"Última atualização","about.v6":"Hoje",
    "fa.title":"Arquivo Cadeirante Maromba","fa.sub":"Um acervo pessoal de vídeos, artes e documentos de produção. Ainda em expansão. O visitante recebeu autorização temporária para explorar.",
    "fa.l1":"Estado do acervo","fa.v1":"EM ATIVIDADE","fa.l2":"Iniciado em","fa.l3":"Caixas de mídia abertas","fa.l4":"Documentado","fa.v4":"ANOS DE TRABALHO","fa.l5":"Última atualização",
    "about.title":"Sou editor. Sou designer.<br>Mas antes de tudo, sou <span class=\"signal-txt\">criador.</span>",
    "about.note":"qualidade &gt; quantidade.<br>sempre.",
    "about.f1":"NOME: <b>Eliseu (\"Cadeirante Maromba\")</b>","about.f2":"FUNÇÃO: <b>Editor & Documentarista</b>","about.f3":"BASE: <b>Interior de SP, Brasil</b>","about.f4":"STATUS: <b>Em atividade</b>",
    "about.p1":"Meu nome é Eliseu, mas provavelmente você me conhece como Cadeirante Maromba.",
    "about.p2":"Eu edito vídeos porque gosto de descobrir o que faz uma história funcionar. Um corte no momento certo, uma trilha que entra alguns segundos depois, um silêncio bem colocado… são esses detalhes que fazem alguém continuar assistindo.",
    "about.p3":"Cresci consumindo muito conteúdo na internet, documentários e jogos, e é daí que vem meu maior defeito e minha maior qualidade: eu sou EXTREMAMENTE crítico. Não aguento vídeo genérico. Corte sem intenção, trilha jogada de qualquer jeito, thumbnail preguiçosa… isso realmente me incomoda.",
    "about.p4":"Quando pego um projeto, meu objetivo não é simplesmente terminar a edição. É fazer com que ela pareça inevitável, como se cada escolha tivesse exatamente um motivo para existir.",
    "about.quote":"“Você cria. Eu cuido do resto.”",
    "about.st1":"PARCERIAS","about.st2":"ALCANÇADOS","about.st3":"DE CUIDADO",
    "faq.eyebrow":"REF: CM-08 · MANUAL DO CLIENTE","faq.title":"Perguntas frequentes","faq.page":"PÁGINA 07",
    "faq.q1":"Como funciona a cobrança?","faq.a1":"A cobrança é feita por <strong>valor fixo por projeto</strong>, combinado no briefing. Para projetos maiores, também trabalho por hora editada.",
    "faq.q2":"Qual é o prazo de entrega?","faq.a2":"Vídeos longos saem em até <strong>3 a 10 dias úteis</strong> após o recebimento do material. Shorts e Reels em até <strong>4 dias úteis</strong>. Motion e identidade combinamos no briefing. Artes, thumbnails e sprites de 4 a 14 dias após a confirmação do pagamento.",
    "faq.q3":"Quantas revisões estão incluídas?","faq.a3":"São <strong>3 rodadas de revisão</strong> incluídas. Se precisar de mais, resolvemos juntos. O objetivo é você ficar 100% satisfeito.",
    "faq.q4":"Como funciona o pagamento?","faq.a4":"<strong>50% de entrada</strong> antes de começar, os outros 50% na entrega. Aceito Pix, PayPal, transferência e outros meios combinados pelo WhatsApp.",
    "faq.q5":"Em quais formatos você entrega?","faq.a5":"<strong>MP4 (H.264/H.265)</strong> na proporção certa pra cada plataforma: 16:9 no YouTube, 9:16 no Shorts/Reels/TikTok. Formato diferente? É só pedir.",
    "faq.q6":"Como envio o material?","faq.a6":"Prefiro receber via <strong>Google Drive ou WeTransfer</strong>. Manda o link com tudo (gravações, áudios, referências) e eu começo assim que a entrada for confirmada.",
    "faq.q7":"E se eu cancelar o projeto?","faq.a7":"<strong>Antes do início:</strong> reembolso integral. <strong>Depois do início, antes da 1ª prévia:</strong> 50% de reembolso. <strong>Depois da 1ª prévia:</strong> sem reembolso. O trabalho já foi feito.",
    "ct.eyebrow":"REF: CM-09 · NOVO BRIEFING","ct.title":"Pronto para adicionar um projeto ao NOSSO arquivo?",
    "ct.sub":"Preencha o briefing ao lado. Ele entra direto na fila do acervo, respondo em até 24h.",
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
    "form.error":"Não deu pra enviar agora. Tenta de novo em instantes, ou manda direto pelo WhatsApp.",
    "bs.stamp":"Recebido","bs.protolabel":"PROTOCOLO","bs.greet":"Valeu,",
    "bs.bodytpl":"Seu pedido de <b>{servico}</b> acabou de entrar na fila do arquivo.",
    "bs.note":"Respondo pelo e-mail ou WhatsApp que você deixou, em até 24h. Se for urgente, me chama direto:",
    "bs.wpp":"Chamar no WhatsApp →","bs.again":"enviar outro pedido",
    "footer.end":"FIM DO ARQUIVO","footer.made":"Feito com suor e muito café.",
    "footer.privacy":"Política de Privacidade","footer.terms":"Termos de Uso",
    "form.consent":"Li e aceito os <a href=\"#\" data-legal=\"terms\">Termos de Uso</a> e a <a href=\"#\" data-legal=\"privacy\">Política de Privacidade</a>.",
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
    "port.motion":"Box A · Motion","port.long":"Box B · Long-form","port.shorts":"Box C · Shorts",
    "port.sub.explicativo":"Explainer","port.sub.gameplay":"Gameplay",
    "port.featured":"CENTERPIECE OF THE ARCHIVE","port.featuredhint":"own production · click to watch","port.mtipo":"TYPE","port.mtipoval":"Authorial documentary","port.mano":"YEAR","port.mdur":"LENGTH","port.mrole":"ROLE","port.mroleval":"Direction and editing",
    "thumb.eyebrow":"REF: CM-02 · PRINTS & ART","thumb.title":"Thumbnails & Art","thumb.sub":"Every thumbnail is built to turn a scroll into a click.",
    "cs.eyebrow":"REF: CM-CS · CASE STUDY",
    "cs.title":"From script to screen",
    "cs.sub":"Five moments from the opening that build the mood before the first hard cut. A full documentary made for Amin Wake's channel.",
    "cs.meta":"CLIENT: <b>Amin Wake</b> · DELIVERY: <b>2026</b> · FORMAT: <b>16:9</b>",
    "cs.watchfull":"Watch the full video →",
    "cs.reveyebrow":"REF: CM-CS-R · AUDIENCE REACTIONS",
    "cs.err":"couldn't load this clip. Check the file in /videos",
    "cs.channelname":"Channel: Amin Wake",
    "cs.channelstats":"236K subscribers · 16,901,375 views",
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
    "sv.foot1":"DRAWER 02 · 4 FOLDERS CATALOGUED","sv.foot2":"LAST UPDATE: 2026",
    "sv.a.t":"Long Videos","sv.a.d":"For creators who need their audience to stay until the end: vlogs, podcasts, gameplays, documentaries.","sv.a.props":"TYPE: Premiere project · TURNAROUND: up to 10 business days",
    "sv.a.l1":"Full edit with pacing and narrative","sv.a.l2":"Soundtrack and sound effects","sv.a.l3":"Color grading and image treatment","sv.a.l4":"Animated text and subtitles",
    "sv.b.t":"Full Package","sv.b.d":"The all-in-one solution. Long video, shorts, motion and art, all with the same identity.","sv.b.props":"TYPE: Compressed package · CONTAINS: 4 items",
    "sv.b.l1":"Long video editing","sv.b.l2":"Shorts/Reels cutting and editing","sv.b.l3":"Motion graphics and intros","sv.b.l4":"Custom thumbnail",
    "sv.c.t":"Shorts & Reels","sv.c.d":"Vertical content that hooks in under 3 seconds. Made to go viral on YouTube Shorts, Instagram and TikTok.","sv.c.props":"TYPE: Premiere project · TURNAROUND: up to 4 business days",
    "sv.c.l1":"Dynamic, impactful editing","sv.c.l2":"Cuts synced to the music","sv.c.l3":"Styled subtitles","sv.c.l4":"Optimized 9:16 format",
    "sv.d.t":"Motion + Thumb","sv.d.d":"Your channel's visual identity. Intros, outros, overlays and thumbnails that make the algorithm stop scrolling.","sv.d.props":"TYPE: After Effects + PSD · DELIVERY: editable files",
    "sv.d.l1":"Custom animated intro","sv.d.l2":"End screen / outro","sv.d.l3":"Lower thirds and overlays","sv.d.l4":"Click-optimized thumbnail",
    "test.eyebrow":"REF: CM-06 · RECEIVED CORRESPONDENCE","test.title":"What they say about me","test.stamp":"Arquivada",
    "test.a.s":"editing + sprites","test.b.s":"iceberg editing","test.c.s":"channel videos",
    "test.a":"When I saw the editing quality, I didn't think twice before reaching out. The edit got praised by a lot of people, and he also designed my character sprites and thumbnail. Great work!",
    "test.b":"Man, the editing is really good. It's not a topic I'm into, I'm not much of an Analog Horror fan, but the video turned out great. The quality is really good. Congrats!",
    "test.c":"I needed someone who understood games and could edit with energy. The first video I posted on the channel passed 851K views, and the edit was highly praised.",
    "test.d.s":"full documentary",
    "test.d":"If you're looking to work with a professional, this is the guy! By far the best experience I've had with an editor. The work went way beyond my expectations 🔥",
    "about.eyebrow":"REF: CM-07 · OPERATOR FILE",
    "note.title":"reminder","note.1":"tend to the cattle","note.2":"reply to client","note.3":"render episode 8","note.5":"buy mineral salt",
    "boot.warn":"⚠ WARNING: this archive contains edits with intense visual effects, flashes and motion. If you're sensitive to these, disable animations using the <b>◐</b> button at the top of the screen.",
    "a11y.motion":"Animations and effects","a11y.note":"Disables fades, jitter and motion across the whole site.","a11y.warn":"This archive contains edits with <b>flashes, motion and intense visual effects</b>. If you're sensitive to these or have photosensitive epilepsy, turn off animations below.",
    "hero.warn":"DO NOT REMOVE",
    "port.count":"ARCHIVE EXPANDING · <b>DOZENS OF ITEMS</b> CATALOGUED · 3 BOXES OPEN",
    "sv.dead":"old projects, tests and versions that fell by the wayside. kept, but off the catalog.","sv.deadstamp":"Arquivado",
    "about.k1":"Responsible","about.k2":"Specialty","about.v2":"Narrative and cinematic editing","about.k3":"Base","about.v3":"São Paulo countryside, Brazil","about.k4":"Archive started","about.k5":"Status","about.v5":"Active","about.k6":"Last updated","about.v6":"Today",
    "fa.title":"Cadeirante Maromba Archive","fa.sub":"A personal archive of videos, art and production documents. Still expanding. The visitor was granted temporary authorization to explore.",
    "fa.l1":"Archive status","fa.v1":"ACTIVE","fa.l2":"Started in","fa.l3":"Open media boxes","fa.l4":"Documented","fa.v4":"YEARS OF WORK","fa.l5":"Last updated",
    "about.title":"I'm an editor. A designer.<br>But above all, I'm a <span class=\"signal-txt\">creator.</span>",
    "about.note":"quality &gt; quantity.<br>always.",
    "about.f1":"NAME: <b>Eliseu (\"Cadeirante Maromba\")</b>","about.f2":"ROLE: <b>Editor & Documentary Maker</b>","about.f3":"BASE: <b>São Paulo countryside, Brazil</b>","about.f4":"STATUS: <b>Active</b>",
    "about.p1":"My name is Eliseu, but you probably know me as Cadeirante Maromba.",
    "about.p2":"I edit videos because I like figuring out what makes a story work. A cut at the right moment, a track that comes in a few seconds late, a well-placed silence… those are the details that make someone keep watching.",
    "about.p3":"I grew up consuming a lot of content online, documentaries and games, and that's where my biggest flaw and my biggest quality come from: I'm EXTREMELY critical. I can't stand generic videos. Cuts with no intention, music thrown in carelessly, lazy thumbnails… that genuinely bothers me.",
    "about.p4":"When I take on a project, my goal isn't just to finish the edit. It's to make it feel inevitable, as if every choice had exactly one reason to exist.",
    "about.quote":"“You create. I handle the rest.”",
    "about.st1":"PARTNERSHIPS","about.st2":"REACHED","about.st3":"OF CARE",
    "faq.eyebrow":"REF: CM-08 · CLIENT MANUAL","faq.title":"Frequently asked questions","faq.page":"PAGE 07",
    "faq.q1":"How does pricing work?","faq.a1":"Pricing is a <strong>fixed rate per project</strong>, agreed on during the briefing. For larger projects I can also work hourly.",
    "faq.q2":"What's the turnaround time?","faq.a2":"Long videos ship in <strong>3 to 10 business days</strong> after I receive the footage. Shorts and Reels within <strong>4 business days</strong>. Motion and identity projects depend on the briefing. Art, thumbnails and sprites take 4 to 14 days after payment is confirmed.",
    "faq.q3":"How many revisions are included?","faq.a3":"<strong>3 revision rounds</strong> are included. Need more? We'll sort it out together. The goal is for you to be 100% happy.",
    "faq.q4":"How does payment work?","faq.a4":"<strong>50% upfront</strong> before I start, the remaining 50% on delivery. I accept Pix, PayPal, bank transfer and other methods arranged via WhatsApp.",
    "faq.q5":"What formats do you deliver in?","faq.a5":"<strong>MP4 (H.264/H.265)</strong> in the right ratio for each platform: 16:9 for YouTube, 9:16 for Shorts/Reels/TikTok. Need something else? Just ask.",
    "faq.q6":"How do I send you the footage?","faq.a6":"I prefer <strong>Google Drive or WeTransfer</strong>. Send the link with everything and I'll start once the deposit is confirmed.",
    "faq.q7":"What if I cancel the project?","faq.a7":"<strong>Before start:</strong> full refund. <strong>After start, before the first preview:</strong> 50% refund. <strong>After the first preview:</strong> no refund. The work has already been done.",
    "ct.eyebrow":"REF: CM-09 · NEW BRIEFING","ct.title":"Ready to add a project to OUR archive?",
    "ct.sub":"Fill in the briefing. It goes straight into the archive queue, I reply within 24h.",
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
    "form.error":"Couldn't send it right now. Try again in a moment, or message me directly on WhatsApp.",
    "bs.stamp":"Received","bs.protolabel":"PROTOCOL","bs.greet":"Thanks,",
    "bs.bodytpl":"Your <b>{servico}</b> request just entered the archive queue.",
    "bs.note":"I'll reply by the e-mail or WhatsApp you left, within 24h. If it's urgent, message me directly:",
    "bs.wpp":"Message on WhatsApp →","bs.again":"send another request",
    "footer.end":"END OF ARCHIVE","footer.made":"Made with sweat and lots of coffee.",
    "footer.privacy":"Privacy Policy","footer.terms":"Terms of Use",
    "form.consent":"I have read and accept the <a href=\"#\" data-legal=\"terms\">Terms of Use</a> and the <a href=\"#\" data-legal=\"privacy\">Privacy Policy</a>.",
    "footer.secret":"you dug all the way to the end of the archive. i like you. :)"
  }
};

const DISCORD_USER = 'cadeirantemaromba';
let currentLang = localStorage.getItem('cm-lang') || 'pt';

/* ---------- RENDER DO INVENTÁRIO ---------- */
function metaCell(k,v){ return `<span>${k}: <b>${v}</b></span>`; }
function renderArchive(){
  /* Caixa A - motion (16:9 locais) */
  const gm = document.querySelector('#cat-motion .vgrid');
  const featured = `
    <div class="rec-featured" id="recFeatured">
      <div class="rf-tag"><span class="rf-band">CM-DESTAQUE</span><span class="rf-fn">INTRO_DOCUMENTARIO_ANJ.mov</span><span class="rf-seal" data-i18n="port.featured">PEÇA CENTRAL DO ACERVO</span></div>
      <div class="rf-frame">
        <video muted loop controls playsinline preload="none" id="rfVideo"><source data-src="videos/introDocumentarioANJ_destaque.mp4" type="video/mp4"></video>
        <div class="vhs-fx" aria-hidden="true"></div>
        <div class="rf-cover" id="rfCover"><button class="rf-play" aria-label="Reproduzir"><span>▶</span></button><span class="rf-hint" data-i18n="port.featuredhint">produção própria · clique para assistir</span></div>
      </div>
      <div class="rf-meta">
        <span class="rf-mcell"><b data-i18n="port.mtipo">TIPO</b><i data-i18n="port.mtipoval">Documentário autoral</i></span>
        <span class="rf-mcell"><b data-i18n="port.mano">ANO</b><i>2026</i></span>
        <span class="rf-mcell"><b data-i18n="port.mdur">DURAÇÃO</b><i>1:40</i></span>
        <span class="rf-mcell"><b data-i18n="port.mrole">FUNÇÃO</b><i data-i18n="port.mroleval">Direção e edição</i></span>
      </div>
    </div>`;
  gm.innerHTML = featured + ARCHIVE.motion.map((it,i)=>{
    const no = 'CM-01' + String(i+1).padStart(2,'0');
    return `<div class="rec h16 halftone">
      <div class="rec-label"><span class="rec-no">${no}</span><span class="rec-fn">${it.label}</span><span class="st ${ST_CLASS[it.status]}">${it.status}</span></div>
      <div class="frame"><video muted loop controls playsinline class="lazy" preload="none"><source data-src="videos/${it.f}" type="video/mp4"></video><div class="vhs-fx" aria-hidden="true"></div></div>
      <div class="rec-meta">${metaCell('CLIENTE',it.cliente)}${metaCell('ANO',it.ano)}${metaCell('PESO',it.peso)}${metaCell('FORMATO','16:9')}</div>
    </div>`;
  }).join('');

  /* Caixa B - longos (YouTube), com sub-abas Explicativo / Gameplay */
  const gl = document.querySelector('#cat-longos .vgrid');
  gl.innerHTML = ARCHIVE.longos.map((it,i)=>{
    const no = 'CM-02' + String(i+1).padStart(2,'0');
    return `<div class="rec h16 yt halftone" data-vid="${it.yt}" data-sub="${it.cat}">
      <div class="rec-label"><span class="rec-no">${no}</span><span class="rec-fn">${it.label}</span><span class="st pub">PUBLICADO</span></div>
      <div class="frame"><img loading="lazy" alt="Vídeo do YouTube"><div class="ytp"><span></span></div></div>
      <div class="rec-meta">${metaCell('PLATAFORMA','YouTube')}${metaCell('ANO',it.ano)}${metaCell('PESO','ONLINE')}${metaCell('FORMATO','16:9')}</div>
    </div>`;
  }).join('');

  /* Caixa C - shorts (9:16 locais) */
  const gs = document.querySelector('#cat-shorts .vgrid');
  gs.innerHTML = ARCHIVE.shorts.map((it,i)=>{
    const no = 'CM-04' + String(i+1).padStart(2,'0');
    return `<div class="rec v916 halftone">
      <div class="rec-label"><span class="rec-no">${no}</span><span class="rec-fn">${it.label}</span><span class="st ${ST_CLASS[it.status]}">${it.status}</span></div>
      <div class="frame"><video muted loop controls playsinline class="lazy" preload="none"><source data-src="videos/${it.f}" type="video/mp4"></video><div class="vhs-fx" aria-hidden="true"></div></div>
      <div class="rec-meta">${metaCell('CLIENTE',it.cliente)}${metaCell('ANO',it.ano)}${metaCell('PESO',it.peso)}${metaCell('FORMATO','9:16')}</div>
    </div>`;
  }).join('');
}

/* ---------- ESTUDO DE CASO: carrossel visual de clipes ----------
   Usa querySelectorAll('.case-study') + classes (nunca IDs) nos elementos
   internos. Isso torna a função imune a HTML duplicado por engano -
   se por acaso existir mais de uma seção .case-study na página, cada
   uma funciona de forma independente, em vez de uma ficar "órfã". */
function renderCaseStudy(){
  document.querySelectorAll('.case-study').forEach(section=>{
    const carousel = section.querySelector('.cs-carousel');
    if(!carousel) return;
    carousel.innerHTML = CASE_STUDY.map((c,i)=>`
      <button class="cs-clip${i===0?' active':''}" data-i="${i}" type="button" aria-label="${c.tab}">
        <div class="cs-clip-thumb"><img src="${c.poster}" alt="" loading="lazy"></div>
        <div class="cs-clip-meta">
          <span class="cs-clip-label">${c.tab}</span>
          <span class="cs-clip-time">${c.time}</span>
        </div>
      </button>`
    ).join('');
  });
}
function initCaseStudy(){
  document.querySelectorAll('.case-study').forEach(section=>{
    const carousel = section.querySelector('.cs-carousel');
    const frame = section.querySelector('.cs-frame');
    const video = frame ? frame.querySelector('video') : null;
    const caption = section.querySelector('.cs-caption');
    if(!carousel || !video) return;

    function setClip(i){
      const c = CASE_STUDY[i];
      frame.classList.remove('err');
      video.pause();
      video.setAttribute('poster', c.poster);
      video.querySelector('source').setAttribute('src', c.f.indexOf('/')===-1 ? 'videos/'+c.f : c.f);
      video.load();
      video.play().catch(()=>{ video.muted = true; video.play().catch(()=>{}); });
      if(caption) caption.innerHTML = `<span><b>${c.tab}</b>: ${c.desc}</span><span>${c.time}</span>`;
      carousel.querySelectorAll('.cs-clip').forEach(b => b.classList.toggle('active', +b.dataset.i === i));
    }
    video.addEventListener('error', ()=> frame.classList.add('err'));

    carousel.addEventListener('click', e=>{
      const btn = e.target.closest('.cs-clip');
      if(!btn) return;
      setClip(+btn.dataset.i);
    });
    setClip(0);
  });
}

/* ---------- CORRESPONDÊNCIA: render das cartas dentro do carrossel ---------- */
function renderTestimonials(){
  const track = document.querySelector('.testimonials .corr-track');
  if(!track) return;
  track.innerHTML = TESTIMONIALS.map((t,i)=>`
    <article class="letter">
      <span class="staple" style="top:-4px;left:24px;--tilt:${i%2===0?-6:5}deg"></span>
      <div class="photo"><img loading="lazy" src="${t.photo}" alt="${t.name}"></div>
      <div class="letter-head">DE: <b>${t.name}</b> · ${t.handle}<br>ASSUNTO: <b data-i18n="${t.subjectKey}"></b><br>RECEBIDA: <b>${t.year}</b></div>
      <div class="letter-body" data-i18n="${t.bodyKey}"></div>
      <div class="letter-foot"><span>${t.foot}</span><span class="stampink" style="--tilt:-4deg" data-i18n="test.stamp">Arquivada</span></div>
    </article>`
  ).join('');
}

/* ---------- CORRESPONDÊNCIA: motor do carrossel (autoplay + pausa em interação) ---------- */
function initCorrCarousel(){
  const wrap = document.querySelector('.testimonials .corr-carousel');
  if(!wrap) return;
  const viewport = wrap.querySelector('.corr-viewport');
  const track = wrap.querySelector('.corr-track');
  const prevBtn = wrap.querySelector('.corr-prev');
  const nextBtn = wrap.querySelector('.corr-next');
  const dotsWrap = document.querySelector('.testimonials .corr-dots');
  if(!viewport || !track) return;

  const total = TESTIMONIALS.length;
  const GAP = 20;
  const DWELL = 5500;       // quanto tempo cada trio fica parado antes de girar sozinho
  const RESUME_AFTER = 9000; // quanto tempo espera depois de um clique manual pra voltar a girar
  let index = 0;
  let autoTimer = null;
  let resumeTimer = null;

  function cardsPerView(){
    const w = window.innerWidth;
    if(w >= 900) return Math.min(3, total);
    if(w >= 620) return Math.min(2, total);
    return 1;
  }

  function layout(){
    const perView = cardsPerView();
    const viewportW = viewport.clientWidth;
    const cardW = (viewportW - GAP * (perView - 1)) / perView;
    Array.from(track.children).forEach(c => { c.style.flex = `0 0 ${cardW}px`; });
    render(false);
  }

  function render(animate){
    const cardW = track.children[0] ? track.children[0].getBoundingClientRect().width : 0;
    track.style.transition = animate === false ? 'none' : '';
    track.style.transform = `translateX(-${index * (cardW + GAP)}px)`;
    if(animate === false) void track.offsetWidth; // força reflow antes de reabilitar a transição
    track.style.transition = '';
    updateDots();
  }

  function goTo(i){
    index = ((i % total) + total) % total;
    render();
  }

  function updateDots(){
    if(!dotsWrap) return;
    dotsWrap.querySelectorAll('.corr-dot').forEach((d, i) => d.classList.toggle('active', i === index));
  }
  function buildDots(){
    if(!dotsWrap) return;
    dotsWrap.innerHTML = TESTIMONIALS.map((_, i) =>
      `<button class="corr-dot${i===0?' active':''}" data-i="${i}" type="button" aria-label="Ir para depoimento ${i+1}"></button>`
    ).join('');
    dotsWrap.addEventListener('click', e=>{
      const btn = e.target.closest('.corr-dot');
      if(!btn) return;
      manualGo(+btn.dataset.i);
    });
  }

  function play(){
    stop();
    autoTimer = setInterval(()=> goTo(index + 1), DWELL);
  }
  function stop(){
    if(autoTimer) clearInterval(autoTimer);
    autoTimer = null;
  }
  /* navegação manual: pausa o giro automático nesse depoimento por um tempo, depois retoma sozinho */
  function manualGo(i){
    stop();
    clearTimeout(resumeTimer);
    goTo(i);
    resumeTimer = setTimeout(play, RESUME_AFTER);
  }

  if(prevBtn) prevBtn.addEventListener('click', ()=> manualGo(index - 1));
  if(nextBtn) nextBtn.addEventListener('click', ()=> manualGo(index + 1));

  let resizeTimer = null;
  window.addEventListener('resize', ()=>{
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 150);
  });

  buildDots();
  layout();
  play();
}

/* ---------- REVIEWS: carrossel de reações ---------- */
function renderReviews(){
  document.querySelectorAll('.revrow').forEach(row=>{
    const feat = `
      <div class="revcard revcard-feat">
        <div class="rev-top">
          <img class="rev-avatar" src="img/aminAvatar.jpg" alt="Amin Wake">
          <div>
            <div class="rev-name">Amin Wake</div>
            <div class="rev-role">cliente · documentário completo</div>
          </div>
        </div>
        <p>“${REVIEW_FEATURED[currentLang]}”</p>
      </div>`;
    const cards = REVIEWS[currentLang].map(r =>
      `<div class="revcard"><span class="rev-h">${r.h}</span><p class="rev-text">${r.t}</p></div>`
    ).join('');
    row.innerHTML = feat + cards;
  });
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
  renderReviews();
}

/* ---------- REGISTRO DE ACESSO ---------- */
function initA11y(){
  const btn = document.getElementById('a11yBtn');
  const panel = document.getElementById('a11yPanel');
  const closeBtn = document.getElementById('a11yClose');
  const sw = document.getElementById('motionSwitch');
  if(!btn || !panel || !sw) return;

  function apply(motionOn){
    document.documentElement.classList.toggle('no-motion', !motionOn);
    sw.setAttribute('aria-checked', motionOn ? 'true' : 'false');
    btn.classList.toggle('active', !motionOn);
  }
  let motionOn = localStorage.getItem('cm-motion') !== 'off';
  apply(motionOn);

  // aparece automaticamente na primeira visita
  if(!localStorage.getItem('cm-warn-seen')){
    panel.hidden = false;
  }

  btn.addEventListener('click', e=>{
    e.stopPropagation();
    panel.hidden = !panel.hidden;
  });
  if(closeBtn) closeBtn.addEventListener('click', ()=>{
    panel.hidden = true;
    localStorage.setItem('cm-warn-seen', '1');
  });
  sw.addEventListener('click', ()=>{
    motionOn = !motionOn;
    localStorage.setItem('cm-motion', motionOn ? 'on' : 'off');
    apply(motionOn);
  });
  document.addEventListener('click', e=>{
    if(!panel.hidden && !panel.contains(e.target) && e.target !== btn){
      panel.hidden = true;
      localStorage.setItem('cm-warn-seen', '1');
    }
  });
}
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

/* ---------- BARRA DO ARQUIVO - REF da seção atual ---------- */
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
  power.addEventListener('click', insertTape); /* tela também aceita clique - acessibilidade mobile */

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
function initFeatured(){
  const video = document.getElementById('rfVideo');
  const cover = document.getElementById('rfCover');
  const frame = video ? video.closest('.rf-frame') : null;
  if(!video || !cover) return;
  cover.addEventListener('click', ()=>{
    video.querySelectorAll('source[data-src]').forEach(s=>{
      if(!s.getAttribute('src')) s.setAttribute('src', s.getAttribute('data-src'));
    });
    if(video.readyState===0) video.load();
    video.muted = false;
    video.play().catch(()=>{ video.muted=true; video.play().catch(()=>{}); });
    cover.classList.add('off');
    if(frame) frame.classList.add('playing');
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
/* ---------- SUB-ABAS DA CAIXA B (Explicativo / Gameplay) ---------- */
function initLongSubtabs(){
  const bar = document.getElementById('longSubtabs');
  const grid = document.querySelector('#cat-longos .vgrid');
  if(!bar || !grid) return;
  function apply(sub){
    grid.querySelectorAll('.rec').forEach(card=>{
      card.style.display = (card.dataset.sub === sub) ? '' : 'none';
    });
    bar.querySelectorAll('.stab').forEach(b=> b.classList.toggle('active', b.dataset.sub === sub));
  }
  bar.addEventListener('click', e=>{
    const btn = e.target.closest('.stab');
    if(!btn) return;
    apply(btn.dataset.sub);
  });
  apply('explicativo');
}

function initVideoObserver(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      const v = entry.target;
      if(entry.isIntersecting){ loadLazy(v.closest('.cat')||v.parentElement); v.play().catch(()=>{}); }
      else v.pause();
    });
  }, {threshold:.3});
  document.querySelectorAll('.lazy').forEach(v=>{
    io.observe(v);
    const frame = v.closest('.frame');
    if(frame){
      v.addEventListener('playing', ()=>frame.classList.add('playing'));
      v.addEventListener('pause', ()=>frame.classList.remove('playing'));
    }
  });
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
  const openBtn = document.getElementById('wfOpen');
  const modal = document.getElementById('wfModal');
  const closeBtn = document.getElementById('wfModalX');
  const video = document.getElementById('wfVideo');
  if(!openBtn || !modal) return;

  const playBtn = document.getElementById('wfCtrlPlay');
  const muteBtn = document.getElementById('wfCtrlMute');
  const track = document.getElementById('wfCtrlTrack');
  const fill = document.getElementById('wfCtrlFill');
  const timeEl = document.getElementById('wfCtrlTime');

  function fmt(s){ s=Math.floor(s||0); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); }
  function syncPlay(){ if(playBtn) playBtn.textContent = video.paused ? '▶' : '❚❚'; }
  function syncMute(){ if(muteBtn) muteBtn.textContent = video.muted ? '🔇' : '🔊'; }

  function open(){
    if(video.readyState===0) video.load();
    modal.classList.add('open');
    document.body.style.overflow='hidden';
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    const vs = document.getElementById('wfCtrlVol'); if(vs) vs.value = 100;
    video.play().catch(()=>{ video.muted=true; video.play().catch(()=>{}); syncMute(); });
    syncPlay(); syncMute();
  }
  function close(){
    modal.classList.remove('open');
    document.body.style.overflow='';
    video.pause();
  }
  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e=>{ if(e.target===modal) close(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && modal.classList.contains('open')) close(); });

  if(playBtn) playBtn.addEventListener('click', ()=>{ if(video.paused) video.play(); else video.pause(); });
  video.addEventListener('play', syncPlay);
  video.addEventListener('pause', syncPlay);
  if(muteBtn) muteBtn.addEventListener('click', ()=>{ video.muted = !video.muted; syncMute(); });
  video.addEventListener('timeupdate', ()=>{
    if(video.duration){ fill.style.width = (video.currentTime/video.duration*100)+'%'; timeEl.textContent = fmt(video.currentTime); }
  });
  if(track) track.addEventListener('click', e=>{
    const r = track.getBoundingClientRect();
    if(video.duration) video.currentTime = ((e.clientX-r.left)/r.width) * video.duration;
  });

  /* ±5 segundos */
  const backBtn = document.getElementById('wfBack');
  const fwdBtn = document.getElementById('wfFwd');
  const volSlider = document.getElementById('wfCtrlVol');
  function seek(delta){ if(video.duration) video.currentTime = Math.min(video.duration, Math.max(0, video.currentTime + delta)); }
  if(backBtn) backBtn.addEventListener('click', ()=>seek(-5));
  if(fwdBtn) fwdBtn.addEventListener('click', ()=>seek(5));

  /* volume */
  function applyVol(v){ video.volume = Math.min(1, Math.max(0, v)); video.muted = (video.volume===0); if(volSlider) volSlider.value = video.volume*100; syncMute(); }
  if(volSlider) volSlider.addEventListener('input', ()=>applyVol(volSlider.value/100));

  /* teclado - só quando o modal está aberto: ←→ pula 5s, ↑↓ volume, espaço play/pause */
  document.addEventListener('keydown', e=>{
    if(!modal.classList.contains('open')) return;
    switch(e.key){
      case 'ArrowLeft':  e.preventDefault(); seek(-5); break;
      case 'ArrowRight': e.preventDefault(); seek(5); break;
      case 'ArrowUp':    e.preventDefault(); applyVol(video.volume + 0.1); break;
      case 'ArrowDown':  e.preventDefault(); applyVol(video.volume - 0.1); break;
      case ' ': case 'k': e.preventDefault(); if(video.paused) video.play(); else video.pause(); break;
    }
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
  const m = document.getElementById('imgModal');
  if(!m) return; /* seção de thumbnails removida - sem modal de imagem na página */
  m.classList.remove('open');
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

/* ---------- FORM ----------
   Envia via fetch (fica na mesma página) e troca o formulário por um
   cartão de protocolo personalizado, com o nome do cliente, o serviço
   escolhido e o mesmo número de protocolo mostrado no topo do formulário. */
function successHTML({firstName, servico, protoNo}){
  const t = translations[currentLang];
  const servicoText = servico || (currentLang==='pt' ? 'seu projeto' : 'your project');
  const bodyTpl = (t['bs.bodytpl']||'').replace('{servico}', servicoText);
  return `
    <div class="bs-stamp">${t['bs.stamp']}</div>
    <p class="bs-proto">${t['bs.protolabel']} <b>${protoNo}</b></p>
    <h3>${t['bs.greet']} ${firstName}!</h3>
    <p>${bodyTpl}</p>
    <p class="bs-note">${t['bs.note']}</p>
    <a class="btn3d bs-wpp" href="https://wa.me/5515998318065" target="_blank" rel="noopener">${t['bs.wpp']}</a>
    <button class="bs-again" type="button">${t['bs.again']}</button>
  `;
}
function initForm(){
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('submitBtn');
  const success = document.getElementById('briefSuccess');
  if(!form || !btn) return;

  if(success){
    success.addEventListener('click', e=>{
      if(e.target.closest('.bs-again')){
        success.hidden = true;
        form.hidden = false;
      }
    });
  }

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    /* mantém o texto original do botão visível; só liga o spinner ao lado */
    btn.disabled = true;
    btn.classList.add('loading');
    const errEl0 = document.getElementById('formError');
    if(errEl0) errEl0.hidden = true;

    const data = new FormData(form);
    const nomeRaw = (data.get('nome') || '').toString().trim();
    const firstName = nomeRaw ? nomeRaw.split(' ')[0] : (currentLang==='pt' ? 'você' : 'you');
    const servico = (data.get('servico') || '').toString().trim();
    const briefNoEl = document.getElementById('briefNo');
    const protoNo = briefNoEl ? briefNoEl.textContent : 'CM-0000';

    try{
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if(!res.ok) throw new Error('formspree_error');

      if(success){
        success.innerHTML = successHTML({firstName, servico, protoNo});
        form.hidden = true;
        success.hidden = false;
      }
      form.reset();
      btn.disabled = false;
      btn.classList.remove('loading');
    }catch(err){
      btn.disabled = false;
      btn.classList.remove('loading');
      const errEl = document.getElementById('formError');
      if(errEl){
        errEl.hidden = false;
        setTimeout(()=>{ errEl.hidden = true; }, 6000);
      }
    }
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

/* ---------- MODAL LEGAL: Termos de Uso / Política de Privacidade ----------
   Abre a partir de qualquer link com data-legal="privacy" ou data-legal="terms"
   (rodapé e checkbox do briefing). Não bloqueia o envio do formulário sozinho
   por leitura: quem faz isso é o atributo `required` da checkbox no HTML. */
function initLegalModal(){
  const modal = document.getElementById('legalModal');
  const body = document.getElementById('legalModalBody');
  const closeBtn = document.getElementById('legalModalX');
  if(!modal || !body) return;

  function open(kind){
    const content = LEGAL[kind];
    if(!content) return;
    body.innerHTML = content[currentLang] || content.pt;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    body.scrollTop = 0;
  }
  function close(){
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', e=>{
    const link = e.target.closest('[data-legal]');
    if(!link) return;
    e.preventDefault();
    open(link.dataset.legal);
  });
  if(closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e=>{ if(e.target === modal) close(); });
  document.addEventListener('keydown', e=>{ if(e.key === 'Escape' && modal.classList.contains('open')) close(); });
}

/* ---------- REVEAL ON SCROLL ---------- */
function initReveal(){
  const els = document.querySelectorAll('.rec,.letter,.fold,.doc-item,.ti,.sec-head');
  // fallback: se não houver suporte a IntersectionObserver, mostra tudo direto
  if(!('IntersectionObserver' in window)){
    els.forEach(el=>{ el.classList.add('reveal','on'); });
    return;
  }
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('on'); io.unobserve(entry.target); }
    });
  }, {threshold:.08});
  els.forEach(el=>{
    el.classList.add('reveal'); io.observe(el);
  });
  // rede de segurança: se o observer falhar, elementos já visíveis na tela aparecem mesmo assim
  setTimeout(()=>{
    els.forEach(el=>{
      if(el.classList.contains('on')) return;
      const r = el.getBoundingClientRect();
      if(r.top < window.innerHeight && r.bottom > 0) el.classList.add('on');
    });
  }, 2500);
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
  renderCaseStudy();              /* estudo de caso - Amin Wake */
  renderReviews();                /* carrossel de reações */
  renderTestimonials();           /* cartas da correspondência */
  applyTranslations(currentLang);
  buildTape();
  const imgModalEl = document.getElementById('imgModal');
  if(imgModalEl) imgModalEl.addEventListener('click', function(e){ if(e.target===this) closeModal(); });
  const langBtnEl = document.getElementById('langBtn');
  if(langBtnEl) langBtnEl.addEventListener('click', toggleLang);
  const activeCat = document.querySelector('.cat.active');
  if(activeCat) loadLazy(activeCat);

  initA11y();
  initBoot();
  initChrome();
  initCrt();
  initPortfolio();
  initLongSubtabs();
  initFeatured();
  initVideoObserver();
  initYouTube();
  initWorkflow();
  initCaseStudy();                /* carrossel do estudo de caso */
  initCorrCarousel();             /* carrossel de depoimentos */
  initFaq();
  initForm();
  initDiscord();
  initMascote();
  initFootSecret();
  initLegalModal();
  initReveal();

  console.log('%cARQUIVO CADEIRANTE MAROMBA%c\nvocê abriu o console. curioso do jeito certo.\nREF: CM-2026 · acesso registrado.', 'font-family:monospace;font-size:14px;font-weight:bold;color:#E13327', 'font-family:monospace;color:#6b6154');
});
