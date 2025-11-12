import { useTheme } from "../../../contexts/ThemeContext";
import { FaStar } from "react-icons/fa";

export default function Testimonial() {
  const { isDark } = useTheme();

  return (
    <section
      className={`relative py-20 lg:py-32 transition-colors duration-300 overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-dark-bg to-dark-bg-secondary"
          : "bg-gradient-to-b from-lc-bg to-lc-bg-secondary"
      }`}
    >
      {/* Animated decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-25 animate-pulse-slow ${
            isDark
              ? "bg-gradient-to-l from-indigo-600 to-purple-600"
              : "bg-gradient-to-l from-blue-400 to-purple-400"
          }`}
        ></div>
        <div
          className={`absolute -top-32 -left-32 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-20 animate-pulse-slower ${
            isDark
              ? "bg-gradient-to-tr from-purple-600 to-pink-600"
              : "bg-gradient-to-tr from-purple-400 to-pink-400"
          }`}
        ></div>
        {Array.from({ length: 16 }).map((_, i) => (
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
              animationDelay: i * 0.35 + "s",
              animationDuration: 11 + Math.random() * 9 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial content */}
          <div
            className={`relative group p-8 lg:p-12 rounded-2xl glass-card overflow-hidden ${
              isDark
                ? "shadow-lg shadow-indigo-500/10"
                : "shadow-lg shadow-purple-500/10 border border-purple-200/50"
            }`}
            style={{ animation: "slideInLeft 0.8s ease-out" }}
          >
            {/* Card sheen */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white/60 to-transparent pointer-events-none"></div>
            {/* Quote mark */}
            <img
              src="/assets/homePage/QuoteLeft.svg"
              className="mb-6 w-12 h-12 opacity-60"
            />

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    isDark ? "text-yellow-400" : "text-yellow-500"
                  } drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]`}
                  size={20}
                />
              ))}
            </div>

            {/* Quote text */}
            <p
              className={`text-2xl lg:text-3xl font-bold mb-8 leading-tight tracking-tight ${
                isDark ? "text-dark-text" : "text-lc-text"
              }`}
            >
              <span className="relative">
                LearnCode AI feels like learning with a mentor.
                <span
                  className={`absolute -bottom-1 left-0 h-[3px] w-24 rounded-full ${
                    isDark ? "bg-indigo-500/60" : "bg-purple-400/60"
                  }`}
                ></span>
              </span>
              <br />
              The tutorials, AI Copilot, and instant feedback keep me motivated
              and improving every day.
            </p>

            {/* User info */}
            <div className="flex items-center gap-4 pt-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-400/40 to-pink-400/40 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <img
                  src="/assets/homePage/Avatar.png"
                  alt="Muhammad Saad"
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 shadow-md"
                  style={
                    {
                      ringColor: isDark ? "#818cf8" : "#c4b5fd",
                    } as React.CSSProperties
                  }
                />
              </div>
              <div>
                <p
                  className={`font-bold text-lg ${
                    isDark ? "text-dark-text" : "text-lc-text"
                  }`}
                >
                  Muhammad Saad
                </p>
                <p
                  className={`text-sm ${
                    isDark
                      ? "text-dark-text-secondary"
                      : "text-lc-text-secondary"
                  }`}
                >
                  Software Engineer @ Tech Company
                </p>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div
            className="hidden lg:flex justify-center"
            style={{ animation: "slideInRight 0.8s ease-out" }}
          >
            <div
              className={`relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 group ${
                isDark
                  ? "shadow-indigo-500/20"
                  : "shadow-purple-500/20 border border-purple-200/40"
              }`}
            >
              <img
                src="/assets/homePage/TestimonialPic.png"
                alt="Person coding at a desk"
                className="max-h-[500px] w-full object-cover"
              />
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-t from-dark-bg/60 to-transparent"
                    : "bg-gradient-to-t from-lc-bg/60 to-transparent"
                }`}
              ></div>
              <div
                className={`absolute -inset-[2px] rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark
                    ? "bg-gradient-to-r from-indigo-500/30 to-purple-500/30"
                    : "bg-gradient-to-r from-purple-400/30 to-pink-400/30"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
