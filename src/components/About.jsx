import React, { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    { name: "React", color: "#61DAFB", icon: <FaReact /> },
    { name: "Tailwind CSS", color: "#06B6D4", icon: <RiTailwindCssFill /> },
    { name: "JWT", color: "#FF6B6B", icon: <MdSecurity />},
    { name: "MongoDB", color: "#47A248", icon: <SiMongodb />},
    { name: "Express", color: "#68A063", icon: <SiExpress /> }
  ];

  const features = [
    {
      title: "Global Community",
      description: "Connect with experts and learners from around the world",
      icon: "🌍"
    },
    {
      title: "Live Sessions",
      description: "Interactive real-time learning experiences",
      icon: "🎥"
    },
    {
      title: "Skill Matching",
      description: "Advanced algorithms to match skills with opportunities",
      icon: "🎯"
    },
    // {
    //   title: "Progress Tracking",
    //   description: "Monitor your learning journey with detailed analytics",
    //   icon: "📊"
    // }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: `
        linear-gradient(135deg, #0f1419 0%, #1a1f2e 25%, #0d1117 50%, #161b22 75%, #0d1117 100%),
        radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)
      `,
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: "15%",
        left: "8%",
        width: "150px",
        height: "150px",
        background: "linear-gradient(45deg, rgba(56, 189, 248, 0.08), rgba(168, 85, 247, 0.08))",
        borderRadius: "50%",
        filter: "blur(60px)",
        animation: "float 12s ease-in-out infinite"
      }} />
      
      <div style={{
        position: "absolute",
        top: "60%",
        right: "12%",
        width: "120px",
        height: "120px",
        background: "linear-gradient(45deg, rgba(0, 255, 224, 0.06), rgba(56, 189, 248, 0.06))",
        borderRadius: "50%",
        filter: "blur(50px)",
        animation: "float 15s ease-in-out infinite reverse"
      }} />

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px",
        position: "relative",
        zIndex: 2
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: "center",
          marginBottom: "80px",
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "30px"
          }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                // background: "linear-gradient(135deg, #38bdf8, #a855f7)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                boxShadow: "0 4px 16px rgba(56, 189, 248, 0.3)",
                overflow: "hidden" // 👈 important to make it circular
              }}
            >
              <img
                src="/bg-removed.png"
                // src="/skillconnect_logo.png"
                alt="SkillConnect Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <h1 style={{
              fontSize: "4rem",
              fontWeight: "900",
              margin: 0,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              letterSpacing: "-2px",
              color: "#ffffff"
            }}>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black relative">
              SkillConnect
              {/* Colorful underline */}
               {/* <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-purple-500/80 blur-sm rounded-full animate-pulse"></div> */}
              {/* <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 rounded-full"></div> */}
              {/* <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/70 via-blue-500/70 to-purple-500/70 blur-sm rounded-full"></div> */}
            </span>
            </h1>
          </div>
          
          <p style={{
            fontSize: "1.5rem",
            color: "#94a3b8",
            maxWidth: "800px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          }}>
            -Where Experts Share, Learners Grow
            <br />
            Revolutionizing how the world learns and shares knowledge through cutting-edge technology and global connectivity.
          </p>

          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, rgba(0, 255, 224, 0.1), rgba(56, 189, 248, 0.1))",
            padding: "4px 8px",
            borderRadius: "12px",
            border: "1px solid rgba(0, 255, 224, 0.2)"
          }}>
            <span style={{
              color: "#00ffe0",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}>
              CONNECTING MINDS • BUILDING FUTURES
            </span>
          </div>
        </div>

        {/* What is SkillConnect Section */}
        <div style={{
          marginBottom: "80px",
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s"
        }}>
          <div style={{
            background: `
              linear-gradient(135deg, 
                rgba(56, 189, 248, 0.08) 0%, 
                rgba(168, 85, 247, 0.08) 100%
              )
            `,
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "60px 40px",
            border: "1px solid rgba(56, 189, 248, 0.15)",
            position: "relative",
            overflow: "hidden"
          }}>
            <h2 style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "40px",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}>
              All About <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black relative">
              SkillConnect
              {/* Colorful underline */}
               <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 rounded-full"></div>
              {/* <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-purple-500/80 blur-sm rounded-full animate-pulse"></div> */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/70 via-blue-500/70 to-purple-500/70 blur-sm rounded-full"></div>
            </span>
            </h2>
            
            <div style={{
              fontSize: "1.2rem",
              color: "#e2e8f0",
              lineHeight: "1.8",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}>
              <p style={{ marginBottom: "30px" }}>
                SkillConnect is a revolutionary platform that bridges the gap between knowledge seekers and industry experts. 
                We've created an ecosystem where learning transcends geographical boundaries and connects passionate individuals 
                with cutting-edge technologies and real-world expertise.
              </p>
              
              <p style={{ marginBottom: "30px" }}>
                Our platform empowers users to create, share, and participate in interactive learning sessions, 
                fostering a global community of continuous learners and innovative thinkers. Whether you're looking to 
                master the latest technologies or share your expertise with others, SkillConnect provides the tools 
                and community to accelerate your journey.
              </p>
              
              <p>
                Built with modern web technologies and designed for scalability, SkillConnect represents the future 
                of collaborative learning and professional development.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div style={{
          marginBottom: "80px",
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s"
        }}>
          <h3 style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "50px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          }}>
            Platform Features
          </h3>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  padding: "40px 30px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  textAlign: "center",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(56, 189, 248, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div style={{
                  fontSize: "3rem",
                  marginBottom: "20px"
                }}>
                  {feature.icon}
                </div>
                <h4 style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "15px",
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: "#94a3b8",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div style={{
          marginBottom: "80px",
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s"
        }}>
          <h3 style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "50px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          }}>
            Built with Modern Technologies
          </h3>
          
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px"
          }}>
            {technologies.map((tech, index) => (
              <div
                key={index}
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.06) 0%, 
                      rgba(255, 255, 255, 0.03) 100%
                    )
                  `,
                  backdropFilter: "blur(20px)",
                  border: `2px solid ${tech.color}20`,
                  borderRadius: "20px",
                  padding: "20px 30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "15px",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default",
                  minWidth: "140px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                  e.currentTarget.style.boxShadow = `0 25px 50px ${tech.color}30`;
                  e.currentTarget.style.borderColor = tech.color + "80";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = tech.color + "20";
                }}
              >
                <div style={{ fontSize: "2.5rem", color: tech.color }}>{tech.icon}</div>
                <span style={{
                  color: "#ffffff",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                }}>
                  {tech.name}
                </span>
                <div style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: tech.color,
                  boxShadow: `0 0 20px ${tech.color}`
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Developer Section */}
        <div style={{
          textAlign: "center",
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s"
        }}>
          <div style={{
            display: "inline-block",
            backdropFilter: "blur(30px)",
            padding: "60px 80px",
            borderRadius: "30px",
            border: "2px solid rgba(56, 189, 248, 0.2)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 25px 80px rgba(0, 0, 0, 0.4)"
          }}>
            {/* Static glow effect instead of animated border */}
            <div style={{
              position: "absolute",
              top: "-1px",
              left: "-1px",
              right: "-1px",
              bottom: "-1px",
              borderRadius: "30px",
              zIndex: -1,
              filter: "blur(2px)"
            }} />
            
            <div style={{
              fontSize: "4rem",
              marginBottom: "20px"
            }}>
              👨‍💻
            </div>
            
            <p style={{
              color: "#94a3b8",
              fontSize: "1rem",
              margin: "0 0 15px 0",
              fontWeight: "500",
              letterSpacing: "2px",
              textTransform: "uppercase"
            }}>
              Developed & Designed by
            </p>
            
            <h4 style={{
              background: "linear-gradient(135deg, #00ffe0, #38bdf8, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "2.5rem",
              fontWeight: "900",
              margin: "0 0 30px 0",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              letterSpacing: "-1px"
            }}>
              Sonu Kumhar
            </h4>
            
            <div style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center"
            }}>
              <a
                href="https://linkedin.com/in/sonu-kumhar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #0077b5, #005885)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 10px 30px rgba(0, 119, 181, 0.4)",
                  border: "2px solid rgba(0, 119, 181, 0.3)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px) scale(1.15) rotate(-10deg)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(0, 119, 181, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1) rotate(0deg)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 119, 181, 0.4)";
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="https://github.com/Sonu-Kumhar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #333333, #24292e)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 10px 30px rgba(36, 41, 46, 0.5)",
                  border: "2px solid rgba(255, 255, 255, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px) scale(1.15) rotate(10deg)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(36, 41, 46, 0.7)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #24292e, #000000)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1) rotate(0deg)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(36, 41, 46, 0.5)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #333333, #24292e)";
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(90deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @media (max-width: 768px) {
          h1 { font-size: 3rem !important; }
          .tech-grid { grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important; }
          .developer-section { padding: 40px 40px !important; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;