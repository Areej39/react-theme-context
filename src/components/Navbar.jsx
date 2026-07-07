import { Code2, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-2">
          <Code2 size={28} className="text-blue-500" />
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Nova<span className="text-blue-500">Tech</span>
          </h1>
        </div>

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
    </nav>
  );
}

export default Navbar;