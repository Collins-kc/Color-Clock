import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  // 1. State: stores the current date and time
  const [now, setNow] = useState(new Date())

  // 2. Effect: updates the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    // Cleanup: stops the timer when the component is removed
    return () => clearInterval(timer)
  }, [])

  // 3. Dynamic color: the hue changes with the seconds (0-59 → 0-354)
  const clockColor = `hsl(${now.getSeconds() * 6}, 80%, 60%)`

  // 4. JSX: what shows on the screen
  return (
    <div className="app">
      <h1>Color Clock</h1>
      <div
        className="clock"
        style={{ color: clockColor, borderColor: clockColor }}
      >
        <p className="time">{format(now, 'hh:mm:ss a')}</p>
        <p className="date">{format(now, 'EEEE, MMMM do, yyyy')}</p>
      </div>
    </div>
  )
}

export default App