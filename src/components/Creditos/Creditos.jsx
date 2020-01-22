import React, { Component } from 'react'
import '../../styles/scss/creditos.scss'

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
      console.log(`Request returned with an error: ${err}`)
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
           <li><span className="version">v1.0</span><br />12/08/2019<br />Versão inicial do Montagem Web App.</li>
           <li><span className="version">v1.1</span><br />20/08/2019<br />Adicionado o construtor de Vídeos Base e algumas melhorias de layout para telas menores.</li>
           <li><span className="version">v2.0</span><br />19/09/2019<br />Novo layout. "Diferenciados" funcionando corretamente. Aprimoramento de funcionalidades em telas menores.</li>
           <li><span className="version">v2.1</span><br />04/10/2019<br />Adicionada a seção de Documentação do site e corrige alguns pequenos bugs.</li>
           <li><span className="version">v2.2</span><br />09/10/2019<br />Corrige alguns bugs e atualiza a seção dos banners e a planilha das Videoaulas.</li>
           <li><span className="version">v2.3</span><br />17/01/2020<br />Adicionado Construtor do Menu Semanas da página inicial e busca da foto dos professores dentro da seção 'Mais'.</li>
            {versoes.map((versao, index) => (
              <li key={index}>
                <div><span className="version"><strong>{versao.name}</strong></span> - {versao.data}</div>
                <div className="ml-5 mt-3">{versao.details}</div>
              </li>
            ))}
          </ul>
          <h5 className="mt-5 mb-3">Créditos</h5>
          <ul>
            <li>Desenvolvido por Leonardo Reina e Gabriel Gallo</li>
          </ul>
        </div>
      </div>
    )
  }
}
