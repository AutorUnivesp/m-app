import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/scss/construtores.scss'

export const Construtores = () => {
   return (
     <div style={{marginTop: '15%'}}>
       <div className="construtor-title">ESCOLHA SEU CONSTRUTOR</div>
       <div className="gridConstrutores">
        <Link to='/construtores/bases/'>
          <button className="construtorElement">
            <p>CONSTRUTOR<br/>BASES</p>
          </button>
        </Link>
        <Link to='/construtores/diferenciados/'>
         <button className="construtorElement">
           <p>PÁGINA<br />INICIAL</p>
         </button>
        </Link>
       </div>
     </div>
   )
}
