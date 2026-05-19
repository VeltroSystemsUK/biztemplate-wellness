import config from "@/site.config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function SiteFooter() {
  const { brand } = config;
  return (
    <footer id="contact" className="bg-primary-950 text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            {brand.logoUrl ? (
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
            ) : (
              <h3 className="font-display font-black text-2xl mb-4">
                {brand.name}
              </h3>
            )}
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {brand.tagline}
            </p>
          </div>
          <div className="space-y-4">
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-accent-400 shrink-0" />
              <span>{brand.phone}</span>
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-accent-400 shrink-0" />
              <span>{brand.email}</span>
            </a>
            <div className="flex items-start gap-3 text-white/80">
              <MapPin className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
              <span>{brand.address}</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Clock className="w-4 h-4 text-accent-400 shrink-0" />
              <span>{brand.hours}</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
