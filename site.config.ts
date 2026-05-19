import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "Just Another Salon!!!",
    tagline: "Melton Mowbray's Premier Aveda Lifestyle Salon",
    phone: "01664 500582",
    email: "justanothersalon@outlook.com",
    address: "[Insert Address], Melton Mowbray, Leicestershire",
    hours: "Tue–Sat 9am–5pm, late nights by appointment",
    logoUrl: "https://static.wixstatic.com/media/40d209_b3746c99529047e4b931391225501a02.jpg/v1/fill/w_1404,h_274,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/40d209_b3746c99529047e4b931391225501a02.jpg",
    socialInstagram: "https://instagram.com/justanothersalon",
    socialFacebook: "https://facebook.com/justanothersalon",
  },
  stats: [
    { value: "15+", label: "Years in Melton Mowbray" },
    { value: "4.9★", label: "Google Rating" },
    { value: "1,000+", label: "Happy Clients" },
    { value: "Aveda", label: "Certified Lifestyle Salon" }
  ],
  services: [
  {
    name: "Luxury Balayage & Colour Correction",
    description: "Our expert colourists craft bespoke balayage and full colour transformations using Aveda's plant-powered, low-ammonia colour range. Whether you're after a sun-kissed lived-in look or a bold reinvention, we blend artistry with hair health so you leave glowing — not compromised.",
    icon: "Sparkles",
    imageUrl: "/images/luxury-balayage-colour-correction.jpg",
  },
  {
    name: "Precision Cuts & Styling",
    description: "From sleek bobs to textured layers, every cut is tailored to your face shape, lifestyle and hair type during a thorough consultation. We finish with Aveda styling products to give you a look that works as hard at home as it does in the salon.",
    icon: "Star",
    imageUrl: "/images/hero.jpg",
  },
  {
    name: "Aveda Scalp & Hair Treatments",
    description: "Revive damaged, over-processed or thinning hair with our targeted Aveda Botanical Repair and Scalp Revival treatment menu. Each treatment is prescribed to your specific hair concerns, restoring strength, shine and balance from root to tip.",
    icon: "Leaf",
    imageUrl: "/images/aveda-scalp-hair-treatments.jpg",
  },
  {
    name: "Curly Hair Specialists — DevaCurl & Be Curly",
    description: "We're passionate advocates for naturally curly, wavy and coily hair — offering specialist cuts and Aveda Be Curly treatments designed to define, hydrate and celebrate your natural texture. No more fighting your curls; let us help you love them.",
    icon: "Wind",
    imageUrl: "/images/curly-hair-specialists-devacurl-be-curly.jpg",
  },
  {
    name: "Holistic Aveda Facials & Skincare Rituals",
    description: "Drawing on Aveda's chakra-inspired philosophy, our facial rituals combine pure plant extracts and massage techniques to restore radiance and calm the senses. Each session is a full sensory experience — the ideal antidote to busy Leicestershire life.",
    icon: "Heart",
    imageUrl: "/images/holistic-aveda-facials-skincare-rituals.jpg",
  },
  {
    name: "Special Occasion & Bridal Hair",
    description: "From intimate weddings in the Vale of Belvoir to milestone birthday blowouts, our styling team creates flawless up-dos, waves and finishing looks built to last all day. We offer pre-event trials so you arrive on the day feeling completely confident.",
    icon: "Sun",
    imageUrl: "/images/special-occasion-bridal-hair.jpg",
  }
  ],
  trustBadges: [
    { name: "Aveda Lifestyle Salon" },
    { name: "NHF Member" },
    { name: "VTCT Qualified Stylists" },
    { name: "5-Star Google Reviews" },
    { name: "Cruelty-Free & Vegan Products" }
  ],
  reviews: [
  { author: "Sophie R., Melton Mowbray", rating: 5, text: "I came in with years of box-dye damage and walked out with the most beautiful soft balayage I've ever had. The team really took the time to understand what I wanted and my hair feels so healthy. I won't go anywhere else now — absolutely worth every penny." },
  { author: "Claire T., Oakham", rating: 5, text: "Just Another Salon is a hidden gem. The Aveda scalp treatment completely transformed my dry, itchy scalp within two visits. The whole experience is so calming — the products smell incredible and the staff are genuinely knowledgeable. Highly recommend the treatment packages." },
  { author: "Jess M., Grantham", rating: 5, text: "I've had naturally curly hair my whole life and never found a stylist who truly understood it — until now. They cut my curls dry, explained every product choice, and the results were incredible. I've had so many compliments. I drove from Grantham and it was absolutely worth it." },
  { author: "Rachel B., Melton Mowbray", rating: 5, text: "Had my bridal hair done here for my wedding in June and it was perfect from trial to the big day. They kept in touch beforehand, nailed the look first time, and it stayed in place all evening. Such a lovely, professional team — couldn't have asked for more." }
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;
