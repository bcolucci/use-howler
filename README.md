# use-howler

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
      Use Howler
      <p>
        <button onClick={() => setPlayingId(sound.togglePlay(playingId))}>
          {playingId ? 'Stop' : 'Play'}
        </button>
      </p>
    </div>
  )
}
```

## License

MIT © [](https://github.com/)
