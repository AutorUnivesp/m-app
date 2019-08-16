import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { IconInstructureLine } from '@instructure/ui-icons'
import App from './App'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/droppable'
import 'jquery-ui/ui/position'
import './css/index.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

function _Modelo1() {
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
function _Modelo2() {
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
function _Modelo3() {
  $(".btn-modelo3").click(function() {
      $(".collapse-modelo3").slideToggle();
      $(this).text(function(i, old) {
          return old == 'Mostrar Gabarito' ? 'Esconder Gabarito' : 'Mostrar Gabarito';
      });
  });
}
function _Modelo4() {
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
function _Modelo5() {
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
function _Modelo6() {
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
function _Modelo7() {
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
const _Execute = () => {
  _Modelo1();
  _Modelo2();
  _Modelo3();
  _Modelo4();
  _Modelo5();
  _Modelo6();
  _Modelo7();
}
_Execute();
