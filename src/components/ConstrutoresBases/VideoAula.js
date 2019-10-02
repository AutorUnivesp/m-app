import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery'
import cry from '../../images/crying.gif'
import '../../css/index.css'
import '../../css/ava_global.css'
import '../../styles/scss/videoaula.scss'

class VideoAula extends Component {
  render() {
    return (
        <div className="gridContainer-videoaula">
          <div className="videoaula">
            <RowOne />
            <RowTwo />
            <RowThree />
          </div>
          <Preview />
        </div>
    )
  }
}

class RowOne extends Component {
  render() {
    return (
      <div className="rowOne">
        <h2 className="headerFirstDiv">Coloque os dados corretamente para gerar.</h2>
      </div>
    )
  }
}

class RowTwo extends Component {
  render() {
    return (
      <div className="rowTwo">
        <div id="labels">
          <div className="form-group">
            <label className="label-one" htmlFor="titulo-videoaula">Insira o título aqui</label>
          </div>
          <div className="form-group">
            <label className="label-one" htmlFor="sinopse-videoaula">Insira a sinopse aqui</label>
          </div>
          <div className="form-group">
            <label className="label-one" htmlFor="video-videoaula">Insira o vídeo</label>
          </div>
          <div className="form-group">
            <label className="label-one" htmlFor="download-videoaula">Insira o link do download</label>
          </div>
          <div className="form-group" id="last-div-form">
            <label className="label-one" htmlFor="slide-videoaula">Insira o link dos slides</label>
          </div>
        </div>
        <div id="inputs">
          <input className="input-one" id="titulo-videoaula" placeholder="Escreva um espaço em branco se não houver" />
          <input className="input-one" id="sinopse-videoaula" placeholder="Escreva um espaço em branco se não houver" />
          <input className="input-one" id="video-videoaula" placeholder="Escreva um espaço em branco se não houver" />
          <input className="input-one" id="download-videoaula" placeholder="Escreva um espaço em branco se não houver" />
          <input className="input-one" id="slide-videoaula" placeholder="Escreva um espaço em branco se não houver" />
        </div>
      </div>
    )
  }
}

class RowThree extends Component {
  componentDidMount() {
    let botaoGerar = document.getElementById('gerarBotao')
    botaoGerar.onclick = () => {
      ReactDOM.render(<GerarFunction />, document.getElementById('preview-canvas'));
      let headerPreview = document.getElementById('headerPreview');
      let preview = document.getElementById('preview-canvas');
      let inputs = document.getElementsByClassName('input-one')
      if (inputs.value !== '') {
        this.copyToClipboard(preview.innerHTML);
        headerPreview.style.display = "block";
        headerPreview.style.background = "white";
        preview.style.background = "white";
        this.switchHtml()
        setTimeout(this.returnHtml, 1000)
      }
    }
  }

  switchHtml = () => {
    document.getElementById('gerarBotao').innerHTML = 'Copiado'
    document.getElementById('gerarBotao').style.fontWeight = 'lighter'
    document.getElementById('gerarBotao').style.fontStyle = 'italic'
  }

  returnHtml = () => {
    document.getElementById('gerarBotao').innerHTML = 'Gerar'
    document.getElementById('gerarBotao').style.fontWeight = 'bold'
    document.getElementById('gerarBotao').style.fontStyle = 'normal'
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
    return (
      <div className="rowThree">
        <button className="ml-1 pl-0 pt-0" id="gerarBotao">Gerar</button>
      </div>
    )
  }
}

class Preview extends Component {
  render() {
    return (
      <div>
        <div className="preview">
          <div id="headerPreview">
            <h4 id="simulacaoCanvas" style={{fontFamily: 'Raleway', fontWeight: 'bold'}}><i class="fas fa-photo-video pr-3"></i>SIMULAÇÃO CANVAS</h4>
          </div>
          <div id="preview-canvas"></div>
        </div>
        <div id="textArea"></div>
      </div>
    )
  }
}

const GerarFunction = () => {
  let tituloVideoaula = document.getElementById('titulo-videoaula').value;
  let sinopseVideoaula = document.getElementById('sinopse-videoaula').value;
  let videoVideoaula = document.getElementById('video-videoaula').value;
  let downloadVideoaula = document.getElementById('download-videoaula').value;
  let downloadTratadoVideoaula = downloadVideoaula.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=");
  let slideVideoaula = document.getElementById('slide-videoaula').value;

  let videoaula = {
    titulo: tituloVideoaula,
    sinopse: sinopseVideoaula,
    video: videoVideoaula,
    download: downloadTratadoVideoaula,
    slide: slideVideoaula
  }
  if (videoaula.titulo !== "" && videoaula.sinopse !== "" && videoaula.video !== "" && videoaula.download !== "" && videoaula.slide !== "") {
    return (
      <div className="graduation">
        <div className="container">
          <div className="content-item video primary">
            <div className="icon">
              <img src="https://assets.univesp.br/canvas/img/video.svg" />
            </div>
            <div className="content">
              <h5>Videoaula</h5>
              <h2>{videoaula.titulo}</h2>
            </div>
          </div>
          <div className="content-item-body">
            <iframe src={videoaula.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} width="300" height="150" allowfullscreen="allowfullscreen"></iframe>
            <div className="btn-bar">
              <a className="btn btn-padrao icon-educators" href={videoaula.slide.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Slides de  Apoio</a>
              <a className="btn btn-padrao icon-cloud-download" href={videoaula.download.replace("/view?usp=sharing", "")} target="_blank" rel="noopener noreferrer">Download do Vídeo</a>
            </div>
            <div className="synopsis"><p>{videoaula.sinopse}</p></div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="main-content">
        <p className="paragraph" style={{fontFamily: 'Raleway'}}>
          Por favor, preencha todos os campos.<br />
          Achei que você quisesse ajudar a equipe da montagem :(
        </p>
        <img className="woody" src={cry} alt="Woody Harrison drying tears with money" />
      </div>
    )
  }
}

export default VideoAula;
