import React, { useContext, useMemo } from "react";
import { userGrahp } from "./Grafica";
import Loader from "../05-loader/Loader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
};

const LineGraph = () => {
// Datos de los casos, histórico de 2 meses - Número de los días 
  const dataGraph = useContext(userGrahp);
  const dataGraphCases = !!dataGraph && dataGraph.timeline.cases;
  const dataArr = Object.entries(dataGraphCases);
  const scores = dataArr.map((e) => parseInt(e[1]));

  // Datos de los casos, histórico de 2 meses - Número de casos por día
  
  const labels = dataArr.map((e) => parseInt(e[0].substring(2, 4)));
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Eje y: Número de casos - Eje x: Número de días",
          data: scores,
          tension: 0.3,
        },
      ],
      labels,
    };
  }, [dataGraph]);

  return (
    <>{!!dataGraph ? 
    <Line data={data} options={options} /> :
     <Loader />}</>
  );
};

export default LineGraph;
