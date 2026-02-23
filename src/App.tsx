import React, { useState } from "react";
import HomeView from "./HomeView";
import CatalogView from "./CatalogView";
import MiniPcView from "./MiniPcView";
import PixieView from "./PixieView";
import Footer from "./Footer";

type View = "HOME" | "CATALOG" | "MINI_PCS" | "PIXIE";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("HOME");

  return (
    <div className="h-screen w-screen bg-gray-950 overflow-hidden relative flex flex-col">
      <div className="flex-1 overflow-hidden">
        {currentView === "HOME" && <HomeView setView={setCurrentView} />}
        {currentView === "CATALOG" && <CatalogView />}
        {currentView === "MINI_PCS" && <MiniPcView />}
        {currentView === "PIXIE" && <PixieView />}
      </div>
      <Footer />

      {currentView !== "HOME" && (
        <button
          className="group fixed left-8 bottom-24 z-50 h-24 px-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-white/10 ring-1 ring-white/5 text-white text-2xl font-bold shadow-[0_20px_50px_rgba(0,0,0,0.65)] transition-all duration-300 active:scale-98 flex items-center gap-3 hover:border-cyan-400/50 hover:shadow-cyan-500/30"
          onClick={() => setCurrentView("HOME")}
        >
          <div className="text-4xl group-hover:scale-110 transition-transform">🏠</div>
          <span className="group-hover:text-cyan-200 transition-colors">Atrás</span>
        </button>
      )}
    </div>
  );
};

export default App;
