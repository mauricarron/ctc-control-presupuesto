import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [listaGastos, guardarListaGastos] = useState([]);

  const agregarNuevoGasto = (gasto) => {
    guardarListaGastos([...listaGastos, gasto]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario agregarNuevoGasto={agregarNuevoGasto} />
              </div>
              <div className="one-half column">Lista de gastos</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
