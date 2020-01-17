import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import cry from '../../images/crying.gif'
import '../../styles/scss/videosbase.scss'
import '../../styles/scss/menuSemanas.scss'

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
        <label className="label-one" htmlFor="semana1">Semana 1</label>
      </div>
      <div className="form-group">
        <label className="label-one" htmlFor="semana2">Semana 2</label>
      </div>
      <div className="form-group">
        <label className="label-one" htmlFor="semana3">Semana 3</label>
      </div>
      <div className="form-group">
        <label className="label-one" htmlFor="semana3">Semana 4</label>
      </div>
      <div className="form-group">
        <label className="label-one" htmlFor="semana3">Semana 5</label>
      </div>
      <div className="form-group">
        <label className="label-one" htmlFor="semana3">Semana 6</label>
      </div>
      <div className="form-group">
        <label className="label-one" htmlFor="semana3">Semana 7</label>
      </div>
      <div className="form-group">
        <label className="label-one" htmlFor="semana3">Semana 8</label>
      </div>
    </div>
    <div className="gridInputsSemanas">
      <div id="inputs">
        <input className="input-one input-video" type="date" defaultValue="" id="data-semana1"/>
        <input className="input-one input-video" type="date" defaultValue="" id="data-semana2"/>
        <input className="input-one input-video" type="date" defaultValue="" id="data-semana3"/>
        <input className="input-one input-video" type="date" defaultValue="" id="data-semana4"/>
        <input className="input-one input-video" type="date" defaultValue="" id="data-semana5"/>
        <input className="input-one input-video" type="date" defaultValue="" id="data-semana6"/>
        <input className="input-one input-video" type="date" defaultValue="" id="data-semana7"/>
        <input className="input-one input-video" type="date" defaultValue="" id="data-semana8"/>
      </div>
      <div id="inputs2">
          <input className="input-one input-video" id="tema-semana1" placeholder="Insira o Tema da Semana 1" />
          <input className="input-one input-video" id="tema-semana2" placeholder="Insira o Tema da Semana 2" />
          <input className="input-one input-video" id="tema-semana3" placeholder="Insira o Tema da Semana 3" />
          <input className="input-one input-video" id="tema-semana4" placeholder="Insira o Tema da Semana 4" />
          <input className="input-one input-video" id="tema-semana5" placeholder="Insira o Tema da Semana 5" />
          <input className="input-one input-video" id="tema-semana6" placeholder="Insira o Tema da Semana 6" />
          <input className="input-one input-video" id="tema-semana7" placeholder="Insira o Tema da Semana 7" />
          <input className="input-one input-video" id="tema-semana8" placeholder="Insira o Tema da Semana 8" />
      </div>
      <div id="inputs3">
          <input className="input-one input-video" id="link-semana1" placeholder="Insira o link da Semana 1" />
          <input className="input-one input-video" id="link-semana2" placeholder="Insira o link da Semana 2" />
          <input className="input-one input-video" id="link-semana3" placeholder="Insira o link da Semana 3" />
          <input className="input-one input-video" id="link-semana4" placeholder="Insira o link da Semana 4" />
          <input className="input-one input-video" id="link-semana5" placeholder="Insira o link da Semana 5" />
          <input className="input-one input-video" id="link-semana6" placeholder="Insira o link da Semana 6" />
          <input className="input-one input-video" id="link-semana7" placeholder="Insira o link da Semana 7" />
          <input className="input-one input-video" id="link-semana8" placeholder="Insira o link da Semana 8" />
      </div>
    </div>
  </div>




const ParagrafoVideoBase = () =>
  <div className="rowOne">
    <h2 className="headerFirstDiv" id="testebim">Coloque os dados corretamente para gerar.</h2>
    <button className="pl-0 pt-0" id="botaoBimestres">1º Bimestre</button>
  </div>

const PreviewVideoBase = () =>
  <div>
    <div className="preview" style={{display: 'none'}}>
      <div id="headerPreviewVideo">
        <h4 id="simulacaoCanvas" style={{fontFamily: 'Raleway', fontWeight: 'bold', display: 'none'}}><i className="fas fa-photo-video pr-3"></i>SIMULAÇÃO CANVAS</h4>
      </div>
      <div id="preview-canvas-videobase"></div>
    </div>
    <div id="textAreaVideo"></div>
  </div>

class GerarVideoBase extends Component {
  componentDidMount() {
    let botaoGerarVideo = document.getElementById('gerarBotaoMenuSemanas')
    botaoGerarVideo.onclick = () => {
      ReactDOM.render(<GerarVideoBaseFunction />, document.getElementById('preview-canvas-videobase'));
      let headerPreview = document.getElementById('headerPreviewVideo');
      let preview = document.getElementById('preview-canvas-videobase');
      let inputs = document.getElementsByClassName('input-video')
      if (inputs.value !== '') {
        // console.log(preview.innerHTML.indexOf('<br>'));
        this.copyToClipboard(preview.innerHTML);
        headerPreview.style.display = "block";
        headerPreview.style.background = "white";
        preview.style.background = "white";
        this.switchHtml()
        setTimeout(this.returnHtml, 1000)
      }
    }
    geraData1Bim();
  }

  switchHtml = () => {
    document.getElementById('gerarBotaoMenuSemanas').innerHTML = 'Copiado'
    document.getElementById('gerarBotaoMenuSemanas').style.fontWeight = 'lighter'
    document.getElementById('gerarBotaoMenuSemanas').style.fontStyle = 'italic'
  }

  returnHtml = () => {
    document.getElementById('gerarBotaoMenuSemanas').innerHTML = 'Gerar'
    document.getElementById('gerarBotaoMenuSemanas').style.fontWeight = 'bold'
    document.getElementById('gerarBotaoMenuSemanas').style.fontStyle = 'normal'
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
        <button className="pl-0 pt-0" id="gerarBotaoMenuSemanas">Gerar</button>
      </div>
    )
  }
}

const GerarVideoBaseFunction = () => {
  let dataSemana1 = document.getElementById('data-semana1').value
  let dataSemana2 = document.getElementById('data-semana2').value
  let dataSemana3 = document.getElementById('data-semana3').value
  let dataSemana4 = document.getElementById('data-semana4').value
  let dataSemana5 = document.getElementById('data-semana5').value
  let dataSemana6 = document.getElementById('data-semana6').value
  let dataSemana7 = document.getElementById('data-semana7').value
  let dataSemana8 = document.getElementById('data-semana8').value

  let temaSemana1 = document.getElementById('tema-semana1').value.trim();
  let temaSemana2 = document.getElementById('tema-semana2').value.trim();
  let temaSemana3 = document.getElementById('tema-semana3').value.trim();
  let temaSemana4 = document.getElementById('tema-semana4').value.trim();
  let temaSemana5 = document.getElementById('tema-semana5').value.trim();
  let temaSemana6 = document.getElementById('tema-semana6').value.trim();
  let temaSemana7 = document.getElementById('tema-semana7').value.trim();
  let temaSemana8 = document.getElementById('tema-semana8').value.trim();

  let linkSemana1 = document.getElementById('link-semana1').value.trim();
  let linkSemana2 = document.getElementById('link-semana2').value.trim();
  let linkSemana3 = document.getElementById('link-semana3').value.trim();
  let linkSemana4 = document.getElementById('link-semana4').value.trim();
  let linkSemana5 = document.getElementById('link-semana5').value.trim();
  let linkSemana6 = document.getElementById('link-semana6').value.trim();
  let linkSemana7 = document.getElementById('link-semana7').value.trim();
  let linkSemana8 = document.getElementById('link-semana8').value.trim();

  let menuSemanas = {
    date1: dataSemana1,
    date2: dataSemana2,
    date3: dataSemana3,
    date4: dataSemana4,
    date5: dataSemana5,
    date6: dataSemana6,
    date7: dataSemana7,
    date8: dataSemana8,
    tema1: temaSemana1,
    tema2: temaSemana2,
    tema3: temaSemana3,
    tema4: temaSemana4,
    tema5: temaSemana5,
    tema6: temaSemana6,
    tema7: temaSemana7,
    tema8: temaSemana8,
    link1: linkSemana1,
    link2: linkSemana2,
    link3: linkSemana3,
    link4: linkSemana4,
    link5: linkSemana5,
    link6: linkSemana6,
    link7: linkSemana7,
    link8: linkSemana8
  }

  if (menuSemanas.date1 !== "" && menuSemanas.date2 == "" && menuSemanas.date3 == "" && menuSemanas.date4 == "" && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 == "" && menuSemanas.tema3 == "" && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 == "" && menuSemanas.link3 == "" && menuSemanas.link4 == "" && menuSemanas.link5 == "" && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return (
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date1)[2]}
            <br />
            {transformaData(menuSemanas.date1)[1]}
            <span>
            {transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>{menuSemanas.tema1}</h1>
          <a class="overlay" href={menuSemanas.link1}></a>
        </div>
      </div>
    )

  } else if (menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 == "" && menuSemanas.date4 == "" && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 == "" && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 == "" && menuSemanas.link4 == "" && menuSemanas.link5 == "" && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return (
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date1)[2]}
            <br />
            {transformaData(menuSemanas.date1)[1]}
            <span>
            {transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>{menuSemanas.tema1}</h1>
          <a class="overlay" href={menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date2)[2]}
            <br />
            {transformaData(menuSemanas.date2)[1]}
            <span>
            {transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>{menuSemanas.tema2}</h1>
          <a class="overlay" href={menuSemanas.link2}></a>
        </div>
      </div>
    )

  } else if (menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 == "" && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 == "" && menuSemanas.link5 == "" && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return (
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date1)[2]}
            <br />
            {transformaData(menuSemanas.date1)[1]}
            <span>
            {transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>{menuSemanas.tema1}</h1>
          <a class="overlay" href={menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date2)[2]}
            <br />
            {transformaData(menuSemanas.date2)[1]}
            <span>
            {transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>{menuSemanas.tema2}</h1>
          <a class="overlay" href={menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date3)[2]}
            <br />
            {transformaData(menuSemanas.date3)[1]}
            <span>
            {transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>{menuSemanas.tema3}</h1>
          <a class="overlay" href={menuSemanas.link3}></a>
        </div>
      </div>
    )

  } else if (menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 == "" && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return (
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date1)[2]}
            <br />
            {transformaData(menuSemanas.date1)[1]}
            <span>
            {transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>{menuSemanas.tema1}</h1>
          <a class="overlay" href={menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date2)[2]}
            <br />
            {transformaData(menuSemanas.date2)[1]}
            <span>
            {transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>{menuSemanas.tema2}</h1>
          <a class="overlay" href={menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date3)[2]}
            <br />
            {transformaData(menuSemanas.date3)[1]}
            <span>
            {transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>{menuSemanas.tema3}</h1>
          <a class="overlay" href={menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date4)[2]}
            <br />
            {transformaData(menuSemanas.date4)[1]}
            <span>
            {transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>{menuSemanas.tema4}</h1>
          <a class="overlay" href={menuSemanas.link4}></a>
        </div>
      </div>
    )

  } else if (menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 == "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return (
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date1)[2]}
            <br />
            {transformaData(menuSemanas.date1)[1]}
            <span>
            {transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>{menuSemanas.tema1}</h1>
          <a class="overlay" href={menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date2)[2]}
            <br />
            {transformaData(menuSemanas.date2)[1]}
            <span>
            {transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>{menuSemanas.tema2}</h1>
          <a class="overlay" href={menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date3)[2]}
            <br />
            {transformaData(menuSemanas.date3)[1]}
            <span>
            {transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>{menuSemanas.tema3}</h1>
          <a class="overlay" href={menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date4)[2]}
            <br />
            {transformaData(menuSemanas.date4)[1]}
            <span>
            {transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>{menuSemanas.tema4}</h1>
          <a class="overlay" href={menuSemanas.link4}></a>
        </div>
        <div class="container title semana-5 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date5)[2]}
            <br />
            {transformaData(menuSemanas.date5)[1]}
            <span>
            {transformaData(menuSemanas.date5)[0]}
            </span>
          </div>
          <span>5</span>
          <h1>{menuSemanas.tema5}</h1>
          <a class="overlay" href={menuSemanas.link5}></a>
        </div>
      </div>
    )

  } else if (menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return (
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date1)[2]}
            <br />
            {transformaData(menuSemanas.date1)[1]}
            <span>
            {transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>{menuSemanas.tema1}</h1>
          <a class="overlay" href={menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date2)[2]}
            <br />
            {transformaData(menuSemanas.date2)[1]}
            <span>
            {transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>{menuSemanas.tema2}</h1>
          <a class="overlay" href={menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date3)[2]}
            <br />
            {transformaData(menuSemanas.date3)[1]}
            <span>
            {transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>{menuSemanas.tema3}</h1>
          <a class="overlay" href={menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date4)[2]}
            <br />
            {transformaData(menuSemanas.date4)[1]}
            <span>
            {transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>{menuSemanas.tema4}</h1>
          <a class="overlay" href={menuSemanas.link4}></a>
        </div>
        <div class="container title semana-5 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date5)[2]}
            <br />
            {transformaData(menuSemanas.date5)[1]}
            <span>
            {transformaData(menuSemanas.date5)[0]}
            </span>
          </div>
          <span>5</span>
          <h1>{menuSemanas.tema5}</h1>
          <a class="overlay" href={menuSemanas.link5}></a>
        </div>
        <div class="container title semana-6 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date6)[2]}
            <br />
            {transformaData(menuSemanas.date6)[1]}
            <span>
            {transformaData(menuSemanas.date6)[0]}
            </span>
          </div>
          <span>6</span>
          <h1>{menuSemanas.tema6}</h1>
          <a class="overlay" href={menuSemanas.link6}></a>
        </div>
      </div>
    )

  } else if (menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return (
      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date1)[2]}
            <br />
            {transformaData(menuSemanas.date1)[1]}
            <span>
            {transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>{menuSemanas.tema1}</h1>
          <a class="overlay" href={menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date2)[2]}
            <br />
            {transformaData(menuSemanas.date2)[1]}
            <span>
            {transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>{menuSemanas.tema2}</h1>
          <a class="overlay" href={menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date3)[2]}
            <br />
            {transformaData(menuSemanas.date3)[1]}
            <span>
            {transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>{menuSemanas.tema3}</h1>
          <a class="overlay" href={menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date4)[2]}
            <br />
            {transformaData(menuSemanas.date4)[1]}
            <span>
            {transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>{menuSemanas.tema4}</h1>
          <a class="overlay" href={menuSemanas.link4}></a>
        </div>
        <div class="container title semana-5 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date5)[2]}
            <br />
            {transformaData(menuSemanas.date5)[1]}
            <span>
            {transformaData(menuSemanas.date5)[0]}
            </span>
          </div>
          <span>5</span>
          <h1>{menuSemanas.tema5}</h1>
          <a class="overlay" href={menuSemanas.link5}></a>
        </div>
        <div class="container title semana-6 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date6)[2]}
            <br />
            {transformaData(menuSemanas.date6)[1]}
            <span>
            {transformaData(menuSemanas.date6)[0]}
            </span>
          </div>
          <span>6</span>
          <h1>{menuSemanas.tema6}</h1>
          <a class="overlay" href={menuSemanas.link6}></a>
        </div>
        <div class="container title semana-7 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date7)[2]}
            <br />
            {transformaData(menuSemanas.date7)[1]}
            <span>
            {transformaData(menuSemanas.date7)[0]}
            </span>
          </div>
          <span>7</span>
          <h1>{menuSemanas.tema7}</h1>
          <a class="overlay" href={menuSemanas.link7}></a>
        </div>
      </div>
    )

  } else if (menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return (

      <div class="container desbloqueio">
        <h2>Menu das Semanas</h2>
        <div class="container title semana-1 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date1)[2]}
            <br />
            {transformaData(menuSemanas.date1)[1]}
            <span>
            {transformaData(menuSemanas.date1)[0]}
            </span>
          </div>
          <span>1</span>
          <h1>{menuSemanas.tema1}</h1>
          <a class="overlay" href={menuSemanas.link1}></a>
        </div>
        <div class="container title semana-2 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date2)[2]}
            <br />
            {transformaData(menuSemanas.date2)[1]}
            <span>
            {transformaData(menuSemanas.date2)[0]}
            </span>
          </div>
          <span>2</span>
          <h1>{menuSemanas.tema2}</h1>
          <a class="overlay" href={menuSemanas.link2}></a>
        </div>
        <div class="container title semana-3 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date3)[2]}
            <br />
            {transformaData(menuSemanas.date3)[1]}
            <span>
            {transformaData(menuSemanas.date3)[0]}
            </span>
          </div>
          <span>3</span>
          <h1>{menuSemanas.tema3}</h1>
          <a class="overlay" href={menuSemanas.link3}></a>
        </div>
        <div class="container title semana-4 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date4)[2]}
            <br />
            {transformaData(menuSemanas.date4)[1]}
            <span>
            {transformaData(menuSemanas.date4)[0]}
            </span>
          </div>
          <span>4</span>
          <h1>{menuSemanas.tema4}</h1>
          <a class="overlay" href={menuSemanas.link4}></a>
        </div>
        <div class="container title semana-5 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date5)[2]}
            <br />
            {transformaData(menuSemanas.date5)[1]}
            <span>
            {transformaData(menuSemanas.date5)[0]}
            </span>
          </div>
          <span>5</span>
          <h1>{menuSemanas.tema5}</h1>
          <a class="overlay" href={menuSemanas.link5}></a>
        </div>
        <div class="container title semana-6 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date6)[2]}
            <br />
            {transformaData(menuSemanas.date6)[1]}
            <span>
            {transformaData(menuSemanas.date6)[0]}
            </span>
          </div>
          <span>6</span>
          <h1>{menuSemanas.tema6}</h1>
          <a class="overlay" href={menuSemanas.link6}></a>
        </div>
        <div class="container title semana-7 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date7)[2]}
            <br />
            {transformaData(menuSemanas.date7)[1]}
            <span>
            {transformaData(menuSemanas.date7)[0]}
            </span>
          </div>
          <span>7</span>
          <h1>{menuSemanas.tema7}</h1>
          <a class="overlay" href={menuSemanas.link7}></a>
        </div>
        <div class="container title semana-8 desabilitada">
          <div class="before">
            {transformaData(menuSemanas.date8)[2]}
            <br />
            {transformaData(menuSemanas.date8)[1]}
            <span>
            {transformaData(menuSemanas.date8)[0]}
            </span>
          </div>
          <span>8</span>
          <h1>{menuSemanas.tema8}</h1>
          <a class="overlay" href={menuSemanas.link8}></a>
        </div>
      </div>

    )
  } else {

    alert('Por favor, preencha com os dados de uma ou mais semanas');

    return (
      <div></div>
    )
  }
}

function transformaData(x){
  let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  let y = x.split('-');
  y[1] = meses[parseInt(y[1])-1];
  return(y);
}

// --- Código do botão Bimestre. ps: para atualizar o botão, altere as datas ---

function geraData1Bim(){
  $("#botaoBimestres").click(function(){
    let sem1 = document.getElementById('data-semana1').value
    let sem2 = document.getElementById('data-semana2').value
    let sem3 = document.getElementById('data-semana3').value
    let sem4 = document.getElementById('data-semana4').value
    let sem5 = document.getElementById('data-semana5').value
    let sem6 = document.getElementById('data-semana6').value
    let sem7 = document.getElementById('data-semana7').value
    let sem8 = document.getElementById('data-semana8').value

    var res1 = sem1.replace("", "2020-03-02");
    document.getElementById("data-semana1").value = res1;

    var res2 = sem2.replace("", "2020-03-09");
    document.getElementById("data-semana2").value = res2;

    var res3 = sem3.replace("", "2020-03-16");
    document.getElementById("data-semana3").value = res3;

    var res4 = sem4.replace("", "2020-03-23");
    document.getElementById("data-semana4").value = res4;

    var res5 = sem5.replace("", "2020-03-30");
    document.getElementById("data-semana5").value = res5;

    var res6 = sem6.replace("", "2020-04-06");
    document.getElementById("data-semana6").value = res6;

    var res7 = sem7.replace("", "2020-04-13");
    document.getElementById("data-semana7").value = res7;

    var res8 = sem8.replace("", "2020-04-20");
    document.getElementById("data-semana8").value = res8;
  });
};
