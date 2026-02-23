import React, { useEffect, useRef, useState } from "react";

export const PixieAssistant: React.FC = () => {
  const messages = [
    "How can I help you?",
    "Scan to browse on mobile!",
    "Looking for extreme power?",
    "Need a recommendation?",
  ];
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);
  const particleId = useRef(0);
  const audioRef = useRef<AudioContext | null>(null);
  const bubbleTimeoutRef = useRef<number | null>(null);

  const playChime = () => {
    if (!audioRef.current) {
      audioRef.current = new AudioContext();
    }
    const ctx = audioRef.current;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(740, now);
    osc.frequency.exponentialRampToValueAtTime(1040, now + 0.12);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.28);
  };

  const spawnParticles = () => {
    const count = 12;
    const nextParticles = Array.from({ length: count }, () => {
      const id = particleId.current++;
      return {
        id,
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 10,
        size: Math.random() * 6 + 6,
        delay: Math.random() * 0.15,
      };
    });

    setParticles((prev) => [...prev, ...nextParticles]);

    nextParticles.forEach((particle) => {
      setTimeout(() => {
        setParticles((prev) => prev.filter((item) => item.id !== particle.id));
      }, 1200);
    });
  };

  const handlePixieTap = () => {
    playChime();
    spawnParticles();
  };

  useEffect(() => {
    const cycleDurationMs = 8000;
    const visibleDurationMs = 6000;

    const runCycle = () => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
      setIsBubbleVisible(true);

      if (bubbleTimeoutRef.current) {
        window.clearTimeout(bubbleTimeoutRef.current);
      }

      bubbleTimeoutRef.current = window.setTimeout(() => {
        setIsBubbleVisible(false);
      }, visibleDurationMs);
    };

    runCycle();
    const intervalId = window.setInterval(runCycle, cycleDurationMs);

    return () => {
      window.clearInterval(intervalId);
      if (bubbleTimeoutRef.current) {
        window.clearTimeout(bubbleTimeoutRef.current);
      }
    };
  }, [messages.length]);

  return (
    <div className="pixie-layer absolute inset-0 pointer-events-none">
      <div className="pixie-wander absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
        {/* Animated Pixie with Organic Float */}
        <div className="relative animate-organic-float" onPointerDown={handlePixieTap}>
          {/* Wings */}
          <div className="absolute -left-24 top-8 w-28 h-20 rounded-full bg-gradient-to-br from-blue-200/70 via-blue-300/40 to-transparent blur-md wing-left" />
          <div className="absolute -right-24 top-8 w-28 h-20 rounded-full bg-gradient-to-bl from-blue-200/70 via-blue-300/40 to-transparent blur-md wing-right" />

          {/* Glow */}
          <div className="absolute inset-0 blur-3xl bg-blue-500/60 rounded-full scale-150" />

          {/* Pixie orb */}
          <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-blue-200 via-blue-400 to-blue-700 shadow-2xl flex items-center justify-center animate-pulse-slow">
            <div className="absolute top-6 left-8 w-12 h-12 bg-white/60 rounded-full blur-lg" />
            <div className="absolute bottom-6 right-8 w-6 h-6 bg-white/40 rounded-full blur-md" />

            {/* Eyes */}
            <div className="flex gap-6 mb-2">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center animate-blink">
                <div className="w-2.5 h-2.5 bg-gray-900 rounded-full" />
              </div>
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center animate-blink">
                <div className="w-2.5 h-2.5 bg-gray-900 rounded-full" />
              </div>
            </div>
          </div>

          {/* Sparkles */}
          <div className="absolute -top-6 left-6 w-3 h-3 bg-cyan-200 rounded-full blur-sm animate-twinkle" />
          <div className="absolute -right-4 top-10 w-2.5 h-2.5 bg-blue-200 rounded-full blur-sm animate-twinkle" />
          <div className="absolute -bottom-4 left-14 w-3 h-3 bg-blue-100 rounded-full blur-sm animate-twinkle" />
        </div>

        {/* Separated Dialog Box - Positioned Above and to the Right */}
        <div
          className={`absolute -top-48 -right-12 transition-all duration-700 pointer-events-auto ${
            isBubbleVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-3 scale-95"
          }`}
        >
          <div className="relative bg-white rounded-3xl px-8 py-5 shadow-2xl max-w-sm">
            <p className="text-gray-900 text-xl font-semibold text-center whitespace-nowrap">
              {messages[currentMessage]}
            </p>
            {/* Pointer triangle pointing to Pixie */}
            <div className="absolute -bottom-3 right-12 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-white" />
          </div>
        </div>

        {/* Particles on tap */}
        <div className="pointer-events-none absolute inset-0">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="pixie-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes organic-float {
          0%, 100% {
            transform: translateY(0px) rotateZ(-2deg) scale(1);
          }
          25% {
            transform: translateY(-18px) rotateZ(1deg) scale(1.02);
          }
          50% {
            transform: translateY(-24px) rotateZ(2deg) scale(1.03);
          }
          75% {
            transform: translateY(-12px) rotateZ(-1deg) scale(1.01);
          }
        }

        @keyframes blink {
          0%, 90%, 100% {
            transform: scaleY(1);
          }
          95% {
            transform: scaleY(0.1);
          }
        }

        @keyframes wander {
          0% {
            transform: translate(-42vw, -26vh);
          }
          18% {
            transform: translate(32vw, -30vh);
          }
          32% {
            transform: translate(32vw, -30vh);
          }
          52% {
            transform: translate(36vw, 24vh);
          }
          66% {
            transform: translate(36vw, 24vh);
          }
          84% {
            transform: translate(-38vw, 26vh);
          }
          92% {
            transform: translate(-38vw, 26vh);
          }
          100% {
            transform: translate(-42vw, -26vh);
          }
        }

        @keyframes wing-left {
          0%, 100% {
            transform: rotate(12deg) scale(1);
            opacity: 0.85;
          }
          50% {
            transform: rotate(2deg) scale(0.95);
            opacity: 0.7;
          }
        }

        @keyframes wing-right {
          0%, 100% {
            transform: rotate(-12deg) scale(1);
            opacity: 0.85;
          }
          50% {
            transform: rotate(-2deg) scale(0.95);
            opacity: 0.7;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.3);
          }
        }

        .animate-float {
          animation: organic-float 6s ease-in-out infinite;
        }

        .animate-breathe {
          animation: breathe 6s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-organic-float {
          animation: organic-float 6s ease-in-out infinite;
        }

        .pixie-wander {
          animation: wander 24s ease-in-out infinite;
        }

        .wing-left {
          animation: wing-left 1.8s ease-in-out infinite;
          transform-origin: right center;
        }

        .wing-right {
          animation: wing-right 1.8s ease-in-out infinite;
          transform-origin: left center;
        }

        .animate-twinkle {
          animation: twinkle 2.2s ease-in-out infinite;
        }

        .pixie-particle {
          position: absolute;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.9), rgba(191,219,254,0.5));
          filter: blur(0.5px);
          animation: particle-pop 1.1s ease-out forwards;
        }

        @keyframes particle-pop {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.6);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(0, -40px) scale(1.4);
          }
        }
      `}</style>
    </div>
  );
};

const PixieView: React.FC = () => (
  <div className="h-full w-full relative overflow-hidden bg-gradient-to-b from-gray-950 via-blue-950 to-gray-950">
    {/* Estrellas de fondo */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      ))}
    </div>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),transparent_55%)]" />

    <PixieAssistant />

    {/* Coming soon */}
    <div className="absolute bottom-32 left-0 right-0 text-center">
      <div className="inline-block bg-gray-900/80 backdrop-blur-sm rounded-2xl px-12 py-6 border-2 border-blue-500">
        <p className="text-blue-400 text-3xl font-bold mb-2">Coming Soon</p>
        <p className="text-white text-xl">Interactive AI chat</p>
      </div>
    </div>
  </div>
);

export default PixieView;
