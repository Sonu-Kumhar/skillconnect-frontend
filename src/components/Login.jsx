import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import BASE_URL from "../config";

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [otpSent, setOtpSent] = useState(false);          // OTP sent
  const [otpVerified, setOtpVerified] = useState(false);  // OTP verified
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // For login password
  const [showNewPassword, setShowNewPassword] = useState(false); // For new password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For confirm password

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,   // ✅ updates the correct field
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${BASE_URL}/login`, form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userEmail', form.email);
      setShowSuccessToast(true);
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  const handleSendOtp = async () => {
    setError('');
    try {
      await axios.post(`${BASE_URL}/forgot-password`, { email: form.email });
      setOtpSent(true);
      setOtp('');          // Clear OTP field
      setNewPassword('');  // Clear New Password field so it's empty
      toast.success('OTP sent to your email!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    }
  };


  const handleVerifyOtp = async () => {
    setError('');
    try {
      await axios.post(`${BASE_URL}/forgot-password/verify-otp`, { email: form.email, otp });
      setOtpVerified(true);
      // Clear password fields after OTP verified
      setNewPassword("");
      setConfirmPassword("");
      toast.success('OTP Verified! Set your new password.');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP');
    }
  };


  const handleSetPassword = async () => {
    setError('');
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      await axios.post(`${BASE_URL}/reset-password`, {
        email: form.email,
        newPassword,
      });
      toast.success('Password reset successfully!');
      // Reset everything and go back to login
      setForgotPasswordMode(false);
      setOtpSent(false);
      setOtpVerified(false);
      setOtp('');
      setNewPassword('');
      setConfirmPassword('');
      setForm({ email: form.email, password: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 p-4 relative overflow-hidden">

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-2xl border border-indigo-400/30 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">{forgotPasswordMode ? 'Password Updated!' : 'Welcome Back!'}</p>
                <p className="text-sm text-indigo-100">{forgotPasswordMode ? 'You can now login with new password' : 'Accessing your dashboard...'}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-indigo-400/15 rounded-full blur-xl"></div>
      </div>

      <div className="bg-gray-800/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-700/50 relative z-10 transform transition-all duration-300 ring-1 ring-gray-600/30">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-white mb-2">
            {forgotPasswordMode ? 'Reset Your Password' : 'Welcome Back to'}{' '}
            {!forgotPasswordMode && (
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black relative block sm:inline">
                SkillConnect
              </span>
            )}
          </h2>
          {!forgotPasswordMode && <p className="text-gray-300 font-medium">Continue your learning journey</p>}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500/30 rounded-xl animate-shake backdrop-blur-sm">
            <div className="text-red-300 text-center font-medium flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        {/* Form */}
        <div className="space-y-6">
          {!forgotPasswordMode && (
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-700/50 text-white"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-gray-700/50 text-white pr-12"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoIosEye className="text-gray-300" size={32} /> : <IoIosEyeOff className="text-gray-300" size={32} />}
                </button>
              </div>
              <button
                type="submit"
                className="button-fill w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 "
              >
                Login
              </button>
              <p
                className="text-sm text-indigo-400 mt-2 cursor-pointer text-center hover:underline"
                onClick={() => setForgotPasswordMode(true)}
              >
                Forgot Password?
              </p>
            </form>
          )}

          {forgotPasswordMode && (
            <div className="space-y-4">

              {/* Email Field */}
              <input
                type="email"
                name='email'
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-700/50 text-white"
                required
                disabled={otpVerified}
              />
              {/* Step 1: OTP */}
              {otpSent && !otpVerified && (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-4 rounded-xl bg-gray-700/50 text-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="button-fill w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Verify OTP
                  </button>
                </>
              )}

              {/* Step 2: New Password */}
              {otpVerified && (
                <>
                  {/* New Password */}
                  <div className="relative mt-4">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full p-4 rounded-xl bg-gray-700/50 text-white pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white text-xl"
                    >
                      {showPassword ? <IoIosEye className="text-gray-300" size={32} /> : <IoIosEyeOff className="text-gray-300" size={32} />}
                    </button>
                  </div>


                  {/* Confirm New Password */}
                  <div className="relative mt-4">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full p-4 rounded-xl bg-gray-700/50 text-white pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white text-xl"
                    >
                      {showConfirmPassword ? <IoIosEye className="text-gray-300" size={32} /> : <IoIosEyeOff className="text-gray-300" size={32} />}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleSetPassword}
                    className="button-fill w-full bg-gradient-to-r from-green-500 via-lime-400 to-green-600 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Set Password
                  </button>
                </>
              )}

              {/* Send OTP Button */}
              {!otpSent && (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="button-fill w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send OTP
                </button>
              )}

              {/* Spam Folder Hint */}
              {otpSent && (
                <div className="flex justify-center">
                  <p className="w-full text-center text-sm text-gray-400 mt-2">
                    Didn’t receive the OTP? Please check your <span className="font-semibold">Spam</span> folder.
                  </p>
                </div>
              )}


              {/* Back to Login */}
              <p
                className="text-sm text-indigo-400 mt-2 cursor-pointer text-center hover:underline"
                onClick={() => {
                  setForgotPasswordMode(false);
                  setOtpSent(false);
                  setOtpVerified(false);
                  setOtp('');
                  setNewPassword('');
                  setConfirmPassword('');
                  setError('');
                }}
              >
                Back to Login
              </p>
            </div>
          )}
        </div>


        <div className="mt-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600/60"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-800/80 text-gray-400 font-medium backdrop-blur-sm">New to SkillConnect?</span>
            </div>
          </div>
          <div className="mt-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-purple-400 font-semibold transition-all duration-200 hover:underline decoration-2 underline-offset-4 group"
            >
              Create an account
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Security and trust indicators */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Secure Login</span>
          </div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Trusted Platform</span>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-tr from-pink-400/20 to-rose-400/20 rounded-full blur-lg"></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/4 -left-2 w-3 h-3 bg-indigo-400/60 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-3/4 -right-1 w-2 h-2 bg-purple-400/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-pink-400/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.4s' }}></div>

      </div>

      <style jsx>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </div>
  );
};

export default Login;
