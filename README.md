# Howler react hook (useHowler)

Please refer to [Howl documentation](https://github.com/goldfire/howler.js) for more details.

## Install

```bash
npm install --save use-howler
```

## Usage

```tsx
import React, { useState } from 'react'
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
```
