import React, { Component } from 'react'
import '../../css/index.css'

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
            {versoes.map((versao, index) => (
              <li key={index}>
                <div><span className="version"><strong>{versao.name}</strong></span> - {versao.data}</div>
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
