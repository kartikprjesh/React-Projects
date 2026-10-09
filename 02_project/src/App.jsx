import React from 'react'
import { useState } from 'react'

// function App() {
//     const [count,setCount]=useState(0)
//     function increase(){
//         setCount(count+1)
//     }
//     function decrease(){
//         setCount(count-1)
//     }
//     function reset(){
//         setCount(0)
//     }
//   return (
//     <div>
//       <h1>Count: {count}</h1>

//    <button onClick={increase}>Increase</button>
//    <button onClick={decrease}>Decrease</button>
//    <button onClick={reset}>Reset</button>
      
//     </div>
function App(){
    const[likes,setLikes]=useState(0)
    function like(){
        setLikes(likes+1)
    }

        function deslike(){
       

        if(likes>0){
            setLikes(likes-1)
        }
    }



return(
    <div>
       <h1>Like : {likes}</h1>
       <button onClick={like}>Like</button>
       <button onClick={deslike}>Unlike</button>
    </div>
)
}





export default App
