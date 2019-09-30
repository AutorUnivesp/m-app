const doc = [
  {
    title_content: "Abaixo você encontrará as informações necessárias sobre todo o conteúdo de código <strong>front-end</strong> utilizados pela equipe da Montagem da Univesp. Em seguida você verá uma lista com as versões JS (ECMAScripts) utilizadas, assim como suas bibliotecas e frameworks. Além disso, também utilizamos outras tecnologias para integrar informações."
  },
  {
    header_content: [
      {
        itemContent: 'ES5 e jQuery - 80% de todo o código escrito. (Utilizamos esse padrão para favorecer a compatibilidade com o Internet Explorer)'
      },
      {
        itemContent: 'ES6 e posteriores - Utilizamos algumas arrow functions e modelos novos de concatenação. Este último evitamos no ambiente do Canvas por não ter compatibilidade com o IE.'
      },
      {
        itemContent: 'React JS - Arquitetamos o site da Montagem e os construtores completamente em React. Além também de servir para renderizar áudios, inputs e textareas no ambiente do Canvas.'
      },
      {
        itemContent: 'Prism JS - Usamos essa biblioteca para estilizar tags de código HTML.'
      },
      {
        itemContent: 'Github - Repositório de códigos front-end da Montagem, além de utilizar o Github pages para manter o montagem web-app.'
      },
      {
        itemContent: 'SheetsAPI - Guardamos a maior parte das coisas em planilhas do google. Alguns itens como as senhas e datas especifícas são armazenadas nesse formato e são requisitadas pelo site para trazer informações em formato JSON.'
      }
    ]
  },
  {
    bottom_header_content: "A seguir, detalhamos melhor como utilizamos cada uma das tecnologias descritas, exemplos de como utilizá-las e alguns breves tutoriais."
  },
  {
    canvas_content: [
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      }
    ]
  },
  {
    m_app: [
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      },
      {
        itemContent: '',
        example: ''
      }
    ]
  }
]

const docJson = JSON.stringify(doc)

console.log(docJson)
