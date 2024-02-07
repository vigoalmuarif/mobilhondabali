"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBarLayout() {
  const path = usePathname();
  return (
    !path.startsWith("/admin") && (
      <Navbar
        fluid={true}
        rounded={false}
        className="fixed w-full z-20 top-0 start-0 border-b border-slate-200/10 shadow bg-slate-50/70 backdrop-blur-md drop-shadow-sm"
      >
        <Navbar.Brand as={Link} href="/">
          <Image
            src="/logo2.png"
            className="mr-3 hidden md:flex"
            height={0}
            width={200}
            style={{ width: "50px", height: "auto" }}
            alt="Flowbite React Logo"
          />
          <Image
            src="/logo.png"
            className="mr-3 flex md:hidden w-28 h-auto"
            height={0}
            width={200}
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white hidden md:flex">
            Mobil Honda Bali
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link href="https://wa.me/6281236011054" className="btnPrimary px-2 py-1 mr-3 md:mr-0">
            Hubungi saya
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            as={Link}
            href="/"
            className="hover:text-primary-600 md:hover:bg-transparent md:hover:text-primary-600"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            href="/products"
            className="hover:text-primary-600 md:hover:bg-transparent md:hover:text-primary-600"
          >
            Produk
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            href="/pricelist"
            className="hover:text-primary-600 md:hover:bg-transparent md:hover:text-primary-600"
          >
            Price List
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            href="/gallery"
            className="hover:text-primary-600 md:hover:bg-transparent md:hover:text-primary-600"
          >
            Gallery
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            href="#"
            className="hover:text-primary-600 md:hover:bg-transparent md:hover:text-primary-600"
          >
            Blogs
          </Navbar.Link>
          <Navbar.Link
            as={Link}
            href="#"
            className="hover:text-primary-600 md:hover:bg-transparent md:hover:text-primary-600"
          >
            Kontak
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    )
  );
}
