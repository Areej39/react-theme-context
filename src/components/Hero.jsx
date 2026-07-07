import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-12 items-center">

       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 px-4 py-2 text-sm font-medium mb-6">
            Digital Solutions for Modern Businesses
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            We Build{" "}
            <span className="text-blue-600 dark:text-blue-500">
              Modern Websites
            </span>{" "}
            That Grow Your Business
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-xl">
            NovaTech helps startups and businesses create fast,
            responsive, and beautiful websites using the latest web
            technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 transition-all duration-300 hover:border-blue-500 hover:scale-105">
              <PlayCircle size={18} />
              Learn More
            </button>

          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-2xl transition-colors duration-300">

           
            <div className="flex gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="space-y-6">

              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Projects
                </p>
                <h2 className="text-3xl font-bold">120+</h2>
              </div>

              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Happy Clients
                </p>
                <h2 className="text-3xl font-bold">95+</h2>
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Success Rate
                </p>
                <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                  99%
                </h2>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;