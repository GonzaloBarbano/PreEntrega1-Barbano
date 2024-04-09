import Item from "../common/Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      {products.map(({ id, img, title, description, price }) => (
        <Item
          key={id}
          id={id}
          img={img}
          title={title}
          description={description}
          price={price}
        />
      ))}
    </div>
  );
};

export default ItemList;
