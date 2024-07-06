import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Update = () => {

  const {id}=useParams();  //for Query Params
  const [data,setData]=useState([]);  // api data State

//useEffect from API Fetching using axios
useEffect(()=>{
       axios.get(`https://student-info-seven.vercel.app/student/list/${id}`).then((res)=>{
        setData(res.data[0])
        console.log(res.data[0])
      })
  },[])
//useStates for store data of field
const [reg,setReg]=useState()
const [name,setName]=useState()
const [mail,setMail]=useState()
const [fees,setFees]=useState()
//Update method of API
  function Update(id){
           axios.put(`https://student-info-seven.vercel.app/student/edit/${id}`,{reg,name,mail,fees})
  }
  return (
    <div className='formCon'>
    <div className='form'> 
    <div className='head'>
   <center> <h3>Student Info Update</h3></center>
    </div>
    <label>Enter Student RegNo</label><br/>
            <input type='text'  onChange={(e)=>{ setReg(e.target.value)}} defaultValue={data.reg} placeholder='Enter Student RegNo' required /><br/>
            <label>Enter Student Name</label><br/>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} defaultValue={data.name} placeholder='Enter Student Name' required/><br/>
            <label>Enter Student Mail</label><br/>
            <input type="text" onChange={(e)=>{setMail(e.target.value)}} defaultValue={data.mail} placeholder='Enter Student Mail' required/><br/>
            <label>Enter Student Fees</label><br/>
            <input type="Number" onChange={(e)=>{setFees(e.target.value)}} defaultValue={data.fees} placeholder='Enter Student Fees' required/><br/>
            <Link to="/list"><button onClick={()=>{
              Update(id)
            } }>Update</button></Link>
    </div>
</div>
  )
}

export default Update