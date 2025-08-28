import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { requireLogin } from "../utils/auth";
import BASE_URL from "../config";

const PublishedSessions = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [registeredSessions, setRegisteredSessions] = useState({}); // Track registered sessions

  const handleRegister = async (sessionId) => {
    if (!requireLogin()) return;
    const confirmRegister = window.confirm(
      "Are you sure you want to register for this session?"
    );
    if (!confirmRegister) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You must be logged in to register!");
        return;
      }

      const res = await axios.post(
        `${BASE_URL}/sessions/${sessionId}/register`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update the sessions state with new registrationCount
      setSessions((prev) =>
        prev.map((s) =>
          s._id === sessionId
            ? { ...s, registrationCount: res.data.count } // use backend field
            : s
        )
      );

      // Mark this session as registered in local state
      setRegisteredSessions((prev) => ({ ...prev, [sessionId]: true }));

      toast.success("You have successfully registered for this session!");
    } catch (err) {
      if (err.response?.data?.message === "Already registered") {
        toast.info("⚠ You are already registered for this session.");
        // Mark as registered to disable button
        setRegisteredSessions((prev) => ({ ...prev, [sessionId]: true }));
      } else if (err.response?.status === 403) {
        toast.error("Unauthorized! Please login again.");
      } else {
        toast.error("Failed to register for this session.");
      }
    }
  };




  useEffect(() => {
    const fetchPublishedSessions = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/sessions`);
        const token = localStorage.getItem("token");
        let userId = null;
        if (token) {
          const payload = JSON.parse(atob(token.split(".")[1]));
          userId = payload.id;
        }

        const sessionsWithCount = res.data.map((s) => ({
          ...s,
          registrationCount: s.registeredCount || 0, // use correct backend field
          alreadyRegistered: userId
            ? s.registeredUsers?.some(u => u.toString() === userId)
            : false,
        }));

        setSessions(sessionsWithCount);
        if (userId) {
          const registeredMap = {};
          sessionsWithCount.forEach((s) => {
            if (s.alreadyRegistered) registeredMap[s._id] = true;
          });
          setRegisteredSessions(registeredMap);
        }
      } catch (err) {
        toast.error("Failed to load published sessions");
      } finally {
        setLoading(false);
      }
    };

    fetchPublishedSessions();
  }, []);


  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mb-4 animate-spin shadow-2xl">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <p className="text-xl font-semibold text-gray-100 animate-pulse">
            Loading published sessions...
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Please wait while we fetch the latest content
          </p>
        </div>
      </div>
    );

  return (
    <div className="relative min-h-screen px-4 py-10 bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Dark Theme Gradient Background with animated elements */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-800/30 to-teal-800/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-700/20 to-purple-700/20 rounded-full blur-2xl animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto my-4">
        {/* Enhanced dark header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-500 rounded-3xl mb-6 shadow-2xl ring-4 ring-purple-500/20">
            <span className="text-3xl">🌍</span>
          </div>
          <h2 className="text-5xl font-black text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Published Skill Sessions
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-medium max-w-2xl mx-auto">
            Discover and explore skills sessions shared by our amazing community
          </p>
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full mb-6 shadow-lg border border-gray-600/20">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold text-gray-200 mb-2">
              No sessions available
            </p>
            <p className="text-gray-400">
              Check back later for new skill sessions from our community
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((sesh) => (
              <div
                key={sesh._id}
                className="group bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 p-8 flex flex-col justify-between transform hover:-translate-y-2 overflow-hidden relative"
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Decorative corner */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-300"></div>

                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-white transition-colors leading-tight">
                    {sesh.title}
                  </h3>

                  {/* Mode badge */}
                  <div className="mb-4">
                    {sesh.mode === "online" ? (
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800/80 to-indigo-800/80 text-blue-300 text-sm font-bold px-4 py-2 rounded-full shadow-sm border border-blue-700/30">
                        🌐 Online
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-800/80 to-green-800/80 text-emerald-300 text-sm font-bold px-4 py-2 rounded-full shadow-sm border border-emerald-700/30">
                        📍 Offline
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-base mb-6 line-clamp-3 leading-relaxed">
                    {sesh.description || "No description provided."}
                  </p>
                </div>

                {/* Session details */}
                <div className="relative z-10 mt-auto space-y-3">
                  {/* Date */}
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-800/60 rounded-lg border border-blue-700/30">
                      📅
                    </div>
                    <span className="font-medium">
                      {sesh.date ? sesh.date.slice(0, 10) : "No date"}
                    </span>
                  </div>

                  {/* Time */}
                  {/* Time */}
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-800/60 rounded-lg border border-green-700/30">
                      ⏰
                    </div>
                    <span className="font-medium">
                      {sesh.time
                        ? new Date(`1970-01-01T${sesh.time}`).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })
                        : "No time specified"}
                    </span>
                  </div>


                  {/* Duration */}
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-800/60 rounded-lg border border-orange-700/30">
                      ⏳
                    </div>
                    <span className="font-medium">{sesh.duration || "N/A"}</span>
                  </div>

                  {/* Mentor */}
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="flex items-center justify-center w-8 h-8 bg-purple-800/60 rounded-lg border border-purple-700/30">
                      🧑‍🏫
                    </div>
                    <span className="font-medium">{sesh.mentor || "Unknown mentor"}</span>
                  </div>

                  {/* Location or Meeting Link */}
                  {sesh.mode === "online" ? (
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="flex items-center justify-center w-8 h-8 bg-indigo-800/60 rounded-lg border border-indigo-700/30">
                        🔗
                      </div>
                      {sesh.meetingLink ? (
                        <a
                          href={sesh.meetingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-400 hover:underline"
                        >
                          Join Meeting
                        </a>
                      ) : (
                        <span className="font-medium">No link provided</span>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="flex items-center justify-center w-8 h-8 bg-pink-800/60 rounded-lg border border-pink-700/30">
                        📍
                      </div>
                      <span className="font-medium">
                        {sesh.location || "No location provided"}
                      </span>
                    </div>
                  )}

                  {/* Registration count */}
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="flex items-center justify-center w-8 h-8 bg-yellow-800/60 rounded-lg border border-yellow-700/30">
                      👥
                    </div>
                    <span className="font-medium">
                      {sesh.registrationCount}{" "}
                      {sesh.registrationCount === 1 ? "user" : "users"} registered
                    </span>
                  </div>
                </div>

                {/* Register button */}
                <div className="relative z-10 mt-6 text-center">
                  {registeredSessions[sesh._id] ? (
                    <button
                      disabled
                      className="w-full bg-gray-600 text-gray-300 font-semibold py-2 px-4 rounded-xl cursor-not-allowed"
                    >
                      Already Registered
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRegister(sesh._id)}
                      className="button-fill w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Register
                    </button>
                  )}
                </div>
              </div>
            ))}

          </div>
        )}

        {/* Extra info */}
        {sessions.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-gray-800/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-700/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-200">
                  {sessions.length} Active Sessions
                </span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold text-gray-200">
                  Community Verified
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublishedSessions;
