import { useEffect, useState } from 'react'
import loadScript from './scriptLoader'

export function useScriptLoader (source: string, attrs?: object, node?: HTMLElement, skip?: boolean) {
  const [ isLoading, setIsLoading ] = useState(true)
  useEffect(() => {
    const scripts: HTMLScriptElement[] = Array.from(document.scripts)
    for(let i=0; i<scripts.length; i++) {
      if (scripts[i].src.includes(source)) {
        setIsLoading(false)
        return
      }
    }
    if (!skip) {
      loadScript(source, attrs, node)
          .then(() => setIsLoading(false))
          .catch((e: { message: string }) => console.error(e))
    } else {
      setIsLoading(false)
    }
  }, [])

  return { isLoading }
}
