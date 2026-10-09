
import { useState } from "react"

function Home() {
       const [login, logout] = useState(true)
       if(login){
  return (
    <>
    
    <h1>Welcome to my website</h1>
    
    </>
   

  )     
  
}
else{
    return(
        <>
        <h1>Please Log In</h1>
        <login/>
        </>
   
    )
}

}

export default Home
