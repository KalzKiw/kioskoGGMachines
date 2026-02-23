import React from "react";
import QRCode from "react-qr-code";
import { Instagram, Twitter, Linkedin, Phone, Music2, Star, Award, Cpu, Zap, Globe } from "lucide-react";

type View = "HOME" | "CATALOG" | "MINI_PCS" | "BROWSER" | "PIXIE" | "INSTAGRAM" | "TWITTER" | "TIKTOK" | "LINKEDIN" | "PHONE";

interface HomeViewProps {
  setView: (view: View) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  const catalogUrl = "https://www.ggmachines.ie/";

  const socialLinks = [
    {
      name: "Instagram",
      viewType: "INSTAGRAM" as const,
      color: "hover:border-pink-400/60 hover:shadow-pink-500/40",
      textColor: "group-hover:text-pink-300",
      icon: Instagram,
    },
    {
      name: "Twitter",
      viewType: "TWITTER" as const,
      color: "hover:border-blue-400/60 hover:shadow-blue-500/40",
      textColor: "group-hover:text-blue-300",
      icon: Twitter,
    },
    {
      name: "TikTok",
      viewType: "TIKTOK" as const,
      color: "hover:border-cyan-400/60 hover:shadow-cyan-500/40",
      textColor: "group-hover:text-cyan-300",
      icon: Music2,
    },
    {
      name: "LinkedIn",
      viewType: "LINKEDIN" as const,
      color: "hover:border-blue-500/60 hover:shadow-blue-500/40",
      textColor: "group-hover:text-blue-400",
      icon: Linkedin,
    },
    {
      name: "Contact",
      viewType: "PHONE" as const,
      color: "hover:border-emerald-400/60 hover:shadow-emerald-500/40",
      textColor: "group-hover:text-emerald-300",
      icon: Phone,
    },
  ];

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden">
      {/* Dynamic Animated Background with Aurora Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Animated Aurora Orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/20 rounded-full filter blur-3xl top-[5%] left-[10%] animate-aurora-slow opacity-60" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/20 rounded-full filter blur-3xl top-[20%] right-[5%] animate-aurora-slow-delayed opacity-50" />
        <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/15 rounded-full filter blur-3xl bottom-[15%] left-[15%] animate-aurora-slow-alternate opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col h-full w-full">
        {/* Logo Header - 18% */}
        <div className="flex justify-center items-center h-[18%] pt-32 pb-12">
          <img
            src="/ggmachinelogo.png"
            alt="GG Machines Logo"
            className="h-40 w-auto object-contain drop-shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:drop-shadow-[0_0_50px_rgba(236,72,153,0.8)] transition-all duration-500"
          />
        </div>

        {/* Trust Badges: Premium and 5-Star Review - 6% */}
        <div className="flex justify-center items-center h-[6%] px-8">
          <div className="w-full max-w-3xl flex justify-center items-center gap-8 text-center">
            <div className="flex flex-col items-center gap-1">
              <Award className="w-6 h-6 text-cyan-400" />
              <p className="text-white text-xs font-bold">Premium</p>
              <p className="text-gray-400 text-xs">Dublin Assembly 🇮🇪</p>
            </div>
            <div className="h-8 border-l border-gray-700" />
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-white text-xs font-bold">Rated 5.0/5</p>
              <p className="text-gray-400 text-xs">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Spacing Below Badges - 16% (Spacing to push buttons down) */}
        <div className="h-[16%]"></div>

        {/* Navigation Buttons - 37% */}
        <div className="flex flex-col gap-4 items-center justify-center h-[35%] px-8">
          {/* Primary Button: See Catalog */}
          <button
            onClick={() => setView("CATALOG")}
            className="group w-full max-w-2xl h-28 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border-2 border-cyan-500/60 ring-1 ring-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 active:scale-98 overflow-hidden relative hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:ring-cyan-300/40"
          >
            {/* Glow background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-green-500/15 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-center justify-between px-10 h-full">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg ring-1 ring-cyan-300/30">
                  <Cpu className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                </div>
                <div className="text-left">
                  <h3 className="text-white text-3xl font-bold">See Catalog</h3>
                  <p className="text-gray-300 text-md">PCs, components & more</p>
                </div>
              </div>
              <div className="text-cyan-300 text-4xl group-hover:translate-x-2 transition-transform duration-300">→</div>
            </div>
          </button>

          {/* Secondary Button: Mini PCs */}
          <button
            onClick={() => setView("MINI_PCS")}
            className="group w-full max-w-2xl h-28 rounded-3xl bg-gradient-to-b from-slate-900/70 to-slate-950/80 border-2 border-gray-600/40 ring-1 ring-gray-500/10 shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-98 overflow-hidden relative hover:border-gray-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-center justify-between px-10 h-full">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center shadow-lg ring-1 ring-fuchsia-300/30">
                  <Zap className="w-10 h-10 text-fuchsia-300 drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]" />
                </div>
                <div className="text-left">
                  <h3 className="text-white text-3xl font-bold">Mini PCs</h3>
                  <p className="text-gray-400 text-md">Power in compact size</p>
                </div>
              </div>
              <div className="text-fuchsia-400/60 text-4xl group-hover:translate-x-2 transition-transform duration-300">→</div>
            </div>
          </button>

          {/* Tertiary Button: Browser */}
          <button
            onClick={() => setView("BROWSER")}
            className="group w-full max-w-2xl h-28 rounded-3xl bg-gradient-to-b from-slate-900/70 to-slate-950/80 border-2 border-green-600/40 ring-1 ring-green-500/10 shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-98 overflow-hidden relative hover:border-green-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-center justify-between px-10 h-full">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center shadow-lg ring-1 ring-green-300/30">
                  <Globe className="w-10 h-10 text-green-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </div>
                <div className="text-left">
                  <h3 className="text-white text-3xl font-bold">Browser</h3>
                  <p className="text-gray-400 text-md">Search & browse</p>
                </div>
              </div>
              <div className="text-green-400/60 text-4xl group-hover:translate-x-2 transition-transform duration-300">→</div>
            </div>
          </button>
        </div>
      </div>



      {/* Left: Social Media Icons - Centered Vertically */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <button
              key={social.name}
              onClick={() => setView(social.viewType)}
              title={social.name}
              className={`group w-16 h-16 rounded-full bg-gradient-to-b from-slate-900/90 to-slate-950 border border-white/10 ring-1 ring-white/5 flex items-center justify-center text-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-110 ${social.color}`}
            >
              <Icon className={`w-6 h-6 text-white ${social.textColor}`} />
            </button>
          );
        })}
      </div>

      {/* Top-Right: Large QR Code */}
      <div className="absolute top-8 right-8 z-40 flex flex-col items-center gap-3">
        <div className="rounded-3xl bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
          <QRCode value={catalogUrl} size={200} bgColor="#FFFFFF" fgColor="#0B0F1A" />
        </div>
        <p className="text-gray-300 text-sm font-semibold text-center whitespace-nowrap">
          Scan to browse<br />on mobile
        </p>
      </div>

      <style>{`
        @keyframes aurora-slow {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
          50% {
            transform: translate(-30px, 30px);
            opacity: 0.35;
          }
        }

        @keyframes aurora-slow-delayed {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.5;
          }
          50% {
            transform: translate(30px, -40px);
            opacity: 0.25;
          }
        }

        @keyframes aurora-slow-alternate {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          50% {
            transform: translate(-20px, -50px);
            opacity: 0.2;
          }
        }

        .animate-aurora-slow {
          animation: aurora-slow 12s ease-in-out infinite;
        }

        .animate-aurora-slow-delayed {
          animation: aurora-slow-delayed 15s ease-in-out infinite 1s;
        }

        .animate-aurora-slow-alternate {
          animation: aurora-slow-alternate 18s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
};

export default HomeView;
