import React, { Component } from 'react'
import { IconInstructureLine } from '@instructure/ui-icons'
import '../css/senhaspage.css'

class SenhasPage extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    fetch("https://sheetsu.com/apis/v1.0su/f34367b89be4")
      .then( (response) => {
        return response.json()
      }).then( (json) => {
        this.setState({data: json});
      });
    this.executeCopy(document.getElementById('copy-1'), document.getElementById('copy1'));
    this.executeCopy(document.getElementById('copy-2'), document.getElementById('copy2'));
    this.executeCopy(document.getElementById('copy-3'), document.getElementById('copy3'));
    this.executeCopy(document.getElementById('copy-4'), document.getElementById('copy4'));
    this.executeCopy(document.getElementById('copy-5'), document.getElementById('copy5'));
    this.executeCopy(document.getElementById('copy-6'), document.getElementById('copy6'));
  }

  executeCopy = (elemento, copy) => {
    elemento.onclick = () => {
      this.copyToClipboard(copy.innerHTML);
    }
  }

  copyToClipboard = str => {
   let el = document.createElement('textarea');
   el.value = str;
   document.body.appendChild(el);
   el.select();
   document.execCommand('copy');
   el.style.display = "none";
  }

  renderLogin1() {
    return this.state.data.map(dat => dat.canvasLogin)
  }

  renderLogin2() {
    return this.state.data.map(dat => dat.githubLogin)
  }

  renderLogin3() {
    return this.state.data.map(dat => dat.gabaritosLogin)
  }

  renderSenha1() {
    return this.state.data.map(dat => dat.canvasSenha)
  }

  renderSenha2() {
    return this.state.data.map(dat => dat.githubSenha)
  }

  renderSenha3() {
    return this.state.data.map(dat => dat.gabaritosSenha)
  }

  render() {
    return (
      <div id="gridSenhas" style={{fontFamily: 'Raleway'}}>
        <div id="login-canvas">

          <p className="login">LOGIN CANVAS</p>
            <a className="" href="https://login.univesp.br/" target="_blank" title="Site do Canvas">
              <IconInstructureLine className="my-3" id="icon-canvas2"/>
            </a>
          <br/><br/>

          <p className="paragrafo-senhaspage">Login: <span id="copy1">{this.renderLogin1()}</span>
            <span className="badge badge-light" id="copy-1">Copy</span>
          </p>

          <p className="paragrafo-senhaspage">Senha: <span id="copy2">{this.renderSenha1()}</span>
            <span className="badge badge-light" id="copy-2">Copy</span>
          </p>

        </div>

        <div id="login-github">
          <p className="login">LOGIN GITHUB</p>
          <a className="my-3" href="https://github.com/" target="_blank" title="Site do Github"><span className="icon-github" id="github-senhas"><i className="fab fa-github"></i></span></a><br /><br />
          <p className="paragrafo-senhaspage">Login: <span id="copy3">{this.renderLogin2()}</span>
            <span className="badge badge-light" id="copy-3">Copy</span>
          </p>
          <p className="paragrafo-senhaspage">Senha: <span id="copy4">{this.renderSenha2()}</span>
            <span className="badge badge-light" id="copy-4">Copy</span>
          </p>
        </div>

        <div id="login-drive">
          <p className="login">LOGIN DRIVE GABARITOS</p>
          <a className="my-3" href="https://drive.google.com/drive/my-drive" target="_blank" title="drive gabaritos"><span className="icon-google-drive" id="gabaritos-senhas"><i className="fab fa-google-drive"></i></span></a><br /><br />
          <p className="paragrafo-senhaspage">Login: <span id="copy5">{this.renderLogin3()}</span>
            <span className="badge badge-light" id="copy-5">Copy</span>
          </p>
          <p className="paragrafo-senhaspage">Senha: <span id="copy6">{this.renderSenha3()}</span>
            <span className="badge badge-light" id="copy-6">Copy</span>
          </p>
        </div>
      </div>
    )
  }
}

export default SenhasPage
