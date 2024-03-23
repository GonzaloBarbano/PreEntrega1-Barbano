import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
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
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h2> {product.quantity} </h2>
          <button onClick={() => removeById(product.id)}>Elimnar</button>
        </div>
      ))}
      <h2> El total a pagar es: {total} </h2>

      <button onClick={limpiarConAlerta}>Limpiar</button>
      <Link to="/checkout">
        <button>Terminar compra</button>
      </Link>
    </div>
  );
};

export default CartContainer;
