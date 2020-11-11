import { useEffect, useState } from 'react'
import loadScript from './scriptLoader'

export function useScriptLoader (source: string, attrs?: object, node?: HTMLElement, skip?: boolean) {
  const [ loading, setIsLoading ] = useState(true)
  const [error, setError] = useState({})
  const [scriptReference, setScriptReference] = useState({})
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
          .then(script => {
            setIsLoading(false)
            setScriptReference(script as HTMLScriptElement)
          })
          .catch((e: { message: string }) => {
            console.error(e)
            setError(e)
          })
    } else {
      setIsLoading(false)
    }
  }, [])

  return [loading, scriptReference, error]
}
