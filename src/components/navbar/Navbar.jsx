import React from 'react'
import "./Navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
const navbar = () => {
  return (
    <div className="navbar">

      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' name="" id="" />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item" >
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              alt="" srcset="" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar