import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = () => {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value));
  };

  const agregarPresupusto = (e) => {
    e.preventDefault();
    if (cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    guardarError(false);
  };

  return (
    <Fragment>
      <h2>Ingrese su Presupuesto</h2>
      {error ? <Error mensaje="Ingrese un Presupuesto Valido" /> : null}

      <form onSubmit={agregarPresupusto}>
        <input
          type="number"
          placeholder="Ingrese su presupuesto"
          className="u-full-width"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          value="Confirmar"
          className="button-primary u-full-width"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
