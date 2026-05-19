"use client";
import { useState, useEffect } from "react";
import config from "@/site.config";
import { Star } from "lucide-react";

export default function ReviewsSlider() {
  const { reviews } = config;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % reviews.length),
      5000,
    );
    return () => clearInterval(t);
  }, [reviews.length]);

  return (
    <section className="section-pad bg-primary-900 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-3">
          Testimonials
        </p>
        <h2 className="font-display font-black text-4xl md:text-5xl mb-14">
          What Customers Say
        </h2>
        <div className="relative min-h-[180px]">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="w-5 h-5 fill-accent-400 text-accent-400"
                  />
                ))}
              </div>
              <p className="text-white/90 text-xl leading-relaxed italic mb-6">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-white/50 text-sm font-medium">— {r.author}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-accent-400" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
