import React, { useState } from 'react'
import Childonlt from './Childonlt'

function Childtopre() {
  const[name,setname] =useState()

  const propsData=(k)=>{
     setname(k)
     console.log(k,"kokoko")
  }
  return (
    <div>
        <Childonlt propsData={propsData}/>

        <h1>{name}</h1>
      
    </div>
  )
}

export default Childtopre
