import React, { Component } from 'react'
import Prism from "prismjs";
import { Link, animateScroll as scroll } from 'react-scroll';
import itens from '../data/data_guia.js'
import '../css/guia_canvas.css'
import '../css/prism.css';

class GuiaCanvas extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div className="guia-canvas" id="collapse-guia-canvas">
        <NavGuia />
        <ul className="guia-de-uso" data-spy="scroll" data-target="#navbar-guia" data-offset="0">
          {itens.map(item => (
            <div className="my-5 margin-div">
              <li id={item.id} key={item.id}>
                <h2 style={{fontWeight: 'bold', paddingTop: '70px'}}>{item.title}</h2>
                <p className="py-4 guia-content">{item.paragraph}</p>
                <ol className="guia-list">
                  {item.list.map(listItem => {
                    if (listItem.section) {
                      return (
                        <li className="padding_li">
                          <p>{listItem.section}</p>
                          <ul>
                            {listItem.itens.map(itemSub => (
                              <li>
                                <p>{itemSub}</p>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )
                    } else {
                      return (
                        <li className="padding_li">
                          {listItem}
                        </li>
                      )
                    }
                  })}
                </ol>
                <pre className="line-numbers">
                  <code className="language-html">
                    {item.code}
                  </code>
                </pre>
              </li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

class NavGuia extends Component {

  state = {
    clicks: false,
    hover: false
  }

  active = (e) => {
    const { clicks } = this.state
    if (clicks === true) {
      let elementActive = document.getElementsByClassName('activeTab')
      elementActive[0].classList.remove('activeTab')
      this.setState({ clicks: false})
    }
    e.target.classList.add('activeTab')
    this.setState({ clicks: true })
  }

  onMouseIn = (e) => {
    this.setState({ hover: true })
    e.target.classList.add('nav-link-in')
  }

  onMouseOut = (e) => {
    this.setState({ hover: false })
    e.target.classList.remove('nav-link-in')
  }

  render() {
    return (
      <nav id="navbar-guia" class="navbar bg-dark">
        <h3 className="navbar-brand">Seções</h3>
        <nav className="nav nav-pills flex-column">
          <Link to="item1" onClick={this.active} smooth={true} offset={-70} duration={500} >
            <span className="nav-link" onMouseEnter={this.onMouseIn} onMouseOut={this.onMouseOut}>Exercício de apoio</span>
          </Link>
          <Link to="item3" onClick={this.active} smooth={true} offset={-70} duration= {500}>
            <span className="nav-link" onMouseEnter={this.onMouseIn} onMouseOut={this.onMouseOut}>Atividade para Avaliação</span>
          </Link>
          <Link to="item5" onClick={this.active} smooth={true} offset={-70} duration= {500}>
            <span className="nav-link" onMouseEnter={this.onMouseIn} onMouseOut={this.onMouseOut}>Fórum de Dúvidas | Temático</span>
          </Link>
          <Link to="item6" onClick={this.active} smooth={true} offset={-70} duration={500}>
            <span className="nav-link" onMouseEnter={this.onMouseIn} onMouseOut={this.onMouseOut}>Importação de Conteúdo</span>
          </Link>
          <Link to="item8" onClick={this.active} smooth={true} offset={-70} duration={500}>
            <span className="nav-link" onMouseEnter={this.onMouseIn} onMouseOut={this.onMouseOut}>Montagem | Semana 0</span>
          </Link>
          <Link to="item11" onClick={this.active} smooth={true} offset={-70} duration={500}>
            <span className="nav-link" onMouseEnter={this.onMouseIn} onMouseOut={this.onMouseOut}>Checklist DP’s</span>
          </Link>
          <Link to="item12" onClick={this.active} smooth={true} offset={-70} duration={500}>
            <span className="nav-link" onMouseEnter={this.onMouseIn} onMouseOut={this.onMouseOut}>Inserindo</span>
          </Link>
          <Link to="item15" onClick={this.active} smooth={true} offset={-70} duration={500}>
            <span className="nav-link" onMouseEnter={this.onMouseIn} onMouseOut={this.onMouseOut}>Classes</span>
          </Link>
          <Link to="item19" onClick={this.active} smooth={true} offset={-70} duration={500}>
            <span className="nav-link" onMouseEnter={this.onMouseIn} onMouseOut={this.onMouseOut}>Diferenciados</span>
          </Link>
        </nav>
      </nav>
    )
  }
}

export default GuiaCanvas
