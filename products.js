const products = [
  {
    id: 1,
    name: "PRETINHO AZUL BLACK BLUE 500ML LANNE CAR",
    category: "Pneus e Acabamento",
    short_desc: "Pretinho azul para pneus com brilho molhado e duradouro.",
    price: "32,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lzhnb3v85vs56a.webp",
    featured: true,
    whatsapp_text: "PRETINHO AZUL BLACK BLUE 500ML LANNE CAR",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 2,
    name: "Pretinho Azul - Black Blue - 1L",
    category: "Pneus e Acabamento",
    short_desc: "Embalagem econômica de 1 litro para mais rendimento.",
    price: "59,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m0smjzfn00bkba.webp",
    featured: false,
    whatsapp_text: "Pretinho Azul - Black Blue - 1L",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 3,
    name: "PRETINHO - TIRE BLACK PREMIUM GEL",
    category: "Pneus e Acabamento",
    short_desc: "Gel premium, não atrai poeira e alta fixação.",
    price: "25,00",
    image: "https://scontent.fsdu4-1.fna.fbcdn.net/v/t1.15752-9/659612434_1363298505831274_248066830890893413_n.png?stp=dst-png_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lJ0K4jxLpbUQ7kNvwGKAV8s&_nc_oc=Adr4qsd-eJ_nd5612-dvdGt38mbg7GiIn2gV68GBBC-KskR7YMU4x7pf-IxdL1PzFJ-vGSGBvOZn3IGdoOuXYDeg&_nc_ad=z-m&_nc_cid=1295&_nc_zt=23&_nc_ht=scontent.fsdu4-1.fna&_nc_ss=7a32e&oh=03_Q7cD5AHVo0BMD-bb6iwL-TVfcLeu8TUGIATMUZKzPj2OgoufQw&oe=69F74624",
    featured: true,
    whatsapp_text: "PRETINHO - TIRE BLACK PREMIUM GEL",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 4,
    name: "LV2 - limpa alumínio e carrocerias - 5L",
    category: "Desengraxantes",
    short_desc: "Para limpeza pesada de alumínio, chassis e rodas.",
    price: "133,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lykspbm5176d90.webp",
    featured: false,
    whatsapp_text: "LV2 - limpa alumínio e carrocerias - 5L",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 5,
    name: "LV2 - limpa alumínio e carrocerias - 1L",
    category: "Desengraxantes",
    short_desc: "Limpa alumínio concentrado em embalagem de 1L.",
    price: "60,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lykspbm4zs2tc1.webp",
    featured: false,
    whatsapp_text: "LV2 - limpa alumínio e carrocerias - 1L",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 6,
    name: "SP 200 - Shampoo Automotivo",
    category: "Shampoo",
    short_desc: "Shampoo neutro, super concentrado e com alto poder de espuma.",
    price: "50,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbduj8cqyqvjb5.webp",
    featured: true,
    whatsapp_text: "SP 200 - Shampoo Automotivo",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 7,
    name: "Lava Auto SP200 - LANNECAR - 1 litro",
    category: "Shampoo",
    short_desc: "O shampoo queridinho em versão 1 litro.",
    price: "38,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lkb5qnjonluv60.webp",
    featured: false,
    whatsapp_text: "Lava Auto SP200 - LANNECAR - 1 litro",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 8,
    name: "PRO APC - ULTRA AÇÃO - LANNECAR",
    category: "Outros",
    short_desc: "Multilimpador universal inteligente para diversas superfícies.",
    price: "26,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhe6lat9yz06a8.webp",
    featured: true,
    whatsapp_text: "PRO APC - ULTRA AÇÃO - LANNECAR",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 9,
    name: "Limpa Vidros - LanneCar - 500ml",
    category: "Vidros",
    short_desc: "Limpeza sem manchas, secagem rápida e visão cristalina.",
    price: "28,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-li7wrzn0lj5hd9.webp",
    featured: false,
    whatsapp_text: "Limpa Vidros - LanneCar - 500ml",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 10,
    name: "ULTRA PLASTIC - LANNE CAR",
    category: "Couro e Plásticos",
    short_desc: "Renovador de plásticos externos com proteção UV.",
    price: "32,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhe6lat9tcqec5.webp",
    featured: true,
    whatsapp_text: "ULTRA PLASTIC - LANNE CAR",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 11,
    name: "MAX PROTECT - FINALIZADOR 1 L",
    category: "Tratamentos",
    short_desc: "Selante e finalizador que promove brilho extremo e proteção prolongada.",
    price: "36,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5iwecejqh6tfe.webp",
    featured: true,
    whatsapp_text: "MAX PROTECT - FINALIZADOR 1 L",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 12,
    name: "LANNE BLACK - ODORIZANTE - LANNECAR",
    category: "Ar Condicionado",
    short_desc: "Aroma sofisticado Lanne Black para o interior do veículo.",
    price: "45,00",
    image: "https://scontent.fsdu15-1.fna.fbcdn.net/v/t1.15752-9/658875145_1494942972189259_8452870181258318908_n.png?stp=dst-png_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=8s3B7ZFJooQQ7kNvwFS8w9n&_nc_oc=Adpg_m5pIrt2xmqEs0NuUSoTrUspPuRvskQ8_nyx8XC1C-vZ9RNyRQ2GSLRjAqUiI9F0dRnJepS4ufKqm3BBzJlw&_nc_ad=z-m&_nc_cid=1295&_nc_zt=23&_nc_ht=scontent.fsdu15-1.fna&_nc_ss=7a32e&oh=03_Q7cD5AFNg8TaXiAKAF6fN-iQylhEpGU12L_3eGGnAVOVvoj3Ww&oe=69F72697",
    featured: true,
    whatsapp_text: "LANNE BLACK - ODORIZANTE - LANNECAR",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 13,
    name: "Carro Novo - ODORIZANTE - LANNECAR",
    category: "Ar Condicionado",
    short_desc: "Aquele cheirinho clássico e agradável de carro zero km.",
    price: "42,00",
    image: "https://scontent.fsdu15-1.fna.fbcdn.net/v/t1.15752-9/662448492_935216329246503_7759098689991276114_n.png?stp=dst-png_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ORPeVvo_8dIQ7kNvwGvVmP5&_nc_oc=AdrAIVhWhkZUC-L9enumG7lwXT2gx3U1dw3IFwsE-vZF5uO8NrXvuZNU40lZcLN1eurmn8ZA3CcWEhF0t7d9V6v4&_nc_ad=z-m&_nc_cid=1295&_nc_zt=23&_nc_ht=scontent.fsdu15-1.fna&_nc_ss=7a32e&oh=03_Q7cD5AFIQTDCmELjLVUIVkPUZSbhn1Bj2UktX1Q0eQQ-UD7-rg&oe=69F71CA6",
    featured: false,
    whatsapp_text: "Carro Novo - ODORIZANTE - LANNECAR",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 14,
    name: "VERNIZ DE MOTOR 1 LITRO",
    category: "Motor",
    short_desc: "Protege, dá brilho e evita ressecamento das partes do motor.",
    price: "40,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m51laei757zm0c.webp",
    featured: true,
    whatsapp_text: "VERNIZ DE MOTOR 1 LITRO",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 15,
    name: "PROT PASTA DESENGRAXANTE 400G",
    category: "Desengraxantes",
    short_desc: "Pasta com esfoliante para limpar e hidratar as mãos após serviços pesados.",
    price: "28,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbcmi1bfi8i77d.webp   ",
    featured: false,
    whatsapp_text: "PROT PASTA DESENGRAXANTE 400G",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 16,
    name: "PROT PASTA DESENGRAXANTE 3KG",
    category: "Desengraxantes",
    short_desc: "Pasta desengraxante versão rendimento 3kg.",
    price: "80,75",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbdudw160hyxbe@resize_w450_nl.webp",
    featured: false,
    whatsapp_text: "PROT PASTA DESENGRAXANTE 3KG",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 17,
    name: "Hidratante de Couro - Lanne Car - 500ml",
    category: "Couro e Plásticos",
    short_desc: "Devolve maciez, aroma de couro e protege contra rachaduras.",
    price: "36,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-li7q2o0e0a7k67.webp",
    featured: true,
    whatsapp_text: "Hidratante de Couro - Lanne Car - 500ml",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 18,
    name: "Lanne Mol - Detergente Automotivo - 500ml",
    category: "Outros",
    short_desc: "Detergente de grande poder desengraxante para pré-lavagem.",
    price: "30,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-li7q2o0dxh2o04.webp",
    featured: false,
    whatsapp_text: "Lanne Mol - Detergente Automotivo - 500ml",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 19,
    name: "Cera LN-10X BLACK (PREMIUM) LANNE CAR",
    category: "Ceras",
    short_desc: "Cera premium para veículos escuros, disfarça micro-riscos e garante brilho espelhado.",
    price: "56,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-li7q2o0e4hwwbd@resize_w450_nl.webp",
    featured: true,
    whatsapp_text: "Cera LN-10X BLACK (PREMIUM) LANNE CAR",
    payment_link: "https://pag.ae/81Eo2Fquo"
  },
  {
    id: 20,
    name: "Bike Mol - Detergente Automotivo - LANNE CAR",
    category: "Outros",
    short_desc: "Detergente formulado especialmente para bicicletas e motocicletas.",
    price: "28,00",
    image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-li7q2o0e7b1s29@resize_w450_nl.webp",
    featured: false,
    whatsapp_text: "Bike Mol - Detergente Automotivo - LANNE CAR",
    payment_link: "https://pag.ae/81Eo2Fquo"
  }
];

const categories = [
  "Todos",
  "Shampoo",
  "Abrilhantadores",
  "Desengraxantes",
  "Tratamentos",
  "Aditivos e Lubrificantes",
  "Ar Condicionado",
  "Ceras",
  "Pneus e Acabamento",
  "Vidros",
  "Couro e Plásticos",
  "Motor",
  "Acessórios",
  "Outros"
];

// Exporting to window/global if necessary, or just leaving as globals
window.lanneProducts = products;
window.lanneCategories = categories;
