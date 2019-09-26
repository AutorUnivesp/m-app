import React, { Component } from 'react'
import '../../css/documentacao.scss'
import '../../data/documentacao.js'

class HeaderDoc extends Component {
  state = {
    docs: []
  }

  componentDidMount() {
    this.receiveDocData()
  }

  receiveDocData = () => {
    fetch('https://raw.githubusercontent.com/AutorUnivesp/m-app/master/src/data/documentacao.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          docs: data
        })
      })
    })
    .catch(err => {
      console.log(`Request returned with an error: ${err}`)
    })
  }

  render() {
    const { docs } = this.state
    console.log(docs)
    return (
      <div className="mt-5">
        <h2 className="header-doc-title">Documentação Javascript Montagem</h2>
        <p>{docs.length > 0 && docs[0].title_content}</p>
        <ul>
          {docs.length > 0 && docs[1].header_content.map((item, index) => (
            <li className="header-doc-item" key={index}>{item.itemContent}</li>
          ))}
        </ul>
        <p>{docs.length > 0 && docs[2].bottom_header_content}</p>
      </div>
    )
  }
}

export const Documentacao = () => {
  return (
    <div className="doc-box">
      <HeaderDoc/>
    </div>
  )
}
