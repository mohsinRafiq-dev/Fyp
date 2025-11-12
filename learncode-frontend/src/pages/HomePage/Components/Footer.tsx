import React from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const links = {
    product: ["Tutorials", "Code Editor", "Pricing", "Docs"],
    company: ["About", "Blog", "Careers", "Contact"],
    legal: ["Privacy", "Terms", "License"],
  };

  return (
    <footer
      className={`relative transition-colors duration-300 overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-dark-bg to-dark-bg-secondary border-t border-dark-border"
          : "bg-gradient-to-b from-lc-bg to-lc-bg-secondary border-t border-purple-200/40"
      }`}
    >
      {/* Decorative animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 -translate-y-1/2 left-1/4 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20 animate-pulse-slow ${
            isDark
              ? "bg-gradient-to-r from-indigo-600 to-purple-600"
              : "bg-gradient-to-r from-blue-400 to-purple-400"
          }`}
        ></div>
        <div
          className={`absolute -bottom-32 -right-24 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-15 animate-pulse-slower ${
            isDark
              ? "bg-gradient-to-tr from-purple-600 to-pink-600"
              : "bg-gradient-to-tr from-purple-400 to-pink-400"
          }`}
        ></div>
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className={`absolute block rounded-full ${
              isDark ? "bg-indigo-400/30" : "bg-purple-400/30"
            } animate-float`}
            style={{
              width: Math.random() * 6 + 4 + "px",
              height: Math.random() * 6 + 4 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: i * 0.4 + "s",
              animationDuration: 12 + Math.random() * 8 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16 mb-12">
            {/* Brand */}
            <div>
              <h3 className={`text-2xl font-black mb-4 gradient-text`}>
                LearnCode AI
              </h3>
              <p
                className={`${
                  isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
                }`}
              >
                Master programming with AI-powered learning, collaboration
                tools, and hands-on practice.
              </p>
              <div className="flex gap-4 mt-6">
                {[FaFacebook, FaTwitter, FaLinkedin, FaGithub].map(
                  (Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 relative overflow-hidden group ${
                        isDark
                          ? "bg-dark-card hover:bg-dark-accent/20 text-dark-accent"
                          : "bg-white/70 border border-purple-200/50 hover:bg-purple-50 text-lc-accent shadow-sm"
                      }`}
                    >
                      <Icon size={20} />
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-opacity duration-300"></span>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Product links */}
            <div>
              <h4
                className={`font-bold text-lg mb-6 ${
                  isDark ? "text-dark-text" : "text-lc-text"
                }`}
              >
                Product
              </h4>
              <ul className="space-y-3">
                {links.product.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`transition-colors duration-300 hover:font-semibold ${
                        isDark
                          ? "text-dark-text-secondary hover:text-dark-accent"
                          : "text-lc-text-secondary hover:text-lc-accent"
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4
                className={`font-bold text-lg mb-6 ${
                  isDark ? "text-dark-text" : "text-lc-text"
                }`}
              >
                Company
              </h4>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`transition-colors duration-300 hover:font-semibold ${
                        isDark
                          ? "text-dark-text-secondary hover:text-dark-accent"
                          : "text-lc-text-secondary hover:text-lc-accent"
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h4
                className={`font-bold text-lg mb-6 ${
                  isDark ? "text-dark-text" : "text-lc-text"
                }`}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                {links.legal.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`transition-colors duration-300 hover:font-semibold ${
                        isDark
                          ? "text-dark-text-secondary hover:text-dark-accent"
                          : "text-lc-text-secondary hover:text-lc-accent"
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div
            className={`${
              isDark ? "bg-dark-border/70" : "bg-purple-200/40"
            } h-px my-10`}
          ></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p
              className={`${
                isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
              } text-sm`}
            >
              &copy; 2025 LearnCode AI. All rights reserved.
            </p>
            <p
              className={`${
                isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
              } text-sm flex items-center gap-1`}
            >
              Made with <span className="gradient-text">❤️</span> by the
              LearnCode AI Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
