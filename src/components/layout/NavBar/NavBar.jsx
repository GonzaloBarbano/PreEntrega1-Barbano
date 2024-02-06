import CartWidget from "../../common/CartWidget/CartWidget"


const Navbar = () => {
  return (
    <>
      <h2>Logo</h2>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Hamburguesas</a>
        </li>
        <li>
          <a href="">Pizzas</a>
        </li>
        <li>
          <a href="">Lomos</a>
        </li>
      </ul>
      <CartWidget/>
    </>
  )
}

export default Navbar

