import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navBar'>
     <h2>Student <span className='a'>I</span><span className='b'>n</span><span className='c'>f</span><span className='d'>o</span></h2>
     <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/add"><li>Add</li></Link>
        <Link to="/list"><li>Student List</li></Link>
     </ul>
    </div>
  )
}

export default NavBar