import React, { useState } from "react";
import "./Paginacion.css"

const Paginacion = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const prevPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const onKeyDown = e => {
    if (e.code === "Enter") {
      setPagina(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(e.target.value));
      }
    }
  };

  const onChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className="paginacion-container">
      <button 
      className="btns btn-prev"
      disabled={pagina === 1 || pagina < 1} 
      onClick={prevPage}>
        Anterior
      </button>
      <input
        className="input"
        onChange={e => onChange(e)}
        onKeyDown={e => onKeyDown(e)}
        name="page"
        value={input}
        autoComplete="off"
      />
      <p className="text-max"> de {maximo}</p>
      <button
      className="btns btn-next" 
      disabled={pagina === 57 || pagina > 57} 
      onClick={nextPage}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
