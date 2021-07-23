import Video from './components/Video'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import Notification from './components/Notifications'
import Editor from './socket/Editor'

function App() {
   return (
    <Router>
      <Route path="/lessons/:id">
        <MainPage>
          <Notification />
          <Video />
          <Editor />
          </MainPage>
      </Route>
    </Router>
  )
}

export default App
