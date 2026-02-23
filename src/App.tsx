import React from "react";
import HomeView from "./HomeView";
import PixieView from "./PixieView";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gray-950 overflow-hidden relative flex flex-col">
      <div className="flex-1 overflow-hidden">
        <HomeView />
      </div>
      <Footer />
    </div>
  );
};

export default App;
