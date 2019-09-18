import React, { Component } from 'react'
import VideoAula from './components/ConstrutoresBases/VideoAula'
import VideosBase from './components/ConstrutoresBases/VideoBase'
import ExsDiferenciados from './components/ModelosDiferenciados/ExerciciosDiferenciados'
import SenhasPage from './components/SenhasPage'
import GuiaCanvas from './components/GuiaCanvas'
import Antigo from './components/Modelos/Antigo.js'
import Sona from './components/Modelos/Sona'
import Classico from './components/Modelos/Classico'
import Banners from './components/Banners'
import { PaginaInicial, SemanasPreenchidas, Semestrais } from './components/ConstrutoresDiferenciados/PaginaInicial'
import { IconInstructureLine } from '@instructure/ui-icons'
import { Route, Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login'
import './css/construtoresBasesDiferenciados/bases-construtor.css'
import './css/construtoresBasesDiferenciados/diferenciados-construtor.css'
import './css/construtores.css'
import './css/codigos.css'
import './css/basicos.css'
import listaMenu from './data/data_menu.js'
import versoes from './data/data_versoes.js'
import initialGif from './images/Bm7L.gif'
import inconstruction from './images/gif_home2.gif'
import inconstructionSVG from './images/construction.svg'
import logo from './images/logo_univesp_branco.svg'
import $ from 'jquery'

class Home extends Component {
  state = {
    googleLogin: 'Login'
  }

  componentDidMount() {
    loadingScript("https://apis.google.com/js/platform.js")
  }

  changingState = (response) => {
    this.setState({
      googleLogin: 'Logado'
    }, responseGoogle(response) )
  }

  render() {
    const { googleLogin } = this.state

    return (
      <div className='text-center home-div-principal'>
        <img className="img-home shadow-lg" src={initialGif} alt="Página em construção" />
        <h1 className="montagem-name mt-4 text-center mr-4">
          <span className="monta">MONTA</span>
          <span className="gem">GEM</span>
        </h1>
        <img className="mt-3 mb-3 logo-univesp" src={logo} width="150"/><br/>
        <GoogleLogin
          clientId="149444863402-7ulom30mslsi955t27gsmfthaskgvddf.apps.googleusercontent.com"
          buttonText={googleLogin}
          onSuccess={this.changingState}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

const responseGoogle = response => {
  let profile = response.getBasicProfile();
  if (profile.getEmail().includes("@univesp.br")) {
    const barraDeNavegacao = document.getElementsByClassName('menu-superior');
    barraDeNavegacao[0].style.display = "flex";
  } else {
    alert('Você não possui permissão para acessar o conteúdo deste App.');
  }
}

const Bases = () => {
  return (
    <React.Fragment>
      <h1 className="text-center" style={{marginTop: '5%', color: '#543c52', textShadow: '0px 1px 1px #361d32'}}>Videoaula</h1><br />
      <VideoAula/>
      <h1 className="text-center" style={{marginTop: '4%', color: '#543c52', textShadow: '0px 1px 1px #361d32'}}>Vídeo Base</h1><br />
      <VideosBase />
    </React.Fragment>
  )
}

const Diferenciados = () => {
  return (
    <div className="mt-5">
      <ExsDiferenciados />
    </div>
  )
}

const ConstrutorDiferenciados = () => {
  return (
    <div className="construtor-diferenciados" id="collapse-construtor-diferenciados">
      <h1 className="text-center" style={{marginTop: '5%', color: '#543c52', textShadow: '0px 1px 1px #361d32'}}>Página Inicial - Menu-semanas</h1><br />
      <PaginaInicial />
    </div>
  )
}

const Documentacao = () => {
  return (
    <div className="text-center" style={{marginTop: '15%'}}>
      <h4 className="mt-2 pl-5" style={{color: '#543c52', textShadow: '0px 1px 1px #361d32'}}>PÁGINA EM CONSTRUÇÃO...</h4>
      <img className="ml-4 rounded shadow gif-two-people-typing" src={inconstruction} alt="duas pessoas digitando no notebook" />
    </div>
  )
}

// <img className="gif-in-construction" src={inconstructionSVG} alt="Página em construção" />

const Planilha = () => {
  return (
    <div className="mt-5">
      <iframe src="https://docs.google.com/spreadsheets/d/1ZYQ04NYV7UwZhF8kTWanQiGuoAHNXjqy9tzKJjA3Rh4/edit#gid=889486014" width="100%" height="900" frameborder="0"></iframe>
    </div>
  )
}

const VideoAulasPlanilha = () => {
  return (
    <div className="mt-5">
      <iframe src="https://docs.google.com/spreadsheets/d/1krv7ctjAdwAoKse7m4oQ1ttTU00-M1-S71IVNNR4rR0/edit#gid=2062978425" width="100%" height="900" frameborder="0"></iframe>
    </div>
  )
}

 const Basicos = () => {
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

 const Construtores = () => {
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
           <p>CONSTRUTOR<br />DIFERENCIADOS</p>
         </button>
        </Link>
       </div>
     </div>
   )
}

const Codigos = () => {
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

const ModeloAntigo = () => {
  return (
    <div style={{marginTop: '5%'}}>
      <h1 className="text-center" style={{marginTop: '5%', color: '#543c52', textShadow: '0px 1px 1px #361d32'}}>Antigo</h1>
      <Antigo />
    </div>
  )
}

const ModeloClassico = () => {
  return (
    <div style={{marginTop: '5%'}}>
      <h1 className="text-center" style={{marginTop: '5%', color: '#543c52', textShadow: '0px 1px 1px #361d32'}}>Clássico</h1>
      <Classico />
    </div>
  )
}

const ModeloSona = () => {
  return (
    <div style={{marginTop: '5%'}}>
      <h1 className="text-center" style={{marginTop: '5%', color: '#543c52', textShadow: '0px 1px 1px #361d32'}}>Sona</h1>
      <Sona />
    </div>
  )
}

const Creditos = () => {
  return (
    <div style={{marginTop: '10%'}}>
      <h4 className="text-center mt-5 titulo-montagem-app">Montagem Web App | Univesp</h4>
      <div className="montagem-web">
        <h5 className="my-4">Versões</h5>
        <ul>
          {versoes.map(versao => (
            <li>
              <div><span className="version"><strong>{versao.name}</strong></span> - {versao.data}</div>
              <div className="ml-5 mt-3">{versao.details}</div>
            </li>
          ))}
        </ul>
        <h5 className="mt-5 mb-3">Créditos</h5>
        <ul>
          <li>Desenvolvido por Leonardo Reina, Gabriel Gallo e Victor Planas</li>
        </ul>
      </div>
    </div>
  )
}

class App extends Component {

  state = {
    clicks: false,
    width: window.innerWidth
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth
    });
  }

  componentDidMount() {
    this.changingMenu()
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
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
    const { width } = this.state
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top menu-superior">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {listaMenu.map(item => (
                <li className="nav-item">
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
                <a className="icon" href="https://github.com/AutorUnivesp/Montagem" target="_blank" title="github da montagem">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div>
                <a className="icon" href="https://trello.com/b/NBa6HB76/montagem-e-revis%C3%A3o" target="_blank" title="Site do Trello">
                  <i className="fab fa-trello"></i>
                </a>
              </div>
              <div>
                <a className="icon" href="https://drive.google.com/drive/my-drive" target="_blank" title="Drive do autor">
                  <i className="fab fa-google-drive"></i>
                </a>
              </div>
              <div>
                <a className="icon" href="https://login.univesp.br/" target="_blank" title="Canvas Link">
                  <IconInstructureLine id="icon-canvas1"/>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/construtores/" component={Construtores}/>
        <Route path="/diferenciados/" component={Diferenciados}/>
        <Route exact path="/codigos/" component={Codigos}/>
        <Route path="/codigos/antigo/" component={ModeloAntigo}/>
        <Route path="/codigos/classico/" component={ModeloClassico}/>
        <Route path="/codigos/sona/" component={ModeloSona}/>
        <Route path="/guia-de-uso/" component={GuiaCanvas}/>
        <Route path="/planilha/" component={Planilha}/>
        <Route exact path="/basicos/" component={Basicos}/>
        <Route path="/basicos/banners/" component={Banners}/>
        <Route path="/basicos/videoaulas/" component={VideoAulasPlanilha}/>
        <Route path="/senhas/" component={SenhasPage}/>
        <Route path="/documentacao/" component={Documentacao}/>
        <Route path="/creditos/" component={Creditos}/>
        <Route exact path='/construtores/bases/' component={Bases} />
        <Route exact path='/construtores/diferenciados/' component={ConstrutorDiferenciados} />
        <Route path='/construtores/diferenciados/Bimestrais/' component={SemanasPreenchidas} />
      </div>
    )
  }
}

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

/* Adding the script tag in HTML */
const loadingScript = url => {
  let getScript = window.document.getElementsByTagName('script')[0]
  let insertScript = window.document.createElement('script')
  insertScript.src = url
  insertScript.async = true
  insertScript.defer = true
  getScript.parentNode.insertBefore(insertScript, getScript)
  insertScript.onerror = () => alert('Oh no! Login API request catch an error.')
}

export default App
