"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsDarkMode(!isDarkMode);

    // Update DOM and localStorage
    if (!isDarkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <button
        onClick={toggleTheme}
        className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg ${
          isDarkMode
            ? "bg-gray-800 border border-gray-700 shadow-gray-900/20"
            : "bg-white border border-gray-200 shadow-gray-900/10"
        }`}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {/* Icon container with sliding animation */}
        <div className="relative w-5 h-5 overflow-hidden">
          <Sun
            className={`absolute w-5 h-5 transition-all duration-300 ${
              isDarkMode
                ? "translate-y-5 opacity-0"
                : "translate-y-0 opacity-100"
            } ${isAnimating ? "rotate-180" : ""} text-yellow-500`}
          />
          <Moon
            className={`absolute w-5 h-5 transition-all duration-300 ${
              isDarkMode
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0"
            } ${isAnimating ? "rotate-180" : ""} text-indigo-300`}
          />
        </div>

        {/* Optional: Add a subtle glow effect */}
        <div
          className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100"
              : "bg-gradient-to-r from-yellow-400/10 to-orange-400/10 opacity-0 hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
