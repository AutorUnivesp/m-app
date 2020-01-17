import React, { Component } from 'react'
import '../../styles/scss/banners.scss'
import triangulo from '../../images/triangle_site.gif'
import Tabletop from 'tabletop';

export class Professores extends Component {
  state = {
    disciplines: [],
    filteredDisciplines: [],
    filteredProfessores: [],
    professoresAPI: []
  }

  componentDidMount() {
    Tabletop.init({
      key: '1rnfF4vFBD-vQw8EPtT5FniEnwrHympK5qITYlV6EtNE',
      callback: googleData => {
        this.setState({
          professoresAPI: googleData,
          filteredProfessores: googleData
        })
      },
      simpleSheet: true
    })
  }

  copyToClipboard = str => {
     let el = document.createElement('textarea');
     el.value = str;
     document.body.appendChild(el);
     el.select();
     document.execCommand('copy');
     el.style.display = "none";
  }

  onchange = e => {
    const { professoresAPI } = this.state
    const filteredProfessores = professoresAPI.filter(dis => {
      return dis.Nome.toLowerCase().includes(e.target.value.toLowerCase())
       || dis.Codigo.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filteredProfessores
    })
  }

  render() {
    const { professoresAPI, filteredProfessores } = this.state;
    return (
      <div className="grid-Banners">
        <div>
          <div className="search-div">
            <span><button className="fas fa-search button-search"></button></span>
            <input className="search-field" placeholder="Pesquise pelo nome do professor(a)..." onChange={this.onchange}/>
          </div>
          <div>
            <ul>
              {filteredProfessores.length > 0 && filteredProfessores.map(dis => (
                <li style={{listStyle: 'none'}}>
                  <div className="discipline my-1">
                    <span className="title-banners pr-2">{dis.Nome}</span>
                    <span className="badge badge-pill badge-light copy-button-banners" onClick={() => (
                      this.copyToClipboard('https://assets.univesp.br/canvas/img/prof/' + dis.Docente)
                    )}>Copy</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="div-gif">
          <img style={{borderRadius: '20px'}} src={triangulo}/>
        </div>
      </div>
    );
  }
}
