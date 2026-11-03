"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  // Form Fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Custom Errors
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors when typing
    if (errors[e.target.name as keyof typeof errors] || errors.general) {
      setErrors({ ...errors, [e.target.name]: undefined, general: undefined });
    }
  };

  // Custom Form Validation
  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Retrieve saved users from LocalStorage
    const existingUsers = JSON.parse(localStorage.getItem("skilline_users") || "[]");

    // Compare email & password against stored users
    const matchedUser = existingUsers.find(
      (u: { email: string; password: string }) => u.email === formData.email
    );

    if (!matchedUser) {
      setErrors({ general: "No account found with this email address" });
      return;
    }

    if (matchedUser.password !== formData.password) {
      setErrors({ password: "Incorrect password. Please try again." });
      return;
    }

    // Store active user session info in LocalStorage
    localStorage.setItem("skilline_active_user", JSON.stringify(matchedUser));

    // Redirect to home page
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Column: Image / Visual Banner */}
        <div className="relative bg-[#252641] p-8 md:p-12 flex flex-col justify-between text-white hidden md:flex">
          <div className="relative w-36 h-10">
            <Image
              src="/Group111.png"
              alt="Skilline Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-4 my-auto">
            <h2 className="text-3xl font-bold leading-tight">
              Welcome Back to <span className="text-[#F48C06]">Skilline</span>
            </h2>
            <p className="text-[#B2B3CF] text-sm leading-relaxed">
              Login to access your personalized classroom dashboard, live assignments, and gradebooks.
            </p>
          </div>

        </div>

        {/* Right Column: Login Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2F327D]">Login</h3>
            <p className="text-[#696984] text-sm mt-1">Enter your credentials to continue</p>
          </div>

          {/* General Authentication Error Banner */}
          {errors.general && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-xs font-semibold text-[#2F327D] uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className={`w-full px-5 py-3 rounded-full border text-sm transition-colors focus:outline-none ${
                  errors.email
                    ? "border-red-500 bg-red-50 focus:border-red-500"
                    : "border-gray-200 focus:border-[#F48C06]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-3 font-medium">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-semibold text-[#2F327D] uppercase tracking-wider mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className={`w-full px-5 py-3 rounded-full border text-sm transition-colors focus:outline-none ${
                  errors.password
                    ? "border-red-500 bg-red-50 focus:border-red-500"
                    : "border-gray-200 focus:border-[#F48C06]"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 ml-3 font-medium">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#F48C06] text-white font-semibold text-sm hover:bg-[#e07f00] transition-colors shadow-lg shadow-orange-100 mt-2"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-xs text-[#696984] mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#F48C06] font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}