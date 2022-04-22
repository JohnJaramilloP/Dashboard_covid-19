import React from "react";
import sick from "../assets/images/sick.webp";
import black from "../assets/images/black.png";
import logoVacine from "../assets/images/vacuna-covid.png";
import corona from "../assets/images/corona.png";
import "./ItemsDashboard.css";

export const useBtnCountry = React.createContext();

const ItemsDashboard = ({
  country,
  iso,
  url,
  numtotal,
  numday,
  numdeaths,
  numdaydeaths,
  test,
  testMilllion,
  active,
  critical,
  recovered,
}) => {

  const getCountry = e => {

  }

  return (
    <div className="table__container">
      <div className="country__container">
        <img src={url} alt={country} />
        <div className="text-country">
          <h4> {country} </h4>
          <p> Código ISO: {iso} </p>
        </div>
      </div>

      <div className="cases__container">
        <img src={sick} alt="enfermo-tos" />
        <div className="text-cases">
          <h4> Número de casos: {numtotal} </h4>
          <h4> Reporte diario: {numday} </h4>
        </div>
      </div>

      <div className="deaths__container">
        <img src={black} alt="banda-negra" />
        <div className="text-deaths">
          <h4> Número de decesos: {numdeaths} </h4>
          <h4> Reporte diario: {numdaydeaths} </h4>
        </div>
      </div>

      <div className="vacine__container">
        <img src={logoVacine} alt="vacuna" />
        <div className="text-vacine">
          <h4> Número de pruebas: {test} </h4>
          <h4> Reporte de pruebas por millon de personas: {testMilllion} </h4>
        </div>
      </div>

      <div className="activos__container">
        <img src={corona} alt="vorona-virus" />
        <div className="text-active">
          <h4> Número de casos activos: {active} </h4>
          <h4> Casos en estado crítico: {critical} </h4>
          <h4> Recuperados: {recovered} </h4>
        </div>
      </div>
    </div>
  );
};

export default ItemsDashboard;
