import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl p-10 shadow-[0_0_60px_rgba(34,211,238,0.18)]">

        {/* Header */}
        <p className="text-cyan-400 text-lg tracking-[8px] font-semibold">
          YASH AI OS
        </p>

        <h2 className="mt-2 text-gray-300 tracking-[5px] uppercase text-sm">
          Developer Profile
        </h2>

        <div className="my-6 h-px bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent"></div>

        {/* Name */}
        <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
          Name
        </p>

        <h1 className="mt-3 text-5xl font-black leading-tight text-white">
          THAMMISHETTI
          <br />
          <span className="text-cyan-400">
            YASHWANTH KUMAR
          </span>
        </h1>

        {/* Role */}
        <div className="mt-8">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-2">
            Role
          </p>

          <TypeWriter />
        </div>

        {/* Status */}
        <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/10 p-4">

          <p className="text-green-400 font-semibold tracking-[3px]">
            ● AVAILABLE FOR INTERNSHIPS
          </p>

        </div>

        {/* Profile Details */}

        <div className="mt-10 grid grid-cols-2 gap-5">

          <div>
            <p className="text-gray-500 uppercase text-xs tracking-[3px]">
              Qualification
            </p>

            <h3 className="text-white mt-2">
              Diploma in AI & ML
            </h3>
          </div>

          <div>
            <p className="text-gray-500 uppercase text-xs tracking-[3px]">
              Location
            </p>

            <h3 className="text-white mt-2">
              Telangana, India
            </h3>
          </div>

          <div>
            <p className="text-gray-500 uppercase text-xs tracking-[3px]">
              ECET Rank
            </p>

            <h3 className="text-cyan-400 mt-2 font-bold">
              Branch Rank #5
            </h3>
          </div>

          <div>
            <p className="text-gray-500 uppercase text-xs tracking-[3px]">
              Status
            </p>

            <h3 className="text-green-400 mt-2">
              Ready to Work
            </h3>
          </div>

        </div>

        {/* Summary */}

        <div className="mt-10">

          <p className="text-gray-500 uppercase tracking-[3px] text-xs">
            Mission
          </p>

          <p className="mt-3 text-gray-300 leading-8">
            Passionate AI & Machine Learning developer with a strong interest in
            full-stack web development. I enjoy building intelligent,
            user-focused applications using modern technologies and continuously
            improving my problem-solving skills through real-world projects.
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-12">
          <HeroButtons />
        </div>

      </div>
    </motion.div>
  );
}