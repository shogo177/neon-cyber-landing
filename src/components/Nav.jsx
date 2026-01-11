import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const items = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
];

export default function Nav() {
  return (
    <header className="relative mx-auto max-w-6xl px-6 pt-10">
      <div className="flex items-center justify-between">
        <div className="font-semibold tracking-wide text-lg select-none">
          <span className="text-cyan-300">NEO</span>
          <span className="text-fuchsia-400">/</span>
          <span className="text-white/80">PULSE</span>
        </div>

        <nav className="flex items-center gap-2">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                [
                  "relative px-3 py-2 rounded-xl text-sm font-semibold transition",
                  "border border-transparent",
                  "hover:bg-white/5 hover:border-white/10",
                  isActive ? "text-white bg-white/5 border-white/15 glow" : "text-white/70",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{it.label}</span>

                  {/* Animated underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-indigo-300"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
