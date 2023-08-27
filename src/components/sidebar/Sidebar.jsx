import React from 'react'
import './sidebar.css'
import {MdRssFeed,MdGroups2} from 'react-icons/md'
import {BsChatSquareTextFill,BsFillBookmarkFill,BsQuestionCircle} from 'react-icons/bs'
import {BiSolidVideos,BiCalendarEvent} from 'react-icons/bi'
import {RiSuitcaseFill,RiGraduationCapFill} from 'react-icons/ri'
import {Users} from '../../dummyData'
const Sidebar = () => {
  return (
    <div className='sidebar__container'>
        <div className="sidebar">
            <ul className='sidebar__list'>
               <li className='sidebarlist_item'>
                  <MdRssFeed/>
                  <span style={{cursor:'pointer'}}>Feed</span>
               </li>
               <li className='sidebarlist_item'>
                  <BsChatSquareTextFill/>
                  <span style={{cursor:'pointer'}}>Chat</span>
               </li>
               <li className='sidebarlist_item'>
                  <BiSolidVideos/>
                  <span style={{cursor:'pointer'}}>Videos</span>
               </li>
               <li className='sidebarlist_item'>
                  <MdGroups2/>
                  <span style={{cursor:'pointer'}}>Groups</span>
               </li>
               <li className='sidebarlist_item'>
                  <BsFillBookmarkFill/>
                  <span style={{cursor:'pointer'}} >Bookmarks</span>
               </li>
               <li className='sidebarlist_item'>
                  <BsQuestionCircle/>
                  <span style={{cursor:'pointer'}}>Questions</span>
               </li>
               <li className='sidebarlist_item'>
                  <RiSuitcaseFill/>
                  <span style={{cursor:'pointer'}} >Jobs</span>
               </li>
               <li className='sidebarlist_item'>
                  <BiCalendarEvent/>
                  <span style={{cursor:'pointer'}} >Event</span>
               </li>
               <li className='sidebarlist_item'>
                  <RiGraduationCapFill/>
                  <span style={{cursor:'pointer'}}>Courses</span>
               </li>
            </ul>
            <button className='showmore__button'>Show More</button>
            <hr className='hr__line' />
            <ul className='person__list'>
                {
                    Users.map((user)=>{
                         return  <li className='person'>
                         <img className="person__image" src={user.profilePicture} alt="" />
                         <span>{user.username}</span>
                     </li>
                    })
                }    
            </ul>
        </div>
    </div>
  )
}

export default Sidebar