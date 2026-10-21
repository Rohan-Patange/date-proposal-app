// src/components/EnvelopeLanding.jsx
import React from "react";
import { motion } from "framer-motion";
import { DATE_PROPOSAL_DATA } from "../config/dateProposalData";

export const EnvelopeLanding = ({ onOpenLetter }) => {
  const { landing } = DATE_PROPOSAL_DATA;

  return (
    <div 
      style={{ background: "linear-gradient(135deg, #2a0e19 0%, #3d1423 50%, #1a0812 100%)" }}
      className="w-full min-h-screen flex flex-col items-center justify-center p-6 text-white relative overflow-hidden select-none"
    >
      {/* Floating Gentle Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-1/4 left-10 text-2xl opacity-20 animate-bounce">💖</span>
        <span className="absolute top-1/3 right-12 text-xl opacity-15 animate-pulse">✨</span>
        <span className="absolute bottom-1/4 left-16 text-xl opacity-15">🌹</span>
        <span className="absolute bottom-1/3 right-20 text-2xl opacity-20 animate-bounce">💗</span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs sm:text-sm font-sans text-rose-200/80 mb-8 tracking-widest uppercase font-medium text-center"
      >
        {landing.title}
      </motion.p>

      {/* Envelope Card matching Ivory Letter Theme */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ backgroundColor: "#fffdf7", borderColor: "#f3e2d5" }}
        className="relative w-80 sm:w-96 h-52 sm:h-60 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center cursor-pointer border hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] transition-all"
        onClick={onOpenLetter}
      >
        {/* Envelope Triangular Flap */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div 
            style={{ backgroundColor: "#f5ece1", borderBottomColor: "#e8d5c4" }}
            className="absolute top-0 left-0 right-0 h-32 border-b"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          />
        </div>

        {/* Center Wax Seal Button with P ♥ R */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ background: "linear-gradient(135deg, #80132a 0%, #520d1a 100%)", color: "#fef3c7" }}
          className="relative z-10 px-5 py-2.5 rounded-full flex items-center justify-center gap-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.3)] border border-rose-300/40 cursor-pointer font-['Playfair_Display',serif] text-sm font-bold tracking-wider"
        >
          P <span className="text-rose-300">♥</span> R
        </motion.button>
      </motion.div>

      <motion.button
        onClick={onOpenLetter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ backgroundColor: "#fffdf7", borderColor: "#f3e2d5", color: "#80132a" }}
        className="mt-8 text-xs font-sans uppercase tracking-widest font-bold flex items-center gap-2 px-6 py-3 rounded-full border shadow-md cursor-pointer hover:bg-rose-50 transition-colors"
      >
        Open Letter 💌
      </motion.button>
    </div>
  );
};