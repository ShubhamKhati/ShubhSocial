import React, { useState } from 'react'
import Feed from '../feed/Feed'
import './post.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {AiFillLike,AiFillHeart} from 'react-icons/ai'
import {Users} from '../../dummyData'
const Post = ({userId,desc,photo,date,like,comment}) => {
    const [likes,setLikes]=useState(like);
    const [likeClicked,setlikeClicked]=useState(false);
    const incLikeCount=()=>{
        if(likeClicked){
            setLikes(likes-1);
            setlikeClicked(false);
        }
        else{
            setLikes(likes+1);
            setlikeClicked(true);
        }
        
    }
  return (
   <div className="post__container">
    <div className="post__wrapper">
        <div className="post__header">
            <div className="postHeader__left">
               <img className='postProfile__image' src={Users.filter((user)=>user.id===userId)[0].profilePicture} alt="" />
               <span style={{fontWeight:'bold'}}>{Users.filter((user)=>user.id===userId)[0].username}</span>
               <span style={{fontSize:'12px'}}>{date}</span>
            </div>
            <div className="postHeader__right">
                 <BsThreeDotsVertical/>
            </div>       
        </div>
        <div className="post__content">
           <p>{desc}</p>
        </div>
        <div className="postImage__container">
            <img src={photo} alt="" />
        </div>
        <div className="post__footer">
            <div className="postFooter__left">
                 <div onClick={incLikeCount} className="likeIcon__container">
                     <AiFillLike style={{color:'blue'}} />
                 </div>
                 <div className="loveIcon__container">
                     <AiFillHeart style={{color:'red'}} />     
                 </div>
                 <span>{likes} people liked it</span>
            </div>
            <span style={{fontWeight:'bold'}}>{comment} comments</span>
        </div>
    </div>
   </div>
  )
}

export default Post