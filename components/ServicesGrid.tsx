import config from "@/site.config";
import {
  Wrench,
  Zap,
  Flame,
  Droplets,
  HardHat,
  Hammer,
  Settings,
  Shield,
  Star,
  Phone,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Wrench,
  Zap,
  Flame,
  Droplets,
  HardHat,
  Hammer,
  Settings,
  Shield,
  Star,
  Phone,
  Clock,
  MapPin,
  CheckCircle,
};

export default function ServicesGrid() {
  const { services } = config;
  return (
    <section className="section-pad bg-cream-dark">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-primary-900">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = ICON_MAP[s.icon] ?? Wrench;
            return (
              <div
                key={s.name}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-primary-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.imageUrl}
                    alt={s.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-500 text-white">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-primary-900 mb-2">
                    {s.name}
                  </h3>
                  <p className="text-primary-700/80 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
