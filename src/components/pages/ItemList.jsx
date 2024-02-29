import Item from "../common/Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map(({ id, img, title, description, price }) => {
        return (
          <Item
            key={id}
            img={img}
            title={title}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
