import React, { useState } from "react";
import { useFecth } from "../../hooks/useFecth";
import LineGraph from "./LineGraph";
import LineGraphDeaths from "./LineGraphDeaths";
import { useNavigate } from "react-router-dom";
import "./Grafica.css";

export const userGrahp = React.createContext();
// Peticion de datos para gráfica y promedio
const Grafica = () => {
  const { data } = useFecth(
    "https://corona.lmao.ninja/v2/countries?yesterday&sort"
  );
  // Peticion de datos para input select
  const [country, setcountry] = useState("Afghanistan");
  const GetDataGraph = () => {
    const { data, loading, error } = useFecth(
      `https://corona.lmao.ninja/v2/historical/${country}?lastdays=60`
    );
    return data;
  };
  //    conversion de datos para promedio
  const dataGraph = GetDataGraph();
  const dataConversion = !!dataGraph && dataGraph.timeline.cases;
  const dataArr = Object.entries(dataConversion);
  const dataPromedio = dataArr.map((e) => parseInt(e[1]));
  const numeroPromedio = Math.round(
    dataPromedio.reduce((a, b) => a + b, 0) / 60
  );
  // Conversion de datos promedio de muertes
  const dataConversionDeaths = !!dataGraph && dataGraph.timeline.deaths;
  const dataArrDeaths = Object.entries(dataConversionDeaths);
  const dataPromedioDeaths = dataArrDeaths.map((e) => parseInt(e[1]));
  const numeroPromedioDeaths = Math.round(
    dataPromedioDeaths.reduce((a, b) => a + b, 0) / 60
  );

  const getCountry = (e) => {
    setcountry(e.target.value);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="container-grafica">
        <div className="nav-container">
          <div>
            <h1 className="title-grafica">Gráficas de {country}</h1>
            <p>Promedio de casos de los últimos dos meses: {numeroPromedio}</p>
          </div>
          <div>
            <p className="select-pais">Selecciona el país:</p>
            <select
              onChange={getCountry}
              name="select"
              className="select"
              id="select__input"
            >
              {!!data &&
                data.map((e) => (
                  <option key={e.country} value={e.country}>
                    {e.country}
                  </option>
                ))}
            </select>
          </div>
          <button onClick={handleBack} className="btn-back">
            Regresar
          </button>
        </div>
        <userGrahp.Provider value={dataGraph}>
          <LineGraph />
          <p className="promedio-deaths">Promedio de muertes de los últimos dos meses: {numeroPromedioDeaths}</p>
          <LineGraphDeaths />
        </userGrahp.Provider>
      </div>
    </div>
  );
};

export default Grafica;
