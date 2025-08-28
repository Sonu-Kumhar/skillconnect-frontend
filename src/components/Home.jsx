import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaSignInAlt, FaUserPlus, FaChalkboardTeacher, FaUsers, FaLaptopCode } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 px-4 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-xl"></div>
      </div>

      <div className="bg-gray-800/90 backdrop-blur-sm shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center border border-gray-700/50 relative z-10 transform hover:scale-105 transition-all duration-300 ring-1 ring-gray-600/30">
        
        {/* Logo / Icon with glow effect */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-400/40 rounded-full blur-xl scale-150"></div>
            <FaGraduationCap className="text-indigo-400 text-6xl relative z-10 drop-shadow-lg animate-pulse" />
          </div>
        </div>

        {/* Title with enhanced styling */}
        <h1 className="text-4xl font-black text-white mb-4 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            SkillConnect
          </span>
        </h1>

        {/* Subtitle with platform description */}
        <p className="text-gray-300 text-base mb-6 leading-relaxed font-medium">
          Connect with experts and master new skills through live sessions and seminars.{' '}
          <br className="hidden sm:block" />
          Learn from the best or share your expertise with others.
        </p>

        {/* Feature highlights */}
        <div className="flex justify-center gap-6 mb-8 text-sm text-gray-400">
          <div className="flex flex-col items-center gap-1">
            <FaChalkboardTeacher className="text-indigo-400 text-xl" />
            <span>Expert Sessions</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaUsers className="text-purple-400 text-xl" />
            <span>Live Learning</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaLaptopCode className="text-pink-400 text-xl" />
            <span>Tech Skills</span>
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col gap-4">
          <Link to="/login">
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full transform hover:-translate-y-1 active:translate-y-0 border border-indigo-400/20 hover:border-indigo-400/40">
              <FaSignInAlt className="group-hover:scale-110 transition-transform duration-200" />
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full transform hover:-translate-y-1 active:translate-y-0 border border-pink-400/20 hover:border-pink-400/40">
              <FaUserPlus className="group-hover:scale-110 transition-transform duration-200" />
              Register
            </button>
          </Link>
        </div>

        {/* Call-to-action text */}
        <div className="mt-6 text-sm text-gray-400 font-medium">
          Join thousands learning Web Development, Data Science, AI, Cybersecurity, Cloud & more!
        </div>

        {/* Additional decorative element */}
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce shadow-lg shadow-indigo-400/50"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-400/50" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce shadow-lg shadow-pink-400/50" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;