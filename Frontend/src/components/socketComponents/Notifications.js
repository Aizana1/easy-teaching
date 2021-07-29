import React, { useContext } from 'react'
import {SocketContext} from '../../socket/SocketContext'


const Notification = () => {
    const {answerCall, call, callAccepted } = useContext(SocketContext)
    return (
        <div>        
            {call.isReceivingCall && !callAccepted && (
            <div>
                <h1>Динь-Дон! Вам звонят☎</h1>
                <button className='btn btn-primary' onClick={answerCall} >Ответить </button>
            </div>
            )}
        </div>
    )
}

export default Notification;
