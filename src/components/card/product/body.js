import { Badge } from "flowbite-react";
import Link from "next/link";
import { IoCarSportOutline } from "react-icons/io5";
import styles from "./index.module.css";

export const Body = ({ title, variant, price, slug }) => {
  return (
    <div className={styles.wrapperContent}>
      <p className={styles.title}>{title}</p>
      <div className="flex flex-wrap">
        <Badge
          className={styles.variantCardProduct}
          size="xs"
          icon={IoCarSportOutline}
        >
          Tersedia {variant} varian
        </Badge>
      </div>
      <p className={styles.price}>
        Mulai Rp {variant === 0 && "0"}
        {variant !== 0 &&
          price.map((item) => (
            <span key={item.id}>
              {new Intl.NumberFormat("id-ID").format(item.price)}
            </span>
          ))}
      </p>
      <Link href={`/products/${slug}`} className="w-full btnPrimary mt-1">
        Lihat Varian
      </Link>
    </div>
  );
};
