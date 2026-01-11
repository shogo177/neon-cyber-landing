import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Shell from "./components/Shell.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const page = {
  initial: { opacity: 0, y: 14, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(6px)" },
};

export default function App() {
  const location = useLocation();

  return (
    <Shell>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={page}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Shell>
  );
}
