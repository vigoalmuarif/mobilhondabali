"use client";

import { useState } from "react";

export const About = () => {
  const [change, setChange] = useState("Tab1");
  function handleAbout(e) {
    setChange(e.target.value);
  }
  return (
    <>
      <div role="tablist" className="tabs tabs-lifted mt-16">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab  focus:ring-0"
          value={"Tab1"}
          aria-label="Profile"
          checked={change === "Tab1"}
          onChange={handleAbout}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <p className="mb-3">
            {" "}
            Honda Bintang Tabanan adalah dealer resmi atau authorized dealer
            mobil Honda yang berlokasi di Jl. Dr. Ir. Soekarno, Banjar Anyar,
            Kec. Kediri, Kabupaten Tabanan, Bali 82123.
          </p>
          <p>
            Sebagai dealer Honda yang terbaik di kota Tabanan, Honda Bintang
            Tabanan ini siap memberikan pelayanan terbaik dan memuaskan bagi
            anda semua. Maka dari itu, untuk mendapatkan mobil baru maupun bekas
            atau servis kendaraan bermotor secara berkala, disinilah tempatnya.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab  focus:ring-0"
          value={"Tab2"}
          aria-label="Benefit"
          checked={change === "Tab2"}
          onChange={handleAbout}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Mau pesan Mobil Honda di Dealer Resmi kami Honda Bintang Tabanan, saya
          siap membantu Anda :
          <ul className="list-disc ms-4">
            <li>Berlaku Seluruh Pulau Bali Pembelian Cash/Credit</li>
            <li>Dapat Gratis Aksesoris Unit Cepat</li>
            <li>Proses Cepat Dan Mudah Data</li>
            <li>di Bantu Sampai Approve</li>
            <li>Free Jasa Service dan Oli</li>
            <li>Promo Terbaik dan Diskon Maksimal</li>
          </ul>
        </div>
      </div>
    </>
  );
};
