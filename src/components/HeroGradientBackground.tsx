"use client";

import React from "react";

type HeroGradientBackgroundProps = {
  children?: React.ReactNode;
  minHeight?: string;
};

export function HeroGradientBackground({ children, minHeight = "60vh" }: HeroGradientBackgroundProps) {
  return (
    <section style={{ minHeight }} className="relative w-full overflow-hidden">
      {/* Background gradient: orange to blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-blue-600 opacity-90" aria-hidden="true" />
      {/* Subtle overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,.15), transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,.08), transparent 40%)",
          mixBlendMode: "overlay",
          opacity: 0.9,
        }}
        aria-hidden="true"
      />
      {/* Frosted glass content container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 md:py-20">
        <div className="bg-white/25 backdrop-blur-xl rounded-3xl border border-white/40 p-8 md:p-12 text-center">
          {children}
        </div>
      </div>

      {/* Decorative blobs for depth (non-interactive) */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-400/40 rounded-full blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/40 rounded-full blur-2xl" aria-hidden="true" />
    </section>
  );
}

export default HeroGradientBackground;