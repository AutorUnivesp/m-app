import React, { Component } from 'react'
import { IconInstructureLine } from '@instructure/ui-icons'
import '../../styles/scss/senhaspage.scss'
import Tabletop from 'tabletop';

export class SenhasPage extends Component {

  state = {
    dataAPI: []
  }

  componentDidMount() {
    Tabletop.init({
      key: '17dvAyJ_8hpKE6nd5q5i5fbtLL15Us7o1JNE-fzFaiJI',
      callback: googleData => {
        this.setState({
          dataAPI: googleData
        })
      },
      simpleSheet: true
    })
    this.executeCopy(document.getElementById('copy-1'), document.getElementById('copy1'));
    this.executeCopy(document.getElementById('copy-2'), document.getElementById('copy2'));
    this.executeCopy(document.getElementById('copy-3'), document.getElementById('copy3'));
    this.executeCopy(document.getElementById('copy-4'), document.getElementById('copy4'));
    this.executeCopy(document.getElementById('copy-5'), document.getElementById('copy5'));
    this.executeCopy(document.getElementById('copy-6'), document.getElementById('copy6'));
    this.executeCopy(document.getElementById('copy-7'), document.getElementById('copy7'));
    this.executeCopy(document.getElementById('copy-8'), document.getElementById('copy8'));
    this.executeCopy(document.getElementById('copy-9'), document.getElementById('copy9'));
    this.executeCopy(document.getElementById('copy-10'), document.getElementById('copy10'));
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


  render() {
    const { dataAPI } = this.state
    return (
      <div id="gridSenhas" style={{fontFamily: 'Raleway'}}>
        <div id="login-canvas">

          <p className="login">LOGIN CANVAS</p>
            <a className="" href="https://login.univesp.br/" target="_blank" title="Site do Canvas">
              <IconInstructureLine className="my-3" id="icon-canvas2"/>
            </a>
          <br/><br/>

          <p className="paragrafo-senhaspage">Login: <span id="copy1">montagem.ava@univesp.br</span>
            <span className="badge badge-light" id="copy-1">Copy</span>
          </p>

          <p className="paragrafo-senhaspage">Senha: <span id="copy2">QueAMarisaMonte!</span>
            <span className="badge badge-light" id="copy-2">Copy</span>
          </p>

        </div>

        <div id="login-github">
          <p className="login">LOGIN GITHUB</p>
          <a className="my-3" href="https://github.com/" target="_blank" title="Site do Github"><span className="icon-github" id="github-senhas"><i className="fab fa-github"></i></span></a><br /><br />
          <p className="paragrafo-senhaspage">Login: <span id="copy3">{dataAPI.length > 0 ? dataAPI[0].github: 'Aguardando dados'}</span>
            <span className="badge badge-light" id="copy-3">Copy</span>
          </p>
          <p className="paragrafo-senhaspage">Senha: <span id="copy4">{dataAPI.length > 0 ? dataAPI[1].github: 'Aguardando dados'}</span>
            <span className="badge badge-light" id="copy-4">Copy</span>
          </p>
        </div>

        <div id="login-drive">
          <p className="login">LOGIN DRIVE GABARITOS</p>
          <a className="my-3" href="https://drive.google.com/drive/my-drive" target="_blank" title="drive gabaritos"><span className="icon-google-drive" id="gabaritos-senhas"><i className="fab fa-google-drive"></i></span></a><br /><br />
          <p className="paragrafo-senhaspage">Login: <span id="copy5">{dataAPI.length > 0 ? dataAPI[0].gabaritos: 'Aguardando dados'}</span>
            <span className="badge badge-light" id="copy-5">Copy</span>
          </p>
          <p className="paragrafo-senhaspage">Senha: <span id="copy6">{dataAPI.length > 0 ? dataAPI[1].gabaritos: 'Aguardando dados'}</span>
            <span className="badge badge-light" id="copy-6">Copy</span>
          </p>
        </div>

        <div id="login-drive-autor" style={{marginTop: '15%'}}>

          <p className="login">LOGIN DRIVE</p>
            <a className="my-3" href="https://drive.google.com/drive/my-drive" target="_blank" title="drive gabaritos"><span className="icon-google-drive" id="gabaritos-senhas"><i className="fab fa-google-drive"></i></span></a>
          <br/><br/>

          <p className="paragrafo-senhaspage">Login: <span id="copy7">autor@univesp.br</span>
            <span className="badge badge-light" id="copy-7">Copy</span>
          </p>

          <p className="paragrafo-senhaspage">Senha: <span id="copy8">materialdidatic0!</span>
            <span className="badge badge-light" id="copy-8">Copy</span>
          </p>

        </div>

        <div id="login-aluno-teste" style={{marginTop: '15%'}}>

          <p className="login">LOGIN ALUNO TESTE</p>
            <a className="my-3" href="https://login.univesp.br/" target="_blank" title="drive gabaritos"><span className="icon-google-drive" id="gabaritos-senhas"><i class="fas fa-user"></i></span></a>
          <br/><br/>

          <p className="paragrafo-senhaspage">Login: <span id="copy9">1000001@aluno.univesp.br</span>
            <span className="badge badge-light" id="copy-9">Copy</span>
          </p>

          <p className="paragrafo-senhaspage">Senha: <span id="copy10">@luno_teste</span>
            <span className="badge badge-light" id="copy-10">Copy</span>
          </p>

        </div>

      </div>
    )
  }
}
