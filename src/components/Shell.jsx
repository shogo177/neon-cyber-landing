import NeonBg from "./NeonBg.jsx";
import Nav from "./Nav.jsx";
import CursorGlow from "./CursorGlow.jsx";

export default function Shell({ children }) {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <NeonBg />
      <CursorGlow />
      <Nav />
      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        {children}
      </main>
    </div>
  );
}
