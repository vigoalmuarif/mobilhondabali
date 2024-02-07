import styles from "./index.module.css";
import { ImageProduct } from "./image";
import { Body } from "./body";

const CardProduct = ({ children }) => {
  // const router = useRouter();
  return (
    <>
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

CardProduct.ImageProduct = ImageProduct;
CardProduct.Body = Body;

export default CardProduct;
