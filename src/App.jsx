import React, { useState } from "react";
import { EnvelopeLanding } from "./components/EnvelopeLanding";
import { HandwrittenLetter } from "./components/HandwrittenLetter";

export default function App() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <main className="min-h-screen w-full bg-[#f7f3ed]">
      {!showLetter ? (
        <EnvelopeLanding onOpenLetter={() => setShowLetter(true)} />
      ) : (
        <HandwrittenLetter />
      )}
    </main>
  );
}