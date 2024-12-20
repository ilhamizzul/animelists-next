'use client'
import { CloseCircleFilled } from '@ant-design/icons'
import React, { useState } from 'react'
import Youtube, { YouTubeProps } from "react-youtube"

const VideoPlayer = ({ youtubeId }: { youtubeId: string }) => {

  const [isOpen, setIsOpen] = useState(true)

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '360',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const Player = () => {
    return (
      <div className='fixed bottom-2 right-2'>
        <button
          onClick={handleVideoPlayer}
          className='float-right'
        >
          <CloseCircleFilled size={54} />
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={onPlayerReady}
          opts={opts}
        />
      </div>
    )
  }

  const ShowTrailer = () => {
    return (
      <button onClick={handleVideoPlayer} className='fixed bottom-2 right-2 w-32 py-1 font-bold bg-color-accent text-color-dark'>Show Trailer</button>
    )
  }

  return isOpen ? <Player/> : <ShowTrailer/>
}

export default VideoPlayer