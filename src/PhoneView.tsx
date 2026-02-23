import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

type View = "HOME" | "CATALOG" | "MINI_PCS" | "BROWSER" | "PIXIE" | "INSTAGRAM" | "TWITTER" | "TIKTOK" | "LINKEDIN" | "PHONE";

interface PhoneViewProps {
  setView: (view: View) => void;
}

const PhoneView: React.FC<PhoneViewProps> = ({ setView }) => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 overflow-auto flex flex-col items-center justify-center p-8 relative">
      {/* Back button */}
      <button
        onClick={() => setView("HOME")}
        className="group absolute top-8 left-8 flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-white/10 ring-1 ring-white/5 text-white text-xl font-bold shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/30 active:scale-95"
        style={{ zIndex: 100 }}
      >
        <div className="text-3xl group-hover:scale-110 transition-transform">←</div>
        <span className="group-hover:text-cyan-200 transition-colors">Back</span>
      </button>

      {/* Contact Information Container */}
      <div className="max-w-2xl w-full space-y-8 mt-16">
        <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">
          Contact Us
        </h1>

        {/* Phone */}
        <div className="group p-8 rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-white/10 ring-1 ring-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-yellow-400/50 hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
          onClick={() => window.location.href = "tel:+353873609905"}>
          <div className="flex items-start gap-4">
            <Phone className="w-8 h-8 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Phone</h3>
              <p className="text-gray-300 text-lg group-hover:text-white transition-colors">+353 87 360 9905</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="group p-8 rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-white/10 ring-1 ring-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
          onClick={() => window.location.href = "mailto:info@ggmachines.ie"}>
          <div className="flex items-start gap-4">
            <Mail className="w-8 h-8 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Email</h3>
              <p className="text-gray-300 text-lg group-hover:text-white transition-colors">info@ggmachines.ie</p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="group p-8 rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-white/10 ring-1 ring-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-emerald-400/50 hover:shadow-emerald-500/20 transition-all duration-300">
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Address</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                Unit 18, Western Parkway<br />
                Ballymount Industrial Estate<br />
                Dublin 12, D12 V8XT, Ireland
              </p>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="group p-8 rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-white/10 ring-1 ring-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-pink-400/50 hover:shadow-pink-500/20 transition-all duration-300">
          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 text-pink-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">Opening Hours</h3>
              <ul className="space-y-1 text-gray-300 group-hover:text-white transition-colors">
                <li><strong>Monday - Friday:</strong> 10am - 7pm</li>
                <li><strong>Saturday:</strong> 1pm - 4pm</li>
                <li><strong>Sunday:</strong> By appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneView;
