export const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <div className="d-flex flex-column col-2 justify-content-center align-content-center border border-3 border-primary rounded-3 p-4">
      <div>
        <button
          className="btn btn-dark mx-3"
          onClick={subOne}
          disabled={counter === 1 ? true : false}
        >
          -
        </button>
        <h2>{counter}</h2>
        <button className="btn btn-dark mx-3" onClick={addOne}>
          +
        </button>
      </div>
      <button className="btn btn-primary mt-2" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
