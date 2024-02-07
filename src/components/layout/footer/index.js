"use client";

import { Footer } from "flowbite-react";
import styles from './index.module.css'
import { ProfileFooter } from "./profile";


export default function FooterLayout() {
  return (
    <>
      <div className="bg-slate-200">
        <div className={styles.footerWrapper}>
          <div className="w-full md:w-1/2 px-4">
            <ProfileFooter />
            <div className="px-6 mt-12">
              <h6>Honda bintang Tabanan</h6>
              <p>
                PT. Bintang Dewata Abadi, Jl. Dr. Ir. Soekarno, Banjar Anyar,
                Kec. Kediri, Kabupaten Tabanan, Bali 82123
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.4461259118193!2d115.13363167444578!3d-8.553026986722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23bb3b7d907eb%3A0xfd6396a998e05178!2sHonda%20Bintang%20Tabanan!5e0!3m2!1sid!2sid!4v1705425288065!5m2!1sid!2sid"
              height="400"
              loading="lazy"
              className="rounded-3xl mx-auto w-full"
            ></iframe>
          </div>
        </div>
        <Footer container className="boder-none bg-transparent">
          <Footer.Copyright href="#" by="Flowbite™" year={2024} />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </div>
    </>
  );
}
