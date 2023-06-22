import React, { useEffect, useRef, useState } from 'react'

function Ref() {
       const[search,setSearch]=useState()
    //    const[count,setCount]=useState(0)
    const focusRef=useRef(0)
    useEffect(()=>{
    focusRef.current=focusRef.current+1
    })
//   const  handleClick=()=>{
//     focusRef.current.focus()
//   }


console.log(focusRef.current)
  return (
    <div>
      Ref
      <input onChange={(e)=>setSearch(e.target.value)}/>
      <p>{search}</p>
      
      {/* <button onClick={handleClick}>button</button> */}
    </div>
  )
}

export default Ref
