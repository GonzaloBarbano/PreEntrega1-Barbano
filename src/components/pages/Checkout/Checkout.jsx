import { Link } from "react-router-dom";

export const Checkout = ({ envioFormulario, capturar, orderId }) => {
  return (
    <div>
      {orderId ? (
        <div>
          <h1>Tu orden de compra es {orderId} </h1>
          <Link to="/"> Seguir comprando </Link>
        </div>
      ) : (
        <form onSubmit={envioFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
          />
          <input
            type="text"
            placeholder="Ingresa tu telefono"
            onChange={capturar}
            name="phone"
          />
          <input
            type="text"
            placeholder="Ingresa tu mail"
            onChange={capturar}
            name="email"
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};
