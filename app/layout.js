import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Aaradhya Bajpai | AI & Data Science Engineer",
  description: "Portfolio of Aaradhya Bajpai - M.Tech AI & Data Science student, Generative AI & Deep Learning Developer.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      
      </link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        
      </link>
      <link rel="manifest" href="/site.webmanifest"></link>
      
      </head>
      <body className={poppins.className}>{children}</body>
      <Analytics />
    </html>
  );
}
