// =====================================================================
// MAPA CENTRAL DE MÍDIA — Univôlei Sumaré
// ---------------------------------------------------------------------
// Para ativar uma foto real:
//   1. Salve o arquivo em  public/<SuggestedPath>  (ex: public/assets/univolei/hero-jogo.jpg)
//   2. No item correspondente abaixo, troque  src: null  por  src: "<SuggestedPath>"
// Enquanto `src` for null (ou o arquivo não existir), o <ImageSlot> mostra
// um placeholder estilizado com nome, dimensão e caminho — nunca imagem quebrada.
// =====================================================================

const BASE = "/assets/univolei";

const mk = (id, title, dimensions, file, alt) => ({
    id,
    title,
    dimensions,
    SuggestedPath: `${BASE}/${file}`,
    alt,
    src: null,
});

export const LOGO = mk("logo", "Escudo Oficial Univôlei (Leão)", "512x512 - PNG transparente", "logo-univolei.png", "Escudo do Univôlei Sumaré");

export const HERO_BG = mk("hero", "Foto Hero — Jogo / Ataque em Quadra", "1920x1080", "hero-jogo.jpg", "Atleta do Univôlei Sumaré atacando em quadra");

export const GALLERY_ITEMS = [
    // Mural do Instagram (Home)
    mk("feed-1", "Post Instagram #1", "1080x1350 - Proporção 4:5 Instagram", "feed-01.jpg", "Post do Instagram @univolei_sumare"),
    mk("feed-2", "Post Instagram #2", "1080x1350 - Proporção 4:5 Instagram", "feed-02.jpg", "Post do Instagram @univolei_sumare"),
    mk("feed-3", "Post Instagram #3", "1080x1350 - Proporção 4:5 Instagram", "feed-03.jpg", "Post do Instagram @univolei_sumare"),
    mk("feed-4", "Post Instagram #4", "1080x1350 - Proporção 4:5 Instagram", "feed-04.jpg", "Post do Instagram @univolei_sumare"),
    mk("feed-5", "Post Instagram #5", "1080x1350 - Proporção 4:5 Instagram", "feed-05.jpg", "Post do Instagram @univolei_sumare"),
    mk("feed-6", "Post Instagram #6", "1080x1350 - Proporção 4:5 Instagram", "feed-06.jpg", "Post do Instagram @univolei_sumare"),
    mk("feed-7", "Post Instagram #7", "1080x1350 - Proporção 4:5 Instagram", "feed-07.jpg", "Post do Instagram @univolei_sumare"),
    mk("feed-8", "Post Instagram #8", "1080x1350 - Proporção 4:5 Instagram", "feed-08.jpg", "Post do Instagram @univolei_sumare"),
    // Momentos marcantes (Sobre)
    mk("momento-fundacao", "Fundação — 14/11/2022", "1200x900 - Proporção 4:3", "momento-fundacao.jpg", "Primeiro encontro do Univôlei em 2022"),
    mk("momento-aniver", "Aniver. 2k26", "1200x900 - Proporção 4:3", "momento-aniver-2k26.jpg", "Festa de aniversário do Univôlei em 2026"),
    mk("momento-conquista", "Conquista / Pódio", "1200x900 - Proporção 4:3", "momento-conquista.jpg", "Equipe do Univôlei comemorando conquista"),
    mk("momento-torcida", "Família Uni na Arquibancada", "1200x900 - Proporção 4:3", "momento-torcida.jpg", "Torcida e famílias do Univôlei"),
    mk("youtube-capa", "Capa do Canal / Vídeo em Destaque", "1280x720 - 16:9", "youtube-capa.jpg", "Vídeo em destaque do canal Univôlei Sumaré"),
];

export const CATEGORIES_IMAGES = {
    adulto: mk("cat-adulto", "Foto Oficial Elenco Adulto", "800x1000 - Proporção 4:5 Instagram", "categoria-adulto.jpg", "Elenco adulto do Univôlei Sumaré"),
    projeto: mk("cat-projeto", "Foto Treino Projeto", "800x1000 - Proporção 4:5 Instagram", "categoria-projeto.jpg", "Treino do projeto social do Univôlei"),
    novaGeracao: mk("cat-nova-geracao", "Foto Nova Geração", "800x1000 - Proporção 4:5 Instagram", "categoria-nova-geracao.jpg", "Atletas da Nova Geração do Univôlei"),
    seletivas: mk("cat-seletivas", "Arte / Foto Seletivas 2k27", "800x1000 - Proporção 4:5 Instagram", "seletivas-2k27.jpg", "Seletivas 2k27 do Univôlei Sumaré"),
};

export const HIGHLIGHTS_COVERS = {
    seletivas: mk("hl-seletivas", "Destaque: Seletivas 2k27", "400x400", "destaque-seletivas.jpg", "Destaque Seletivas 2k27"),
    aniversario: mk("hl-aniver", "Destaque: Aniver. 2k26", "400x400", "destaque-aniver.jpg", "Destaque Aniversário 2026"),
    municipal: mk("hl-municipal", "Destaque: Municipal 2K26", "400x400", "destaque-municipal.jpg", "Destaque Municipal 2026"),
    crv: mk("hl-crv", "Destaque: CRV 2026", "400x400", "destaque-crv.jpg", "Destaque Copa Regional de Voleibol 2026"),
    adulto: mk("hl-adulto", "Destaque: Treinos Adulto", "400x400", "destaque-adulto.jpg", "Destaque Treinos Adulto"),
    projeto: mk("hl-projeto", "Destaque: Treinos Projeto", "400x400", "destaque-projeto.jpg", "Destaque Treinos Projeto"),
    novaGeracao: mk("hl-nova-geracao", "Destaque: Nova Geração", "400x400", "destaque-nova-geracao.jpg", "Destaque Nova Geração"),
    // Fotos de equipe em quadra (página Categorias & Torneios)
    municipalQuadra: mk("quadra-municipal", "Equipe em Quadra — Municipal 2K26", "1600x900 - 16:9", "quadra-municipal-2k26.jpg", "Univôlei em quadra no Municipal 2K26"),
    crvQuadra: mk("quadra-crv", "Equipe em Quadra — CRV 2026", "1600x900 - 16:9", "quadra-crv-2026.jpg", "Univôlei em quadra na CRV 2026"),
};

export const ROSTER_PHOTOS = [
    mk("staff-1", "Comissão Técnica — Técnico(a) Principal", "600x750 - 4:5", "staff-tecnico.jpg", "Técnico principal do Univôlei"),
    mk("staff-2", "Comissão Técnica — Auxiliar / Preparador(a)", "600x750 - 4:5", "staff-auxiliar.jpg", "Auxiliar técnico do Univôlei"),
    mk("staff-3", "Diretoria — Presidente / Fundador(a)", "600x750 - 4:5", "diretoria-presidente.jpg", "Diretoria do Univôlei"),
    mk("staff-4", "Diretoria — Coordenação do Projeto", "600x750 - 4:5", "diretoria-coordenacao.jpg", "Coordenação do projeto Univôlei"),
];

export const SPONSORS_LOGOS = [
    mk("sponsor-1", "Patrocinador Master", "400x200 - PNG transparente", "patrocinador-01.png", "Logo patrocinador"),
    mk("sponsor-2", "Apoiador #2", "400x200 - PNG transparente", "patrocinador-02.png", "Logo apoiador"),
    mk("sponsor-3", "Apoiador #3", "400x200 - PNG transparente", "patrocinador-03.png", "Logo apoiador"),
    mk("sponsor-4", "Apoiador #4", "400x200 - PNG transparente", "patrocinador-04.png", "Logo apoiador"),
];
