import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className="mt-14">
      <h2 className="text-3xl md:text-5xl font-bold">
        Simple pricing. <span className="text-fuchsia-400">High impact.</span>
      </h2>
      <p className="mt-4 text-white/70 text-lg max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <PriceCard name="Starter" price="$19" highlight={false} />
        <PriceCard name="Pro" price="$49" highlight />
        <PriceCard name="Enterprise" price="$99" highlight={false} />
      </div>
    </section>
  );
}

function PriceCard({ name, price, highlight }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={[
        "rounded-2xl border p-6 backdrop-blur transition",
        highlight
          ? "border-fuchsia-400/40 bg-white/10 glow"
          : "border-white/15 bg-white/5 glow-hover",
      ].join(" ")}
    >
      <div className="text-sm text-white/60">{name}</div>
      <div className="mt-2 text-4xl font-bold">{price}</div>
      <div className="mt-2 text-sm text-white/60">per month</div>

      <ul className="mt-6 space-y-3 text-sm text-white/75">
        {["Lorem ipsum dolor", "Sed do eiusmod", "Ut enim ad minim"].map((x) => (
          <li key={x} className="flex items-center gap-2">
            <span className="text-cyan-300">
              <FaCheckCircle />
            </span>
            {x}
          </li>
        ))}
      </ul>

      <button className="mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold text-black bg-gradient-to-r from-cyan-300 to-fuchsia-400 hover:opacity-90 transition">
        Choose {name}
      </button>
    </motion.div>
  );
}
