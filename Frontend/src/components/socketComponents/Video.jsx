import React, { useContext } from 'react'
import { SocketContext } from '../../socket/SocketContext'

const Video = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext)

  return (
    <div id="form-container" className="container">
      <form>
        <div className="row">
          
          <div className="video-container">
            <div className="videoStream">
              {stream && (
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                />
              )}
            </div>
            <div className="video">
              <video
                playsInline
                ref={userVideo}
                autoPlay
              />
            </div>
          </div>         
                 </div>
          </form>
    </div>

  )
}

export default Video
