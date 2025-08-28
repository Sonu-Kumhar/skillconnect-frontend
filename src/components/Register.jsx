import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import BASE_URL from "../config";

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // First step: Register & send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      setLoading(true);
      await axios.post(`${BASE_URL}/register/send-otp`, form);
      setOtpSent(true);
      setLoading(false);
      toast.success('OTP sent to your email!');
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Failed to send OTP');
    }
  };


  // Second step: Verify OTP
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/register/verify-otp`, {
        email: form.email,
        otp: otp.trim(),
      });

      if (res.data.success) {
        setOtpVerified(true); // ✅ mark OTP verified

        // ✅ store token in localStorage if backend sends it
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userEmail", form.email);
          window.location.reload();
        }

        toast.success("Verification Successful!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast.error(res.data.message || "Invalid OTP");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, please try again");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-indigo-400/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-xl"></div>
      </div>

      <div className="bg-gray-800/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-700/50 relative z-10 transform hover:scale-[1.02] transition-all duration-300 ring-1 ring-gray-600/30">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-2xl blur-lg scale-110"></div>
            <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-4xl font-black text-white mb-2">
            Join <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black relative block inline">
              SkillConnect</span>
          </h2>
          <p className="text-gray-300 font-medium">Start learning from experts or share your skills</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500/30 rounded-xl backdrop-blur-sm">
            <p className="text-red-300 text-center font-medium flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSendOtp} className="space-y-6">
          {/* Email */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full pl-6 pr-4 py-4 border border-gray-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400 bg-gray-700/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-gray-600/70 focus:bg-gray-600/90 font-medium placeholder-gray-400"
              value={form.email}
              onChange={handleChange}
              required
              disabled={otpSent} // lock email after OTP sent
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a secure password"
              className="w-full pl-6 pr-4 py-4 border border-gray-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400 bg-gray-700/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-gray-600/70 focus:bg-gray-600/90 font-medium placeholder-gray-400"
              value={form.password}
              onChange={handleChange}
              required
              disabled={otpSent} // lock password after OTP sent
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoIosEye className="text-gray-300" size={32} /> : <IoIosEyeOff className="text-gray-300" size={32} />}
            </button>
          </div>

          {/* OTP Field (shows only after sending OTP) */}
          {otpSent && !otpVerified && (
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter OTP"
                className="flex-1 pl-4 pr-4 py-3 border border-gray-600/60 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400 text-sm sm:text-base"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                type="button"
                onClick={handleVerifyOTP}
                disabled={!otp || loading}
                className={`px-4 sm:px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${otp && !loading
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105'
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  }`}
              >
                Verify OTP
              </button>
            </div>
          )}

          {/* Primary button */}
          {!otpSent && (
            <button
              type="submit"
              disabled={loading}
              className="group w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              {loading ? 'Sending OTP...' : 'Register'}
            </button>
          )}

          {/* Spam Folder Hint (after OTP is sent) */}
          {/* Spam Folder Hint (after OTP is sent) */}
          {otpSent && (
            <div className="flex justify-center">
              <p className="w-full text-center text-sm text-gray-400 mt-2">
                Didn’t receive the OTP? Please check your <span className="font-semibold">Spam</span> folder and mark it as 'Not Spam'.
              </p>
            </div>
          )}

          {otpVerified && (
            <button
              type="button" // <-- not submit
              disabled
              className="group w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
            >
              Account Verified 🎉 Redirecting...
            </button>
          )}
        </form>

        {/* Already have account */}
        <div className="mt-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600/60"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-800/80 text-gray-400 font-medium backdrop-blur-sm">Already have an account?</span>
            </div>
          </div>
          <div className="mt-4">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-purple-400 font-semibold transition-all duration-200 hover:underline decoration-2 underline-offset-4 group"
            >
              Sign in here
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
          @keyframes slide-in {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in { animation: slide-in 0.3s ease-out; }
        `}</style>
    </div>
  );
};

export default Register;
