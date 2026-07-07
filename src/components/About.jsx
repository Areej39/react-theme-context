import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

function About() {
  const points = [
    "Experienced Development Team",
    "Modern & Responsive Designs",
    "Fast Project Delivery",
    "Ongoing Support & Maintenance",
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

     
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8 shadow-xl">

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                  5+
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                  120+
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Projects
                </p>
              </div>

              <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                  95+
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Happy Clients
                </p>
              </div>

              <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                  99%
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Success Rate
                </p>
              </div>

            </div>

          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500">
            About Us
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight">
            We Create Digital Experiences That Inspire
          </h2>

          <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
            At NovaTech, we help businesses grow with modern websites,
            user-friendly interfaces, and high-performance web solutions.
            Our mission is to turn your ideas into impactful digital experiences.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2
                  className="text-blue-600 dark:text-blue-500"
                  size={22}
                />
                <span className="text-slate-700 dark:text-slate-300">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <button className="mt-10 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default About;