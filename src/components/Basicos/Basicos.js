import React from 'react'
import { Link } from "react-router-dom";

export const Basicos = () => {
  return (
    <div style={{marginTop: '15%'}}>
      <div className="construtor-title">ESCOLHA UMA OPÇÃO</div>
      <div className="gridBasicos">
       <Link to='/basicos/banners/'>
         <button className="construtorElement">
           <p>BANNERS</p>
         </button>
       </Link>
       <Link to='/basicos/videoaulas/'>
        <button className="construtorElement">
          <p>PLANILHA<br/>VIDEOAULAS</p>
        </button>
       </Link>
       <Link >
        <button className="construtorElementDisabled">
          <p>PLANILHA<br/>SLIDES</p>
        </button>
       </Link>
      </div>
    </div>
  )
}
