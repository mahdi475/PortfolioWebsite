export const projectsData = {
  sv: [
    {
      id: "project1",
      name: "Portfolio Website",
      desc: "En modern portfolio byggd med React, Vite och avancerad CSS.",
      tech: ["React", "Vite", "CSS", "JavaScript"],
      details: "Detta projekt visar min personliga portfolio med animationer, responsiv design och integration av sociala medier. All kod är optimerad för prestanda och tillgänglighet.",
      img: "/pic1.jpg",
      features: ["Responsiv design", "Smooth animationer", "Glassmorphism UI", "Contact form integration"],
      status: "Avslutad",
      year: "2025"
    },
    {
      id: "project2",
      name: "Weather App",
      desc: "En väderapplikation med API-integration och snygga effekter.",
      tech: ["JavaScript", "CSS", "API", "HTML"],
      details: "Appen hämtar väderdata från ett externt API och visar det med interaktiva grafer och animationer. Designen är mörk och lyxig, med smooth transitions.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      features: ["Real-time väderdata", "Interaktiva grafer", "Geolocation", "5-dagars prognos"],
      status: "Avslutad",
      year: "2024"
    },
    {
      id: "project2b",
      name: "Oompaloompa (MVP Website)",
      desc: "En fullstack choklad-marketplace med rollbaserad access för köpare, säljare och admins.",
      tech: ["React", "TypeScript", "Supabase", "Redux Toolkit", "PostgreSQL"],
      details: "Ett ambitiöst grupprojekt där vi bygger en komplett e-handelsplattform för chokladprodukter från hela världen - tänk Facebook Marketplace fast för choklad. Istället för att gå till ett specifikt chokladföretag samlar vi alla säljare på en plats.\n\nPlattformen har tre separata flöden: Buyers kan browsa produkter och checka ut, Sellers kan registrera sig (med verifiering via ID-upload), skapa produkter och hantera orders, medan Admins godkänner säljare och övervakar hela plattformen. Vi använder Supabase för backend (auth, databas, storage) vilket gör det sjukt smidigt att jobba med real-time data.\n\nGrupparbetet har varit lärorikt - vi har delat upp arbetet mellan frontend, backend-logik och databas-design. Projektet är fortfarande ongoing och vi lägger till nya features kontinuerligt. Koden är skriven i TypeScript för bättre type-safety, och vi använder Redux Toolkit för state management vilket håller allt organiserat.",
      img: "/oompaloompa4.png",
      gallery: ["/oompaloompa1.png", "/oompaloompa2.png", "/oompaloompa3.png"],
      features: [
        "Rollbaserad autentisering (Buyer/Seller/Admin)",
        "Seller-verifiering med dokumentuppladdning",
        "Real-time produktkatalog med Supabase",
        "Kundvagn och checkout-flow",
        "Admin-dashboard för seller-godkännande",
        "PostgreSQL databas med RLS (Row Level Security)",
        "TypeScript för type-safety",
        "Redux Toolkit för global state management",
        "Internationalisering (i18next) - flerspråkigt stöd"
      ],
      status: "Pågående",
      year: "2024-2025",
      github: "https://github.com/mahdi475/ChocolataMVP"
    },
    {
      id: "project3",
      name: "Parkour Runner 3D",
      desc: "Ett utmanande 3D-plattformsspel med avancerad player-mekanik och dynamiska banor.",
      tech: ["Unity", "Physics", "Game Design", "C#(44%)", "Shaderlab (33.5%)", "HlSL(22.5%)"],
      details: "Ett påkostigt 3D-plattformsspel där spelaren styr en karaktär som måste navigera genom komplexa banor fullt med hinder, spöken och fällor. Spelet kräver precision, timing och problemlösning. Utvecklat i grupp under en hel termin med fokus på samarbete, testning och professionell kodkvalitet.\n\nSpelmekanik inkluderar avancerad player-kontroll med acceleration/deacceleration, hold-jump för variabel hopphöjd, dash-mekanik för snabb förflyttning, och intelligent jump-buffering för responsiv feel. Spelet har ingen traditionell AI-fiender utan fokuserar på level-design som instruktör - hindren som traps, eldväggar och platformer guider spelaren genom utmaningen.",
      img: "/Skärmbild 2025-12-11 144413.png",
      features: [
        "Avancerad player-kontroll (acceleration, deacceleration, hold-jump)",
        "Dash-mekanik med cooldown-system",
        "Intelligent jump-buffering och coyote-time",
        "Dynamiska banor med traps, eldväggar och hinder",
        "Sound Manager med walking/dash-audio",
        "Pausmeny och start-meny",
        "Partikeleffekter för movement-feedback",
        "Professionell gruppsamarbete och kodstandard"
      ],
      status: "Avslutad",
      year: "2024",
      github: "https://github.com/mahdi475/3DUnityGame",
      scripts: ["PlayerController", "SoundManager", "PauseMenu", "StartMenu"]
    },
    {
      id: "project4",
      name: "AI Chatbot",
      desc: "En smart chatbot byggd med Python och maskininlärning.",
      tech: ["Python", "ML", "API", "React"],
      details: "Chatboten använder NLP och maskininlärning för att förstå och svara på frågor. UI:t är modernt med mörkt tema och animationer för varje interaktion.",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      features: ["NLP-integration", "Machine Learning", "Natural responses", "Learning capability"],
      status: "Avslutad",
      year: "2023"
    }
  ],
  en: [
    {
      id: "project1",
      name: "Portfolio Website",
      desc: "A modern portfolio built with React, Vite and advanced CSS.",
      tech: ["React", "Vite", "CSS", "JavaScript"],
      details: "This project showcases my personal portfolio with animations, responsive design and social media integration. All code is optimized for performance and accessibility.",
      img: "/pic1.jpg",
      features: ["Responsive design", "Smooth animations", "Glassmorphism UI", "Contact form integration"],
      status: "Completed",
      year: "2025"
    },
    {
      id: "project2",
      name: "Weather App",
      desc: "A weather application with API integration and beautiful effects.",
      tech: ["JavaScript", "CSS", "API", "HTML"],
      details: "The app fetches weather data from an external API and displays it with interactive graphs and animations. The design is dark and luxurious, with smooth transitions.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      features: ["Real-time weather data", "Interactive graphs", "Geolocation", "5-day forecast"],
      status: "Completed",
      year: "2024"
    },
    {
      id: "project2b",
      name: "Oompaloompa (MVP Website)",
      desc: "A fullstack chocolate marketplace with role-based access for buyers, sellers and admins.",
      tech: ["React", "TypeScript", "Supabase", "Redux Toolkit", "PostgreSQL"],
      details: "An ambitious group project where we're building a complete e-commerce platform for chocolate products from around the world - think Facebook Marketplace but for chocolate. Instead of going to a specific chocolate company, we bring all sellers to one place.\n\nThe platform has three separate flows: Buyers can browse products and checkout, Sellers can register (with verification via ID upload), create products and manage orders, while Admins approve sellers and monitor the entire platform. We use Supabase for backend (auth, database, storage) which makes it incredibly smooth to work with real-time data.\n\nThe group work has been educational - we've divided the work between frontend, backend logic and database design. The project is still ongoing and we're continuously adding new features. The code is written in TypeScript for better type-safety, and we use Redux Toolkit for state management which keeps everything organized.",
      img: "/oompaloompa4.png",
      gallery: ["/oompaloompa1.png", "/oompaloompa2.png", "/oompaloompa3.png"],
      features: [
        "Role-based authentication (Buyer/Seller/Admin)",
        "Seller verification with document upload",
        "Real-time product catalog with Supabase",
        "Shopping cart and checkout flow",
        "Admin dashboard for seller approval",
        "PostgreSQL database with RLS (Row Level Security)",
        "TypeScript for type-safety",
        "Redux Toolkit for global state management",
        "Internationalization (i18next) - multi-language support"
      ],
      status: "Ongoing",
      year: "2024-2025",
      github: "https://github.com/mahdi475/ChocolataMVP"
    },
    {
      id: "project3",
      name: "Parkour Runner 3D",
      desc: "A challenging 3D platformer game with advanced player mechanics and dynamic levels.",
      tech: ["Unity", "Physics", "Game Design", "C#(44%)", "Shaderlab (33.5%)", "HlSL(22.5%)"],
      details: "A polished 3D platformer where the player controls a character that must navigate through complex levels full of obstacles, ghosts and traps. The game requires precision, timing and problem-solving. Developed in a group over an entire semester with focus on collaboration, testing and professional code quality.\n\nGame mechanics include advanced player control with acceleration/deacceleration, hold-jump for variable jump height, dash mechanics for quick movement, and intelligent jump-buffering for responsive feel. The game has no traditional AI enemies but focuses on level design as instructor - obstacles like traps, fire walls and platforms guide the player through the challenge.",
      img: "/Skärmbild 2025-12-11 144413.png",
      features: [
        "Advanced player control (acceleration, deacceleration, hold-jump)",
        "Dash mechanic with cooldown system",
        "Intelligent jump-buffering and coyote-time",
        "Dynamic levels with traps, fire walls and obstacles",
        "Sound Manager with walking/dash audio",
        "Pause menu and start menu",
        "Particle effects for movement feedback",
        "Professional group collaboration and code standards"
      ],
      status: "Completed",
      year: "2024",
      github: "https://github.com/mahdi475/3DUnityGame",
      scripts: ["PlayerController", "SoundManager", "PauseMenu", "StartMenu"]
    },
    {
      id: "project4",
      name: "AI Chatbot",
      desc: "A smart chatbot built with Python and machine learning.",
      tech: ["Python", "ML", "API", "React"],
      details: "The chatbot uses NLP and machine learning to understand and respond to questions. The UI is modern with dark theme and animations for each interaction.",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      features: ["NLP integration", "Machine Learning", "Natural responses", "Learning capability"],
      status: "Completed",
      year: "2023"
    }
  ]
}
