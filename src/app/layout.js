import { Inter } from "next/font/google";
import "./globals.css";
import FooterLayout from "../components/layout/footer";
import NavBarLayout from "../components/layout/navbar";
import LayoutAdmin from "../components/layout/admin/master";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Mobil Honda Bali",
    default: "Mobil Honda Bali", // a default is required when creating a template
  },
  description:
    "Mobil Honda Bali Tabanan merupakan salah satu milik sales konsultan Budi Purni Riswanti pada Honda Bintang Tabanan Bali. Terdapat semua type mobil honda mulai dari honda brio, honda hr-v, honda, br-v, city hatchback",
  keywords: [
    "budi purni riswanti",
    "sales mobil honda",
    "mobil honda bali",
    "promo mobil honda",
    "honda bintang tabanan",
    "brio",
    "brv",
    "hrv",
    "city hatchback",
    "civic",
    "mobilio",
    "wrv",
    "accord",
    "mobil honda tabanan",
  ],
  verification: {
    google: "SCnRrPH5UKNFoAKDfNs2JYYZw8C1P-SOAcJpJHRYkjg",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <LayoutAdmin />
        <NavBarLayout />
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
