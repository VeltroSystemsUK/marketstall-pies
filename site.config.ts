import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Brockleby's Pies",
    tagline: "Champion Pies, Handmade in Melton Mowbray",
    description: "Brockleby's are farmers and pie makers rooted in Melton Mowbray — the spiritual home of the pork pie. Every pie is hand-raised and slow-baked using their own free-range pork and locally sourced ingredients, earning 48 British Pie Awards including Supreme Champion. From their Leicestershire farm to your table, these are pies worth making a fuss about.",
    email: "hello@brocklebys.co.uk",
    location: "Melton Mowbray, Leicestershire",
    foundedYear: 1998,
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
    { value: "Est. 1998", label: "Melton Mowbray" },
  ],
};

export default config;
