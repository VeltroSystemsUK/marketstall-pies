import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Brockleby's Pies",
    tagline: "Supreme Champion pies, handmade in Melton Mowbray",
    description: "Brockleby's are farmers and pie makers rooted in Melton Mowbray — the spiritual home of the pork pie. Every pastry is hand-raised, every filling crafted from high-welfare British meat and locally sourced produce. With 48 British Pie Awards to their name, including a coveted Supreme Champion, these are pies worth travelling for — now delivered straight to your door.",
    email: "hello@brocklebys.co.uk",
    location: "Melton Mowbray, Leicestershire",
    foundedYear: 1998,
    logoUrl: "https://www.brocklebys.co.uk/wp-content/uploads/2019/10/logo_web.png",
    socialInstagram: "https://instagram.com/brocklebys",
    socialFacebook: "https://facebook.com/brocklebys",
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
    { value: "Supreme", label: "Champion Winners" },
    { value: "4.6★", label: "Google Rating" },
    { value: "Melton", label: "Mowbray Certified" },
  ],
};

export default config;
