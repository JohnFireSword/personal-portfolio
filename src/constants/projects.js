
export const projects = [
{
  id: 1,
  title: "iServices Hub App",
  category: "Mobile App",
  description: "A Flutter app built for iServices to help customers manage their digital services in one place.",
  longDescription: "The iServices Hub app centralizes digital account management for iServices customers. It allows users to track and control payments, email accounts, subscriptions, website storage, and support tickets through a clean, responsive interface. The app includes secure login, account data sync, and component-based UI architecture to support future scaling.",
  technologies: ["Flutter", "Firebase",  "REST API", "PhP"],
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
  

}
,
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
  title: "TimeTamer",
  category: "Mobile App",
  description: "A mobile application working alongside the desktop app that offers daily organization combining task management and notes for efficient personal productivity.",
  longDescription: "TimeTamer helps users manage daily tasks, take structured notes, and track priorities through an intuitive interface. The app supports secure user authentication, cloud sync, and offline access, designed to improve time management and organization.",
  technologies: ["Flutter", "Dart", "Firebase", "Isar Database", "Java (Backend)"],
  features: [
    "Task creation with priority levels and deadlines",
    "Rich-text note-taking with categorization",
    "Offline support with local database syncing",
    "Secure user authentication and cloud backup"
  ],

  displayType: "mobile",
  images: {
    mobile: ""
  },
  demoUrl: "",  
  githubUrl: "https://github.com/JohnFireSword/notes", 
  status: "Thesis project",
  color: "from-indigo-400 to-blue-600",
  accent: "#3b82f6",
  videoUrl: "/images/videos/timetamer-demo.mp4", 
}
,
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
  },
  {
  id: 7,
  title: "CorfuBee",
  category: "Mobile App",
  description: "A Flutter app for booking reliable transport services in Corfu, Greece.",
  longDescription: "CorfuBee enables users to book transfers from key locations like airports, ports, and hotels to any destination on the island. The app provides real-time driver assignment, booking management, and smooth communication between customers and drivers.",
  technologies: ["Flutter", "WordPress", "REST API", "Firebase"],
  features: [
    "Pickup location selection from airports, ports, and hotels",
    "Real-time driver availability and booking updates",
    "Driver-customer communication interface",
    "Booking history and status tracking"
  ],
  displayType: "mobile",
  mockupImage: "images/mockups/corfu-bee-shot.png",
  demoUrl: "",  // add real demo URL if available
  githubUrl: "",  // add GitHub link if available
  color: "from-blue-400 to-blue-600",
   videoUrl: "/images/videos/more-demo.mp4", 
  accent: "#2563eb"
},
{
  id: 8,
  title: "Wallet App UI",
  category: "Mobile App",
  description: "A mobile wallet interface for managing services and payments.",
  longDescription:
    "This app offers a central dashboard for managing digital services like email, hosting, and domains. Users can track payments, access invoices, and monitor usage in a clean, responsive Flutter UI. It connects to a Firebase backend with RESTful APIs built in PHP.",
  technologies: ["Flutter", "Firebase", "REST API", "PHP"],
  features: [
    "Service overview dashboard (emails, hosting, domains)",
    "Payment tracking with invoice access",
    "Email account management",
    "Storage monitoring and alerts"
  ],
  displayType: "mobile",
  mockupImage: "",
  demoUrl: "",
   githubUrl: "https://github.com/JohnFireSword/wallet_app_ui",
  status: "Live",
  color: "from-indigo-400 to-blue-600",
  accent: "#3b82f6",
    videoUrl: "/images/videos/wallet-app.mp4", 
}

,
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