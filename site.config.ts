import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Brockleby's Pies",
    tagline: "Handmade pies, baked with heart in Melton Mowbray",
    description: "Brockleby's are farmers and pie makers rooted in Melton Mowbray — the spiritual home of the pork pie. Every pie is hand-raised and slow-baked using free-range meat from farms they know and trust, with 48 British Pie Awards to prove the craft. From the iconic Melton Mowbray Pork Pie to indulgent steak and stilton, these are pies made to be savoured.",
    email: "hello@brocklebys.co.uk",
    location: "Melton Mowbray, Leicestershire",
    foundedYear: 1990,
    logoUrl: "https://www.brocklebys.co.uk/wp-content/uploads/2019/10/logo_web.png",
    socialInstagram: "https://instagram.com/brocklebys",
    socialFacebook: "https://facebook.com/BrocklebysPies",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "48", label: "British Pie Awards" },
    { value: "30+", label: "Years Baking" },
    { value: "4.6★", label: "Google Rating" },
    { value: "Supreme", label: "Champion Winners" },
  ],
};

export default config;
