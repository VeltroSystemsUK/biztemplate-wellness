import config from "@/site.config";
import { Phone } from "lucide-react";

export default function Hero() {
  const { brand, heroImageUrl } = config;
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageUrl}
          alt={brand.name}
          className="w-full h-full object-cover"
        />
        <div className="gradient-hero absolute inset-0" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-white">
        {brand.logoUrl && (
          <img
            src={brand.logoUrl}
            alt={brand.name}
            className="h-14 w-auto mb-8 object-contain brightness-0 invert"
          />
        )}
        <p className="text-accent-400 font-display font-bold text-sm uppercase tracking-widest mb-4">
          {brand.address.split(",").slice(-2).join(",").trim()}
        </p>
        <h1 className="font-display font-black text-5xl md:text-7xl leading-none mb-6 text-balance">
          {brand.tagline}
        </h1>
        <p className="text-white/80 text-xl max-w-xl mb-10">{brand.hours}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            {brand.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors border border-white/20"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
