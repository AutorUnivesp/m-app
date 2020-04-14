import React, { Component } from 'react'
import Prism from "prismjs";
import '../../styles/scss/prism.css'
import { IconInstructureLine } from '@instructure/ui-icons'
import '../../styles/scss/documentacao.scss'
import doc from '../../data/documentacao.js'

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
        Prism.highlightAll()
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
        Prism.highlightAll()
      })
    })
    .catch(err => {
      console.log(`Request returned with an error: ${err}`)
    })
  }

  render() {
    const { docs } = this.state
    return (
      <div className="main-documentation">
        <div className="section-content">
          <h2 className="section">Montagem Web App Docs.</h2>
          <ul>
            {docs.length > 0 && docs[4].m_app.map((item, index) => (
              <li className="canvas-doc-item" id={index}>
                <div>
                  <span className="topic">
                    <i class="fab fa-react mr-3"></i>
                    <strong>{item.subject}</strong>
                  </span>
                </div>
                <div>
                  {item.itemContent}
                </div>
                <pre className="line-numbers mb-5" style={{borderRadius: '20px', backgroundColor: '#323538'}}>
                  <code className={`language-${item.codeType}`}>
                    {item.example !== '' && item.example}
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

// ---------- CANVAS DOCS -----------

// <div className="section-content">
//   <h2 className="section">Canvas Docs.</h2>
//   <ul>
//     {docs.length > 0 && docs[3].canvas_content.map((item, index) => (
//       <li className="canvas-doc-item">
//         <IconInstructureLine className="mr-3"/><span>{item.itemContent}</span>
//         <pre className="line-numbers">
//           <code className="language-javascript">
//             {item.example}
//           </code>
//         </pre>
//       </li>
//     ))}
//   </ul>
// </div>

export const Documentacao = () => {
  return (
    <div className="doc-box">
      <HeaderDoc />
      <MainDoc />
    </div>
  )
}
