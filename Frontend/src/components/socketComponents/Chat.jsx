import React, {useContext} from 'react'
import {SocketContext} from '../../socket/SocketContext'


function Chat() {
  const {yourID,  messages, message,  handleChange, sendMessage} = useContext(SocketContext)
  
  return (
    <div className="chatContainer">
      {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <div className="myRow"  key={index}>
                <div className="myMessage">
                  {message.body}
                </div>
              </div>
            )
          }
          return (
            <div className="partnerRow" key={index}>
              < div className="partnerMessage">
                {message.body}
              </div>
            </div>
          )
        })}
         <form onSubmit={sendMessage}>
        <textarea value={message} onChange={handleChange} placeholder="Say something..." ></textarea>
        <button>Send</button>
      </form>
     
    </div>
  )
}

export default Chat

