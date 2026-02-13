import { Project, Playlist } from '../types';


export const projects: Project[] = [
  {
    id: '1', 
    title: 'Fief des Vins',
    category: 'UI/UX Design',
    cover: './assets/projets/fiefdesvins/cover.webp',
    images: [
      './assets/projets/fiefdesvins/fiefdesvins.webp',
      './assets/projets/fiefdesvins/hero.webp',
      './assets/projets/fiefdesvins/contact.webp',
      './assets/projets/fiefdesvins/livraison-entreprise.webp',
    ],
    role: 'Lead UX/UI Designer',
    tools: ['Figma', 'WordPress'],
    description: 'Refaire son site web en intégrant une partie retreinte pour les professionnels, pour qu\'ils puissent passer commande pour leurs évènements',
    problem: 'Le site web existant ne répondait plus aux besoins du client, notamment l\'absence d\'un espace professionnel dédié permettant aux restaurateurs et organisateurs d\'événements de passer commande facilement. L\'interface n\'était pas optimisée pour le responsive design et l\'expérience utilisateur était peu intuitive.',
    process: 'Analyse des besoins du client chez Phénix Studio, conception des maquettes UI sur Figma en respectant l\'identité visuelle de la cave, développement d\'un espace client professionnel sécurisé, intégration sur WordPress avec attention portée au responsive design et à l\'accessibilité, tests utilisateurs et ajustements.',
    color: '#1DB954'
  },
  {
    id: '2',
    title: 'Livre de cuisine',
    category: 'Print Design',
    cover: './assets/projets/livre-recette/mockup.webp',
    images: [
      './assets/projets/livre-recette/couverture.webp',
      './assets/projets/livre-recette/page-recette.webp',
      './assets/projets/livre-recette/Sommaire.webp',
    ],
    role: 'Graphic Designer',
    tools: ['Indesign'],
    description: 'Création d\'un livre de recettes.',
    problem: 'Besoin de créer un livre de cuisine attractif et structuré pour valoriser une collection de recettes. La mise en page devait être claire, esthétique et faciliter la lecture des étapes de préparation.',
    process: 'Définition de la structure éditoriale et du concept graphique, création d\'une charte graphique cohérente sur InDesign, mise en page des recettes avec hiérarchie visuelle, sélection et intégration des visuels, optimisation pour l\'impression.',
    color: '#9333EA'
  },
  {
    id: '3',
    title: 'Subway Surfer',
    category: 'Motion Design',
    cover: './assets/projets/subway-surfer/cover.png',
    images: [
      './assets/projets/subway-surfer/accueil.webp',
      './assets/projets/subway-surfer/logo.webp',
      './assets/projets/subway-surfer/objets3D_1.webp',
      './assets/projets/subway-surfer/objets3D_2.webp',
      './assets/projets/subway-surfer/storyboard.webp',
      './assets/projets/subway-surfer/skate-story.mp4',


    ],
    role: 'Motion Designer, Video Editor & Web Designer',
    tools: ['After Effects', 'Premiere Pro','WordPress', 'Figma', 'Blender'],
    description: 'Il nous a été demandé de créer, développer et promouvoir un site web e-commerce inspiré des plateformes comme Le Bon Coin, Vinted, … adapté à l\'univers d\'un jeu vidéo emblématique de votre choix (par exemple : Mario, Zelda, etc.).',
    problem: '',
    process: '',
    color: '#F59E0B'
  },
  {
    id: '4',
    title: 'Nuit du Code',
    category: 'UI/UX Design',
    cover: './assets/projets/nuitcode/nuitcode.webp',
    images: [
  
      './assets/projets/nuitcode/gameplay.webp',
      './assets/projets/nuitcode/hero.webp',
      './assets/projets/nuitcode/intro.webp',
      './assets/projets/nuitcode/touches.webp',
      './assets/projets/nuitcode/trophées.webp',
      './assets/projets/nuitcode/Affiche.webp',
    ],
    role: 'Product Designer',
    tools: ['PSPlay.js', 'HTML', 'CSS', 'Tailwind', 'JAVASCRIPT', 'Figma'],
    description: 'Un jeu 2D developper en javascrit avec P5Play.js qui sert à faire de la prévention contre la pullution digital.Dans Ce je on incarne Zippy une petite souris qui lutter contre malware et mail frauduleux',
    problem: '',
    process: '',
    color: '#EC4899'
  },
  {
    id: '5',
    title: 'Danniel Wellington',
    category: 'UI/UX Design',
    cover: './assets/projets/danniel-wellington/Cover.png',
    images: [
      './assets/projets/danniel-wellington/pages.webp',
    ],
    role: 'UI/UX Designer & Developer',
    tools: ['Figma', 'WordPress'],
    description: 'Il nous a été demandé par binômes de concevoir et de développer des parcours utilisateurs au sein d\'un système d\'information, en combinant le développement web, le design d\'expérience et la gestion de projet. Nous devions créer un site WordPress de type "click & collect" pour une enseigne choisie en gardant la même charte graphique.',
    problem: '',
    process: '',
    color: '#06B6D4'
  },
  {
    id: '6',
    title: 'Le Bar\'Bare',
    category: 'UI/UX Design',
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
    role: 'UI/UX Designer',
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    description: 'Il nous a été demandé de créer et de mettre en place une campagne de communication visuelle pour la création d\'un \'Bar à thème\'. Le thème du bar et la ville m\'ont été imposés : Bar médiéval à Anvers en Belgique.',
    problem: '',
    process: '',
    color: '#8B5CF6'
  },
  {
    id: '7',
    title: 'OpenData University',
    category: 'UI/UX Design',
    cover: './assets/projets/data-visualisation/cover.webp',
    images: [
      './assets/projets/data-visualisation/Affiche1.webp',
      './assets/projets/data-visualisation/Affiche2.webp',
    ],
    role: 'UI/UX Designer',
    tools: ['Figma', 'HTML', 'CSS', 'GSAP', 'Lottie'],
    description: 'Dans le cadre d\'une collaboration avec OpenData University, nous avez été sollicités pour créer un ensemble de supports numériques en groupe de trois visant à informer et sensibiliser le public sur un des thèmes liés à la culture.',
    problem: '',
    process: '',
    color: '#3B82F6'
  },
  {
    id: '8',
    title: 'PokeDuel',
    category: 'UI/UX Design',
    cover: './assets/projets/pokeduel/mockup.png',
    images: [
      './assets/projets/pokeduel/accueil.webp',
      './assets/projets/pokeduel/Boutique.webp',
      './assets/projets/pokeduel/connexion.webp',
      './assets/projets/pokeduel/Profil.webp',
      './assets/projets/pokeduel/map.webp',
      './assets/projets/pokeduel/message.webp',

    ],
    role: 'UI/UX Designer',
    tools: ['Figma'],
    description: 'Il nous a été demandé de concevoir un concept d\'application mobile dans l\'univers de notre choix. L\'application devait comporter au moins 5 écrans fonctionnels, incluant des éléments interactifs tels que des boutons, des formulaires et des animations. Le design devait être cohérent avec l\'univers choisi et offrir une expérience utilisateur fluide et intuitive.',
    problem: '',
    process: '',
    color: '#059669'
  },

  {
    id: '10',
    title: 'One page Olive Oil',
    category: 'UI/UX Design',
    cover: './assets/projets/olive-oil/mockup.webp',
    images: [
      './assets/projets/olive-oil/hero.webp',
      './assets/projets/olive-oil/Produit.webp',
      './assets/projets/olive-oil/valeurs.webp',
      './assets/projets/olive-oil/contact.webp',
    ],
    role: 'UI/UX Designer',
    tools: ['Figma'],
    description: 'Olive Oil, marque d\'huile d\'olive 100 % italienne, lance sa nouvelle huile premium avec des ingrédients haut de gamme. Pour accompagner ce lancement, ils souhaitent créer un site internet reflétant leur encrage territorial ainsi que l\'univers prestigieux de la marque, destiné à une clientèle exigeante. Le design du site devra être élégant, moderne et raffiné, tout en respectant l\'identité visuelle existante (couleurs, typographie, logo).Le contenu présentera de manière claire et originale la marque, ses valeurs et son produit. L\'expérience utilisateur devra inciter à l’achat, tout en véhiculant une ambiance exclusive et sophistiquée.',
    problem: '',
    process: '',
    color: '#ff1fe5ff'
  },
  {
    id: '11',
    title: 'vr',
    category: 'Developpement Web & 3D',
    cover: './assets/projets/vr/vr.webp',
    images: [
      './assets/projets/vr/vr.webp',
    ],
    role: '',
    tools: ['HTML', 'A-Frame', 'Poly.pizza', 'Sketchfab'],
    description: 'Il nous a été demandé de concevoir une expérience de réalité virtuelle accessible via un navigateur web dans le style graphique d\'un artiste. Le projet visait à démontrer les possibilités offertes par la VR sur le web. Voici le lien de l\'expérience : "https://alexis-maugain.github.io/VR/"',
    problem: '',
    process: '',
    color: '#d53d3dff'
  },
  {
    id: '12',
    title: 'Digital Clean Up Day',
    category: 'UI/UX Design',
    cover: './assets/projets/digital-cleanup/cover.png',
    images: [
      './assets/projets/digital-cleanup/hero.webp',
      './assets/projets/digital-cleanup/Newsletter.webp',
      './assets/projets/digital-cleanup/wireframe.webp',
      './assets/projets/digital-cleanup/Footer.webp',
      './assets/projets/digital-cleanup/motion_format-desktop.mp4',
    ],
    role: 'UI/UX Designer',
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    description: 'Le prochain événement du Digital Clean Up aura lieu le 25 mars 2025. Pour l\'occasion, l\'organisation souhaite cibler les moins de 25 ans. Il nous a donc été demandé de promouvoir cette action.',
    problem: '',
    process: '',
    color: '#3aa217ff'
  },

    {
    id: '13',
    title: 'Vidéo Carrefour Club',
    category: 'Motion Design',
    cover: './assets/projets/carrefour-club/cover.png',
    images: [
      './assets/projets/carrefour-club/storyboard_versions.webp',
      './assets/projets/carrefour-club/storyboard_final.webp',
      './assets/projets/carrefour-club/vidéo.mp4',
    ],
    role: 'Motion Designer',
    tools: ['Adobe Illustrator', 'After Effects'],
    description: 'Création d\'une vidéo promotionnelle pour le programme de fidélité "Carrefour Club". La vidéo vise à informer les clients des avantages exclusifs offerts par le programme et à encourager l\'inscription.',
    problem: '',
    process: '',
    color: '#3aa217ff'
  },

  {
    id: '14',
    title: 'Le cube expérience VR',
    category: 'VR/3D',
    cover: './assets/projets/lecube/cover.png',
    images: [
      './assets/projets/lecube/hotel.png',
      './assets/projets/lecube/avion.png',
      './assets/projets/lecube/storyboard.png',
    ],
    role: '',
    tools: ['HTML', 'Figma'],
    description: 'Expérience de réalité virtuelle dans le cadre d’un partenariat entre la marque Rolex et le film Inception',
    problem: '',
    process: '',
    color: 'rgb(2, 97, 57)'
  },

  {
    id: '15',
    title: 'Refonte site Sauce Martin',
    category: 'UI/UX Design',
    cover: './assets/projets/sauce-martin/cover.png',
    images: [
      './assets/projets/sauce-martin/audit.png',
      './assets/projets/sauce-martin/catalogue.png',
      './assets/projets/sauce-martin/pimentomètre.png',
      './assets/projets/sauce-martin/prototypes.png',

    ],
    role: '',
    tools: ['Figma'],
    description: 'Refonte du site web de la marque Sauce Martin',
    problem: '',
    process: 'Audit du site existant, identification des points d\'amélioration, création de maquettes UI sur Figma en respectant l\'identité visuelle de la marque, développement du site web avec une attention particulière portée au responsive design et à l\'expérience utilisateur, tests et ajustements.',
    color: 'rgb(2, 97, 57)'
  },

  {
    id: '16',
    title: 'Unis Vers Tchouk',
    category: 'UI/UX Design',
    cover: './assets/projets/unis-vers-tchouk/cover.png',
    images: [
      './assets/projets/unis-vers-tchouk/wireframe.png',
      './assets/projets/unis-vers-tchouk/hero.png',
      './assets/projets/unis-vers-tchouk/newsletter.png',
      './assets/projets/unis-vers-tchouk/footer.png',
      './assets/projets/unis-vers-tchouk/prototype.png',
      './assets/projets/unis-vers-tchouk/posts.png',

    ],
    role: '',
    tools: ['Figma', 'WordPress'],
    description: 'Audit et refonte du site web de l\'association Unis Vers Tchouk, qui promeut le tchoukball, un sport collectif dynamique. Le projet a consisté à analyser le site existant, identifier les points d\'amélioration en termes d\'ergonomie et de design, puis à créer une nouvelle interface utilisateur plus moderne et intuitive sur Figma. La refonte a également inclus le développement du site web avec une attention particulière portée au responsive design pour garantir une expérience optimale sur tous les appareils.',
    problem: '',
    process: '',
    color: 'rgb(2, 97, 57)'
  },

  {
    id: '17',
    title: 'RocamaTour',
    category: 'UX/UI Design',
    cover: './assets/projets/rocamatour/cover.png',
    images: [
      './assets/projets/rocamatour/hero.png',
      './assets/projets/rocamatour/post1.png',
      './assets/projets/rocamatour/post2.png',
      './assets/projets/rocamatour/motion_rocamatour.mp4',

    ],
    role: '',
    tools: ['Figma', 'After effects'],
    description: 'Création d\'une expérience immersive pour le site web de RocamaTour, un concept évènement inventé par nous même qui propose un mélange entre tourisme et course à pied',
    problem: '',
    process: '',
    color: 'rgb(2, 97, 57)'
  }
];

export const playlists: Playlist[] = [
  {
    id: 'top-france',
    name: 'Top France',
    icon: 'trophy',
    projects: ['1', '3', '4', '6']
  },
  {
    id: 'ui-ux',
    name: 'UX/UI Design',
    icon: 'palette',
    projects: ['1', '3', '5', '6','7', '8', '10', '12', '15', '16', '17']
  },
  {
    id: 'dev',
    name: 'Dev',
    icon: 'code',
    projects: ['1', '2', '3', '4', '5', '7', '11']
  },
  {
    id: 'motion',
    name: 'Motion & 3D',
    icon: 'film',
    projects: ['3', '11', '12', '13', '17']
  }
];