import styles from "./index.module.css";
import Image from "next/image";

export const ImageProduct = ({ image, title }) => {
    return (
        <div className={styles.wrapperImg}>
        <Image
          src={image}
          height={500}
          width={500}
          alt={title}
          className={styles.imgCardProduct}
          />
        </div>
    );
}