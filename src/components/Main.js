import React, { Component } from 'react'
import listaMain from '../data/data_codigos.js'
import '../css/main.css'
import triangulo from '../images/triangle.gif'

class Main extends Component {

  copyToClipboard = str => {
     let el = document.createElement('textarea');
     el.value = str;
     document.body.appendChild(el);
     el.select();
     document.execCommand('copy');
     el.style.display = "none";
  }

  render() {
    return (
      <div className="gridCodigosCanvas">
        <div>
          <ol className="mt-5">
            <div className="section pr-5"> MAIN </div>
            {listaMain.map(secao => (
              <div className="secao-code my-2">
                <span className="title-main-codigo pr-5">{secao.title}</span>
                <span className="badge badge-pill badge-light copy-button" onClick={() => (
                  this.copyToClipboard(secao.code)
                )}>Copy</span>
              </div>
            ))}
          </ol>
        </div>

        <div className="div-gif">
          <img style={{borderRadius: '20px'}} src={triangulo}/>
        </div>

      </div>
    )
  }
}

export default Main