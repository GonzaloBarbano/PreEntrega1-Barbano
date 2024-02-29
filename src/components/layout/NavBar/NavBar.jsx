import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget/CartWidget";

const Navbar = () => {
  return (
    <>
      <h2>Tienda de Comida</h2>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/category/Hamburguesas">
          <button>Hamburguesas</button>
        </Link>
        <Link to="/category/Pizzas">
          <button>Pizzas</button>
        </Link>
        <Link to="/category/Sanguches">
          <button>Sanguches</button>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </>
  );
};

export default Navbar;
