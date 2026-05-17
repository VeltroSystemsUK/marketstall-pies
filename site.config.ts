import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "The Pie Merchant",
    tagline: "Hand-crimped pies, pasties & sausage rolls from Shropshire",
    description:
      "Every pie is made from scratch in our Shrewsbury bakery — all-butter shortcrust, slow-braised fillings, and hand-crimped edges. We've been feeding Shropshire since 1987 and we still make everything the way we always have.",
    email: "hello@thepiemerchant.co.uk",
    location: "Shrewsbury, Shropshire",
    foundedYear: 1987,
    socialInstagram: "https://instagram.com/thepiemerchant",
    socialFacebook: "https://facebook.com/thepiemerchant",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "1,000+", label: "Pies Per Week" },
    { value: "20+", label: "Varieties" },
    { value: "4.9★", label: "Average Rating" },
    { value: "Est. 1987", label: "Shropshire" },
  ],
};

export default config;
