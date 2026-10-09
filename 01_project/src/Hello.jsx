import React from 'react'

function Hello() {
    function morning(){
         alert("Good Morning")
    }
   
  return (
    <div>
        <button onClick={morning}> CLICK ME</button>
      
    </div>
  )
}

export default Hello
