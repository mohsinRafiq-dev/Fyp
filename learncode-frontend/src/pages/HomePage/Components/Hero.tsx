import { Link } from "react-router-dom";
import { useTheme } from "../../../contexts/ThemeContext";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import Java from "/assets/homePage/Java.png";
import Cpp from "/assets/homePage/Cplusplus.png";
import Python from "/assets/homePage/Python.png";
import Html from "/assets/homePage/Html.png";
import Javascript from "/assets/homePage/Javascript.png";

const Hero = () => {
  const { isDark } = useTheme();

  const languages = [
    { img: Html, name: "HTML", description: "Build beautiful web pages" },
    { img: Javascript, name: "JavaScript", description: "Add interactivity" },
    { img: Java, name: "Java", description: "Enterprise development" },
    { img: Python, name: "Python", description: "Data & AI" },
    { img: Cpp, name: "C++", description: "System programming" },
  ];

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-dark-bg via-dark-bg-secondary to-dark-bg"
          : "bg-gradient-to-br from-lc-bg via-lc-bg-secondary to-lc-bg"
      }`}
    >
      {/* Animated Grid Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 opacity-[0.03] ${
            isDark ? "bg-white" : "bg-black"
          }`}
          style={{
            backgroundImage: `linear-gradient(${
              isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
            } 1px, transparent 1px),
                             linear-gradient(90deg, ${
                               isDark
                                 ? "rgba(255,255,255,0.05)"
                                 : "rgba(0,0,0,0.05)"
                             } 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? "bg-indigo-400/30" : "bg-blue-400/30"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large primary blobs */}
        <div
          className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 ${
            isDark
              ? "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"
              : "bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"
          }`}
          style={{ animation: "blob-animation 8s infinite" }}
        ></div>

        <div
          className={`absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 ${
            isDark
              ? "bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600"
              : "bg-gradient-to-br from-purple-300 via-pink-400 to-rose-400"
          }`}
          style={{ animation: "blob-animation 8s infinite 3s" }}
        ></div>

        <div
          className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 ${
            isDark
              ? "bg-gradient-to-br from-pink-600 via-indigo-600 to-cyan-600"
              : "bg-gradient-to-br from-pink-300 via-indigo-400 to-cyan-400"
          }`}
          style={{ animation: "blob-animation 8s infinite 5s" }}
        ></div>

        {/* Medium floating orbs */}
        <div
          className={`absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 ${
            isDark
              ? "bg-gradient-to-tr from-cyan-500 to-blue-500"
              : "bg-gradient-to-tr from-cyan-300 to-blue-400"
          }`}
          style={{ animation: "blob-animation 10s infinite 2s" }}
        ></div>

        <div
          className={`absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 ${
            isDark
              ? "bg-gradient-to-tl from-rose-500 to-pink-500"
              : "bg-gradient-to-tl from-rose-300 to-pink-400"
          }`}
          style={{ animation: "blob-animation 10s infinite 6s" }}
        ></div>

        {/* Small accent orbs */}
        <div
          className={`absolute top-1/2 left-1/4 w-[250px] h-[250px] rounded-full blur-[80px] opacity-15 ${
            isDark
              ? "bg-gradient-to-r from-purple-400 to-indigo-400"
              : "bg-gradient-to-r from-purple-300 to-indigo-300"
          }`}
          style={{ animation: "blob-animation 12s infinite 4s" }}
        ></div>

        <div
          className={`absolute bottom-1/4 left-1/2 w-[250px] h-[250px] rounded-full blur-[80px] opacity-15 ${
            isDark
              ? "bg-gradient-to-l from-pink-400 to-purple-400"
              : "bg-gradient-to-l from-pink-300 to-purple-300"
          }`}
          style={{ animation: "blob-animation 12s infinite 8s" }}
        ></div>
      </div>

      {/* Radial gradient overlay for depth */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-radial-gradient from-transparent via-dark-bg/50 to-dark-bg"
            : "bg-radial-gradient from-transparent via-lc-bg/50 to-lc-bg"
        }`}
        style={{
          background: isDark
            ? "radial-gradient(circle at center, transparent 0%, rgba(17, 24, 39, 0.5) 50%, rgba(17, 24, 39, 1) 100%)"
            : "radial-gradient(circle at center, transparent 0%, rgba(249, 250, 251, 0.5) 50%, rgba(249, 250, 251, 1) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className="flex flex-col space-y-8"
            style={{ animation: "slideInLeft 0.8s ease-out" }}
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit ${
                isDark
                  ? "bg-dark-card border border-dark-border"
                  : "bg-white/80 border border-purple-200/60 shadow-sm"
              }`}
            >
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  isDark ? "bg-indigo-400" : "bg-blue-500"
                }`}
              ></span>
              <span
                className={`text-sm font-semibold ${
                  isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
                }`}
              >
                Welcome to the Future of Learning
              </span>
            </div>

            {/* Main heading */}
            <div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 ${
                  isDark ? "text-dark-text" : "text-lc-text"
                }`}
              >
                Learn <span className="gradient-text">Code</span> & Build Your
                <span className="gradient-text"> Dreams</span>
              </h1>

              <p
                className={`text-lg sm:text-xl leading-relaxed ${
                  isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
                }`}
              >
                Master programming with AI-powered learning, real-time feedback,
                and hands-on practice. Start your coding journey today with
                LearnCode AI.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/signup"
                className={`px-8 py-4 rounded-xl font-bold text-white text-center transition-all duration-300 flex items-center justify-center gap-2 btn-gradient shadow-lg hover:shadow-2xl ${
                  isDark
                    ? "shadow-indigo-500/50 hover:shadow-indigo-500/70"
                    : "shadow-purple-500/50 hover:shadow-purple-500/70"
                }`}
              >
                Start Learning <FaArrowRight size={16} />
              </Link>

              <button
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 border-2 ${
                  isDark
                    ? "border-dark-accent text-dark-accent hover:bg-dark-accent/10"
                    : "border-purple-300/70 text-lc-accent hover:bg-purple-50 hover:border-purple-400/80 shadow-sm"
                }`}
              >
                <FaPlay size={14} /> Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "10K+", label: "Students" },
                { number: "500+", label: "Tutorials" },
                { number: "98%", label: "Success Rate" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className={`text-2xl sm:text-3xl font-black gradient-text`}
                  >
                    {stat.number}
                  </div>
                  <p
                    className={`text-sm ${
                      isDark
                        ? "text-dark-text-secondary"
                        : "text-lc-text-secondary"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Rotating circular language icons */}
          <div className="relative h-96 sm:h-full min-h-96 hidden lg:flex items-center justify-center">
            {/* Central circle glow */}
            <div
              className={`absolute w-72 h-72 rounded-full blur-3xl opacity-15 ${
                isDark
                  ? "bg-gradient-to-br from-indigo-600 to-purple-600"
                  : "bg-gradient-to-br from-blue-400 to-purple-400"
              }`}
            ></div>

            {/* Fixed circular orbit with pause and popup */}
            <div className="relative w-80 h-80">
              {languages.map((lang, idx) => {
                return (
                  <div
                    key={idx}
                    className="absolute"
                    style={{
                      width: "80px",
                      height: "80px",
                      left: "50%",
                      top: "50%",
                      animation: `orbitInCircle 40s linear infinite`,
                      animationDelay: `${-idx * 8}s`,
                    }}
                  >
                    {/* Icon card - stays upright */}
                    <div
                      className={`absolute w-20 h-20 rounded-2xl p-3 shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center ${
                        isDark
                          ? "bg-dark-card border border-dark-border hover:shadow-indigo-500/50"
                          : "bg-white/90 border border-purple-200/60 shadow-sm hover:shadow-purple-500/50"
                      }`}
                      style={{
                        transform: `translate(-50%, -50%)`,
                      }}
                    >
                      <img
                        src={lang.img}
                        alt={lang.name}
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    </div>
                    {/* Popup above icon, fades in/out as icon reaches top */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-10 mr-100 z-50 pointer-events-none"
                      style={{
                        animation: `popupFade 40s linear infinite`,
                        animationDelay: `${-idx * 8}s`,
                      }}
                    >
                      <div
                        className={`px-6 py-3 rounded-xl shadow-xl whitespace-nowrap backdrop-blur-sm ${
                          isDark
                            ? "bg-gradient-to-r from-indigo-600/95 to-purple-600/95 border border-indigo-400/50"
                            : "bg-gradient-to-r from-blue-500/95 to-purple-500/95 border border-blue-300/50"
                        }`}
                      >
                        <span className="text-base font-bold text-white">
                          I am {lang.name}
                        </span>
                      </div>
                      {/* Arrow pointing down */}
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                        style={{
                          borderLeft: "10px solid transparent",
                          borderRight: "10px solid transparent",
                          borderTop: isDark
                            ? "10px solid rgb(102, 51, 153)"
                            : "10px solid rgb(59, 130, 246)",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
