import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Brockleby's Pies",
    tagline: "Handmade Pies, Baked with Melton Mowbray Pride",
    description: "Brockleby's are farmers and pie makers rooted in the heartland of Melton Mowbray, crafting handmade artisan pies that have won 48 British Pie Awards — including Supreme Champion. Every pie is made with honest, traceable ingredients, proper technique, and the kind of filling generosity that makes you close your eyes on the first bite.",
    email: "hello@brocklebys.co.uk",
    location: "Melton Mowbray, Leicestershire",
    foundedYear: 2001,
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
    { value: "Melton", label: "Mowbray Made" },
  ],
};

export default config;
