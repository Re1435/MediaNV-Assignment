import React from 'react'
import UserIcon from '../assets/icons/profile-circle.svg'
import './style.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
          <li><a href='./'>Bid</a></li>
          <li><a href='./'>POD</a></li>
          <li><a href='./'>Vendor</a></li>
          <li><a href='./'>User</a></li>
        </ul>
        <div className='user-profile'>
          <img src={UserIcon} alt="user-icon" />
          <select name="user" className='user-dropdown'>
            <option value="Freight EG">Freight EG</option>
          </select>
        </div>
    </nav>
  )
}

export default Navbar