import React, { useEffect } from 'react'
import NavBar from './componets/NavBar'
import Home from './componets/Home'
import StudentList from './componets/StudentList'
import Form from './componets/Form'
import Update from './componets/Update'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
const App = () => {
       useEffect(()=>{})
  return (
    <BrowserRouter>
    <NavBar/>
       <Routes>
        <Route index  path="/" element={<Home/>}/>
        <Route path='/list' element={<StudentList/>}/>
        <Route path="/add" element={<Form/>}/>
        <Route path="/update/:id" element={<Update/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App