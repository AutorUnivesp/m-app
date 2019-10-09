const doc = [
  {
    title_content: "Abaixo você encontrará as informações necessárias sobre todo o conteúdo de código front-end utilizados pela equipe da Montagem da Univesp. Em seguida você verá uma lista com as versões JS (ECMAScripts) utilizadas, assim como suas bibliotecas e frameworks. Além disso, também utilizamos outras tecnologias para integrar informações."
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
      },
      {
        itemContent: 'Sass - Optamos pelo uso do pré-processador de css: Sass, para estilizar 90% do conteúdo do site. Dessa forma, o código se torna enxuto e menos repetitivo, além de possibilitar declarações de variáveis.'
      },
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
        subject: 'Links e Routes',
        itemContent: "A aplicação web do site da montagem foi desenvolvida usando a lib React JS, sendo assim é uma aplicação do tipo 'single-page-app' que utiliza o sistema de rotas do 'react-router-dom' para renderizar as páginas. todos os 'Routes' estão no componente principal que controla a navegação - App.js. Usamos o componente 'Link' da mesma biblioteca para fazer a ponte com o 'Route' e levar o usuário para página correspondente.",
        example:
        `
        <Link className="codigoItens" to="/codigos/antigo/" style={{ textDecoration: 'none'}}>
          <p>Antigo</p>
        </Link>

        <Route path="/codigos/antigo/" component={ModeloAntigo}/>
        `,
        codeType: 'html'
      },
      {
        subject: 'Arquitetura de pastas',
        itemContent: "A divisão das pastas foram feitas de acordo com o seu conteúdo. Em uma aplicação React, a pasta 'public' não deve ser alterada. Sendo assim, tudo deve estar inserido no caminho m-app/src/... No caso do Montagem Web App, 'src' contém as pastas 'components' (responsável pelo componentes React), 'css' (que guarda alguns arquivos de estilo), 'data' (onde está os arquivos JSON com os dados), 'images' (onde guardamos imagens e gifs), 'styles' (que envolve todo o estilo criado para o site em Sass).",
        example:
        `
        ____ public
        ____ src
             |___ components
             |___ css
             |___ data
             |___ images
             |___ styles
        ____ App.js
        ____ App.test.js
        ____ index.js
        .
        .
        .
        `,
        codeType: 'js'
      },
      {
        subject: 'Componentes com estado e sem estado',
        itemContent: `Embora a grande maioria dos componentes sejam Stateful Components (Componentes com estado), existem alguns Stateless Components (Componentes sem estado). No desenvolvimento da aplicação, a maioria foi pensada de maneira Stateless e foi sendo refatorada para Statefull conforme a necessidade.
        Já que guardamos os dados em JSON no repositório do Github, grande parte dos Stateless precisaram ser refatorados para receber os dados através de um 'raw'.
        Abaixo mostramos alguns exemplos de componentes sem estado e com estado. Lembrando que o método Render é obrigatório em componentes com estado.`,
        example:
        `
        // Stateful

        export class Creditos extends Component {
          state = {
            versoes: []
          }

          componentDidMount() {
            this.receiveData()
          }

          receiveData = () => {
            fetch('https://raw.githubusercontent.com/AutorUnivesp/m-app/master/src/data/versoes.json')
            .then(response => {
              response.json()
              .then(data => {
                this.setState({
                  versoes: data.results
                })
              })
            })
            .catch(err => {
              console.log(Request returned with an error: {err})
            })
          }

          render() {
            const { versoes } = this.state
            return (
              <div style={{marginTop: '10%'}}>
                <h4 className="text-center mt-5 titulo-montagem-app">Montagem Web App | Univesp</h4>
                <div className="montagem-web">
                  <h5 className="my-4">Versões</h5>
                  <ul>
                    {versoes.map((versao, index) => (
                      <li key={index}>
                        <div>
                          <span className="version">
                            <strong>{versao.name}</strong>
                          </span> - {versao.data}
                        </div>
                        <div className="ml-5 mt-3">{versao.details}</div>
                      </li>
                    ))}
                  </ul>
                  <h5 className="mt-5 mb-3">Créditos</h5>
                  <ul>
                    <li>Desenvolvido por Leonardo Reina, Gabriel Gallo e Victor Planas</li>
                  </ul>
                </div>
              </div>
            )
          }
        }

          // Stateless

          export const Construtores = () => {
             return (
               <div style={{marginTop: '15%'}}>
                 <div className="construtor-title">ESCOLHA SEU CONSTRUTOR</div>
                 <div className="gridConstrutores">
                  <Link to='/construtores/bases/'>
                    <button className="construtorElement">
                      <p>CONSTRUTOR<br/>BASES</p>
                    </button>
                  </Link>
                  <Link to='/construtores/diferenciados/'>
                   <button className="construtorElement">
                     <p>CONSTRUTOR<br />DIFERENCIADOS</p>
                   </button>
                  </Link>
                 </div>
               </div>
             )
          }
          `,
          codeType: 'js'
      },
      {
        subject: 'Montando os dados com JS, JSON e o Github',
        itemContent: `Como já foi dito anteriormente, optamos por armazenar os dados da
        aplicação em uma pasta 'data' com arquivos JSON. Esses arquivos foram construídos através de uma transformação
        de um array de objetos em Javascript. Para isso utilizamos uma função nativa da linguagem e aplicamos um 'log' para
        pegarmos a informação gerada. Abaixo um exemplo de como isso funciona:`,
        example:
        `
        // Temos um array armazenando algumas informações:

        const example = [
          {
            itemExample: 'Primeira informação'
          },
          {
            itemExample: 'Segunda informação'
          },
          {
            itemExample: 'Terceira informação'
          }
        ]

        // Usamos as funções nativas para transformá-lo em um JSON:

        const exampleToJson = JSON.stringify(example)

        console.log(exampleToJson)

        // Em seguida salvamos o valor retornado (abaixo) em um arquivo json:

        [
          {
            "itemExample":"Primeira informação"
          },{"itemExample":"Segunda informação"
          },{"itemExample":"Terceira informação"

          }
        ]

        /*
          Subimos o arquivo no Github e clicamos na opção 'Raw' na
          pasta do arquivo. Copiamos o link do arquivo, que deve
          se iniciar com
          'https://raw.githubusercontent.com/.../.../example.json'

          Em seguida usamos fetchAPI para trazer o conteúdo do json para o
          nosso componente.
        */

        state = {
          example: []
        }

        componentDidMount() {
          this.receiveData()
        }

        receiveData = () => {
          fetch('https://raw.githubusercontent.com/.../.../example.json')
          .then(response => {
            // tratamos a resposta com json
            response.json()
            .then(data => {
            // salvamos em 'data'
              this.setState({
                // setamos o state do nosso componente para receber data
                example: data
              })
            })
          })
          .catch(err => {
            console.log('Request returned with an error: {err}')
          })
        }

        // Após isso, podemos mapear a lista retornada e mostrar os dados utilizando a função .map():

        render() {
          return (
            <ul>
              {this.state.example.map((item, index) => (
                <li key={index}>
                  <div className="class-example">{item.itemExample}</div>
                </li>
              ))}
            </ul>
          )
        }
        `,
        codeType: 'js'
      },
      {
        subject: 'Utilizando Sass para enxugar o código',
        itemContent: `O pré-processador de css Sass foi utilizado no desenvolvimento da
        plataforma da Montagem como um recurso para deixar o código de css mais enxuto, o tornando menos
        repetitivo. Isso se torna possível devido a possibilidade de declarações de variáveis na sintaxe scss.
        Lembrando que, com o Sass, sempre que quisermos utilizar um trecho de css que se repete, criamos uma variável
        com @mixin.
        Para chamar as variáveis criadas, devemos sempre utilizar o @include.
        Abaixo uma breve explicação de como utilizamos o Sass:`,
        example:
        `
        /* --------- CRIANDO MEDIA QUERIES COM MIXINS ------- */

        @mixin small {
          @media (min-width: 0px) and (max-width: 799px) { @content; } }

        @mixin medium {
          @media (min-width: 800px) and (max-width: 990px) { @content; } }

        @mixin big {
          @media (min-width: 991px) { @content; } }

        /* --------- DECLARANDO VARIÁVEIS -------- */

        $textColor : #543c52;
        $shadowTitle : 0px 1px 1px #361d32;
        $hoverColor : #f55951;

        /* Declarando variáveis com trechos de código */

        @mixin example {
          display: block;
          width: 220px;
          height: 140px;
          background-color: #543c52;
          color: #f1e8e6;
          border-radius: 15px;
          font-size: 20pt;
          cursor: pointer;
          box-shadow: 3px 3px 20px #361d32;
          &:hover{ /* Usando hover em Sass */
            box-shadow: 8px 8px 15px #edd2cb;
            background-color: $hoverColor; /* Aqui utilizamos a variável declarada */
            color: #f1e8e6;
            font-weight: 400;
          }
        }

        @mixin example2 {
          color: #361d32;
          font-size: 5em;
          &:hover{
            color: $hoverColor;
          }
          &:focus{
            border: 1px 1px solid black;
            text-shadow: $shadowTitle;
          }
          &::placeholder{
            color: $textColor;
          }
        }

        /* --------- UTILIZANDO INCLUDES -------- */

        @include small{ /* Primeiro é feito o @include da media querie */
          /* Incluimos dentro da media querie os mixins necessários de acordo
          com as classes, Id's ou tags */
          .example { @include example; }
          #example2 p { @include example2; }
        }
        `,
        codeType: 'css'
      },
      {
        subject: 'Possibilidades de Melhoria',
        itemContent: `No futuro esperamos verificar a necessidade do Redux para aplicação
        do React. Além disso, uma integração com um banco de dados também seria ideal para
        dados que mudam constantemente.`,
        example: '',
        codeType: ''
      }
    ]
  }
]
export default doc

const docJson = JSON.stringify(doc)
