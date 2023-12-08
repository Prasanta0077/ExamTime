import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Update from './Update'
import CreateForm from './CreateForm'
import Read from './Read'

function App() {
  return (
   <>
   <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<CreateForm/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/read/:id' element={<Read/>}></Route>
       </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
