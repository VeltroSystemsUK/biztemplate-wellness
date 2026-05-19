import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "Just Another Salon!!!",
    tagline: "Premium Hair & Beauty in the Heart of Melton Mowbray",
    phone: "01664 500582",
    email: "justanothersalon@outlook.com",
    address: "[Insert Address], Melton Mowbray, Leicestershire",
    hours: "Mon–Sat 9am–6pm, Sun by appointment",
    
    socialInstagram: "https://instagram.com/justanothersalon",
    socialFacebook: "https://facebook.com/justanothersalon",
  },
  stats: [
    { value: "15+", label: "Years in Melton Mowbray" },
    { value: "4.9★", label: "Google Rating" },
    { value: "2,000+", label: "Happy Clients" },
    { value: "Aveda", label: "Authorised Stockist" }
  ],
  services: [
  {
    name: "Luxury Balayage & Colour Correction",
    description: "From sun-kissed balayage to full colour corrections, our Aveda-trained colourists craft bespoke results tailored to your skin tone and lifestyle. Using only Aveda's plant-powered colour range, your hair is transformed while staying protected and full of shine.",
    icon: "Sparkles",
    imageUrl: "/images/luxury-balayage-colour-correction.jpg",
  },
  {
    name: "Precision Cuts & Blow-Dry Styling",
    description: "Whether you're after a sharp bob, textured layers, or a classic trim, our stylists deliver precision cuts that grow out beautifully and suit your face shape. Finish with a professional blow-dry that leaves you salon-fresh and confident.",
    icon: "Wind",
    imageUrl: "/images/precision-cuts-blow-dry-styling.jpg",
  },
  {
    name: "Aveda Scalp & Hair Treatments",
    description: "Revive stressed, dry, or damaged hair with our signature Aveda treatment rituals, designed to restore moisture, balance the scalp, and deliver visible results from the very first session. A deeply relaxing experience as much as a transformative one.",
    icon: "Leaf",
    imageUrl: "/images/aveda-scalp-hair-treatments.jpg",
  },
  {
    name: "Bridal & Occasion Styling",
    description: "Look and feel extraordinary on your most important days with a bespoke bridal or occasion hair styling package, including a pre-event trial and full consultation. Our team brings calm, care, and creative expertise to every special moment.",
    icon: "Heart",
    imageUrl: "/images/bridal-occasion-styling.jpg",
  },
  {
    name: "Chakra Aromatherapy Ritual",
    description: "Drawing on Aveda's chakra philosophy, this signature aromatherapy ritual uses pure essential oil blends applied with intention to restore balance, calm the mind, and elevate your entire salon visit into a wellness experience.",
    icon: "Sun",
    imageUrl: "/images/chakra-aromatherapy-ritual.jpg",
  },
  {
    name: "Express Blow-Dry Bar",
    description: "Short on time but still want to look your best? Our Express Blow-Dry Bar gives you a professional, glossy finish in under 45 minutes — perfect before a big event, date night, or simply because you deserve it.",
    icon: "Zap",
    imageUrl: "/images/express-blow-dry-bar.jpg",
  }
  ],
  trustBadges: [
    { name: "Aveda Authorised Salon" },
    { name: "NHF Member" },
    { name: "VTCT Qualified Stylists" },
    { name: "5-Star Google Reviews" },
    { name: "Cruelty-Free Products" }
  ],
  reviews: [
  { author: "Sophie M., Melton Mowbray", rating: 5, text: "I came in with severely over-processed hair after a bad experience elsewhere, and the team at Just Another Salon absolutely saved it. My colour correction took a few hours but the result was stunning — natural, healthy, and exactly what I'd wanted. I won't go anywhere else now." },
  { author: "Rachel T., Oakham", rating: 5, text: "Had my bridal hair done here and it was perfect from start to finish. The trial appointment meant I felt totally relaxed on the morning itself. My stylist was calm, creative, and made me feel so special. Couldn't recommend more highly." },
  { author: "Claire B., Grantham", rating: 5, text: "I've been coming to Just Another Salon for over three years for my balayage and I always leave feeling like a new person. The Aveda products smell incredible and my hair stays in great condition between visits. Lovely welcoming team too." },
  { author: "James H., Melton Mowbray", rating: 5, text: "Booked in for a trim and a scalp treatment after a stressful few months and it was genuinely one of the most relaxing afternoons I've had. The aromatherapy element was unexpected but brilliant. Highly recommend to anyone who wants more than just a haircut." }
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;
