import React, { useState } from 'react'
import Episode from '../Episode/Episode'

export default function EpisodeBrowser(props) {
  const {episodes} = props

  const [activeEpisode, setActiveEpisode] = useState(0);

  const preEpisode = () => {
    if(activeEpisode > 0){
      setActiveEpisode(activeEpisode - 1);
    } else {
      alert('No mode episodes')
    }
  }
  const nextEpisode = () => {
    if(activeEpisode < episodes.length -1){
      setActiveEpisode(activeEpisode + 1);
    } else {
      alert('No mode episodes')
    }
  }
  return (
    <React.Fragment>
    <Episode episode={episodes[activeEpisode]}/>
    <button onClick={preEpisode}>Previus</button>
    <button onClick={nextEpisode}>Next</button>
    </React.Fragment>
  )
}
