import { useContext } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();

  return (
    <>
      <div>
        <h4> {total} </h4>
        <TfiShoppingCartFull />
      </div>
    </>
  );
};

export default CartWidget;
