import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [p, setP] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e) => setP({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      style={{
        background: `radial-gradient(520px circle at ${p.x}px ${p.y}px, rgba(34,211,238,0.12), rgba(168,85,247,0.08), transparent 55%)`,
      }}
    />
  );
}
