import { motion } from "framer-motion";

export default function IdentityCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.8,
      }}
      className="mt-10 text-center"
    >
      <p className="text-cyan-400 tracking-[6px] mb-3">
        IDENTITY VERIFIED
      </p>

      <h2 className="text-3xl font-bold text-white">
        THAMMISHETTI
      </h2>

      <h1 className="text-5xl font-black text-cyan-400">
        YASHWANTH KUMAR
      </h1>

      <p className="text-gray-400 mt-3">
        AI & ML Engineer
      </p>
    </motion.div>
  );
}