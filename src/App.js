import React, { Component } from 'react'
import VideoAula from './components/VideoAula'
import ProfsPage from './components/ProfsPage'
import SenhasPage from './components/SenhasPage'
import GuiaCanvas from './components/GuiaCanvas'
import Main from './components/Main'
import Sona from './components/Sona'
import Classico from './components/Classico'
import Avaliativa from './components/Avaliativa'
import Apoio from './components/Apoio'
import Material from './components/Material'
import Textos from './components/Textos'
import Videos from './components/Videos'
import Banners from './components/Banners'
import { IconInstructureLine } from '@instructure/ui-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login'
import './css/bases-construtor.css'
import './css/construtores.css'
import './css/codigos.css'
import './css/basicos.css'
import listaMenu from './data/data_menu.js'
import versoes from './data/data_versoes.js'
import teclado from './images/typing_transparent.gif'
import inconstruction from './images/gif_home2.gif'
import inconstructionSVG from './images/construction.svg'
import logo from './images/logo_univesp_branco.svg'

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
        <img className="img-home shadow-lg" src={teclado} alt="Página em construção" />
        <h1 className="montagem-name mt-4 text-center mr-4">
          <span style={{color: '#113889', fontSize: '62pt', fontFamily: 'Russo One'}}>MONTA</span>
          <span style={{color: '#14aadb', fontSize: '62pt', fontFamily: 'Russo One'}}>GEM</span>
        </h1>
        <img className="mt-3 mb-3" src={logo} width="150"/><br/>
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
    <div className="construtor-bases" id="collapse-construtor-bases">
      <h1 id="h1-construtor">Escolha o tópico</h1><br />
      <div className="gridContainer-bases">
        <div className="gridItem altura">Antes de Começar</div>
        <div className="gridItem">Orientação de Estudo</div>
        <div className="gridItem altura">Aprofundando Tema</div>
        <div className="gridItem">Introdução e Objetivos</div>
        <div className="gridItem altura">Situação Problema</div>
        <div className="gridItem">Texto de Apoio e Texto-Base</div>
        <Link className="gridItem altura" to="/construtores/bases/videoaula/" style={{ textDecoration: 'none'}}>
          Videoaula
        </Link>
        <div className="gridItem altura">Vídeos de Apoio</div>
        <div className="gridItem altura">Vem Por Aí</div>
        <div className="gridItem altura">Em Síntese</div>
        <div className="gridItem altura">Revisitando</div>
        <div className="gridItem altura">Video Base</div>
      </div>
    </div>
  )
}

const PaginaVideoAula = () => {
  return (
    <div className="mt-5">
      <VideoAula/>
    </div>
  )
}

const Diferenciados = () => {
  return (
    <div className="mt-5">
      <ProfsPage />
    </div>
  )
}

const ConstrutorDiferenciados = () => {
  return (
    <div className="text-center" style={{marginTop: '15%'}}>
      <img className="gif-in-construction" src={inconstructionSVG} alt="Página em construção" />
      <h4 className="mt-2 pl-5" style={{fontFamily: 'Raleway', color: 'white'}}>PÁGINA EM CONSTRUÇÃO...</h4>
      <img className="ml-4 rounded shadow gif-two-people-typing" src={inconstruction} alt="duas pessoas digitando no notebook" />
    </div>
  )
}



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

const Antigo = () => {
 return (
   <div className="gridCodigos" style={{marginTop: '15%'}}>
    <Link className="codigoItens" id="codItens2linhas" to="/codigos/antigo/avaliativa/" style={{ textDecoration: 'none'}}>
      <p>Atividade <br /> Avaliativa</p>
    </Link>
    <Link className="codigoItens" id="codItens2linhas" to="/codigos/antigo/apoio/" style={{ textDecoration: 'none'}}>
      <p>Exercício de <br /> Apoio</p>
    </Link>
    <Link className="codigoItens" to="/codigos/antigo/main/" style={{ textDecoration: 'none'}}>
      <p>Main</p>
    </Link>
    <Link className="codigoItens" to="/codigos/antigo/material/" style={{ textDecoration: 'none'}}>
      <p>Material</p>
    </Link>
    <Link className="codigoItens" to="/codigos/antigo/textos/" style={{ textDecoration: 'none'}}>
      <p>Textos</p>
    </Link>
    <Link className="codigoItens" to="/codigos/antigo/videos/" style={{ textDecoration: 'none'}}>
      <p>Videos</p>
    </Link>
   </div>
 )
}

const Creditos = () => {
  return (
    <div style={{marginTop: '10%'}}>
      <h4 className="text-center mt-5 titulo-montagem-app">Montagem Web App | Univesp</h4>
      <div className="montagem-web bg-dark">
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
    clicks: false
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

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark menu-superior">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {listaMenu.map(item => (
                  <li className="nav-item">
                    <Link className="py-3 pl-4 my-1 construtor-link" to={item.link} onClick={this.active}>
                      <span className={item.marginSpan}>
                        <i className={item.icon}></i>
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="grid-nav">
                <div>
                  <a href="https://github.com/AutorUnivesp/Montagem" target="_blank" title="github da montagem">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div>
                  <a href="https://trello.com/b/NBa6HB76/montagem-e-revis%C3%A3o" target="_blank" title="Site do Trello">
                    <i className="fab fa-trello"></i>
                  </a>
                </div>
                <div>
                  <a href="https://drive.google.com/drive/my-drive" target="_blank" title="Drive do autor">
                    <i className="fab fa-google-drive"></i>
                  </a>
                </div>
                <div>
                  <a href="https://login.univesp.br/" target="_blank" title="Canvas Link">
                    <IconInstructureLine id="icon-canvas1"/>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/construtores/" component={Construtores}/>
          <Route exact path="/diferenciados/" component={Diferenciados}/>
          <Route exact path="/codigos/" component={Codigos}/>
          <Route exact path="/codigos/antigo/" component={Antigo}/>
          <Route exact path="/codigos/antigo/main/" component={Main}/>
          <Route exact path="/codigos/antigo/avaliativa/" component={Avaliativa}/>
          <Route exact path="/codigos/antigo/apoio/" component={Apoio}/>
          <Route exact path="/codigos/antigo/material/" component={Material}/>
          <Route exact path="/codigos/antigo/textos/" component={Textos}/>
          <Route exact path="/codigos/antigo/videos/" component={Videos}/>
          <Route exact path="/codigos/classico/" component={Classico}/>
          <Route exact path="/codigos/sona/" component={Sona}/>
          <Route exact path="/guia-de-uso/" component={GuiaCanvas}/>
          <Route exact path="/planilha/" component={Planilha}/>
          <Route exact path="/basicos/" component={Basicos}/>
          <Route exact path="/basicos/banners/" component={Banners}/>
          <Route exact path="/basicos/videoaulas/" component={VideoAulasPlanilha}/>
          <Route exact path="/senhas/" component={SenhasPage}/>
          <Route exact path="/creditos/" component={Creditos}/>
          <Route exact path='/construtores/bases/' component={Bases} />
          <Route exact path='/construtores/bases/videoaula/' component={VideoAula} />
          <Route exact path='/construtores/diferenciados/' component={ConstrutorDiferenciados} />
        </div>
      </Router>
    )
  }
}

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
