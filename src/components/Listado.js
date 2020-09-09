import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ listaGastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Lista de Gastos</h2>
      {listaGastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
