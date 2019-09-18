import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import cry from '../../images/crying.gif'
import '../../css/construtoresBasesDiferenciados/videosbase.css'

export default () =>
  <div className='gridVideosBase' style={{marginBottom: '50px'}}>
    <div>
      <ParagrafoVideoBase />
      <InputsVideoBase />
      <GerarVideoBase />
    </div>
    <PreviewVideoBase />
  </div>

const InputsVideoBase = () =>
  <div className="rowTwo">
    <div id="labels">
      <div className="form-group">
        <label className="label-one" htmlFor="titulo-videobase">Insira o título aqui</label>
      </div>
      <div className="form-group">
        <label className="label-one" htmlFor="link-videobase">Insira a link aqui</label>
      </div>
      <div className="form-group">
        <label className="label-one" htmlFor="sinopse-videobase">Insira a sinopse aqui</label>
      </div>
    </div>
    <div id="inputs">
      <input className="input-one input-video" id="titulo-videobase" placeholder="Escreva um espaço em branco se não houver" />
      <input className="input-one input-video" id="link-videobase" placeholder="Escreva um espaço em branco se não houver" />
      <input className="input-one input-video" id="sinopse-videobase" placeholder="Escreva um espaço em branco se não houver" />
    </div>
  </div>

const ParagrafoVideoBase = () =>
  <div className="rowOne">
    <h2 className="headerFirstDiv">Coloque os dados corretamente para gerar.</h2>
  </div>

const PreviewVideoBase = () =>
  <div>
    <div className="preview">
      <div id="headerPreviewVideo">
        <h4 id="simulacaoCanvas" style={{fontFamily: 'Raleway', fontWeight: 'bold'}}><i class="fas fa-photo-video pr-3"></i>SIMULAÇÃO CANVAS</h4>
      </div>
      <div id="preview-canvas-videobase"></div>
    </div>
    <div id="textAreaVideo"></div>
  </div>

class GerarVideoBase extends Component {
  componentDidMount() {
    let botaoGerarVideo = document.getElementById('gerarBotaoVideoBase')
    botaoGerarVideo.onclick = () => {
      ReactDOM.render(<GerarVideoBaseFunction />, document.getElementById('preview-canvas-videobase'));
      let headerPreview = document.getElementById('headerPreviewVideo');
      let preview = document.getElementById('preview-canvas-videobase');
      let inputs = document.getElementsByClassName('input-video')
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
    document.getElementById('gerarBotaoVideoBase').innerHTML = 'Copiado'
    document.getElementById('gerarBotaoVideoBase').style.fontWeight = 'lighter'
    document.getElementById('gerarBotaoVideoBase').style.fontStyle = 'italic'
  }

  returnHtml = () => {
    document.getElementById('gerarBotaoVideoBase').innerHTML = 'Gerar'
    document.getElementById('gerarBotaoVideoBase').style.fontWeight = 'bold'
    document.getElementById('gerarBotaoVideoBase').style.fontStyle = 'normal'
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
        <button className="ml-1 pl-0 pt-0" id="gerarBotaoVideoBase">Gerar</button>
      </div>
    )
  }
}

const GerarVideoBaseFunction = () => {
  let tituloVideobase = document.getElementById('titulo-videobase').value
  let videoVideobase = document.getElementById('link-videobase').value
  let sinopseVideobase = document.getElementById('sinopse-videobase').value
  let videobase = {
    titulo: tituloVideobase,
    video: videoVideobase,
    sinopse: sinopseVideobase
  }
  if (videobase.titulo !== "" && videobase.video !== "") {
    return (
      <div className="graduation">
        <div className="container">
          <div className="content-item video primary">
            <div className="icon">
              <img src="https://assets.univesp.br/canvas/img/video.svg" />
            </div>
            <div className="content">
              <h5>Vídeo-base</h5>
              <h2>{videobase.titulo}</h2>
            </div>
          </div>
          <div className="content-item-body">
            <iframe src={videobase.video.replace("https://youtu.be/", 'https://www.youtube.com/embed/')} width="300" height="150" allowfullscreen="allowfullscreen"></iframe>
            <div class="synopsis"><p>{videobase.sinopse}</p></div>
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
