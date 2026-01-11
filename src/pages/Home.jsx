import { motion } from "framer-motion";
import { FaArrowRight, FaBolt, FaLayerGroup, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: "easeOut" } }),
};

export default function Home() {
  return (
    <section className="mt-14">
      <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0}
        className="text-4xl md:text-6xl font-bold leading-tight">
        Neon-grade{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
          UI
        </span>{" "}
        with motion that feels expensive.
      </motion.h1>

      <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.12}
        className="mt-5 text-white/70 text-lg max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </motion.p>

      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.24}
        className="mt-8 flex flex-wrap gap-3">
        <Link to="/pricing"
          className="rounded-xl px-5 py-3 text-sm font-semibold text-black bg-gradient-to-r from-cyan-300 to-fuchsia-400 hover:opacity-90 transition inline-flex items-center gap-2">
          Get started <FaArrowRight />
        </Link>
        <Link to="/about"
          className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur glow glow-hover transition">
          Learn more
        </Link>
      </motion.div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <Card icon={<FaBolt />} title="Fast feel" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Card icon={<FaLayerGroup />} title="Clean system" desc="Sed do eiusmod tempor incididunt ut labore et dolore." />
        <Card icon={<FaShieldAlt />} title="Solid defaults" desc="Ut enim ad minim veniam, quis nostrud exercitation." />
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur glow-hover transition"
    >
      <div className="text-cyan-300 text-xl">{icon}</div>
      <div className="mt-3 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </motion.div>
  );
}
