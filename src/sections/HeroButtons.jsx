import { motion } from "framer-motion";
import { FaRocket, FaDownload } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row">

      {/* Explore Button */}
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px rgba(34,211,238,0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          border
          border-cyan-400/40
          bg-cyan-500/10
          px-8
          py-4
          font-semibold
          tracking-[3px]
          text-cyan-300
          transition-all
          duration-300
        "
      >

        {/* Animated Background */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>

        <span className="relative flex items-center justify-center gap-3">
          <FaRocket className="text-lg" />
          EXPLORE SYSTEM
        </span>

      </motion.button>

      {/* Resume Button */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px rgba(139,92,246,0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          border
          border-purple-400/40
          bg-purple-500/10
          px-8
          py-4
          font-semibold
          tracking-[3px]
          text-purple-300
          transition-all
          duration-300
        "
      >

        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>

        <span className="relative flex items-center justify-center gap-3">
          <FaDownload className="text-lg" />
          DOWNLOAD RESUME
        </span>

      </motion.a>

    </div>
  );
}