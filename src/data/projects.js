// src/data/projects.js

export const projects = [
  // ===============================
  //   MAJOR BACKEND / FULL-STACK
  // ===============================

  {
    id: 'core-banking',
    title: 'Core Banking System (Bankify)',
    stack: ['Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    shortDescription:
      'Core banking system with accounts, transactions, and role-based access for admin and customers.',
    features: [
      'Customer registration with secure login',
      'Account creation and transaction history',
      'Role-based access for admin vs user',
      'APIs for deposits, withdrawals, transfers',
    ],
    techDetails: [
      'Spring Boot layered backend architecture',
      'PostgreSQL for transactional data integrity',
      'React admin & customer dashboards',
      'Dockerized backend for scalable deployment',
    ],
    liveDemo: null,
    github: 'https://github.com/SivaPaoren/bankify-backend',
    // no local images yet
    screenshots: [],
  },

  {
    id: 'hotel-reservation',
    title: 'Hotel Reservation Management System',
    stack: ['React', 'Express.js', 'MongoDB', 'Azure'],
    shortDescription:
      'Full-stack hotel booking platform deployed on Azure with Nginx + PM2.',
    features: [
      'User login, authentication, and session handling',
      'Real-time room availability checking',
      'Admin dashboard for rooms & reservations',
      'Azure VM deployment with reverse proxy setup',
    ],
    techDetails: [
      'React frontend with modular UI components',
      'Express.js REST API for bookings & authentication',
      'MongoDB Atlas for cloud database storage',
      'Nginx reverse proxy with SSL termination',
    ],
    liveDemo: null,
    github: 'https://github.com/sivapaoren/hotel-reservation-management-system',
    screenshots: [
      '/assets/projects/hotel/hotel1.png',
      '/assets/projects/hotel/hotel2.png',
      '/assets/projects/hotel/hotel3.png',
      '/assets/projects/hotel/hotel4.png',
      '/assets/projects/hotel/hotel9.png',
    ],
  },

  {
    id: 'note-sharing',
    title: 'Note Sharing Website',
    stack: ['Spring Boot', 'React', 'MongoDB'],
    shortDescription:
      'A student platform for uploading and browsing notes using tags and search.',
    features: [
      'Upload and categorize notes by tag',
      'Search notes by keyword or course',
      'Role-based note management',
      'Responsive UI for mobile & desktop',
    ],
    techDetails: [
      'Spring Boot backend with filtering and search',
      'MongoDB for flexible note storage',
      'React component-driven UI',
      'REST architecture prepared for mobile apps',
    ],
    liveDemo: null,
    github: 'https://github.com/SivaPaoren/AnonymousNoteDrop',
    // no local images yet
    screenshots: [],
  },

  {
    id: 'anonymous-note-drop',
    title: 'AnonymousNoteDrop iOS App',
    stack: ['SwiftUI', 'Firebase', 'MVVM'],
    shortDescription:
      'Real-time anonymous notes app built with SwiftUI + Firebase.',
    features: [
      'Anonymous real-time note posting',
      'Firebase Auth integration',
      'Firestore real-time sync',
      'Smooth SwiftUI animations and transitions',
    ],
    techDetails: [
      'MVVM architecture',
      'Firestore real-time database',
      'SwiftUI declarative UI',
      'Lightweight mobile-first architecture',
    ],
    liveDemo: null,
    github: 'https://github.com/sivapaoren/AnonymousNoteDrop',
    screenshots: [
      '/assets/projects/anon/anon1.png',
      '/assets/projects/anon/anon2.png',
      '/assets/projects/anon/anon3.png',
      '/assets/projects/anon/anon4.png',
      '/assets/projects/anon/anon5.png',
      '/assets/projects/anon/anon6.png',
      '/assets/projects/anon/anon7.png',
    ],
  },

  {
    id: 'mock-voting-system',
    title: 'Mock Presidential Voting System',
    stack: ['Spring Boot', 'SQL'],
    shortDescription:
      'Secure role-based election system with admin dashboard and analytics.',
    features: [
      'Admin, candidate, and voter roles',
      'Secure one-vote-per-user logic',
      'Vote tracking with analytics',
      'Admin panel with results overview',
    ],
    techDetails: [
      'Spring Boot REST API',
      'SQL database schema for votes & users',
      'Authorization filters to protect routes',
      'Validation for duplicate vote prevention',
    ],
    liveDemo: null,
    github: 'https://github.com/SivaPaoren/Election',
    // no local images yet
    screenshots: [],
  },

  // ===============================
  //         DESKTOP & GAMES
  // ===============================

  {
    id: 'goku-game',
    title: 'Goku Game (JavaFX)',
    stack: ['JavaFX'],
    shortDescription:
      'Dino-style 2D runner game with Goku animations and increasing difficulty.',
    features: [
      'Smooth sprite animations',
      'Collision detection',
      'Score tracking',
      'Multiple difficulty levels',
    ],
    techDetails: [
      'JavaFX Canvas rendering',
      'Game loop with delta time',
      'Clean OOP structure',
    ],
    liveDemo: null,
    github: 'https://github.com/SivaPaoren/GokuGame',
    screenshots: [
      '/assets/projects/goku/goku1.png',
      '/assets/projects/goku/goku2.png',
      '/assets/projects/goku/goku3.png',
      '/assets/projects/goku/goku4.png',
      '/assets/projects/goku/goku5.png',
      '/assets/projects/goku/goku6.png',
      '/assets/projects/goku/goku7.png',
      '/assets/projects/goku/goku8.png',
    ],
  },

  {
    id: 'snake-game',
    title: 'Snake Game',
    stack: ['Java', 'Swing'],
    shortDescription:
      'Classic Snake game with score tracking and collision logic.',
    features: [
      'Arrow key controls',
      'Score increases with food',
      'Collision-based game over',
      'Centered UI window',
    ],
    techDetails: [
      'Java Swing rendering',
      'Timer-based game loop',
      'Snake body list tracking',
      'Grid-based collision logic',
    ],
    liveDemo: null,
    github: 'https://github.com/SivaPaoren/SnakeGame',
    screenshots: [
      '/assets/projects/snake/snake1.png',
      '/assets/projects/snake/snake2.png',
      '/assets/projects/snake/snake3.png',
      '/assets/projects/snake/snake4.png',
      '/assets/projects/snake/snake5.png',
    ],
  },

  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe (Java Swing)',
    stack: ['Java', 'Swing'],
    shortDescription:
      'Simple two-player Tic Tac Toe using Swing buttons and win checks.',
    features: [
      '2-player gameplay',
      'Win / draw detection',
      'Reset and replay',
      'Grid-based UI',
    ],
    techDetails: [
      'Swing button grid',
      'Turn-based game logic',
      'Win-condition checks',
    ],
    liveDemo: null,
    github: 'https://github.com/SivaPaoren/JavaTicTacToe',
    screenshots: [
      '/assets/projects/tictactoe/tictac1.png',
      '/assets/projects/tictactoe/tictac2.png',
      '/assets/projects/tictactoe/tictac3.png',
      '/assets/projects/tictactoe/tictac4.png',
    ],
  },

  {
    id: 'stopwatch',
    title: 'Stopwatch & Countdown Timer',
    stack: ['HTML', 'CSS', 'JavaScript'],
    shortDescription:
      'Clean stopwatch & countdown UI built with vanilla JavaScript.',
    features: [
      'Start / stop / reset',
      'Countdown support',
      'Minimalist UI',
      'Responsive layout',
    ],
    techDetails: [
      'Vanilla JS intervals',
      'CSS layout with flexbox',
      'DOM manipulation practice',
    ],
    liveDemo: null,
    github: 'https://github.com/SivaPaoren/Stop-Watch-Vaanila-Js',
    screenshots: [
      '/assets/projects/stopwatch/stopwatch1.png',
      '/assets/projects/stopwatch/stopwatch2.png',
      '/assets/projects/stopwatch/stopwatch3.png',
      '/assets/projects/stopwatch/stopwatch5.png', // fixed: you have 5, not 4
    ],
  },

  // ===============================
  //             WEBSITES
  // ===============================

  {
    id: 'boutique-website',
    title: 'Boutique Website',
    stack: ['HTML', 'CSS', 'JavaScript'],
    shortDescription:
      'A clean and modern boutique clothing website built for a freelance client.',
    features: [
      'Professional aesthetic layout',
      'Custom gallery sections',
      'Responsive modern UI',
      'Brand-focused design',
    ],
    techDetails: [
      'Handwritten HTML/CSS',
      'Vanilla JS for interactions',
      'Responsive layout',
    ],
    liveDemo: null,
    github: 'https://github.com/SivaPaoren/SmileyBoutique',
    screenshots: [
      '/assets/projects/boutique/suit1.png',
      '/assets/projects/boutique/suit2.png',
      '/assets/projects/boutique/suit3.png',
      '/assets/projects/boutique/suit4.png',
      '/assets/projects/boutique/suit5.png',
      '/assets/projects/boutique/suit6.png',
      '/assets/projects/boutique/suit7.png',
    ],
  },

  {
    id: 'online-restaurant-menu',
    title: 'Online Restaurant Menu System',
    stack: ['HTML', 'CSS/SCSS', 'JavaScript', 'Spring Boot', 'Hibernate', 'MySQL'],
    shortDescription:
      'Interactive restaurant menu system with admin CRUD and backend integration.',
    features: [
      'Menu browsing by category',
      'Admin CRUD panel',
      'MySQL-powered storage',
      'Clean restaurant-style UI',
    ],
    techDetails: [
      'Spring Boot backend',
      'Hibernate ORM',
      'SCSS for styling',
      'MySQL relational database',
    ],
    liveDemo: null,
    github: 'https://github.com/SivaPaoren/digitalRestaurant',
    screenshots: [
      '/assets/projects/restaurant/restaurant1.png', // add this file or remove entry
    ],
  },

  // ===============================
  //        CURRENT PORTFOLIO
  // ===============================

  {
    id: 'portfolio-site',
    title: 'Personal Portfolio Website',
    stack: ['React', 'Vite', 'GitHub Pages'],
    shortDescription:
      'This portfolio website with hero, projects, about, and live news sections.',
    features: [
      'UI inspired by Stripe/Linear',
      'Light/dark mode toggle',
      'Scroll animations',
      'Static GitHub Pages deployment',
    ],
    techDetails: [
      'React + Vite fast bundling',
      'Custom modern CSS',
      'IntersectionObserver animations',
      'gh-pages deployment',
    ],
    liveDemo: null,
    github: 'https://github.com/sivapaoren/siva-portfolio',
    // no local image yet
    screenshots: [],
  },
]
