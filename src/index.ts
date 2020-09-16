import { useEffect, useState } from 'react'
import loadScript from './scriptLoader'

export function useScriptLoader ({ source, id, skip = false, node }: props) {
  const [ isLoading, setIsLoading ] = useState(true)
  useEffect(() => {
    const isScriptAlreadyLoaded = !!document.getElementById(id)
    if (!isScriptAlreadyLoaded && !skip) {
      loadScript(source, { id }, node)
          .then(() => setIsLoading(false))
          .catch((e: { message: string }) => console.error(e))
    } else {
      setIsLoading(false)
    }
  }, [])

  return { isLoading }
}

export interface props {
  source: string
  id: string
  skip?: boolean
  node?: HTMLElement
}
