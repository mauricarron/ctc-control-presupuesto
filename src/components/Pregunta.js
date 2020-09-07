import React, { Fragment } from "react";

const Pregunta = () => {
  return (
    <Fragment>
      <h2>Ingrese su Presupuesto</h2>
      <form>
        <input
          type="number"
          placeholder="Ingrese su presupuesto"
          className="u-full-width"
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
