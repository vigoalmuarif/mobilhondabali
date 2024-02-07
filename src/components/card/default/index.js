import Body from "./body";
import Header from "./header";
import styles from "./index.module.css";

const Card = ({ children, className }) => {
  return <div className={`${styles.wrapper}  ${className}`}>{children}</div>;
};

Card.Body = Body;
Card.Header = Header;

export default Card;
