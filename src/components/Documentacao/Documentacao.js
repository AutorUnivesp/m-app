import React, { Component } from 'react'
import { IconInstructureLine } from '@instructure/ui-icons'
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

  state = {
    docs: []
  }

  componentDidMount() {
    this.receiveMainDocData()
  }

  receiveMainDocData = () => {
    fetch('https://raw.githubusercontent.com/AutorUnivesp/m-app/master/src/data/documentacao.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          docs: data
        })
      })
    })
  }

  render() {
    const { docs } = this.state
    return (
      <div className="main-documentation">
        <h2 className="section">Canvas Docs.</h2>
        <div className="section-content">
          <ul>
            {docs.length > 0 && docs[3].canvas_content.map((item, index) => (
              <li className="canvas-doc-item">
                <IconInstructureLine className="mr-3"/><span>{item.itemContent}</span>
                <pre className="line-numbers">
                  <code className="language-javascript">
                    {item.example}
                  </code>
                </pre>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="section">Montagem Web App Docs.</h2>
        <div className="section-content">
          <ul>
            {docs.length > 0 && docs[4].m_app_content.map((item, index) => (
              <li className="canvas-doc-item">
                <i class="fab fa-react mr-3"></i><span>{item.itemContent}</span>
                <pre className="line-numbers">
                  <code className="language-javascript">
                    {item.example}
                  </code>
                </pre>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
