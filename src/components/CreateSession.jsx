import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { requireLogin } from "../utils/auth";
import BASE_URL from "../config";

const CreateSession = () => {
  //  if (!requireLogin()) return;
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    date: "",
    time: "",
    mentor: "",
    mode: "offline",          // New field
    meetingLink: "",   // New field
    location: "",      // New field
  });

  const handleChange = (e) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("⚠️ Please login first to create a session", {
        position: "top-right",
        autoClose: 2000,
      });
      return; // block typing
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (status) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${BASE_URL}/my-sessions/${status === 'draft' ? 'save-draft' : 'publish'}`,
        { ...form, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message || 'Session saved!', {
        position: 'top-right',
        autoClose: 2000,
      });

      setForm({ title: '', description: '', time: '', duration: '', date: '', mentor: '', location: '' });
    } catch (err) {
      console.error(err.response || err);
      toast.error(err.response?.data?.message || 'Error saving session', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4 relative overflow-hidden">

      {/* SkillConnect themed dark background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-600/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>

        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Floating tech particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/80 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-32 right-40 w-1.5 h-1.5 bg-blue-400/80 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-purple-400/80 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-emerald-400/80 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto h-full flex flex-col">
        <div className="bg-gray-800/95 backdrop-blur-md shadow-2xl shadow-black/30 rounded-3xl border border-gray-700/60 relative z-10 flex-1 flex flex-col overflow-hidden">

          {/* SkillConnect Enhanced Header */}
          <div className="text-center pt-2 pb-2 px-6 flex-shrink-0 bg-gradient-to-r from-gray-800/80 via-gray-700/80 to-gray-800/80 border-b border-gray-600/50">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-2xl mb-3 shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <span className="text-2xl filter drop-shadow-lg">⚡</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
            </div>
            <h2 className="text-3xl font-black text-white mb-2 leading-tight">
              Create{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black relative">
                Skill Session
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/70 via-blue-500/70 to-purple-500/70 blur-sm rounded-full"></div>
              </span>
            </h2>
            <p className="text-gray-300 text-sm font-medium">Design and launch your next skill-sharing session</p>
          </div>

          {/* Form Container with Scroll */}
          <div className="flex-1 px-6 py-2 overflow-auto">
            <form className="space-y-5 max-w-3xl mx-auto">
              {/* Title Input - SkillConnect Dark Style */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-2"></span>
                  Session Title
                  <span className="ml-2 text-xs text-gray-400 font-normal">(What skill will you teach?)</span>
                </label>
                <div className="relative overflow-hidden rounded-xl">
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g., Advanced React Hooks, Machine Learning Basics, UI/UX Design Principles"
                    className="w-full px-4 py-3.5 border-2 border-gray-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500 font-medium placeholder-gray-400 group-hover:shadow-md text-white"
                    value={form.title}
                    onChange={handleChange}
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                </div>
              </div>

              {/* Description Textarea */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></span>
                  Session Description
                  <span className="ml-2 text-xs text-gray-400 font-normal">(What will participants learn?)</span>
                </label>
                <div className="relative overflow-hidden rounded-xl">
                  <textarea
                    name="description"
                    placeholder="Describe the skills, tools, and knowledge participants will gain from this session..."
                    className="w-full px-4 py-3.5 border-2 border-gray-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-500 font-medium placeholder-gray-400 resize-none group-hover:shadow-md text-white"
                    rows="3"
                    value={form.description}
                    onChange={handleChange}
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Session Time */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-2"></span>
                    Session Time
                  </label>
                  <div className="relative overflow-hidden rounded-xl">
                    <input
                      type="time"
                      name="time"
                      className="w-full px-4 py-3.5 border-2 border-gray-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-500 font-medium group-hover:shadow-md text-white"
                      value={form.time}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>

                {/* Session Duration */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"></span>
                    Session Duration
                  </label>
                  <div className="relative overflow-hidden rounded-xl">
                    <input
                      type="text"
                      name="duration"
                      placeholder="e.g., 1 hour, 90 minutes, 2 hours"
                      className="w-full px-4 py-3.5 border-2 border-gray-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:border-purple-500 font-medium placeholder-gray-400 group-hover:shadow-md text-white"
                      value={form.duration}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>

                {/* Session Date */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-2"></span>
                    Session Date
                  </label>
                  <div className="relative overflow-hidden rounded-xl">
                    <input
                      type="date"
                      name="date"
                      className="w-full px-4 py-3.5 border-2 border-gray-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500 font-medium group-hover:shadow-md text-white"
                      value={form.date}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>

                {/* Mentor Input */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-2"></span>
                    Lead Instructor/Mentor
                    <span className="ml-2 text-xs text-gray-400 font-normal">(Who will facilitate this session?)</span>
                  </label>
                  <div className="relative overflow-hidden rounded-xl">
                    <input
                      type="text"
                      name="mentor"
                      placeholder="Enter the name of the session facilitator"
                      className="w-full px-4 py-3.5 border-2 border-gray-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:border-orange-500 font-medium placeholder-gray-400 group-hover:shadow-md text-white"
                      value={form.mentor}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>
              </div>

              {/* Session Mode */}
              {/* Session Mode */}
              <div className="group mt-6">
                <label className="block text-sm font-bold text-gray-200 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-2"></span>
                  Session Mode
                </label>

                <div className="flex items-center justify-center bg-gray-700/60 border border-gray-600/70 rounded-xl p-1 w-fit mx-auto">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, mode: "offline" })}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${form.mode === "offline"
                      ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white"
                      }`}
                  >
                    Offline
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, mode: "online" })}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${form.mode === "online"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white"
                      }`}
                  >
                    Online
                  </button>
                </div>
              </div>


              {/* Conditional Field */}
              {form.mode === "online" ? (
                <div className="group">
                  <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-2"></span>
                    Online Meet Link
                  </label>
                  <div className="relative overflow-hidden rounded-xl">
                    <input
                      type="text"
                      name="meetingLink"
                      value={form.meetingLink}
                      onChange={handleChange}
                      placeholder="Enter Online Meet link"
                      className="w-full px-4 py-3.5 border-2 border-gray-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500 font-medium placeholder-gray-400 group-hover:shadow-md text-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>
              ) : (
                <div className="group">
                  <label className="block text-sm font-bold text-gray-200 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mr-2"></span>
                    Location
                  </label>
                  <div className="relative overflow-hidden rounded-xl">
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="Enter session location"
                      className="w-full px-4 py-3.5 border-2 border-gray-600/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 bg-gradient-to-r from-gray-700/80 to-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:border-teal-500 font-medium placeholder-gray-400 group-hover:shadow-md text-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>
              )}
            </form>

          </div>

          {/* SkillConnect Action Buttons - Fixed at bottom */}
          <div className="flex-shrink-0 px-6 py-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-t border-gray-600">
            <div className="flex gap-4 justify-center max-w-3xl mx-auto">
              <button
                type="button"
                onClick={() => handleSubmit('draft')}
                className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:via-yellow-600 hover:to-orange-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden min-w-[140px] justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">💾</span>
                  Save Draft
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                type="button"
                onClick={() => handleSubmit('published')}
                className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 hover:from-emerald-600 hover:via-green-600 hover:to-teal-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden min-w-[140px] justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  Publish
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* SkillConnect decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-600/15 via-blue-600/15 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-600/15 via-pink-600/15 to-transparent rounded-tr-full"></div>

          {/* Circuit pattern overlay */}
          <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-400">
              <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-8-5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 12h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSession;