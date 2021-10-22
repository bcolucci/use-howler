import { useRef, useMemo } from 'react'
import * as Howl from 'howler'

export type ExtendedHowl = Howl.Howl & {
  togglePlay(id?: number): number | undefined
}

export default function useHowler(props: Howl.HowlOptions): ExtendedHowl {
  const howler = useRef<Howl.Howl>(new Howl.Howl(props))

  const sound = useMemo<ExtendedHowl>(() => {
    return Object.assign(howler.current, {
      togglePlay(id?: number): number | undefined {
        if (id) {
          howler.current.stop(id)
          return
        }
        return howler.current.play()
      }
    })
  }, [howler])

  return sound
}
