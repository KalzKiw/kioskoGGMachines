import React from "react";

type View = "HOME" | "CATALOG" | "MINI_PCS" | "PIXIE";

interface MiniPcViewProps {
  setView: (view: View) => void;
}

const MiniPcView: React.FC<MiniPcViewProps> = ({ setView }) => (
  <div className="h-full w-full relative pb-32">
    <iframe
      src="https://prueba-gg-machines.vercel.app/"
      className="h-full w-full border-none absolute top-0 left-0"
      style={{ zIndex: 1, maxHeight: "calc(100vh - 200px)" }}
      allow="fullscreen"
      title="Mini PCs Landing"
    />
    
    {/* Botón de volver - debe estar después del iframe para estar encima */}
    <button
      onClick={() => setView("HOME")}
      className="group absolute top-8 left-8 flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-white/10 ring-1 ring-white/5 text-white text-xl font-bold shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/30 active:scale-95"
      style={{ zIndex: 100 }}
    >
      <div className="text-3xl group-hover:scale-110 transition-transform">←</div>
      <span className="group-hover:text-cyan-200 transition-colors">Volver</span>
    </button>
  </div>
);

export default MiniPcView;
