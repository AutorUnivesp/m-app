import React, { Component } from 'react'
import '../../styles/scss/documentacao.scss'
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
    return (
      <div className="header-content">
        <h2 className="header-doc-title">Documentação Javascript Montagem</h2>
        <p className="header-paragraph">{docs.length > 0 && docs[0].title_content}</p>
        <ul className="header-list">
          {docs.length > 0 && docs[1].header_content.map((item, index) => (
            <li className="header-doc-item" key={index}><i class="fas fa-arrow-right mr-5"></i>{item.itemContent}</li>
          ))}
        </ul>
        <p className="header-paragraph">{docs.length > 0 && docs[2].bottom_header_content}</p>
      </div>
    )
  }
}

class MainDoc extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="section">Canvas Docs.</h2>
        <div className="section-content">

        </div>

        <h2 className="section">Montagem Web App Docs.</h2>
        <div className="section-content">

        </div>
      </React.Fragment>
    )
  }
}

export const Documentacao = () => {
  return (
    <div className="doc-box">
      <HeaderDoc />
      <MainDoc />
    </div>
  )
}
