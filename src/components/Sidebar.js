import React from 'react'
import Logo from '../assets/icons/black-circle.png'
import SquareLogo from '../assets/icons/square-four.svg'
import './style.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
          <div className='logo-container'>
            <img src={Logo} alt="logo" className='logo' />
            <h1 className='logo-text'>LOGO</h1>
        </div>
      <div className='pages'>
        <div>
            <ul>
                <li>
                    <img src={SquareLogo}  alt="squareLogo" className='square-logo' />
                    <p>Bid</p>
                </li>
                <li>
                    <img src={SquareLogo} alt="squareLogo" className='square-logo' />
                    <p>POD</p>
                </li>
                <li>
                    <img src={SquareLogo} alt="squareLogo" className='square-logo' />
                    <p>Vendor</p>
                  </li>
                  <li>
                    <img src={SquareLogo} alt="squareLogo" className='square-logo' />
                    <p>User</p>
                </li>  
            </ul>
        </div>
        <div>
          <ul>
            <li>
                <img src={SquareLogo}  alt="squareLogo" className='square-logo' />
                <p>Settings</p>
            </li>
            <li>
                <img src={SquareLogo} alt="squareLogo" className='square-logo' />
                <p>Profile</p>
            </li>
            <li>
                <img src={SquareLogo} alt="squareLogo" className='square-logo' />
                <p>Contact</p>
              </li>
              <li>
                <img src={SquareLogo} alt="squareLogo" className='square-logo' />
                <p>Logout</p>
            </li>  
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar