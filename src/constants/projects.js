export const projects = [
  {
    id: 1,
    title: "iServices Hub App",
    category: "Mobile App",
    description:
      "A Flutter app built for iServices to help customers manage their digital services in one place.",
    longDescription:
      "The iServices Hub app centralizes digital account management for iServices customers. It allows users to track and control payments, email accounts, subscriptions, website storage, and support tickets through a clean, responsive interface. The app includes secure login, account data sync, and component-based UI architecture to support future scaling.",
    technologies: ["Flutter", "Firebase", "REST API", "PhP"],
    features: [
      "Service overview dashboard (emails, hosting, domains)",
      "Payment tracking with invoice access",
      "Email account management",
      "Storage monitoring and alerts",
    ],
    displayType: "mobile",
    mockupImage: "/images/mockups/ihub2-shot.png",
    demoUrl: "https://iservices.gr/iservices-hub-application/",
    color: "from-blue-400 to-blue-600",
    status: "Live",
    color: "from-indigo-400 to-blue-600",
    accent: "#3b82f6",
    videoUrl: "/images/videos/hub-demo.mp4",
  },

  {
    id: 2,
    title: "Web-BIS Platform",
    category: "Website",
    description:
      "A comprehensive business intelligence platform providing advanced analytics tools, financial reporting solutions, and educational resources for professionals and students in Greece.",
    longDescription:
      "Web-BIS is a specialized business intelligence system designed to empower Greek businesses and professionals with cutting-edge analytics tools and financial insights. The platform combines data visualization, financial reporting, and educational content to support decision-making processes across various industries. Built with modern web technologies, it serves both enterprise clients and educational institutions seeking comprehensive BI solutions.",
    technologies: [
      "WordPress",
      "Elementor",
      "JavaScript",
      "Responsive Design",
      "SEO Optimization",
    ],
    features: [
      "Interactive financial dashboards and reporting",
      "Advanced data visualization and analytics",
      "Educational modules for BI training",

      "Real-time data processing and insights",

      "User management and role-based access",
    ],
    displayType: "desktop",
    images: {
      desktop: "/project-desktop-2.jpg",
    },
    mockup: "/images/mockups/webbis.png",
    demoUrl: "https://web-bis.com/",
    status: "Live",
    color: "from-blue-600 to-indigo-700",
    accent: "#2563eb",
  },
  {
    id: 3,
    title: "TimeTamer",
    category: "Mobile App",
    description:
      "A mobile application working alongside the desktop app that offers daily organization combining task management and notes for efficient personal productivity.",
    longDescription:
      "TimeTamer helps users manage daily tasks, take structured notes, and track priorities through an intuitive interface. The app supports secure user authentication, cloud sync, and offline access, designed to improve time management and organization.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Isar Database",
      "Java (Backend)",
    ],
    features: [
      "Task creation with priority levels and deadlines",
      "Rich-text note-taking with categorization",
      "Offline support with local database syncing",
      "Secure user authentication and cloud backup",
    ],

    displayType: "mobile",
    images: {
      mobile: "",
    },
    demoUrl: "",
    githubUrl: "https://github.com/JohnFireSword/notes",
    status: "Thesis project",
    color: "from-indigo-400 to-blue-600",
    accent: "#3b82f6",
    videoUrl: "/images/videos/timetamer-demo.mp4",
  },
  {
    id: 4,
    title: "Taste in Greece",
    category: "Website",
    description:
      "A comprehensive culinary tourism platform showcasing authentic Greek cuisine, traditional recipes, and gastronomic experiences across Greece's diverse regions.",
    longDescription:
      "Taste in Greece is a digital gateway to Greece's rich culinary heritage, offering visitors an immersive journey through traditional Greek gastronomy. The platform features authentic recipes, regional specialties, restaurant recommendations, and cultural insights that connect food lovers with Greece's vibrant culinary traditions. Built with modern web technologies, it provides an engaging user experience that celebrates the Mediterranean diet and Greek hospitality.",
    technologies: [
      "WordPress",
      "Elementor",
      "JavaScript",
      "Responsive Design",
      "SEO Optimization",
    ],
    features: [
      "Interactive recipe collection with traditional Greek dishes",
      "Regional cuisine exploration and food maps",
      "Cultural storytelling through food heritage",
      "Mobile-responsive design for travelers",
      "Multi-language support (Greek/English)",
      "Blog section for culinary insights and tips",
    ],
    displayType: "desktop",
    images: {
      desktop: "/images/mockups/tasteingreece.png",
    },
    mockup: "/images/mockups/tasteingreece.png",
    demoUrl: "https://tasteingreece.com/en/",
    githubUrl: "https://github.com/giannisgiotis/taste-in-greece", // Update with your actual GitHub repo
    status: "Live",
    color: "from-blue-500 to-emerald-600", // Changed to reflect Greek colors (blue like the flag/sea, green like olives)
    accent: "#059669", // Emerald green accent
    achievements: [
      "Showcases authentic Greek culinary traditions",
      "Responsive design optimized for mobile travelers",
      "SEO-optimized for Greek food and travel searches",
      "Bilingual platform serving international audience",
    ],
    challenges: [
      "Organizing vast collection of traditional recipes",
      "Creating engaging visual presentation of food content",
      "Implementing effective SEO for culinary tourism",
      "Balancing cultural authenticity with modern web design",
    ],
    impact:
      "Connects international food enthusiasts with authentic Greek cuisine and promotes cultural tourism through gastronomy",
  },
  {
    id: 5,
    title: "TimeTamer ",
    category: "Mobile & Web",
    description:
      "Website and mobile app that altogether offer daily organization combining task management and notes for efficient personal productivity.",
    longDescription:
      "TimeTamer helps users manage daily tasks, take structured notes, and track priorities through an intuitive interface. The app supports secure user authentication, cloud sync, and offline access, designed to improve time management and organization.  ",
    technologies: ["Angular", "Java Play", "Python"],
    features: [
      "Task creation with priority levels and deadlines",
      "Rich-text note-taking with categorization",
      "Offline support with local database syncing",
      "Secure user authentication and cloud backup",
    ],
    collaborators: [
      {
        name: "Mario Shkembi",
        link: "https://marioshkembi.com/",
      },
    ],
    displayType: "desktop",

    mockup: "/images/mockups/timetamer-dash.png",
    demoUrl: "",
    githubUrl: "",
    status: "Under Development",
    color: "from-gray-500 to-pink-500",
    accent: "#ef4444",
  },
  {
    id: 6,
    title: "Anime Database Hub",
    category: "Website",
    description:
      "A comprehensive anime database and tracking system built with React, featuring detailed anime information, user lists, and discovery tools for anime enthusiasts.",
    longDescription:
      "Anime Database Hub is a modern web application that serves as a complete anime tracking and discovery platform. It was one of my first projects back in 2018.",
    technologies: ["React", "JavaScript", "Jikan API", "Responsive Design"],
    features: [
      "Comprehensive anime database with detailed information",

      "Advanced search and filtering capabilities",

      "Integration with MyAnimeList API (Jikan)",
    ],
    displayType: "desktop",
    mockup: "/images/mockups/anime-list.png",
    demoUrl: "https://johnfiresword.github.io/",
    githubUrl: "https://github.com/JohnFireSword/JohnFireSword.github.io",
    status: "Live",
    color: "from-purple-500 to-pink-600",
    accent: "#a855f7",
  },
  {
    id: 7,
    title: "CorfuBee (Drivers)",
    category: "Mobile App",
    description:
      "A Flutter app for booking reliable transport services in Corfu, Greece.",
    longDescription:
      "CorfuBee enables users to book transfers from key locations like airports, ports, and hotels to any destination on the island. The app provides real-time driver assignment, booking management, and smooth communication between customers and drivers.",
    technologies: ["Flutter", "WordPress", "REST API", "Firebase"],
    features: [
      "Pickup location selection from airports, ports, and hotels",
      "Real-time driver availability and booking updates",
      "Driver-customer communication interface",
      "Booking history and status tracking",
    ],
    displayType: "mobile",
    mockupImage: "images/mockups/corfu-bee-shot.png",
    demoUrl: "", // add real demo URL if available
    githubUrl: "", // add GitHub link if available

    videoUrl: "/images/videos/more-demo.mp4",
    color: "from-red-500 to-pink-500",
    accent: "#ef4444",
  },
  {
    id: 8,
    title: "Wallet App UI",
    category: "Mobile App",
    description:
      "A mobile wallet interface for managing services and payments.",
    longDescription:
      "This app offers a central dashboard for managing digital services like email, hosting, and domains. Users can track payments, access invoices, and monitor usage in a clean, responsive Flutter UI. It connects to a Firebase backend with RESTful APIs built in PHP.",
    technologies: ["Flutter", "Firebase", "REST API", "PHP"],
    features: [
      "Service overview dashboard (emails, hosting, domains)",
      "Payment tracking with invoice access",
      "Email account management",
      "Storage monitoring and alerts",
    ],
    displayType: "mobile",
    mockupImage: "",
    demoUrl: "",
    githubUrl: "https://github.com/JohnFireSword/wallet_app_ui",
    status: "Live",
    color: "from-purple-500 to-pink-500",
    accent: "#ef4444",
    videoUrl: "/images/videos/wallet-app.mp4",
  },
];

export const projectCategories = [
  "All Projects",
  "Mobile App",
  "Website",
  // "Web Application",
  // "SaaS Platform",
  // "IoT Dashboard",
  "Mobile & Web",
];

export default projects;
