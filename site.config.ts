import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Brockleby's Pies",
    tagline: "Handmade in Melton Mowbray, loved across Britain.",
    description: "Brockleby's are farmers and pie makers rooted in the heart of Melton Mowbray — the undisputed home of the pork pie. Every pie is handmade with proper ingredients, proper care, and proper flavour, earning 48 British Pie Awards along the way. From their iconic Melton Mowbray Pork Pie to bold seasonal specials, this is the real deal: slow-crafted, award-winning artisan baking you can taste in every bite.",
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
    { value: "25+", label: "Years Baking" },
    { value: "4.6★", label: "Google Rating" },
    { value: "PGI", label: "Authentic Melton Mowbray" },
  ],
};

export default config;
