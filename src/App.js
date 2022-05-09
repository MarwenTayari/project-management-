import './App.css'
import LeftBar from './components/LeftBar'
//import Login from './components/Login'
import NavBar from './components/NavBar/NavBar'
import Tasks from './components/Tasks/Tasks'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="AppContent">
        <LeftBar />
        <Tasks />
      </div>
    </div>
  )
}
export default App
