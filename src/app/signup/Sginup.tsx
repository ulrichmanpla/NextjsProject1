"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const existingUsers = JSON.parse(localStorage.getItem("skilline_users") || "[]");
    const userExists = existingUsers.some((u: { email: string }) => u.email === formData.email);

    if (userExists) {
      setErrors({ email: "An account with this email already exists" });
      return;
    }

    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem("skilline_users", JSON.stringify(updatedUsers));

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
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
              Welcome to <span className="text-[#F48C06]">Skilline</span>
            </h2>
            <p className="text-[#B2B3CF] text-sm leading-relaxed">
              Join thousands of educators and learners managing classrooms, assignments, and virtual classes online.
            </p>
          </div>

          <p className="text-xs text-[#8385A9]">&copy; 2026 Skilline Inc.</p>
        </div>

        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2F327D]">Create Account</h3>
            <p className="text-[#696984] text-sm mt-1">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#2F327D] uppercase tracking-wider mb-2">
                User Name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your User name"
                className={`w-full px-5 py-3 rounded-full border text-sm transition-colors focus:outline-none ${
                  errors.username
                    ? "border-red-500 bg-red-50 focus:border-red-500"
                    : "border-gray-200 focus:border-[#F48C06]"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1 ml-3 font-medium">{errors.username}</p>
              )}
            </div>

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

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#F48C06] text-white font-semibold text-sm hover:bg-[#e07f00] transition-colors shadow-lg shadow-orange-100 mt-2"
            >
              Register
            </button>
          </form>

          <p className="text-center text-xs text-[#696984] mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#F48C06] font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}