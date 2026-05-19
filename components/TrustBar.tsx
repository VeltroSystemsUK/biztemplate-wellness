import config from "@/site.config";
import { ShieldCheck } from "lucide-react";

export default function TrustBar() {
  const { stats, trustBadges } = config;
  return (
    <section className="bg-primary-900 text-white py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display font-black text-2xl text-accent-400">
                  {s.value}
                </p>
                <p className="text-white/60 text-xs uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {trustBadges.map((b) => (
              <span
                key={b.name}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium"
              >
                <ShieldCheck className="w-4 h-4 text-accent-400" />
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
