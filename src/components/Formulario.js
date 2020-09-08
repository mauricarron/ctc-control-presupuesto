import React, { useState } from "react";

const Formulario = () => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const agregarGasto = (e) => {
    e.preventDefault();
    //validar
    //construir objeto gasto
    //pasar gasto a componente principal
    //resetear el form
  };

  return (
    <form>
      <h2>Agrega tus Gastos</h2>
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          placeholder="Ej. Comida"
          className="u-full-width"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
        />
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
