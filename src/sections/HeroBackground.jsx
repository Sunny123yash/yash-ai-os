import AnimatedGrid from "../components/AnimatedGrid";
import FloatingParticles from "../components/FloatingParticles";
import MouseGlow from "../components/MouseGlow";

export default function HeroBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Animated Grid */}
      <AnimatedGrid />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Mouse Glow */}
      <MouseGlow />

      {/* Top Left Glow */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]" />

      {/* Bottom Right Glow */}
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[180px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/30 to-[#020617]" />
    </>
  );
}