import React from 'react'
import './topbar.css'
import {HiSearch} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import {IoMdNotifications} from 'react-icons/io'
const Topbar = () => {
  return (
    <div className='topbar__container'>
         <div className="topbar__left">
            
                <span className='logo'>ShubhSocial</span>
        
         </div>
         <div className="topbar__center">
            <div className="search__bar">
              <HiSearch/>
              <input placeholder='Search friend, video,news ...'type="text" />
            </div>
         </div>
         <div className="topbar__right">
            <div className="topbar__links">
                <span className="topbar__link">Homepage</span>
                <span className="topbar__link">Timeline</span>
            </div>
            <div className="topbar__icons">
                <div className="topbar__icon">
                     <BsFillPersonFill/>
                     <span className="topbar_icon_badge">3</span>
                </div>
                <div className="topbar__icon">
                     <BiMessageDetail/>
                     <span className="topbar_icon_badge">1</span>
                </div>
                <div className="topbar__icon">
                    <IoMdNotifications/>
                    <span className="topbar_icon_badge">7</span>
                </div>
                <img src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
            </div>

         </div>
    </div>
  )
}

export default Topbar