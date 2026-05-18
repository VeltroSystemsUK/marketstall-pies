import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Brockleby's Pies",
    tagline: "Handmade pies, straight from Melton Mowbray's heart.",
    description: "Brockleby's are farmers and pie makers from the home of the pork pie — Melton Mowbray, Leicestershire. With 48 British Pie Awards to their name, including a Supreme Champion, every pie is shaped by hand using recipes rooted in generations of craft. From their iconic Melton Mowbray Pork Pie to wild game and sweet fruit pies, this is proper British baking at its finest.",
    email: "hello@brocklebys.co.uk",
    location: "Melton Mowbray, Leicestershire",
    foundedYear: 1995,
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
    { value: "30+", label: "Years of Craft Baking" },
    { value: "4.6★", label: "Google Rating" },
    { value: "Supreme", label: "Champion Winners" },
  ],
};

export default config;
