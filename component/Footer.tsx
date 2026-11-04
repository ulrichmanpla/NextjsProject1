"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Custom Validation Logic
    if (!email.trim()) {
      setError("Email address is required");
      return;
    }

    // Basic email format validation regex
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Success action
    setSuccessMessage("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-[#252641] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-12">
        
        {/* Logo and Tagline Header */}
        <div className="flex flex-row items-center justify-center gap-6">
          <div className="relative w-36 sm:w-44 h-12">
            <Image
              src="/Group111.png"
              alt="Skilline Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Vertical Separator Line */}
          <div className="w-[1px] h-10 bg-[#626381]" />

          {/* Tagline */}
          <span className="text-left font-semibold text-sm sm:text-base tracking-wide text-white leading-tight">
            Virtual Class<br />
            for Zoom
          </span>
        </div>

        {/* Newsletter Section */}
        <div className="w-full max-w-md space-y-4">
          <h3 className="text-lg sm:text-xl font-medium tracking-wide text-[#B2B3CF]">
            Subscribe to get our Newsletter
          </h3>

          <form
            onSubmit={handleSubscribe}
            noValidate
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <div className="w-full sm:flex-1 text-left">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Your Email"
                className={`w-full px-6 py-3 rounded-full bg-transparent border text-white placeholder-[#8385A9] text-sm focus:outline-none transition-colors ${
                  error ? "border-red-400" : "border-[#525596] focus:border-[#49BBBD]"
                }`}
              />
              {error && (
                <p className="text-red-400 text-xs mt-1.5 ml-4 font-medium">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#545BE8] hover:bg-[#4349c7] text-white font-medium text-sm transition-colors shadow-lg shadow-[#545BE8]/30 sm:self-start"
            >
              Subscribe
            </button>
          </form>

          {/* Success Notification */}
          {successMessage && (
            <p className="text-emerald-400 text-xs font-medium">
              {successMessage}
            </p>
          )}
        </div>

        {/* Links & Copyright */}
        <div className="space-y-4 pt-4">
          <nav className="flex items-center justify-center gap-4 sm:gap-6 text-sm text-[#B2B3CF]">
            <Link href="#" className="hover:text-white transition-colors">
              Careers
            </Link>
            <span className="text-[#626381]">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#626381]">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </nav>

          <p className="text-xs sm:text-sm text-[#8385A9]">
            &copy; 2021 Class Technologies Inc.
          </p>
        </div>

      </div>
    </footer>
  );
}