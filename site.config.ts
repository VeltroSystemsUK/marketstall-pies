import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Brockleby's Pies",
    tagline: "Handmade pies, baked with heart in Melton Mowbray",
    description: "Brockleby's are farmers and pie makers rooted in Melton Mowbray — home of the authentic pork pie. Every pie is handmade using time-honoured techniques, proper ingredients, and the kind of care that's earned them 48 British Pie Awards and a Supreme Champion title. From their Leicestershire farm kitchen to your table, these are pies worth savouring.",
    email: "hello@brocklebys.co.uk",
    location: "Melton Mowbray, Leicestershire",
    foundedYear: 2001,
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
    { value: "Supreme", label: "Champion Winners" },
    { value: "4.6★", label: "Google Rating" },
    { value: "Est. 2001", label: "Melton Mowbray" },
  ],
};

export default config;
