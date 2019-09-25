const antigosHTML = [
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
    title: 'Pagina Inicial',
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
  },
  {
    title: 'Texto de Apoio',
    code:
    `
    <!-- Início ----------------->
      <!-- HEADER PRINT-ONLY -->
      <div class="container intro print-only">
        <h5 class="subheader">xxxxxxxxxxxxx</h5><!-- nome da disciplina -->
        <div class="container title">
          <span>0</span><!-- número da semana -->
          <h1>xxxxxxxxxxxxx</h1><!-- tema da semana -->
        </div>
      </div>
      <!-- Fim de HEADER PRINT-ONLY -->

      <!-- SUBHEADER -->
      <div class="content-item text primary">
        <div class="icon">
          <img src="https://assets.univesp.br/canvas/img/texto2.svg">
        </div>
        <div class="content">
          <h5>Texto de apoio</h5>
          <h2>xxxxxxxxxxxxx</h2><!-- título -->
        </div>
      </div>
      <!-- FIM DE SUBHEADER -->

      <!-- CONTEÚDO -->
      <p>xxxxxxxxxxxxx</p><!-- conteudo -->
      <!-- Fim -------------------->
    `
  },
  {
    title: 'Texto Base',
    code:
    `
    <!-- Início ----------------->
      <!-- HEADER PRINT-ONLY -->
      <div class="container intro print-only">
        <h5 class="subheader">xxxxxxxxxxxxxx</h5><!-- nome da disciplina -->
        <div class="container title">
          <span>xxxxxxxxxx</span><!-- número da semana -->
          <h1>xxxxxxxxxxx</h1><!-- tema da semana -->
        </div>
      </div>
      <!-- Fim de HEADER PRINT-ONLY -->

      <!-- SUBHEADER -->
      <div class="content-item text primary">
        <div class="icon">
          <img src="https://assets.univesp.br/canvas/img/texto2.svg">
        </div>
        <div class="content">
          <h5>Texto-base</h5>
          <h2>xxxxxxxx</h2><!-- título -->
        </div>
      </div>
      <!-- FIM DE SUBHEADER -->

      <!-- CONTEÚDO -->
    <p>xxxxxxxxxxxxxxxxxx</p>



      <!-- Fim -------------------->
    `
  },
  {
    title: 'Playlist de Apoio',
    code:
    `
    <!-- Vídeo de apoio - xxxxxxxxxxxxxxxxxxxxxxxx | yyyyyyyyyyy -------------------------------------->

<div class="graduation">
  <div class="container">
    <div class="content-item video secondary">
      <div class="icon"><img src="https://assets.univesp.br/canvas/img/video.svg" /></div>
        <div class="content">
          <h5>V&iacute;deo de apoio</h5>
          <h2> Planejamento de aula | Univesp</h2>
        </div>
      </div>
    <div class="content-item-body">

      <div class="enhanceable_content tabs playlist" style="width: 698px;">

        <div id="fragment-1" style="padding: 0; background-color: #f2f2f2; border-color: transparent;">
          <p><iframe src="https://www.youtube.com/embed/xxxxxxxxx" allowfullscreen="allowfullscreen"></iframe></p>
        </div>

        <div id="fragment-2" style="padding: 0; background-color: #f2f2f2; border-color: transparent;">
          <p><iframe src="https://www.youtube.com/embed/xxxxxxxx" allowfullscreen="allowfullscreen"></iframe></p>
        </div>

        <div id="fragment-3" style="padding: 0; background-color: #f2f2f2; border-color: transparent;">
          <p><iframe src="https://www.youtube.com/embed/xxxxxxxx" allowfullscreen="allowfullscreen"></iframe></p>
        </div>

          <!-- TROCAR ID QUANDO ADICIONAR NOVAS DIVS

          Exemplo: id="fragment-4"... id"fragment-5"....

        -->

        <ul>

          <li style="width: 100%; background: #f2f2f2;"><a style="text-decoration: none; color: black;" href="#fragment-1"><span>XXXXXXXXXXXX | YYYYYYYYYYY</span></a></li>
          <li style="width: 100%; background: #f2f2f2;"><a style="text-decoration: none; color: black;" href="#fragment-2"><span>XXXXXXXXXX | YYYYYYYYYYY </span></a></li>
          <li style="width: 100%; background: #f2f2f2;"><a style="text-decoration: none; color: black;" href="#fragment-3"><span>XXXXXXXXXXXX | YYYYYYYYYY </span></a></li>

          <!-- TROCAR ID QUANDO ADICIONAR NOVAS LI'S

          Exemplo: id="fragment-4"... id"fragment-5"....

        -->

        </ul>
        </div>

      </div>
  </div>
</div>
    `
  },
  {
    title: 'Vídeo de Apoio',
    code:
    `
    <!-- Vídeo de apoio - xxxxxxxxxxxxxxxxxxxxxxxx | yyyyyyyyyyy -------------------------------------->

<div class="graduation">
<div class="container">
<div class="content-item video secondary">
<div class="icon"><img src="https://assets.univesp.br/canvas/img/video.svg" /></div>
<div class="content">
<h5>V&iacute;deo de apoio</h5>
<h2> xxxxxxxxxxxxxxxxxxxx | yyyyyyyyyy</h2>
</div>
</div>
<div class="content-item-body"><iframe src="https://www.youtube.com/embed/xxxxxxxxxxxxx" allowfullscreen="allowfullscreen"></iframe></div>
</div>
</div>
    `
  },
  {
    title: 'Video Base',
    code:
    `
    <!-- Vídeo-base - xxxxxxxxxxxxxxxxxxxxxxxx | yyyyyyyyyyy ------------------------------------------>
<div class="graduation">
<div class="container">
<div class="content-item video primary">
	<div class="icon">
		<img src="https://assets.univesp.br/canvas/img/video.svg">
	</div>
	<div class="content">
		<h5>VÃ­deo-base</h5>
		<h2>xxxxxxxxxxxxxxxxxxxxxxxx - yyyyyyyyyyy</h2><!-- tÃ­tulo -->
	</div>
</div>
<div class="content-item-body">
	<iframe src="https://www.youtube.com/embed/xxxxxxxxxxx" width="300" height="150" allowfullscreen="allowfullscreen"></iframe>
</div>
</div>
</div>
    `
  },
  {
    title: 'Videoaula',
    code:
    `
    <div class="graduation">
<div class="container">
	<div class="content-item video primary">
		<div class="icon">
			<img src="https://assets.univesp.br/canvas/img/video.svg">
		</div>
		<div class="content">
			<h5>Videoaula</h5>
			<h2>xxxxxxxxxxxxx</h2><!-- título -->
		</div>
	</div>
	<div class="content-item-body">
		<iframe src="https://www.youtube.com/embed/xxxxxxxxxxx" width="300" height="150" allowfullscreen="allowfullscreen"></iframe>
		<div class="btn-bar">

			<a class="btn btn-padrao icon-educators" href="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" target="_blank" rel="noopener noreferrer">Slides de  Apoio</a>

			<a class="btn btn-padrao icon-cloud-download" href="https://drive.google.com/uc?export=download&amp;id=xxxxxxxxxxxxxx" target="_blank" rel="noopener noreferrer">Download do Vídeo</a>
		</div>
		<div class="synopsis"><p>sinopsesinopsesinopsesinopse</p></div><!-- texto -->
	</div>
</div>
</div>
    `
  },
  {
    title: 'Videoaula - Acessibilidade',
    code:
    `
    <div class="graduation">
<div class="container">
<div class="content-item video primary">
<div class="icon"><img src="https://assets.univesp.br/canvas/img/video.svg" alt="" /></div>
<div class="content">
<h5>Videoaula</h5>
<h2>xxxxxxxxxxxxxxxxxxxxxxxx</h2>
</div>
</div>
<!-- Versão COM libras -->
<div class="content-item-body"><iframe src="https://www.youtube.com/embed/xxxxxxxxxxxx" allowfullscreen="allowfullscreen"></iframe>

<!-- Versão SEM libras -->
<div style="position:relative">
<div style="position: absolute; top: 5px">
<a class="inline_disabled" title="Versão sem Libras" href="https://youtu.be/xxxxxxxxxx" target="_blank">Versão sem Libras</a>
</div>

<div class="btn-bar">


	<a class="btn btn-padrao icon-audio" href="https://drive.google.com/uc?export=download&amp;id=11HxX1lZKGDKm3z31qHrs2vhLCWgEmCUc" target="_blank" rel="noopener noreferrer">Audiodescrição</a>

	<a class="btn btn-padrao icon-educators" href="https://drive.google.com/file/d/13n-xsvyw6JeWreoqdS68w6GXFvSy4Wtr/preview" target="_blank" rel="noopener noreferrer">Slides de  Apoio</a>

	<a class="btn btn-padrao icon-cloud-download" href="https://drive.google.com/uc?export=download&amp;id=11HxX1lZKGDKm3z31qHrs2vhLCWgEmCUc" target="_blank" rel="noopener noreferrer">Download do Vídeo</a>
	</div>
	</div>
	</div>

<div class="synopsis">
<p>xxxxxxxxxxxxxxxxxxxxxxxx</p>
</div>
</div>
</div>
</div>
    `
  },
  {
    title: 'Material - Apoio',
    code:
    `
    <!-- Início ----------------->
      <!-- HEADER PRINT-ONLY -->
      <div class="container intro print-only">
        <h5 class="subheader">xxxxxxxxxxxxx</h5><!-- nome da disciplina -->
        <div class="container title">
          <span>0</span><!-- número da semana -->
          <h1>xxxxxxxxxxxxx</h1><!-- tema da semana -->
        </div>
      </div>
      <!-- Fim de HEADER PRINT-ONLY -->

      <!-- SUBHEADER -->
      <div class="content-item text primary">
        <div class="icon">
          <img src="https://assets.univesp.br/canvas/img/texto2.svg">
        </div>
        <div class="content">
          <h5>Material de apoio</h5>
          <h2>xxxxxxxxxxxxx</h2><!-- título -->
        </div>
      </div>
      <!-- FIM DE SUBHEADER -->

      <!-- CONTEÚDO -->
      <p>xxxxxxxxxxxxx</p><!-- conteudo -->
      <!-- Fim -------------------->
    `
  },
  {
    title: 'Material - Base',
    code:
    `
    <!-- Início ----------------->
      <!-- HEADER PRINT-ONLY -->
      <div class="container intro print-only">
        <h5 class="subheader">xxxxxxxxxxxxx</h5><!-- nome da disciplina -->
        <div class="container title">
          <span>0</span><!-- número da semana -->
          <h1>xxxxxxxxxxxxx</h1><!-- tema da semana -->
        </div>
      </div>
      <!-- Fim de HEADER PRINT-ONLY -->

      <!-- SUBHEADER -->
      <div class="content-item text primary">
        <div class="icon">
          <img src="https://assets.univesp.br/canvas/img/texto2.svg">
        </div>
        <div class="content">
          <h5>Material-base</h5>
          <h2>xxxxxxxxxxxxx</h2><!-- título -->
        </div>
      </div>
      <!-- FIM DE SUBHEADER -->

      <!-- CONTEÚDO -->
      <p>xxxxxxxxxxxxx</p><!-- conteudo -->
      <!-- Fim -------------------->
    `
  },
  {
    title: 'Atividade Avaliativa - Envio de Arquivo',
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
    title: 'Atividade Avaliativa - Gabarito',
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
    title: 'Atividade Avaliativa - Teste',
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
  },
  {
    title: 'Exercício de Apoio - Pergunta e Resposta',
    code:
    `
    <div class="user_content">
  <div class="container intro print-only">
    <h5 class="subheader">xxxxxxxxxxxxxx</h5> <!-- nome da disciplina -->
    <div class="container title"><span>xxxxxxxxxxxx</span> <!-- número da semana -->
      <h1>xxxxxxxxxxxxxxxxxxx</h1> <!-- tema da semana -->
    </div>
  </div>
  <div class="graduation">
    <div class="container">
      <div class="content-item tasks secondary">
        <div class="icon"><img src="https://assets.univesp.br/canvas/img/atividade4.svg" /></div>
        <div class="content">
          <h5>Exerc&iacute;cios de apoio</h5>
          <p>Apenas para praticar. N&atilde;o vale nota.</p>
        </div>
      </div>
      <div class="content-item-body">
        <p>&nbsp;</p>

          <ol>
            <li>xxxxxxxxxxxxxxxxxxxx <!-- PERGUNTA 1 -->
              <div class="collapse-cx-curta1">xxxxxxxxxxxxxxxxx</div> <-- GABARITO -->
            </li>

        <br /><br />

            <li>xxxxxxxxxxxxxxxxxxxx <!-- PERGUNTA 2 -->
              <div class="collapse-cx-curta1">xxxxxxxxxxxxxxxxx</div>
            </li>

        </ol>
        <br />
        <p>&nbsp;</p>
        <div class="btn-cx-curta botao-enviar-gabarito1" style="width: 150px; font-size: 14px;">Mostrar Gabarito</div>
      </div>
    </div>
  </div>
</div>
    `
  },
  {
    title: 'Exercício de Apoio - Teste',
    code:
    `
    <!-- Exercícios de apoio ferramenta de Teste-------------------------------------------------------------------------->
<div class="graduation">
  <div class="container">
    <div class="content-item tasks primary">
      <div class="icon"><img src="https://assets.univesp.br/canvas/img/atividade4.svg" /></div>
      <div class="content">
        <h5>Exerc&iacute;cios de apoio (xxxxxx)</h5>
        <p>Apenas para praticar. N&atilde;o vale nota.</p>
      </div>
    </div>
    <div class="content-item-body">
      <p>Olá, alunos e alunas!</p>
      <p>Esta atividade possui m&uacute;ltipla escolha. Para respond&ecirc;-la:</p>
      <ol>
        <li>Selecione, com o mouse, a alternativa que voc&ecirc; considerar correta;</li>
        <li>Repare que, ao selecionar uma alternativa, as sele&ccedil;&otilde;es anteriores s&atilde;o desmarcadas;</li>
        <li>Ap&oacute;s selecionar a resposta correta em todas as quest&otilde;es, v&aacute; at&eacute; o fim da p&aacute;gina e clique em &ldquo;Enviar teste&rdquo;.</li>
      </ol>
      <p>Pronto! Sua atividade j&aacute; est&aacute; registrada no AVA.</p>
    </div>
  </div>
</div>
    `
  }
]

const jsonAntigo = JSON.stringify(antigosHTML)
console.log(jsonAntigo)
