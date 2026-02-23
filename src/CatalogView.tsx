import React from "react";

const categories = [
  { icon: "🖥️", label: "PCs Gaming", description: "Equipos completos", gradient: "from-blue-500 to-cyan-500" },
  { icon: "🧩", label: "Componentes", description: "CPU, GPU, RAM...", gradient: "from-purple-500 to-pink-500" },
  { icon: "🖲️", label: "Monitores", description: "Alta resolución", gradient: "from-green-500 to-emerald-500" },
  { icon: "🎮", label: "Periféricos", description: "Teclados, mouse...", gradient: "from-orange-500 to-red-500" },
];

const CatalogView: React.FC = () => (
  <div className="flex flex-col h-full w-full items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-y-auto pb-32">
    {/* Fondo decorativo */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
    
    {/* Título */}
    <div className="absolute top-16 left-0 right-0 text-center z-10">
      <h2 className="text-white text-6xl font-black mb-2">Catálogo de Productos</h2>
      <p className="text-gray-400 text-2xl">Selecciona una categoría</p>
    </div>

    <div className="relative z-10 grid grid-cols-2 grid-rows-2 gap-10">
      {categories.map(({ icon, label, description, gradient }) => (
        <button
          key={label}
          className="group relative bg-gradient-to-b from-slate-900/95 to-slate-950 rounded-[2.5rem] w-[440px] h-[440px] flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.65)] border border-white/10 ring-1 ring-white/5 hover:border-transparent transition-all duration-300 overflow-hidden active:scale-95"
        >
          {/* Glow effect on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
          <div className={`absolute inset-0 border-4 border-transparent group-hover:border-4 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <div className={`mb-8 text-9xl group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
            <h3 className="text-white text-5xl font-bold mb-4">{label}</h3>
            <p className="text-gray-300 text-2xl">{description}</p>
            
            {/* Badge decorativo */}
            <div className={`mt-8 px-8 py-3 rounded-full bg-gradient-to-r ${gradient} text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              Ver productos →
            </div>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-gray-700 group-hover:border-white transition-colors rounded-tr-2xl" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-gray-700 group-hover:border-white transition-colors rounded-bl-2xl" />
        </button>
      ))}
    </div>
  </div>
);

export default CatalogView;
