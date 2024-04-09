import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ img, title, price, id }) => {
  return (
    <Card className="d-flex flex-column justify-content-between">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link to={`/item/${id}`}>
          <Button>Detalles del Producto</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
