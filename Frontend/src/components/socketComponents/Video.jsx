import React, { useContext } from 'react'
import { SocketContext } from '../../socket/SocketContext'

const Video = () => {
  const {
    myVideo,
    userVideo,
    stream,
  } = useContext(SocketContext)

  return (
    <div className="row">
      <div className="video-container">
        <div className="videoStream">
          {stream && <video playsInline muted ref={myVideo} autoPlay />}
        </div>
        {/* <div className="video">
          <video playsInline ref={userVideo} autoPlay muted />
        </div> */}
      </div>
    </div>
  )
}

export default Video
