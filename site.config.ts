import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Brockleby's",
    tagline: "Handmade award-winning pies straight from Melton Mowbray",
    description: "Brockleby's are farmers and artisan pie makers based in the heart of Melton Mowbray, Leicestershire — home of the authentic Pork Pie. With 48 British Pie Awards to their name including a Supreme Champion title, every pie is handmade with care, quality ingredients, and generations of passion. From classic Melton Mowbray Pork Pies to indulgent sweet dessert pies, Brockleby's deliver real, honest food loved across the nation.",
    email: "hello@brocklebys.co.uk",
    location: "Melton Mowbray, Leicestershire",
    foundedYear: 1998,
    socialInstagram: "https://www.instagram.com/brocklebys",
    socialFacebook: "https://www.facebook.com/brocklebys",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "48", label: "British Pie Awards Won" },
    { value: "1★", label: "Supreme Champion Title" },
    { value: "4.6★", label: "Average Google Rating" },
    { value: "Est. 1998", label: "Melton Mowbray, Leicestershire" },
  ],
};

export default config;
