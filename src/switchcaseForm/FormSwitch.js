import React, { useState } from 'react'

function FormSwitch() {
const[data,setData]=useState(1)
console.log(data)
const Formdata=()=>{
    switch(data){
        case 1 : return <input  type='text'/>
        case 2: return <p>heloo</p>

    }
}

console.log(Formdata)
  return (
    <div>
        <form>
            {Formdata()}
        </form>
        <button onClick={()=>setData(data+1)}>Next</button>
    </div>
  )
}

export default FormSwitch
