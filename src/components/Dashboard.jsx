import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const heroTexts = [
    "MASTER THE FUTURE",
    "UNLOCK YOUR POTENTIAL",
    "CONNECT WITH EXPERTS",
    "TRANSFORM YOUR SKILLS"
  ];

  // Auto-rotate hero text
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const initialCategories = [
    {
      name: "Web Development",
      description: "Frontend, Backend, Full Stack",
      emoji: "🌐",
      gradient: "from-cyan-500/10 via-blue-500/5 to-cyan-500/10",
      border: "border-cyan-400/30 hover:border-cyan-400/60",
      iconGradient: "from-cyan-400 via-blue-500 to-cyan-600",
      textColor: "text-cyan-400 group-hover/card:text-cyan-300",
      shadow: "shadow-xl group-hover/card:shadow-cyan-400/50",
      hoverBg: "hover:bg-cyan-500/15",
      cardShadow: "group-hover/card:shadow-cyan-400/50",
      overlay: "from-cyan-400/5 to-blue-400/5"
    },
    {
      name: "Data & AI",
      description: "Data Science, ML, AI Applications",
      emoji: "🤖",
      gradient: "from-emerald-500/10 via-green-500/5 to-emerald-500/10",
      border: "border-emerald-400/30 hover:border-emerald-400/60",
      iconGradient: "from-emerald-400 via-green-500 to-emerald-600",
      textColor: "text-emerald-400 group-hover/card:text-emerald-300",
      shadow: "shadow-xl group-hover/card:shadow-emerald-400/50",
      hoverBg: "hover:bg-emerald-500/15",
      cardShadow: "group-hover/card:shadow-emerald-400/50",
      overlay: "from-emerald-400/5 to-green-400/5"
    },
    {
      name: "Cloud & DevOps",
      description: "AWS, Azure, Docker, Kubernetes",
      emoji: "☁️",
      gradient: "from-purple-500/10 via-violet-500/5 to-purple-500/10",
      border: "border-purple-400/30 hover:border-purple-400/60",
      iconGradient: "from-purple-400 via-violet-500 to-purple-600",
      textColor: "text-purple-400 group-hover/card:text-purple-300",
      shadow: "shadow-xl group-hover/card:shadow-purple-400/50",
      hoverBg: "hover:bg-purple-500/15",
      cardShadow: "group-hover/card:shadow-purple-400/50",
      overlay: "from-purple-400/5 to-violet-400/5"
    },
    {
      name: "Cybersecurity",
      description: "Ethical Hacking, Network Security",
      emoji: "🔒",
      gradient: "from-pink-500/10 via-rose-500/5 to-pink-500/10",
      border: "border-pink-400/30 hover:border-pink-400/60",
      iconGradient: "from-pink-400 via-rose-500 to-pink-600",
      textColor: "text-pink-400 group-hover/card:text-pink-300",
      shadow: "shadow-xl group-hover/card:shadow-pink-400/50",
      hoverBg: "hover:bg-pink-500/15",
      cardShadow: "group-hover/card:shadow-pink-400/50",
      overlay: "from-pink-400/5 to-rose-400/5"
    },
    {
      name: "Mobile Dev",
      description: "iOS, Android, React Native",
      emoji: "📱",
      gradient: "from-orange-500/10 via-amber-500/5 to-orange-500/10",
      border: "border-orange-400/30 hover:border-orange-400/60",
      iconGradient: "from-orange-400 via-amber-500 to-orange-600",
      textColor: "text-orange-400 group-hover/card:text-orange-300",
      shadow: "shadow-xl group-hover/card:shadow-orange-400/50",
      hoverBg: "hover:bg-orange-500/15",
      cardShadow: "group-hover/card:shadow-orange-400/50",
      overlay: "from-orange-400/5 to-amber-400/5"
    },
    {
      name: "Game Dev",
      description: "Unity, Unreal, Indie Games",
      emoji: "🎮",
      gradient: "from-red-500/10 via-pink-500/5 to-red-500/10",
      border: "border-red-400/30 hover:border-red-400/60",
      iconGradient: "from-red-400 via-pink-500 to-red-600",
      textColor: "text-red-400 group-hover/card:text-red-300",
      shadow: "shadow-xl group-hover/card:shadow-red-400/50",
      hoverBg: "hover:bg-red-500/15",
      cardShadow: "group-hover/card:shadow-red-400/50",
      overlay: "from-red-400/5 to-pink-400/5"
    },
    {
      name: "Blockchain",
      description: "Web3, DeFi, Smart Contracts",
      emoji: "₿",
      gradient: "from-yellow-500/10 via-amber-500/5 to-yellow-500/10",
      border: "border-yellow-400/30 hover:border-yellow-400/60",
      iconGradient: "from-yellow-400 via-amber-500 to-yellow-600",
      textColor: "text-yellow-400 group-hover/card:text-yellow-300",
      shadow: "shadow-xl group-hover/card:shadow-yellow-400/50",
      hoverBg: "hover:bg-yellow-500/15",
      cardShadow: "group-hover/card:shadow-yellow-400/50",
      overlay: "from-yellow-400/5 to-amber-400/5"
    }
  ];

  const additionalCategories = [
    {
      name: "UI/UX Design",
      description: "User Experience, Interface Design",
      emoji: "🎨",
      gradient: "from-indigo-500/10 via-blue-500/5 to-indigo-500/10",
      border: "border-indigo-400/30 hover:border-indigo-400/60",
      iconGradient: "from-indigo-400 via-blue-500 to-indigo-600",
      textColor: "text-indigo-400 group-hover/card:text-indigo-300",
      shadow: "shadow-xl group-hover/card:shadow-indigo-400/50",
      hoverBg: "hover:bg-indigo-500/15",
      cardShadow: "group-hover/card:shadow-indigo-400/50",
      overlay: "from-indigo-400/5 to-blue-400/5"
    },
    {
      name: "Digital Marketing",
      description: "SEO, Social Media, Analytics",
      emoji: "📈",
      gradient: "from-green-500/10 via-lime-500/5 to-green-500/10",
      border: "border-green-400/30 hover:border-green-400/60",
      iconGradient: "from-green-400 via-lime-500 to-green-600",
      textColor: "text-green-400 group-hover/card:text-green-300",
      shadow: "shadow-xl group-hover/card:shadow-green-400/50",
      hoverBg: "hover:bg-green-500/15",
      cardShadow: "group-hover/card:shadow-green-400/50",
      overlay: "from-green-400/5 to-lime-400/5"
    },
    {
      name: "IoT & Hardware",
      description: "Arduino, Raspberry Pi, Sensors",
      emoji: "🔌",
      gradient: "from-blue-500/10 via-sky-500/5 to-blue-500/10",
      border: "border-blue-400/30 hover:border-blue-400/60",
      iconGradient: "from-blue-400 via-sky-500 to-blue-600",
      textColor: "text-blue-400 group-hover/card:text-blue-300",
      shadow: "shadow-xl group-hover/card:shadow-blue-400/50",
      hoverBg: "hover:bg-blue-500/15",
      cardShadow: "group-hover/card:shadow-blue-400/50",
      overlay: "from-blue-400/5 to-sky-400/5"
    },
    {
      name: "3D & Animation",
      description: "Blender, Maya, Motion Graphics",
      emoji: "🎬",
      gradient: "from-violet-500/10 via-purple-500/5 to-violet-500/10",
      border: "border-violet-400/30 hover:border-violet-400/60",
      iconGradient: "from-violet-400 via-purple-500 to-violet-600",
      textColor: "text-violet-400 group-hover/card:text-violet-300",
      shadow: "shadow-xl group-hover/card:shadow-violet-400/50",
      hoverBg: "hover:bg-violet-500/15",
      cardShadow: "group-hover/card:shadow-violet-400/50",
      overlay: "from-violet-400/5 to-purple-400/5"
    },
    {
      name: "Database Systems",
      description: "SQL, NoSQL, Big Data",
      emoji: "🗄️",
      gradient: "from-slate-500/10 via-zinc-500/5 to-slate-500/10",
      border: "border-slate-400/30 hover:border-slate-400/60",
      iconGradient: "from-slate-400 via-zinc-500 to-slate-600",
      textColor: "text-slate-400 group-hover/card:text-slate-300",
      shadow: "shadow-xl group-hover/card:shadow-slate-400/50",
      hoverBg: "hover:bg-slate-500/15",
      cardShadow: "group-hover/card:shadow-slate-400/50",
      overlay: "from-slate-400/5 to-zinc-400/5"
    },
    {
      name: "AR/VR Development",
      description: "Virtual Reality, Augmented Reality",
      emoji: "🥽",
      gradient: "from-fuchsia-500/10 via-pink-500/5 to-fuchsia-500/10",
      border: "border-fuchsia-400/30 hover:border-fuchsia-400/60",
      iconGradient: "from-fuchsia-400 via-pink-500 to-fuchsia-600",
      textColor: "text-fuchsia-400 group-hover/card:text-fuchsia-300",
      shadow: "shadow-xl group-hover/card:shadow-fuchsia-400/50",
      hoverBg: "hover:bg-fuchsia-500/15",
      cardShadow: "group-hover/card:shadow-fuchsia-400/50",
      overlay: "from-fuchsia-400/5 to-pink-400/5"
    },
    {
      name: "Business Intelligence",
      description: "Tableau, Power BI, Analytics",
      emoji: "📊",
      gradient: "from-teal-500/10 via-cyan-500/5 to-teal-500/10",
      border: "border-teal-400/30 hover:border-teal-400/60",
      iconGradient: "from-teal-400 via-cyan-500 to-teal-600",
      textColor: "text-teal-400 group-hover/card:text-teal-300",
      shadow: "shadow-xl group-hover/card:shadow-teal-400/50",
      hoverBg: "hover:bg-teal-500/15",
      cardShadow: "group-hover/card:shadow-teal-400/50",
      overlay: "from-teal-400/5 to-cyan-400/5"
    },
    {
      name: "Quantum Computing",
      description: "Quantum Algorithms, Qiskit",
      emoji: "⚛️",
      gradient: "from-rose-500/10 via-pink-500/5 to-rose-500/10",
      border: "border-rose-400/30 hover:border-rose-400/60",
      iconGradient: "from-rose-400 via-pink-500 to-rose-600",
      textColor: "text-rose-400 group-hover/card:text-rose-300",
      shadow: "shadow-xl group-hover/card:shadow-rose-400/50",
      hoverBg: "hover:bg-rose-500/15",
      cardShadow: "group-hover/card:shadow-rose-400/50",
      overlay: "from-rose-400/5 to-pink-400/5"
    },
    {
      name: "Robotics",
      description: "ROS, Automation, AI Robotics",
      emoji: "🤖",
      gradient: "from-amber-500/10 via-orange-500/5 to-amber-500/10",
      border: "border-amber-400/30 hover:border-amber-400/60",
      iconGradient: "from-amber-400 via-orange-500 to-amber-600",
      textColor: "text-amber-400 group-hover/card:text-amber-300",
      shadow: "shadow-xl group-hover/card:shadow-amber-400/50",
      hoverBg: "hover:bg-amber-500/15",
      cardShadow: "group-hover/card:shadow-amber-400/50",
      overlay: "from-amber-400/5 to-orange-400/5"
    },
    {
      name: "Software Testing",
      description: "QA, Automation, Testing Tools",
      emoji: "🧪",
      gradient: "from-lime-500/10 via-green-500/5 to-lime-500/10",
      border: "border-lime-400/30 hover:border-lime-400/60",
      iconGradient: "from-lime-400 via-green-500 to-lime-600",
      textColor: "text-lime-400 group-hover/card:text-lime-300",
      shadow: "shadow-xl group-hover/card:shadow-lime-400/50",
      hoverBg: "hover:bg-lime-500/15",
      cardShadow: "group-hover/card:shadow-lime-400/50",
      overlay: "from-lime-400/5 to-green-400/5"
    },
    {
      name: "Product Management",
      description: "Strategy, Roadmaps, Agile",
      emoji: "📋",
      gradient: "from-sky-500/10 via-blue-500/5 to-sky-500/10",
      border: "border-sky-400/30 hover:border-sky-400/60",
      iconGradient: "from-sky-400 via-blue-500 to-sky-600",
      textColor: "text-sky-400 group-hover/card:text-sky-300",
      shadow: "shadow-xl group-hover/card:shadow-sky-400/50",
      hoverBg: "hover:bg-sky-500/15",
      cardShadow: "group-hover/card:shadow-sky-400/50",
      overlay: "from-sky-400/5 to-blue-400/5"
    },
    {
      name: "API Development",
      description: "REST, GraphQL, Microservices",
      emoji: "🔗",
      gradient: "from-emerald-500/10 via-teal-500/5 to-emerald-500/10",
      border: "border-emerald-400/30 hover:border-emerald-400/60",
      iconGradient: "from-emerald-400 via-teal-500 to-emerald-600",
      textColor: "text-emerald-400 group-hover/card:text-emerald-300",
      shadow: "shadow-xl group-hover/card:shadow-emerald-400/50",
      hoverBg: "hover:bg-emerald-500/15",
      cardShadow: "group-hover/card:shadow-emerald-400/50",
      overlay: "from-emerald-400/5 to-teal-400/5"
    }
  ];

  const displayedCategories = showAllCategories
    ? [...initialCategories, ...additionalCategories]
    : [...initialCategories, {
      name: "Many More",
      description: "Explore all categories →",
      emoji: "⚡",
      gradient: "from-gray-500/10 via-slate-500/5 to-gray-500/10",
      border: "border-gray-400/30 hover:border-gray-400/60",
      iconGradient: "from-gray-400 via-slate-500 to-gray-600",
      textColor: "text-gray-400 group-hover/card:text-gray-300",
      shadow: "shadow-xl group-hover/card:shadow-gray-400/50",
      hoverBg: "hover:bg-gray-500/15",
      cardShadow: "group-hover/card:shadow-gray-400/50",
      overlay: "from-gray-400/5 to-slate-400/5",
      descriptionColor: "text-gray-400 group-hover/card:text-gray-300"
    }];

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "Many More") {
      setShowAllCategories(true);
    }
    // Add navigation logic for other categories here if needed
  };

  const handleViewAllClick = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      
      {/* Enhanced animated background */}
      <div className="absolute inset-0 opacity-70">
        {/* Massive colorful orbs */}
        <div className="absolute -top-60 -right-60 w-[800px] h-[800px] bg-gradient-to-br from-cyan-600/25 via-blue-600/20 to-purple-600/25 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-60 -left-60 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-600/25 via-teal-600/20 to-cyan-600/25 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Moving particles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full blur-xl animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-20 h-20 bg-gradient-to-br from-emerald-500/40 to-green-500/40 rounded-full blur-lg animate-bounce" style={{ animationDelay: '4s' }}></div>

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px'
          }}></div>
        </div>

        {/* Multiple animated accent lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400/90 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-emerald-400/90 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-0 w-2 h-full bg-gradient-to-b from-transparent via-purple-400/90 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-0 w-2 h-full bg-gradient-to-b from-transparent via-pink-400/90 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Dashboard content */}
      <div className="relative max-w-6xl w-full">
        {/* Mind-blowing header section */}
        <div className="text-center mb-16">

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black relative block sm:inline">
              SkillConnect
              {/* Enhanced colorful underlines */}
              <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-purple-500/80 blur-sm rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 rounded-full"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed mb-8">
            Connect, learn, and master cutting-edge technologies with our global community of experts
          </p>
        </div>

        {/* SPECTACULAR ANIMATED TEXT SECTION - Replacing the 3 cards */}
        <div className="mb-20 relative">
          {/* Main animated hero text */}
          <div className="text-center mb-12 relative">
            <div className="relative h-24 md:h-32 overflow-hidden w-full max-w-6xl mx-auto">
              {heroTexts((text, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 px-4 ${index === textIndex
                    ? 'opacity-100 transform translate-y-0 scale-100'
                    : 'opacity-0 transform translate-y-8 scale-95'
                    }`}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent leading-tight animate-pulse text-center">
                    {text}
                  </h2>
                </div>
              ))}
            </div>

            {/* Spectacular light effects around text */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 blur-2xl rounded-full animate-pulse"></div>
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/10 via-pink-400/10 to-teal-400/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Floating animated words/particles */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            {/* Mobile Layout (stacked, no overlap) */}
            <div className="flex flex-wrap justify-center items-center gap-6 px-4 py-6 md:hidden">
              <div className="animate-float text-cyan-400 font-bold text-sm opacity-80">
                AI & MACHINE LEARNING
              </div>
              <div className="animate-float text-purple-400 font-bold text-sm opacity-80" style={{ animationDelay: '1s' }}>
                BLOCKCHAIN & WEB3
              </div>
              <div className="animate-float text-emerald-400 font-bold text-sm opacity-80" style={{ animationDelay: '2s' }}>
                CLOUD COMPUTING
              </div>
              <div className="animate-float text-pink-400 font-bold text-sm opacity-80" style={{ animationDelay: '3s' }}>
                CYBERSECURITY
              </div>
              <div className="animate-float text-yellow-400 font-bold text-sm opacity-80" style={{ animationDelay: '4s' }}>
                FULL STACK DEV
              </div>
              <div className="animate-float text-blue-400 font-bold text-sm opacity-80" style={{ animationDelay: '5s' }}>
                DATA SCIENCE
              </div>
              <div className="animate-float text-orange-400 font-bold text-sm opacity-80" style={{ animationDelay: '6s' }}>
                MOBILE DEVELOPMENT
              </div>
            </div>

            {/* Desktop Layout (absolute floating, your original style) */}
            <div className="hidden md:block">
              <div className="absolute top-8 left-10 animate-float text-cyan-400 font-bold text-lg opacity-80">
                AI & MACHINE LEARNING
              </div>
              <div className="absolute top-16 right-20 animate-float text-purple-400 font-bold text-lg opacity-80" style={{ animationDelay: '1s' }}>
                BLOCKCHAIN & WEB3
              </div>
              <div className="absolute top-32 left-1/4 animate-float text-emerald-400 font-bold text-lg opacity-80" style={{ animationDelay: '2s' }}>
                CLOUD COMPUTING
              </div>
              <div className="absolute top-8 right-1/3 animate-float text-pink-400 font-bold text-lg opacity-80" style={{ animationDelay: '3s' }}>
                CYBERSECURITY
              </div>
              <div className="absolute bottom-20 right-16 animate-float text-yellow-400 font-bold text-lg opacity-80" style={{ animationDelay: '4s' }}>
                FULL STACK DEV
              </div>
              <div className="absolute bottom-16 left-20 animate-float text-blue-400 font-bold text-lg opacity-80" style={{ animationDelay: '5s' }}>
                DATA SCIENCE
              </div>
              <div className="absolute top-24 left-1/2 animate-float text-orange-400 font-bold text-lg opacity-80" style={{ animationDelay: '6s' }}>
                MOBILE DEVELOPMENT
              </div>

              {/* Glowing particles */}
              <div className="absolute top-12 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute top-40 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-32 left-1/5 w-4 h-4 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-28 right-1/5 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
              <div className="absolute bottom-16 right-1/3 w-3.5 h-3.5 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
              <div className="absolute bottom-40 left-2/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '5s' }}></div>
            </div>
          </div>


          {/* Spectacular call-to-action section */}
          <div className="text-center relative z-10">
            <div className="inline-block relative">
              <div className="bg-gradient-to-r from-gray-800/90 via-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-600/50 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  {/* Animated icons */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-400/50 animate-bounce">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-400/50 animate-bounce" style={{ animationDelay: '0.5s' }}>
                      <span className="text-white text-xl">⭐</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-400/50 animate-bounce" style={{ animationDelay: '1s' }}>
                      <span className="text-white text-xl">💎</span>
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                      Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Future?
                    </h3>
                    <p className="text-gray-300 text-lg">Join thousands of learners mastering tomorrow's skills today</p>
                  </div>
                </div>

                {/* Pulsing border effect */}
                {/* <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-emerald-400/50 rounded-3xl blur-sm animate-pulse -z-10"></div> */}
              </div>
            </div>
          </div>

          {/* Matrix-style falling code effect */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 left-16 text-green-400 font-mono text-xs animate-matrix-fall">
              01001000 01100101 01101100 01101100 01101111
            </div>
            <div className="absolute top-0 right-24 text-cyan-400 font-mono text-xs animate-matrix-fall" style={{ animationDelay: '2s' }}>
              &lt;skills&gt;&lt;/future&gt;
            </div>
            <div className="absolute top-0 left-1/3 text-purple-400 font-mono text-xs animate-matrix-fall" style={{ animationDelay: '4s' }}>
              def learn(): return success
            </div>
            <div className="absolute top-0 right-1/3 text-emerald-400 font-mono text-xs animate-matrix-fall" style={{ animationDelay: '6s' }}>
              SELECT * FROM opportunities
            </div>
          </div>
        </div>

        {/* Technology Categories Section */}
        <div className="mt-16 relative">
          {/* Dark container with enhanced colorful styling */}
          {/* <div className="bg-gray-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-black/30 border border-gray-700/60 relative overflow-hidden"> */}
          <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 rounded-3xl p-8 shadow-2xl border border-gray-700/50 relative overflow-hidden">


            {/* Enhanced dark glow effects */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-8 w-40 h-40 bg-gradient-to-bl from-cyan-600/20 via-blue-600/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-4 left-8 w-36 h-36 bg-gradient-to-tr from-emerald-600/20 via-teal-600/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-8 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-600/15 to-orange-600/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '3s' }}></div>
              <div className="absolute bottom-8 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-600/15 to-rose-600/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Section header with enhanced dark styling */}
            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping shadow-lg shadow-cyan-400/50"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping shadow-lg shadow-emerald-400/50" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3.5 h-3.5 bg-purple-400 rounded-full animate-ping shadow-lg shadow-purple-400/50" style={{ animationDelay: '1s' }}></div>
                <div className="w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping shadow-lg shadow-pink-400/50" style={{ animationDelay: '1.5s' }}></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping shadow-lg shadow-yellow-400/50" style={{ animationDelay: '2s' }}></div>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                Explore Our <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black animate-pulse">
                  {showAllCategories ? 'All Categories' : 'Top Categories'}
                </span>
              </h3>
              <p className="text-gray-300 text-lg">Master cutting-edge skills across multiple technology domains</p>
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10 mb-8 transition-all duration-500 ${showAllCategories ? 'max-h-none' : ''
              }`}>
              {displayedCategories.map((category, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`group/tech bg-gradient-to-br ${category.gradient} backdrop-blur-sm rounded-2xl p-5 pl-4 border-2 ${category.border} transition-all duration-500 ${category.hoverBg} relative overflow-hidden cursor-pointer hover:shadow-lg ${category.cardShadow} hover:scale-105`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.overlay} rounded-2xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500`}></div>

                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.iconGradient} rounded-xl mb-3 shadow-lg ${category.shadow} group-hover/tech:scale-110 transition-all duration-500 relative z-10`}>
                    <span className="text-white font-bold text-base drop-shadow-lg">{category.emoji}</span>
                  </div>
                  <div className={`${category.textColor} font-bold text-base mb-2 transition-colors relative z-10`}>{category.name}</div>
                  <div className={`${category.descriptionColor || 'text-gray-400 group-hover/tech:text-gray-300'} text-xs leading-relaxed transition-colors relative z-10`}>{category.description}</div>

                  {/* Enhanced hover effects */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-sm opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-tr from-white/10 to-white/5 rounded-full blur-sm opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Enhanced View All Categories Button */}
            <div className="text-center relative z-10">
              <button
                onClick={handleViewAllClick}
                className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/40 overflow-hidden"
              >
                {/* Button glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 via-blue-400/50 to-purple-400/50 rounded-2xl blur-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                <span className="relative z-10">{showAllCategories ? 'Show Less Categories' : 'View All Categories'}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-200 relative z-10 ${showAllCategories
                    ? 'rotate-180 group-hover/btn:-translate-y-1'
                    : 'group-hover/btn:translate-x-1'
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {showAllCategories ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  )}
                </svg>

                {/* Animated particles inside button */}
                <div className="absolute top-2 left-4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 right-6 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </button>
            </div>

            {/* Enhanced bottom decorative elements */}
            <div className="mt-12 flex justify-center items-center gap-6 relative z-10">
              <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-matrix-fall {
          animation: matrix-fall 8s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
