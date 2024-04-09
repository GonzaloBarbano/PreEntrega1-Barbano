import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList";
import { db } from "../../../firebaseConfig";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
    }
    getDocs(consulta)
      .then((res) => {
        let arrayNuevo = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setProducts(arrayNuevo);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

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
          <h1 className="greeting"> {greeting} </h1>
          <ItemList products={products} />
        </Container>
      )}
    </>
  );
};

export default ItemListContainer;
