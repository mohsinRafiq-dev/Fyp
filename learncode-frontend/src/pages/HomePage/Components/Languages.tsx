import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "../../../contexts/ThemeContext";

const languages = [
  { name: "HTML", imgSrc: "/assets/homePage/Html.png" },
  { name: "Javascript", imgSrc: "/assets/homePage/Javascript.png" },
  { name: "Java", imgSrc: "/assets/homePage/Java.png" },
  { name: "C++", imgSrc: "/assets/homePage/Cplusplus.png" },
];

const dsaCourses = [
  {
    title: "DSA Fundamentals",
    description:
      "Build a strong foundation with core concepts like arrays, linked lists, stacks, and queues.",
    linkText: "Start Learning",
    imgSrc: "/assets/homePage/Dsa1.png",
  },
  {
    title: "Advanced Algorithms",
    description:
      "Tackle complex problems with sorting, searching, and graph algorithms.",
    linkText: "Dive Deeper",
    imgSrc: "/assets/homePage/Dsa2.png",
  },
];

export default function Languages() {
  const { isDark } = useTheme();

  return (
    <section
      className={`relative py-24 lg:py-32 overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-dark-bg-secondary to-dark-bg"
          : "bg-gradient-to-b from-lc-bg via-gray-50 to-lc-bg"
      }`}
    >
      {/* Animated background blobs with enhanced blur effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large animated blobs */}
        <div
          className={`absolute -top-1/2 -left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 ${
            isDark
              ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"
              : "bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400"
          }`}
          style={{ animation: "blob-animation 12s infinite" }}
        ></div>
        <div
          className={`absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 ${
            isDark
              ? "bg-gradient-to-tl from-purple-600 via-pink-600 to-rose-600"
              : "bg-gradient-to-tl from-purple-400 via-pink-400 to-rose-400"
          }`}
          style={{ animation: "blob-animation 12s infinite 4s" }}
        ></div>

        {/* Medium floating blobs */}
        <div
          className={`absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px] opacity-20 ${
            isDark
              ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
              : "bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300"
          }`}
          style={{ animation: "blob-animation 15s infinite 2s" }}
        ></div>
        <div
          className={`absolute bottom-1/3 left-1/3 w-[350px] h-[350px] rounded-full blur-[100px] opacity-20 ${
            isDark
              ? "bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-500"
              : "bg-gradient-to-tl from-cyan-300 via-blue-300 to-purple-300"
          }`}
          style={{ animation: "blob-animation 15s infinite 6s" }}
        ></div>

        {/* Small accent blobs */}
        <div
          className={`absolute top-1/4 left-1/2 w-[250px] h-[250px] rounded-full blur-[80px] opacity-15 ${
            isDark
              ? "bg-gradient-to-r from-rose-400 to-pink-400"
              : "bg-gradient-to-r from-rose-300 to-pink-300"
          }`}
          style={{ animation: "blob-animation 18s infinite 8s" }}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/3 w-[250px] h-[250px] rounded-full blur-[80px] opacity-15 ${
            isDark
              ? "bg-gradient-to-l from-blue-400 to-cyan-400"
              : "bg-gradient-to-l from-blue-300 to-cyan-300"
          }`}
          style={{ animation: "blob-animation 18s infinite 10s" }}
        ></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Languages Section */}
        <div className="mb-24 lg:mb-32">
          {/* Section Header */}
          <div className="text-center mb-16 relative z-30">
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 pb-2 bg-gradient-to-r ${
                isDark
                  ? "from-indigo-400 via-purple-400 to-pink-400"
                  : "from-blue-600 via-purple-600 to-pink-600"
              } text-transparent bg-clip-text`}
              style={{ animation: "fadeInDown 0.6s ease-out" }}
            >
              Explore Our Languages
            </h2>
            <p
              className={`text-lg sm:text-xl max-w-2xl mx-auto ${
                isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
              }`}
              style={{ animation: "fadeInDown 0.6s ease-out 0.2s backwards" }}
            >
              Master the most popular programming languages with interactive
              tutorials
            </p>
          </div>

          {/* Language Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {languages.map((lang, idx) => (
              <div
                key={lang.name}
                className={`group relative p-8 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 cursor-pointer ${
                  isDark
                    ? "bg-dark-card/50 backdrop-blur-sm border border-dark-border/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/30"
                    : "bg-white/50 backdrop-blur-sm border border-purple-200/60 shadow-sm hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/30"
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`,
                }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark
                      ? "bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"
                      : "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
                  }`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="relative">
                      <img
                        src={lang.imgSrc}
                        alt={`${lang.name} logo`}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      />
                      {/* Glow effect behind icon */}
                      <div
                        className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${
                          isDark
                            ? "bg-gradient-to-br from-indigo-500 to-purple-500"
                            : "bg-gradient-to-br from-blue-500 to-purple-500"
                        }`}
                      ></div>
                    </div>
                  </div>
                  <p
                    className={`font-bold text-center text-lg ${
                      isDark ? "text-dark-text" : "text-lc-text"
                    }`}
                  >
                    {lang.name}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></div>
              </div>
            ))}
          </div>
        </div>

        {/* DSA Courses Section */}
        <div className="relative">
          {/* Additional animated background elements for DSA section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Floating code symbols */}
            <div
              className={`absolute top-10 left-[10%] text-6xl font-mono opacity-5 ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
              style={{ animation: "float 8s ease-in-out infinite" }}
            >
              {"{}"}
            </div>
            <div
              className={`absolute top-1/3 right-[15%] text-5xl font-mono opacity-5 ${
                isDark ? "text-pink-400" : "text-pink-600"
              }`}
              style={{ animation: "float 10s ease-in-out infinite 2s" }}
            >
              {"[]"}
            </div>
            <div
              className={`absolute bottom-1/4 left-[20%] text-7xl font-mono opacity-5 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}
              style={{ animation: "float 12s ease-in-out infinite 4s" }}
            >
              {"<>"}
            </div>

            {/* Extra gradient orbs for DSA section */}
            <div
              className={`absolute top-20 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20 ${
                isDark
                  ? "bg-gradient-to-br from-purple-600 to-pink-600"
                  : "bg-gradient-to-br from-purple-400 to-pink-400"
              }`}
              style={{ animation: "blob-animation 14s infinite" }}
            ></div>
            <div
              className={`absolute bottom-20 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20 ${
                isDark
                  ? "bg-gradient-to-tl from-indigo-600 to-cyan-600"
                  : "bg-gradient-to-tl from-indigo-400 to-cyan-400"
              }`}
              style={{ animation: "blob-animation 14s infinite 5s" }}
            ></div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-20 relative z-30">
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 pb-3 bg-gradient-to-r ${
                isDark
                  ? "from-pink-400 via-purple-400 to-indigo-400"
                  : "from-pink-600 via-purple-600 to-blue-600"
              } text-transparent bg-clip-text`}
              style={{ animation: "fadeInDown 0.6s ease-out" }}
            >
              Master Data Structures & Algorithms
            </h2>
            <p
              className={`text-lg sm:text-xl max-w-2xl mx-auto ${
                isDark ? "text-dark-text-secondary" : "text-lc-text-secondary"
              }`}
              style={{ animation: "fadeInDown 0.6s ease-out 0.2s backwards" }}
            >
              Level up your coding skills with comprehensive DSA courses
            </p>
          </div>

          {/* DSA Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto relative z-30">
            {dsaCourses.map((course, idx) => (
              <div
                key={course.title}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-3 cursor-pointer ${
                  isDark
                    ? "bg-dark-card/90 backdrop-blur-xl border border-dark-border/50 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/40"
                    : "bg-white/90 backdrop-blur-xl border border-blue-200/60 shadow-sm hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/40"
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.2}s backwards`,
                }}
              >
                {/* Animated corner accents */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark
                      ? "bg-gradient-to-bl from-purple-500/20 to-transparent"
                      : "bg-gradient-to-bl from-purple-400/20 to-transparent"
                  }`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark
                      ? "bg-gradient-to-tr from-pink-500/20 to-transparent"
                      : "bg-gradient-to-tr from-pink-400/20 to-transparent"
                  }`}
                ></div>

                {/* Image Section with Overlay */}
                <div className="relative overflow-hidden h-56 sm:h-64">
                  <img
                    src={course.imgSrc}
                    alt={course.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 group-hover:brightness-110"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isDark
                        ? "bg-gradient-to-t from-dark-card via-dark-card/60 to-transparent"
                        : "bg-gradient-to-t from-white via-white/60 to-transparent"
                    }`}
                  ></div>
                  {/* Animated gradient border on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isDark
                        ? "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20"
                        : "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20"
                    }`}
                  ></div>

                  {/* Pulse effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 ${
                        isDark
                          ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                          : "bg-gradient-to-r from-purple-400/10 to-pink-400/10"
                      }`}
                      style={{ animation: "pulse 2s ease-in-out infinite" }}
                    ></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 relative">
                  <h3
                    className={`text-2xl sm:text-3xl font-black mb-4 transition-all duration-300 ${
                      isDark
                        ? "text-dark-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text"
                        : "text-lc-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text"
                    }`}
                  >
                    {course.title}
                  </h3>
                  <p
                    className={`mb-6 leading-relaxed text-base sm:text-lg ${
                      isDark
                        ? "text-dark-text-secondary"
                        : "text-lc-text-secondary"
                    }`}
                  >
                    {course.description}
                  </p>

                  {/* CTA Link */}
                  <div className="relative inline-flex items-center group/link">
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 font-bold text-lg transition-all duration-300 relative ${
                        isDark
                          ? "text-dark-accent hover:text-purple-400"
                          : "text-lc-accent hover:text-purple-600"
                      }`}
                    >
                      {course.linkText}
                      <FaArrowRight className="text-sm transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                    </a>
                    {/* Underline animation */}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover/link:w-full transition-all duration-300 ${
                        isDark
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gradient-to-r from-purple-600 to-pink-600"
                      }`}
                    ></span>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
