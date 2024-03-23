import ItemCountContainer from "../ItemCount/ItemCountContainer";

const ItemDetail = ({
  img,
  title,
  price,
  description,
  stock,
  onAdd,
  total,
}) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h3> {description} </h3>
      <h3>Precio: {price}</h3>
      {total && <h3>Ya tienes {total} en el carrito </h3>}
      <ItemCountContainer stock={stock} onAdd={onAdd} total={total} />
    </div>
  );
};

export default ItemDetail;
