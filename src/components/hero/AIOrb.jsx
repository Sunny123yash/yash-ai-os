import { motion } from "framer-motion";

export default function AIOrb() {
  return (
    <motion.div
      animate={{
        rotate: 360,
        scale: [1, 1.05, 1],
      }}
      transition={{
        rotate: {
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        },
        scale: {
          repeat: Infinity,
          duration: 4,
        },
      }}
      className="relative flex items-center justify-center"
    >
      {/* Outer Ring */}
      <div className="absolute h-48 w-48 rounded-full border border-cyan-400/40" />

      {/* Middle Ring */}
      <div className="absolute h-36 w-36 rounded-full border border-purple-400/50" />

      {/* Core Glow */}
      <div className="absolute h-24 w-24 rounded-full bg-cyan-400 blur-2xl opacity-60" />

      {/* Center Core */}
      <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-cyan-300 via-cyan-500 to-purple-500 shadow-[0_0_60px_#22d3ee]" />
    </motion.div>
  );
}