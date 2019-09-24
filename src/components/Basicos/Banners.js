import React, { Component } from 'react'
import '../../css/banners.css'
import triangulo from '../../images/triangle_site.gif'

export class Banners extends Component {
  state = {
    disciplines: [],
    filteredDisciplines: []
  }

  componentDidMount() {
    this.receiveBannerData()
  }

  receiveBannerData = () => {
    fetch('https://raw.githubusercontent.com/AutorUnivesp/m-app/master/src/data/banners_data.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          disciplines: data.banners,
          filteredDisciplines: data.banners
        })
      })
    })
    .catch(err => {
      console.log(`Request returned with an error: ${err}`)
    })
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
      return dis.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filteredDisciplines
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
              {filteredDisciplines.map(dis => (
                <li style={{listStyle: 'none'}}>
                  <div className="discipline my-1">
                    <span className="title-banners pr-2">{dis.name}</span>
                    <span className="badge badge-pill badge-light copy-button-banners" onClick={() => (
                      this.copyToClipboard('https://assets.univesp.br/canvas/img/banners/' + dis.bannerCode)
                    )}>Copy</span>
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
    );
  }
}
