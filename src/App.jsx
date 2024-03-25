import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import RootLayout from './layout/RootLayout'
import { Tasks } from './pages/alltask/Tasks'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/alltask' element={<Tasks/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

// npm i react-router-dom