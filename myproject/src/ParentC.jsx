import React from 'react'

function ParentC( props ) {
    console.log(props);
    
  return (
    <div>
      {/* <h2>Parent C</h2> */}
      <h3> child Name {props.name}</h3>
    </div>
  )
}

export default ParentC