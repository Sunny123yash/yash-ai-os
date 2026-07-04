import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <motion.div
      className="absolute inset-0 z-0 opacity-20"
      animate={{
        backgroundPosition: [
          "0px 0px",
          "80px 80px",
          "0px 0px",
        ],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: `
          linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}