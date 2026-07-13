import { Code2, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" />
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Nova<span className="text-blue-500">Tech</span>
          </h1>
        </div>


        <button onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition"
        >{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>


        <ul className="hidden md:flex items-center gap-8 text-slate-700 dark:text-slate-300">
          <li>
            <a href="#" className="transition-colors hover:text-blue-500">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="transition-colors hover:text-blue-500">
              Services
            </a>
          </li>

          <li>
            <a href="#" className="transition-colors hover:text-blue-500">
              About
            </a>
          </li>

          <li>
            <a href="#" className="transition-colors hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="rounded-lg border border-slate-300 dark:border-slate-700 p-2 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-105"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700">
            Get Started
          </button>
        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950">

          <ul className="flex flex-col p-4 gap-4 text-slate-700 dark:text-slate-300">

            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

          <div className="flex items-center justify-between p-4 border-t border-slate-300 dark:border-slate-800">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-lg border border-slate-300 dark:border-slate-700 p-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition">
              Get Started
            </button>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;