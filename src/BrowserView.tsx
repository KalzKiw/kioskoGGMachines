import React, { useState } from "react";

type View = "HOME" | "CATALOG" | "MINI_PCS" | "BROWSER" | "PIXIE" | "INSTAGRAM" | "TWITTER" | "TIKTOK" | "LINKEDIN" | "PHONE";

interface BrowserViewProps {
  setView: (view: View) => void;
}

const BrowserView: React.FC<BrowserViewProps> = ({ setView }) => {
  const [url, setUrl] = useState<string>("https://www.google.com");
  const [inputValue, setInputValue] = useState<string>("");

  const handleNavigate = () => {
    let finalUrl = inputValue.trim();
    if (!finalUrl) return;

    // Si no tiene protocolo, agregar https://
    if (!finalUrl.startsWith("http://") && !finalUrl.startsWith("https://")) {
      // Si parece una búsqueda (sin punto), buscar en Google
      if (!finalUrl.includes(".")) {
        finalUrl = `https://www.google.com/search?q=${encodeURIComponent(finalUrl)}`;
      } else {
        finalUrl = `https://${finalUrl}`;
      }
    }

    setUrl(finalUrl);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleNavigate();
    }
  };

  return (
    <div className="h-full w-full relative flex flex-col bg-gray-950">
      {/* Search Bar */}
      <div className="bg-gray-900 border-b border-white/10 p-4 flex gap-3 items-center z-50">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter URL or search term..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50"
        />
        <button
          onClick={handleNavigate}
          className="px-6 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-colors"
        >
          Go
        </button>
      </div>

      {/* Browser Content */}
      <div className="flex-1 relative overflow-hidden">
        <iframe
          src={url}
          className="h-full w-full border-none absolute top-0 left-0"
          style={{ zIndex: 1 }}
          allow="fullscreen"
          title="Browser"
        />

        {/* Back button - centered vertically */}
        <button
          onClick={() => setView("HOME")}
          className="group absolute left-8 top-1/2 -translate-y-1/2 flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-white/10 ring-1 ring-white/5 text-white text-xl font-bold shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/30 active:scale-95"
          style={{ zIndex: 100 }}
        >
          <div className="text-3xl group-hover:scale-110 transition-transform">←</div>
          <span className="group-hover:text-cyan-200 transition-colors">Back</span>
        </button>
      </div>
    </div>
  );
};

export default BrowserView;
