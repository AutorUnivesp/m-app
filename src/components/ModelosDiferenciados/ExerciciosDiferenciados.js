import React, { Component } from 'react'
import Prism from "prismjs";
import { IconInstructureLine } from '@instructure/ui-icons'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/droppable'
import 'jquery-ui/ui/position'
import '../../css/index.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import '../../css/exsDiferenciados/profspage.css'
import '../../css/guia_canvas.css'
import '../../css/prism.css'
import '../../css/exsDiferenciados/modeloUm.css'
import '../../css/exsDiferenciados/modeloDois.css'
import '../../css/exsDiferenciados/modeloTres.css'
import '../../css/exsDiferenciados/modeloQuatro.css'
import '../../css/exsDiferenciados/modeloCinco.css'
import '../../css/exsDiferenciados/modeloSeis.css'
import '../../css/exsDiferenciados/modeloSete.css'

class ProfsPage extends Component {
  state = {
    diferenciados_data: []
  }

  componentDidMount() {
    this.receiveDifereciadosData()
  }


  receiveDifereciadosData = () => {
    fetch('https://raw.githubusercontent.com/AutorUnivesp/m-app/master/src/data/diferenciados.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          diferenciados_data: data.diferenciados
        })
        Prism.highlightAll()
      })
    })
    .catch(err => {
      console.log(`Request returned with an error: ${err}`)
    })
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
    const { diferenciados_data } = this.state
    return (
      <div>
        <div>
          <h1 className="exe-diferenciados font-weight-light py-2 text-center mx-auto">Exercícios Diferenciados | Univesp</h1>
        </div>
        <div className="gridProfsPage">
            <div className="list-group" id="list-tab" role="tablist">
              <a className="list-group-item-action active my-2" id="list-modelo1-list" data-toggle="list" href="#list-modelo1" role="tab" aria-controls="modelo1">MODELO 1 - SELECIONE A CERTA</a>
              <a className="list-group-item-action my-2" id="list-modelo2-list" data-toggle="list" href="#list-modelo2" role="tab" aria-controls="modelo2">MODELO 2 - CAIXA DE RESPOSTA CURTA</a>
              <a className="list-group-item-action my-2" id="list-modelo3-list" data-toggle="list" href="#list-modelo3" role="tab" aria-controls="modelo3">MODELO 3 - CAIXA DE RESPOSTA LONGA</a>
              <a className="list-group-item-action my-2" id="list-modelo4-list" data-toggle="list" href="#list-modelo4" role="tab" aria-controls="modelo4">MODELO 4 - DRAG AND DROP</a>
              <a className="list-group-item-action my-2" id="list-modelo5-list" data-toggle="list" href="#list-modelo5" role="tab" aria-controls="modelo5">MODELO 5 - CLICAR E SELECIONAR</a>
              <a className="list-group-item-action my-2" id="list-modelo6-list" data-toggle="list" href="#list-modelo6" role="tab" aria-controls="modelo6">MODELO 6 - CHECKBOX</a>
              <a className="list-group-item-action my-2" id="list-modelo7-list" data-toggle="list" href="#list-modelo7" role="tab" aria-controls="modelo7">MODELO 7 - MÚLTIPLA ESCOLHA</a>
            </div>

            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active bg-light" id="list-modelo1" role="tabpanel" aria-labelledby="list-modelo1-list">
                <ModeloUmDiferenciado />
                <pre className="line-numbers">
                  <span className="hide-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code1')
                    code1.style.display = 'none'
                  }}><i className="fas fa-caret-up px-1"></i></span>

                  <span className="show-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code1')
                    code1.style.display = 'block'
                  }}><i className="fas fa-caret-down px-1"></i></span>

                  <span className="badge badge-pill badge-light px-3" onClick={() => {
                    this.copyToClipboard(diferenciados_data[0].code)
                  }}>Copy</span><br/>

                  <code className="code language-markup" id="code1">
                  { diferenciados_data.length > 0 ? diferenciados_data[0].code : 'Aguardando dados'}
                  </code>
                </pre>
              </div>
              <div className="tab-pane fade bg-light" id="list-modelo2" role="tabpanel" aria-labelledby="list-modelo2-list">
                <ModeloDoisDiferenciado />
                <pre className="line-numbers">
                  <span className="hide-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code2')
                    code1.style.display = 'none'
                  }}><i className="fas fa-caret-up px-1"></i></span>

                  <span className="show-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code2')
                    code1.style.display = 'block'
                  }}><i className="fas fa-caret-down px-1"></i></span>

                  <span className="badge badge-pill badge-light px-3" onClick={() => {
                    this.copyToClipboard(diferenciados_data[1].code)
                  }}>Copy</span><br/>

                  <code className="code language-markup" id="code2">
                  { diferenciados_data.length > 0 ? diferenciados_data[1].code : 'Aguardando dados'}
                  </code>
                </pre>
              </div>
              <div className="tab-pane fade bg-light" id="list-modelo3" role="tabpanel" aria-labelledby="list-modelo3-list">
                <ModeloTresDiferenciado />
                <pre className="line-numbers">
                  <span className="hide-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code3')
                    code1.style.display = 'none'
                  }}><i className="fas fa-caret-up px-1"></i></span>

                  <span className="show-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code3')
                    code1.style.display = 'block'
                  }}><i className="fas fa-caret-down px-1"></i></span>

                  <span className="badge badge-pill badge-light px-3" onClick={() => {
                    this.copyToClipboard(diferenciados_data[2].code)
                  }}>Copy</span><br/>

                  <code className="code language-markup" id="code3">
                  { diferenciados_data.length > 0 ? diferenciados_data[2].code : 'Aguardando dados'}
                  </code>
                </pre>
              </div>
              <div className="tab-pane fade bg-light" id="list-modelo4" role="tabpanel" aria-labelledby="list-modelo4-list">
                <ModeloQuatroDiferenciado />
                <pre className="line-numbers">
                  <span className="hide-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code4')
                    code1.style.display = 'none'
                  }}><i className="fas fa-caret-up px-1"></i></span>

                  <span className="show-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code4')
                    code1.style.display = 'block'
                  }}><i className="fas fa-caret-down px-1"></i></span>

                  <span className="badge badge-pill badge-light px-3" onClick={() => {
                    this.copyToClipboard(diferenciados_data[3].code)
                  }}>Copy</span><br/>

                  <code className="code language-markup" id="code4">
                  { diferenciados_data.length > 0 ? diferenciados_data[3].code : 'Aguardando dados'}
                  </code>
                </pre>
              </div>
              <div className="tab-pane fade bg-light" id="list-modelo5" role="tabpanel" aria-labelledby="list-modelo5-list">
                <ModeloCincoDiferenciado />
                <pre className="line-numbers">
                  <span className="hide-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code5')
                    code1.style.display = 'none'
                  }}><i className="fas fa-caret-up px-1"></i></span>

                  <span className="show-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code5')
                    code1.style.display = 'block'
                  }}><i className="fas fa-caret-down px-1"></i></span>

                  <span className="badge badge-pill badge-light px-3" onClick={() => {
                    this.copyToClipboard(diferenciados_data[4].code)
                  }}>Copy</span><br/>

                  <code className="code language-markup" id="code5">
                  { diferenciados_data.length > 0 ? diferenciados_data[4].code : 'Aguardando dados'}
                  </code>
                </pre>
              </div>
              <div className="tab-pane fade bg-light" id="list-modelo6" role="tabpanel" aria-labelledby="list-modelo6-list">
                <ModeloSeisDiferenciado />
                <pre className="line-numbers">
                  <span className="hide-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code6')
                    code1.style.display = 'none'
                  }}><i className="fas fa-caret-up px-1"></i></span>

                  <span className="show-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code6')
                    code1.style.display = 'block'
                  }}><i className="fas fa-caret-down px-1"></i></span>

                  <span className="badge badge-pill badge-light px-3" onClick={() => {
                    this.copyToClipboard(diferenciados_data[5].code)
                  }}>Copy</span><br/>

                  <code className="code language-markup" id="code6">
                  { diferenciados_data.length > 0 ? diferenciados_data[5].code : 'Aguardando dados'}
                  </code>
                </pre>
              </div>
              <div className="tab-pane fade bg-light" id="list-modelo7" role="tabpanel" aria-labelledby="list-modelo7-list">
                <ModeloSeteDiferenciado />
                <pre className="line-numbers">
                  <span className="hide-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code7')
                    code1.style.display = 'none'
                  }}><i className="fas fa-caret-up px-1"></i></span>

                  <span className="show-button badge badge-pill" onClick={() => {
                    let code1 = document.getElementById('code7')
                    code1.style.display = 'block'
                  }}><i className="fas fa-caret-down px-1"></i></span>

                  <span className="badge badge-pill badge-light px-3" onClick={() => {
                    this.copyToClipboard(diferenciados_data[6].code)
                  }}>Copy</span><br/>

                  <code className="code language-markup" id="code7">
                  { diferenciados_data.length > 0 ? diferenciados_data[6].code : 'Aguardando dados'}
                  </code>
                </pre>
              </div>
            </div>

        </div>
      </div>
    )
  }
}

const ModeloUm = () => {
  return (
    <div id="card-inside">
      <div className="card-header" id="heading15">
        <h5 className="mb-0">
          <button className="btn btn-light collapsed" type="button" data-toggle="collapse" data-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
            <span>MODELO 1 - SELECIONE A CERTA</span>
          </button>
        </h5>
      </div>
      <div id="collapse15" className="collapse" aria-labelledby="heading15" data-parent="#accordionExample">
        <div className="card-body">
          <ModeloUmDiferenciado/ >
        </div>
      </div>
    </div>
  )
}

class ModeloUmDiferenciado extends Component {
  componentDidMount() {
    this.scriptModeloUm()
  }

  scriptModeloUm = () => {
    var maxErros = 2;
    var chances = [];

    $('.btn-challenge').click(function() {

      var position, questionPos, stringToInt, verifica;

      if ($(this).hasClass('certa')) {
        $(this).css('color', 'green');
        $(this).css('border', 'solid 2px green');
        $(this).parent(".alternativas").find(".feedback p:first-child").text("Certo!");
        $(this).siblings().prop('disabled', true);
      }
      else {
        $(this).css('color', 'red');
        $(this).css('border', 'solid 2px red');
        $(this).parent(".alternativas").find(".feedback p:first-child").text("Foi quase!");

        position = this.id;
        questionPos = position[0];
        stringToInt = parseInt(questionPos);
        chances.push(stringToInt);
        verifica = listaCheck(stringToInt, chances);
        if (verifica == maxErros) {
          $(this).siblings().prop('disabled', true);
          $(this).siblings('.certa').css('color', 'green');
          $(this).siblings('.certa').css('border', 'solid 2px green');
        }
      }
    });

    const listaCheck = function checkArray(num, lista) {
      let contaNum = 0;
      for (var j = 0; j < lista.length; j++) {
        if (lista[j] == num) {
          contaNum++;
        }
      }
      return contaNum;
    }
  }

  render() {
    return (
      <div className="ModeloUm">
        <div id="conteudo">
          <div className="item ativo">
            <ol className="lista-perguntas">
              <li> Pergunta 1
                <div className="alternativas">
                  <div id="1_a" className="btn-challenge certa">Alternativa 1</div>
                  <div id="1_b" className="btn-challenge">Alternativa 2</div>
                  <div className="feedback"><p id="1_p"></p></div>
                </div>
              </li>

              <li> Pergunta 2
                <div className="alternativas">
                  <div id="2_a" className="btn-challenge certa">Alternativa 1</div>
                  <div id="2_b" className="btn-challenge">Alternativa 2</div>
                  <div className="feedback"><p id="2_p"></p></div>
                </div>
              </li>

              <li> Pergunta 3
                <div className="alternativas">
                  <div id="3_a" className="btn-challenge certa">Alternativa 1</div>
                  <div id="3_b" className="btn-challenge">Alternativa 2</div>
                  <div className="feedback"><p id="3_p"></p></div>
                </div>
              </li>

              <li> Pergunta 4
                <div className="alternativas">
                  <div id="4_a" className="btn-challenge certa">Alternativa 1</div>
                  <div id="4_b" className="btn-challenge">Alternativa 2</div>
                  <div className="feedback"><p id="4_p"></p></div>
                </div>
              </li>

              <li> Pergunta 5
                <div className="alternativas">
                  <div id="5_a" className="btn-challenge certa">Alternativa 1</div>
                  <div id="5_b" className="btn-challenge">Alternativa 2</div>
                  <div id="5_c" className="btn-challenge">Alternativa 3</div>
                  <div id="5_d" className="btn-challenge">Alternativa 4</div>
                  <div className="feedback"><p id="5_p"></p></div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

const ModeloDois = () => {
  return (
    <div id="card-inside">
      <div className="card-header" id="headingFourteen">
        <h5 className="mb-0">
          <button className="btn btn-light collapsed" type="button" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
            <span>MODELO 2 - CAIXA DE RESPOSTA CURTA</span>
          </button>
        </h5>
      </div>
      <div id="collapseFourteen" className="collapse" aria-labelledby="headingFourteen" data-parent="#accordionExample">
        <div className="card-body">
          <ModeloDoisDiferenciado />
        </div>
      </div>
    </div>
  )
}

class ModeloDoisDiferenciado extends Component {

  componentDidMount() {
    this.scriptModeloDois()
  }

  scriptModeloDois = () => {
    $(`.botao-enviar-gabarito1`).click(function() {
        $('.collapse-cx-curta1').slideToggle('slow');
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
    $(`.botao-enviar-gabarito2`).click(function() {
        $('.collapse-cx-curta2').slideToggle('slow');
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
    $(`.botao-enviar-gabarito3`).click(function() {
        $('.collapse-cx-curta3').slideToggle('slow');
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
    $(`.botao-enviar-gabarito4`).click(function() {
        $('.collapse-cx-curta4').slideToggle('slow');
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
    $(`.botao-enviar-gabarito5`).click(function() {
        $('.collapse-cx-curta5').slideToggle('slow');
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
    $(`.botao-enviar-gabarito6`).click(function() {
        $('.collapse-cx-curta6').slideToggle('slow');
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
    $(`.botao-enviar-gabarito7`).click(function() {
        $('.collapse-cx-curta7').slideToggle('slow');
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
    $(`.botao-enviar-gabarito8`).click(function() {
        $('.collapse-cx-curta8').slideToggle('slow');
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
    $(`.botao-enviar-gabarito9`).click(function() {
        $('.collapse-cx-curta9').slideToggle('slow');
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
    $(`.botao-enviar-gabarito10`).click(function() {
        $('.collapse-cx-curta10').slideToggle('slow');
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
  }

  render() {
    return (
      <div className='ModeloDois'>
        <div className="content">
          <ol>
              <form className="formModelo1">
                  <li className="list-modelo1" >
                      <span className="perguntas" >Pergunta 1:</span><br />
                      <div className="div-cx-curta" >
                        <input className="form-cx-curta" type="text" name="input1" placeholder="Escreva aqui..." />
                        <div className="collapse-cx-curta1">
                            Resposta: xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </div>
                      </div>
                  </li>
                  <li className="list-modelo1" >
                      <span className="perguntas" >Pergunta 2:</span><br />
                      <div className="div-cx-curta" >
                        <input className="form-cx-curta" type="text" name="input2" placeholder="Escreva aqui..." />
                        <div className="collapse-cx-curta1">
                            Resposta: xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </div>
                      </div>
                  </li>
                  <li className="list-modelo1" >
                      <span className="perguntas" >Pergunta 3:</span><br />
                      <div className="div-cx-curta" >
                        <input className="form-cx-curta" type="text" name="input3" placeholder="Escreva aqui..." />
                        <div className="collapse-cx-curta1">
                            Resposta: xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </div>
                      </div>
                  </li>
                </form>
            </ol>
          </div>

          <div className="btn-cx-curta botao-enviar-gabarito1">
            Mostrar Gabarito
          </div>
        </div>
      )
    }
}

const ModeloTres = () => {
  return (
    <div id="card-inside">
      <div className="card-header" id="headingThirteen">
        <h5 className="mb-0">
          <button className="btn btn-light collapsed" type="button" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
            <span>MODELO 3 - CAIXA DE RESPOSTA LONGA</span>
          </button>
        </h5>
      </div>
      <div id="collapseThirteen" className="collapse" aria-labelledby="headingThirteen" data-parent="#accordionExample">
        <div className="card-body">
          <ModeloTresDiferenciado />
        </div>
      </div>
    </div>
  )
}

class ModeloTresDiferenciado extends Component {
  componentDidMount() {
    this.scriptModeloTres()
  }

  scriptModeloTres = () => {
    $(".btn-modelo3").click(function() {
        $(".collapse-modelo3").slideToggle();
        $(this).text(function(i, old) {
            return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
        });
    });
  }

  styleFirstSpan = {
    fontSize: '14pt',
    color: '#a01f1f'
  }

  styleResposta = {
    color: '#ff0000'
  }

  render() {
    return (
      <div className="container">
        <br /> <br />
        <div>
          <p className="paragraph-modelo3">
            <span style={this.styleFirstSpan}><strong>Pergunta 1</strong></span>&nbsp;
          </p>
          <p className='paragraph-two-modelo2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <textarea className="form-control-modelo3" rows="10" cols="70" placeholder="Digite sua resposta"></textarea>
        </div>
      	<div className="collapse-modelo3">
      		<p>
      			<span style={this.styleResposta}>Resposta:<br /><br />
      				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      			</span>
      		</p>
      	</div>
        <div className="btn-modelo3">
          Mostrar Gabarito
        </div>
      </div>
    )
  }
}

class ModeloQuatro extends Component {
  render() {
    return(
      <div id="card-four">
        <div className="card-header" id="headingTwelve">
          <h5 className="mb-0">
            <button className="btn btn btn-light collapsed" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
              <span>MODELO 4 - DRAG AND DROP</span>
            </button>
          </h5>
        </div>
        <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample">
          <div className="card-body">
            <ModeloQuatroDiferenciado />
          </div>
        </div>
      </div>
    )
  }
}

class ModeloQuatroDiferenciado extends Component {

  componentDidMount() {
    this.scriptModeloQuatro()
  }

  scriptModeloQuatro = () => {
    let draggables = $('.draggable-modelo4');
    let droppables = $('.dropabble-modelo4');
    let respostas = $('.resposta-certa');
    let imagem_certa = "url('https://assets.univesp.br/canvas/img/certo.png')";
    let imagem_errada = "url('https://assets.univesp.br/canvas/img/errado.png')";

    (function() {
      $('#btn-enviar-modelo4').on('click', function() {
        if ($('.dropada').length === $(droppables).length) {
          checkAll();
          $('#btn-gabarito-modelo4').on('click', function() {
            setGabarito();
          })
        } else {
          alerta();
        }
      })
      $('#btn-refazer-modelo4').on('click', function() {
        window.location.reload()
      })
    })();

    (function() {
      draggables.each(function() {
        $(this).draggable({
          revert: function(event) {
            $(this).data("uiDraggable").originalPosition = {
                top : 0,
                left : 0,
                color: 'black',
                backgroundColor: '#DEE5E8'
            };
            return !event;
          },
          revertDuration: 650,
        })
      })
    })();

    (function() {
      droppables.each(function() {
        $(this).droppable({
          tolerance: 'intersect',
          out: function(event, ui) {
            $(this).css('border', '3px dashed #61788A');
            if ($(this).hasClass('dropada')) {
              $(this).removeClass('dropada');
            }
          },
          drop: function (event, ui) {
            $(ui.draggable).css('background', '#61788a');
            $(ui.draggable).css('color', '#70dbed');
            $(ui.draggable).css('paddingLeft', 'auto');
            $(ui.draggable).css('paddingRight', 'auto');
            $(ui.draggable).position({
              of: $(this),
              my: 'left center',
              at: 'left center'
            })
            $(this).html($(ui.draggable).html());
            $(this).addClass('dropada');
            $(this).css('color', 'transparent');
            $(this).css('border', '2px solid transparent');
            $(this).css('user-select', 'none');
          }
        })
      })
    })();

    function checkAll() {
      for (var i = 0; i < droppables.length; i++) {
        if ($(droppables[i]).html() === $(respostas[i]).html()) {
          $(draggables[i]).css('border', '2px solid green');
          $(draggables[i]).css('background', '#f7f7f7');
          $(draggables[i]).css('color', '#354451');
          $(draggables[i]).css('backgroundImage', imagem_certa);
          $(draggables[i]).css('backgroundRepeat', 'no-repeat');
          $(droppables[i]).addClass('changingBorder');
          $(draggables[i]).draggable( "destroy" );

        } else {
          $(draggables[i]).css('border', '2px solid red');
          $(draggables[i]).css('background', '#f7f7f7');
          $(draggables[i]).css('color', '#354451');
          $(draggables[i]).css('backgroundImage', imagem_errada);
          $(draggables[i]).css('backgroundRepeat', 'no-repeat');
          $(droppables[i]).addClass('changingBorder');
          $(draggables[i]).draggable( "destroy" );
        }
      }
    }

    function setGabarito() {
      for (var i = 0; i < draggables.length; i++) {
        $(respostas).css('border', '2px solid #70dbed');
        $(respostas).css('backgroundImage', 'none');
        $(respostas).css('background', '#f7f7f7');
        $(respostas).css('color', '#14aadb');
        $(respostas).css('font-weight', 'bold');
        $(respostas).css('margin-left', '-116%');
        $(respostas).addClass('draggable-modelo4');
        $(draggables[i]).replaceWith(
          $(respostas[i])
        );
      }
    }

    function alerta() {
      $('#alerta-modelo4').show();
      $('#alerta-modelo4').css('textAlign', 'center');
      $('#alerta-modelo4').css('width', '350px');
      $('#botaoOk-modelo4').on('click', function() {
        $('#alerta-modelo4').hide();
      })
    }
  }

  styleParagraph = {
    fontSize: '16pt',
    color: '#000000'
  }

  render() {
    return (
      <div className="ModeloQuatroDif">
        <div className="alerta2 px-2" id="alerta-modelo4">
          <p style={this.styleParagraph}>Faça todas as questões antes de enviar.</p>
          <div className="botaoOk" id="botaoOk-modelo4">Ok</div>
        </div>
        <div className="gabarito" style={this.styleNones}>
          <div className="resposta-certa">Substituir aqui pela Alternativa 1</div>
          <div className="resposta-certa">Substituir aqui pela Alternativa 2</div>
          <div className="resposta-certa">Substituir aqui pela Alternativa 3</div>
          <div className="resposta-certa">Substituir aqui pela Alternativa 4</div>
          <div className="resposta-certa">Substituir aqui pela Alternativa 5</div>
        </div>

        <div className="inicio-diferenciados">
          <p>Substituir aqui pelo texto da pergunta</p>
        </div>

        <div className="border-diferenciados">
          <div className="gridContainer-modelo4">
            <div className="topicos-modelo4">Substituir aqui pelo texto do primeiro tópico</div>
            <div className="dropabble-modelo4"></div>
            <div className="draggable-modelo4">Substituir aqui pela Alternativa 1</div>

            <div className="topicos-modelo4">Substituir aqui pelo texto do segundo tópico</div>
            <div className="dropabble-modelo4"></div>
            <div className="draggable-modelo4">Substituir aqui pela Alternativa 2</div>

            <div className="topicos-modelo4">Substituir aqui pelo texto do terceiro tópico</div>
            <div className="dropabble-modelo4"></div>
            <div className="draggable-modelo4">Substituir aqui pela Alternativa 3</div>

            <div className="topicos-modelo4">Substituir aqui pelo texto do quarto tópico</div>
            <div className="dropabble-modelo4"></div>
            <div className="draggable-modelo4">Substituir aqui pela Alternativa 4</div>

            <div className="topicos-modelo4">Substituir aqui pelo texto do quinto tópico</div>
            <div className="dropabble-modelo4"></div>
            <div className="draggable-modelo4">Substituir aqui pela Alternativa 5</div>
          </div>
        </div>

        <div className="gridContainer-button-modelo4">
          <div className="botao-enviar-gabarito text-center" id="btn-enviar-modelo4">Enviar</div>
          <div className="botao-enviar-gabarito text-center" id="btn-gabarito-modelo4">Gabarito</div>
          <div className="botao-refazer" id="btn-refazer-modelo4">Refazer</div>
        </div>
      </div>
    )
  }
}

const ModeloCinco = () => {
  return(
    <div id="card-five">
      <div className="card-header" id="headingSix">
        <h5 className="mb-0">
          <button className="btn btn-light collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            <span>MODELO 5 - CLICAR E SELECIONAR</span>
          </button>
        </h5>
      </div>
      <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
        <div className="card-body">
          <ModeloCincoDiferenciado />
        </div>
      </div>
    </div>
  )
}

class ModeloCincoDiferenciado extends Component {

  componentDidMount() {
    this.scriptModeloCinco()
  }

  scriptModeloCinco = () => {
    let imagem_certa = "url('https://assets.univesp.br/canvas/img/certo.png')";
    let imagem_errada = "url('https://assets.univesp.br/canvas/img/errado.png')";
    let sizeBoxes = document.getElementsByClassName('gridItem-modelo5').length;
    let boxes = document.getElementsByClassName('gridItem-modelo5');
    let totalCliques = 0;
    let totalSelecionadas;
    let cliques = [];
    let element;
    let verificadas = false;

    (function setSelecionadas() {
      if (sizeBoxes === 14) {
        totalSelecionadas = 7;
      }
      if (sizeBoxes === 12) {
        totalSelecionadas = 5;
      }
      if (sizeBoxes === 9) {
        totalSelecionadas = 4;
      }
      if (sizeBoxes === 6) {
        totalSelecionadas = 3;
      }
      pushCliques();
      checkTodas();
    })();

    function checkSelecionadas() {
      let alternativasSelecionadas = 0;
      for (let alternativa of boxes) {
        if ($(alternativa).hasClass('selecionada')) {
          alternativasSelecionadas += 1;
          console.log(alternativasSelecionadas);
        }
      }
      if (alternativasSelecionadas <= 0) {
        alerta();
      }
      if (alternativasSelecionadas > totalSelecionadas) {
        verificadas = true;
        alert(`Por favor, selecione até ${totalSelecionadas} alternativas.`);
      }
      if (alternativasSelecionadas <= totalSelecionadas) {
        checkCertas();
      }
    }

    function restart() {
      window.location.reload();
    }

    function pushCliques() {
      for (var i = 0; i < sizeBoxes; i++) {
        cliques.push(0);
      }
    }

    function checkClick(checkNumber) {
      $(boxes[checkNumber]).on('click', function() {
        element = $(boxes[checkNumber]);
        cliqueOn(element);
        if (cliques[checkNumber] % 2 !== 0) {
          cliqueOff(element);
        }
        cliques[checkNumber]++;
      })
    }

    function checkTodas() {
      for (var i = 0; i < sizeBoxes; i++) {
        checkClick(i);
      }
    }

    function cliqueOn(elClicado) {
      $(elClicado).css('background', '#FFE370');
      $(elClicado).addClass('selecionada');
    }

    function cliqueOff(elClicado) {
      $(elClicado).css('background', '#DEE5E8');
      if ($(elClicado).hasClass('selecionada')) {
        $(elClicado).removeClass('selecionada');
      }
    }

    // verifica se o total de selecionadas é menor que totalSelecionadas.

    (function botaoEnviar() {
      $('#btn-enviar-model5').on('click', function() {
        checkSelecionadas();
        if (verificadas === false) {
          checkCertas();
        }
      })
    })();

    (function botaoRestart() {
      $('#btn-recomecar-model5  ').on('click', function() {
        restart();
      })
    })();

    function checkCertas() {
      for (var i = 1; i < sizeBoxes + 1; i++) {
        if ($(`#box${i}`).hasClass('certa') && $(`#box${i}`).hasClass('selecionada')) {
          let elemento = $(`#box${i}`);
          elemento.css('border', '2px solid #9ecc63');
          elemento.css('background', '#f4fafc');
          elemento.css('backgroundImage', imagem_certa);
          elemento.css('backgroundRepeat', 'no-repeat');
        } else {
          if ($(`#box${i}`).hasClass('selecionada')) {
            $(`#box${i}`).css('border', '2px solid red');
            $(`#box${i}`).css('background', '#f4fafc');
            $(`#box${i}`).css('backgroundImage', imagem_errada);
            $(`#box${i}`).css('backgroundRepeat', 'no-repeat');
          } else {
            $(`#box${i}`).css('border', '2px solid transparent');
          }
        }
      }
    }

    function alerta() {
      $('#alerta-modelo5').show();
      $('#alerta-modelo5').css('textAlign', 'center');
      $('#alerta-modelo5').css('width', '350px');
      $('#botaoOk-modelo5').on('click', function() {
        $('#alerta-modelo5').hide();
      })
    }
  }

  styleParagraph = {
    fontSize: '16pt',
    color: 'black'
  }

  render() {
    return (
    <div className="ModeloCincoDif">
      <div className="alerta2" id="alerta-modelo5">
         <p style={this.styleParagraph}>Marque ao menos uma alternativa antes de enviar.</p>
         <div className="botaoOk" id="botaoOk-modelo5">Ok</div>
       </div>

      <div className="inicio-diferenciados" >
        <p>Substituir aqui pelo texto da pergunta</p>
      </div>

      <div className="border-diferenciados">
        <div className="gridContainer-modelo5">
          <div className="gridItem-modelo5 certa" id="box1"><p>Substituir pela alternativa 1</p></div>
          <div className="gridItem-modelo5" id="box2"><p>Substituir pela alternativa 2</p></div>
          <div className="gridItem-modelo5" id="box3"><p>Substituir pela alternativa 3</p></div>
          <div className="gridItem-modelo5" id="box4"><p>Substituir pela alternativa 4</p></div>
          <div className="gridItem-modelo5 certa" id="box5"><p>Substituir pela alternativa 5</p></div>
          <div className="gridItem-modelo5" id="box6"><p>Substituir pela alternativa 6</p></div>
          <div className="gridItem-modelo5" id="box7"><p>Substituir pela alternativa 7</p></div>
          <div className="gridItem-modelo5" id="box8"><p>Substituir pela alternativa 8</p></div>
          <div className="gridItem-modelo5 certa" id="box9"><p>Substituir pela alternativa 9</p></div>
          <div className="gridItem-modelo5" id="box10"><p>Substituir pela alternativa 10</p></div>
          <div className="gridItem-modelo5" id="box11"><p>Substituir pela alternativa 11</p></div>
          <div className="gridItem-modelo5 certa" id="box12"><p>Substituir pela alternativa 12</p></div>
        </div>
      </div>

      <div className="gridContainer2-modelo5">
        <div id="btn-enviar-model5" className="botao-enviar-gabarito text-center">Enviar</div>
        <div id="btn-recomecar-model5" className="botao-refazer">Recomeçar</div>
      </div>
    </div>
    )
  }
}

const ModeloSeis = () => {
  return (
    <div id="card-six">
      <div className="card-header" id="headingFive">
        <h5 className="mb-0">
          <button className="btn btn-light collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            <span>MODELO 6 - CHECKBOX</span>
          </button>
        </h5>
      </div>
      <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
        <div className="card-body">
          <ModeloSeisDiferenciado />
        </div>
      </div>
    </div>
  )
}

class ModeloSeisDiferenciado extends Component {

  componentDidMount() {
    this.scriptModeloSeis()
  }

  scriptModeloSeis = () => {
    let imagem_certa = "url('https://assets.univesp.br/canvas/img/check.svg')";
    let imagem_errada = "url('https://assets.univesp.br/canvas/img/errado_icone.svg')";
    let numQuestoes = document.getElementsByClassName('caixa-checkbox').length;
    let questoes = document.getElementsByClassName('caixa-checkbox');
    let cliques = [];
    let element;

    (function () {
      pushCliques();
      checkTodas();
      $('#btn-enviar-modelo6').on('click', function() {
        showAlerta();
        checkCertas();
        $('#btn-gabarito-modelo6').on('click', function() {
          gabarito();
        })
        $('#btn-refazer-modelo6').on('click', function() {
          restart();
        })
      })
    })();

    function pushCliques() {
      for (var i = 0; i < numQuestoes; i++) {
        cliques.push(0);
      }
    }

    function checkClick(checkNumber) {
      $(questoes[checkNumber]).on('click', function() {
        element = $(questoes[checkNumber]);
        cliqueOn(element);
        if (cliques[checkNumber] % 2 !== 0) {
          cliqueOff(element);
        }
        cliques[checkNumber]++;
      })
    }

    function checkTodas() {
      for (var i = 0; i < numQuestoes; i++) {
        checkClick(i);
      }
    }

    // #007BFF

    function cliqueOn(elClicado) {
      $(elClicado).css('background', '#354451');
      $(elClicado).css('backgroundImage', imagem_certa);
      $(elClicado).css('backgroundRepeat', 'no-repeat');
      $(elClicado).css('background-position', '-0.3px 2px');
    }

    function cliqueOff(elClicado) {
      $(elClicado).css('background', '#e0e0e0');
    }

    function showAlerta() {
      let questoesDesmarcadas = 0;
      for (let questao of cliques) {
        if (questao % 2 === 0) {
          questoesDesmarcadas += 1;
        }
      }
      if (questoesDesmarcadas === numQuestoes) {
        alerta();
      }
    }

    function alerta() {
      $('#alerta-modelo6').show();
      $('#alerta-modelo6').css('textAlign', 'center');
      $('#alerta-modelo6').css('width', '350px');
      $('#botaoOk-modelo6').on('click', function() {
        $('#alerta-modelo6').hide();
      })
    }

    function restart() {
      window.location.reload()
    }

    function checkCertas() {
      for (var i = 0; i < numQuestoes; i++) {
        if (cliques[i] % 2 !== 0) {
          if ($(`#checkbox${i + 1}`).hasClass('certa')) {
            $(`#checkbox${i + 1}`).css('background', '#9ecc63');
            $(`#checkbox${i + 1}`).css('backgroundImage', imagem_certa);
            $(`#checkbox${i + 1}`).css('backgroundRepeat', 'no-repeat');
            $(`#checkbox${i + 1}`).css('background-position', '-0.3px 2px');
            $(`#alternativa${i + 1}`).css('color', '#9ecc63');
          }
          else {
            $(`#checkbox${i + 1}`).css('background', '#ed3a47');
            $(`#checkbox${i + 1}`).css('backgroundImage', imagem_errada);
            $(`#checkbox${i + 1}`).css('backgroundRepeat', 'no-repeat');
            $(`#checkbox${i + 1}`).css('background-position', '-0.3px 2px');
            $(`#alternativa${i + 1}`).css('color', 'red');
          }
        }
      }
    }

    function gabarito() {
      for (var i = 0; i < numQuestoes; i++) {
        if ($(`#checkbox${i + 1}`).hasClass('certa')) {
          $(`#checkbox${i + 1}`).css('background', '#9ecc63');
          $(`#checkbox${i + 1}`).css('backgroundImage', imagem_certa);
          $(`#checkbox${i + 1}`).css('backgroundRepeat', 'no-repeat');
          $(`#checkbox${i + 1}`).css('background-position', '-0.3px 2px');
          $(`#alternativa${i + 1}`).css('color', '#9ecc63');
        } else {
          $(`#checkbox${i + 1}`).css('background', '#ed3a47');
          $(`#checkbox${i + 1}`).css('backgroundImage', imagem_errada);
          $(`#checkbox${i + 1}`).css('backgroundRepeat', 'no-repeat');
          $(`#checkbox${i + 1}`).css('background-position', '-0.3px 2px');
          $(`#alternativa${i + 1}`).css('color', 'red');
        }
      }
    }
  }

  styleParagraph = {
    fontSize: '14pt',
    color: 'black'
  }

  render() {
    return (
      <div className="ModeloSeisDif">
        <div className="alerta2" id="alerta-modelo6">
          <p style={this.styleParagraph}>Marque ao menos uma alternativa antes de enviar.</p>
          <div className="botaoOk" id="botaoOk-modelo6">Ok</div>
        </div>
        <div className="conteudo-modelo6">
          <div className="inicio-diferenciados">
            <p>Substituir pelo texto da pergunta</p>
          </div>
          <div className="gridContainer-checkbox">
            <div className="caixa-checkbox certa" id="checkbox1"></div>
            <div className="alternativas" id="alternativa1">Alternativa 1</div>
            <div className="caixa-checkbox" id="checkbox2"></div>
            <div className="alternativas" id="alternativa2">Alternativa 2</div>
            <div className="caixa-checkbox" id="checkbox3"></div>
            <div className="alternativas" id="alternativa3">Alternativa 3</div>
            <div className="caixa-checkbox certa" id="checkbox4"></div>
            <div className="alternativas" id="alternativa4">Alternativa 4</div>
            <div className="caixa-checkbox" id="checkbox5"></div>
            <div className="alternativas" id="alternativa5">Alternativa 5</div>
          </div>
        </div>
        <div className="gridContainer-button-modelo6">
          <div className="botao-enviar-gabarito text-center" id="btn-enviar-modelo6">Enviar</div>
          <div className="botao-enviar-gabarito text-center" id="btn-gabarito-modelo6">Gabarito</div>
          <div className="botao-refazer" id="btn-refazer-modelo6">Refazer</div>
        </div>
      </div>
    )
  }
}

const ModeloSete = () => {
  return (
    <div id="card-seven">
      <div className="card-header" id="headingFour">
        <h5 className="mb-0">
          <button className="btn btn-light collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <span>MODELO 7 - MÚLTIPLA ESCOLHA</span>
          </button>
        </h5>
      </div>
      <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
        <div className="card-body">
          <ModeloSeteDiferenciado />
        </div>
      </div>
    </div>
  )
}

class ModeloSeteDiferenciado extends Component {
  componentDidMount() {
    this.scriptModeloSete()
  }

  scriptModeloSete = () => {
    let numQuestoes = document.getElementsByClassName('caixa-checkbox-modelo7').length;
      let numSecoes = document.getElementsByClassName('gridContainer1-modelo7').length;
      let questoes = document.getElementsByClassName('caixa-checkbox-modelo7');
      let cliques = [];
      let element;

      (function () {
        pushCliques();
        checkTodas();
        $('#btn-enviar-modelo7').on('click', function() {
          if ($('.selecionada').length < numSecoes) {
             alerta();
          } else {
            checkCertas();
          }
        })
        $('#btn-refazer-modelo7').on("click", function() {
          restart();
        })
      })();

      function pushCliques() {
        for (var i = 0; i < numQuestoes; i++) {
          cliques.push(0);
        }
      }

      function checkClick(checkNumber) {
        $(questoes[checkNumber]).on('click', function() {
          element = $(questoes[checkNumber]);
          cliqueOn(element);
          cliqueOff(element.siblings());
          takeOffGrey();
          cliques[checkNumber]++;
        })
      }

      function checkTodas() {
        for (var i = 0; i < numQuestoes; i++) {
          checkClick(i);
        }
      }

      function cliqueOn(elClicado) {
        $(elClicado).css('background', 'white');
        $(elClicado).css('boxShadow', 'inset 0px 0px 0px 7px #007bff');
        $(elClicado).addClass('selecionada');
      }

      function cliqueOff(elClicado) {
        $(elClicado).css('background', '#e0e0e0');
        $(elClicado).css('boxShadow', 'inset 0px 0px 0px 7px #e0e0e0');
        if ($(elClicado).hasClass('selecionada')) {
          $(elClicado).removeClass('selecionada');
        }
      }

      function checkCertas() {
        for (let questao of questoes) {
          if ($(questao).hasClass('certa') && $(questao).hasClass('selecionada')) {
            $(questao).css('background', 'white');
            $(questao).css('boxShadow', 'inset 0px 0px 0px 7px #9ecc63');
            $(questao).next().css('color', '#9ecc63');
            $(questao).next().html($(questao).next().html() + "<span style='font-size: 17px; color: #009e49;'><strong> ✓</strong></span>");
          } else {
            if ($(questao).hasClass('selecionada')) {
              let questaoCerta = $('.certa');
              $(questaoCerta).css('background', 'white');
              $(questaoCerta).css('boxShadow', 'inset 0px 0px 0px 7px #9ecc63');
              $(questaoCerta).next().css('color', '#9ecc63');

              $(questao).css('background', 'white');
              $(questao).css('boxShadow', 'inset 0px 0px 0px 7px #ed3a47');
              $(questao).next().css('color', '#ed3a47');
              $(questao).next().html($(questao).next().html() + "<strong> X</strong>");
            }
          }
        }
      }

      function takeOffGrey() {
        $('.alternativa-checkbox-modelo7').css('background', 'transparent');
        $('.alternativa-checkbox-modelo7').css('boxShadow', 'inset 0px 0px 0px 7px transparent');
      }

      function alerta() {
        $('#alerta-modelo7').show();
        $('#alerta-modelo7').css('textAlign', 'center');
        $('#alerta-modelo7').css('width', '350px');
        $('#botaoOk-modelo7').on('click', function() {
          $('#alerta-modelo7').hide();
        })
      }

      function restart() {
        window.location.reload();
      }
  }

  styleParagraph = {
    fontSize: '16pt',
    color: 'black'
  }

  render() {
    return (
      <div className="ModeloSeteDif">
        <div className="alerta2" id="alerta-modelo7">
          <p style={this.styleParagraph}>Marque uma alternativa de cada questão antes de enviar.</p>
          <div className="botaoOk" id="botaoOk-modelo7">Ok</div>
        </div>

        <div className="conteudo-modelo7">
          <div className="inicio-diferenciados2">
            <p>Substitua aqui o texto da pergunta</p>
          </div>

          <ol>
            <li>
              <p className="paragraph-modelo7">Substitua aqui o primeiro tópico</p>
              <div className="gridContainer1-modelo7">
                <div className="caixa-checkbox-modelo7"></div>
                <div className="alternativa-checkbox-modelo7">Substitua aqui a primeira alternativa</div>
                <div className="caixa-checkbox-modelo7"></div>
                <div className="alternativa-checkbox-modelo7">Substitua aqui a segunda alternativa</div>
                <div className="caixa-checkbox-modelo7 certa"></div>
                <div className="alternativa-checkbox-modelo7">Substitua aqui a terceira alternativa</div>
              </div>
            </li><br/><br/>
            <li>
              <p className="paragraph-modelo7">Substitua aqui o segundo tópico</p>

              <div className="gridContainer1-modelo7">
                <div className="caixa-checkbox-modelo7 certa"></div>
                <div className="alternativa-checkbox-modelo7">Substitua aqui a primeira alternativa</div>
                <div className="caixa-checkbox-modelo7"></div>
                <div className="alternativa-checkbox-modelo7">Substitua aqui a segunda alternativa</div>
                <div className="caixa-checkbox-modelo7"></div>
                <div className="alternativa-checkbox-modelo7">Substitua aqui a terceira alternativa</div>
              </div>
            </li><br/><br/>

            <li>
              <p className="paragraph-modelo7">Substitua aqui o terceiro tópico</p>
              <div className="gridContainer1-modelo7">
                <div className="caixa-checkbox-modelo7"></div>
                <div className="alternativa-checkbox-modelo7">Substitua aqui a primeira alternativa</div>
                <div className="caixa-checkbox-modelo7 certa"></div>
                <div className="alternativa-checkbox-modelo7">Substitua aqui a segunda alternativa</div>
                <div className="caixa-checkbox-modelo7"></div>
                <div className="alternativa-checkbox-modelo7">Substitua aqui a terceira alternativa</div>
              </div>
            </li><br/><br/>

            <li>
              <p className="paragraph-modelo7">Substitua aqui o quarto tópico</p>
              <div className="gridContainer1-modelo7">
                <div className="caixa-checkbox-modelo7"></div>
                <div className="alternativas" className="alternativa-checkbox-modelo7">Substitua aqui a primeira alternativa</div>
                <div className="caixa-checkbox-modelo7"></div>
                <div className="alternativas" className="alternativa-checkbox-modelo7">Substitua aqui a segunda alternativa</div>
                <div className="caixa-checkbox-modelo7 certa"></div>
                <div className="alternativas" className="alternativa-checkbox-modelo7">Substitua aqui a terceira alternativa</div>
              </div>
            </li>
          </ol>

          <div className="gridContainer-button-modelo7">
            <div className="botao-enviar-gabarito text-center" id="btn-enviar-modelo7">Enviar</div>
            <div className="botao-refazer text-center" id="btn-refazer-modelo7">Refazer</div>
          </div>

        </div>
    </div>
    )
  }
}

export const Diferenciados = () => {
  return (
    <div className="mt-5">
      <ProfsPage />
    </div>
  )
}
