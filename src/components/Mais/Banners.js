import React, { Component } from 'react'
import '../../styles/scss/banners.scss'
import triangulo from '../../images/triangle_site.gif'
import Tabletop from 'tabletop';

export class Banners extends Component {
  state = {
    disciplines: [],
    filteredDisciplines: [],
    filteredBanners: [],
    bannersAPI: []
  }

  componentDidMount() {
    Tabletop.init({
      key: '19F5VU7k_7JUQ7dEzWBmE8Gxsfb6RmgrKzXSLFVJ4Heo',
      callback: googleData => {
        this.setState({
          bannersAPI: googleData,
          filteredBanners: googleData
        })
      },
      simpleSheet: true
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
    const { bannersAPI } = this.state
    const filteredBanners = bannersAPI.filter(dis => {
      return dis.Disciplina.toLowerCase().includes(e.target.value.toLowerCase())
       || dis.Codigo.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filteredBanners
    })
  }

  render() {
    const { bannersAPI, filteredBanners } = this.state;
    return (
      <div className="grid-Banners">
        <div>
          <div className="search-div">
            <span><button className="fas fa-search button-search"></button></span>
            <input className="search-field" placeholder="Pesquise pelo código ou nome..." onChange={this.onchange}/>
          </div>
          <div>
            <ul>
              {filteredBanners.length > 0 && filteredBanners.map(dis => (
                <li style={{listStyle: 'none'}}>
                  <div className="discipline my-1">
                    <span className="title-banners pr-2">{dis.Codigo} -- {dis.Disciplina}</span>
                    <span className="badge badge-pill badge-light copy-button-banners" onClick={() => (
                      this.copyToClipboard('https://assets.univesp.br/canvas/img/banners/' + dis.Banner)
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
