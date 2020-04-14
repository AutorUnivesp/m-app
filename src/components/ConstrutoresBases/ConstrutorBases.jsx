import React from 'react'
import VideoAula from '../../components/ConstrutoresBases/VideoAula'
import VideosBase from '../../components/ConstrutoresBases/VideoBase'

export const ConstrutorBases = () => {
  return (
    <React.Fragment>
      <h1 style={{marginTop: '5%', color: '#af1c26', textShadow: '0px 1px 1px #565e69', marginLeft: '17%', marginBottom: '0'}}>Videoaula</h1><br />
      <VideoAula/>
      <br/>
      <hr/>
      <h1 className="text-center" style={{marginTop: '4%', color: '#af1c26', textShadow: '0px 1px 1px #565e69', marginLeft: '-50%', marginBottom: '0'}}>Vídeo Base</h1><br />
      <VideosBase />
    </React.Fragment>
  )
}
