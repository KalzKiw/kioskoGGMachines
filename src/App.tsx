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
    currentView === "CATALOG" || currentView === "MINI_PCS"
      ? (
        <div className="h-screen w-screen bg-gray-950 overflow-hidden relative">
          {currentView === "CATALOG" && <CatalogView setView={setCurrentView} />}
          {currentView === "MINI_PCS" && <MiniPcView setView={setCurrentView} />}
        </div>
      )
      : (
        <div className="h-screen w-screen bg-gray-950 overflow-hidden relative flex flex-col">
          <div className="flex-1 overflow-hidden">
            {currentView === "HOME" && <HomeView setView={setCurrentView} />}
            {currentView === "PIXIE" && <PixieView />}
          </div>
          {currentView === "HOME" && <Footer />}
        </div>
      )
  );
};

export default App;
