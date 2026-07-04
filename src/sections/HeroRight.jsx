import { motion } from "framer-motion";
import AIOrb from "../components/hero/AIOrb";
import GlowCircle from "../components/hero/GlowCircle";

export default function HeroRight() {
  return (
    <div className="relative flex items-center justify-center h-[650px] w-full">

      {/* Background Glow */}
      <GlowCircle />

      {/* AI Core */}
      <AIOrb />

      {/* Orbit Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="absolute h-[380px] w-[380px] rounded-full border border-cyan-400/20"
      />

      {/* Orbit Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "linear",
        }}
        className="absolute h-[300px] w-[300px] rounded-full border border-purple-400/20"
      />

      {/* Orbit Ring 3 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="absolute h-[220px] w-[220px] rounded-full border border-cyan-300/30"
      />

      {/* Floating Dots */}

      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute left-10 top-20 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute right-16 bottom-24 h-5 w-5 rounded-full bg-purple-400 shadow-[0_0_30px_#8b5cf6]"
      />

      <motion.div
        animate={{
          x: [-25, 25, -25],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute right-8 top-32 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_#38bdf8]"
      />

    </div>
  );
}