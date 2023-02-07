import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Video from './components/Video';
function App() {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      const res= await axios.get('http://localhost:9000/v2/posts')
      setVideos(res.data)
      return res
    }
    fetchData()
  }, [])

  console.log(videos)
  return (
    <div className="App">
      <div className='app__videos'>
        { videos.map(({url, channel, description, song, likes, shares, messages})=>(
          <Video key={url} url={url} channel={channel} description={description} song={song} likes={likes} shares={shares} messages={messages}/>
        ))}
      </div>
    </div>
  );
}

export default App;
