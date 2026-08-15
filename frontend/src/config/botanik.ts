export type Product = {
  name: string;
  category: string;
  price: string;
  rating: string;
  reviews: string;
  image: string;
  alt: string;
  badge?: string;
  badgeClass?: "badge-gold" | "badge-green";
};

export const products: Product[] = [
  {
    name: "Beurre Karité & Hibiscus",
    category: "Hydratation",
    price: "14 500 FCFA",
    rating: "★★★★★",
    reviews: "214",
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=600&auto=format&fit=crop",
    alt: "Beurre karité hibiscus",
    badge: "Best-seller",
    badgeClass: "badge-gold",
  },
  {
    name: "Huile de Croissance Moringa",
    category: "Traitement",
    price: "11 000 FCFA",
    rating: "★★★★★",
    reviews: "178",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
    alt: "Huile moringa",
  },
  {
    name: "Masque Profond au Baobab",
    category: "Soin profond",
    price: "16 500 FCFA",
    rating: "★★★★☆",
    reviews: "96",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop",
    alt: "Masque baobab",
    badge: "Nouveau",
    badgeClass: "badge-green",
  },
  {
    name: "Spray Démêlant Aloe Vera",
    category: "Entretien",
    price: "8 500 FCFA",
    rating: "★★★★★",
    reviews: "302",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop",
    alt: "Spray démêlant",
  },
  {
    name: "Shampoing Doux sans Sulfate",
    category: "Entretien",
    price: "9 000 FCFA",
    rating: "★★★★★",
    reviews: "189",
    image:
      "https://images.unsplash.com/photo-1585232351009-aa87416fca90?q=80&w=600&auto=format&fit=crop",
    alt: "Shampoing sans sulfate",
  },
  {
    name: "Rituel Complet Botani'K Afro",
    category: "Coffret",
    price: "32 000 FCFA",
    rating: "★★★★★",
    reviews: "87",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop",
    alt: "Coffret rituel complet",
    badge: "Coffret",
    badgeClass: "badge-gold",
  },
];

export const homeProducts = products.slice(0, 4);

export type Service = {
  title: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  alt: string;
  badgeClass: "badge-gold" | "badge-green" | "badge-outline";
};

export const services: Service[] = [
  {
    title: "Diagnostic capillaire",
    category: "Diagnostic",
    description:
      "Analyse complète de la densité, la porosité et la courbe de boucle pour établir votre rituel sur-mesure.",
    duration: "30 min",
    price: "Offert",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=700&auto=format&fit=crop",
    alt: "Diagnostic capillaire",
    badgeClass: "badge-gold",
  },
  {
    title: "Hydratation intense",
    category: "Hydratation",
    description:
      "Un bain d'hydratation profonde au karité et à l'aloe vera pour redonner souplesse et éclat.",
    duration: "45 min",
    price: "15 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=700&auto=format&fit=crop",
    alt: "Soin hydratant",
    badgeClass: "badge-green",
  },
  {
    title: "Masque profond au baobab",
    category: "Soins profonds",
    description:
      "Traitement nourrissant en profondeur pour réparer les longueurs fragilisées et cassantes.",
    duration: "1h",
    price: "18 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=700&auto=format&fit=crop",
    alt: "Soin profond",
    badgeClass: "badge-green",
  },
  {
    title: "Cure anti-casse",
    category: "Traitements",
    description:
      "Programme ciblé de 3 séances pour fortifier la fibre et stopper la casse aux pointes.",
    duration: "1h15",
    price: "22 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=700&auto=format&fit=crop",
    alt: "Traitement anti-casse",
    badgeClass: "badge-outline",
  },
  {
    title: "Massage du cuir chevelu",
    category: "Massage",
    description:
      "Un rituel relaxant à l'huile de moringa qui stimule la microcirculation et la pousse.",
    duration: "30 min",
    price: "12 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=700&auto=format&fit=crop",
    alt: "Massage du cuir chevelu",
    badgeClass: "badge-gold",
  },
  {
    title: "Coiffure protectrice",
    category: "Coiffure protectrice",
    description:
      "Tresses, twists ou vanilles réalisées sans tension pour préserver la santé du cuir chevelu.",
    duration: "1h30",
    price: "25 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=700&auto=format&fit=crop",
    alt: "Coiffure protectrice",
    badgeClass: "badge-green",
  },
];

export const appointmentServices = [
  { name: "Diagnostic capillaire", duration: "30 min", price: "Offert" },
  { name: "Hydratation intense", duration: "45 min", price: "15 000 FCFA" },
  { name: "Masque profond au baobab", duration: "1h", price: "18 000 FCFA" },
  { name: "Massage du cuir chevelu", duration: "30 min", price: "12 000 FCFA" },
  { name: "Coiffure protectrice", duration: "1h30", price: "25 000 FCFA" },
  { name: "Cure anti-casse", duration: "1h15", price: "22 000 FCFA" },
];

export const homeCareRows = [
  { number: "01", title: "Diagnostic capillaire", meta: "30 min · Offert au 1er RDV" },
  { number: "02", title: "Hydratation intense", meta: "45 min · 15 000 FCFA" },
  { number: "03", title: "Massage du cuir chevelu", meta: "30 min · 12 000 FCFA" },
  { number: "04", title: "Coiffure protectrice", meta: "1h30 · 25 000 FCFA" },
];

export const testimonials = [
  {
    quote:
      "Après des années à lutter contre la casse, le diagnostic m'a enfin fait comprendre ma porosité. Mes cheveux n'ont jamais été aussi souples.",
    name: "Aïcha M.",
    meta: "Cliente depuis 2 ans",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "La prise de rendez-vous en ligne est bluffante de simplicité. Réservé en moins d'une minute depuis mon téléphone.",
    name: "Sandrine K.",
    meta: "Cliente depuis 8 mois",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Un accueil chaleureux, des produits qui sentent divinement bon et des résultats visibles dès la première séance.",
    name: "Grace N.",
    meta: "Cliente depuis 1 an",
    image:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=200&auto=format&fit=crop",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: "general" | "produits" | "rdv" | "livraison";
  title: string;
  items: FaqItem[];
};

export const homeFaqs: FaqItem[] = [
  {
    question: "Comment se déroule le premier rendez-vous ?",
    answer:
      "Il commence toujours par un diagnostic capillaire offert : analyse de la densité, de la porosité et de l'état général de votre cuir chevelu, afin de vous proposer un rituel adapté.",
  },
  {
    question: "Les produits conviennent-ils à toutes les textures ?",
    answer:
      "Oui. Chaque gamme est déclinée pour les boucles lâches, frisées et crépues. Notre équipe vous oriente vers les formules les plus adaptées lors du diagnostic.",
  },
  {
    question: "Puis-je annuler ou déplacer mon rendez-vous ?",
    answer:
      "Vous pouvez modifier ou annuler gratuitement jusqu'à 24h avant votre créneau, directement depuis l'email de confirmation.",
  },
  {
    question: "Livrez-vous en dehors de Yaoundé ?",
    answer:
      "Oui, nous livrons dans tout le Cameroun sous 48 à 72h, et à l'international sous 5 à 10 jours ouvrés.",
  },
];

export const faqGroups: FaqGroup[] = [
  {
    id: "general",
    title: "Général",
    items: [
      homeFaqs[0],
      {
        question: "Les produits conviennent-ils à toutes les textures ?",
        answer:
          "Oui. Chaque gamme est déclinée pour les boucles lâches, frisées et crépues (types 3A à 4C). Notre équipe vous oriente vers les formules les plus adaptées lors du diagnostic.",
      },
      {
        question: "Proposez-vous des soins pour enfants ?",
        answer:
          "Oui, à partir de 6 ans, avec des formules douces spécifiques et un temps de séance réduit adapté aux plus jeunes.",
      },
    ],
  },
  {
    id: "produits",
    title: "Produits",
    items: [
      {
        question: "Les produits sont-ils sans sulfates ni silicones ?",
        answer:
          "Oui, l'ensemble de notre gamme est formulé sans sulfates, sans silicones et sans parabènes, avec des listes d'ingrédients courtes et transparentes.",
      },
      {
        question: "Comment conserver mes produits capillaires ?",
        answer:
          "À température ambiante, à l'abri de la lumière directe. Une fois ouverts, nos beurres et masques se conservent 8 à 12 mois.",
      },
      {
        question: "Puis-je retourner un produit non adapté ?",
        answer:
          "Oui, sous 14 jours si le produit est entamé à moins de 20% et accompagné de votre preuve d'achat.",
      },
    ],
  },
  {
    id: "rdv",
    title: "Rendez-vous",
    items: [
      {
        question: "Puis-je annuler ou déplacer mon rendez-vous ?",
        answer:
          "Vous pouvez modifier ou annuler gratuitement jusqu'à 24h avant votre créneau, directement depuis l'email de confirmation ou par téléphone.",
      },
      {
        question: "Combien de temps dure un rendez-vous ?",
        answer:
          "Entre 30 minutes (diagnostic, massage) et 1h30 (coiffure protectrice), selon le soin choisi. La durée exacte est indiquée à chaque étape de la réservation.",
      },
      {
        question: "Que se passe-t-il si j'arrive en retard ?",
        answer:
          "Au-delà de 15 minutes de retard, votre créneau peut être raccourci ou réattribué afin de ne pas retarder les rendez-vous suivants.",
      },
    ],
  },
  {
    id: "livraison",
    title: "Livraison & paiement",
    items: [
      homeFaqs[3],
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer:
          "Orange Money, MTN Mobile Money, carte bancaire et paiement en institut. Le paiement en ligne est sécurisé de bout en bout.",
      },
      {
        question: "Les frais de livraison sont-ils inclus ?",
        answer:
          "La livraison est offerte dès 25 000 FCFA d'achat à Yaoundé, et à partir de 40 000 FCFA pour le reste du pays.",
      },
    ],
  },
];

export const timeline = [
  {
    year: "2014",
    title: "Une formulation dans une cuisine",
    text: "Les premiers beurres capillaires sont mélangés à la main pour des proches, faute d'alternative satisfaisante sur le marché.",
  },
  {
    year: "2018",
    title: "Ouverture du premier institut",
    text: "Botani'K Afro ouvre son premier salon à Kodengui, avec une équipe de spécialistes des cheveux crépus et frisés.",
  },
  {
    year: "2022",
    title: "Lancement de la gamme complète",
    text: "60 références voient le jour, toutes formulées et fabriquées localement avec des coopératives camerounaises.",
  },
  {
    year: "2026",
    title: "4 800 client·es accompagné·es",
    text: "Botani'K Afro devient une référence régionale du soin capillaire naturel, en institut comme en ligne.",
  },
];

export const team = [
  {
    name: "Eugénie Bouobda",
    role: "Fondatrice & formulatrice",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
    alt: "Fondatrice",
  },
  // {
  //   name: "Aïcha Foning",
  //   role: "Spécialiste diagnostic",
  //   image:
  //     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  //   alt: "Spécialiste capillaire",
  // },
  // {
  //   name: "Grace Nkeng",
  //   role: "Coiffure protectrice",
  //   image:
  //     "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=400&auto=format&fit=crop",
  //   alt: "Coiffeuse",
  // },
  // {
  //   name: "Sandrine Kotto",
  //   role: "Responsable institut",
  //   image:
  //     "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
  //   alt: "Responsable institut",
  // },
];
