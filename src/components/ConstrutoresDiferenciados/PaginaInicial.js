import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Link } from "react-router-dom";
import '../../css/construtoresBasesDiferenciados/pagina-inicial.css'
import Tabletop from 'tabletop'

class Disciplines extends Component {

  state = {
    semanasLista: [],
    bimestres: [],
    semestres: []
  }

  componentDidMount() {
    this.receiveBimestresData()
    this.receiveSemestresData()
    this.receiveListaSemanasData()
  }

  handleClick = (e, planilha) => {
    document.getElementById(`semanas-preview-${e}`).style.display = 'block'
    ReactDOM.render(
      planilha != '' ?
      <SemanasPreenchidas
        link={planilha}
        element={e}
        semanasTemas={this.state.semanasLista}
      />
        : null,
      document.getElementById(`semanas-preview-${e}`)
    )
  }

  renderElement = (e, planilha) => {
    if (planilha !== '') {
      ReactDOM.render(<Inputs semanasTemas={this.state.semanasLista}/>, document.getElementById(`inputs-semanas-${e}`))
      this.handleClick(e, planilha)
    }
  }

  receiveListaSemanasData = () => {
    fetch('https://raw.githubusercontent.com/AutorUnivesp/m-app/master/src/data/lista_semanas.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          semanasLista: data.lista_semanas
        })
      })
    })
    .catch(err => {
      console.log(`Request returned with an error: ${err}`)
    })
  }

  receiveBimestresData = () => {
    fetch('https://raw.githubusercontent.com/AutorUnivesp/m-app/master/src/data/bimestres.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          bimestres: data.bimestres
        })
      })
    })
    .catch(err => {
      console.log(`Request returned with an error: ${err}`)
    })
  }

  receiveSemestresData = () => {
    fetch('https://raw.githubusercontent.com/AutorUnivesp/m-app/master/src/data/semestres.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          semestres: data.semestres
        })
      })
    })
    .catch(err => {
      console.log(`Request returned with an error: ${err}`)
    })
  }

  render() {
    const { title, mode } = this.props
    return (
      <div className="disciplinas">
        <h3 className="tituloDisciplinas py-2 pl-4">{title}</h3>
        <ul className="listaDisciplinas">
          {mode === "bimestres" && this.state.bimestres.map(item => (
            <React.Fragment>
              <li id={item.id} className="py-2 itemDisciplina text-left" onClick={() => {
                this.renderElement(item.id, item.planilha)
              }}>
                <h4 className="pl-5">
                {
                  item.title && item.planilha !== '' ?
                  item.title :
                  `${item.title} - Sem dados`
                }
                </h4>
              </li>
              <div id={`inputs-semanas-${item.id}`}></div>
              <div id={`semanas-preview-${item.id}`}></div>
            </React.Fragment>
            ))
          }
          {mode === "semestres" && this.state.semestres.map(item => (
            <React.Fragment>
              <li id={item.id} className="py-2 itemDisciplina text-left" onClick={() => {
                this.renderElement(item.id, item.planilha)
              }}>
                <h4 className="pl-5">
                {
                  item.title && item.planilha !== '' ?
                  item.title :
                  `${item.title} - Sem dados`
                }
                </h4>
              </li>
              <div id={`inputs-semanas-${item.id}`}></div>
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
              <label className="tema-semana" htmlFor={`semana-${semana.num}-tema`}>
                Insira o tema da semana
                <span className="ml-1">
                  {semana.num}
                </span>
              </label><br/>
              <input
                className="input-semanas"
                id={`semana-${semana.num}-tema`}
                placeholder="Escreva um espaço em branco se não houver"
              />
            </div>
          ))}
        </div>
        <div className="inputs-links">
          {props.semanasTemas.map(semana => (
            <div>
              <label className="tema-semana" htmlFor={`semana-${semana.num}-link`}>
                Insira o link da semana
                <span className="ml-1">
                  {semana.num}
                </span>
              </label><br/>
              <input
                className="input-semanas"
                id={`semana-${semana.num}-link`}
                placeholder="Escreva um espaço em branco se não houver"
              />
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
    Tabletop.init({
      key: this.props.link,
      callback: googleData => {
        this.setState({
          semanas: googleData,
          constructor: 'Construir!'
        })
      },
      simpleSheet: true
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
                <h1>
                  {
                    document.getElementById(`semana-${item.semana}-tema`) &&
                    document.getElementById(`semana-${item.semana}-tema`).value
                  }
                </h1>
                <a
                  className="overlay"
                  href={
                    document.getElementById(`semana-${item.semana}-link`) &&
                    document.getElementById(`semana-${item.semana}-link`).value
                  }
                >
                  Link para a semana {item.semana}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    )
  }
}

class PaginaInicial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="gridDisciplinas">
          <Disciplines
          title='Bimestrais'
          mode="bimestres"
          />
          <Disciplines
          title='Semestrais'
          mode="semestres"
          />
        </div>
      </React.Fragment>
    )
  }
}

export { PaginaInicial, SemanasPreenchidas }
