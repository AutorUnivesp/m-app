import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/autocomplete'
import 'jquery-ui/themes/base/autocomplete.css';
import Select2 from 'select2'
import cry from '../../images/crying.gif'
import '../../styles/scss/videosbase.scss'
import '../../styles/scss/menuSemanas.scss'
import Tabletop from 'tabletop';

export default () =>
  <div className='gridVideosBase' style={{marginBottom: '50px'}}>
    <div>
      <ParagrafoVideoBase />
      <InputsVideoBase />
      <GerarVideoBase />
      <GerarCabecalho />
    </div>
    <PreviewVideoBase />
  </div>

// ---------          COMEÇO DO HTML ------------------

const InputsVideoBase = () =>
  <div className="rowTwo">
    <button className="pl-0 pt-0" id="botaoSemanal">Semanal</button>
    <button className="pl-0 pt-0" id="botaoSemestral">Quinzenal</button>
    <div id="labels" style={{marginTop: '50px'}}>
      <div className="form-group">
        <label className="label-one" htmlFor="semana1">Semana 1*</label>
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
    <div className="gridInputsSemanas" style={{marginTop: '50px'}}>
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

    <button className="pl-0 pt-0" id="botaoAjuda" >+Ajuda</button>

    <div id="myModal" className="modal">
      <div className="modal-content">
        <span id="closeButton" className="close">&times;</span>
        <h2 style={{color: '#543c52', marginLeft: '8%'}}>Guia de Uso - Construtor da Página Inicial</h2>
        <br /><br />

        <span id="perguntaModal1" className="perguntaModal">
          <p style={{marginLeft: '1%', marginTop: '1.5%'}}>Quero construir apenas a parte do Menu Semanas</p>
        </span>

        <span id="respostaModal1" className="respostaModal">
          <p style={{marginLeft: '1%', marginTop: '1%'}}>Preencha <strong>somente</strong> os inputs da seção "Menu Semanas". Coloque os dados de pelo menos 1 semana, sempre a partir da Semana 1 (não é possível gerar o HTML inserindo os dados a partir da semana 3, por exemplo).</p>
        </span>

        <br />

        <span id="perguntaModal2" className="perguntaModal">
          <p style={{marginLeft: '1%', marginTop: '1.5%'}}>Quero construir a página inicial completa, porém sem a parte do vídeo de apresentação e/ou sem a parte do planejamento de estudo</p>
        </span>

        <span id="respostaModal2" className="respostaModal">
          <p style={{marginLeft: '1%', marginTop: '1%'}}>- Caso queira a página inicial sem a parte do vídeo de apresentação, apenas ignore os campos da seção "Vídeo de Apresentação". <br /> - Caso queira a página inicial sem a parte do planejamento de estudos, apenas ignore os campos da seção "Planejamento de Estudos". <br /> - Caso queira a página inicial sem a parte do vídeo de apresentação e sem a parte do planejamento de estudos, apenas ignore os campos das duas seções <br /><br /> <strong>Obs.:</strong> em todos os casos NÃO é necessário inserir um espaço para que o construtor funcione.</p>
        </span>

        <br />

        <span id="perguntaModal3" className="perguntaModal">
          <p style={{marginLeft: '1%', marginTop: '1.5%'}}>Tenho link do youtube do vídeo de apresentação mas não tenho link do download</p>
        </span>

        <span id="respostaModal3" className="respostaModal">
          <p style={{marginLeft: '1%', marginTop: '1%'}}>Coloque o link do youtube normalmente e, no campo do download coloque um espaço.</p>
        </span>

        <br />

        <span id="perguntaModal4" className="perguntaModal">
          <p style={{marginLeft: '1%', marginTop: '1.5%'}}>Como gerar o código da página de cabeçalho?</p>
        </span>

        <span id="respostaModal4" className="respostaModal">
          <p style={{marginLeft: '1%', marginTop: '1%'}}>Os campos <strong>obrigatórios</strong> para que o <strong>construtor de cabeçalho</strong> funcione são os da seção "Topo da Página", o campo "Modelo" e os temas de pelo menos 7 semanas.</p>
          <p style={{marginLeft: '1%', marginTop: '1%'}}>Clique no botão "Cabeçalho" ao fim da página para gerar o código.</p>
          <p style={{marginLeft: '1%', marginTop: '1%'}}><strong>Obs.:</strong> não há problema se os campos não obrigatórios estiverem preenchidos.</p>
        </span>

        <br /><br />

        <h3 style={{color: '#543c52', fontWeight: '400'}}>Atenção:</h3>

        <br />

        <p style={{color: '#543c52', fontWeight: '400'}}>• Caso queira construir a página inicial completa, insira os dados de pelo menos <strong>7 semanas</strong>.</p>

        <p style={{color: '#543c52', fontWeight: '400'}}>• Os campos <strong>obrigatórios</strong> para o construtor funcionar corretamente (indicados com *) são os das seções "Topo da Página" e "Formadores", ou pelo menos 1 semana completa da seção "Menu Semanas". <strong>Nesses campos, se não houver informação, deixe um espaço em branco</strong>.</p>

        <p style={{color: '#543c52', fontWeight: '400'}}>• O formato correto a ser inserido no campo "Banner" é o seguinte: <strong>banner_Disciplina.jpg</strong>. Já o formato correto a ser inserido no campo "Foto" é o seguinte: <strong>Foto_do_Professor.jpg</strong></p>

        <p style={{color: '#543c52', fontWeight: '400'}}>• Para inserir automaticamente as datas semanais vigentes no bimestre, clique no botão "Semanal". Para inserir automaticamente as datas semestrais, clique no botão "Quinzenal".</p>

        <p style={{color: '#543c52', fontWeight: '400'}}>• O construtor <strong>não</strong> irá funcionar se alguma semana da seção "Menu Semanas" estiver incompleta (sem data, tema ou link). <strong>Nesses campos, se não houver informação, deixe um espaço em branco</strong></p>

        <p style={{color: '#543c52', fontWeight: '400'}}>• Na seção "Planejamento de Estudos", caso ainda não haja a data da prova, selecione alguma data para alterar posteriormente. Caso contrário, o construtor não ira funcionar corretamente.</p>

        <p style={{color: '#543c52', fontWeight: '400'}}>• O campo "Modelo" é obrigatório apenas para o construtor da página de cabeçalho. Caso esteja fazendo <strong>apenas</strong> a página inicial, ignore esse campo.</p>

      </div>
    </div>
    <br /><br /><br /><br />

      <div style={{marginLeft: '10%'}}>
      <form>
      <span style={{marginLeft: '20px', color: '#543c52'}}>Modelo:</span> <br />
      <select id="modeloField" className="input-one input-video">
        <option disabled selected value="">Indique o Modelo</option>
        <option value="Antigo">Antigo</option>
        <option value="Clássico">Clássico</option>
        <option value="Sona">Sona</option>
      </select>
      </form>
      </div>

      <div className="TopoInicial">
        <h2 className="headerFirstDiv" id="testebim">Topo da Página</h2>

        <div className="gridInputsTopo">

         <div>
            <form>
            <span style={{marginLeft: '20px', color: '#543c52'}}>Curso:*</span> <br />
            <input id="curseField" className="input-one input-video" type="text" placeholder="Escreva um espaço em branco se não houver" />
            </form>
        </div>

          <form>
          <span style={{marginLeft: '20px', color: '#543c52'}}>Disciplina:*</span> <br />
          <div><input id="disciplinaName" defaultValue="" className="input-one input-video" type="text" placeholder="Escreva um espaço em branco se não houver" /></div>
          </form>

          <form>
          <span style={{marginLeft: '20px', color: '#543c52'}}>Banner:*</span> <br />
          <div><input id="bannerField" className="input-one input-video" type="text" placeholder="Escreva um espaço em branco se não houver" /></div>
          </form>

          <form>
          <span id="plano" style={{color: '#543c52'}}>Plano de Ensino:*</span> <br />
          <div><input id="planoField" className="input-one input-video" type="text" placeholder="Escreva um espaço em branco se não houver" /></div>
          </form>

        </div>
      </div>

      <div className="Apresentacao">
        <h2 className="headerFirstDiv" id="testebim">Vídeo de Apresentação</h2>

        <div className="gridInputsApresentacao">
          <div><input id="videoLink" className="input-one input-video" placeholder="Insira o link do vídeo" /></div>
          <div><input id="downloadLink" className="input-one input-video" placeholder="Insira o link de download" /></div>
        </div>
      </div>

    <div className="topoPlanejamento">
      <h2 className="headerFirstDiv" id="testebim">Planejamento de Estudos</h2>


      <div className="gridPlanejamento">
        <div>
          <form>
          <span style={{marginLeft: '20px', color: '#543c52'}}>Carga Horária:</span> <br />
          <select id="caixaTeste" className="input-one input-video">
            <option disabled selected value="">Indique a qtde de horas</option>
            <option value="80" id="oitenta" >80</option>
            <option value="40">40</option>
            <option value="20">20</option>
          </select>
          </form>
        </div>
        <div>
          <form>
          <span style={{marginLeft: '20px', color: '#543c52'}}>Horas / Semana:</span> <br />
          <input id="horaSemana" type="text" className="input-one input-video" placeholder="Horas/Semana de estudo" />
          </form>
        </div>

        <div>
          <form>
          <span style={{marginLeft: '20px', color: '#543c52'}}>Data da Prova:</span> <br />
          <input id="dataProva" className="input-one input-video" type="date" />
          </form>
        </div>

        <div>
        <form>
        <span style={{marginLeft: '20px', color: '#543c52'}}></span>
        <br />
          <input id="dataProva2" className="input-one input-video" type="date" style={{display: 'none'}} />
          <button className="pl-0 pt-0" id="botaoProva2" style={{marginLeft: '40%', fontSize: '12pt'}}>Adicionar <br /> Data</button>
        </form>
        </div>
      </div>
    </div>

    <div className="topoFormadores">
      <h2 className="headerFirstDiv" id="testebim">Formador(a)</h2>

      <div className="gridTopoFormadores">

        <form>
        <span style={{marginLeft: '20px', color: '#543c52'}}>Nome:*</span> <br />
        <div><input id="professorName" className="input-one input-video" placeholder="Escreva um espaço em branco se não houver" /></div>
        </form>

        <form>
        <span style={{marginLeft: '20px', color: '#543c52'}}>Foto:*</span> <br />
        <div><input id="professorFoto" className="input-one input-video" placeholder="Escreva um espaço em branco se não houver" /></div>
        </form>

        <form>
        <span style={{marginLeft: '20px', color: '#543c52'}}>Currículo:*</span> <br />
        <div><input id="curriculoField" className="input-one input-video" placeholder="Escreva um espaço em branco se não houver" /></div>
        </form>

      </div>
    </div>

    <div>
      <button className="pl-0 pt-0" id="botaoResumoVisual" style={{marginLeft: '12%', fontSize: '12pt'}}>Adicionar <br /> Resumo Visual</button>
        <br />
      <input id="resumoVisual" className="input-one input-video" placeholder="Insira o link do resumo visual" style={{display: 'none', marginTop: '5%', marginLeft: '12%'}} />
    </div>

    <div><h2 className="headerFirstDiv" id="testebim">Menu Semanas</h2></div>
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

  onchange = e => {
    const { bannersAPI } = this.state
    const filteredBanners = bannersAPI.filter(dis => {
      return dis.Disciplina.toLowerCase().includes(e.target.value.toLowerCase())
       || dis.Codigo.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filteredBanners
    })
  }

  state = {
    disciplines: [],
    filteredDisciplines: [],
    filteredBanners: [],
    bannersAPI: []
  }

  componentDidMount() {
    let botaoGerarVideo = document.getElementById('gerarBotaoMenuSemanas')
    botaoGerarVideo.onclick = () => {
      ReactDOM.render(<GerarPaginaInicialFunction />, document.getElementById('preview-canvas-videobase'));
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
    Tabletop.init({
      key: '1wkwej7BvHKeBf1FlZEwV7yvKsfvGEwautlqi133qP3k',
      callback: googleData => {
        this.setState({
          bannersAPI: googleData,
          filteredBanners: googleData
        })
      },
      simpleSheet: true
    });
    geraDataSemanal();
    geraDataSemestral();
    horaSemana();
    modal();
    perguntaModalToggle();
    adicionaData2();
    adicionaResumo();
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

class GerarCabecalho extends Component {
  componentDidMount() {
    let botaoGerarCabecalho = document.getElementById('botaoCabecalho')
    botaoGerarCabecalho.onclick = () => {
      ReactDOM.render(<GerarCabecalhoFunction />, document.getElementById('preview-canvas-videobase'));
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
    Tabletop.init({
      key: '1wkwej7BvHKeBf1FlZEwV7yvKsfvGEwautlqi133qP3k',
      callback: googleData => {
        this.setState({
          bannersAPI: googleData,
          filteredBanners: googleData
        })
      },
      simpleSheet: true
    });
  }
  switchHtml = () => {
    document.getElementById('botaoCabecalho').innerHTML = 'Copiado'
    document.getElementById('botaoCabecalho').style.fontWeight = 'lighter'
    document.getElementById('botaoCabecalho').style.fontStyle = 'italic'
  }

  returnHtml = () => {
    document.getElementById('botaoCabecalho').innerHTML = 'Cabeçalho'
    document.getElementById('botaoCabecalho').style.fontWeight = 'bold'
    document.getElementById('botaoCabecalho').style.fontStyle = 'normal'
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
        <div style={{marginTop: '-9.3%'}}>
        <button style={{width: '150px'}} className="pl-0 pt-0" id="botaoCabecalho">Cabeçalho</button>
        </div>
      </div>
    )
  }
}


const GerarCabecalhoFunction = () => {
  let modeloCabecalho = document.getElementById('modeloField').value;

  let dataSemana1 = document.getElementById('data-semana1').value;
  let dataSemana2 = document.getElementById('data-semana2').value;
  let dataSemana3 = document.getElementById('data-semana3').value;
  let dataSemana4 = document.getElementById('data-semana4').value;
  let dataSemana5 = document.getElementById('data-semana5').value;
  let dataSemana6 = document.getElementById('data-semana6').value;
  let dataSemana7 = document.getElementById('data-semana7').value;
  let dataSemana8 = document.getElementById('data-semana8').value;

  let temaSemana1 = document.getElementById('tema-semana1').value;
  let temaSemana2 = document.getElementById('tema-semana2').value;
  let temaSemana3 = document.getElementById('tema-semana3').value;
  let temaSemana4 = document.getElementById('tema-semana4').value;
  let temaSemana5 = document.getElementById('tema-semana5').value;
  let temaSemana6 = document.getElementById('tema-semana6').value;
  let temaSemana7 = document.getElementById('tema-semana7').value;
  let temaSemana8 = document.getElementById('tema-semana8').value;

  let linkSemana1 = document.getElementById('link-semana1').value;
  let linkSemana2 = document.getElementById('link-semana2').value;
  let linkSemana3 = document.getElementById('link-semana3').value;
  let linkSemana4 = document.getElementById('link-semana4').value;
  let linkSemana5 = document.getElementById('link-semana5').value;
  let linkSemana6 = document.getElementById('link-semana6').value;
  let linkSemana7 = document.getElementById('link-semana7').value;
  let linkSemana8 = document.getElementById('link-semana8').value;

  let nomeDisciplina = document.getElementById('disciplinaName').value;
  let bannerDisciplina = document.getElementById('bannerField').value;
  let cursoName = document.getElementById('curseField').value;
  let planoEnsino = document.getElementById('planoField').value;

  let qtdeHoras = document.getElementById('caixaTeste').value;
  let horaSemana = document.getElementById('horaSemana').value;
  let dataProva = document.getElementById('dataProva').value;
  let data2Prova = document.getElementById('dataProva2').value;

  let cabecalho = {
    date1: dataSemana1, date2: dataSemana2, date3: dataSemana3, date4: dataSemana4,
    date5: dataSemana5, date6: dataSemana6, date7: dataSemana7, date8: dataSemana8,
    tema1: temaSemana1, tema2: temaSemana2, tema3: temaSemana3, tema4: temaSemana4,
    tema5: temaSemana5, tema6: temaSemana6, tema7: temaSemana7, tema8: temaSemana8,
    link1: linkSemana1, link2: linkSemana2, link3: linkSemana3, link4: linkSemana4,
    link5: linkSemana5, link6: linkSemana6, link7: linkSemana7, link8: linkSemana8,
    disciplina: nomeDisciplina, banner: bannerDisciplina, curso: cursoName,
    plano: planoEnsino, horas: qtdeHoras, horaSemanal: horaSemana, prova: dataProva, prova2: data2Prova, modelo: modeloCabecalho
  }

  // cabecalho1Data 7
  if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" && cabecalho.plano !== "" && cabecalho.horas !== "" && cabecalho.horaSemanal !== "" && cabecalho.prova !== "" && cabecalho.prova2 == "" || cabecalho.date1 !== "" && cabecalho.date2 !== "" || cabecalho.date3 !== "" || cabecalho.date4 !== "" || cabecalho.date5 !== "" || cabecalho.date6 !== "" || cabecalho.date7 !== "" && cabecalho.tema1 !== "" && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== "" || cabecalho.link1 !== "" || cabecalho.link2 !== "" || cabecalho.link3 !== "" || cabecalho.link4 !== "" || cabecalho.link5 !== "" || cabecalho.link6 !== "" || cabecalho.link7 !== "" && cabecalho.date8 == "" && cabecalho.tema8 == "" && cabecalho.link8 == "" && cabecalho.modelo !== "") {
    return(
      <div class="header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">{cabecalho.curso}</span>
        <h1 class="discipline-name">{cabecalho.disciplina}</h1>
        <h2 class="tipo">{cabecalho.modelo}</h2>
        <a class="btn btn-syllabus" target="_blank" href={cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{cabecalho.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{cabecalho.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong>{transformaData(cabecalho.prova)[2]}/{transformaData2(cabecalho.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong> ser&aacute; informada por e-mail.</p>
        </div>
        <br />
        <span class="semana-1">1</span>
        <h1 class="semana-1">{cabecalho.tema1}</h1>
        <span class="semana-2">2</span>
        <h1 class="semana-2">{cabecalho.tema2}</h1>
        <span class="semana-3">3</span>
        <h1 class="semana-3">{cabecalho.tema3}</h1>
        <span class="semana-4">4</span>
        <h1 class="semana-4">{cabecalho.tema4}</h1>
        <span class="semana-5">5</span>
        <h1 class="semana-5">{cabecalho.tema5}</h1>
        <span class="semana-6">6</span>
        <h1 class="semana-6">{cabecalho.tema6}</h1>
        <span class="semana-7">7</span>
        <h1 class="semana-7">{cabecalho.tema7}</h1>
      </div>
    )

    // cabecalho2Datas 7
  } else if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" && cabecalho.plano !== "" && cabecalho.horas !== "" && cabecalho.horaSemanal !== "" && cabecalho.prova !== "" && cabecalho.prova2 !== "" || cabecalho.date1 !== "" && cabecalho.date2 !== "" || cabecalho.date3 !== "" || cabecalho.date4 !== "" || cabecalho.date5 !== "" || cabecalho.date6 !== "" || cabecalho.date7 !== "" && cabecalho.tema1 !== "" && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== "" || cabecalho.link1 !== "" || cabecalho.link2 !== "" || cabecalho.link3 !== "" || cabecalho.link4 !== "" || cabecalho.link5 !== "" || cabecalho.link6 !== "" || cabecalho.link7 !== "" && cabecalho.date8 == "" && cabecalho.tema8 == "" && cabecalho.link8 == "" && cabecalho.modelo !== "") {

    return(
      <div class="header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">{cabecalho.curso}</span>
        <h1 class="discipline-name">{cabecalho.disciplina}</h1>
        <h2 class="tipo">{cabecalho.modelo}</h2>
        <a class="btn btn-syllabus" target="_blank" href={cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{cabecalho.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{cabecalho.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong>{transformaData(cabecalho.prova)[2]}/{transformaData2(cabecalho.prova)[1]}</strong> e <strong> {transformaData(cabecalho.prova2)[2]}/{transformaData2(cabecalho.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong> ser&aacute; informada por e-mail.</p>
        </div>
        <br />
        <span class="semana-1">1</span>
        <h1 class="semana-1">{cabecalho.tema1}</h1>
        <span class="semana-2">2</span>
        <h1 class="semana-2">{cabecalho.tema2}</h1>
        <span class="semana-3">3</span>
        <h1 class="semana-3">{cabecalho.tema3}</h1>
        <span class="semana-4">4</span>
        <h1 class="semana-4">{cabecalho.tema4}</h1>
        <span class="semana-5">5</span>
        <h1 class="semana-5">{cabecalho.tema5}</h1>
        <span class="semana-6">6</span>
        <h1 class="semana-6">{cabecalho.tema6}</h1>
        <span class="semana-7">7</span>
        <h1 class="semana-7">{cabecalho.tema7}</h1>
      </div>
    )

    // cabecalhoSemEstudo 7
  } else if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" && cabecalho.plano !== "" && cabecalho.horas == "" && cabecalho.horaSemanal == "0" && cabecalho.prova == "" && cabecalho.prova2 == "" || cabecalho.date1 !== "" && cabecalho.date2 !== "" || cabecalho.date3 !== "" || cabecalho.date4 !== "" || cabecalho.date5 !== "" || cabecalho.date6 !== "" || cabecalho.date7 !== "" && cabecalho.tema1 !== "" && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== "" || cabecalho.link1 !== "" || cabecalho.link2 !== "" || cabecalho.link3 !== "" || cabecalho.link4 !== "" || cabecalho.link5 !== "" || cabecalho.link6 !== "" || cabecalho.link7 !== "" && cabecalho.date8 == "" && cabecalho.tema8 == "" && cabecalho.link8 == "" && cabecalho.modelo !== "") {

    return(
      <div class="header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">{cabecalho.curso}</span>
        <h1 class="discipline-name">{cabecalho.disciplina}</h1>
        <h2 class="tipo">{cabecalho.modelo}</h2>
        <a class="btn btn-syllabus" target="_blank" href={cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
        <br />
        <span class="semana-1">1</span>
        <h1 class="semana-1">{cabecalho.tema1}</h1>
        <span class="semana-2">2</span>
        <h1 class="semana-2">{cabecalho.tema2}</h1>
        <span class="semana-3">3</span>
        <h1 class="semana-3">{cabecalho.tema3}</h1>
        <span class="semana-4">4</span>
        <h1 class="semana-4">{cabecalho.tema4}</h1>
        <span class="semana-5">5</span>
        <h1 class="semana-5">{cabecalho.tema5}</h1>
        <span class="semana-6">6</span>
        <h1 class="semana-6">{cabecalho.tema6}</h1>
        <span class="semana-7">7</span>
        <h1 class="semana-7">{cabecalho.tema7}</h1>
      </div>
    )

    // cabecalho1Data 8
  } else if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" && cabecalho.plano !== "" && cabecalho.horas !== "" && cabecalho.horaSemanal !== "" && cabecalho.prova !== "" && cabecalho.prova2 == "" || cabecalho.date1 !== "" && cabecalho.date2 !== "" || cabecalho.date3 !== "" || cabecalho.date4 !== "" || cabecalho.date5 !== "" || cabecalho.date6 !== "" || cabecalho.date7 !== "" && cabecalho.tema1 !== "" && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== "" || cabecalho.link1 !== "" || cabecalho.link2 !== "" || cabecalho.link3 !== "" || cabecalho.link4 !== "" || cabecalho.link5 !== "" || cabecalho.link6 !== "" || cabecalho.link7 !== "" || cabecalho.date8 !== "" && cabecalho.tema8 !== "" || cabecalho.link8 !== "" && cabecalho.modelo !== "") {

    return(
      <div class="header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">{cabecalho.curso}</span>
        <h1 class="discipline-name">{cabecalho.disciplina}</h1>
        <h2 class="tipo">{cabecalho.modelo}</h2>
        <a class="btn btn-syllabus" target="_blank" href={cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{cabecalho.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{cabecalho.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong>{transformaData(cabecalho.prova)[2]}/{transformaData2(cabecalho.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong> ser&aacute; informada por e-mail.</p>
        </div>
        <br />
        <span class="semana-1">1</span>
        <h1 class="semana-1">{cabecalho.tema1}</h1>
        <span class="semana-2">2</span>
        <h1 class="semana-2">{cabecalho.tema2}</h1>
        <span class="semana-3">3</span>
        <h1 class="semana-3">{cabecalho.tema3}</h1>
        <span class="semana-4">4</span>
        <h1 class="semana-4">{cabecalho.tema4}</h1>
        <span class="semana-5">5</span>
        <h1 class="semana-5">{cabecalho.tema5}</h1>
        <span class="semana-6">6</span>
        <h1 class="semana-6">{cabecalho.tema6}</h1>
        <span class="semana-7">7</span>
        <h1 class="semana-7">{cabecalho.tema7}</h1>
        <span class="semana-8">8</span>
        <h1 class="semana-8">{cabecalho.tema8}</h1>
      </div>
    )

    // cabecalho2Datas 8
  } else if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" && cabecalho.plano !== "" && cabecalho.horas !== "" && cabecalho.horaSemanal !== "" && cabecalho.prova !== "" && cabecalho.prova2 !== "" || cabecalho.date1 !== "" && cabecalho.date2 !== "" || cabecalho.date3 !== "" || cabecalho.date4 !== "" || cabecalho.date5 !== "" || cabecalho.date6 !== "" || cabecalho.date7 !== "" && cabecalho.tema1 !== "" && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== "" || cabecalho.link1 !== "" || cabecalho.link2 !== "" || cabecalho.link3 !== "" || cabecalho.link4 !== "" || cabecalho.link5 !== "" || cabecalho.link6 !== "" || cabecalho.link7 !== "" || cabecalho.date8 !== "" && cabecalho.tema8 !== "" || cabecalho.link8 !== "" && cabecalho.modelo !== "") {

    return(
      <div class="header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">{cabecalho.curso}</span>
        <h1 class="discipline-name">{cabecalho.disciplina}</h1>
        <h2 class="tipo">{cabecalho.modelo}</h2>
        <a class="btn btn-syllabus" target="_blank" href={cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{cabecalho.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{cabecalho.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong>{transformaData(cabecalho.prova)[2]}/{transformaData2(cabecalho.prova)[1]}</strong> e <strong> {transformaData(cabecalho.prova2)[2]}/{transformaData2(cabecalho.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong> ser&aacute; informada por e-mail.</p>
        </div>
        <br />
        <span class="semana-1">1</span>
        <h1 class="semana-1">{cabecalho.tema1}</h1>
        <span class="semana-2">2</span>
        <h1 class="semana-2">{cabecalho.tema2}</h1>
        <span class="semana-3">3</span>
        <h1 class="semana-3">{cabecalho.tema3}</h1>
        <span class="semana-4">4</span>
        <h1 class="semana-4">{cabecalho.tema4}</h1>
        <span class="semana-5">5</span>
        <h1 class="semana-5">{cabecalho.tema5}</h1>
        <span class="semana-6">6</span>
        <h1 class="semana-6">{cabecalho.tema6}</h1>
        <span class="semana-7">7</span>
        <h1 class="semana-7">{cabecalho.tema7}</h1>
        <span class="semana-8">8</span>
        <h1 class="semana-8">{cabecalho.tema8}</h1>
      </div>
    )

    // cabecalhoSemEstudo 8
  } else if (cabecalho.disciplina !== "" && cabecalho.banner !== "" && cabecalho.curso !== "" && cabecalho.plano !== "" && cabecalho.horas == "" && cabecalho.horaSemanal == "0" && cabecalho.prova == "" && cabecalho.prova2 == "" || cabecalho.date1 !== "" && cabecalho.date2 !== "" || cabecalho.date3 !== "" || cabecalho.date4 !== "" || cabecalho.date5 !== "" || cabecalho.date6 !== "" || cabecalho.date7 !== "" && cabecalho.tema1 !== "" && cabecalho.tema2 !== "" && cabecalho.tema3 !== "" && cabecalho.tema4 !== "" && cabecalho.tema5 !== "" && cabecalho.tema6 !== "" && cabecalho.tema7 !== "" || cabecalho.link1 !== "" || cabecalho.link2 !== "" || cabecalho.link3 !== "" || cabecalho.link4 !== "" || cabecalho.link5 !== "" || cabecalho.link6 !== "" || cabecalho.link7 !== "" || cabecalho.date8 !== "" && cabecalho.tema8 !== "" || cabecalho.link8 !== "" && cabecalho.modelo !== "") {

    return(
      <div class="header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + cabecalho.banner} alt="" /> <span class="course-name">{cabecalho.curso}</span>
        <h1 class="discipline-name">{cabecalho.disciplina}</h1>
        <h2 class="tipo">{cabecalho.modelo}</h2>
        <a class="btn btn-syllabus" target="_blank" href={cabecalho.plano.replace("view?usp=sharing", "preview")}>Plano de Ensino</a>
        <br />
        <span class="semana-1">1</span>
        <h1 class="semana-1">{cabecalho.tema1}</h1>
        <span class="semana-2">2</span>
        <h1 class="semana-2">{cabecalho.tema2}</h1>
        <span class="semana-3">3</span>
        <h1 class="semana-3">{cabecalho.tema3}</h1>
        <span class="semana-4">4</span>
        <h1 class="semana-4">{cabecalho.tema4}</h1>
        <span class="semana-5">5</span>
        <h1 class="semana-5">{cabecalho.tema5}</h1>
        <span class="semana-6">6</span>
        <h1 class="semana-6">{cabecalho.tema6}</h1>
        <span class="semana-7">7</span>
        <h1 class="semana-7">{cabecalho.tema7}</h1>
        <span class="semana-8">8</span>
        <h1 class="semana-8">{cabecalho.tema8}</h1>
      </div>
    )

  } else {
    alert('Ops! Parece que algo deu errado! Por favor, preencha todos os dados obrigatórios do construtor da página de cabeçalho. Se ainda estiver com problemas, consulte o guia através do botão +Ajuda.')

    return(
      null
    )
  }
}

const GerarPaginaInicialFunction = () => {
  let dataSemana1 = document.getElementById('data-semana1').value;
  let dataSemana2 = document.getElementById('data-semana2').value;
  let dataSemana3 = document.getElementById('data-semana3').value;
  let dataSemana4 = document.getElementById('data-semana4').value;
  let dataSemana5 = document.getElementById('data-semana5').value;
  let dataSemana6 = document.getElementById('data-semana6').value;
  let dataSemana7 = document.getElementById('data-semana7').value;
  let dataSemana8 = document.getElementById('data-semana8').value;

  let temaSemana1 = document.getElementById('tema-semana1').value;
  let temaSemana2 = document.getElementById('tema-semana2').value;
  let temaSemana3 = document.getElementById('tema-semana3').value;
  let temaSemana4 = document.getElementById('tema-semana4').value;
  let temaSemana5 = document.getElementById('tema-semana5').value;
  let temaSemana6 = document.getElementById('tema-semana6').value;
  let temaSemana7 = document.getElementById('tema-semana7').value;
  let temaSemana8 = document.getElementById('tema-semana8').value;

  let linkSemana1 = document.getElementById('link-semana1').value;
  let linkSemana2 = document.getElementById('link-semana2').value;
  let linkSemana3 = document.getElementById('link-semana3').value;
  let linkSemana4 = document.getElementById('link-semana4').value;
  let linkSemana5 = document.getElementById('link-semana5').value;
  let linkSemana6 = document.getElementById('link-semana6').value;
  let linkSemana7 = document.getElementById('link-semana7').value;
  let linkSemana8 = document.getElementById('link-semana8').value;

  let nomeDisciplina = document.getElementById('disciplinaName').value;
  let bannerDisciplina = document.getElementById('bannerField').value;
  let cursoName = document.getElementById('curseField').value;
  let planoEnsino = document.getElementById('planoField').value;

  let apresentacaoLink = document.getElementById('videoLink').value;
  let downloadField = document.getElementById('downloadLink').value;
  let downloadTratadoField = downloadField.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=");

  let qtdeHoras = document.getElementById('caixaTeste').value;
  let horaSemana = document.getElementById('horaSemana').value;
  let dataProva = document.getElementById('dataProva').value;
  let data2Prova = document.getElementById('dataProva2').value;

  let profName = document.getElementById('professorName').value;
  let profImg = document.getElementById('professorFoto').value;
  let curriculoProf = document.getElementById('curriculoField').value

  let resumoVisual = document.getElementById('resumoVisual').value

  let menuSemanas = {
    date1: dataSemana1, date2: dataSemana2, date3: dataSemana3, date4: dataSemana4,
    date5: dataSemana5, date6: dataSemana6, date7: dataSemana7, date8: dataSemana8,
    tema1: temaSemana1, tema2: temaSemana2, tema3: temaSemana3, tema4: temaSemana4,
    tema5: temaSemana5, tema6: temaSemana6, tema7: temaSemana7, tema8: temaSemana8,
    link1: linkSemana1, link2: linkSemana2, link3: linkSemana3, link4: linkSemana4,
    link5: linkSemana5, link6: linkSemana6, link7: linkSemana7, link8: linkSemana8,
    disciplina: nomeDisciplina, banner: bannerDisciplina, curso: cursoName,
    plano: planoEnsino, video: apresentacaoLink, download: downloadTratadoField, horas: qtdeHoras, horaSemanal: horaSemana, prova: dataProva, prova2: data2Prova,
    professor: profName, foto: profImg, curriculo: curriculoProf, resumo: resumoVisual
  }

  // TopoSemanasSemVideo 7
  if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemVideoComResumo 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemVideoComResumo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemVideo2DatasComResumo 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong> e <strong> {transformaData(menuSemanas.prova2)[2]}/{transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemVideo2DatasComResumo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong> e <strong> {transformaData(menuSemanas.prova2)[2]}/{transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemVideo2Datas 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong> e <strong> {transformaData(menuSemanas.prova2)[2]}/{transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemVideo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemVideo2Datas 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong> e <strong> {transformaData(menuSemanas.prova2)[2]}/{transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemEstudo 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemEstudo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemEstudoComResumo 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemEstudoComResumo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemPlanejamento_e_Video 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemPlanejamento_e_Video 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemPlanejamento_e_Video_ComResumo 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasSemPlanejamento_e_Video_ComResumo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="intro">
          <div class="container">
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanas 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasComResumo 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanas2Datas 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong> e <strong> {transformaData(menuSemanas.prova2)[2]}/{transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanas2DatasComResumo 7
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong> e <strong> {transformaData(menuSemanas.prova2)[2]}/{transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanas 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanasComResumo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 == "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente no dia <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong>. Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanas2Datas 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong> e <strong> {transformaData(menuSemanas.prova2)[2]}/{transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )

    // TopoSemanas2DatasComResumo 8
  } else if (menuSemanas.disciplina !== "" && menuSemanas.banner !== "" && menuSemanas.curso !== "" && menuSemanas.plano !== "" && menuSemanas.video !== "" && menuSemanas.download !== "" && menuSemanas.horas !== "" && menuSemanas.horaSemanal !== "" && menuSemanas.prova !== "" && menuSemanas.prova2 !== "" && menuSemanas.professor !== "" && menuSemanas.foto !== "" && menuSemanas.curriculo !== "" && menuSemanas.resumo !== "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

    return(
      <div class="graduation">
        <div class="container header"><img class="img-banner" src={'https://assets.univesp.br/canvas/img/banners/' + menuSemanas.banner} />
          <div class="container">
            <div><span class="course-name">{menuSemanas.curso}</span>
              <h1 class="discipline-name">{menuSemanas.disciplina}</h1>
            </div>
            <a class="btn btn-syllabus" href={menuSemanas.plano.replace("view?usp=sharing", "preview")} target="_blank" rel="noopener noreferrer">Plano de Ensino</a>
          </div>
        </div>
        <div class="planejamento-estudo">
          <h1>Planejamento de Estudos</h1>
          <p style={{marginTop: '0'}}>Esta disciplina &eacute; de <strong>{menuSemanas.horas} horas</strong></p>
          <p>Est&aacute; previsto que voc&ecirc; use cerca de <strong>{menuSemanas.horaSemanal} horas/semana</strong></p>
          <hr />
          <p>A <strong>prova</strong> desta disciplina ser&aacute; aplicada exclusivamente nos dias <strong> {transformaData(menuSemanas.prova)[2]}/{transformaData2(menuSemanas.prova)[1]}</strong> e <strong> {transformaData(menuSemanas.prova2)[2]}/{transformaData2(menuSemanas.prova2)[1]}</strong>. <br /> Qualquer <strong>exce&ccedil;&atilde;o</strong>, será informada por e-mail.</p>
          <p>A nota da disciplina &eacute; calculada: (<span class="tooltipbr" data-title="Nota da prova regular">N1</span> x 0,6) + (<span class="tooltipbr" data-title="M&eacute;dia das notas obtidas nas atividades realizadas no AVA.">N2</span> x 0,4) =
            <span class="tooltipbr" data-title="M&eacute;dia Final">MF</span><a class="" style={{marginLeft: '18%', textDecoration: 'none'}} title=""
              href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5d5e97cb7c1bd15a5a1803db/Normas_Acad_micas_2018_Univesp.pdf" target="_blank" rel="noopener noreferrer">+ Info</a></p>
        </div>
        <div class="intro">
          <div class="container">
          <h2>Apresenta&ccedil;&atilde;o</h2>
          <iframe src={menuSemanas.video.replace("https://youtu.be/", "https://www.youtube.com/embed/")} allowfullscreen="allowfullscreen"></iframe>
          <div class="btn-bar"><a className="btn btn-padrao icon-cloud-download" href={menuSemanas.download.replace("/view?usp=sharing", "")} rel="noopener noreferrer">Download do Video</a></div>
            <div class="container">
              <h2>Formador</h2>
              <div class="teacher"><img src={'https://assets.univesp.br/canvas/img/prof/' + menuSemanas.foto} />
                <div>
                  <h3>Prof. Dr. {menuSemanas.professor}</h3>
                  <h4>Autor</h4>
                  <p>{menuSemanas.curriculo}</p>
                </div>
              </div>
            </div>
            <a href={menuSemanas.resumo.replace("view?usp=sharing", "preview")} target="_blank" style={{textDecoration: 'none'}}>
              <div class="resumo-visual">
              <div>
              <h3>Resumo Visual da Disciplina</h3>
              <p>Acompanhe seu progresso nesta lista de conhecimentos, habilidades e competências desenvolvidos ao longo da semanas.</p>
              </div>
              <img style={{maxWidth: '850px'}} src={'https://assets.univesp.br/canvas/img/resumovisual2.svg'} />
              </div>
            </a>
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
          </div>
        </div>
      </div>
    )

    // MenuSemanasOnly 1
  } else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 == "" && menuSemanas.date3 == "" && menuSemanas.date4 == "" && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 == "" && menuSemanas.tema3 == "" && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 == "" && menuSemanas.link3 == "" && menuSemanas.link4 == "" && menuSemanas.link5 == "" && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

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

    // MenuSemanasOnly 2
  } else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 == "" && menuSemanas.date4 == "" && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 == "" && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 == "" && menuSemanas.link4 == "" && menuSemanas.link5 == "" && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

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

    // MenuSemanasOnly 3
  } else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 == "" && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 == "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 == "" && menuSemanas.link5 == "" && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

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

    // MenuSemanasOnly 4
  } else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 == "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 == "" && menuSemanas.tema6 == "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 == "" && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

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

    // MenuSemanasOnly 5
  } else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 == "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 == "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 == "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

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

    // MenuSemanasOnly 6
  } else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 == "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 == "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 == "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

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

    // MenuSemanasOnly 7
  } else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 == "" && menuSemanas.tema8 == "" && menuSemanas.link8 == "") {

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

    // MenuSemanasOnly 8
  } else if (menuSemanas.disciplina == "" && menuSemanas.banner == "" && menuSemanas.curso == "" && menuSemanas.plano == "" && menuSemanas.video == "" && menuSemanas.download == "" && menuSemanas.horas == "" && menuSemanas.horaSemanal == "0" && menuSemanas.prova == "" && menuSemanas.prova2 == "" && menuSemanas.professor == "" && menuSemanas.foto == "" && menuSemanas.curriculo == "" && menuSemanas.resumo == "" && menuSemanas.date1 !== "" && menuSemanas.date2 !== "" && menuSemanas.date3 !== "" && menuSemanas.date4 !== "" && menuSemanas.date5 !== "" && menuSemanas.date6 !== "" && menuSemanas.date7 !== "" && menuSemanas.tema1 !== "" && menuSemanas.tema2 !== "" && menuSemanas.tema3 !== "" && menuSemanas.tema4 !== "" && menuSemanas.tema5 !== "" && menuSemanas.tema6 !== "" && menuSemanas.tema7 !== "" && menuSemanas.link1 !== "" && menuSemanas.link2 !== "" && menuSemanas.link3 !== "" && menuSemanas.link4 !== "" && menuSemanas.link5 !== "" && menuSemanas.link6 !== "" && menuSemanas.link7 !== "" && menuSemanas.date8 !== "" && menuSemanas.tema8 !== "" && menuSemanas.link8 !== "") {

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

    alert('Ops! Parece que algo deu errado! Por favor, preencha todos os dados obrigatórios* ou pelo menos a primeira semana da seção "Menu Semanas". Se ainda estiver com problemas, consulte o guia através do botão +Ajuda.');

    return (
      null
    )
  }
}

// -------------------------- FUNÇÕES -------------------------------------

function transformaData(x){
  let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  let y = x.split('-');
  y[1] = meses[parseInt(y[1])-1];
  return(y);
}

function transformaData2(x){
  let meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  let y = x.split('-');
  y[1] = meses[parseInt(y[1])-1];
  return(y);
}

// - Código gerador das datas semanais. ps: para atualizar o botão, altere as datas

function geraDataSemanal(){
  $("#botaoSemanal").click(function(){
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

//  Código gerador das datas semestrais. ps: para atualizar o botão, altere as datas
function geraDataSemestral(){
  $('#botaoSemestral').click(function(){
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

    var res2 = sem2.replace("", "2020-03-16");
    document.getElementById("data-semana2").value = res2;

    var res3 = sem3.replace("", "2020-03-30");
    document.getElementById("data-semana3").value = res3;

    var res4 = sem4.replace("", "2020-04-13");
    document.getElementById("data-semana4").value = res4;

    var res5 = sem5.replace("", "2020-05-04");
    document.getElementById("data-semana5").value = res5;

    var res6 = sem6.replace("", "2020-05-18");
    document.getElementById("data-semana6").value = res6;

    var res7 = sem7.replace("", "2020-06-01");
    document.getElementById("data-semana7").value = res7;

    var res8 = sem8.replace("", "2020-06-15");
    document.getElementById("data-semana8").value = res8;
  });
};

// Pega a carga horaria da disciplina e devolve a horas/semana de estudo
function horaSemana(){
  $( "#caixaTeste" ).change(function () {
    var str = "";
    $( "#caixaTeste option:selected" ).each(function() {
      str += $( this ).val();
    });
    var strDividido = str / 8
    $( "#horaSemana" ).val( strDividido );
  })
  .change();
};

// Adiciona / Remove uma 2ª data de prova
function adicionaData2(){
  var click = 0;
  $('#botaoProva2').click(function(){
    $('#dataProva2').slideToggle();
    $(this).text(function(i, old){
      return old == 'Remover Data' ? 'Adicionar Data' : 'Remover Data';
    });
    click++;
    if (click / 2 !== 0) {
      document.getElementById('dataProva2').value = "";
    };
  });
};

// Adiciona / Remove o resumo Visual
function adicionaResumo(){
  var clickResumo = 0;
  $('#botaoResumoVisual').click(function(){
    $('#resumoVisual').slideToggle();
    $(this).text(function(i, old){
      return old == 'Remover Resumo Visual' ? 'Adicionar Resumo Visual' : 'Remover Resumo Visual';
    });
    clickResumo++;
    if (clickResumo / 2 !== 0) {
      document.getElementById('resumoVisual').value = "";
    };
  });
};

// Alterna entre Hide/Show do modal e das respostas
function modal(){
  $('#botaoAjuda').click(function(){
    $('#myModal').slideToggle();
  });
  $('#closeButton').click(function(){
    $('#myModal').slideToggle();
  });
  $('#perguntaModal1').click(function(){
    $('#respostaModal1').toggle();
  });
  $('#perguntaModal2').click(function(){
    $('#respostaModal2').toggle();
  });
  $('#perguntaModal3').click(function(){
    $('#respostaModal3').toggle();
  });
  $('#perguntaModal4').click(function(){
    $('#respostaModal4').toggle();
  });
};

// Altera CSS da caixa da pergunta quando clicado
function perguntaModalToggle(){
  $('#perguntaModal1').click(function(){
    var pergunta1 = document.getElementById('perguntaModal1');
    pergunta1.classList.toggle("perguntaModalToggle");
  });
  $('#perguntaModal2').click(function(){
    var pergunta1 = document.getElementById('perguntaModal2');
    pergunta1.classList.toggle("perguntaModalToggle");
  });
  $('#perguntaModal3').click(function(){
    var pergunta1 = document.getElementById('perguntaModal3');
    pergunta1.classList.toggle("perguntaModalToggle");
  });
  $('#perguntaModal4').click(function(){
    var pergunta1 = document.getElementById('perguntaModal4');
    pergunta1.classList.toggle("perguntaModalToggle");
  });
};


// let tabelaTeste;
//
// function tabelaBanners() {
//   Tabletop.init( { key: '1wkwej7BvHKeBf1FlZEwV7yvKsfvGEwautlqi133qP3k',
//                     callback: function(data, tabletop) {
//                       tabelaTeste = data;
//                     },
//                     simpleSheet: true } )
//   let disTeste = document.getElementById('disTeste');
//   console.log(disTeste);
//   disTeste.addEventListener("input", buscaDisc);
// }
//
// window.addEventListener('DOMContentLoaded', tabelaBanners);
//
// function buscaDisc(){
//   let busca = document.getElementById('listaDiscip').getElementsByTagName('ul')[0];
//   busca.innerHTML = '';
//   busca.innerHTML += '<li>'  + this.value + '</li>';
// }
