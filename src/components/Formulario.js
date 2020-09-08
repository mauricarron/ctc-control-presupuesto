import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = () => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    //construir objeto gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    console.log(gasto);
    //pasar gasto a componente principal
    //resetear el form
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus Gastos</h2>
      {error ? <Error mensaje="Ingrese Gasto y/o Costo Válidos" /> : null}
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
