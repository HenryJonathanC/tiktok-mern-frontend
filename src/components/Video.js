import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

const Video = ({ url, channel, description, song, likes, shares, messages}) => {
    const [isPlaying, setIsPlaying] =useState(false)
    const videoRef= useRef()
    const onVideoClick = () => {
        if(isPlaying){
         videoRef.current.pause()
         setIsPlaying(false)
        }
        else {
            videoRef.current.play()
            setIsPlaying(true)    
        }   
    }
        
  return (
    <div className='video'>
        <video
            className='video_player'
            ref={videoRef}
            onClick={onVideoClick}
            loop
            src={url}
            >         
            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
  )
}

export default Video