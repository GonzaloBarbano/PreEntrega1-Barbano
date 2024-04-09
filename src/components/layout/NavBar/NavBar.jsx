import CartWidget from "../../common/CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Container, Navbar, Dropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2>Tienda de Comida</h2>
        </Navbar.Brand>
        <Dropdown className="bg-dark border-danger">
          <Dropdown.Toggle
            className="bg-dark border-danger"
            variant="success"
            id="dropdown-basic"
          >
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/category/Hamburguesas">
              Hamburguesas
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/category/Pizzas">
              Pizzas
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/category/Sanguches">
              Sanguches
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
