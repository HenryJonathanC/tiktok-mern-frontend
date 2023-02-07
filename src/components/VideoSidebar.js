import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const VideoSidebar = ({likes, shares, messages}) => {
    const [liked, setLiked] = useState(false)
  return (
    <div className='videoSidebar'>
        <div className='videoSidebar_icons'>
            {
                liked?
                <FavoriteIcon fontSize='large' onClick={e=>{setLiked(false)}} /> 
                : 
                <FavoriteBorderIcon fontSize='large' onClick={e=>{setLiked(true)}} />
            }
            <p>{liked? Number(likes)+1: likes}</p>
        </div>
        <div className='videoSidebar_icons'>
            <CommentIcon fontSize='large' />
            <p>{messages}</p>
        </div>
        <div className='videoSidebar_icons'>
            <ShareIcon fontSize='large' />
            <p>{shares}</p>
        </div>    
    </div>
  )
}

export default VideoSidebar