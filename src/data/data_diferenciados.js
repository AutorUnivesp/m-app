const itens = [
  {
    modelo: 'ModeloUm',
    id: 'item1',
    title: 'Diferenciados - Modelo 1',
    paragraph: 'Abaixo o código html do Modelo de Exercício diferenciado',
    icon: 'fas fa-code',
    code: `<div id="conteudo">
      <div class="item ativo">
        <ol class="lista-perguntas">

          <li> Pergunta 1
            <div class="alternativas">
              <div id="1_a" class="btn-challenge">Alternativa 1</div>
              <div id="1_b" class="btn-challenge">Alternativa 2</div>
              <div class="feedback"><p id="1_p"></p></div>
            </div>
          </li>

          <li> Pergunta 2
            <div class="alternativas">
              <div id="2_a" class="btn-challenge">Alternativa 1</div>
              <div id="2_b" class="btn-challenge">Alternativa 2</div>
              <div class="feedback"><p id="2_p"></p></div>
            </div>
          </li>

          <li> Pergunta 3
            <div class="alternativas">
              <div id="3_a" class="btn-challenge">Alternativa 1</div>
              <div id="3_b" class="btn-challenge">Alternativa 2</div>
              <div class="feedback"><p id="3_p"></p></div>
            </div>
          </li>

          <li> Pergunta 4
            <div class="alternativas">
              <div id="4_a" class="btn-challenge">Alternativa 1</div>
              <div id="4_b" class="btn-challenge">Alternativa 2</div>
              <div class="feedback"><p id="4_p"></p></div>
            </div>
          </li>

          <li> Pergunta 5
            <div class="alternativas">
              <div id="5_a" class="btn-challenge">Alternativa 1</div>
              <div id="5_b" class="btn-challenge">Alternativa 2</div>
              <div id="5_c" class="btn-challenge">Alternativa 3</div>
              <div id="5_d" class="btn-challenge">Alternativa 4</div>
              <div class="feedback"><p id="5_p"></p></div>
            </div>
          </li>
        </ol>

      </div>
    </div>
    <br><br><br>`

  },
  {
    modelo: 'ModeloDois',
    id: 'item2',
    title: 'Diferenciados - Modelo 2',
    paragraph: 'Abaixo o código html do Modelo de Exercício diferenciado',
    icon: 'fas fa-code',
    code: `
  <div class="content">
    <ol>
      <!--Questão 1-->
      <li style="color: #005662; font-weight: bold;">
        <span style="color: #333; font-weight: normal;"> Pergunta 1:</span><br />
        <div style="margin: 20px 0 20px 0;">
          <!-- REACT INPUT-->
        <div class="inputfield"></div>
        <div class="collapse-cx-curta1">Resposta: xxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
        </div>
      </li>

       <!--Questão 2-->
      <li style="color: #005662; font-weight: bold;">
        <span style="color: #333; font-weight: normal;"> Pergunta 2:</span><br />
        <div style="margin: 20px 0 20px 0;">
          <!-- REACT INPUT-->
        <div class="inputfield"></div>
        <div class="collapse-cx-curta1">Resposta: xxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
        </div>
      </li>

      <!--Questão 3-->
      <li style="color: #005662; font-weight: bold;">
        <span style="color: #333; font-weight: normal;"> Pergunta 3:</span><br />
        <div style="margin: 20px 0 20px 0;">
          <!-- REACT INPUT-->
        <div class="inputfield"></div>
        <div class="collapse-cx-curta1">Resposta: xxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
        </div>
      </li>

  </ol>
</div>

<!--Botão mostrar Gabarito-->
<div class="btn-cx-curta botao-enviar-gabarito1" style="width: 150px; font-size: 14px;">
  Mostrar Gabarito
</div>
  `
  },
  {
    modelo: 'ModeloTres',
    id: 'item3',
    title: 'Diferenciados - Modelo 3',
    paragraph: 'Abaixo o código html do Modelo de Exercício diferenciado',
    icon: 'fas fa-code',
    code:
    `
<!-- CONTEÚDO -->
<div class="container">
  <br />  <br />
  <p style="padding-left: 30px;">
    <span style="font-size: 14pt; color: #a01f1f;"><strong>Pergunta 1</strong></span>
    &nbsp;
  </p>

  <p>
    Substituir aqui pelo texto da pergunta
  </p> <!-- PERGUNTA -->

	<!-- REACT TEXT AREA -->
  <div class="textarea"></div>
	 <div class="collapse-modelo3" style="display: none;">
		<p>
			<span style="color: #ff0000;">Resposta: <br><br>
				xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			</span>
		</p>
	</div>
  <div class="botao-enviar-gabarito btn-modelo3" style="width: 150px; font-size: 14px;">
    Mostrar Gabarito
  </div>
</div> <br />  <br />

<!-- FIM DO CONTEÚDO -->
    `
  },
  {
    modelo: 'ModeloQuatro',
    id: 'item4',
    title: 'Diferenciados - Modelo 4',
    paragraph: 'Abaixo o código html do Modelo de Exercício diferenciado',
    icon: 'fas fa-code',
    code:
    `
    <!-- CONTEÚDO -->
    <div class="alerta2" id="alerta-modelo4"style="display: none;">
       <p style="font-size: 16pt;">Faça todas as questões antes de enviar.</p>
      <div class="botaoOk" id="botaoOk-modelo4">Ok</div>
   </div>

   <div class="gabarito" style="display: none;">
     <div class="resposta-certa">Substituir aqui pela Alternativa 1</div>
     <div class="resposta-certa">Substituir aqui pela Alternativa 2</div>
     <div class="resposta-certa">Substituir aqui pela Alternativa 3</div>
     <div class="resposta-certa">Substituir aqui pela Alternativa 4</div>
     <div class="resposta-certa">Substituir aqui pela Alternativa 5</div>
   </div>

    <div class="inicio-diferenciados">
      <p>Substituir aqui pelo texto da pergunta</p>
    </div>

    <div class="border-diferenciados">
      <div class="gridContainer-modelo4">
        <div class="topicos-modelo4">Substituir aqui pelo texto do primeiro tópico</div>
        <div class="dropabble-modelo4"></div>
        <div class="draggable-modelo4">Substituir aqui pela Alternativa 1</div>

        <div class="topicos-modelo4">Substituir aqui pelo texto do segundo tópico</div>
        <div class="dropabble-modelo4"></div>
        <div class="draggable-modelo4">Substituir aqui pela Alternativa 2</div>

        <div class="topicos-modelo4">Substituir aqui pelo texto do terceiro tópico</div>
        <div class="dropabble-modelo4"></div>
        <div class="draggable-modelo4">Substituir aqui pela Alternativa 3</div>

        <div class="topicos-modelo4">Substituir aqui pelo texto do quarto tópico</div>
        <div class="dropabble-modelo4"></div>
        <div class="draggable-modelo4">Substituir aqui pela Alternativa 4</div>

        <div class="topicos-modelo4">Substituir aqui pelo texto do quinto tópico</div>
        <div class="dropabble-modelo4"></div>
        <div class="draggable-modelo4">Substituir aqui pela Alternativa 5</div>
      </div>
    </div>

    <div class="gridContainer-button-modelo4">
      <div class="botao-enviar-gabarito" id="btn-enviar-modelo4">Enviar</div>
      <div class="botao-enviar-gabarito" id="btn-gabarito-modelo4">Gabarito</div>
      <div class="botao-refazer" id="btn-refazer-modelo4">Refazer</div>
    </div>

    <br><br><br>
    <!-- FIM DO CONTEÚDO -->
    `
  },
  {
    modelo: 'ModeloCinco',
    id: 'item5',
    title: 'Diferenciados - Modelo 5',
    paragraph: 'Abaixo o código html do Modelo de Exercício diferenciado',
    icon: 'fas fa-code',
    code:
    `
  <!-- CONTEÚDO -->
  <div class="alerta2" id="alerta-modelo5" style="display: none;">
   <p style="font-size: 16pt;">Marque ao menos uma alternativa antes de enviar.</p>
   <div class="botaoOk" id="botaoOk-modelo5">Ok</div>
 </div>

  <div class="inicio-diferenciados" >
    <p>Substituir aqui pelo texto da pergunta</p>
  </div>

  <div class="border-diferenciados">
    <div class="gridContainer-modelo5">
      <div class="gridItem-modelo5" id="box1"><p>Substituir pela alternativa 1</p></div>
      <div class="gridItem-modelo5" id="box2"><p>Substituir pela alternativa 2</p></div>
      <div class="gridItem-modelo5" id="box3"><p>Substituir pela alternativa 3</p></div>
      <div class="gridItem-modelo5" id="box4"><p>Substituir pela alternativa 4</p></div>
      <div class="gridItem-modelo5" id="box5"><p>Substituir pela alternativa 5</p></div>
      <div class="gridItem-modelo5" id="box6"><p>Substituir pela alternativa 6</p></div>
      <div class="gridItem-modelo5" id="box7"><p>Substituir pela alternativa 7</p></div>
      <div class="gridItem-modelo5" id="box8"><p>Substituir pela alternativa 8</p></div>
      <div class="gridItem-modelo5" id="box9"><p>Substituir pela alternativa 9</p></div>
      <div class="gridItem-modelo5" id="box10"><p>Substituir pela alternativa 10</p></div>
      <div class="gridItem-modelo5" id="box11"><p>Substituir pela alternativa 11</p></div>
      <div class="gridItem-modelo5" id="box12"><p>Substituir pela alternativa 12</p></div>
    </div>
  </div>

  <div class="gridContainer2-modelo5">
    <div id="btn-enviar-model5" class="botao-enviar-gabarito">Enviar</div>
    <div id="btn-recomecar-model5" class="botao-refazer">Recomeçar</div>
  </div>

  <br><br><br>
  <!-- FIM DO CONTEÚDO -->
    `
  },
  {
    modelo: 'ModeloSeis',
    id: 'item6',
    title: 'Diferenciados - Modelo 6',
    paragraph: 'Abaixo o código html do Modelo de Exercício diferenciado',
    icon: 'fas fa-code',
    code:
    `
    <!-- CONTEÚDO -->
    <div class="alerta2" id="alerta-modelo6" style="display: none;">
     <p style="font-size: 16pt;">Marque ao menos uma alternativa antes de enviar.</p>
     <div class="botaoOk" id="botaoOk-modelo6">Ok</div>
   </div>

    <div class="conteudo-modelo6">
      <!-- Pergunta Inicial -->

        <div class="inicio-diferenciados">
          <p>Substituir pelo texto da pergunta</p>
        </div>

        <div class="gridContainer-checkbox">
          <div class="caixa-checkbox" id="checkbox1"></div>
          <div style="font-size: 1.18em;" id="alternativa1">Alternativa 1</div>

          <div class="caixa-checkbox" id="checkbox2"></div>
          <div style="font-size: 1.18em;" id="alternativa2">Alternativa 2</div>

          <div class="caixa-checkbox" id="checkbox3"></div>
          <div style="font-size: 1.18em;" id="alternativa3">Alternativa 3</div>

          <div class="caixa-checkbox" id="checkbox4"></div>
          <div style="font-size: 1.18em;" id="alternativa4">Alternativa 4</div>

          <div class="caixa-checkbox" id="checkbox5"></div>
          <div style="font-size: 1.18em;" id="alternativa5">Alternativa 5</div>
        </div>
    </div>

    <div class="gridContainer-button-modelo6">
      <div class="botao-enviar-gabarito" id="btn-enviar-modelo6">Enviar</div>
      <div class="botao-enviar-gabarito" id="btn-gabarito-modelo6">Gabarito</div>
      <div class="botao-refazer" id="btn-refazer-modelo6">Refazer</div>
    </div>

    <br><br><br>
    <!-- FIM DO CONTEÚDO -->
    `
  },
  {
    modelo: 'ModeloSete',
    id: 'item7',
    title: 'Diferenciados - Modelo 7',
    paragraph: 'Abaixo o código html do Modelo de Exercício diferenciado',
    icon: 'fas fa-code',
    code:
    `
    <!-- CONTEUDO -->
    <div class="alerta2" id="alerta-modelo7" style="display: none;">
     <p style="font-size: 16pt;">
      Marque uma alternativa de cada questão antes de enviar.
    </p>
     <div class="botaoOk" id="botaoOk-modelo7">Ok</div>
   </div>

    <div class="conteudo-modelo7">

      <div class="inicio-diferenciados">
        <p>Substitua aqui o texto da pergunta</p>
      </div>

      <ol class="i">
        <li>
          <p style="font-size: 1.5em;">Substitua aqui o primeiro tópico</p>

          <div class="gridContainer1-modelo7">
            <div class="caixa-checkbox-modelo7"></div>
            <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
              Substitua aqui a primeira alternativa
            </div>

            <div class="caixa-checkbox-modelo7"></div>
            <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
              Substitua aqui a segunda alternativa
            </div>

            <div class="caixa-checkbox-modelo7"></div>
            <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
              Substitua aqui a terceira alternativa
            </div>

          </div>
       </li><br><br>

       <li>
         <p style="font-size: 1.5em;">Substitua aqui o segundo tópico</p>

         <div class="gridContainer1-modelo7">
           <div class="caixa-checkbox-modelo7"></div>
           <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
            Substitua aqui a primeira alternativa
          </div>

           <div class="caixa-checkbox-modelo7"></div>
           <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
            Substitua aqui a segunda alternativa
          </div>

           <div class="caixa-checkbox-modelo7"></div>
           <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
            Substitua aqui a terceira alternativa
          </div>

         </div>
      </li><br><br>

      <li>
        <p style="font-size: 1.5em;">Substitua aqui o terceiro tópico</p>

        <div class="gridContainer1-modelo7">
          <div class="caixa-checkbox-modelo7"></div>
          <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
            Substitua aqui a primeira alternativa
          </div>

          <div class="caixa-checkbox-modelo7"></div>
          <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
            Substitua aqui a segunda alternativa
          </div>

          <div class="caixa-checkbox-modelo7"></div>
          <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
            Substitua aqui a terceira alternativa
          </div>

        </div>
     </li><br><br>

     <li>
       <p style="font-size: 1.5em;">Substitua aqui o quarto tópico</p>

       <div class="gridContainer1-modelo7">
         <div class="caixa-checkbox-modelo7"></div>
         <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
          Substitua aqui a primeira alternativa
        </div>

         <div class="caixa-checkbox-modelo7"></div>
         <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
          Substitua aqui a segunda alternativa
        </div>

         <div class="caixa-checkbox-modelo7"></div>
         <div style="font-size: 1.15em" class="alternativa-checkbox-modelo7">
          Substitua aqui a terceira alternativa
        </div>

       </div>
    </li>
      </ol>

      <div class="gridContainer-button-modelo7">
        <div class="botao-enviar-gabarito" id="btn-enviar-modelo7">Enviar</div>
        <div class="botao-refazer" id="btn-refazer-modelo7">Refazer</div>
      </div>

    </div>

    <br><br><br>
    <!-- FIM DO CONTEÚDO -->
    `
  }
]

const jsonItens = JSON.stringify(itens)
console.log(jsonItens)

export default itens
