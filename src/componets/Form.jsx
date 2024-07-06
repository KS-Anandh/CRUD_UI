import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
const [reg,setReg]=useState()
const [name,setName]=useState()
const [mail,setMail]=useState()
const [fees,setFees]=useState()
const insert=()=>{
  axios.post("https://student-info-seven.vercel.app/student/add",{reg,name,mail,fees})
  .then((res)=>{
    alert(res.data)
  })
  .catch((err)=>{
    alert("Warning:submit data Properly..!");
  })
}


  return (
    <div className='formCon'>
        <div className='form'> 
        <div className='head'>
       <center> <h3>Student Info Adding</h3></center>
        </div>
            <label>Enter Student RegNo</label><br/>
            <input type='text'  onChange={(e)=>{ setReg(e.target.value)}} placeholder='Enter Student RegNo' required /><br/>
            <label>Enter Student Name</label><br/>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Student Name' required/><br/>
            <label>Enter Student Mail</label><br/>
            <input type="text" onChange={(e)=>{setMail(e.target.value)}}placeholder='Enter Student Mail' required/><br/>
            <label>Enter Student Fees</label><br/>
            <input type="Number" onChange={(e)=>{setFees(e.target.value)}}placeholder='Enter Student Fees' required/><br/>
            <Link to="/"><button onClick={insert} >Add</button></Link>
           
        </div>
    </div>
  )
}

export default Form