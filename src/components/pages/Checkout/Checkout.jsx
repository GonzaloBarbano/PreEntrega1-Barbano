export const Checkout = ({ envioFormulario, capturar }) => {
  return (
    <div>
      <h1>Aca el Chekout</h1>

      <form onSubmit={envioFormulario}>
        <input
          type="text"
          placeholder="Ingresa Nombre"
          onChange={capturar}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingresa Apellido"
          onChange={capturar}
          name="lastName"
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
