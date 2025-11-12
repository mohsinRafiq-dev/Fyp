import { useTheme } from "../../../contexts/ThemeContext";
import {
  FaChevronRight,
  FaQuoteLeft,
  FaUsers,
  FaComments,
  FaCodeBranch,
  FaRobot,
} from "react-icons/fa";

function CollaborationSection() {
  const { isDark } = useTheme();

  return (
    <section
      className={`relative py-20 lg:py-32 transition-colors duration-300 overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-dark-bg to-dark-bg-secondary"
          : "bg-gradient-to-b from-lc-bg to-lc-bg-secondary"
      }`}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary large blob */}
        <div
          className={`absolute top-1/4 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20 animate-pulse-slow ${
            isDark
              ? "bg-gradient-to-l from-indigo-600 to-purple-600"
              : "bg-gradient-to-l from-blue-400 to-purple-400"
          }`}
        ></div>
        {/* Secondary accent blob */}
        <div
          className={`absolute -bottom-32 -left-32 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-15 animate-pulse-slower ${
            isDark
              ? "bg-gradient-to-tr from-purple-600 to-pink-600"
              : "bg-gradient-to-tr from-purple-400 to-pink-400"
          }`}
        ></div>
        {/* Floating particles */}
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
              animationDuration: 12 + Math.random() * 10 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div style={{ animation: "slideInLeft 0.8s ease-out" }}>
            {/* Heading */}
            <h2
              className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight ${
                isDark ? "text-dark-text" : "text-lc-text"
              }`}
              style={{ animation: "slideInUp 0.7s ease-out" }}
            >
              Collaboration that goes{" "}
              <span className="gradient-text">beyond code</span>
            </h2>

            {/* Description */}
            <p
              className={`text-lg mb-10 leading-relaxed max-w-xl ${
                isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
              }`}
              style={{ animation: "slideInUp 0.7s ease-out 0.1s both" }}
            >
              Work smarter, not harder—with LearnCode AI's real‑time
              collaboration, AI guidance, and integrated workflows. Share,
              review, iterate, and ship faster together.
            </p>

            {/* Feature pills */}
            <div
              className="grid grid-cols-2 gap-3 mb-10 max-w-xl"
              style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
            >
              {[
                { icon: <FaUsers />, label: "Real-time Sessions" },
                { icon: <FaRobot />, label: "AI Pair Assistant" },
                { icon: <FaCodeBranch />, label: "Shared Projects" },
                { icon: <FaComments />, label: "Contextual Chat" },
              ].map((f, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] ${
                    isDark
                      ? "bg-dark-card/40 border-dark-border/40 text-dark-text-secondary hover:border-indigo-400/50"
                      : "bg-white/60 border-purple-200/50 text-lc-text-secondary shadow-sm hover:border-purple-400/60"
                  }`}
                >
                  <span
                    className={`${
                      isDark ? "text-dark-accent" : "text-lc-accent"
                    } text-base`}
                  >
                    {f.icon}
                  </span>
                  {f.label}
                </div>
              ))}
            </div>

            {/* Learn more link */}
            <a
              href="#"
              className={`group inline-flex items-center font-semibold text-lg mb-12 transition-all duration-300 ${
                isDark
                  ? "text-dark-accent hover:text-dark-accentHover"
                  : "text-lc-accent hover:text-lc-accentHover"
              }`}
              style={{ animation: "fadeInUp 0.6s ease-out 0.25s both" }}
            >
              <span className="relative">
                Learn more
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                    isDark ? "bg-dark-accent" : "bg-lc-accent"
                  }`}
                ></span>
              </span>
              <FaChevronRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Testimonial */}
            <div
              className={`p-8 rounded-2xl glass-card relative overflow-hidden transition-all ${
                isDark
                  ? "shadow-lg shadow-indigo-500/10"
                  : "shadow-lg shadow-purple-500/10 border border-purple-200/50"
              }`}
              style={{ animation: "fadeInUp 0.6s ease-out 0.35s both" }}
            >
              {/* subtle gradient sheen */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white/40 to-transparent"></div>
              <div className="flex items-start gap-4 mb-4">
                <FaQuoteLeft
                  className={`text-3xl mt-1 ${
                    isDark ? "text-dark-accent" : "text-lc-accent"
                  } opacity-50`}
                />
              </div>

              <p
                className={`text-lg font-medium mb-4 ${
                  isDark ? "text-dark-text" : "text-lc-text"
                }`}
              >
                LearnCode AI makes learning and building effortless. The AI
                Copilot feels like a teammate who's always ready to help.
              </p>

              <p
                className={`text-sm ${
                  isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
                }`}
              >
                <span className="font-semibold">Sarah,</span> Computer Science
                Student // LearnCode AI User
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div
            className="hidden lg:flex justify-end"
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
                src="/assets/homePage/copilot.png"
                alt="AI Copilot interface showing collaborative coding"
                className="max-w-[500px] max-h-[600px] w-full h-auto object-cover"
              />
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-t from-dark-bg/40 to-transparent"
                    : "bg-gradient-to-t from-lc-bg/40 to-transparent"
                }`}
              ></div>
              {/* glow ring */}
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

export default CollaborationSection;
