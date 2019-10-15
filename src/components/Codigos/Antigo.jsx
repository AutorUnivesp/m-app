import React, { Component } from 'react'
import triangulo from '../../images/triangle_site.gif'

class Antigo extends Component {

  state = {
    disciplines: [],
    filteredDisciplines: []
  }

  componentDidMount() {
    this.receiveAntigoData()
  }

  copyToClipboard = str => {
     let el = document.createElement('textarea');
     el.value = str;
     document.body.appendChild(el);
     el.select();
     document.execCommand('copy');
     el.style.display = "none";
  }

  onchange = e => {
    const { disciplines } = this.state
    const filteredDisciplines = disciplines.filter(dis => {
      return dis.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filteredDisciplines
    })
  }

  receiveAntigoData = () => {
    fetch('https://raw.githubusercontent.com/AutorUnivesp/m-app/master/src/data/antigo.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          disciplines: data.antigo,
          filteredDisciplines: data.antigo
        })
      })
    })
    .catch(err => {
      console.log(`Request returned with an error: ${err}`)
    })
  }

  render() {
    const { filteredDisciplines } = this.state;
    return (
      <div className="grid-Banners">
        <div>
          <div className="search-div">
            <span><button className="fas fa-search button-search"></button></span>
            <input className="search-field" placeholder="Pesquisar..." onChange={this.onchange}/>
          </div>
          <div>
            <ul>
              {filteredDisciplines.map((dis, index) => (
                <li style={{listStyle: 'none'}} key={index}>
                  <div className="discipline my-1" key={index}>
                    <span className="title-banners pr-2">{dis.title}</span>
                    <span className="badge badge-pill badge-light copy-button-banners" onClick={() => this.copyToClipboard(dis.code)}>Copy</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="div-gif">
          <img style={{borderRadius: '20px'}} src={triangulo}/>
        </div>
      </div>
    )
  }
}

export const ModeloAntigo = () => {
  return (
    <div style={{marginTop: '5%'}}>
      <h1 className="text-center" style={{marginTop: '5%', color: '#543c52', textShadow: '0px 1px 1px #361d32'}}>Antigo</h1>
      <Antigo />
    </div>
  )
}
