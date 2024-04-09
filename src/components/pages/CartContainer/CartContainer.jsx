import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import styles from "./CartContainer.css";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No limpiar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Sin cambios", "", "info");
      }
    });
  };

  return (
    <div className={styles.contenedorcart}>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h2> {product.quantity} </h2>
          <button
            className="btn btn-primary"
            onClick={() => removeById(product.id)}
          >
            Elimnar
          </button>
        </div>
      ))}
      <h3> El total a pagar es: $ {total} </h3>

      <button className="btn btn-primary" onClick={limpiarConAlerta}>
        Vaciar compra
      </button>
      <Link to="/checkout">
        <button className="btn btn-primary">Terminar compra</button>
      </Link>
    </div>
  );
};

export default CartContainer;
