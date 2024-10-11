
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Update from './Update'
import Edit from './Edit'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Update/>}/>
      <Route path='/edit' element={<Edit/>}/>

    </Routes>
      
    </>
  )
}

export default App
