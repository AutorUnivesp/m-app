const apoio = [
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
    title: 'Apoio',
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
    title: 'Base',
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
    title: 'Acessibilidade',
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
  }
]

export default apoio
