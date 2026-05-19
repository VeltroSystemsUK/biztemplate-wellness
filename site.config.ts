import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "Business Name",
    tagline: "Your Tagline Here",
    phone: "",
    email: "",
    address: "",
    hours: "",
  },
  stats: [
    { value: "—", label: "Years Experience" },
    { value: "—", label: "Google Rating" },
    { value: "—", label: "Availability" },
    { value: "—", label: "Jobs Completed" },
  ],
  services: [
    {
      name: "Service One",
      description: "Service description.",
      icon: "Wrench",
      imageUrl: "/images/hero.jpg",
    },
    {
      name: "Service Two",
      description: "Service description.",
      icon: "Flame",
      imageUrl: "/images/hero.jpg",
    },
    {
      name: "Service Three",
      description: "Service description.",
      icon: "Droplets",
      imageUrl: "/images/hero.jpg",
    },
  ],
  trustBadges: [{ name: "Accreditation One" }, { name: "Accreditation Two" }],
  reviews: [
    {
      author: "Customer Name",
      rating: 5,
      text: "Review text will appear here.",
    },
    {
      author: "Customer Name",
      rating: 5,
      text: "Review text will appear here.",
    },
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;
