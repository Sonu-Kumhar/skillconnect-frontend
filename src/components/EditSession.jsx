import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BASE_URL from "../config";

const EditSession = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    date: "",
    time: "",
    mentor: "",
    mode: "offline", // default
    location: "",
    meetingLink: "",
    status: "draft",
  });

  const [loading, setLoading] = useState(true);

  // Fetch session details
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${BASE_URL}/my-sessions`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const session = res.data.find((s) => s._id === id);
        if (session) {
          setForm({
            ...session,
            date: session.date ? session.date.slice(0, 10) : "",
            time: session.time || "",
            mentor: session.mentor || "",
            mode: session.mode || "offline",
            location: session.location || "",
            meetingLink: session.meetingLink || "",
          });
        } else {
          toast.error("❌ Session not found");
        }
      } catch (err) {
        toast.error("❌ Failed to load session");
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`${BASE_URL}/my-sessions/${id}`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Session updated successfully!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      toast.error("❌ Error updating session");
    }
  };

  if (loading)
    return (
      <div className="h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-200 font-medium">
            Loading session details...
          </p>
        </div>
      </div>
    );

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-4 flex-shrink-0">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mb-3 shadow-lg">
            <span className="text-xl">✏️</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Edit Skill Session
          </h2>
          <p className="text-gray-300">
            Update your session details and preferences
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-700/50 flex-1 flex flex-col overflow-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-4 flex-shrink-0 rounded-t-2xl">
            <h3 className="text-lg font-semibold text-white">
              Session Information
            </h3>
            <p className="text-purple-100 text-sm">
              Fill in the details below to update your session
            </p>
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Session Title */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-200 mb-1 flex items-center">
                    <span className="mr-2">📝</span>
                    Session Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter session title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-600 bg-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400"
                  />
                </div>

                {/* Duration */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-200 mb-1 flex items-center">
                    <span className="mr-2">⏱️</span>
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    placeholder="e.g., 45 mins, 1 hour"
                    value={form.duration}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-600 bg-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400"
                  />
                </div>

                {/* Date */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-200 mb-1 flex items-center">
                    <span className="mr-2">📅</span>
                    Session Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-600 bg-gray-700/50 rounded-xl text-gray-100"
                  />
                </div>

                {/* Time */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-200 mb-1 flex items-center">
                    <span className="mr-2">⏰</span>
                    Session Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-600 bg-gray-700/50 rounded-xl text-gray-100"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Mentor */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-200 mb-1 flex items-center">
                    <span className="mr-2">👨‍🏫</span>
                    Mentor Name
                  </label>
                  <input
                    type="text"
                    name="mentor"
                    placeholder="Enter mentor's name"
                    value={form.mentor}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-600 bg-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400"
                  />
                </div>

                {/* Mode (Online/Offline) */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-200 mb-1 flex items-center">
                    <span className="mr-2">🌐</span>
                    Mode
                  </label>
                  <select
                    name="mode"
                    value={form.mode}
                    onChange={handleChange}
                    className="w-full p-3.5 border-2 border-gray-600 bg-gray-700/50 rounded-xl text-gray-100"
                  >
                    <option value="offline">🏫 Offline</option>
                    <option value="online">💻 Online</option>
                  </select>
                </div>

                {/* Conditional: Meeting Link if Online */}
                {form.mode === "online" ? (
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-200 mb-1 flex items-center">
                      <span className="mr-2">🔗</span>
                      Meeting Link
                    </label>
                    <input
                      type="url"
                      name="meetingLink"
                      placeholder="Enter meeting link (Zoom, Google Meet, etc.)"
                      value={form.meetingLink}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-600 bg-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400"
                    />
                  </div>
                ) : (
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-200 mb-1 flex items-center">
                      <span className="mr-2">📍</span>
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter physical location"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-600 bg-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400"
                    />
                  </div>
                )}

                {/* Status */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-200 mb-1 flex items-center">
                    <span className="mr-2">🏷️</span>
                    Status
                  </label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full p-3.5 border-2 border-gray-600 bg-gray-700/50 rounded-xl text-gray-100"
                  >
                    <option value="draft">📝 Draft</option>
                    <option value="published">✅ Published</option>
                  </select>
                </div>

                {/* Description */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-200 mb-1 flex items-center">
                    <span className="mr-2">📄</span>
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Describe your skill session..."
                    value={form.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-3 border-2 border-gray-600 bg-gray-700/50 rounded-xl text-gray-100 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-gray-700/50 pt-3 flex flex-col sm:flex-row gap-3 justify-end mb-2 mr-2 ml-2">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-6 py-3 border-2 border-gray-600 text-gray-200 font-semibold rounded-xl hover:bg-gray-700/50"
            >
              ← Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg"
            >
              💾 Update Session
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-4 text-center flex-shrink-0">
          <p className="text-sm text-gray-400">
            💡 <strong className="text-gray-300">Tip:</strong> Required fields
            depend on session mode (meeting link for online, location for
            offline).
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditSession;
