import React from "react";

const MiniPcView: React.FC = () => (
  <div className="h-full w-full relative pb-32">
    <iframe
      src="https://prueba-gg-machines.vercel.app/"
      className="h-full w-full border-none absolute top-0 left-0"
      style={{ zIndex: 10, maxHeight: "calc(100vh - 200px)" }}
      allow="fullscreen"
      title="Mini PCs Landing"
    />
  </div>
);

export default MiniPcView;
