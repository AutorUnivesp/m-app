import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import { IconInstructureLine } from '@instructure/ui-icons'
import { Home } from './components/Home/Home'
import { Diferenciados } from './components/ModelosDiferenciados/ExerciciosDiferenciados'
import { Codigos } from './components/Codigos/Codigos.js'
import { ModeloAntigo } from './components/Codigos/Antigo.js'
import { ModeloClassico } from './components/Codigos/Classico.js'
import { ModeloSona } from './components/Codigos/Sona.js'
import { Construtores } from './components/Construtores/Construtores'
import { ConstrutorBases } from './components/ConstrutoresBases/ConstrutorBases'
import { ConstrutorDiferenciados } from './components/ConstrutoresDiferenciados/ConstrutorDiferenciados'
import { ControlePlanilha } from './components/Planilhas/ControlePlanilha'
import { Mais } from './components/Mais/Mais'
import { Banners } from './components/Mais/Banners'
import { SenhasPage } from './components/Mais/SenhasPage'
import { PlanilhaVideoAulas } from './components/Planilhas/PlanilhaVideoAulas'
import { Creditos } from './components/Creditos/Creditos'
import { Documentacao } from './components/Documentacao/Documentacao'
import { SemanasPreenchidas } from './components/ConstrutoresDiferenciados/PaginaInicial'
import { GuiaCanvas } from './components/GuiaUso/GuiaCanvas'
import inconstruction from './images/gif_home2.gif'
import inconstructionSVG from './images/construction.svg'
import $ from 'jquery'

class App extends Component {

  state = {
    menu_data: [],
    clicks: false,
    width: window.innerWidth
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth
    });
  }

  componentDidMount() {
    this.receiveMenuData()
    this.changingMenu()
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  receiveMenuData = () => {
    fetch('https://raw.githubusercontent.com/AutorUnivesp/m-app/master/src/data/menu.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          menu_data: data.menu
        })
      })
    })
    .catch(err => {
      console.log(`Request returned with an error: ${err}`)
    })
  }

  active = (e) => {
    const { clicks } = this.state
    if (clicks === true) {
      let elementActive = document.getElementsByClassName('activeTabApp')
      elementActive[0].classList.remove('activeTabApp')
      this.setState({ clicks: false})
    }
    e.target.classList.add('activeTabApp')
    this.setState({ clicks: true })
  }

  changingMenu = () => {
    $(document).scroll(function() {
      let $nav = $(".navbar-fixed-top")
      let links = $('.construtor-link')
      let gridIcons = $('.icon')
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
      links.toggleClass('link-color', $(this).scrollTop() > $nav.height())
      gridIcons.toggleClass('scroll-in', $(this).scrollTop() > $nav.height())
    })
  }

  render() {
    const { width, menu_data } = this.state
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top menu-superior">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {menu_data.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="py-3 my-1 construtor-link" to={item.link} onClick={this.active}>
                    <span className={item.marginSpan}>
                      <i className={item.icon}></i>
                      {width > 990 ? item.title : null}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="grid-nav">
              <div>
                <a className="icon" href="https://github.com/AutorUnivesp/Montagem" target="_blank" rel="noopener noreferrer" title="github da montagem">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div>
                <a className="icon" href="https://trello.com/b/NBa6HB76/montagem-e-revis%C3%A3o" target="_blank" rel="noopener noreferrer" title="Site do Trello">
                  <i className="fab fa-trello"></i>
                </a>
              </div>
              <div>
                <a className="icon" href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener noreferrer" title="Drive do autor">
                  <i className="fab fa-google-drive"></i>
                </a>
              </div>
              <div>
                <a className="icon" href="https://login.univesp.br/" target="_blank" rel="noopener noreferrer" title="Canvas Link">
                  <IconInstructureLine id="icon-canvas1"/>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/construtores/" component={Construtores}/>
        <Route exact path="/codigos/" component={Codigos}/>
        <Route path="/codigos/antigo/" component={ModeloAntigo}/>
        <Route path="/codigos/classico/" component={ModeloClassico}/>
        <Route path="/codigos/sona/" component={ModeloSona}/>
        <Route path="/videoaulas/" component={PlanilhaVideoAulas}/>
        <Route path="/guia-de-uso/" component={GuiaCanvas}/>
        <Route exact path="/controle/" component={ControlePlanilha}/>
        <Route exact path="/mais/" component={Mais}/>
        <Route path="/mais/banners/" component={Banners}/>
        <Route path="/mais/senhas/" component={SenhasPage}/>
        <Route path="/mais/diferenciados/" component={Diferenciados}/>
        <Route path="/documentacao/" component={Documentacao}/>
        <Route path="/creditos/" component={Creditos}/>
        <Route exact path='/construtores/bases/' component={ConstrutorBases} />
        <Route exact path='/construtores/diferenciados/' component={ConstrutorDiferenciados} />
        <Route path='/construtores/diferenciados/Bimestrais/' component={SemanasPreenchidas} />
      </div>
    )
  }
}

export default App

// <Route exact path='/construtores/bases/antes-de-comecar' component={ConstrutorDiferenciados} />
// <Route exact path='/construtores/bases/orientacao/' component={ConstrutorDiferenciados} />
// <Route exact path='/construtores/bases/aprofundando/' component={ConstrutorDiferenciados} />
// <Route exact path='/construtores/bases/introducao-objetivos/' component={ConstrutorDiferenciados} />
// <Route exact path='/construtores/bases/situacao-problema/' component={ConstrutorDiferenciados} />
// <Route exact path='/construtores/bases/texto-apoio-base' component={ConstrutorDiferenciados} />
// <Route exact path='/construtores/bases/videos-apoio/' component={ConstrutorDiferenciados} />
// <Route exact path='/construtores/bases/vem-por-ai/' component={ConstrutorDiferenciados} />
// <Route exact path='/construtores/bases/em-sintese/' component={ConstrutorDiferenciados} />
// <Route exact path='/construtores/bases/revisitando/' component={ConstrutorDiferenciados} />

/*
<Route exact path="/basicos/slides/" component={Slides}/> */

/*
{
  "title": "Senhas úteis",
  "icon": "fas fa-key mr-2",
  "link": "/senhas/",
  "marginSpan": "ml-1"
},

{
  "title": "Diferenciados",
  "icon": "fas fa-dice-d20 mr-2",
  "link": "/diferenciados/",
  "marginSpan": "ml-1"
},
*/
