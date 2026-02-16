export const portfolioData = {
    personalInfo: {
        name: "Arya Dahal",
        title: "Computer Engineering Student & Full-Stack Developer",
        subtitle: "Engineering scalable, AI-driven solutions through robust code and innovative design.",
        email: "aryadahal61@gmail.com",
        phone: "+977-9861344279",
        linkedin: "https://www.linkedin.com/in/aryadahal/",
        github: "https://github.com/Basilisk2061",
        location: "Bhaktapur, Nepal",
        resumeUrl: "/resume.pdf",
    },

    about: {
        summary: "I am a Computer Engineering student driven by a passion for solving complex problems through technology. My expertise lies in full-stack development and Artificial Intelligence, where I bridge the gap between theoretical concepts and practical, high-performance applications. With a strong foundation in systems engineering and a collaborative mindset, I strive to build software that is not only functional but also scalable and user-centric.",
        quickFacts: [
            { label: "Education", value: "B.E. Computer Engineering, NEC" },
            { label: "Core Competencies", value: "Full-Stack Dev, AI/ML, System Design" },
            { label: "Professional Focus", value: "Scalable Web Apps & Real-Time Systems" },
            { label: "Tech Stack", value: "Python, Flutter, Next.js, TensorFlow" }
        ]
    },

    skills: {
        "Languages": ["Python", "C++", "JavaScript", "TypeScript", "Dart", "SQL"],
        "Frameworks": ["Next.js", "React", "Flutter", "FastAPI", "Django", "Tailwind CSS"],
        "Tools": ["Git & GitHub", "Docker", "VS Code", "Postman", "Figma"],
        "Core": ["Data Structures", "Algorithms", "System Design", "OOP", "Database Management"],
        "Soft Skills": ["Technical Communication", "Project Management", "Team Leadership", "Critical Thinking"],
        "AI/ML": ["TensorFlow", "Keras", "OpenCV", "Scikit-learn", "NLP"]
    },

    projects: [
        {
            id: "lag",
            title: "LAG – Local Multiplayer Shooter",
            repoUrl: "https://github.com/Biggy08/LAG",
            impact: "Engineered a high-performance custom networking solution.",
            tags: ["Godot", "GDScript", "Networking", "Game Dev"],
            description: "A competitive 2D multiplayer shooter featuring efficient local networking and real-time synchronization.",
            modalContent: {
                problem: "Existing high-level networking solutions often introduce unnecessary overhead for local multiplayer environments.",
                solution: "Developed `LAG`, a game optimizing local packet transmission for a seamless, low-latency multiplayer experience.",
                features: [
                    "Custom ENet-based networking for minimal latency",
                    "Client-side prediction and server reconciliation",
                    "Dynamic lobby system with map voting",
                    "Optimized game state serialization"
                ],
                technical: "Built using Godot Engine. Implemented a custom state synchronization protocol over UDP to handle rapid game state updates with minimal jitter.",
                learned: "Mastered concepts of network physics, interpolation techniques, and the complexities of synchronizing game states in real-time."
            }
        },
        {
            id: "pasale",
            title: "Pasale – Retail Analytics Platform",
            repoUrl: "https://github.com/Basilisk2061/IdeaX_code2convert",
            impact: "Digitized daily operations for small-scale retailers.",
            tags: ["Flutter", "FastAPI", "Python", "Data Analytics"],
            description: "An integrated mobile platform for inventory management, sales tracking, and data-driven business insights.",
            modalContent: {
                problem: "Small retailers struggle with manual bookkeeping and lack actionable insights into their sales data.",
                solution: "Delivered `Pasale`, a bilingual application that digitizes inventory and provides AI-powered analytics to optimize stock levels.",
                features: [
                    "Automated inventory tracking and low-stock alerts",
                    "Sales trend visualization and profit analysis",
                    "Offline-first architecture for uninterrupted usage",
                    "Predictive analytics for demand forecasting"
                ],
                technical: "Frontend built with Flutter for cross-platform compatibility. Backend powered by FastAPI (Python) with MySQL, ensuring rapid response times and data integrity.",
                learned: "Gained expertise in building offline-first mobile apps, RESTful API design, and integrating simple ML models for business logic."
            }
        },
        {
            id: "agromindset",
            title: "AgroMindset – AI Disease Detection",
            repoUrl: "https://github.com/Basilisk2061/AgroMindset_CodeSprintHackathon",
            impact: "Leveraged Computer Vision to protect crop yields.",
            tags: ["Flutter", "TensorFlow", "Computer Vision", "Python"],
            description: "A simplified mobile tool for farmers to detect plant diseases instantly using on-device image analysis.",
            modalContent: {
                problem: "Early detection of plant diseases is critical for farmers, but expert advice is often inaccessible.",
                solution: "Created `AgroMindset`, an app that uses a trained Convolutional Neural Network (CNN) to diagnose plant diseases from leaf photos.",
                features: [
                    "Instant disease identification via camera",
                    "Comprehensive treatment recommendations",
                    "Localized support for rural accessibility",
                    "Lightweight model architecture for mobile deployment"
                ],
                technical: "Trained a Custom CNN model using Keras/TensorFlow. Integrated the model into a Flutter app using TFLite for efficient on-device inference.",
                learned: "Deepened understanding of the complete ML pipeline—from dataset data augmentation and model training to deployment on resource-constrained devices."
            }
        },
        {
            id: "bhrastabuster",
            title: "BhrastaBuster – Anti-Corruption Portal",
            repoUrl: "https://github.com/theaayushdev/BhrastaBusters",
            impact: "Enabled secure, anonymous civic engagement.",
            tags: ["Django", "Flutter", "Security", "NLP"],
            description: "A secure platform empowering citizens to report corruption anonymously with automated credibility verification.",
            modalContent: {
                problem: "The lack of secure, anonymous channels discourages citizens from reporting corruption incidents.",
                solution: "Architected `BhrastaBuster`, a secure whistleblower platform that prioritizes user anonymity and report verification.",
                features: [
                    "End-to-end encrypted submission channels",
                    "Automated credibility scoring using NLP",
                    "Secure media upload handling",
                    "Admin dashboard for case management"
                ],
                technical: "Backend secured with Django. Implemented NLP algorithms to analyze report text for consistency and credibility, filtering out potential spam.",
                learned: "Focused on security-first design principles, anonymous data handling, and the ethical application of AI in civic tech."
            }
        },
        {
            id: "study-cord",
            title: "StudyCord – Academic Collaboration",
            repoUrl: "https://github.com/Basilisk2061", // Fallback to profile if specific repo isn't provided, user didn't specify.
            impact: "Centralized resources for efficient peer learning.",
            tags: ["Node.js", "Flutter", "WebRTC", "Firebase"],
            description: "A dedicated platform for student collaboration, featuring real-time communication and resource sharing tools.",
            modalContent: {
                problem: "Students lack a focused, distraction-free environment for academic collaboration and resource sharing.",
                solution: "Built `StudyCord`, integrating real-time chat, voice channels, and file sharing into a unified academic hub.",
                features: [
                    "Low-latency voice and video channels via WebRTC",
                    "Real-time messaging and file sharing",
                    "Organized study groups and role management",
                    "Integration with academic resource databases"
                ],
                technical: "Developed using Node.js and Firebase for scalable real-time backend services. Utilized WebRTC for peer-to-peer media streaming.",
                learned: "Enhanced skills in real-time system architecture, socket programming, and managing concurrent user sessions."
            }
        },
        {
            id: "hotel-mgmt",
            title: "Hotel Management System",
            repoUrl: "https://github.com/Basilisk2061", // Fallback
            impact: "Automated administrative workflows.",
            tags: ["Java", "Swing", "MySQL", "JDBC"],
            description: "A robust desktop application for streamlining hotel operations, from reservation to billing.",
            modalContent: {
                problem: "Manual hotel management processes are prone to errors and inefficiency.",
                solution: "Designed a comprehensive desktop solution to automate key operational tasks.",
                features: [
                    "Visual room reservation dashboard",
                    "Guest record management and search",
                    "Automated billing and invoice generation",
                    "Database backup and recovery tools"
                ],
                technical: "Constructed using Java Swing for the UI and MySQL for data persistence, adhering to MVC design patterns.",
                learned: "Solidified understanding of desktop software architecture, relational database normalization, and JDBC interactions."
            }
        }
    ],

    education: [
        {
            institution: "Nepal Engineering College",
            degree: "Bachelor in Computer Engineering",
            year: "2022 – Present",
            location: "Changunarayan, Bhaktapur",
            description: "Specializing in Software Engineering and Artificial Intelligence. Active member of technical societies."
        },
        {
            institution: "Khwopa Secondary School",
            degree: "+2 Science",
            year: "2020 – 2022",
            location: "Bhaktapur",
            description: "Completed with distinction, majoring in Physics and Mathematics."
        }
    ],

    leadership: [
        {
            role: "Event Lead",
            organization: "CoESS (Nepal Engineering College)",
            description: "Orchestrated a 48-hour hackathon for 100+ participants. Managed cross-functional teams for logistics, sponsorship, and technical support, ensuring zero downtime."
        }
    ],

    achievements: [
        "Winner, Regional Hackathon (2024) - Recognized for innovative use of AI in agriculture.",
        "Finalist, National Code Camp - Top 10 among 500+ participants.",
        "Certified Specialist: 'Python for Everybody' (Coursera).",
        "Open Source Contributor - Active maintenance of student developer tools."
    ]
};
