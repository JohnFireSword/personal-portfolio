// projects.js - Projects data constants
export const projects = [
  {
    id: 1,
    title: "iServices Hub App",
    category: "Mobile App",
    description: "A React Native app that helps users track their carbon footprint with gamification elements and social sharing features.",
    longDescription: "EcoTracker revolutionizes personal sustainability by making environmental consciousness engaging and social. Users can log daily activities, see real-time impact visualizations, and compete with friends through eco-challenges.",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Expo"],
    features: [
      "Real-time carbon footprint calculation",
      "Social challenges and leaderboards",
      "AI-powered suggestions",
      "Offline data synchronization"
    ],
    displayType: "mobile",
    images: {
      mobile: "/project-mobile-1.jpg", 
      desktop: "/project-desktop-1.jpg"
    },
    screenshot: "public/images/insta.png",
    demoUrl: "https://ecotracker-demo.com",
    githubUrl: "https://github.com/johndoe/ecotracker",
    status: "Live",
    color: "from-green-400 to-emerald-600",
    accent: "#10b981"
  },
  {
    id: 2,
    title: "TaskFlow Dashboard",
    category: "Web Application",
    description: "A comprehensive project management platform with real-time collaboration, advanced analytics, and team productivity insights.",
    longDescription: "TaskFlow transforms team productivity with intuitive project management, real-time collaboration tools, and powerful analytics. Built for modern teams who need to stay connected and productive.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Socket.io"],
    features: [
      "Real-time collaborative editing",
      "Advanced project analytics",
      "Custom workflow automation",
      "Team performance tracking"
    ],
    displayType: "desktop",
    images: {
      desktop: "/project-desktop-2.jpg"
    },
    demoUrl: "https://taskflow-demo.com",
    githubUrl: "https://github.com/johndoe/taskflow",
    status: "Live",
    color: "from-blue-500 to-purple-600",
    accent: "#3b82f6"
  },
  {
    id: 3,
    title: "CryptoWallet Pro",
    category: "Mobile App",
    description: "Secure cryptocurrency wallet with portfolio tracking, price alerts, and DeFi integration for seamless crypto management.",
    longDescription: "CryptoWallet Pro offers institutional-grade security with consumer-friendly design. Track portfolios, execute trades, and manage DeFi positions all in one beautiful interface.",
    technologies: ["Flutter", "Dart", "Firebase", "Web3", "Blockchain APIs"],
    features: [
      "Multi-currency support",
      "Hardware wallet integration",
      "DeFi protocol access",
      "Advanced security features"
    ],
    displayType: "mobile",
    images: {
      mobile: "/project-mobile-3.jpg"
    },
    demoUrl: "https://cryptowallet-demo.com",
    githubUrl: "https://github.com/johndoe/cryptowallet",
    status: "Beta",
    color: "from-yellow-400 to-orange-500",
    accent: "#f59e0b"
  },
  {
    id: 4,
    title: "AI Content Studio",
    category: "SaaS Platform",
    description: "AI-powered content creation platform helping marketers and creators generate, edit, and optimize content at scale.",
    longDescription: "AI Content Studio empowers creators with cutting-edge AI tools for content generation, editing, and optimization. From blog posts to social media content, create professional content in minutes.",
    technologies: ["Next.js", "Python", "OpenAI API", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      "AI-powered content generation",
      "Multi-format export options",
      "SEO optimization tools",
      "Team collaboration workspace"
    ],
    displayType: "desktop",
    images: {
      desktop: "/project-desktop-4.jpg"
    },
    demoUrl: "https://aicontentstudio-demo.com",
    githubUrl: "https://github.com/johndoe/ai-content-studio",
    status: "Live",
    color: "from-purple-500 to-pink-600",
    accent: "#a855f7"
  },
  {
    id: 5,
    title: "FitSync Companion",
    category: "Mobile & Web",
    description: "Cross-platform fitness tracking with social features, workout plans, and nutrition guidance for a complete wellness experience.",
    longDescription: "FitSync Companion bridges the gap between mobile fitness tracking and web-based analytics. Track workouts on-the-go, analyze progress on desktop, and stay motivated with social features.",
    technologies: ["React Native", "React", "Node.js", "MongoDB", "AWS", "HealthKit"],
    features: [
      "Cross-platform synchronization",
      "Social workout challenges",
      "AI nutrition recommendations",
      "Wearable device integration"
    ],
    displayType: "both",
    images: {
      mobile: "/project-mobile-5.jpg",
      desktop: "/project-desktop-5.jpg"
    },
    demoUrl: "https://fitsync-demo.com",
    githubUrl: "https://github.com/johndoe/fitsync",
    status: "Live",
    color: "from-red-500 to-pink-500",
    accent: "#ef4444"
  },
  {
    id: 6,
    title: "SmartHome Hub",
    category: "IoT Dashboard",
    description: "Comprehensive smart home management system with device control, automation, and energy monitoring capabilities.",
    longDescription: "SmartHome Hub centralizes all your IoT devices into one intuitive dashboard. Control lights, temperature, security, and monitor energy usage with advanced automation rules.",
    technologies: ["Vue.js", "Python", "MQTT", "InfluxDB", "Docker", "Raspberry Pi"],
    features: [
      "Multi-device compatibility",
      "Custom automation rules",
      "Energy usage analytics",
      "Voice control integration"
    ],
    displayType: "desktop",
    images: {
      desktop: "/project-desktop-6.jpg"
    },
    demoUrl: "https://smarthome-demo.com",
    githubUrl: "https://github.com/johndoe/smarthome-hub",
    status: "Live",
    color: "from-indigo-500 to-blue-600",
    accent: "#6366f1"
  }
];

export const projectCategories = [
  "All Projects",
  "Mobile App", 
  "Web Application",
  "SaaS Platform",
  "IoT Dashboard",
  "Mobile & Web"
];

export default projects;