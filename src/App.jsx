import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import CreateReadme from './pages/CreateReadme/CreateReadme'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/create-readme' element={<CreateReadme />} />
    </Routes>

    </>
  )
}

export default App
