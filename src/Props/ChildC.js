import React, { useEffect,useState } from 'react'

function ChildC({propsData,names,luvk}) {
const[state,setState] =useState(names)
console.log(names)
const sendData=()=>{

    propsData(state)
    // console.log(data)
}
   useEffect(()=>{
    sendData()
    console.log("kkkkkkkkkoooo321523")

   },[])



  return (
    <div>
      hello
      <button onClick={()=>{luvk()}}>button</button>
    </div>
  )
}

export default ChildC
