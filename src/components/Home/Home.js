import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import '../../styles/scss/home.scss'
import initialGif from '../../images/Bm7L.gif'
import logo from '../../images/logo_univesp_branco.svg'

export class Home extends Component {
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
