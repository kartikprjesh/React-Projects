import React from 'react'

function HII() {
    function good(){
        alert("Good After Noon")
    }
    
  return (
    <div>
      <button onClick={good}>Click me </button>
    </div>
  )
}

export default HII
