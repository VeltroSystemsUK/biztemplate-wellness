export interface TradesSiteConfig {
  brand: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    logoUrl?: string;
    socialInstagram?: string;
    socialFacebook?: string;
  };
  stats: Array<{ value: string; label: string }>;
  services: Array<{
    name: string;
    description: string;
    icon: string;
    imageUrl: string;
  }>;
  trustBadges: Array<{ name: string }>;
  reviews: Array<{ author: string; rating: number; text: string }>;
  heroImageUrl: string;
  widgets?: {
    interactiveMenu?: {
      enabled: boolean;
      title: string;
      categories: string[];
      items: Array<{
        name: string;
        description: string;
        price: string;
        category: string;
        tag?: string;
      }>;
    };
    gallery?: {
      enabled: boolean;
      beforeUrl: string;
      afterUrl: string;
    };
  };
}
