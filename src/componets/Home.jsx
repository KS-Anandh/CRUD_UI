import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
         <div className='Info'>
            <h3>Welcome To Student Info Web</h3>
            <p> <span className='paraStart'>In</span> this Web-site Provides Students Information.This Infra-structure Provides Student Records Maintenance. We Have All The Features Like Add,Upadate,Remove and See the Records</p>
          <Link to="/list"><button className='btn-view'>View</button></Link>
         </div>
    </div>
  )
}

export default Home