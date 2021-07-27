import React, { createContext, useState, useRef, useEffect } from 'react'
import { io } from 'socket.io-client'
import Peer from 'simple-peer'
import { useParams } from 'react-router-dom'

const SocketContext = createContext()
const socket = io('http://localhost:8080')

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false)
  const [callEnded, setCallEnded] = useState(false)
  const [stream, setStream] = useState()
  const [name, setName] = useState('')
  const [call, setCall] = useState({})
  const [me, setMe] = useState('')
  const [chatMessage, setChatMessage] = useState('')
  const [yourID, setYourID] = useState()
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const myVideo = useRef()
  const userVideo = useRef()
  const connectionRef = useRef()
  let { id } = useParams()
  // console.log(id)
  useEffect(() => {
    // if(window.location.href === `http://localhost:3000/lessons/${id}`){
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream)

        if (myVideo.current !== undefined) {
          myVideo.current.srcObject = currentStream
        }
      })

    socket.on('me', (id) => setMe(id))

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal })
    })
    // }
  }, [id])

  const answerCall = () => {
    setCallAccepted(true)

    const peer = new Peer({ initiator: false, trickle: false, stream })

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from })
    })

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream
    })

    peer.signal(call.signal)

    connectionRef.current = peer
  }

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream })

    peer.on('signal', (data) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      })
    })

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream
    })

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true)

      peer.signal(signal)
    })

    connectionRef.current = peer
  }

  const leaveCall = () => {
    setCallEnded(true)

    connectionRef.current.destroy()

    window.location.reload()
  }

 
  const socketRef = useRef()
  useEffect(() => {
    socketRef.current = io.connect('http://localhost:8080/')

    socketRef.current.on('your id', (id) => {
      console.log(id)
      setYourID(id)
    })

    socketRef.current.on('message', (message) => {
      console.log('here is message ', message)
      receivedMessage(message)
    })
  }, [])
  function receivedMessage(message) {
    setMessages((oldMsgs) => [...oldMsgs, message])
  }

  function sendMessage(e) {
    e.preventDefault()
    // console.log(yourID)
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value)
  }
  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        chatMessage,
        setChatMessage,
        yourID,
        setYourID,
        messages,
        setMessages,
        message,
        setMessage,
        handleChange,
        sendMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export { ContextProvider, SocketContext }
