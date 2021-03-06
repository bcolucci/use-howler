import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import useHowler from 'use-howler'

function App() {
  const sound = useHowler({ src: './sample.wav' })
  const [playingId, setPlayingId] = useState<number | undefined>()

  return (
    <div>
      <button onClick={() => setPlayingId(sound.togglePlay(playingId))}>
        {playingId ? 'Stop' : 'Play'}
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
