import { useTheme } from "../../../contexts/ThemeContext";
import { FaArrowRight } from "react-icons/fa";

export default function StartJourney() {
  const { isDark } = useTheme();

  return (
    <section
      className={`relative py-24 lg:py-32 overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-dark-bg via-dark-bg-secondary to-dark-bg"
          : "bg-gradient-to-br from-lc-bg via-lc-bg-secondary to-lc-bg"
      }`}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30 animated-bg"></div>

      {/* Decorative blobs + particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-24 left-1/4 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-25 animate-pulse-slow ${
            isDark
              ? "bg-gradient-to-br from-purple-600 to-indigo-600"
              : "bg-gradient-to-br from-purple-400 to-blue-400"
          }`}
        ></div>
        <div
          className={`absolute -bottom-32 right-1/4 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-20 animate-pulse-slower ${
            isDark
              ? "bg-gradient-to-tl from-indigo-600 to-pink-600"
              : "bg-gradient-to-tl from-indigo-400 to-pink-400"
          }`}
        ></div>
        {Array.from({ length: 18 }).map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        {/* Section badge */}
        <div
          className={`inline-block px-5 py-2 rounded-full mb-6 relative overflow-hidden backdrop-blur-md border ${
            isDark
              ? "bg-dark-card/40 border-dark-border/40 text-dark-accent"
              : "bg-white/70 border-purple-200/50 text-lc-accent shadow-sm"
          }`}
          style={{ animation: "slideInDown 0.6s ease-out" }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 animate-shimmer" />
          <span className="text-sm font-semibold flex items-center gap-1">
            🚀 Join The Community
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight ${
            isDark ? "text-dark-text" : "text-lc-text"
          }`}
          style={{ animation: "slideInUp 0.7s ease-out 0.1s both" }}
        >
          Start your <span className="gradient-text">learning journey</span>
        </h1>

        {/* Description */}
        <p
          className={`text-lg lg:text-xl mb-10 max-w-2xl mx-auto ${
            isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
          }`}
          style={{ animation: "slideInUp 0.7s ease-out 0.2s both" }}
        >
          Join millions learning interactively. Build projects, get instant
          feedback, and accelerate progress with AI guidance and community
          support.
        </p>

        {/* CTA Section */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animation: "slideInUp 0.7s ease-out 0.3s both" }}
        >
          {/* Primary button */}
          <button
            className={`px-9 py-4 rounded-xl font-bold text-lg btn-gradient transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg ${
              isDark ? "shadow-indigo-500/30" : "shadow-purple-500/30"
            }`}
          >
            Get Started
            <FaArrowRight size={18} />
          </button>

          {/* Secondary button */}
          <button
            className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group ${
              isDark
                ? "border-dark-accent/60 text-dark-accent hover:bg-dark-accent/10"
                : "border-purple-300/70 text-lc-accent hover:bg-purple-50 hover:border-purple-400/80 shadow-sm"
            }`}
          >
            <span className="relative z-10">Learn More</span>
            <span
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark ? "bg-dark-accent/10" : "bg-purple-200/30"
              }`}
            ></span>
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-6 mt-16 pt-12"
          style={{ animation: "slideInUp 0.7s ease-out 0.35s both" }}
        >
          {[
            { value: "10M+", label: "Active Learners" },
            { value: "500+", label: "Tutorials" },
            { value: "98%", label: "Success Rate" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl glass-card relative overflow-hidden group transition-all duration-400 ${
                isDark
                  ? "hover:bg-dark-card/60"
                  : "hover:bg-white/80 shadow-sm border border-purple-200/50"
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.4 + i * 0.08}s both`,
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white/60 to-transparent transition-opacity duration-500"></div>
              <p className="text-3xl font-bold gradient-text tracking-tight">
                {stat.value}
              </p>
              <p
                className={`text-sm mt-1 ${
                  isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
