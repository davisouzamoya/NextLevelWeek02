import React,{useState,useEffect} from 'react'

import {Link} from 'react-router-dom'
import logoImg from '../../assets/images/icons/logo.svg'
import landingImg from '../../assets/images/icons/landing.svg'

import api from '../../services/api'

import studyicon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
function Landing(){
  const [totalConnections,setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections').then(response => {
      const { total } = response.data

      setTotalConnections(total)
    })
  })

  return(
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2> 
        </div>

        <img src={landingImg} 
        alt="Plataforma de estudos"
        className="Hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyicon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connection">
          Total de {totalConnections} conexoes ja realizadas <img src={purpleHeartIcon} alt="Coracao roxo"/>
        </span>

      </div>      
    </div>
  )
}

export default Landing;