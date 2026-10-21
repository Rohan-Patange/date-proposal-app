// src/components/HandwrittenLetter.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DATE_PROPOSAL_DATA } from "../config/dateProposalData";

export const HandwrittenLetter = () => {
  const { letter } = DATE_PROPOSAL_DATA;
  const fullText = letter.messageParagraphs.join("\n\n");

  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const bottomRef = useRef(null);

  // Live Auto-Typewriter Effect
  useEffect(() => {
    if (displayedLength < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedLength((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedLength, fullText]);

  // Smooth Auto-Scroll down as text writes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayedLength]);

  const renderedText = fullText.slice(0, displayedLength);

  // Handle confirmation and send email notification via Formspree
  const handleConfirm = async () => {
    if (!selectedDay) return;
    setAccepted(true);

    try {
      await fetch("https://formspree.io/f/xjygqjrr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Mana confirmed her chai date for: ${selectedDay.label} ☕❤️`,
          selectedDate: selectedDay.label,
        }),
      });
    } catch (error) {
      console.error("Failed to send notification email:", error);
    }
  };

  return (
    <div 
      style={{ background: "linear-gradient(135deg, #2a0e19 0%, #3d1423 50%, #1a0812 100%)" }}
      className="w-full min-h-screen flex justify-center py-10 px-4 sm:p-12 text-[#2b1219] relative select-none"
    >
      {/* Soft Ambient Rose Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-600/15 blur-[170px] rounded-full pointer-events-none" />

      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: "#fffdf7", borderColor: "#f3e2d5" }}
            className="max-w-4xl w-full border p-8 sm:p-16 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative z-10 flex flex-col justify-between my-4"
          >
            {/* Top Lyric Ribbon */}
            <div 
              style={{ backgroundColor: "#fdf2f4", borderColor: "#f8d7da" }}
              className="w-full overflow-hidden border py-4 px-6 text-center mb-8 rounded-2xl"
            >
              <p className="text-xs sm:text-sm font-sans italic text-[#80132a] tracking-wide leading-relaxed font-medium">
                🎵 Hansta rehta hoon tujhse mil kar kyun aaj kal<br />
                Badle badle hain mere tevar kyun aaj kal<br />
                Aankhein meri har jagah dhoondhe tujhe bewajah<br />
                Ye main hoon ya koi aur hai meri tarah<br />
                Kaise hua kaise hua<br />
                Tu itna zaroori kaise hua... ✨
              </p>
            </div>

            {/* Header with P ♥ R Seal */}
            <div 
              style={{ borderColor: "#f3e2d5" }}
              className="flex justify-between items-center border-b pb-6 mb-8"
            >
              <div className="flex items-center gap-3">
                <span 
                  style={{ backgroundColor: "#80132a", color: "#fef3c7" }}
                  className="text-xs font-bold font-sans px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1"
                >
                  P <span className="text-rose-300">♥</span> R
                </span>
                <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-[#80132a]">
                  {letter.recipient}
                </h2>
              </div>
              <span 
                style={{ backgroundColor: "#fdf2f4", borderColor: "#f8d7da", color: "#80132a" }}
                className="text-xs font-sans tracking-wider px-4 py-1.5 rounded-full border"
              >
                {letter.dateStamp}
              </span>
            </div>

            {/* Handwritten Letter Paragraphs */}
            <div className="space-y-5 min-h-[260px]">
              {renderedText.split("\n\n").map((para, idx) => (
                <p
                  key={idx}
                  className="font-romantic text-lg sm:text-xl leading-[32px] text-[#3d1822] font-semibold tracking-wide"
                >
                  {para}
                </p>
              ))}
              {!isTypingComplete && (
                <span className="inline-block w-2 h-5 bg-[#80132a] animate-pulse ml-1 rounded-full align-middle" />
              )}
            </div>

            {/* Date Selection Box */}
            <AnimatePresence>
              {isTypingComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ borderColor: "#f3e2d5" }}
                  className="mt-12 pt-10 border-t"
                >
                  <div 
                    style={{ backgroundColor: "#fdf2f4", borderColor: "#f8d7da" }}
                    className="text-center p-8 sm:p-10 rounded-2xl border"
                  >
                    <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#80132a] mb-2">
                      {letter.dateRequest.question}
                    </h3>
                    <p className="text-xs text-[#80132a]/80 mb-6 font-sans">
                      {letter.dateRequest.subtext}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 max-w-xl mx-auto">
                      {[
                        { id: "today", label: "Today ☕" },
                        { id: "tomorrow", label: "Tomorrow 🌙" },
                        { id: "this_week", label: "This Week ✨" },
                        { id: "next_week", label: "Next Week 🌿" }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setSelectedDay(opt)}
                          style={
                            selectedDay?.id === opt.id
                              ? { backgroundColor: "#80132a", color: "#ffffff", borderColor: "#80132a" }
                              : { backgroundColor: "#ffffff", color: "#3d1822", borderColor: "#f8d7da" }
                          }
                          className={`py-3.5 px-3 rounded-xl text-xs font-sans font-semibold tracking-wide transition-all border cursor-pointer ${
                            selectedDay?.id === opt.id ? "shadow-lg scale-105" : "hover:bg-rose-50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleConfirm}
                      disabled={!selectedDay}
                      style={
                        selectedDay
                          ? { backgroundColor: "#80132a", color: "#ffffff" }
                          : { backgroundColor: "#e2e8f0", color: "#94a3b8" }
                      }
                      className="w-full max-w-md mx-auto py-4 px-6 rounded-xl font-sans font-bold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer block"
                    >
                      {selectedDay ? `Confirm for ${selectedDay.label} 💖` : "Select a day above 👆"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scroll Anchor */}
            <div ref={bottomRef} />
          </motion.div>
        ) : (
          /* Success Screen */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: "#fffdf7", borderColor: "#f3e2d5" }}
            className="max-w-md w-full border p-10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] text-center relative z-10 my-auto"
          >
            <div className="text-5xl mb-4">☕✨</div>
            <h2 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#80132a] mb-3">
              Chai Date Confirmed!
            </h2>
            <p className="font-romantic text-xl text-[#3d1822] leading-relaxed mb-6 font-semibold">
              Looking forward to our warm cup of chai and quiet time together on {selectedDay?.label}. ❤️
            </p>
            <div 
              style={{ backgroundColor: "#fdf2f4", borderColor: "#f8d7da", color: "#80132a" }}
              className="inline-block border px-5 py-2 rounded-full text-xs font-sans font-bold"
            >
              See you soon, Bayko ✨
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};