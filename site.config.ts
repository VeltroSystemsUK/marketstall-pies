import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Brockleby's Pies",
    tagline: "Handmade in Melton Mowbray. Proper pies, every time.",
    description: "Brockleby's are farmers and pie makers rooted in the heart of Melton Mowbray — the undisputed home of the pork pie. With 48 British Pie Awards to their name, including a Supreme Champion, every pie is handmade with free-range and locally sourced ingredients, slow-cooked fillings, and pastry that shatters and yields in equal measure. From the iconic Melton Mowbray Pork Pie to bold savoury creations and indulgent sweet pies, this is artisan baking with serious pedigree.",
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
    { value: "Supreme", label: "Champion Winners" },
    { value: "4.6★", label: "Google Rating" },
    { value: "Melton", label: "Mowbray Made" },
  ],
};

export default config;
