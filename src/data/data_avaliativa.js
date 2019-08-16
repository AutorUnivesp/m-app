const avaliativa = [
  {
    title: 'Envio de Arquivo',
    code:
    `
    <div class="user_content">

      <!-- Início ----------------->
      <!-- HEADER PRINT-ONLY (Aparece na impressão CTRL+P) -->
      <div class="container intro print-only">
        <h5 class="subheader">xxxxxxxxx</h5><!-- nome da disciplina -->
        <div class="container title">
          <span>xxxxxxxx</span><!-- número da semana -->
          <h1>xxxxxxxxx</h1><!-- tema da semana -->
        </div>
      </div>
      <!-- Fim de HEADER PRINT-ONLY -->

<!-- Atividade para avaliação --------------------------------------------------------------------->
<div class="graduation">
  <div class="container">
    <!-- subheader -->
    <div class="content-item tasks primary">
      <div class="icon">
        <img src="https://assets.univesp.br/canvas/img/atividade4.svg">
      </div>
      <div class="content">
        <h5>Atividade para avaliação</h5>
        <p>Consulte os gabaritos dessa disciplina no menu lateral.</p>
      </div>
    </div>
    <!-- conteúdo -->
    <div class="content-item-body">
	  <!-- Orientações para o aluno -->
	  <p>Olá, alunos e alunas!</p>
	  <p>Esta atividade deve ser preparada em seu computador, em programa apropriado. Salve-o como um arquivo PDF. Para enviá-la para correção, siga os seguintes passos:</p>
	  <ol>
	  <li>Clique no botão "Enviar atividade" e, depois, em “Escolher um arquivo”;</li>
	  <li>Na janela que se abrirá, selecione o arquivo em seu dispositivo;</li>
	  <li>Ainda nesta janela, clique em “Abrir”;</li>
	  <li>Ao fim da página, clique em “Enviar atividade”.</li>
	  </ol>
	  <p>Pronto! Sua atividade está postada no AVA.</p>
	  <p><strong> Atenção: A produção da atividade deverá seguir as normas ABNT.</p></strong>
	  <p>&nbsp;</p>

	  <!-- Atividade -->
      <p style="font-size: 12pt;">xxxxxxxxxxxxx</p><!-- Título da atividade, se houver -->

  <p>
xxxxxxxxxxxxx
</p><!-- conteúdo da Atividade -->
 </div>
  </div>
</div>
    `
  },
  {
    title: 'Gabarito',
    code:
    `
    <!-- Gabarito para atividades para avaliação-->

<div class="user_content">

      <!-- Início ----------------->
      <!-- HEADER PRINT-ONLY (Aparece na impressão CTRL+P) -->
      <div class="container intro print-only">
        <h5 class="subheader">xxxxxxxxxxxxx</h5><!-- nome da disciplina -->
        <div class="container title">
          <span>0</span><!-- número da semana -->
          <h1>xxxxxxxxxxxxx</h1><!-- tema da semana -->
        </div>
      </div>
      <!-- Fim de HEADER PRINT-ONLY -->



<!-- Gabarito da Atividade para avaliação --------------------------------------------------------->
<!-- Deve ser criado com o nome "Gabarito da Atividade da Semana X" -->
<!-- O mesmo código html da Atividade porém sem as orientações de envio da Atividade e com o gabarito anexado no final -->
<div class="graduation">
  <div class="container">
    <!-- subheader -->
    <div class="content-item tasks primary">
      <div class="icon">
        <img src="https://assets.univesp.br/canvas/img/atividade4.svg">
      </div>
      <div class="content">
        <h5>Atividade para avaliação</h5>
        <p></p>
      </div>
    </div>
    <!-- conteúdo -->
    <div class="content-item-body">
      <p style="font-size: 12pt;">xxxxxxxxxxxxx</p><!-- Título da atividade, se houver -->
    </div>
  </div>
  <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p><!-- conteúdo da Atividade -->
  <p>&nbsp;</p>
  <p style="font-size: 14pt"><strong>Gabarito</strong></p>
  <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p><!-- conteúdo do Gabarito -->

</div>
    `
  },
  {
    title: 'Teste',
    code:
    `
    <!-- Atividade para avaliação Teste --------------------------------------------------------------------->
<div class="graduation">
  <div class="container">
    <!-- subheader -->
    <div class="content-item tasks primary">
      <div class="icon">
        <img src="https://assets.univesp.br/canvas/img/atividade4.svg">
      </div>
      <div class="content">
        <h5>Atividade para avaliação</h5>
        <p>Consulte os gabaritos dessa disciplina no menu lateral.</p>
      </div>
    </div>
    <!-- conteúdo -->
    <div class="content-item-body">
	  <!-- Orientações para o aluno -->
	  <p>Olá, alunos e alunas!</p>
	  <p>Esta atividade possui múltipla escolha. Para respondê-la:</p>
	  <ol>
	  <li>Selecione, com o mouse, a alternativa que você considerar correta;</li>
	  <li>Repare que, ao selecionar uma alternativa, as seleções anteriores são desmarcadas;</li>
	  <li>Após selecionar a resposta correta em todas as questões, vá até o fim da página e clique em “Enviar teste”.</li>
	  </ol>
	  <p>Pronto! Sua atividade já está registrada no AVA.</p>
    `
  }
]

export default avaliativa
