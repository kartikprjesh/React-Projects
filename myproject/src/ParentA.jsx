import React from 'react'
import ParentC from './ParentC'

function ParentA( props ) {
    console.log(props);

    let newName= props.name

    console.log(newName);
    
    
  return (
    <div>
      {/* <h2>Parent A</h2> */}

      <h1>{newName}</h1>

      <ParentC name={newName} />
    </div>
  )
}

export default ParentA