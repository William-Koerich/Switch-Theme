import {useState, useEffect, Dispatch, SetStateAction} from 'react'

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

/**
 * Estado que será responsável por busar e gravar no local storage o tema.
 */
function usePersistedState<T>(key:string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const localStorageValue = localStorage.getItem(key)

    if(localStorageValue) {
      return JSON.parse(localStorageValue)
    }

    return initialState
  })

  useEffect (() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState