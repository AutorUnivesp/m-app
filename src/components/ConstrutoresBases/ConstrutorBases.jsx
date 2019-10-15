import React from 'react'
import VideoAula from '../../components/ConstrutoresBases/VideoAula'
import VideosBase from '../../components/ConstrutoresBases/VideoBase'

export const ConstrutorBases = () => {
  return (
    <React.Fragment>
      <h1 className="text-center" style={{marginTop: '5%', color: '#543c52', textShadow: '0px 1px 1px #361d32'}}>Videoaula</h1><br />
      <VideoAula/>
      <h1 className="text-center" style={{marginTop: '4%', color: '#543c52', textShadow: '0px 1px 1px #361d32'}}>Vídeo Base</h1><br />
      <VideosBase />
    </React.Fragment>
  )
}
