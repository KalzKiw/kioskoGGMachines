import React from "react";
import { Phone, Mail } from "lucide-react";

const Footer: React.FC = () => (
  <div className="w-full bg-transparent border-t border-white/10 px-8 py-6 mt-4 relative">
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
      {/* OPENING HOURS */}
      <div>
        <h3 className="text-yellow-400 font-bold text-xs uppercase tracking-wider mb-3">Opening Hours</h3>
        <ul className="space-y-1 text-gray-300 text-xs">
          <li>Mon - Fri: 10am - 7pm</li>
          <li>Sat: 1pm - 4pm</li>
          <li>Sun: By appointment</li>
        </ul>
      </div>

      {/* CONTACT INFO */}
      <div>
        <h3 className="text-yellow-400 font-bold text-xs uppercase tracking-wider mb-3">Customer Service</h3>
        <ul className="space-y-1 text-gray-300 text-xs">
          <li className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-yellow-400 flex-shrink-0" />
            <a href="tel:+353873609905" className="hover:text-yellow-400 transition">+353 87 360 9905</a>
          </li>
          <li className="flex items-start gap-2">
            <Mail className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
            <a href="mailto:info@ggmachines.ie" className="hover:text-yellow-400 transition">info@ggmachines.ie</a>
          </li>
        </ul>
      </div>

      {/* ADDRESS */}
      <div>
        <h3 className="text-yellow-400 font-bold text-xs uppercase tracking-wider mb-3">Find Us</h3>
        <div className="text-gray-300 text-xs space-y-0.5">
          <p>Unit 18, Western Parkway</p>
          <p>Ballymount Industrial Estate</p>
          <p>Dublin 12, D12 V8XT, Ireland</p>
        </div>
      </div>
    </div>

    {/* Mini PC Logo - Absolute Bottom Right */}
    <div className="absolute bottom-4 right-4 h-full flex items-end pb-0 pr-2">
      <img
        src="/minipclogo.png"
        alt="Mini PC Logo"
        className="h-20 w-auto object-contain drop-shadow-lg hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300"
      />
    </div>
  </div>
);

export default Footer;
