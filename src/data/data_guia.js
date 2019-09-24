const itens = [
  {
    id: 'item1',
    title: 'Exercício de apoio | Teste',
    paragraph: 'Quando um Exercício de apoio for montado como teste, além do código HTML e do conteúdo da atividade, deve-se seguir a seguinte configuração:',
    list: [`Tipo de Questionário: "Praticar Teste"`,
            `Desmarcar a opção “Embaralhar as Respostas”`,
            `Marcar a opção "Permitir Várias Tentativas" além de marcar as opções “Deixar alunos ver suas resposta de questionário (perguntas incorretas serão marcadas no feedback do aluno)” e “Permitir que os alunos vejam as respostas corretas”`,
            `Se atentar à pontuação: Exercícios de apoio NÃO valem nota.`,
            `Se atentar à data. Exercícios de apoio Não tem data de vencimento.`,
            `Não se esqueça de sempre salvar as atividades após as alterações.`
          ],
          code: ``
  },
  {
    id: 'item2',
    title: 'Exercício de apoio | Página de Conteúdo',
    paragraph: `Quando um Exercício de apoio for montado como Página de conteúdo se atentar na formatação (Seguir padrão do HTML) e sempre que possível inserir a numeração das questões através do HTML utilizando as listas Ordenadas <ol> (Para Números “1, 2,3...”) <ol class=”a”> (Para numeração em letras “a, b, c...”) e <ol class”i”> (Para números romanos “I, II, III...”. Para listas não ordenadas <ul> (Para Bullet).

    Obs: Não se esqueça de sempre mudar o nome da disciplina, o número da semana e o tema da semana nos locais indicados no código HTML. Tais informações se econtram na página inicial de cada disciplina.
    `,
    list: [],
    code: ``
  },
  {
    id: 'item3',
    title: 'Atividade para Avaliação | Ferramenta Teste',
    paragraph: 'Quando uma atividade para avaliação for montada como teste, além do código HTML e do conteúdo da atividade, deve-se seguir a seguinte configuração:',
    list: ['(Padrão Univesp é 10 pontos)',
          `Marcar a opção "Embaralhar as respostas"`,
          `Marcar a opção "Permitir Várias Tentativas"`,
          `Marcar a opção "Tentativas Permitidas" e preencher a caixa que tem em seguida com o número “3”.`,
          `Desmarcar a opção "Deixar alunos ver suas resposta de questionário (perguntas incorretas serão marcadas no feedback do aluno)"`,
          `Inserir as Datas de Abertura e vencimento da Atividade que podem ser conferidas na Planilha de Controle da Montagem.`,
          `Se atentar a pontuação de cada questão.`,
          `Não deixar comentários em nenhuma questão.`,
          `Verificar Layout das questões e garantir que nenhuma fique ilegível.`,
          `Colocar o número de cada pergunta. Ex: Pergunta 1, Pergunta 2...`,
          `O Gabarito deve ser montado em HTML e adicionado ao drive Gabaritos AVA.`
        ],
        code: ``
  },
  {
    id: 'item4',
    title: 'Atividade para Avaliação | Ferramenta Atividade',
    paragraph: 'Quando uma atividade para avaliação for montada como ATIVIDADE, além do código HTML e do conteúdo da atividade, deve-se seguir a seguinte configuração:',
    list: [
      `Pontuação nas configurações e em cada questão.(Padrão Univesp é 10 pontos)`,
      `Inserir as Datas de Abertura e vencimento da Atividade que podem ser conferidas na Planilha de Controle da Montagem.`,
      `Inserir tipo de envio "Online" e marcar as seguintes opções "Uploads do arquivo" "Restringir tipos de arquivo de upload" e inserir "PDF" na caixinha`,
      `Verificar Layout das questões e garantir que nenhuma fique ilegível.`,
      `O Gabarito deve ser montado em HTML e adicionado ao drive Gabaritos AVA.`
    ],
    code: ``
  },
  {
    id: 'item5',
    title: 'Fórum de Dúvidas | Fórum Temático',
    paragraph: 'Marca as seguintes opções:',
    list: ['Permitir respostas ligadas',
    'Permitir curtidas',
    'Classificar por curtidas',
    'Esse é um fórum de grupo e inserir o Grupo.',
    'Salvar as alterações.'],
    code: ``
  },
  {
    id: 'item6',
    title: 'Importação de Conteúdo | Semana 0 – Disciplinas Novas',
    paragraph: '',
    list: ['Buscar a disciplina pelo código.',
    'Clicar na sala criada',
    `Selecionar “Adicionar Conteúdo Existente”`,
    `Tipo de Conteúdo: Selecione “Copiar um Curso do Canvas”`,
    `Pesquisar um Curso: Digite “Modelo” e escolha a opção “Modelo para Importação – Curso Novo”`,
    `Conteúdo: Marque a opção “Todo conteúdo”.`,
    `Clique em “Importar”.`,
    `Por fim, faça as alterações necessárias. “Ver Montagem | Semana 0 – Disciplinas Novas”.`],
    code: ``
  },
  {
    id: 'item7',
    title: 'Importação de Conteúdo | Semana 0 – Reoferta',
    paragraph: '',
    list: ['Buscar a disciplina pelo código.',
    'Clicar na sala criada',
    `Selecionar “Adicionar Conteúdo Existente”`,
    `Tipo de Conteúdo: Selecione “Copiar um Curso do Canvas”`,
    `Pesquisar um Curso: Copiar o código ID do SIS da última oferta e colar nesse campo. Não esqueça de clicar no curso.`,
    `Conteúdo: Marque a opção “Todo conteúdo”.`,
    `Clique em “Importar”.`,
    `Por fim, faça as alterações necessárias. “Ver Montagem | Semana 0 – Reoferta”.`],
    code: ``
  },
  {
    id: 'item8',
    title: 'Montagem | Semana 0 - Disciplinas Novas',
    paragraph: '',
    list: ['Página Inicial (Código HTML)',
    'Página Cabeçalho (definir se o modelo é Antigo, Clássico ou Sona). Ver código HTML',
    `Redefinir as datas de abertura dos módulos Data de abertura dos Módulos`],
    code: ``
  },
  {
    id: 'item9',
    title: 'Montagem | Semana 0 - Reoferta ( 1 )',
    paragraph: '',
    list: ['Adicionar Fórum em todas as semanas e deixar configurado de forma correta (Caso não tenha fórum)*',
    'Despublicar módulos',
    `Converter as Atividades para avaliação em Exercícios de Apoio (teste)`,
    `Todos os exercícios como PDF devem ser convertidos em HTML.`,
    `Página gabaritos, remover o links, deixar apenas o cabeçalho.`,
    `Verificar se existem gabaritos na aba "todas as páginas". Caso existam,  deixar página em branco.`,
    `Mudar número do curso nos Aplicativos dentro da aba “Configurações”`,
    `Corrigir Página inicial (Não deixar módulo, mas a página do curso mesmo e ajustar o que for necessário)`,
    `Slide: Deixar nome Slide da Videoaula X  e aumentar recuo`,
    `Inserir botão de Download das videoaulas e dos Slides com os ícones. Código:`],
    code: `
    Slides:

    <a class="btn btn-padrao icon-educators" href="xxxxxxxxxxxx">
      Slides de Apoio
    </a>

    Download:

    <a class="btn btn-padrao icon-cloud-download"
      href="https://drive.google.com/uc?export=download&id=xxxxxxxxxxxxx">
      Download do Video
    </a>
    `
  },
  {
    id: 'item10',
    title: 'Montagem | Semana 0 - Reoferta ( 2 )',
    paragraph: '',
    list: ['Remover requisito dos módulos (Conforme necessidade) e adicionar data para desbloqueio (verificar datas na planilha de controle da Montagem)',
    `Remover módulo Download`,
    `Organizar semanas 7....1`,
    `Arrumar página cabeçalho caso seja necessário`,
    `Vídeos como fóruns devem ser convertidos em páginas.`,
    `Inserir curso na subconta correta (Caso necessário).`,
    `Verificar se o curso tem: Orientações Gerais, Projeto Pedagógico e Normas Acadêmicas`,
    `Por fim gerar páginas iniciais novamente`],
    code: ``
  },
  {
    id: 'item11',
    title: 'Checklist DP’s',
    paragraph: 'Roteiro para Montagem das disciplinas de DPs no Espaço de Trabalho: (importante:  Arrumar no espaço de trabalho antes de importar)',
    list: [
      { section: `Em "Configurações" na aba "Aplicativos", remover (se houver):`,
        itens: [`Orientações Gerais...`, `Plano de Ensino`, `Gabaritos`, `Plano de videoaulas`]
      },
      { section: `Configurar o Menu de Navegação com os seguintes itens:`,
        itens: [`Página Inicial`, `Avisos`, `Módulos`, `Notas`, `Cursos Antigos`, `Normas Acadêmicas`]
      },
      `Verificar se há avisos na disciplina e removê-los (Menu avisos)`,
      `Colocar "Módulos" como página inicial do curso`,
      { section: `Criar um Módulo para download das videoaulas (se não houver). Colocar uma página "Download das videoaulas". Verificar se já existe a página de download das videoaulas e usar o link dela para atualizar o código HTML:`,
        itens: [`<p><a class="btn btn-padrao icon-cloud-download" href="xxxxxxxxxxxx" target="_blank">Download dos Vídeos</a></p>.`, `Se não houver, precisamos criá-la. Nos cursos mais antigos, as videoaulas estão em outra conta que não é a do Autor, então será preciso analisar cada caso.`]
      },
      { section: `Nos Módulos:`,
        itens: [`Remover a data de abertura.`, `Em Requisitos, clicar em "Aluno deve completar um desses requisitos" em seguida selecionar "Semana X" e "exibir o item" (normalmente são defaut).`, `Remover o item "Organização Didática" se tiver.`, `Checar a formatação dos nomes dos itens do módulo e mantê-lo no padrão (Texto-base, Texto de apoio, Material de apoio etc.)`, `Verificar se há fóruns de dúvidas e removê-los`,
        `Remover também os fóruns temáticos.`, `Verificar se há vídeos ou videoaulas criados como fórum, se houver montá-los como página e remover o fórum (Se forem muitos vídeos de apoio ou base inviabilizando a montagem como página, bloquear os fóruns para comentários, porém esse bloqueio não vai na importação então será necessário fazer o bloqueio novamente na nova disciplina. Convém verificar o que dá menos trabalho).`, `Testar se os links dos materiais didáticos estão funcionando.`, `Verificar se não há links montados como páginas (Páginas com nome texto-base ou apoio onde há apenas um link). Neste caso, eliminar a página e montar o item como URL externa.`, `Verificar se há teste com envio de arquivo e transformá-los em páginas.`, `Todos os exercícios de apoio deverão ter gabarito ou feedback, caso contrário, devem ser removidos.`, `Atividade para avaliação deve ser convertida em exercícios de apoio`]
      },
      `Em Atividades, manter apenas "NotaAvaliaçãoPresencial", eliminar todas as outras se houver. Obs: Conforme citado acima as atividades avaliativas serão transformadas em apoio.`,
      `Gerar a página de cada semana dos módulos (Semana 1... Semana 7).`,
      `Conferir se as páginas Semana X possuem todos os itens de seu respectivo módulo.`,
      `Modificar linguagem, quando estiver “Olá, alun@!”, mudar para “Olá, alunos e alunas!”`
    ],
    code: ``
  },
  {
    id: 'item12',
    title: 'Inserindo um Input',
    paragraph: 'Para inserir um input, coloque a class “inputfield” na div que você deseja usar como input. Não há a necessidade de inserir nada dentro da div.',
    list: [],
    code: `
  <div class=”inputfield”></div>
    `
  },
  {
    id: 'item13',
    title: 'Inserindo um Textarea',
    paragraph: 'Para inserir um textarea, coloque a class “textarea” na div que você deseja usar como textarea. Não há a necessidade de inserir nada dentro da div.',
    list: [],
    code: `
  <div class=”textarea”></div>
    `
  },
  {
    id: 'item14',
    title: 'Inserindo um Audio',
    paragraph: 'Para inserir um audio, coloque a class “insertAudio” na tag “a” que você deseja usar como audio. Além disso, passe o caminho do audio no href da tag “a”',
    list: [],
    code: `
  <a class=”insertAudio” href="/courses/595/files/1458211/download"></div>
    `
  },
  {
    id: 'item15',
    title: 'Inserindo um botao Imprimir',
    paragraph: 'Para inserir um botão de imprimir, coloque a id “imprimir” na tag “div” que você deseja usar como botão de imprimir.',
    list: [],
    code:
    `
    <div id="imprimir" style="width: 60px;">Imprimir</div>
    `
  },
  {
    id: 'item16',
    title: 'Classe “Menu-Semanas”',
    paragraph: 'Quando for criar o menu das semanas da disciplina, colocar na div container a classe “menu-semanas”. Isso permite a identificação da página inicial pelo Javascript.',
    list: [],
    code: `
  <div class=”container menu-semanas”></div>
    `
  },
  {
    id: 'item17',
    title: 'Classe “Semanal”',
    paragraph: 'Quando for criar o menu das semanas da disciplina, colocar na div container a classe “semanal”. Isso permite a identificação do desbloqueio das semanas como sendo a cada 7 dias pelo Javascript.',
    list: [],
    code: `
  <div class=”container menu-semanas semanal”></div>
    `
  },
  {
    id: 'item18',
    title: 'Classe “Quinzenal”',
    paragraph: 'Quando for criar o menu das semanas da disciplina, colocar na div container a classe “quinzenal”. Isso permite a identificação do desbloqueio das semanas como sendo a cada 15 dias pelo Javascript.',
    list: [],
    code: `
  <div class=”container menu-semanas quinzenal”></div>
    `
  },
  {
    id: 'item19',
    title: 'Classe “Certa” - Diferenciados',
    paragraph: 'Quando for criar um exercício diferenciado que contenha alternativas, por favor inserir a classe “certa” nas respostas. Isso permite a identificação das respostas corretas pelo Javascript. As substituições dos textos dos modelos DEVEM SER feitas no editor de HTML do canvas.',
    list: [],
    code: ``
  },
  {
    id: 'item20',
    title: 'Modelo  1 – Seleciona a Certa',
    paragraph: '',
    list: [],
    code: `
    Resposta certa...

    <div id=”1_a” class=”btn-challenge certa”>Alternativa 1</div>

    Resposta errada...

    <div id=”1_b” class=”btn-challenge”>Alternativa 2</div>
    `
  },
  {
    id: 'item21',
    title: 'Modelo  5 – Clicar e Selecionar',
    paragraph: 'O modelo 5 “Clicar e Selecionar” aceita somente 3 tamanhos de exercício: com 6 alternativas (podendo ter até 3 corretas), com 9 alternativas (podendo ter até 4 corretas) ou com 12 alternativas (podendo ter até 5 corretas). O modelo padrão (HTML que está no github) é o que contém 12 alternativas. Caso queira um modelo com 6 alternativas – retirar as 6 últimas divs. Caso queira um com 9 alternativas – retirar as 3 últimas divs.  Isso se faz necessário, pois qualquer outro número de alternativas (por exemplo, 8, 10, etc.) fará com que o JavaScript não funcione corretamente.',
    list: [],
    code: `
    Resposta certa...

    <div class=”gridItem-modelo5 certa” id=”box1”>Alternativa 1</div>

    Resposta errada...

    <div class=”gridItem-modelo5” id=”box2”>Alternativa 2</div>

    Exemplo de div a ser retirada (caso queira menos questões):

    <div class=”gridItem-modelo5” id=”box12”>Alternativa 12</div>
    `
  },

  {
    id: 'item22',
    title: 'Modelo  6 – Clicar e Selecionar',
    paragraph: '',
    list: [],
    code: `
    Resposta certa...

    <div class=”caixa-checkbox certa” id=”checkbox1”></div>

    Resposta errada...

    <div class=”caixa-checkbox” id=”checkbox2”></div>
    `
  },
  {
    id: 'item23',
    title: 'Modelo  7 – Múltipla Escolha',
    paragraph: '',
    list: [],
    code: `
    <div class=”gridContainer1-modelo7”>

      Resposta certa...

      <div class=”caixa-checkbox-modelo7 certa”>Alternativa 1</div>

      Respostas erradas...
      <div class=” caixa-checkbox-modelo7”>Alternativa 2</div>
      <div class=” caixa-checkbox-modelo7”>Alternativa 3</div>

    </div>
    `
  }
]

const itensToJson = JSON.stringify(itens)
console.log(itensToJson)

export default itens
