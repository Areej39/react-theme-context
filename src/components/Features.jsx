import { Monitor, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Monitor size={32} />,
    title: "Modern Design",
    description:
      "We create clean and professional websites that leave a lasting impression.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Responsive Layout",
    description:
      "Every website looks great on desktops, tablets, and mobile devices.",
  },
  {
    icon: <Zap size={32} />,
    title: "Fast Performance",
    description:
      "Optimized websites that load quickly and provide a smooth user experience.",
  },
];

function Features() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-semibold text-blue-600 dark:text-blue-500">
            Our Features
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Everything You Need to Grow Online
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-7">
            We build fast, modern, and responsive websites that help businesses
            establish a strong online presence.
          </p>
        </motion.div>

      
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-500">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;