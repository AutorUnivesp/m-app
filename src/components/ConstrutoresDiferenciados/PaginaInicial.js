import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Link } from "react-router-dom";
import { bimestres, semestres, semanasLista } from '../../data/data_pagina_inicial.js'
import '../../css/construtoresBasesDiferenciados/pagina-inicial.css'

const PaginaInicial = () => {
  return (
    <React.Fragment>
      <div className="gridDisciplinas">
        <Disciplines
          title='Bimestrais'
          lista={bimestres}
        />
        <Disciplines
          title='Semestrais'
          lista={semestres}
        />
      </div>
    </React.Fragment>
  )
}



class Disciplines extends Component {

  handleClick = (e, planilha) => {
    document.getElementById(`semanas-preview-${e}`).style.display = 'block'
    ReactDOM.render(
      planilha != '' ?
      <SemanasPreenchidas
        link={planilha}
        element={e}
        semanasTemas={semanasLista}
      />
        : null,
      document.getElementById(`semanas-preview-${e}`)
    )
  }

  renderElement = (e, planilha) => {
    ReactDOM.render(<Inputs semanasTemas={semanasLista}/>, document.getElementById('inputs-semanas'))
    this.handleClick(e, planilha)
  }

  render() {
    const { title, lista } = this.props
    return (
      <div className="disciplinas">
        <h3 className="tituloDisciplinas py-2 pl-4">{title}</h3>
        <ul className="listaDisciplinas">
          {lista.map(item => (
            <React.Fragment>
              <li id={item.id} className="py-2 itemDisciplina text-left" onClick={() => {
                this.renderElement(item.id, item.planilha)
              }}>
                <h4 className="pl-5">{item.title}</h4>
              </li>
              <div id="inputs-semanas"></div>
              <div id={`semanas-preview-${item.id}`}></div>
            </React.Fragment>
            ))
          }
        </ul>
      </div>
    )
  }
}

const Inputs = props => {
  return (
    <div className="text-center" id="input-fields">
      <div className="grid-inputs-semanas">
        <div className="inputs-temas">
          {props.semanasTemas.map(semana => (
            <div>
              <label className="tema-semana" htmlFor={`semana-${semana.num}-tema`}>Insira o tema da semana <span className={semana.num == 1 ? "ml-1" : "ml-0"}>{semana.num}</span></label><br/>
              <input className="input-semanas" id={`semana-${semana.num}-tema`} placeholder="Escreva um espaço em branco se não houver" />
            </div>
          ))}
        </div>
        <div className="inputs-links">
          {props.semanasTemas.map(semana => (
            <div>
              <label className="tema-semana" htmlFor={`semana-${semana.num}-link`}>Insira o link da semana <span className={semana.num == 1 ? "ml-1" : "ml-0"}>{semana.num}</span></label><br/>
              <input className="input-semanas" id={`semana-${semana.num}-link`} placeholder="Escreva um espaço em branco se não houver" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



class SemanasPreenchidas extends Component {
  state = {
    semanas: [],
    constructor: 'Recebendo dados...'
  }

  copyToClipboard = str => {
     let el = document.createElement('textarea');
     el.value = str;
     document.body.appendChild(el);
     el.select();
     document.execCommand('copy');
     el.style.display = "none";
  }

  handleSemanas = () => {
    this.setState({
      constructor: 'Construindo...'
    })
    setTimeout(this.finished, 2000)
  }

  finished = () => {
    this.copyToClipboard(document.getElementById('preview-menu-semanas').innerHTML)
    this.setState({
      constructor: 'Copiado!'
    })
  }

  componentDidMount() {
    const { link } = this.props
    fetch(link)
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          semanas: json,
          constructor: 'Construir!'
        })
      })
  }

  render() {
    const { semanas, constructor } = this.state
    const { element } = this.props
    const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
    return (
      <div className="mt-1 py-3 text-center">
        <button className="ml-1 pl-0 pt-0 mt-4" id="construirBotao" onClick={this.handleSemanas}>
          {constructor}
        </button>
        <div id='preview-menu-semanas'>
          <div className={`container menu-semanas-${element} semanal`}>
            <h2>Menu das Semanas</h2>
            {semanas.map(item => (
              <div className={`container title semana-${item.semana}`}>
                <div className="before">{item.dia < 10 ? `0${item.dia}` : item.dia}<br />{meses[item.mes - 1]}</div>
                <span>{item.semana}</span>
                <h1>{document.getElementById(`semana-${item.semana}-tema`).value}</h1>
                <a className="overlay" href={document.getElementById(`semana-${item.semana}-link`).value}>link</a>
              </div>
            ))}
          </div>
        </div>

      </div>
    )
  }
}

class Semestrais extends Component {
  render() {
    return (
      <div className="mt-5">
        <h2>Construtor Página Inicial - Disciplinas Semestrais</h2>
      </div>
    )
  }
}

export { PaginaInicial, SemanasPreenchidas, Semestrais }
