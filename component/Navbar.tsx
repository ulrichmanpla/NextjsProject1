"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Check active session from LocalStorage on load
  useEffect(() => {
    const activeUser = localStorage.getItem("skilline_active_user");
    if (activeUser) {
      setUser(JSON.parse(activeUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("skilline_active_user");
    setUser(null);
    setDropdownOpen(false);
    router.push("/login");
  };

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <header className="bg-[#FFF3E4] max-w-7xl mx-auto flex justify-between px-6 items-center py-3">
        
        {/* Logo links back to Home */}
        <Link href="/" className="cursor-pointer">
          <Image src="/logo1.png" alt="logo1" width={100} height={40} className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-medium">
          <ul className="flex gap-8 items-center text-gray-700">
            <li>
              <Link href="/" className="hover:text-[#F48C06] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-[#F48C06] transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#F48C06] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#F48C06] transition-colors">
                About Us
              </Link>
            </li>
          </ul>

          {/* Auth State & Profile Button */}
          <div className="flex items-center gap-4 relative">
            {user ? (
              <div>
                {/* Profile Character Button */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-10 h-10 rounded-full bg-[#F48C06] text-white font-bold flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                >
                  {user.username.charAt(0).toUpperCase()}
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-3">
                    <div>
                      <p className="text-sm font-bold text-[#2F327D]">{user.username}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <hr className="border-gray-100" />
                    <button
                      onClick={handleLogout}
                      className="w-full py-2 bg-red-50 text-red-600 rounded-xl font-semibold text-xs hover:bg-red-100 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  href="/login"
                  className="bg-white px-5 py-2 rounded-full text-gray-700 font-medium text-sm hover:scale-105 transition-all shadow-sm"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-[#F48C06] px-5 py-2 rounded-full text-white font-medium text-sm hover:scale-105 transition-all shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF3E4] px-6 py-4 space-y-4 border-t border-orange-200 shadow-lg">
          <ul className="flex flex-col space-y-3 text-gray-700 font-medium">
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#F48C06]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#F48C06]">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#F48C06]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#F48C06]">
                About Us
              </Link>
            </li>
          </ul>

          <div className="pt-2 border-t border-orange-200">
            {user ? (
              <div className="space-y-3 bg-white p-4 rounded-2xl shadow-sm">
                <div>
                  <p className="text-sm font-bold text-[#2F327D]">{user.username}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 bg-red-50 text-red-600 rounded-xl font-semibold text-xs"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-white py-2 rounded-full text-gray-700 font-medium text-sm shadow-sm"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-[#F48C06] py-2 rounded-full text-white font-medium text-sm shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}