import React, { useState } from "react";
import { useFecth } from "../../hooks/useFecth";
import Paginacion from "../03-paginacion/Paginacion";
import ItemsDasboard from "./ItemsDashboard";
import { Link } from "react-router-dom";
import "./DataFecth.css";
import Loader from "../05-loader/Loader";
import MessageError from "../06-error/MessageError";

const DataFecth = () => {
  const { data, loading, error } = useFecth(
    "https://corona.lmao.ninja/v2/countries?yesterday&sort"
  );

  const [page, setPage] = useState(1);
  const [byPage, setByPage] = useState(4);

  const max = !!data && data.length / byPage;

  return (
    <>
      <div>
        <div className="go-graph">
          <h4>
            Para acceder a gráficas de información histórica de los últimos dos
            meses:
          </h4>
          <Link to="/grafica">
            <button className="btn-graph">Gráficas de datos históricos</button>
          </Link>
        </div>
        <Paginacion pagina={page} setPagina={setPage} maximo={max} />
        {!!loading && <Loader />}
        {!!error && <MessageError />}
        {data &&
          data
            .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
            .map((e) => (
              <ItemsDasboard
                key={e.country}
                country={e.country}
                iso={e.countryInfo.iso3}
                url={e.countryInfo.flag}
                numtotal={e.cases}
                numday={e.todayCases}
                numdeaths={e.deaths}
                numdaydeaths={e.todayDeaths}
                test={e.tests}
                testMilllion={e.testsPerOneMillion}
                active={e.active}
                critical={e.critical}
                recovered={e.recovered}
              />
            ))}
      </div>
    </>
  );
};

export default DataFecth;
