import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { Code2 } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

        
          <div>
            <div className="flex items-center gap-2">
              <Code2 size={28} className="text-blue-600 dark:text-blue-500" />

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Nova<span className="text-blue-600 dark:text-blue-500">Tech</span>
              </h2>
            </div>

            <p className="mt-5 leading-7">
              We build modern, responsive, and high-performing websites that
              help businesses grow in the digital world.
            </p>
          </div>

       
          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-lg bg-slate-100 dark:bg-slate-900 p-3 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-100 dark:bg-slate-900 p-3 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-100 dark:bg-slate-900 p-3 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
              >
                <FaXTwitter size={20} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-100 dark:bg-slate-900 p-3 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>

            </div>
          </div>

        </div>


        <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} NovaTech. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;