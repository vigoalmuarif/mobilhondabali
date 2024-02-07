import Image from "next/image"
import { Tooltip } from "flowbite-react"
import { PiWhatsappLogoLight, PiChatCircleTextLight } from "react-icons/pi";
import { CiMobile3 } from "react-icons/ci";
import Link from "next/link";
import styles from './index.module.css'

export const ProfileFooter = () => {
    return (
        <>
             <div className={styles.cardProfile}>
              <div className={styles.imgProfileWrapper}>
                <Image
                  src="/profile2.png"
                  width={500}
                  height={0}
                  priority
                  alt="test"
                  className={styles.imgProfile}
                />
                <div className="w-full text-center">
                  <p className={styles.profileName}>
                    Budi Purni Riswanti
                  </p>
                  <p className={styles.profileTitle}>
                    Sales Konsultan
                  </p>
                </div>
              </div>
              <div className={styles.profileContactWrapper}>
                <div className={styles.profileContactIconWrapper}>
                    <Tooltip content="WhatsApp" style="dark">
                      <PiWhatsappLogoLight className="w-6 h-6" />
                    </Tooltip>{" "}
                    |
                    <Tooltip content="Telpon Seluler" style="dark">
                      <CiMobile3 className="w-6 h-6" />
                    </Tooltip>{" "}
                    |
                    <Tooltip content="SMS" style="dark">
                      <PiChatCircleTextLight className="w-6 h-6" />
                    </Tooltip>
                </div>
                <Link
                  href="http://phone?=081234345"
                  className={styles.profilePhone}
                >
                  0812 3601 1054
                </Link>
                <div className="mt-6">
                  <Link href="https://wa.me/6281236011054" className="btnPrimary w-full">
                    WhatsApp sekarang
                  </Link>
                  <Link href="tel:081236011054" className="btnSecondary w-full mt-4">
                    Panggil
                  </Link>
                </div>
              </div>
            </div>
        </>
    )
}