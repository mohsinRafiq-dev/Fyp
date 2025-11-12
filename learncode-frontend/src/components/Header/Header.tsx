import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../contexts/ThemeContext";
import { BiCodeAlt } from "react-icons/bi";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-2xl border-b transition-all duration-300 ${
        isDark
          ? "bg-dark-bg/80 border-dark-border shadow-lg shadow-black/20"
          : "bg-lc-bg/80 border-purple-200/40 shadow-lg shadow-purple-100/20"
      }`}
      style={{ animation: "slideDown 0.5s ease-out" }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-1/2 -right-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark
              ? "bg-gradient-to-br from-indigo-900/30 to-purple-900/30"
              : "bg-gradient-to-br from-blue-300/30 to-purple-300/30"
          }`}
          style={{ animation: "blob-animation 8s infinite" }}
        ></div>
        <div
          className={`absolute -bottom-1/2 -left-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark
              ? "bg-gradient-to-tr from-pink-900/20 to-red-900/20"
              : "bg-gradient-to-tr from-pink-200/20 to-red-200/20"
          }`}
          style={{ animation: "blob-animation 8s infinite 2s" }}
        ></div>
      </div>

      <div className="relative flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300 flex-shrink-0"
          style={{
            animation: `fadeInDown 0.5s ease-out`,
          }}
        >
          <div
            className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 relative ${
              isDark
                ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-indigo-500/50"
                : "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-purple-500/50"
            }`}
          >
            <BiCodeAlt className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
            {/* Glow effect on hover */}
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-br from-indigo-400 to-pink-400"></span>
          </div>
          <span
            className={`hidden sm:inline font-black text-lg sm:text-xl flex-shrink-0 group-hover:opacity-80 transition-all duration-300 bg-gradient-to-r ${
              isDark
                ? "from-indigo-400 via-purple-400 to-pink-400"
                : "from-blue-600 via-purple-600 to-pink-600"
            } text-transparent bg-clip-text`}
          >
            LearnCode AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/tutorials", label: "Tutorials" },
            { to: "/editor", label: "Code Editor" },
            { to: "/contact", label: "Contact" },
          ].map((link, idx) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-all duration-300 text-sm relative group ${
                isDark
                  ? "text-dark-text-secondary hover:text-dark-accent"
                  : "text-lc-text-secondary hover:text-lc-accent"
              }`}
              style={{
                animation: `fadeInDown 0.5s ease-out ${idx * 0.1}s backwards`,
              }}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isDark
                    ? "bg-gradient-to-r from-indigo-500 to-pink-500"
                    : "bg-gradient-to-r from-blue-500 to-pink-500"
                }`}
              ></span>
              {/* Glow effect on hover */}
              <span
                className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm ${
                  isDark ? "bg-indigo-500/20" : "bg-blue-500/20"
                }`}
              ></span>
            </Link>
          ))}
          {isAuthenticated && user?.role === "admin" && (
            <Link
              to="/admin"
              className={`transition-all duration-300 text-sm relative group ${
                isDark
                  ? "text-dark-success hover:text-dark-accent"
                  : "text-lc-success hover:text-lc-accent"
              }`}
              style={{
                animation: `fadeInDown 0.5s ease-out 0.6s backwards`,
              }}
            >
              Admin
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isDark
                    ? "bg-gradient-to-r from-green-500 to-emerald-500"
                    : "bg-gradient-to-r from-green-500 to-emerald-500"
                }`}
              ></span>
            </Link>
          )}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg transition-all duration-300 relative group ${
              isDark
                ? "bg-dark-accent/20 text-dark-accent hover:bg-dark-accent/30"
                : "bg-lc-accent/20 text-lc-accent hover:bg-lc-accent/30"
            }`}
            title={isDark ? "Light Mode" : "Dark Mode"}
            style={{
              animation: `fadeInDown 0.5s ease-out 0.7s backwards`,
            }}
          >
            {isDark ? (
              <MdLightMode
                size={20}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            ) : (
              <MdDarkMode
                size={20}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            )}
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-yellow-400 to-orange-400"></span>
          </button>

          {isAuthenticated ? (
            <>
              <span
                className={`font-semibold text-sm ${
                  isDark ? "text-dark-text" : "text-lc-text"
                }`}
                style={{
                  animation: `fadeInDown 0.5s ease-out 0.8s backwards`,
                }}
              >
                {user?.name}
              </span>
              <button
                onClick={handleLogout}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border-2 hover:scale-105 transform relative overflow-hidden group ${
                  isDark
                    ? "border-dark-accent text-dark-accent hover:bg-dark-accent/20"
                    : "border-purple-300/60 text-lc-accent hover:bg-purple-50 hover:border-purple-400/80 shadow-sm"
                }`}
                style={{
                  animation: `fadeInDown 0.5s ease-out 0.9s backwards`,
                }}
              >
                <span className="relative z-10">Logout</span>
                <span
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark ? "bg-dark-accent/10" : "bg-lc-accent/10"
                  }`}
                ></span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 relative overflow-hidden group border-2 hover:scale-105 transform ${
                  isDark
                    ? "border-dark-accent/40 text-dark-accent hover:border-dark-accent hover:shadow-lg hover:shadow-indigo-500/20"
                    : "border-purple-300/60 text-lc-accent hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20 shadow-sm"
                }`}
                style={{
                  animation: `fadeInDown 0.5s ease-out 0.8s backwards`,
                }}
              >
                <span className="relative z-10">Sign In</span>
                {/* Gradient background on hover */}
                <span
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg ${
                    isDark
                      ? "bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
                      : "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                  }`}
                ></span>
                {/* Shimmer effect */}
                <span
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark
                      ? "bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent"
                      : "bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                  }`}
                ></span>
              </Link>
              <Link
                to="/signup"
                className={`px-6 py-2 text-white rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105 transform relative overflow-hidden group ${
                  isDark
                    ? "bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500"
                    : "bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500"
                }`}
                style={{
                  animation: `fadeInDown 0.5s ease-out 0.9s backwards`,
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join Free{" "}
                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
                {/* Ripple effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white rounded-lg"></span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button + Theme Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 relative group cursor-pointer ${
              isDark
                ? "bg-dark-accent/20 text-dark-accent hover:bg-dark-accent/30"
                : "bg-lc-accent/20 text-lc-accent hover:bg-lc-accent/30"
            }`}
          >
            {isDark ? (
              <MdLightMode
                size={18}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            ) : (
              <MdDarkMode
                size={18}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            )}
            {/* Subtle glow effect on hover */}
            <span
              className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm ${
                isDark ? "bg-yellow-400/30" : "bg-orange-400/30"
              }`}
            ></span>
          </button>
          <button
            onClick={toggleMobileMenu}
            className={`p-2 transition-all duration-300 rounded-lg hover:bg-opacity-10 cursor-pointer ${
              isDark
                ? "text-dark-text hover:bg-dark-accent"
                : "text-lc-text hover:bg-lc-accent"
            }`}
          >
            {mobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t ${
            isDark
              ? "border-dark-border bg-dark-bg/95 backdrop-blur-md"
              : "border-purple-200/40 bg-lc-bg/95 backdrop-blur-md"
          }`}
          style={{
            animation: `slideDownMenu 0.3s ease-out`,
          }}
        >
          <div className="px-4 py-4 space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/tutorials", label: "Tutorials" },
              { to: "/editor", label: "Code Editor" },
              { to: "/contact", label: "Contact" },
            ].map((link, idx) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 transform cursor-pointer ${
                  isDark
                    ? "text-dark-text-secondary hover:text-dark-accent hover:bg-dark-card"
                    : "text-lc-text-secondary hover:text-lc-accent hover:bg-lc-card"
                }`}
                style={{
                  animation: `fadeInLeft 0.3s ease-out ${
                    idx * 0.05
                  }s backwards`,
                }}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && user?.role === "admin" && (
              <Link
                to="/admin"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 transform cursor-pointer ${
                  isDark
                    ? "text-dark-success hover:text-dark-accent hover:bg-dark-card"
                    : "text-lc-success hover:text-lc-accent hover:bg-lc-card"
                }`}
                style={{
                  animation: `fadeInLeft 0.3s ease-out 0.3s backwards`,
                }}
              >
                Admin Dashboard
              </Link>
            )}

            <div
              className={`border-t pt-3 mt-3 ${
                isDark ? "border-dark-border" : "border-purple-200/40"
              }`}
            >
              {isAuthenticated ? (
                <>
                  <div
                    className={`px-3 py-2 font-semibold text-sm ${
                      isDark ? "text-dark-accent" : "text-lc-accent"
                    }`}
                    style={{
                      animation: `fadeInLeft 0.3s ease-out 0.35s backwards`,
                    }}
                  >
                    {user?.name}
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMobileMenu();
                    }}
                    className={`w-full mt-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 transform cursor-pointer ${
                      isDark
                        ? "bg-dark-accent/20 text-dark-accent hover:bg-dark-accent/30"
                        : "bg-lc-accent/20 text-lc-accent hover:bg-lc-accent/30"
                    }`}
                    style={{
                      animation: `fadeInLeft 0.3s ease-out 0.4s backwards`,
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    onClick={closeMobileMenu}
                    className={`block px-3 py-1.5 rounded-md text-xs font-medium text-center transition-all duration-300 hover:scale-[1.02] transform relative overflow-hidden group cursor-pointer border ${
                      isDark
                        ? "text-dark-accent border-dark-accent/30 hover:border-dark-accent/60 hover:bg-dark-accent/10"
                        : "text-lc-accent border-lc-accent/30 hover:border-lc-accent/60 hover:bg-lc-accent/10"
                    }`}
                    style={{
                      animation: `fadeInLeft 0.3s ease-out 0.35s backwards`,
                    }}
                  >
                    <span className="relative z-10">Sign In</span>
                    {/* Subtle shimmer effect */}
                    <span
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isDark
                          ? "bg-gradient-to-r from-transparent via-dark-accent/5 to-transparent"
                          : "bg-gradient-to-r from-transparent via-lc-accent/5 to-transparent"
                      }`}
                    ></span>
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMobileMenu}
                    className={`block mt-2 px-3 py-1.5 text-white rounded-md text-xs font-medium text-center transition-all hover:scale-[1.02] transform cursor-pointer ${
                      isDark
                        ? "bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500"
                        : "bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500"
                    }`}
                    style={{
                      animation: `fadeInLeft 0.3s ease-out 0.4s backwards`,
                    }}
                  >
                    Join Free
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
