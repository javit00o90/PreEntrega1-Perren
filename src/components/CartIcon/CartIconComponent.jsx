import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartIcon.module.css";

const CartIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} className={styles.cartStyle}/>
      <div className={styles.squareStyle}>
        <span className={styles.numberStyle}> 3 </span>
      </div>
    </div>
  );
};

export default CartIcon;