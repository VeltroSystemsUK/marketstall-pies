import type { Metadata, Viewport } from "next";
import { Abril_Fatface, Lato } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import { BasketProvider } from "@/contexts/BasketContext";
import config from "@/site.config";
import "./globals.css";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abril-fatface",
  display: "swap",
  weight: "400",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700"],
});

const title = `${config.brand.name} — ${config.brand.location}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${config.brand.name}`,
  },
  description: config.brand.description,
  keywords: [
    "handmade pies",
    "artisan pastry",
    config.brand.location,
    "steak pie",
    "pork pie",
    "pie shop",
  ],
  authors: [{ name: "Veltro Ltd" }],
  creator: "Veltro Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: config.brand.name,
    title,
    description: config.brand.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.brand.name,
    description: config.brand.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#653166",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${abrilFatface.variable} ${lato.variable}`}>
      <body>
        <AuthProvider>
          <BasketProvider>
            {children}
            <Toaster
              position="bottom-center"
              toastOptions={{
                style: {
                  background: "#522853",
                  color: "#fff",
                  borderRadius: "10px",
                  fontFamily: "var(--font-lato)",
                },
                success: {
                  iconTheme: { primary: "#e9a215", secondary: "#fff" },
                },
              }}
            />
          </BasketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
