import React from 'react'
import ParentA from './ParentA'



function App() {
  const name = 'kapil'

  return (
    <div>
      <h1>Hi {name}</h1>

      <ParentA name={name} />

    

    </div>
  )
}

export default App