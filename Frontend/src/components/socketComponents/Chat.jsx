import React, {useContext} from 'react'
import {SocketContext} from '../../socket/SocketContext'


function Chat() {
  const {chatMessage, setChatMessage, sendMessage} = useContext(SocketContext)
 
// console.log(chatMessage)
  return (
    <div>
      <ul id="messages"></ul>
      <li>MMMMM</li>
    {/* <form id="form" action=""> */}
      <input id="input" value={chatMessage}  onChange={(e) => setChatMessage(e.target.value)}  autocomplete="off" />
      <button onClick={sendMessage} >Send</button>
    {/* </form> */}
    </div>
  )
}

export default Chat

