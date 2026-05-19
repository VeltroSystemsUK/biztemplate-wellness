import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "Just Another Salon!!!",
    tagline: "Melton Mowbray's Premier Aveda Concept Salon",
    phone: "01664 500582",
    email: "justanothersalon@outlook.com",
    address: "[Insert Address], Melton Mowbray, Leicestershire",
    hours: "Tue–Sat 9am–5pm, appointments available evenings on request",
    
    socialInstagram: "https://instagram.com/justanothersalon",
    socialFacebook: "https://facebook.com/justanothersalon",
  },
  stats: [
    { value: "15+", label: "Years in Melton Mowbray" },
    { value: "4.9★", label: "Google Rating" },
    { value: "2,000+", label: "Happy Clients" },
    { value: "Aveda", label: "Concept Salon Partner" }
  ],
  services: [
  {
    name: "Luxury Balayage & Colour Correction",
    description: "Bespoke hand-painted balayage and full colour correction crafted using Aveda's plant-powered colour range for vibrant, long-lasting results with minimal damage. Whether you're chasing sun-kissed highlights or a total colour transformation, our colour specialists tailor every shade to your skin tone and lifestyle.",
    icon: "Sparkles",
    imageUrl: "/images/luxury-balayage-colour-correction.jpg",
  },
  {
    name: "Precision Cut & Blowdry",
    description: "A flawless cut begins with a detailed consultation, ensuring your new shape flatters your face and suits your daily routine. Finished with a professional Aveda blowdry using chakra-balancing aroma tools, you'll leave looking and feeling completely renewed.",
    icon: "Wind",
    imageUrl: "/images/precision-cut-blowdry.jpg",
  },
  {
    name: "Aveda Scalp & Hair Rituals",
    description: "Indulge in our signature scalp care treatments using Aveda's award-winning botanical blends, designed to restore balance, encourage healthy growth and deeply nourish even the most stressed hair. An essential reset for anyone experiencing scalp sensitivity, dryness or thinning.",
    icon: "Leaf",
    imageUrl: "/images/hero.jpg",
  },
  {
    name: "Curly Hair Specialist Services",
    description: "Using the Aveda Be Curly system, our curl-trained stylists work with your natural texture to define, hydrate and celebrate every type of wave, coil and ringlet. Say goodbye to frizz and hello to confident, bouncy curls that actually work with your lifestyle.",
    icon: "Sun",
    imageUrl: "/images/curly-hair-specialist-services.jpg",
  },
  {
    name: "Natural Beauty & Skincare Treatments",
    description: "Drawing on Aveda's award-winning natural skincare line, our facial and skin treatments combine plant-based actives with expert technique to visibly improve tone, texture and radiance. Perfect as a standalone treat or paired with your colour appointment for a full-day wellness experience.",
    icon: "Heart",
    imageUrl: "/images/natural-beauty-skincare-treatments.jpg",
  },
  {
    name: "Retail & Aveda Home Haircare Consultation",
    description: "Our stylists provide a personalised Aveda product consultation so you can recreate your salon results at home with confidence. From chakra oils and colour protection to curl definers and hydrating masks, we'll curate the perfect regimen for your hair type and goals.",
    icon: "CheckCircle",
    imageUrl: "/images/retail-aveda-home-haircare-consultation.jpg",
  }
  ],
  trustBadges: [
    { name: "Aveda Concept Salon" },
    { name: "NHF Member" },
    { name: "VTCT Qualified Stylists" },
    { name: "5-Star Google Reviews" },
    { name: "Cruelty-Free & Plant-Powered" }
  ],
  reviews: [
  { author: "Rachel T., Melton Mowbray", rating: 5, text: "I came in with patchy box-dyed hair that I'd been too embarrassed to get fixed for years — the team at Just Another Salon completely transformed it with a gorgeous balayage. The Aveda colour smells incredible and my hair feels so much healthier than before. I won't go anywhere else now." },
  { author: "Sophie M., Oakham", rating: 5, text: "Finally found a salon that truly understands curly hair! They used the Aveda Be Curly system and my ringlets have never looked this defined. The consultation was so thorough and the whole experience felt genuinely luxurious for a local salon. Absolutely worth every penny." },
  { author: "James W., Melton Mowbray", rating: 5, text: "Went in for a precision cut and left feeling like a completely different person. Really calm and welcoming atmosphere, and the stylist took real care over every detail. The Aveda scalp massage at the backwash alone is worth the visit — I've already booked my next appointment." },
  { author: "Linda B., Grantham", rating: 5, text: "I drove over from Grantham after a friend recommended Just Another Salon and I'm so glad I did. The colour correction they did on my highlights was meticulous — they matched my natural base perfectly and the result was exactly what I'd shown on my inspiration board. Exceptional service from start to finish." }
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;
