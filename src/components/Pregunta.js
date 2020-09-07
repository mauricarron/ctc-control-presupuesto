import React, { Fragment, useState } from "react";

const Pregunta = () => {
  const [cantidad, guardarCantidad] = useState(0);

  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value));
  };

  const agregarPresupusto = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <h2>Ingrese su Presupuesto</h2>
      <form>
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
