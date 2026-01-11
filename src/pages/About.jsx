import { motion } from "framer-motion";
import { FaBolt, FaLayerGroup, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const page = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: "easeOut" },
  }),
};

const section = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const grid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const card = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <motion.section
      className="mt-14"
      variants={page}
      initial="hidden"
      animate="show"
    >
      {/* Heading */}
      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
        <h2 className="text-3xl md:text-5xl font-bold">
          Built with a <span className="text-cyan-300">modern</span> design mindset
        </h2>

        {/* Animated accent underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "220px", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mt-4 h-[3px] rounded-full bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-indigo-300"
        />
      </motion.div>

      {/* Intro */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.12}
        className="mt-5 text-white/70 text-lg max-w-2xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum.
      </motion.p>

      {/* Quick bullets (adds credibility + motion) */}
      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-10 grid gap-3 md:grid-cols-3"
      >
        <MiniStat icon={<FaBolt />} title="Speed" desc="Lorem ipsum dolor sit amet." />
        <MiniStat icon={<FaLayerGroup />} title="System" desc="Consectetur adipiscing elit." />
        <MiniStat icon={<FaShieldAlt />} title="Stability" desc="Sed do eiusmod tempor." />
      </motion.div>

      {/* Panels */}
      <motion.div
        className="mt-10"
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">How it’s built</h3>
            <p className="mt-2 text-white/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </p>
          </div>
        </div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          <Panel
            title="Vision"
            icon={<FaCheckCircle />}
            points={[
              "Lorem ipsum dolor sit amet",
              "Praesent libero sed cursus",
              "Integer nec odio praesent",
            ]}
          />
          <Panel
            title="Process"
            icon={<FaCheckCircle />}
            points={[
              "Sed do eiusmod tempor",
              "Incididunt ut labore",
              "Ut enim ad minim veniam",
            ]}
          />
          <Panel
            title="Detail"
            icon={<FaCheckCircle />}
            points={[
              "Nulla quis sem at nibh",
              "Elementum imperdiet",
              "Duis sagittis ipsum",
            ]}
          />
          <Panel
            title="Delivery"
            icon={<FaCheckCircle />}
            points={[
              "Praesent mauris fusce",
              "Nec tellus sed augue",
              "Semper porta mauris",
            ]}
          />
        </motion.div>
      </motion.div>

      {/* Bottom CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur glow-hover transition"
      >
        <div className="text-sm text-white/60">Next step</div>
        <div className="mt-2 text-lg font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <p className="mt-2 text-sm text-white/70 max-w-2xl">
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
      </motion.div>
    </motion.section>
  );
}

function MiniStat({ icon, title, desc }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
      }}
      className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur glow-hover transition"
    >
      <div className="text-cyan-300 text-xl">{icon}</div>
      <div className="mt-3 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </motion.div>
  );
}

function Panel({ title, icon, points }) {
  return (
    <motion.div
      variants={card}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur glow-hover transition"
    >
      <div className="flex items-center gap-3">
        <div className="text-cyan-300">{icon}</div>
        <div className="text-lg font-semibold">{title}</div>
      </div>

      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-[2px] text-fuchsia-400">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
