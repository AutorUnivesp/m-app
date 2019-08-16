const listaMain = [
  {
    title: 'Antes de Começar',
    code:
    `
    <!-- Modelo Antes de Começar ---------------------------------------------------------------------->
<div class="graduation">
<div class="container">
  <div class="content-item guide box">
    <div class="content">
      <h2>Antes de Começar</h2>
          <div class="description">
            <p>xxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
    </div>
  </div>
</div>
</div>
    `
  },

  {
    title: 'Aprofundando o Tema',
    code:
    `
    <!-- Início ----------------->
    <div class="container">

      <!-- SUBHEADER -->
      <div class="content-item text secondary">
        <div class="icon">
          <img src="https://assets.univesp.br/canvas/img/aprofundando.svg">
        </div>
        <div class="content">
          <h2>Aprofundando o Tema</h2><!-- título -->
        </div>
      </div>
      <!-- FIM DE SUBHEADER -->

      <!-- CONTEÚDO -->
      <p>xxxxxxxxxxxxx</p><!-- texto -->
      <!-- FIM DE CONTEÚDO -->

    </div>
    <!-- Fim -------------------->
    `
  },

  {
    title: 'Em Síntese',
    code:
    `
    <!-- Início ----------------->
    <div class="container">

      <!-- SUBHEADER -->
      <div class="content-item neutral">
        <div class="icon">
          <img src="https://assets.univesp.br/canvas/img/sintese.svg">
        </div>
        <div class="content">
          <h2>Em síntese</h2><!-- título -->
        </div>
      </div>
      <!-- FIM DE SUBHEADER -->

   <!-- CONTEÚDO -->

  <div class="description">

      <p>xxxxxxxxxxxxx</p><!-- texto -->

  </div><!-- FIM DE CONTEÚDO -->
    </div>
  <!-- Fim -------------------->
    `
  },

  {
    title: 'Introdução e Objetivos',
    code:
    `
    <!-- Início ----------------->
    <div class="container">

      <!-- SUBHEADER -->
      <div class="content-item neutral">
        <div class="icon">
          <img src="https://assets.univesp.br/canvas/img/objetivos.svg">
        </div>
        <div class="content">
          <h2>Introdução e Objetivos</h2><!-- título -->
        </div>
      </div>
      <!-- FIM DE SUBHEADER -->

   <!-- CONTEÚDO -->

  <div class="description">

      <p>xxxxxxxxxxxxx</p><!-- texto -->

  </div><!-- FIM DE CONTEÚDO -->
    </div>
   <!-- Fim -------------------->
    `
  },

  {
    title: 'Orientação de Estudos',
    code:
    `
    <!-- Orientação de Estudos--->
<div class="user_content">

    <!-- Início ----------------->
    <div class="container">

      <!-- SUBHEADER -->
      <div class="content-item neutral">
        <div class="icon">
          <img src="https://assets.univesp.br/canvas/img/orientacao.svg">
        </div>
        <div class="content">
          <h2>Orientação de Estudo</h2><!-- título -->
        </div>
      </div>
      <!-- FIM DE SUBHEADER -->

   <!-- CONTEÚDO -->
  <div class="description">


      <p>xxxxxxxxxxxxx</p><!-- texto -->

  </div><!-- FIM DE CONTEÚDO -->
    </div>
  </div>  <!-- Fim -------------------->
    `
  },

  {
    title: 'Orientação - Fórum Temático',
    code:
    `
    <div class="graduation">
<div class="container">
  <!-- subheader -->
  <div class="content-item forum primary">
<div class="icon"><img src="https://assets.univesp.br/canvas/img/forum.svg" /></div>
<div class="content">
      <h5>Fórum Temático - xxxxxxxxxxxxx </h5> <!-- Inserir nome do fórum -->
      <h3>Orientação para mediação</h3>
    </div>
  </div>
<!-- Fim do cabeçalho -->

  <!-- conteúdo deve ser inserido abaixo -->
  <div class="content-item-body">

    <p> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>

    </div>
</div>
</div>
    `
  },

  {
    title: 'Página Inicial',
    code:
    `
    <!-- MODELO - Página Inicial -->

<!-- Modelo de página inicial da disciplina -->
<div class="graduation">

<!-- Header -->
<div class="container header">
  <img class="img-banner" src="https://assets.univesp.br/canvas/img/banners/modelo_banner.jpg">
  <div class="container">
    <div>
      <span class="course-name">Nome_do_Curso</span>
      <h1 class="discipline-name">Nome_da_Disciplina</h1>
    </div>
    <a class="btn btn-syllabus" href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" target="_blank">Plano de Ensino</a>
  </div>
</div>

<div class="planejamento-estudo">
  <h1>Planejamento de Estudos</h1>
  <p style="margin-top: 0;">Esta disciplina é de <strong>xx horas</strong></p>
  <hr />
  <p>Está previsto que você use cerca de <strong>xx horas/semana</strong></p>
</div>

<!-- Introdução -->
<div class="intro">



  <!-- Apresentação -------------------------------------------------------------------------- -->
  <div class="container">
    <h2>Apresentação</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/xxxxxxxxxxx" frameborder="0" allowfullscreen></iframe>
  <div class="btn-bar">
    <a class="btn btn-padrao icon-educators" href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">Slides de Apoio</a>
    <a class="btn btn-padrao icon-cloud-download" href="https://drive.google.com/uc?export=download&id=xxxxxxxxxxxxx">Download do Video</a>
  </div>

  <!-- Formadores -->
  <div class="container">

    <h2>Formadores</h2>
    <div class="teacher">
      <img src="https://assets.univesp.br/canvas/img/prof/0default.jpg">
      <div>
        <h3>Prof. Dr. xxxxxxxxxxxx</h3>
        <h4>Autor</h4>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      </div>
    </div>

  </div>

  <!-- início do bloco Menu das Semanas  -->
  <!-- para desbloqueio quinzenal adicionar a classe "quinzenal" na div abaixo "container menu-semanas" -->
  <div class="container menu-semanas semanal">
    <h2>Menu das Semanas</h2>

        <div class="container title semana-1">
  <div class="before">08<br />mai</div>
          <span>1</span>
          <h1>xxxxxxxxx_Tema_da_Semana_1_xxxxxxxxxx</h1>
          <a class="overlay" href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">link</a>
        </div>

        <div class="container title semana-2">
  <div class="before">08<br />mai</div>
          <span>2</span>
          <h1>xxxxxxxxx_Tema_da_Semana_2_xxxxxxxxxx</h1>
          <a class="overlay" href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">link</a>
        </div>

        <div class="container title semana-3">
  <div class="before">08<br />mai</div>
          <span>3</span>
          <h1>xxxxxxxxx_Tema_da_Semana_3_xxxxxxxxxx</h1>
          <a class="overlay" href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">link</a>
        </div>

        <div class="container title semana-4">
  <div class="before">08<br />mai</div>
          <span>4</span>
          <h1>xxxxxxxxx_Tema_da_Semana_4_xxxxxxxxxx</h1>
          <a class="overlay" href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">link</a>
        </div>

        <div class="container title semana-5">
  <div class="before">08<br />mai</div>
          <span>5</span>
          <h1>xxxxxxxxx_Tema_da_Semana_5_xxxxxxxxxx</h1>
          <a class="overlay" href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">link</a>
        </div>

        <div class="container title semana-6">
  <div class="before">08<br />mai</div>
          <span>6</span>
          <h1>xxxxxxxxx_Tema_da_Semana_6_xxxxxxxxxx</h1>
          <a class="overlay" href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">link</a>
        </div>

        <div class="container title semana-7">
  <div class="before">08<br />mai</div>
          <span>7</span>
          <h1>xxxxxxxxx_Tema_da_Semana_7_xxxxxxxxxx</h1>
          <a class="overlay" href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">link</a>
        </div>



</div>
  <!-- fim do bloco Menu das Semanas  -------------------------------------------------------- -->

</div>

</div>
    `
  },

  {
    title: 'Revisitando Conhecimentos',
    code:
    `
    <div class="user_content">

    <!-- Início ----------------->
    <div class="container">

      <!-- SUBHEADER -->
      <div class="content-item text secondary">
        <div class="icon">
          <img src="https://assets.univesp.br/canvas/img/revisitando.svg">
        </div>
        <div class="content">
          <h2>Revisitando Conhecimentos</h2><!-- título -->
        </div>
      </div>
      <!-- FIM DE SUBHEADER -->

      <!-- CONTEÚDO -->
      <p>xxxxxxxxxxxxx</p><!-- texto -->
      <!-- FIM DE CONTEÚDO -->

    </div>
    <!-- Fim -------------------->

  </div>
    `
  },

  {
    title: 'Situação-problema',
    code:
    `
    <!-- Início ----------------->
    <div class="container">

      <!-- SUBHEADER -->
      <div class="content-item neutral">
        <div class="icon">
          <img src="https://assets.univesp.br/canvas/img/situacaoproblema.svg">
        </div>
        <div class="content">
          <h2>Situação-problema</h2><!-- título -->
        </div>
      </div>
      <!-- FIM DE SUBHEADER -->

   <!-- CONTEÚDO -->
  <div class="description">

      <p>xxxxxxxxxxxxx</p><!-- texto -->

  </div><!-- FIM DE CONTEÚDO -->
    </div>
   <!-- Fim -------------------->
    `
  },

  {
    title: 'Vem por Aí',
    code:
    `
    <!-- O que vem por aí? ---------------------------------------------------------------------------->
<div class="graduation">
<div class="container">
  <div class="content-item guide box">
    <div class="content">
      <h2>O que vem por aí</h2>
      <div class="description">
        <p style="font-size: 12pt;">xxxxxxxxxxxxx</p>
      </div>
    </div>
  </div>
</div>
</div>
    `
  },

  {
    title: 'Cabeçalho',
    code:
    `
    <!-- MODELO - cabeçalho -->
<div class="header">
<img class="img-banner" src="https://assets.univesp.br/canvas/img/banners/modelo_banner.jpg" alt="" />
<span class="course-name">xxxxxxxxxxxxxx</span>
<h1 class="discipline-name">xxxxxxxxxxxxxxxxxxxx</h1>
<!-- Inserir abaixo clássico, antigo ou sona-->
<h2 class="tipo">clássico</h2>
<a class="btn btn-syllabus" href="xxxxxxxxxxxxxxxxxxxxx" target="_blank">Plano de Ensino</a>
<br/>
<div class="planejamento-estudo">
  <h1>Planejamento de Estudos</h1>
  <p style="margin-top: 0;">Esta disciplina é de <strong>xx horas</strong></p>
  <hr />
  <p>Está previsto que você use cerca de <strong>xx horas/semana</strong></p>
</div>
<span class="semana-1">1</span>
<h1 class="semana-1">xxxxxxxxxxxxxxxxxxx</h1>

<span class="semana-2">2</span>
<h1 class="semana-2">xxxxxxxxxxxxxxxxxxx</h1>

<span class="semana-3">3</span>
<h1 class="semana-3">xxxxxxxxxxxxxxxxxxx</h1>

<span class="semana-4">4</span>
<h1 class="semana-4">xxxxxxxxxxxxxxxxxxx</h1>

<span class="semana-5">5</span>
<h1 class="semana-5">xxxxxxxxxxxxxxxxxxx</h1>

<span class="semana-6">6</span>
<h1 class="semana-6">xxxxxxxxxxxxxxxxxxx</h1>

<span class="semana-7">7</span>
<h1 class="semana-7">xxxxxxxxxxxxxxxxxxx</h1>

<span class="semana-8">8</span>
<h1 class="semana-8">xxxxxxxxxxxxxxxxxxx</h1>
</div>
    `
  }
]

export default listaMain
