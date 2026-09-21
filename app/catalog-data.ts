export type CatalogLine = {
  name: string;
  kind: string;
  image: string;
  specs: [label: string, value: string][];
  colors: string[];
};

export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  logo: { src: string; width: number; height: number };
  pdf: { href: string; size: string };
  lines: CatalogLine[];
};

const img = (brand: string, line: string) => `/catalogos/${brand}/${line}.jpg`;

export const brands: Brand[] = [
  {
    slug: "statofloor",
    name: "StatoFloor",
    tagline: "Pisos vinílicos e rodapés",
    description:
      "Marca catarinense da Stato Dell Arte, pioneira em vinílicos de grandes formatos no país e a primeira a trazer peças marmorizadas e cimentícias em vinílico ao Brasil.",
    highlights: ["SPC com manta IXPE", "Antibacteriano", "Anti-chamas", "Pet friendly"],
    logo: { src: "/catalogos/logos/statofloor.png", width: 900, height: 171 },
    pdf: { href: "/catalogos/pdf/catalogo-statofloor.pdf", size: "2 MB" },
    lines: [
      {
        name: "TechWood",
        kind: "Vinílico SPC · Clicado",
        image: img("statofloor", "techwood"),
        specs: [["Formato", "1220 × 228 mm"], ["Espessura", "5,0 mm"], ["Capa de uso", "0,30 mm"], ["Uso", "Residencial e comercial"]],
        colors: ["Cedro Branco", "Freijó", "Cumaru", "Nogueira"],
      },
      {
        name: "Aroma",
        kind: "Vinílico LVT · Colado",
        image: img("statofloor", "aroma"),
        specs: [["Formato", "228,6 × 1219,2 mm"], ["Espessura", "2 mm"], ["Capa de uso", "0,2 mm"], ["Uso", "Residencial e comercial leve"]],
        colors: ["Mel", "Avelã", "Latte", "Conhaque", "Chantily", "Caramelo", "Champanhe"],
      },
      {
        name: "Nativa",
        kind: "Vinílico LVT · Colado",
        image: img("statofloor", "nativa"),
        specs: [["Formato", "228,6 × 1219,2 mm"], ["Espessura", "2 mm"], ["Capa de uso", "0,3 mm"], ["Uso", "Residencial e comercial"]],
        colors: ["Garapa", "Louro Freijó", "Marfim", "Carvalho"],
      },
      {
        name: "Marmo",
        kind: "Placa vinílica marmorizada",
        image: img("statofloor", "marmo"),
        specs: [["Formato", "914,4 × 914,4 mm"], ["Espessura", "2 mm"], ["Capa de uso", "0,3 mm"], ["Uso", "Residencial e comercial"]],
        colors: ["Granilite", "Silver"],
      },
      {
        name: "Cimento",
        kind: "Placa vinílica cimentícia",
        image: img("statofloor", "cimento"),
        specs: [["Formato", "914,4 × 914,4 mm"], ["Espessura", "2,5 mm"], ["Capa de uso", "0,5 mm"]],
        colors: ["Areia", "Cinza", "Grafite", "Preto"],
      },
      {
        name: "Rodapés",
        kind: "Poliestireno e WPC",
        image: img("statofloor", "rodapes"),
        specs: [["Alturas", "7, 10 e 15 cm"], ["Espessura", "1,5 cm"], ["Barra", "2,4 m"]],
        colors: ["Branco com friso", "Branco liso", "Branco WPC", "Preto com friso"],
      },
    ],
  },
  {
    slug: "arquitech",
    name: "Arquitech",
    tagline: "Tecnologicamente elegante",
    description:
      "Pisos vinílicos em régua e placa, revestimento vinílico de parede em grandes formatos, painéis ripados, revestimento 3D e perfis de poliestireno para acabamento.",
    highlights: ["Grandes formatos", "Revestimento de parede", "Ripados", "Perfis 100% virgens"],
    logo: { src: "/catalogos/logos/arquitech.png", width: 900, height: 412 },
    pdf: { href: "/catalogos/pdf/catalogo-arquitech.pdf", size: "6,8 MB" },
    lines: [
      {
        name: "Magnifique",
        kind: "Vinílico LVT · Régua",
        image: img("arquitech", "magnifique"),
        specs: [["Formato", "184 × 1220 mm"], ["Espessura", "2 mm"], ["Capa de uso", "0,20 mm"], ["Caixa", "4,49 m²"], ["Uso", "Residencial geral"]],
        colors: ["Diane", "Dominique", "Valentine", "Jolie", "Charlotte", "Marcelle", "Florence", "Madeleine", "Margot", "Angel", "Juliette", "Louise", "Marie", "Sophie", "Loren"],
      },
      {
        name: "Lumière",
        kind: "Vinílico LVT · Régua",
        image: img("arquitech", "lumiere"),
        specs: [["Formato", "184 × 1220 mm"], ["Espessura", "3 mm"], ["Capa de uso", "0,30 mm"], ["Caixa", "3,37 m²"], ["Uso", "Residencial e comercial moderado"]],
        colors: ["Passion", "L'amour", "Liberté", "Glamour", "Force", "Surprise", "Confiance"],
      },
      {
        name: "Château",
        kind: "Vinílico LVT · Placa",
        image: img("arquitech", "chateau"),
        specs: [["Formato", "920 × 920 mm"], ["Espessura", "3 mm"], ["Capa de uso", "0,50 mm"], ["Caixa", "5,08 m²"], ["Uso", "Residencial e comercial pesado"]],
        colors: ["Saumur", "Langeais", "Anglais", "Chantilly", "Montpoupon", "Cheverny", "Chambord", "Valençay", "Ussé", "Annecy", "Laffitte", "Sully", "Hervé", "Fontenay", "Villandry", "Giverny", "Amboise", "Chaumont", "Calamès", "Serrant"],
      },
      {
        name: "Château Decor",
        kind: "Vinílico LVT · Placa marmorizada",
        image: img("arquitech", "chateau-decor"),
        specs: [["Formato", "920 × 920 mm"], ["Espessura", "2 mm"], ["Capa de uso", "0,20 mm"], ["Caixa", "5,08 m²"], ["Uso", "Residencial geral"]],
        colors: ["Thierry", "Troussay"],
      },
      {
        name: "Château Mur",
        kind: "Revestimento vinílico de parede",
        image: img("arquitech", "chateau-mur"),
        specs: [["Formato", "920 × 2800 mm"], ["Espessura", "2 mm"], ["Capa de uso", "0,20 mm"], ["Embalagem", "5,15 m²"], ["Uso", "Residencial e comercial"]],
        colors: ["Thierry", "Troussay", "Saumur", "Anglais", "Sully", "Valençay", "Villandry", "Giverny"],
      },
      {
        name: "Crosswall",
        kind: "Painel ripado em poliestireno",
        image: img("arquitech", "crosswall"),
        specs: [["Largura", "12 cm"], ["Comprimento", "2,80 m"], ["Material", "Poliestireno 100% virgem"]],
        colors: ["Branco", "Bege", "Cappuccino", "Bronze", "Cinza Urbano", "Preto Vulcano", "Gold", "Rusty Gold", "Birch Wood", "Elm Wood", "Oak Wood"],
      },
      {
        name: "Arqwall",
        kind: "Revestimento 3D almofadado",
        image: img("arquitech", "arqwall"),
        specs: [["Formato", "40 × 40 cm"], ["Benefícios", "Conforto térmico e acústico"]],
        colors: ["Off White", "Bege", "Fendi", "Rosa Blush", "Verde Militar", "Verde Acqua", "Azul Royal", "Azul Oxford", "Cinza Urbano", "Cappuccino", "Caramelo", "Preto Vulcano"],
      },
      {
        name: "Perfis de poliestireno",
        kind: "Rodapés, guarnições e rodameios",
        image: img("arquitech", "perfis"),
        specs: [["Linhas", "Vide, Slim, Versailles e Retrofit"], ["Extras", "Sócalos, rosetas e nichos"]],
        colors: ["Branco", "Preto Vulcano", "Cinza Urbano"],
      },
    ],
  },
  {
    slug: "realfloor",
    name: "Realfloor",
    tagline: "Pisos vinílicos e rodapés",
    description:
      "Pisos vinílicos colados e clicados com certificações ISO 9001 e ISO 14001, além de rodapés, guarnições e grama sintética para áreas internas e externas.",
    highlights: ["ISO 9001 e 14001", "SPC com manta IXPE", "Rodapés com 5 anos de garantia"],
    logo: { src: "/catalogos/logos/realfloor.png", width: 900, height: 287 },
    pdf: { href: "/catalogos/pdf/catalogo-realfloor.pdf", size: "8,1 MB" },
    lines: [
      {
        name: "Gran Design",
        kind: "Vinílico LVT · Colado",
        image: img("realfloor", "gran-design"),
        specs: [["Formato", "152,4 × 22,8 cm"], ["Espessura", "2 mm"], ["Capa de uso", "0,20 mm"], ["Garantia", "7 anos residencial"]],
        colors: ["Vanille", "Avelã", "Canela"],
      },
      {
        name: "Realpratik SPC",
        kind: "Vinílico SPC · Clicado",
        image: img("realfloor", "realpratik"),
        specs: [["Formato", "122 × 18 cm"], ["Espessura", "4 mm + 1,5 mm IXPE"], ["Capa de uso", "0,30 mm"]],
        colors: ["Canela", "Carmel", "Concrete", "Duna", "Palha", "Vanille", "Âmbar", "Lugano"],
      },
      {
        name: "Home LVT",
        kind: "Vinílico LVT · Colado",
        image: img("realfloor", "home"),
        specs: [["Formato", "122 × 18,4 cm"], ["Espessura", "2 mm"], ["Capa de uso", "0,20 mm"]],
        colors: ["Belmonte", "Cement", "Canela", "Capuccino", "Carmel", "Harbor", "Gray", "Honey", "Vanille", "Areia", "Brown", "Duna"],
      },
      {
        name: "Comfort",
        kind: "Vinílico LVT · Colado",
        image: img("realfloor", "comfort"),
        specs: [["Formato", "122 × 18,4 cm"], ["Espessura", "3 mm"], ["Capa de uso", "0,50 mm"], ["Uso", "Alto tráfego comercial"]],
        colors: ["Canela", "Vanille", "Duna", "Silver", "Concrete", "Belmonte"],
      },
      {
        name: "Rodapés e guarnições",
        kind: "Poliestireno",
        image: img("realfloor", "rodapes"),
        specs: [["Alturas", "7, 10, 12 e 15 cm"], ["Espessura", "1 a 2 cm"], ["Garantia", "5 anos"]],
        colors: ["Rodapés", "Guarnições", "Rodameios"],
      },
      {
        name: "Grama sintética",
        kind: "Áreas internas e externas",
        image: img("realfloor", "grama"),
        specs: [["Alturas", "12, 20 e 30 mm"], ["Rolo", "2 × 25 m"], ["Proteção", "UV e antifungo"]],
        colors: ["Verde Militar"],
      },
    ],
  },
  {
    slug: "tarkett",
    name: "Tarkett",
    tagline: "Linha Injoy® LVT",
    description:
      "Vinílico heterogêneo de fabricação nacional com proteção Extreme Protection, COVs ultrabaixos e plastificantes livres de ftalatos. Piso pronto em até 2 dias.",
    highlights: ["Até 10 anos de garantia", "Livre de ftalatos", "Extreme Protection"],
    logo: { src: "/catalogos/logos/tarkett.png", width: 900, height: 205 },
    pdf: { href: "/catalogos/pdf/catalogo-tarkett.pdf", size: "0,8 MB" },
    lines: [
      {
        name: "Injoy® Régua",
        kind: "Vinílico LVT · Colado",
        image: img("tarkett", "injoy-regua"),
        specs: [["Formato", "208,5 × 1230 mm"], ["Espessura", "2 mm"], ["Capa de uso", "0,15 mm"], ["Caixa", "5,13 m²"]],
        colors: ["Camélia", "Lichia", "Menta", "Calêndula", "Centeio", "Prímula", "Gérbera", "Mate", "Papoula", "Tulipa", "Peônia", "Lavanda"],
      },
      {
        name: "Injoy® Placa",
        kind: "Vinílico LVT · Colado",
        image: img("tarkett", "injoy-placa"),
        specs: [["Formato", "920 × 920 mm"], ["Espessura", "2 mm"], ["Capa de uso", "0,15 mm"], ["Caixa", "4,23 m²"]],
        colors: ["Lucerna", "Róseo", "Gnaisse"],
      },
    ],
  },
  {
    slug: "casagrassi",
    name: "Casa Grassi",
    tagline: "Pisos vinílicos & acabamentos",
    description:
      "Coleções em PVC 100% virgem para residências e comércio, com rodapés que dispensam pintura, ripados internos e externos, deck em WPC e itens de instalação.",
    highlights: ["PVC 100% virgem", "Até 15 anos de garantia", "Ripados e deck WPC"],
    logo: { src: "/catalogos/logos/casagrassi.png", width: 900, height: 264 },
    pdf: { href: "/catalogos/pdf/catalogo-casagrassi.pdf", size: "4,6 MB" },
    lines: [
      {
        name: "Coleção Cities",
        kind: "Vinílico LVT · Colado 2 mm",
        image: img("casagrassi", "cities"),
        specs: [["Formato", "187 × 1227 mm"], ["Capa de uso", "0,20 mm"], ["Caixa", "4,13 m²"], ["Garantia", "10 anos residencial"]],
        colors: ["Doha", "Vegas", "Dakota", "Nápoles", "Dallas", "Odessa", "Liverpool", "Quilmes", "Rivera", "Carmel", "Lyon", "Malta", "Berlim", "Xangai", "Istambul", "Toronto", "Dubai", "Amsterdam", "Laguna", "Havana"],
      },
      {
        name: "Coleção Office",
        kind: "Vinílico LVT · Colado 3 mm",
        image: img("casagrassi", "office"),
        specs: [["Formato", "189 × 1229 mm"], ["Capa de uso", "0,55 mm"], ["Uso", "Residencial e comercial pesado"], ["Garantia", "15 anos residencial"]],
        colors: ["Rovere Bianco", "Alegro", "Aurora", "Canela", "Luna", "Madero", "Catedral", "Capri", "Onix", "Cement"],
      },
      {
        name: "Coleção Olimpo",
        kind: "Vinílico SPC · Clicado 5,5 mm",
        image: img("casagrassi", "olimpo"),
        specs: [["Formato", "180 × 1220 mm"], ["Capa de uso", "0,50 mm"], ["Caixa", "2,20 m²"], ["Garantia", "15 anos residencial"]],
        colors: ["Atena", "Hermes", "Ártemis", "Hera", "Ares", "Apolo", "Deméter", "Dionísio"],
      },
      {
        name: "Coleção Pietra",
        kind: "Placa vinílica · 3 mm",
        image: img("casagrassi", "pietra"),
        specs: [["Formato", "610 × 610 mm"], ["Capa de uso", "0,55 mm"], ["Uso", "Residencial e comercial pesado"]],
        colors: ["Mescolare", "Chiaro", "Grigio", "Bruciato", "Notte", "Nero"],
      },
      {
        name: "Coleção Countries",
        kind: "Placa vinílica · Grande formato 2 mm",
        image: img("casagrassi", "countries"),
        specs: [["Formato", "914,4 × 914,4 mm"], ["Capa de uso", "0,20 mm"], ["Caixa", "9,19 m²"]],
        colors: ["Canadá", "Áustria", "Uruguai", "Samoa", "Líbano", "Marrocos"],
      },
      {
        name: "Coleção Pietra Square",
        kind: "Placa vinílica · Grande formato 3 mm",
        image: img("casagrassi", "pietra-square"),
        specs: [["Formato", "914,4 × 914,4 mm"], ["Capa de uso", "0,55 mm"], ["Uso", "Residencial e comercial pesado"]],
        colors: ["Linho Beige", "Plage", "Ciment Léger", "Linho Brun", "Carpet Gris", "Carpet Risque"],
      },
      {
        name: "Mantas vinílicas",
        kind: "Vinílico em rolo",
        image: img("casagrassi", "mantas"),
        specs: [["Rolo", "2 × 20 m (40 m²)"], ["Espessura", "0,7 mm"], ["Cores", "8 estampas exclusivas"]],
        colors: ["Legno"],
      },
      {
        name: "Rodapés e guarnições",
        kind: "Poliestireno sem pintura",
        image: img("casagrassi", "rodapes"),
        specs: [["Alturas", "3 a 30 cm"], ["Linhas", "Lisos, frisados, Slim, T12 e Sobrepor"]],
        colors: ["Branco", "Gray", "Black"],
      },
      {
        name: "Ripados internos",
        kind: "Painel ripado",
        image: img("casagrassi", "ripados-internos"),
        specs: [["Formato", "122 × 12 × 2850 mm"], ["Garantia", "5 anos"]],
        colors: ["Algodão", "Avelã", "Fendi", "Gray", "Legno", "Carvalho"],
      },
      {
        name: "Ripados externos",
        kind: "Painel ripado WPC",
        image: img("casagrassi", "ripados-externos"),
        specs: [["Formato", "219 × 26 × 2900 mm"], ["Proteção", "UV e à prova d'água"], ["Garantia", "5 anos"]],
        colors: ["Madeira Antiga", "Teak A", "Teak B", "Rosewood", "Black"],
      },
      {
        name: "Deck WPC",
        kind: "Madeira plástica",
        image: img("casagrassi", "deck"),
        specs: [["Formato", "148 × 23 × 2900 mm"], ["Proteção", "UV e antiderrapante"], ["Garantia", "5 anos"]],
        colors: ["Ipê", "Café", "Bétula", "Teak A"],
      },
    ],
  },
  {
    slug: "pix",
    name: "Pix Revestimentos",
    tagline: "Grupo Rivatti",
    description:
      "Pisos vinílicos clicados, colados e homogêneos, placas vinílicas de parede, tetos vinílicos, painéis ripados e alizares — soluções completas para obra e acabamento.",
    highlights: ["Presente em 16 países", "Tetos vinílicos", "Até 10 anos de garantia"],
    logo: { src: "/catalogos/logos/pix.png", width: 874, height: 474 },
    pdf: { href: "/catalogos/pdf/catalogo-pix.pdf", size: "4,5 MB" },
    lines: [
      {
        name: "Linha FIT",
        kind: "Vinílico SPC · Clicado",
        image: img("pix", "fit"),
        specs: [["Formato", "183 × 1230 mm"], ["Espessura", "4 mm + 1 mm IXPE"], ["Capa de uso", "0,30 mm"], ["Garantia", "10 anos residencial"]],
        colors: ["Sena", "Araguaia", "Volga", "Danúbio", "Reno", "Amur", "Lena"],
      },
      {
        name: "Linha LEV",
        kind: "Vinílico LVT · Colado",
        image: img("pix", "lev"),
        specs: [["Formato", "180 × 1220 mm"], ["Espessura", "2 mm"], ["Capa de uso", "0,15 mm"], ["Caixa", "4,34 m²"]],
        colors: ["Margarida", "Hortência", "Hibisco", "Magnólia", "Girassol", "Orquídea", "Gardênia", "Peônia", "Narciso"],
      },
      {
        name: "Linha JOB",
        kind: "Vinílico LVT · Régua e placa",
        image: img("pix", "job"),
        specs: [["Régua", "180 × 1220 mm"], ["Placa", "914,4 × 914,4 mm"], ["Espessura", "3 mm"], ["Capa de uso", "0,55 mm"]],
        colors: ["Cielo", "Sole", "Sud", "Creta", "Petra", "Roccia"],
      },
      {
        name: "Linha Vitta PUR",
        kind: "Piso homogêneo em manta",
        image: img("pix", "vitta"),
        specs: [["Rolo", "2 × 20 m (40 m²)"], ["Espessura", "2 mm"], ["Uso", "Comercial e industrial pesado"], ["Garantia", "10 anos"]],
        colors: ["Stark", "Solid", "Scudo"],
      },
      {
        name: "Placas vinílicas",
        kind: "Revestimento de parede SPC",
        image: img("pix", "placas"),
        specs: [["Formato", "2750 × 1200 mm"], ["Espessura", "3 mm"], ["Garantia", "3 anos"]],
        colors: ["Bianco Fosco", "Pietra", "Perlato", "Sierra", "Vulcano", "Caliza"],
      },
      {
        name: "Teto vinílico",
        kind: "Forro em PVC",
        image: img("pix", "teto"),
        specs: [["Formato", "217 × 5950 × 8 mm"], ["Encaixe", "Macho-fêmea"], ["Garantia", "10 anos uso interno"]],
        colors: ["Pinus", "Carvalho", "Freijó", "Tauari", "Carvalho Grey", "Angelim"],
      },
      {
        name: "Painéis ripados",
        kind: "Slim e Wide",
        image: img("pix", "ripados"),
        specs: [["Slim", "122 × 12 mm"], ["Wide", "103 × 21 mm"], ["Altura", "2,85 m"], ["Garantia", "5 anos"]],
        colors: ["Orus", "Canis", "Lira"],
      },
      {
        name: "Alizares e passa-fios",
        kind: "Poliestireno de alto impacto",
        image: img("pix", "alizares"),
        specs: [["Linhas", "Lineare, Slim, Base, Essence, Decor e Nature"], ["Garantia", "5 anos"]],
        colors: ["Branco", "Preto", "Castanha", "Amêndoa", "Pecan", "Avelã"],
      },
    ],
  },
  {
    slug: "ruffino",
    name: "Ruffino",
    tagline: "Pisos, painéis ripados e rodapés",
    description:
      "Pioneira em pisos vinílicos no Brasil, com mais de 40 modelos em versões coladas e clicadas, e exclusividade do piso NGC, produzido na Alemanha.",
    highlights: ["+40 modelos", "Piso NGC alemão", "Rodapés que não estufam"],
    logo: { src: "/catalogos/logos/ruffino.png", width: 772, height: 712 },
    pdf: { href: "/catalogos/pdf/catalogo-ruffino.pdf", size: "9,2 MB" },
    lines: [
      {
        name: "Sofisticato",
        kind: "Vinílico · Colado e Click SPC",
        image: img("ruffino", "sofisticato"),
        specs: [["Colado", "17,78 × 121,92 cm · 2 mm"], ["Click SPC", "22,9 × 122 cm · 4,5 mm"], ["Garantia", "10 anos residencial"]],
        colors: ["Linheiro", "Sapucaia", "Nogueira", "Tauari", "Gergelim", "Acácia", "Cacau", "Baunilha", "Amoreira", "Carambola", "Marula", "Paineira", "Gênova", "Milão", "Veneza", "Turim"],
      },
      {
        name: "Nobile",
        kind: "Vinílico · Colado e Click SPC",
        image: img("ruffino", "nobile"),
        specs: [["Colado", "17,78 × 121,92 cm · 2 mm"], ["Click SPC", "22,9 × 122 cm · 5 mm"], ["Garantia", "10 anos residencial"]],
        colors: ["Salgueiro", "Faia", "Andiroba", "Plátano", "Figueira", "Baobá", "Amêndoa", "Damasco", "Cravo", "Sisal", "Curupixá", "Copaíba", "Verona", "Pisa", "Roma", "Nápoles"],
      },
      {
        name: "Bravo",
        kind: "Vinílico LVT · Colado 3 mm",
        image: img("ruffino", "bravo"),
        specs: [["Formato", "17,78 × 121,92 cm"], ["Uso", "Comercial pesado"], ["Garantia", "10 anos residencial e comercial"]],
        colors: ["Freijó Claro", "Angelim", "Macadâmia", "Amaranto", "Grevílea", "Embaúba"],
      },
      {
        name: "Studio",
        kind: "Placa vinílica · Colada",
        image: img("ruffino", "studio"),
        specs: [["Formatos", "45,72 cm e 91,44 cm"], ["Espessura", "2 e 3 mm"], ["Garantia", "Até 10 anos"]],
        colors: ["Lunar", "Chumbo", "Calacata", "Marmogris", "Concreto", "Cimento Queimado", "Griggio", "Grafite", "Titânio"],
      },
      {
        name: "NGC Naturale",
        kind: "Next-gen click · Fibras orgânicas",
        image: img("ruffino", "ngc"),
        specs: [["Formato", "19,5 × 128,8 cm"], ["Espessura", "7 mm (com manta XPS)"], ["Abrasão", "AC5"], ["Garantia", "20 anos residencial"]],
        colors: ["Alentejo", "Capadócia", "Savana", "Toscana"],
      },
      {
        name: "Rodapés Versatile",
        kind: "Poliestireno",
        image: img("ruffino", "versatile"),
        specs: [["Alturas", "3 a 20 cm"], ["Espessura", "15 mm e Slim 10 mm"], ["Barra", "2,4 m"], ["Garantia", "3 anos"]],
        colors: ["Branco frisado", "Branco liso", "Preto frisado", "Preto liso", "Cinza frisado"],
      },
      {
        name: "Painel ripado Splendore",
        kind: "Poliestireno",
        image: img("ruffino", "splendore"),
        specs: [["Largura", "12,2 cm"], ["Comprimento", "2,85 m"], ["Instalação", "Sem barrotes ou espaçadores"]],
        colors: ["Marupá", "Sucupira", "Pinus", "Branco", "Cumaru", "Cedro", "Jacarandá", "Eucalipto"],
      },
    ],
  },
  {
    slug: "quickstep",
    name: "Quick-Step",
    tagline: "Pisos laminados",
    description:
      "Projetado na Bélgica desde 1990 e produzido no Brasil desde 2012. Laminados com tecnologia HydroSeal de resistência à água e aparência natural de madeira.",
    highlights: ["Resistente à água", "Até 25 anos de garantia", "Classes AC4 e AC5"],
    logo: { src: "/catalogos/logos/quickstep.png", width: 900, height: 88 },
    pdf: { href: "/catalogos/pdf/catalogo-quickstep.pdf", size: "2,9 MB" },
    lines: [
      {
        name: "Impressive",
        kind: "Laminado · 8 mm",
        image: img("quickstep", "impressive"),
        specs: [["Formato", "1380 × 190 mm"], ["Classe", "AC4"], ["Caixa", "1,84 m²"], ["Garantia", "25 anos residencial"]],
        colors: ["Carvalho Clássico Natural", "Carvalho Marrom Acinzentado", "Carvalho Natural Soft", "Carvalho Cinza Suave", "Carvalho Bege Serrado", "Carvalho Suave Médio"],
      },
      {
        name: "Vision",
        kind: "Laminado · 8 mm",
        image: img("quickstep", "vision"),
        specs: [["Formato", "1800 × 215 mm"], ["Classe", "AC5"], ["Caixa", "2,71 m²"], ["Garantia", "25 anos residencial"]],
        colors: ["Carvalho Sereno", "Carvalho Andes", "Carvalho Cubano", "Carvalho Vitoriano", "Cumaru Tefé", "Carvalho Pastis", "Carvalho Agreste", "Carvalho Studio"],
      },
      {
        name: "Eligna Wide",
        kind: "Laminado · 8 mm",
        image: img("quickstep", "eligna-wide"),
        specs: [["Formato", "1355 × 190 mm"], ["Classe", "AC4"], ["Caixa", "2,06 m²"], ["Garantia", "25 anos residencial"]],
        colors: ["Carvalho Claro Serrado", "Carvalho Natural Serrado", "Carvalho Deserto Restaurado", "Carvalho Café Restaurado", "Castanheiro Antigo Restaurado", "Castanheiro Escuro Restaurado", "Castanheiro Natural Restaurado", "Carvalho Acinzentado com Cortes de Serra"],
      },
      {
        name: "Classic",
        kind: "Laminado · 8 mm",
        image: img("quickstep", "classic"),
        specs: [["Formato", "1200 × 190 mm"], ["Classe", "AC4"], ["Caixa", "2,05 m²"], ["Garantia", "25 anos residencial"]],
        colors: ["Carvalho Biscoito Marrom", "Carvalho Congelado Bege", "Teca Marrom Médio", "Carvalho Neblina Cinza"],
      },
      {
        name: "Smart",
        kind: "Laminado · 7 mm",
        image: img("quickstep", "smart"),
        specs: [["Formato", "1200 × 190 mm"], ["Classe", "AC4"], ["Caixa", "2,51 m²"], ["Garantia", "20 anos residencial"]],
        colors: ["Novo Carvalho Everest", "Carvalho Natural Envernizado", "Carvalho Natural Midnight", "Carvalho Escuro Midnight", "Pátina Cottage", "Carvalho Vanilla", "Carvalho Natural Havana", "Miracosa Jersey"],
      },
      {
        name: "Premiere+",
        kind: "Laminado · 7 mm",
        image: img("quickstep", "premiere"),
        specs: [["Formato", "1200 × 215 mm"], ["Classe", "AC4"], ["Caixa", "2,84 m²"], ["Garantia", "18 anos residencial"]],
        colors: ["Carvalho Sacramento", "New Pegasus", "Malta", "Ipê Ábano", "Mocha", "Essencial Oak"],
      },
    ],
  },
  {
    slug: "eucafloor",
    name: "Eucafloor",
    tagline: "Piso laminado",
    description:
      "Laminado melamínico flutuante de alta resistência, com proteção antibacteriana e rodapés e acessórios combinando com cada padrão.",
    highlights: ["Sistema Click ou colado", "Antibacteriano", "12 anos de garantia residencial"],
    logo: { src: "/catalogos/logos/eucafloor.png", width: 900, height: 224 },
    pdf: { href: "/catalogos/pdf/catalogo-eucafloor.pdf", size: "1 MB" },
    lines: [
      {
        name: "Prime & Prime Click",
        kind: "Laminado · 7 mm",
        image: img("eucafloor", "prime-click"),
        specs: [["Prime Click", "217 × 1357 mm · 2,36 m²"], ["Prime (colado)", "197 × 1357 mm · 2,14 m²"], ["Classe", "AC3"], ["Garantia", "12 anos residencial"]],
        colors: ["Kalahari", "Carvalho Coimbra", "Decapê", "Carvalho Canela", "Lâmina Amêndoa", "Italian Noce", "Carvalho Rústico", "Andorra New", "Nogueira Málaga", "Nogueira Natural", "Elmo Natural", "Noce Oro", "Castanho Terracota", "Valência", "Cacau", "Fresno Decapê New", "Carvalho Maiorca", "Carvalho New", "Cappuccino"],
      },
    ],
  },
];

export const galleryImages = [
  { src: "/assets/galeria/servico-04.jpg", alt: "Escada revestida com piso amadeirado e perfis de acabamento" },
  { src: "/assets/galeria/servico-14.jpg", alt: "Sala com piso escuro e rodapé branco" },
  { src: "/assets/galeria/servico-16.jpg", alt: "Sala de TV com piso amadeirado claro" },
  { src: "/assets/galeria/servico-06.jpg", alt: "Escritório com piso vinílico amadeirado" },
  { src: "/assets/galeria/servico-10.jpg", alt: "Sala ampla com piso cinza amadeirado e rodapé branco" },
  { src: "/assets/galeria/servico-01.jpg", alt: "Loja comercial com piso vinílico amadeirado" },
  { src: "/assets/galeria/servico-09.jpg", alt: "Quarto com piso vinílico cinza" },
  { src: "/assets/galeria/servico-12.jpg", alt: "Quarto com piso amadeirado claro" },
  { src: "/assets/galeria/servico-19.jpg", alt: "Recepção com piso vinílico acinzentado" },
  { src: "/assets/galeria/servico-08.jpg", alt: "Sala de estar com piso claro acinzentado" },
  { src: "/assets/galeria/servico-05.jpg", alt: "Sala de estar com piso amadeirado escuro" },
  { src: "/assets/galeria/servico-13.jpg", alt: "Ambiente com piso amadeirado rústico e rodapé preto" },
  { src: "/assets/galeria/servico-03.jpg", alt: "Sacada com piso amadeirado e rodapé escuro" },
  { src: "/assets/galeria/servico-02.jpg", alt: "Corredor com piso vinílico amadeirado" },
  { src: "/assets/galeria/servico-17.jpg", alt: "Ambiente com piso amadeirado médio recém-instalado" },
  { src: "/assets/galeria/servico-11.jpg", alt: "Ambiente com piso cinza e rodapé preto" },
  { src: "/assets/galeria/servico-18.jpg", alt: "Instalação de rodapé em sala com piso cinza" },
  { src: "/assets/galeria/servico-15.jpg", alt: "Sala de estar e jantar com piso amadeirado" },
  { src: "/assets/galeria/servico-07.jpg", alt: "Estúdio de estética com piso vinílico claro" },
];

export const reviews = [
  {
    name: "Vinícius Ferretti",
    badge: "Local Guide",
    text: "Conheci a empresa por indicação de um colega. Após a negociação, decidi fechar com eles, que assumiram toda a responsabilidade pelo processo: retirada dos rodapés antigos, remoção dos pisos soltos e danificados, instalação do piso novo e colocação dos novos rodapés. Deixei a chave do apartamento com a equipe e viajei por pouco mais de 15 dias. Quando voltei, encontrei tudo impecável: piso perfeitamente instalado, acabamento de alta qualidade e nenhum detalhe fora do lugar. Com base na minha experiência, você pode entregar a chave da sua casa a eles sem receio. Confiança total.",
  },
  {
    name: "Ana D",
    badge: "Local Guide",
    text: "Tinha um prazo apertado para fazer esse vinílico. Fechei na quarta-feira e a empresa instalou hoje, sexta-feira. Cumpriu o que prometeu: prazo, entrega e qualidade. Coisa rara hoje em dia! Detalhe: foi aplicado em cima do piso e sem tirar o rodapé. Pode confiar que o Marcos é homem de palavra. Recomendo!",
  },
  {
    name: "Josué",
    text: "Nossa experiência com a empresa Pisos de Luxo do Marcos foi excelente. Atendimento de qualidade, pontualidade, explica todos os detalhes passando confiança e transparência em cada etapa. Equipe da instalação são ágeis e muito caprichosos. Então, gente, se você procura preço justo e qualidade, pode procurar a Pisos de Luxo, que é benção! Recomendo!",
  },
  {
    name: "Dorotea Fumagalli",
    text: "Foi tudo muito rápido: vi uma publicação no Instagram e me interessei pelo produto. O Marcos veio na minha casa e fechamos o negócio em apenas 1 dia. O que era um sonho muito antigo se tornou realidade. Ficou muitíssimo lindo, qualidade nota mil, a colocação ficou perfeita e os rodapés fizeram a diferença. O preço foi ótimo e ainda ganhamos um amigo. Marcos, você está de parabéns!",
  },
  {
    name: "Priscila Faria",
    text: "Amei a cor do meu piso. Nivelaram o chão que estava todo fora e cheio de imperfeições. Acabamento ficou show de bola. Pra quem é chata e exigente como eu, vai aprovar! Marcos, um ótimo atendimento desde o início até o fim. Os meninos que instalaram também super educados e compreensivos.",
  },
  {
    name: "Elaine Felix",
    text: "Como já diz o nome, “Pisos de Luxo”. Sempre tive vontade de fazer o piso, mas nunca tive coragem, e com a visita do Marcos, que me passou muita segurança, tive a certeza de que seria com eles que daria certo. A instalação foi rápida e muito bem feita, os meninos que colocaram o piso são ótimos e de uma responsabilidade incrível.",
  },
  {
    name: "Andrea Zweifel",
    text: "Contratei a empresa para colocar os rodapés numa parede de drywall que fiz no meu apartamento. O agendamento foi super rápido, o funcionário chegou na hora marcada, executou o serviço com exatidão e deixou tudo limpo e organizado. Adorei o serviço, super indico! Nota 10.",
  },
  {
    name: "Jean Lucas",
    text: "Serviço e atendimento excelentes! Desde o primeiro contato até a entrega do serviço, tudo foi realizado com muita cordialidade, atenção e dedicação. O serviço foi entregue dentro do prazo estabelecido. Parabéns pelo profissionalismo!",
  },
  {
    name: "Neusa Custodio",
    text: "Parabéns, seu trabalho foi de primeira! A instalação foi rápida e perfeita! Sem nada a reclamar, mão de obra qualificada e material de primeira. Indico com certeza!",
  },
  {
    name: "Jean Batista",
    text: "Uma das melhores empresas com quem já tive o prazer de trabalhar, tanto no atendimento quanto na qualidade do material, da obra e no pós-venda. Só agradecer o Marcos e equipe, nota 10. Pisos de Luxo, a melhor!",
  },
  {
    name: "Marcelo de Souza",
    text: "Super recomendo. Muito bom o atendimento, materiais de qualidade e equipe muito prestativa.",
  },
  {
    name: "Clarice Motta",
    text: "Ótimo serviço, qualidade, compromisso com o prazo e mão de obra excelente.",
  },
];
