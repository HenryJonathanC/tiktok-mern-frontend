import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

const VideoFooter = ({channel, description, song}) => {
  return (
    <div className='videofooter'>
        <div className='videofooter_text'>
            <h3>{channel}</h3>
            <p>{description}</p>
            <MusicNoteIcon className='videofooter_icon' />
            <Ticker className='ticker' mode="smooth">
                {({ index })=> (
                    <>
                        <p>{song}</p>
                    </>
                )}
            </Ticker>
        </div>
        <img className='videofooter_record' src='https://static.thenounproject.com/png/934821-200.png' alt='video footer' />
        
    </div>
  )
}

export default VideoFooter