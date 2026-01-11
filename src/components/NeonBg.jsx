export default function NeonBg() {
  return (
    <>
      {/* blobs */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-44 -left-44 h-[520px] w-[520px] rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute top-20 -right-44 h-[560px] w-[560px] rounded-full bg-cyan-400/18 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[520px] w-[900px] bg-indigo-500/10 blur-3xl" />
      </div>

      {/* scanlines */}
      <div className="pointer-events-none fixed inset-0 opacity-20 [background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_2px,transparent_6px)]" />

      {/* noise (from index.css) */}
      <div className="noise" />
    </>
  );
}
