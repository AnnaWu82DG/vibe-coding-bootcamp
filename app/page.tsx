import Welcome from "@/components/Welcome";
import ShimmerQuote from "@/components/ShimmerQuote";
import BootcampFooter from "@/components/BootcampFooter";

export default function Home() {
  const motto = process.env.NEXT_PUBLIC_MOTTO;

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        {motto ? <ShimmerQuote text={motto} /> : <Welcome />}
      </div>

      <BootcampFooter />
    </main>
  );
}
"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Page() {
  useEffect(() => {
    const fireConfetti = () => {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
      });
    };

    // Direkt beim Laden einmal auslösen (optional, kann entfernt werden)
    fireConfetti();

    // Danach alle 4 Sekunden
    const interval = setInterval(fireConfetti, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <h1>🎉 Konfetti-Party 🎉</h1>
    </main>
  );
}