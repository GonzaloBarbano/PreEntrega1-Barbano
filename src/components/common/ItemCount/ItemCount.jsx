import styles from "./ItemCount.css";
import Swal from "sweetalert2";

export const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <div className={styles.contador}>
      <div className={styles.control}>
        <button
          className={styles.boton}
          onClick={subOne}
          disabled={counter === 1 ? true : false}
        >
          -
        </button>
        <h4>{counter}</h4>
        <button className={styles.boton} onClick={addOne}>
          +
        </button>
      </div>
      <div>
        <button className={styles.boton} onClick={() => onAdd(counter)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
