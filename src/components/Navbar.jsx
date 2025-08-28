import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [userEmail, setUserEmail] = useState("");

   useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("userEmail");

    // only set email if token also exists
    if (token && email) {
      setUserEmail(email);
    } else {
      setUserEmail("");
      localStorage.removeItem("userEmail"); // clean up ghost email
    }
  }, []);


  const links = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "My Sessions", path: "/dashboard/my-sessions", icon: <IoBookSharp /> },
    { name: "Create Session", path: "/dashboard/create-session", icon: <FaPlus /> },
    { name: "Published Sessions", path: "/dashboard/published-sessions", icon: <FaGlobe /> },
    { name: "About", path: "/about", icon: <BsFillInfoCircleFill /> },
    // Show Logout only if user is logged in, else show Login
    ...(userEmail
      ? [{ name: "Logout", path: "/logout", icon: <RiLogoutBoxLine />, isLogout: true }]
      : [{ name: "Login", path: "/login", icon: <RiLoginBoxLine /> }]),
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          width: "56px",
          height: "56px",
          background: `
            linear-gradient(135deg, 
              rgba(56, 189, 248, 0.9) 0%, 
              rgba(168, 85, 247, 0.9) 100%
            )
          `,
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          borderRadius: "16px",
          cursor: "pointer",
          zIndex: 1001,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 8px 32px rgba(56, 189, 248, 0.3)",
          transform: isOpen ? "scale(1.1) rotate(90deg)" : "scale(1) rotate(0deg)",
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(56, 189, 248, 0.5)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(56, 189, 248, 0.3)";
          }
        }}
      >
        {/* Hamburger Lines */}
        <div
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#ffffff",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            transform: isOpen ? "rotate(45deg) translateY(6px)" : "rotate(0deg)",
          }}
        />
        <div
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#ffffff",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "scale(0)" : "scale(1)",
          }}
        />
        <div
          style={{
            width: "24px",
            height: "2px",
            backgroundColor: "#ffffff",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            transform: isOpen ? "rotate(-45deg) translateY(-6px)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(8px)",
            zIndex: 999,
            animation: "fadeIn 0.3s ease",
          }}
        />
      )}

      {/* Menu Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "320px",
          height: "100vh",
          background: `
            linear-gradient(135deg, 
              #1a1f36 0%, 
              #2d3748 25%, 
              #1a202c 50%, 
              #2a2d3e 75%, 
              #1e2532 100%
            )
          `,
          backdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(56, 189, 248, 0.2)",
          zIndex: 1000,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: isOpen ? "-10px 0 50px rgba(0, 0, 0, 0.3)" : "none",
          overflowY: "auto",
        }}
      >
        {/* Menu Header */}
        <div style={{
          padding: "30px 24px 20px",
          borderBottom: "1px solid rgba(56, 189, 248, 0.1)",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "8px"
          }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                background: "linear-gradient(135deg, #38bdf8, #a855f7)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                boxShadow: "0 4px 16px rgba(56, 189, 248, 0.3)",
                overflow: "hidden" // 👈 important to make it circular
              }}
            >
              <img
                src="/skillconnect_logo.png"
                alt="SkillConnect Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 style={{
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "800",
                margin: 0,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black relative">
                  SkillConnect
                  {/* Enhanced colorful underlines */}
                </span>
              </h3>
              <p style={{
                // color: "#64748b",
                color:"white",
                fontSize: "11px",
                margin: 0,
                fontWeight: "500",
                letterSpacing: "0.5px"
              }}>
                {userEmail || "NAVIGATION"}
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div style={{ padding: "20px 0" }}>
          {links.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 24px",
                color: location.pathname === link.path ? "#00ffe0" : "#ffffff",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                background: location.pathname === link.path
                  ? "linear-gradient(90deg, rgba(0, 255, 224, 0.1), rgba(56, 189, 248, 0.05))"
                  : "transparent",
                borderLeft: location.pathname === link.path
                  ? "3px solid #00ffe0"
                  : "3px solid transparent",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== link.path) {
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                  e.target.style.borderLeftColor = "rgba(56, 189, 248, 0.5)";
                  e.target.style.color = "#38bdf8";
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.path) {
                  e.target.style.background = "transparent";
                  e.target.style.borderLeftColor = "transparent";
                  e.target.style.color = "#ffffff";
                }
              }}
            >
              {/* Icon */}
              <span
                style={{
                  fontSize: "20px",     // uniform icon size
                  width: "24px",        // fixed width for alignment
                  height: "24px",       // ensures vertical consistency
                  display: "flex",      // centers icon inside the box
                  alignItems: "center",
                  justifyContent: "center",
                  filter: link.isLogout ? "grayscale(100%)" : "none",
                }}
              >
                {link.icon}
              </span>

              {/* Text */}
              <span style={{
                flex: 1,
                color: link.isLogout ? "#ef4444" : "inherit"
              }}>
                {link.name}
              </span>

              {/* Active Indicator */}
              {location.pathname === link.path && (
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00ffe0, #38bdf8)",
                  boxShadow: "0 0 12px #00ffe0"
                }} />
              )}

              {/* Hover Effect Overlay */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.1), transparent)",
                transform: "translateX(-100%)",
                transition: "transform 0.6s ease",
                pointerEvents: "none"
              }} />
            </Link>
          ))}
        </div>

        {/* Menu Footer */}
        <div style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          padding: "20px 24px",
          borderTop: "1px solid rgba(56, 189, 248, 0.1)",
          background: "rgba(0, 0, 0, 0.2)"
        }}>
          <div style={{
            textAlign: "center",
            color: "#64748b",
            fontSize: "12px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              marginBottom: "4px"
            }}>
              <div style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#38bdf8",
                boxShadow: "0 0 6px #38bdf8"
              }} />
              <span>Connected</span>
              <div style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#00ffe0",
                boxShadow: "0 0 6px #00ffe0"
              }} />
            </div>
            <div>© 2025 SkillConnect</div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @media (max-width: 640px) {
          .menu-panel {
            width: 100vw !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
