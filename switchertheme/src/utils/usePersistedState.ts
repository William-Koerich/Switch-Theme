import {useState, useEffect} from 'react'

function usePersistedState(key:string, initialState: any) {
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