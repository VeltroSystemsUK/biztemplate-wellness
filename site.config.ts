import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "Just Another Salon!!!",
    tagline: "Melton Mowbray's Premier Aveda Concept Salon",
    phone: "01664 500582",
    email: "justanothersalon@outlook.com",
    address: "[Insert Address], Melton Mowbray, Leicestershire",
    hours: "Tue–Sat 9am–5:30pm, appointments available evenings on request",
    
    socialInstagram: "omit",
    socialFacebook: "omit",
  },
  stats: [
    { value: "15+", label: "Years Serving Melton Mowbray" },
    { value: "4.9★", label: "Google Rating" },
    { value: "2,000+", label: "Happy Clients" },
    { value: "Aveda", label: "Certified Concept Salon" }
  ],
  services: [
  {
    name: "Luxury Balayage & Colour Correction",
    description: "Achieve a seamless, sun-kissed finish with our bespoke balayage service, tailored to your skin tone and lifestyle. Using Aveda's plant-powered colour technology, we deliver stunning, long-lasting results while keeping your hair in peak condition.",
    icon: "Sparkles",
    imageUrl: "/images/luxury-balayage-colour-correction.jpg",
  },
  {
    name: "Precision Cut & Style",
    description: "Our expert stylists deliver precision cuts designed to complement your face shape and work effortlessly with your natural texture. Every visit includes a relaxing Aveda scalp massage, personalised consultation, and a professional blow-dry finish.",
    icon: "Star",
    imageUrl: "/images/precision-cut-style.jpg",
  },
  {
    name: "Aveda Botanical Hair Treatments",
    description: "Restore vitality and shine with our curated range of Aveda in-salon treatments, from deep conditioning Damage Remedy rituals to Invati scalp-stimulating therapies. Each treatment is chosen specifically for your hair's needs during your consultation.",
    icon: "Leaf",
    imageUrl: "/images/aveda-botanical-hair-treatments.jpg",
  },
  {
    name: "Chakra Balancing Scalp Ritual",
    description: "Inspired by Aveda's chakra philosophy, this indulgent scalp and stress-relief ritual combines aromatic essential oils with expert massage techniques to ease tension and encourage healthy hair growth. The perfect antidote to a busy week.",
    icon: "Wind",
    imageUrl: "/images/chakra-balancing-scalp-ritual.jpg",
  },
  {
    name: "Natural Skincare & Beauty Facials",
    description: "Complement your hair appointment with one of our Aveda-powered skincare treatments, formulated with naturally derived ingredients to cleanse, hydrate, and illuminate your complexion. Ideal for a full head-to-toe pamper experience.",
    icon: "Heart",
    imageUrl: "/images/natural-skincare-beauty-facials.jpg",
  },
  {
    name: "Curly Hair Specialist Services",
    description: "Using Aveda's dedicated Be Curly range, our curl specialists craft cuts and treatments that define, hydrate, and celebrate your natural texture. Say goodbye to frizz and hello to beautifully bouncy, nourished curls that last.",
    icon: "Smile",
    imageUrl: "/images/curly-hair-specialist-services.jpg",
  }
  ],
  trustBadges: [
    { name: "Aveda Concept Salon" },
    { name: "NHF Member" },
    { name: "VTCT Qualified Stylists" },
    { name: "5-Star Google Reviews" },
    { name: "Cruelty-Free & Vegan Products" }
  ],
  reviews: [
  { author: "Rachel T., Melton Mowbray", rating: 5, text: "I've been coming to Just Another Salon for years and I wouldn't trust anyone else with my colour. My balayage looks incredible every single time — natural, glossy and exactly what I asked for. The Aveda treatments they recommend genuinely transformed my hair after years of damage." },
  { author: "Claire W., Oakham", rating: 5, text: "I drove over from Oakham after a recommendation and I'm so glad I did. The scalp ritual was the most relaxing thing I've experienced in years — I nearly fell asleep in the chair! My hair felt softer and healthier than it has in a long time. Already booked my next appointment." },
  { author: "Sophie M., Melton Mowbray", rating: 5, text: "Finally a salon that truly understands curly hair! I've had so many bad experiences elsewhere but my stylist here took her time, explained exactly what she was doing, and my curls have never looked this defined. The Be Curly products she recommended have been a total game-changer." },
  { author: "James L., Bottesford", rating: 5, text: "Popped in for a cut and ended up having the full works including a head massage and it was absolutely worth it. Very professional team, lovely atmosphere and the Aveda products smell amazing. Best salon in the area without a doubt." }
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;
