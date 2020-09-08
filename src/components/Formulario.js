import React from "react";

const Formulario = () => {
  return (
    <form>
      <h2>Agrega tus Gastos</h2>
      <div className="campo">
        <label>Nombre Gasto</label>
        <input type="text" placeholder="Ej. Comida" className="u-full-width" />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input type="number" className="u-full-width" />
      </div>
      <input
        type="submit"
        value="Agregar"
        className="button-primary u-full-width"
      />
    </form>
  );
};

export default Formulario;
