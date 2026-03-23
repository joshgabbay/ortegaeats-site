import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OrtegaEats — Ortega Meals for $7. No Meal Plan Needed.",
  description:
    "Order meals from Ortega Dining Commons at UCSB for just $7. No meal plan required. Download the app and eat today.",
  keywords: [
    "UCSB",
    "Ortega",
    "dining",
    "meal plan",
    "food",
    "college meals",
    "Santa Barbara",
  ],
  openGraph: {
    title: "OrtegaEats — Ortega Meals for $7",
    description:
      "Order meals from Ortega Dining Commons at UCSB for just $7. No meal plan required.",
    url: "https://ortegaeats.com",
    siteName: "OrtegaEats",
    type: "website",
    images: [
      {
        url: "https://ortegaeats.com/icon.png",
        width: 1024,
        height: 1024,
        alt: "OrtegaEats Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrtegaEats — Ortega Meals for $7",
    description:
      "Order meals from Ortega Dining Commons at UCSB for just $7. No meal plan required.",
    images: ["https://ortegaeats.com/icon.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-off-white text-charcoal">{children}</body>
    </html>
  );
}
