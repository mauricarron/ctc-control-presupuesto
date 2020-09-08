import React from "react";
import Gasto from "./Gasto";

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

export default Listado;
