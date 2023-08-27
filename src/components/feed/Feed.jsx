import React from 'react'
import './feed.css'
import Post from '../post/Post'
import {MdPhotoLibrary} from 'react-icons/md'
import {PiTagSimpleFill} from 'react-icons/pi'
import {ImLocation2} from 'react-icons/im'
import {BiSolidHappyAlt} from 'react-icons/bi'
import {Posts} from '../../dummyData'
const Feed = () => {

  return (
    <div className='feed__container'>
      <div className="feed">
        <div className="write__post">
            <div className="upper">
              <img className='writePost__image'src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
              <input placeholder="What's in your mind Shubham?" type="text" />
            </div>

            <hr className='ul__seperator'/>
            <div className="lower">
              <div className="action">
                <MdPhotoLibrary style={{color:'tomato'}} />
                <span>Photo or Video</span>
              </div>
              <div className="action">
                <PiTagSimpleFill style={{color:'blue'}}/>
                <span>Tag</span>
              </div>
              <div className="action">
                <ImLocation2 style={{color:'green'}}/>
                <span>Location</span>
              </div>
              <div className="action">
                <BiSolidHappyAlt style={{color:'golden'}}/>
                <span>Feelings</span>
              </div>
              <div className="shareButton__container">
                <button className='share__button'>Share</button>
              </div>
            </div>
        </div>
        <div className="posts">
           {Posts.map((post)=>{
              return <Post key={post.id} desc={post.desc} photo={post.photo} date={post.date} like={post.like} comment={post.comment} userId={post.userId}/>
           })}
               
        </div>
      </div>

    </div>
  )
}

export default Feed