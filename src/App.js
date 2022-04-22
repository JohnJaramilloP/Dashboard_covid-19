import React from "react";
import DataFecth from "./components/02-itemsDashboard/DataFecth";
import TitleDashboard from "./components/01-title/TitleDashboard";
import Grafica from "./components/04-gráfica/Grafica";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="container__app">
      <Router>
        <TitleDashboard />
        <Routes>
          <Route path="/" element={<DataFecth />} />
          <Route path="/grafica" element={<Grafica />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
