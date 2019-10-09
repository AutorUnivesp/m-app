import React from 'react'
import { Link } from "react-router-dom";

export const Mais = () => {
  return (
    <div style={{marginTop: '15%'}}>
      <div className="construtor-title">ESCOLHA UMA OPÇÃO</div>
      <div className="gridBasicos">
       <Link to='/mais/banners/'>
         <button className="construtorElement">
           <p>Banners</p>
         </button>
       </Link>
       <Link to='/mais/senhas/'>
        <button className="construtorElement">
          <p>Senhas</p>
        </button>
       </Link>
       <Link >
        <button className="construtorElementDisabled">
          <p>Modelos<br/>Diferenciados</p>
        </button>
       </Link>
      </div>
    </div>
  )
}
