import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/scss/plus.scss'

export const Mais = () => {
  return (
    <div style={{marginTop: '15%'}}>
      <div className="construtor-title">ESCOLHA UMA OPÇÃO</div>
      <div className="gridPlus">
       <Link to='/mais/banners/'>
         <button className="construtorElement">
           <p>Banners</p>
         </button>
       </Link>

       <Link to='/mais/professores/'>
         <button className="construtorElement">
           <p>Professores</p>
         </button>
       </Link>

       <Link to='/mais/senhas/'>
        <button className="construtorElement">
          <p>Senhas</p>
        </button>
       </Link>

       <Link to='/mais/diferenciados/'>
        <button className="construtorElement">
          <p>Modelos<br/>Diferenciados</p>
        </button>
       </Link>
      </div>
    </div>
  )
}
