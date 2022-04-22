import React from 'react'
import covid from "../assets/images/covid-19.jpg"
import "./TitleDashboard.css"

const TitleDashboard = () => {

  return (
    <div className='container__title'>
        <h1 className='title'>DashBoard para reporte COVID - 19 | Mundial - Países</h1>
        <img src={ covid } alt="covid-19" className='logo' /> 
        <div className='source'>
            <p className='source__p'>Fuente de datos: <span>Novel COVID-19 API</span></p>
            <p className='source__p'>Elaborado por: <span>John A. Jaramillo P.</span></p>
        </div>

    </div>
  )
}

export default TitleDashboard;
