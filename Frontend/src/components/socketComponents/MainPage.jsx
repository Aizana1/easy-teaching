import React, { useContext, useState } from 'react'
import { SocketContext } from '../../socket/SocketContext'

const MainPage = ({ children }) => {
  const { me, callAccepted, callEnded, leaveCall, callUser } = useContext(
    SocketContext,
  )
  const [idToCall, setIdToCall] = useState()

  
  return (
    <div className="main-container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <h3>Ваш id</h3>
            <p> {me}</p>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <h3>Введите id человека, кому хотите позвонить</h3>
            <div className="form-group">
              <input
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
            </div>

            {callAccepted && !callEnded ? (
              <button className="btn btn-secondary" onClick={leaveCall}>
                Завершить звонок{' '}
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => callUser(idToCall)}
              >
                Позвонить!{' '}
              </button>
            )}

          </div>
        </div>
      </div>
      {children}

    </div>
  )
}

export default MainPage
