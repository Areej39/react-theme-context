import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 p-10 md:p-16 text-center text-white shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Build Your Next Website?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-blue-100">
            Whether you're a startup or an established business, NovaTech is
            here to help you create fast, modern, and responsive web solutions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <button className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-slate-100">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-600">
              Contact Us
            </button>

          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default CTA;