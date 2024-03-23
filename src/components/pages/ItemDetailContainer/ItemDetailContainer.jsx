import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../productsMock";
import ItemDetail from "../../common/ItemDetail/ItemDetail";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const { addCart, getTotalItemQuantityById } = useContext(CartContext);
  const total = getTotalItemQuantityById(+id);

  useEffect(() => {
    setIsLoading(true);

    getProduct(id)
      .then((resp) => {
        setItem(resp);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addCart(infoProducto);
  };

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <ItemDetail {...item} onAdd={onAdd} total={total} />
      )}
    </>
  );
};

export default ItemDetailContainer;
