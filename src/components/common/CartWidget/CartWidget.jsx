import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();

  return (
    <>
      <Link to="/cart">
        <TfiShoppingCartFull />
        {total}
      </Link>
    </>
  );
};

export default CartWidget;
