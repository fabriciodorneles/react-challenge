import { useEffect, useState } from 'react'

import './App.css'
import chemElements from './constants'

function App() {
  const [firstName, setFirstName] = useState('Breaking')
  const [lastName, setLastName] = useState('Bad')

  const [firstDisplayName, setFirstDisplayName] = useState<string[]>(() => [])
  const [lastDisplayName, setLastDisplayName] = useState<string[]>([])

  const breakify = (
    str: string,
    setFunction: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const result = Array.from(str).some((char, i) => {
      const oneChar = char.toUpperCase()
      const twoChar = `${oneChar}${str[i + 1]}`

      if (chemElements.includes(twoChar)) {
        setFunction([str.slice(0, i), twoChar, str.slice(i + 2)])
        return [str.slice(0, i), twoChar, str.slice(i + 2)]
      }

      if (chemElements.includes(oneChar)) {
        setFunction([str.slice(0, i), oneChar, str.slice(i + 1)])
        return [str.slice(0, i), oneChar, str.slice(i + 1)]
      }

      return null
    })

    return result ? [str, '', ''] : result
  }

  useEffect(() => {
    handleBreakify()
  }, [])

  const handleBreakify = () => {
    breakify(firstName, setFirstDisplayName)
    breakify(lastName, setLastDisplayName)
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
