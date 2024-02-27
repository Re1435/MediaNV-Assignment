import React from 'react'
import Search from '../assets/icons/search.svg'
import AddIcon from '../assets/icons/add.svg'
import Filter from '../assets/icons/filter.svg'
import BidDisplay from './BidDisplay'
import './style.css'

const MainContent = () => {
  return (
	  <div className='main-content'>
		  <div className='content-pages'>
			  <ul>
				  <li><a href="./" className='text'>Live</a></li>
				  <li><a href="./">Results</a></li>
				  <li><a href="./">History</a></li>
			  </ul>
			  <div className='search-container'>
				  <img src={Search} alt="search-icon" className='search-img' />
				  <input type="search" placeholder='Search' className='search-input' />
			  </div>
			  <button className='add-button'>
					Create
				  <img src={AddIcon} alt="add icon" className='add-icon' />
			  </button>
		  </div>
		  <div className='bid-details'>
			  <div className='bid-response'>
				  <p>Live {`(30)`}</p>
				  <p className='respond'>Responded {`(30)`}</p>
				  <p className='unrespond'>Unresponded {`(30)`}</p>
			  </div>
			  <div className='bid-history'>
				  <p>Bid Created</p>
				  <p className='today'>Today</p>
				  <p className='yestarday'>Yestarday</p>
				  <select name="calender"><option value="Calender">Calender</option></select>
			  		<img src={Filter} alt="filter-icon" className='filter-img' />
			  </div>
		  </div>
		  <BidDisplay/>
	 </div>
  )
}

export default MainContent