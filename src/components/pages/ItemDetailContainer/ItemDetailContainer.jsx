import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import style from "./ItemDetailContainer.css";
import ItemDetail from "../../common/ItemDetail/ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { Container } from "react-bootstrap";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const { addCart, getTotalItemQuantityById } = useContext(CartContext);
  const total = getTotalItemQuantityById(id);

  useEffect(() => {
    setIsLoading(true);

    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => {
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
        <Container>
          <h1>Detalles del Producto</h1>
          <ItemDetail {...item} onAdd={onAdd} total={total} />
        </Container>
      )}
    </>
  );
};

export default ItemDetailContainer;
