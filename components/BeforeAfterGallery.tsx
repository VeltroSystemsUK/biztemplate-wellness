"use client";

import { useState, useRef } from "react";
import staticConfig from "@/site.config";

export default function BeforeAfterGallery() {
  const galleryData = staticConfig.widgets?.gallery;

  // Hooks unconditionally before any early return
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!galleryData?.enabled) return null;

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100),
    );
    setSliderPos(pct);
  };

  return (
    <section className="section-pad bg-primary-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal text-center mb-10">
          <p
            data-demo-edit="gallery-label"
            className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Our Work
          </p>
          <h2
            data-demo-edit="gallery-title"
            className="font-display font-black text-4xl md:text-5xl text-white"
          >
            The Difference We Make
          </h2>
          <p className="text-white/40 text-sm mt-3">Drag to compare</p>
        </div>

        <div
          ref={containerRef}
          onMouseMove={(e) => isDragging && handleMove(e.clientX)}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="relative h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl"
        >
          {/* After image — full-width base layer */}
          <img
            src={galleryData.afterUrl}
            alt="After"
            data-gallery-sync="gallery-after"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <span className="absolute bottom-4 right-4 z-10 bg-black/70 backdrop-blur-sm text-accent-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-accent-400/30">
            AFTER
          </span>

          {/* Before image — clipped via clipPath, same full dimensions as after */}
          <img
            src={galleryData.beforeUrl}
            alt="Before"
            data-gallery-sync="gallery-before"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          />
          <span
            className="absolute bottom-4 left-4 z-10 bg-black/70 backdrop-blur-sm text-white/80 text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20"
            style={{
              opacity: sliderPos > 10 ? 1 : 0,
              transition: "opacity 0.2s",
            }}
          >
            BEFORE
          </span>

          {/* Divider line */}
          <div
            className="absolute inset-y-0 w-px bg-accent-400/70 z-20 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          />

          {/* Drag handle */}
          <div
            className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary-950 border-2 border-accent-400 rounded-full flex items-center justify-center text-accent-400 text-sm font-bold shadow-xl pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            ↔
          </div>
        </div>

        {/* Demo-mode only: thumbnail swap targets shown via [data-demo] CSS rule */}
        <div
          data-demo-gallery-swatches
          style={{ display: "none" }}
          className="gap-3 justify-center mt-4"
        >
          <div
            className="relative w-24 h-16 rounded-lg overflow-hidden cursor-pointer"
            data-demo-img="gallery-before"
            data-demo-img-label="Before photo"
          >
            <img
              src={galleryData.beforeUrl}
              alt="Before"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-1 left-1 bg-black/60 text-white/80 text-[9px] font-bold px-1.5 py-0.5 rounded pointer-events-none">
              BEFORE
            </span>
          </div>
          <div
            className="relative w-24 h-16 rounded-lg overflow-hidden cursor-pointer"
            data-demo-img="gallery-after"
            data-demo-img-label="After photo"
          >
            <img
              src={galleryData.afterUrl}
              alt="After"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-1 right-1 bg-black/60 text-accent-400 text-[9px] font-bold px-1.5 py-0.5 rounded pointer-events-none">
              AFTER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
