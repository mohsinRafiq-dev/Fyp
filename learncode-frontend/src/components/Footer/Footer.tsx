import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../../contexts/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer
      className={`relative overflow-hidden py-12 transition-colors duration-300 border-t ${
        isDark
          ? "bg-gradient-to-b from-dark-bg to-dark-bg-secondary text-white border-dark-border"
          : "bg-gradient-to-b from-lc-bg to-lc-bg-secondary text-lc-text border-purple-200/40"
      }`}
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -right-24 top-1/3 w-[22rem] h-[22rem] rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-indigo-600" : "bg-purple-400"
          }`}
        />
        <div
          className={`absolute -left-24 -bottom-24 w-[20rem] h-[20rem] rounded-full blur-3xl opacity-15 ${
            isDark ? "bg-purple-600" : "bg-pink-300"
          }`}
        />
      </div>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-6 md:mb-0 gradient-text">
          LearnCode AI
        </h1>
        <div className="flex space-x-5 text-2xl">
          <FaFacebookF
            className={`${
              isDark ? "hover:text-indigo-300" : "hover:text-purple-500"
            } cursor-pointer`}
          />
          <FaLinkedinIn
            className={`${
              isDark ? "hover:text-indigo-300" : "hover:text-purple-500"
            } cursor-pointer`}
          />
          <FaInstagram
            className={`${
              isDark ? "hover:text-pink-400" : "hover:text-pink-500"
            } cursor-pointer`}
          />
          <FaXTwitter
            className={`${
              isDark ? "hover:text-sky-300" : "hover:text-sky-500"
            } cursor-pointer`}
          />
          <FaYoutube
            className={`${
              isDark ? "hover:text-red-500" : "hover:text-red-600"
            } cursor-pointer`}
          />
        </div>
      </div>

      <hr
        className={`${
          isDark ? "border-dark-border/70" : "border-purple-200/40"
        } my-8`}
      />

      {/* Bottom Section */}
      <div
        className={`max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 ${
          isDark ? "text-gray-300" : "text-lc-text-secondary"
        }`}
      >
        <div>
          <h3
            className={`text-xl font-semibold mb-4 inline-block border-b-2 ${
              isDark ? "border-white" : "border-purple-200/70"
            }`}
          >
            Company
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className={`text-xl font-semibold mb-4 inline-block border-b-2 ${
              isDark ? "border-white" : "border-purple-200/70"
            }`}
          >
            Account
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                My Account
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                Preferences
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                Purchase
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className={`text-xl font-semibold mb-4 inline-block border-b-2 ${
              isDark ? "border-white" : "border-purple-200/70"
            }`}
          >
            Courses
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                Html & CSS
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                Javascript
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                React JS
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  isDark ? "hover:text-white" : "hover:text-lc-text"
                }`}
              >
                Node JS
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className={`text-xl font-semibold mb-4 inline-block border-b-2 ${
              isDark ? "border-white" : "border-purple-200/70"
            }`}
          >
            Company
          </h3>
          <form
            className={`flex flex-col space-y-4 ${
              isDark ? "text-white" : "text-lc-text"
            }`}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className={`px-4 py-3 rounded-md focus:outline-none border ${
                isDark
                  ? "bg-transparent border-dark-border focus:border-white text-white placeholder:text-gray-400"
                  : "bg-white/80 text-lc-text border-purple-200/60 focus:border-purple-400/80 shadow-sm placeholder:text-gray-500"
              }`}
            />
            <button
              type="submit"
              className={`font-semibold py-3 rounded-md transition ${
                isDark
                  ? "bg-gray-100 text-black hover:bg-white"
                  : "bg-white text-lc-text hover:bg-purple-50 border border-purple-200/60 shadow-sm"
              }`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
