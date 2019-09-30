import React from 'react'
import { Link } from "react-router-dom";
import '../../css/codigos.css'

export const Codigos = () => {
   return (
     <div style={{marginTop: '10%'}}>
       <div className="construtor-title">ESCOLHA O TIPO DE MODELO</div>
       <div className="gridCodigos">
        <Link className="codigoItens" to="/codigos/antigo/" style={{ textDecoration: 'none'}}>
          <p>Antigo</p>
        </Link>
        <Link className="codigoItens" to="/codigos/classico/" style={{ textDecoration: 'none'}}>
          <p>Clássico</p>
        </Link>
        <Link className="codigoItens" to="/codigos/sona/" style={{ textDecoration: 'none'}}>
          <p>SONA</p>
        </Link>
       </div>
     </div>
   )
}
