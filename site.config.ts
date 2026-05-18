import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Brockleby's Pies",
    tagline: "Handmade pies from the heart of Melton Mowbray",
    description: "Brockleby's are farmers and pie makers rooted in Melton Mowbray — the spiritual home of the pork pie. Every pie is handmade using traditional techniques and ingredients sourced as close to the farm as possible, earning over 48 British Pie Awards along the way. From their iconic Melton Mowbray Pork Pie to indulgent steak and stilton creations, these are pies that taste of real craftsmanship.",
    email: "hello@brocklebys.co.uk",
    location: "Melton Mowbray, Leicestershire",
    foundedYear: 1999,
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
    { value: "48+", label: "British Pie Awards" },
    { value: "25+", label: "Years of Baking" },
    { value: "4.6★", label: "Google Rating" },
    { value: "Supreme", label: "Champion Winners" },
  ],
};

export default config;
