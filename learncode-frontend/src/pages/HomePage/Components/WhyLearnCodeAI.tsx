import { useTheme } from "../../../contexts/ThemeContext";
import { FaUserGraduate } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";

export default function WhyLearnCodeAI() {
  const { isDark } = useTheme();

  const features = [
    {
      icon: <FaUserGraduate className="text-3xl" />,
      title: "For coders, by coders",
      description:
        "We're not just educators—we're developers creating practical resources we wish we had while learning.",
      gradient: isDark
        ? "from-blue-600 to-cyan-600"
        : "from-blue-400 to-cyan-400",
    },
    {
      icon: <BsCodeSlash className="text-3xl" />,
      title: "Coding made simple",
      description:
        "From step-by-step tutorials to an AI Copilot, we break down complex topics into easy lessons that actually stick.",
      gradient: isDark
        ? "from-purple-600 to-pink-600"
        : "from-purple-400 to-pink-400",
    },
    {
      icon: <FaWrench className="text-3xl" />,
      title: "Learn by building",
      description:
        "Don't just read—create projects, test your code in the online editor, and apply skills instantly.",
      gradient: isDark
        ? "from-indigo-600 to-purple-600"
        : "from-indigo-400 to-purple-400",
    },
  ];

  return (
    <section
      className={`relative py-20 lg:py-18 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-dark-bg to-dark-bg-secondary"
          : "bg-gradient-to-b from-lc-bg to-lc-bg-secondary"
      }`}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        <div
          className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl ${
            isDark
              ? "bg-gradient-to-br from-indigo-600 to-blue-600"
              : "bg-gradient-to-br from-indigo-400 to-blue-400"
          }`}
        ></div>
        <div
          className={`absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl ${
            isDark
              ? "bg-gradient-to-tl from-purple-600 to-pink-600"
              : "bg-gradient-to-tl from-purple-400 to-pink-400"
          }`}
        ></div>
      </div>

      {/* Divider */}
      <div
        className={`h-px ${isDark ? "bg-dark-border/70" : "bg-purple-200/40"}`}
      ></div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2
            className={`text-4xl lg:text-5xl font-bold text-center mb-6 ${
              isDark ? "text-dark-text" : "text-lc-text"
            }`}
            style={{ animation: "slideInUp 0.6s ease-out" }}
          >
            Why <span className="gradient-text">LearnCode AI</span>?
          </h2>

          {/* Subheading */}
          <p
            className={`text-center max-w-2xl mx-auto mb-16 ${
              isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
            }`}
            style={{ animation: "slideInUp 0.6s ease-out 0.1s both" }}
          >
            We're committed to making coding education accessible, practical,
            and engaging for everyone.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl glass-card hover:scale-105 transition-all duration-300 ${
                  isDark
                    ? "hover:shadow-lg hover:shadow-indigo-500/20"
                    : "hover:shadow-lg hover:shadow-purple-500/20 shadow-sm"
                }`}
                style={{
                  animation: `slideInUp 0.6s ease-out ${
                    0.2 + index * 0.1
                  }s both`,
                  borderColor: isDark
                    ? "rgba(148, 163, 184, 0.2)"
                    : "rgba(196, 181, 253, 0.6)",
                  boxShadow: isDark
                    ? undefined
                    : "0 1px 2px 0 rgba(168, 85, 247, 0.12)",
                }}
              >
                {/* Icon container */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${
                    feature.gradient
                  } text-white shadow-lg mb-6 ring-1 ${
                    isDark ? "ring-white/10" : "ring-purple-200/40"
                  }`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-4 ${
                    isDark ? "text-dark-text" : "text-lc-text"
                  }`}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={`leading-relaxed ${
                    isDark
                      ? "text-dark-text-secondary"
                      : "text-lc-text-secondary"
                  }`}
                >
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${feature.gradient}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`h-px mt-20 lg:mt-32 ${
          isDark ? "bg-dark-border/70" : "bg-purple-200/40"
        }`}
      ></div>
    </section>
  );
}
