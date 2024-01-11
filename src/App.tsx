import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action } from 'redux'

import './App.css'
import { setFirstDisplayName, setLastDisplayName } from './actions/appActions'
import { RootState } from './reducers/rootReducer'
import { breakify } from './utils/breakify'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const { firstDisplayName, lastDisplayName } = useSelector(
    (state: RootState) => state.app
  )

  const [firstName, setFirstName] = useState('Breaking')
  const [lastName, setLastName] = useState('Bad')

  useEffect(() => {
    handleBreakify()
  }, [])

  const handleBreakify = () => {
    dispatch<Action>(setFirstDisplayName(breakify(firstName)))
    dispatch<Action>(setLastDisplayName(breakify(lastName)))
  }

  return (
    <>
      <h1>
        <span>{firstDisplayName[0]}</span>
        <span className="highlighted">{firstDisplayName[1]}</span>
        <span>{firstDisplayName[2]}</span>
      </h1>
      <h1>
        <span>{lastDisplayName[0]}</span>
        <span className="highlighted">{lastDisplayName[1]}</span>
        <span>{lastDisplayName[2]}</span>
      </h1>
      <div className="middleContainer">
        <div className="inputContainer">
          <label>First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="inputContainer">
          <label>Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>
      <div className="footerContainer">
        <button onClick={handleBreakify}>Breakify</button>
      </div>
    </>
  )
}

export default App
