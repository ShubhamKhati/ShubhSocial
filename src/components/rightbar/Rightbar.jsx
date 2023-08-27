import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
const Rightbar = () => {
  return (
    <div className='rightbar__container'>
         <div className="rightbar">
            <div className="rightbar__upper">
                <img  className='gift__image' src="https://img.freepik.com/free-photo/3d-render-gift-box-with-ribbon-present-package_107791-15850.jpg" alt="giftImage" />
                <p>Pola Foster and 3 other friends have birthday today.</p>
            </div>
            <div className="rightbar__middle">
                <img className='diwali__image' src="https://media.istockphoto.com/id/1276824031/photo/family-diwali-celebrate-stock-photo.jpg?s=612x612&w=0&k=20&c=RUfXWDx3A726fLcf48PhjMm-dWkGsoV0hS7ZS0V5p0Q=" alt="" />
            </div>
            <div className="rightbar__lower">
                <h1 >Online Friends</h1>
                <br/>
                 <ul className='online__friends'>
                     {Users.map((user)=>{
                          return  <li className='person'>
                          <img className="person__image" src={user.profilePicture} alt="" />
                          <span>{user.username}</span>
                      </li>
                     })}
                
                 </ul>
            </div>
         </div>
    </div>
  )
}

export default Rightbar