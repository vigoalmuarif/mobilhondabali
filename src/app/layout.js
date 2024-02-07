
import { Inter } from "next/font/google";
import "./globals.css";
import FooterLayout from "../components/layout/footer";
import NavBarLayout from "../components/layout/navbar";
import LayoutAdmin from "../components/layout/admin/master";

const inter = Inter({ subsets: ["latin"] });

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
