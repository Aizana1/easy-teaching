import React, { useContext, useState } from 'react'
import Editor from '../../socket/Editor'
import { SocketContext } from '../../socket/SocketContext'
import Notifications from './Notifications'
import Video from './Video'

const MainPage = ({ children }) => {
  const { me, callAccepted, callEnded, leaveCall, callUser } = useContext(
    SocketContext,
  )
  const [idToCall, setIdToCall] = useState()
  console.log(callEnded)
  return (
    <div className="main-container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            {/* <form noValidate autoComplete="off"> */}
              <h3>Teacher's id</h3>
              <p> {me}</p>
            {/* </form> */}
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            {/* <form > */}
            <h3>Make a call</h3>
            <div className="form-group">
              <label>Id to call</label>
              <input
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
            </div>

            {callAccepted && !callEnded ? (
              <button className="btn btn-secondary" onClick={leaveCall}>
                Hang Up
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => callUser(idToCall)}
              >
                Call{' '}
              </button>
            )}

            {/* </form> */}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default MainPage
