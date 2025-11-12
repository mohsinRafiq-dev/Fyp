import { FaUser, FaBrain, FaUsers } from "react-icons/fa";
import { useTheme } from "../../../contexts/ThemeContext";

export default function HowItWorks() {
  const { isDark } = useTheme();

  const steps = [
    {
      icon: <FaUser className="text-3xl" />,
      title: "Sign Up",
      description:
        "Sign up for free and get access to tutorials, coding challenges, and the built-in code editor.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Learn & Practice",
      description:
        "Follow structured tutorials, and practice directly in your browser with real-time feedback.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Collaborate",
      description:
        "Work with peers, get AI support, and use Copilot to accelerate your coding journey.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      className={`relative py-20 lg:py-32 transition-colors duration-300 overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-dark-bg-secondary to-dark-bg"
          : "bg-gradient-to-b from-lc-bg-secondary to-lc-bg"
      }`}
    >
      {/* Animated decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blurred gradient blobs */}
        <div
          className={`absolute top-0 right-1/4 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-20 animate-pulse-slow ${
            isDark
              ? "bg-gradient-to-r from-indigo-600 to-purple-600"
              : "bg-gradient-to-r from-blue-300 to-purple-300"
          }`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-20 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-15 animate-pulse-slower ${
            isDark
              ? "bg-gradient-to-tr from-purple-600 to-pink-600"
              : "bg-gradient-to-tr from-purple-300 to-pink-400"
          }`}
        ></div>
        {/* Floating particles */}
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
              animationDelay: i * 0.5 + "s",
              animationDuration: 10 + Math.random() * 10 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-6 gradient-text`}
          style={{ animation: "slideInUp 0.6s ease-out" }}
        >
          How It Works
        </h2>
        <p
          className={`text-center max-w-2xl mx-auto mb-14 text-lg ${
            isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
          }`}
          style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
        >
          Three simple steps to start learning, building, and collaborating with
          intelligent guidance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-2xl transition-all duration-500 transform hover:scale-[1.04] hover:-translate-y-2 glass-card backdrop-blur-xl ${
                isDark
                  ? "hover:shadow-lg hover:shadow-indigo-500/20"
                  : "hover:shadow-lg hover:shadow-purple-500/20 shadow-sm"
              }`}
              style={{
                animation: "slideInUp 0.7s ease-out",
                animationDelay: `${index * 0.18}s`,
                borderColor: isDark
                  ? "rgba(148, 163, 184, 0.18)"
                  : "rgba(196, 181, 253, 0.55)",
              }}
            >
              {/* Step number */}
              <div
                className={`absolute -top-4 -right-4 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-black/10 ring-2 ${
                  isDark
                    ? "bg-gradient-to-br from-indigo-600 to-purple-600 ring-indigo-400/40"
                    : "bg-gradient-to-br from-indigo-400 to-purple-500 ring-purple-300/50"
                }`}
                style={{ animation: "fadeInDown 0.5s ease-out" }}
              >
                {index + 1}
              </div>

              {/* Icon */}
              <div className="relative mb-6 w-20 h-20">
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 bg-gradient-to-br ${step.gradient}`}
                ></div>
                <div
                  className={`relative w-full h-full rounded-2xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 shadow-lg bg-gradient-to-br ${step.gradient}`}
                >
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDark ? "text-dark-text" : "text-lc-text"
                }`}
              >
                {step.title}
              </h3>

              <p
                className={`leading-relaxed ${
                  isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
                }`}
              >
                {step.description}
              </p>

              {/* Divider for non-last items */}
              {index < steps.length - 1 && (
                <div
                  className={`hidden md:block absolute top-1/2 -right-8 w-16 h-[3px] rounded-full ${
                    isDark
                      ? "bg-gradient-to-r from-indigo-500/60 via-purple-500/50 to-transparent"
                      : "bg-gradient-to-r from-purple-400/60 via-pink-400/50 to-transparent"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
