import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "Just Another Salon!!!",
    tagline: "Melton Mowbray's Premier Aveda Concept Salon",
    phone: "01664 500582",
    email: "justanothersalon@outlook.com",
    address: "[Insert Address], Melton Mowbray, Leicestershire",
    hours: "Tue–Sat 9am–5pm, appointments available",
    logoUrl: "https://static.wixstatic.com/media/40d209_b3746c99529047e4b931391225501a02.jpg/v1/fill/w_1404,h_274,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/40d209_b3746c99529047e4b931391225501a02.jpg",
    
    
  },
  stats: [
    { value: "10+", label: "Years Established" },
    { value: "4.9★", label: "Google Rating" },
    { value: "1000+", label: "Happy Clients" },
    { value: "Aveda", label: "Concept Salon Partner" }
  ],
  services: [
  {
    name: "Luxury Balayage & Colour Correction",
    description: "Our expert colourists deliver hand-painted balayage and full colour correction using Aveda's plant-powered, low-ammonia colour system. Whether you're after sun-kissed dimension or a bold transformation, we blend artistry with science for results that truly last.",
    icon: "Sparkles",
    imageUrl: "/images/luxury-balayage-colour-correction.jpg",
  },
  {
    name: "Bespoke Cut & Style",
    description: "From precision bobs to textured layers, every cut is tailored to your face shape, lifestyle and hair type using the finest Aveda styling tools. Leave feeling refreshed with a style that works beautifully the moment you walk out — and every morning after.",
    icon: "Wind",
    imageUrl: "/images/bespoke-cut-style.jpg",
  },
  {
    name: "Aveda Scalp & Hair Rituals",
    description: "Indulge in our deeply restorative scalp treatments and conditioning rituals, formulated with Aveda's chakra-inspired essential oils and botanical blends. Perfect for tackling dryness, damage or simply gifting yourself a moment of pure wellbeing.",
    icon: "Leaf",
    imageUrl: "/images/aveda-scalp-hair-rituals.jpg",
  },
  {
    name: "Curly Hair Specialist Services",
    description: "Celebrating every curl pattern, our stylists are trained in Aveda's Be Curly system to define, hydrate and revive naturally curly and wavy hair. Say goodbye to frizz and hello to bouncy, beautifully shaped curls with a cut and treatment designed just for you.",
    icon: "Sun",
    imageUrl: "/images/curly-hair-specialist-services.jpg",
  },
  {
    name: "Aveda Skincare & Beauty Treatments",
    description: "Extend your salon visit into a full sensory experience with our Aveda skincare facials and beauty add-ons, using 100% naturally derived fragrances and certified organic ingredients. Glowing, nourished skin to complement your perfect new hair.",
    icon: "Heart",
    imageUrl: "/images/hero.jpg",
  },
  {
    name: "Natural Beauty Retail & Consultations",
    description: "Our team offers personalised product consultations to build your at-home Aveda routine — from chakra oils to styling essentials. Shop our curated in-salon range and take the salon experience home with you every day.",
    icon: "Star",
    imageUrl: "/images/natural-beauty-retail-consultations.jpg",
  }
  ],
  trustBadges: [
    { name: "Aveda Concept Salon" },
    { name: "NHF Member" },
    { name: "VTCT Qualified Stylists" },
    { name: "5-Star Google Reviews" },
    { name: "Cruelty-Free & Plant-Based Products" }
  ],
  reviews: [
  { author: "Sophie R., Melton Mowbray", rating: 5, text: "I came in with years of box-dye damage and left with the most beautiful, healthy-looking balayage. The team really took the time to understand what I wanted and the Aveda treatment has left my hair feeling incredible. I won't go anywhere else now." },
  { author: "Claire M., Oakham", rating: 5, text: "Finally found a salon that truly understands curly hair! They used the Aveda Be Curly range and gave me a dry cut that actually works with my natural texture. My curls have never looked this defined — absolute game changer." },
  { author: "James T., Melton Mowbray", rating: 5, text: "Booked in for a cut and ended up having the scalp ritual treatment too — best decision ever. The salon smells amazing, the staff are so knowledgeable, and the whole experience felt genuinely luxurious for the price. Highly recommend to anyone in the area." },
  { author: "Rachel H., Leicester", rating: 5, text: "I drove over from Leicester after a recommendation and it was absolutely worth it. The colour correction they did on my over-bleached hair was transformative — they were honest about what was achievable and delivered beyond my expectations." }
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;
