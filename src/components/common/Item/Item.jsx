import { Link } from "react-router-dom";

const Item = ({ img, title, price, description, id }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <Link to={`/item/${id}`}>
        <button>Detalles</button>
      </Link>
    </div>
  );
};

export default Item;
