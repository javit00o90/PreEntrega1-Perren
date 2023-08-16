import styles from "./ItemContainer.module.css";

const ItemContainer = ({saludo}) => {
    return(
    <div className={styles.saludoStyle}>{saludo}</div>
    );
  };
  
  export default ItemContainer;