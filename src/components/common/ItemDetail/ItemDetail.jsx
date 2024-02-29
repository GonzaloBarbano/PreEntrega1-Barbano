import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({ img, title, price, description, stock }) => {
  const onAdd = (items) => {
    `Se agregaron ${items} al carrito`;
  };

  return;
  <div>
    <img src={img} alt="" />
    <h2>{title}</h2>
    <h3> {description} </h3>
    <h3>Precio: {price}</h3>
    <ItemCount stock={stock} onAdd={onAdd} />
  </div>;
};

export default ItemDetail;
