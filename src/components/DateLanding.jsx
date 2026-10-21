// src/components/DateLanding.jsx
import React from "react";
import { motion } from "framer-motion";
import { DATE_PROPOSAL_DATA } from "../config/dateProposalData";

export const DateLanding = ({ onOpenLetter }) => {
  const { landing } = DATE_PROPOSAL_DATA;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 bg-[#120e14] text-white relative overflow-hidden select-none">
      {/* Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-950/30 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-gradient-to-br from-[#1a131c] via-[#140e17] to-[#0c080d] border border-rose-500/30 p-8 sm:p-10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-center relative z-10 flex flex-col items-center backdrop-blur-md"
      >
        <span className="text-amber-200/90 text-[10px] tracking-[0.3em] uppercase font-bold px-4 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 mb-6 shadow-sm">
          {landing.badge}
        </span>

        <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl font-bold text-amber-50 mb-3 tracking-wide drop-shadow">
          {landing.title}
        </h1>

        <p 
          style={{ fontFamily: "'Caveat', cursive" }} 
          className="text-2xl sm:text-3xl text-rose-200/80 mb-8 leading-relaxed font-normal"
        >
          {landing.subtitle}
        </p>

        <motion.button
          onClick={onOpenLetter}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-gradient-to-r from-rose-900 to-amber-900 hover:from-rose-800 hover:to-amber-800 text-rose-100 py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(244,63,94,0.3)] border border-rose-500/40 cursor-pointer transition-all"
        >
          {landing.buttonText}
        </motion.button>
      </motion.div>
    </div>
  );
};