import React, { useState } from "react";
import HomeView from "./HomeView";
import CatalogView from "./CatalogView";
import MiniPcView from "./MiniPcView";
import BrowserView from "./BrowserView";
import SocialView from "./SocialView";
import PhoneView from "./PhoneView";
import PixieView from "./PixieView";
import Footer from "./Footer";

type View = "HOME" | "CATALOG" | "MINI_PCS" | "BROWSER" | "PIXIE" | "INSTAGRAM" | "TWITTER" | "TIKTOK" | "LINKEDIN" | "PHONE";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("HOME");

  const isIframeView = (view: View) => 
    view === "CATALOG" || view === "MINI_PCS" || view === "BROWSER" || 
    view === "INSTAGRAM" || view === "TWITTER" || view === "TIKTOK" || view === "LINKEDIN";

  return isIframeView(currentView) ? (
    <div className="h-screen w-screen bg-gray-950 overflow-hidden relative">
      {currentView === "CATALOG" && <CatalogView setView={setCurrentView} />}
      {currentView === "MINI_PCS" && <MiniPcView setView={setCurrentView} />}
      {currentView === "BROWSER" && <BrowserView setView={setCurrentView} />}
      {(currentView === "INSTAGRAM" || currentView === "TWITTER" || currentView === "TIKTOK" || currentView === "LINKEDIN") && 
        <SocialView socialType={currentView} setView={setCurrentView} />}
    </div>
  ) : (
    <div className="h-screen w-screen bg-gray-950 overflow-hidden relative flex flex-col">
      <div className="flex-1 overflow-hidden">
        {currentView === "HOME" && <HomeView setView={setCurrentView} />}
        {currentView === "PHONE" && <PhoneView setView={setCurrentView} />}
        {currentView === "PIXIE" && <PixieView />}
      </div>
      {currentView === "HOME" && <Footer />}
    </div>
  );
};

export default App;
