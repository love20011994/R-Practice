import React from 'react'
import ChildC from './ChildC'

function Childonlt({propsData}) {

  const luvk=()=>{
    console.log("luvkkkkk123456")
  }

  let name="kush"
  return (
    <div>
      <ChildC propsData={propsData}
      names={name}
      luvk={luvk}
      />
      
    </div>
  )
}

export default Childonlt
