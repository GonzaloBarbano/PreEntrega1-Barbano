import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../productsMock";
import ItemDetail from "../../common/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then((resp) => setItem(resp));
    setIsLoading(false);
  }, [item]);

  return;
  <>
    {isLoading ? (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    ) : (
      <ItemDetail {...item} />
    )}
  </>;
};

export default ItemDetailContainer;
