import { CATEGORIES_IMAGES, HIGHLIGHTS_COVERS } from "@/lib/mediaPlaceholders";

export const SOCIAL = {
    instagram: "https://www.instagram.com/univolei_sumare/",
    instagramHandle: "@univolei_sumare",
    youtube: "https://youtube.com/@UnivoleiSumare",
    youtubeHandle: "@UnivoleiSumare",
};

export const FOUNDED = "14/11/2022";
export const HASHTAG = "#Vem_Ser_Uni";

export const STATS = [
    { value: FOUNDED, label: "Fundação" },
    { value: "+350", label: "Posts & Momentos" },
    { value: "+1.900", label: "Seguidores na comunidade" },
    { value: "MUN + CRV", label: "Competições 2026" },
];

// Horários e locais exatos mudam por temporada: edite aqui quando definidos.
export const CATEGORIES = [
    {
        slug: "adulto",
        title: "Treinos Adulto",
        tag: "Competitivo",
        short: "Equipes competitivas masculina e feminina, com preparação tática e física para as competições da temporada.",
        objetivos: ["Preparação tática e sistemas de jogo", "Condicionamento físico específico", "Representar Sumaré em campeonatos"],
        horario: "Horários divulgados no Instagram e WhatsApp",
        local: "Sumaré/SP",
        image: CATEGORIES_IMAGES.adulto,
    },
    {
        slug: "projeto",
        title: "Treinos Projeto",
        tag: "Formação",
        short: "Formação de base e iniciação esportiva: fundamentos, disciplina e o espírito de equipe do Leão.",
        objetivos: ["Fundamentos: toque, manchete, saque e ataque", "Iniciação esportiva acessível", "Valores de equipe e convivência"],
        horario: "Horários divulgados no Instagram e WhatsApp",
        local: "Sumaré/SP",
        image: CATEGORIES_IMAGES.projeto,
    },
    {
        slug: "nova-geracao",
        title: "Nova Geração",
        tag: "Evolução",
        short: "Evolução técnica para quem já domina o básico e quer dar o próximo passo rumo às equipes competitivas.",
        objetivos: ["Aperfeiçoamento técnico por posição", "Leitura de jogo e tomada de decisão", "Transição para o time adulto"],
        horario: "Horários divulgados no Instagram e WhatsApp",
        local: "Sumaré/SP",
        image: CATEGORIES_IMAGES.novaGeracao,
    },
];

export const HIGHLIGHTS = [
    { id: "seletivas", label: "Seletivas 2k27", to: "/seletivas", cover: HIGHLIGHTS_COVERS.seletivas },
    { id: "aniversario", label: "Aniver. 2k26", to: "/sobre", cover: HIGHLIGHTS_COVERS.aniversario },
    { id: "municipal", label: "Municipal 2K26", to: "/categorias#competicoes", cover: HIGHLIGHTS_COVERS.municipal },
    { id: "crv", label: "CRV 2026", to: "/categorias#competicoes", cover: HIGHLIGHTS_COVERS.crv },
    { id: "adulto", label: "Treinos Adulto", to: "/categorias", cover: HIGHLIGHTS_COVERS.adulto },
    { id: "projeto", label: "Treinos Projeto", to: "/categorias", cover: HIGHLIGHTS_COVERS.projeto },
    { id: "nova-geracao", label: "Nova Geração", to: "/categorias", cover: HIGHLIGHTS_COVERS.novaGeracao },
];

export const COMPETITIONS = [
    { name: "Municipal 2K26", tag: "Municipal", text: "Campeonato municipal de Sumaré, palco principal das nossas equipes.", image: HIGHLIGHTS_COVERS.municipalQuadra },
    { name: "CRV 2026", tag: "Copa Regional de Voleibol", text: "A Copa Regional de Voleibol, com equipes de toda a região.", image: HIGHLIGHTS_COVERS.crvQuadra },
    { name: "Ligas Regionais", tag: "Regional", text: "Ligas e torneios regionais ao longo da temporada." },
    { name: "Amistosos", tag: "Intercâmbio", text: "Jogos-treino com equipes convidadas. Quer marcar um? Fale com a gente." },
];

// Preencha conforme a tabela oficial de cada competição.
export const GAMES = [
    { data: "A confirmar", competicao: "Municipal 2K26", adversario: "A definir", local: "Sumaré/SP", resultado: "—" },
    { data: "A confirmar", competicao: "CRV 2026", adversario: "A definir", local: "A definir", resultado: "—" },
    { data: "A confirmar", competicao: "Amistoso", adversario: "A definir", local: "A definir", resultado: "—" },
];

export const TIMELINE = [
    { date: "14/11/2022", title: "Nasce o Univôlei", text: "Fundação do time em Sumaré/SP: um grupo apaixonado por vôlei decide construir algo maior." },
    { date: "2023 – 2025", title: "A família cresce", text: "Estruturação dos treinos adulto e do projeto de formação, com cada vez mais atletas vestindo a camisa." },
    { date: "2026", title: "Temporada de quadra", text: "Disputa do Municipal 2K26 e da CRV 2026 (Copa Regional de Voleibol)." },
    { date: "14/11/2026", title: "Aniver. 2k26", text: "Quatro anos de Leão celebrados com a família Uni." },
    { date: "2027", title: "Seletivas 2k27", text: "Novo ciclo de captação de talentos para rugir junto com o Leão." },
];

export const VALUES = [
    ["Família em quadra", "Ninguém joga sozinho. Dentro e fora da quadra, a gente se apoia."],
    ["Raça de Leão", "Entrega em cada ponto, do treino à final."],
    ["Evolução constante", "Do primeiro toque na bola ao time adulto, todo mundo cresce."],
    ["Vôlei para Sumaré", "Levar o esporte, a disciplina e a amizade para a nossa cidade."],
];

export const POSITIONS = [
    { name: "Levantador(a)", text: "O cérebro do time: distribui o jogo e arma os ataques." },
    { name: "Ponteiro(a)", text: "Ataque pela entrada de rede, passe e muita regularidade." },
    { name: "Central", text: "Bloqueio e ataques rápidos pelo meio da rede." },
    { name: "Oposto(a)", text: "Principal atacante, pontua pela saída de rede e pelo fundo." },
    { name: "Líbero", text: "Especialista em defesa e recepção. Não deixa a bola cair." },
];

export const SELETIVAS_REQUISITOS = [
    "Vontade de treinar e fazer parte de uma equipe",
    "Disponibilidade para os dias de treino",
    "Menores de idade com autorização dos responsáveis",
    "Roupa esportiva, tênis adequado e garrafinha de água",
];

export const SELETIVAS_FAQ = [
    ["Preciso ter experiência para participar?", "Não necessariamente. Avaliamos o potencial e encaminhamos cada atleta para a frente certa: Adulto, Projeto ou Nova Geração."],
    ["Quando e onde acontecem as Seletivas 2k27?", "Datas e local são divulgados no Instagram @univolei_sumare. Inscreva-se para receber o aviso em primeira mão."],
    ["Há alguma taxa de inscrição?", "As condições de cada etapa são informadas no anúncio oficial da seletiva. Em caso de dúvida, chame no WhatsApp."],
    ["Posso me inscrever para mais de uma posição?", "Sim! Indique a posição principal no formulário e comente as outras no campo de mensagem."],
    ["Qual a idade mínima?", "Há espaço para várias idades através das frentes do projeto. Informe sua idade no formulário para avaliarmos a melhor turma."],
];
