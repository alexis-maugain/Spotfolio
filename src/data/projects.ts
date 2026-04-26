import { Project, Playlist } from '../types';


export const projects: Project[] = [


    {
    id: '1',
    title: 'PokeDuel',
    category: 'UX/UI Design',
    cover: './assets/projets/pokeduel/mockup.webp',
    images: [
      './assets/projets/pokeduel/accueil.webp',
      './assets/projets/pokeduel/Boutique.webp',
      './assets/projets/pokeduel/connexion.webp',
      './assets/projets/pokeduel/Profil.webp',
      './assets/projets/pokeduel/map.webp',
      './assets/projets/pokeduel/message.webp',

    ],
    date: '2023',
    tools: ['Figma'],
    description: 'Il nous a été demandé de concevoir un concept d\'application mobile dans l\'univers de notre choix. L\'application devait comporter au moins 5 écrans fonctionnels, incluant des éléments interactifs tels que des boutons, des formulaires et des animations. Le design devait être cohérent avec l\'univers choisi et offrir une expérience utilisateur fluide et intuitive.',
    problem: 'Offrir aux personnages de l\'univers Pokémon une plateforme mobile immersive et engageante, permettant aux utilisateurs de vivre des expériences variées (inscription, boutique, combat, messagerie) tout en respectant l\'esthétique et l\'ambiance de cet univers riche.',
    process: 'Recherche sur l\'univers Pokémon et analyse des applications existantes, définition des parcours utilisateurs clés (inscription, boutique, combat, messagerie), création de wireframes puis de maquettes haute fidélité sur Figma, prototypage interactif avec animations et micro-interactions, tests utilisateurs et itérations.',
    color: '#059669'
  },

  {
    id: '2',
    title: 'vr',
    category: 'Developpement Web & 3D',
    cover: './assets/projets/vr/vr.webp',
    images: [
      './assets/projets/vr/vr.webp',
    ],
    date: '2025',
    tools: ['HTML', 'A-Frame', 'Poly.pizza', 'Sketchfab'],
    description: 'Il nous a été demandé de concevoir une expérience de réalité virtuelle accessible via un navigateur web dans le style graphique d\'un artiste. Le projet visait à démontrer les possibilités offertes par la VR sur le web.',
    problem: 'La réalité virtuelle reste souvent inaccessible au grand public, nécessitant des équipements coûteux. Le défi était de créer une expérience VR immersive directement dans le navigateur, tout en respectant un style graphique artistique cohérent et en maintenant de bonnes performances.',
    process: 'Analyse du style artistique de référence, recherche et sélection de modèles 3D sur Poly.pizza et Sketchfab, mise en place de la scène VR avec A-Frame en HTML, optimisation des assets 3D pour le web, tests sur différents navigateurs et appareils, déploiement sur GitHub Pages.',
    color: '#d53d3dff',
    protoLink: 'https://alexis-maugain.github.io/VR/'
  },

  {
    id: '3',
    title: 'Olive Oil',
    category: 'UX/UI Design',
    cover: './assets/projets/olive-oil/mockup.webp',
    images: [
      './assets/projets/olive-oil/hero.webp',
      './assets/projets/olive-oil/Produit.webp',
      './assets/projets/olive-oil/valeurs.webp',
      './assets/projets/olive-oil/contact.webp',
    ],
    date: '2023',
    tools: ['Figma'],
    description: 'Olive Oil, marque d\'huile d\'olive 100 % italienne, lance sa nouvelle huile premium avec des ingrédients haut de gamme. Pour accompagner ce lancement, ils souhaitent créer un site internet reflétant leur encrage territorial ainsi que l\'univers prestigieux de la marque, destiné à une clientèle exigeante. Le design du site devra être élégant, moderne et raffiné, tout en respectant l\'identité visuelle existante (couleurs, typographie, logo).Le contenu présentera de manière claire et originale la marque, ses valeurs et son produit. L\'expérience utilisateur devra inciter à l’achat, tout en véhiculant une ambiance exclusive et sophistiquée.',
    problem: 'La marque Olive Oil souhaitait lancer un nouveau produit premium mais ne disposait pas d\'une vitrine digitale à la hauteur de son positionnement haut de gamme. Le site devait transmettre une image de luxe et d\'authenticité italienne tout en incitant à l\'achat.',
    process: 'Analyse de l\'identité visuelle existante et du positionnement de la marque, benchmark de sites premium dans le secteur alimentaire, conception d\'une one page élégante sur Figma avec une hiérarchie visuelle travaillée, choix typographiques et chromatiques raffinés, mise en avant du produit et des valeurs de la marque.',
    color: '#ff1fe5ff'
  },


  {
    id: '4',
    title: 'RocamaTour',
    category: 'UX/UI Design',
    cover: './assets/projets/rocamatour/cover.webp',
    images: [
      './assets/projets/rocamatour/hero.webp',
      './assets/projets/rocamatour/post1.webp',
      './assets/projets/rocamatour/post2.webp',
      './assets/projets/rocamatour/motion_rocamatour.mp4',

    ],
    date: '2025',
    tools: ['Figma', 'After effects', 'Premiere Pro'],
    description: 'Création d\'un concept évènement inventé par nous même qui propose un mélange entre tourisme et course à pied. Création d\'une identité visuelle, d\'un site web horizontal et d\'une campagne de communication pour promouvoir l\'évènement.',
    problem: 'Nous voulions promouvoir le tourisme dans la ville de Rocamadour à travers un concept événementiel inédit mêlant tourisme et course à pied. Il fallait créer de toute pièce un univers graphique attractif, un site web capable de susciter l\'intérêt et l\'inscription des participants, ainsi qu\'une campagne de communication engageante pour faire connaître l\'événement.',
    process: 'Brainstorming et définition du concept événementiel, création de l\'identité visuelle complète, conception des maquettes du site sur Figma, réalisation d\'une vidéo motion design promotionnelle sur After Effects, création de visuels pour les réseaux sociaux, prototypage interactif.',
    color: 'rgb(2, 97, 57)',
    protoLink: 'https://www.figma.com/proto/gzxeJIjAKo8HQa4AF5Xnu9/Direction-artistique-2025--Copy-?node-id=2001-1283&t=r31y5t29LP4bxCwX-0&scaling=scale-down&content-scaling=fixed&page-id=69%3A8&starting-point-node-id=178%3A82'
  },

  {
    id: '5',
    title: 'Lebonsurfeur',
    category: 'UX/UI Design',
    cover: './assets/projets/subway-surfer/cover.webp',
    images: [
      './assets/projets/subway-surfer/jetpack.webp',
      './assets/projets/subway-surfer/accueil.webp',
      './assets/projets/subway-surfer/logo.webp',
      './assets/projets/subway-surfer/objets3D_1.webp',
      './assets/projets/subway-surfer/objets3D_2.webp',
      './assets/projets/subway-surfer/storyboard.webp',
      './assets/projets/subway-surfer/skate-story.mp4',


    ],
    date: '2024',
    tools: ['After Effects', 'Premiere Pro','WordPress', 'Figma', 'Blender'],
    description: 'Il nous a été demandé de créer, développer et promouvoir un site web e-commerce inspiré des plateformes comme Le Bon Coin, Vinted, … adapté à l\'univers d\'un jeu vidéo emblématique de notre choix (par exemple : Mario, Zelda, etc.).',
    problem: 'Concevoir un site e-commerce crédible et cohérent dans l\'univers de Subway Surfer, tout en intégrant des fonctionnalités de vente en ligne classiques. Le défi était d\'allier l\'aspect ludique du jeu avec une expérience d\'achat fonctionnelle et intuitive.',
    process: 'Choix de l\'univers Subway Surfer, conception des maquettes UX/UI sur Figma, modélisation d\'objets 3D sur Blender pour enrichir le site, développement du site sur WordPress, création de vidéos promotionnelles avec After Effects et Premiere Pro, réalisation du storyboard et production du contenu visuel.',
    color: '#F59E0B'
  },

  {
    id: '6',
    title: 'Livre de cuisine',
    category: 'Print Design',
    cover: './assets/projets/livre-recette/mockup.webp',
    images: [
      './assets/projets/livre-recette/couverture.webp',
      './assets/projets/livre-recette/page-recette.webp',
      './assets/projets/livre-recette/Sommaire.webp',
    ],
    date: '2025',
    tools: ['Indesign'],
    description: '52 semaines gourmandes » a pour vocation d’accompagner les étudiants tout au long de l’année avec des recettes simples, économiques et équilibrées',
    problem: 'Besoin de créer un livre de cuisine attractif et structuré pour valoriser une collection de recettes. La mise en page devait être claire, esthétique et faciliter la lecture des étapes de préparation. Nous étions chargés de concevoir la charte éditoriale de la collection. Dans un premier temps, nous avons travailler en groupes de trois afin d’élaborer la maquette « master ». Nous avons ensuite réaliser un livret personnel en suivant cette maquette.',
    process: 'Définition de la structure éditoriale et du concept graphique, création d\'une charte graphique cohérente sur InDesign, mise en page des recettes avec hiérarchie visuelle, sélection et intégration des visuels, optimisation pour l\'impression.',
    color: '#9333EA'
  },

  {
    id: '7',
    title: 'Nuit du Code',
    category: 'UX/UI Design',
    cover: './assets/projets/nuitcode/nuitcode.webp',
    images: [
  
      './assets/projets/nuitcode/gameplay.webp',
      './assets/projets/nuitcode/hero.webp',
      './assets/projets/nuitcode/intro.webp',
      './assets/projets/nuitcode/touches.webp',
      './assets/projets/nuitcode/trophées.webp',
      './assets/projets/nuitcode/Affiche.webp',
    ],
    date: '2025',
    tools: ['PSPlay.js', 'HTML', 'CSS', 'Tailwind', 'JAVASCRIPT', 'Figma'],
    description: 'Un jeu 2D developper en javascrit avec P5Play.js qui sert à faire de la prévention contre la pullution digital. Dans ce jeu, on incarne Zippy une petite souris qui doit lutter contre les malwares et mails frauduleux. (Projet gagnant de la Nuit du Code 2025)',
    problem: 'La pollution numérique est un sujet peu connu du grand public, notamment chez les jeunes. Il fallait trouver un moyen ludique et engageant de sensibiliser à cette problématique, tout en rendant le message accessible et mémorable à travers le jeu vidéo.',
    process: 'Conception du game design et du personnage Zippy, création des assets graphiques et de l\'affiche promotionnelle sur Figma, développement du jeu en JavaScript avec la librairie P5Play.js, intégration du HTML/CSS avec Tailwind, tests de gameplay et équilibrage des niveaux, création du site vitrine.',
    color: '#EC4899',
    protoLink: 'https://alexis-maugain.github.io/ZippyTheMouse/'
  },
  {
    id: '8',
    title: 'Danniel Wellington',
    category: 'UX/UI Design',
    cover: './assets/projets/danniel-wellington/Cover.webp',
    images: [
      './assets/projets/danniel-wellington/pages.webp',
      './assets/projets/danniel-wellington/montres.webp',
      './assets/projets/danniel-wellington/avis.webp',
      './assets/projets/danniel-wellington/footer.webp',

    ],
    date: '2024',
    tools: ['Figma', 'WordPress'],
    description: 'Il nous a été demandé par binômes de concevoir et de développer des parcours utilisateurs au sein d\'un système d\'information, en combinant le développement web, le design d\'expérience et la gestion de projet. Nous devions créer un site WordPress de type "click & collect" pour une enseigne choisie en gardant la même charte graphique.',
    problem: 'Daniel Wellington ne disposait pas d\'un système de click & collect en ligne. Il fallait concevoir un parcours utilisateur complet permettant la consultation du catalogue, la sélection de produits et la réservation en magasin, tout en respectant fidèlement la charte graphique premium de la marque.',
    process: 'Analyse de la charte graphique existante de Daniel Wellington, conception des parcours utilisateurs et wireframes sur Figma, création des maquettes haute fidélité, développement et intégration sur WordPress avec les fonctionnalités click & collect, gestion de projet en binôme, tests et livraison.',
    color: '#06B6D4'
  },
  {
    id: '9',
    title: 'Le Bar\'Bare',
    category: 'UX/UI Design',
    cover: './assets/projets/lebarbare/logo.webp',
    images: [
      './assets/projets/lebarbare/communication.webp',
      './assets/projets/lebarbare/concept.webp',
      './assets/projets/lebarbare/logo.webp',
      './assets/projets/lebarbare/couleurs.webp',
      './assets/projets/lebarbare/maquette.webp',
      './assets/projets/lebarbare/Quête du jour.webp',
      './assets/projets/lebarbare/Affiche.webp',
    ],
    date: '2024',
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    description: 'Il nous a été demandé de créer et de mettre en place une campagne de communication visuelle pour la création d\'un \'Bar à thème\'. Le thème du bar et la ville m\'ont été imposés : Bar médiéval à Anvers en Belgique.',
    problem: 'Créer une identité visuelle complète et une campagne de communication pour un bar à thème médiéval fictif situé à Anvers. Le défi était de concevoir un univers graphique immersif et cohérent qui donne envie aux clients de découvrir ce lieu unique.',
    process: 'Recherche d\'inspiration sur l\'univers médiéval et la ville d\'Anvers, création du nom et du concept du bar, conception du logo et de la charte graphique sur Illustrator et Photoshop, design des supports de communication (affiches, maquettes du lieu, quêtes du jour), prototypage de l\'interface digitale sur Figma.',
    color: '#8B5CF6',
    protoLink: 'https://www.figma.com/proto/hCmZ4eE6cg7v0hWkXZQ5Bc/SAE-401--Copy-?node-id=156-99&t=L3eCLjz8xXodrPm2-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=156%3A99'
  },


  {
    id: '10',
    title: 'Digital Clean Up Day',
    category: 'UX/UI Design',
    cover: './assets/projets/digital-cleanup/cover.webp',
    images: [
      './assets/projets/digital-cleanup/hero.webp',
      './assets/projets/digital-cleanup/Newsletter.webp',
      './assets/projets/digital-cleanup/wireframe.webp',
      './assets/projets/digital-cleanup/Footer.webp',
      './assets/projets/digital-cleanup/motion_format-desktop.mp4',
    ],
    date: '2025',
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects', 'Premiere Pro'],
    description: 'Le prochain événement du Digital Clean Up aura lieu le 25 mars 2025. Pour l\'occasion, l\'organisation souhaite cibler les moins de 25 ans. Il nous a donc été demandé de promouvoir cette action.',
    problem: 'Le Digital Clean Up Day peine à toucher les jeunes de moins de 25 ans, peu sensibilisés à l\'impact environnemental du numérique. Il fallait concevoir une communication moderne et engageante capable de capter l\'attention de cette cible sur les canaux qu\'elle utilise.',
    process: 'Analyse de la cible jeune et de ses habitudes digitales, conception d\'une landing page attractive sur Figma avec wireframes, création de visuels impactants sur Illustrator et Photoshop, réalisation d\'une animation motion design pour les réseaux sociaux, design d\'une newsletter engageante, prototypage interactif.',
    color: '#3aa217ff'
  },

    {
    id: '11', 
    title: 'Fief des Vins',
    category: 'UX/UI Design',
    cover: './assets/projets/fiefdesvins/cover.webp',
    images: [
      './assets/projets/fiefdesvins/fiefdesvins.webp',
      './assets/projets/fiefdesvins/hero.webp',
      './assets/projets/fiefdesvins/contact.webp',
      './assets/projets/fiefdesvins/livraison-entreprise.webp',
    ],
    date: '2025',
    tools: ['Figma', 'WordPress'],
    description: 'Refondre le site web d\'une cave à vin (vrai client) en intégrant une partie pour les professionnels, pour qu\'ils puissent passer commande pour leurs évènements',
    problem: 'Un site web est déjà en ligne, conçu par sa belle-sœur. Celui-ci adopte une structure en one-page, ce qui limite ses performances en référencement naturel (SEO)*. En effet, l’absence de pages distinctes empêche l’optimisation par thématique (mots-clés, titres, balises, liens internes, etc.), ce qui restreint la visibilité sur les moteurs de recherche. Sur le plan visuel, le site est fonctionnel mais minimaliste, et ne reflète pas pleinement l\'identité, l’expertise et la chaleur de l’activité. Une refonte ou une évolution vers un site multi-pages, plus engageant et mieux optimisé pour le SEO*, permettrait de mieux mettre en avant la personnalité de la caviste, son savoir-faire ainsi que ses offres uniques.',
    process: 'Analyse des besoins du client, création d\'une nouvelle identité graphique, conception de wireframe puis de maquettes sur Figma, développement d\'un espace client professionnel sécurisé, intégration sur WordPress avec attention portée au responsive design et à l\'accessibilité, aller-retour avec la cliente et ajustements.',
    color: '#1DB954',
    protoLink: 'https://fiefdesvins.com/'
  },

  {
    id: '12',
    title: 'Vidéo Carrefour Club',
    category: 'Motion Design',
    cover: './assets/projets/carrefour-club/cover.webp',
    images: [
      './assets/projets/carrefour-club/storyboard_versions.webp',
      './assets/projets/carrefour-club/storyboard_final.webp',
      './assets/projets/carrefour-club/vidéo.mp4',
    ],
    date: '2025',
    tools: ['Adobe Illustrator', 'After Effects'],
    description: 'Création d\'une vidéo promotionnelle pour le programme de fidélité "Carrefour Club" (vrai client). La vidéo vise à informer les clients des avantages exclusifs offerts par le programme et à encourager l\'inscription.',
    problem: 'Le programme de fidélité Carrefour Club manquait de visibilité auprès des clients. Il fallait créer un support vidéo dynamique et clair capable de présenter les avantages du programme et d\'inciter à l\'inscription de manière engageante.',
    process: 'Analyse du brief et des messages clés à transmettre, création de plusieurs versions de storyboard, sélection et validation du storyboard final, conception des illustrations vectorielles sur Illustrator, animation et montage sur After Effects, ajustements et livraison de la vidéo finale.',
    color: '#3aa217ff'
  },

  {
    id: '13',
    title: 'Sauce Martin',
    category: 'UX/UI Design',
    cover: './assets/projets/sauce-martin/cover.webp',
    images: [
      './assets/projets/sauce-martin/audit.webp',
      './assets/projets/sauce-martin/catalogue.webp',
      './assets/projets/sauce-martin/pimentomètre.webp',
      './assets/projets/sauce-martin/prototypes.webp',

    ],
    date: '2025',
    tools: ['Figma'],
    description: 'Projet perso de refonte du site web de la marque Sauce Martin',
    problem: 'Le site existant de Sauce Martin ne reflétait pas l\'identité dynamique et artisanale de la marque. L\'ergonomie était peu optimisée, le catalogue produit difficile à parcourir et l\'expérience utilisateur globale nécessitait une modernisation complète.',
    process: 'Audit du site existant, identification des points d\'amélioration, benchmark, création d\'une identité visuelle cohérente, création de maquettes sur Figma.',
    color: 'rgb(2, 97, 57)',
    protoLink: 'https://www.figma.com/proto/kJ5gb6X5dif0RjgCI8ti3d/Prototype?node-id=111-26225&t=L3eCLjz8xXodrPm2-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A3',
    podcast: '/assets/Podcast/SauceMartin.mp3'
  },

  {
    id: '14',
    title: 'Le cube expérience VR',
    category: 'VR/3D',
    cover: './assets/projets/lecube/cover.webp',
    images: [
      './assets/projets/lecube/hotel.webp',
      './assets/projets/lecube/avion.webp',
      './assets/projets/lecube/storyboard.webp',
    ],
    date: '2025',
    tools: ['HTML', 'Figma', 'Premiere Pro'],
    description: 'Expérience de réalité virtuelle dans le cadre d’un partenariat fictif entre la marque Rolex et le film Inception',
    problem: 'Créer une expérience VR immersive qui fusionne l\'univers luxueux de Rolex avec le monde onirique du film Inception. Le défi était de concevoir un parcours interactif captivant qui serve à la fois la marque et l\'univers cinématographique.',
    process: 'Définition du concept narratif liant Rolex et Inception, création du storyboard détaillé, conception des environnements virtuels (hôtel, avion) sur Figma, développement de l\'expérience VR en HTML, optimisation pour une immersion fluide et cohérente, tests avec un casque VR meta quest 3 et ajustements.',
    color: 'rgb(2, 97, 57)',
    protoLink: 'https://alexis-maugain.github.io/Le-cube/'
  },

  {
    id: '15',
    title: 'Unis Vers Tchouk',
    category: 'UX/UI Design',
    cover: './assets/projets/unis-vers-tchouk/cover.webp',
    images: [
      './assets/projets/unis-vers-tchouk/hero.webp',
      './assets/projets/unis-vers-tchouk/newsletter.webp',
      './assets/projets/unis-vers-tchouk/footer.webp',
      './assets/projets/unis-vers-tchouk/prototype.webp',
      './assets/projets/unis-vers-tchouk/posts.webp',

    ],
    date: '2026',
    tools: ['Figma', 'WordPress'],
    description: 'Audit et refonte du site web de l\'association Unis Vers Tchouk (vrai client), qui promeut le tchoukball, un sport collectif dynamique. Le projet a consisté à analyser le site existant, identifier les points d\'amélioration en termes d\'ergonomie et de design, puis à créer une nouvelle interface utilisateur plus moderne et intuitive sur Figma.',
    problem: 'Le site existant de l\'association Unis Vers Tchouk était vieillissant, peu ergonomique et ne mettait pas suffisamment en valeur le tchoukball. La navigation n\'était pas intuitive et le site n\'était pas optimisé pour le mobile, limitant la visibilité de l\'association.',
    process: 'Audit complet du site existant avec identification des points faibles, benchmark de sites d\'associations sportives, conception de wireframes et maquettes modernes sur Figma, développement sur WordPress avec responsive design, création de vidéos formatrices à WordPress pour une totale autonomie dans le futur et de visuels/templates pour les réseaux sociaux.',
    color: 'rgb(2, 97, 57)',
    protoLink: 'https://www.figma.com/proto/maZQrDouqXS88c9zEl0ufB/Alexis_Armand_Matth%C3%A9o_Unis-vers-tchouk--Copy-?node-id=257-3506&t=L3eCLjz8xXodrPm2-0&scaling=scale-down&content-scaling=fixed&page-id=254%3A1340&starting-point-node-id=257%3A3611'
  },


];

export const playlists: Playlist[] = [
  {
    id: 'top-france',
    name: 'Top France',
    icon: 'trophy',
    projects: ['11', '13', '14', '12', '4']
  },
  {
    id: 'ui-ux',
    name: 'UX/UI Design',
    icon: 'palette',
    projects: ['15', '13', '11', '10', '8', '7', '4', '3', '5', '1']
  },
  {
    id: 'dev',
    name: 'Dev',
    icon: 'code',
    projects: ['15', '14', '11', '8', '7', '5', '2']
  },
  {
    id: 'motion',
    name: 'Motion & 3D',
    icon: 'film',
    projects: ['14', '12', '10', '6', '5', '4']
  }
];