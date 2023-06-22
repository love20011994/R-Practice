import React from 'react'
import {useNavigate} from "react-router-dom"


function RoutiingButton() {
    const navigate = useNavigate();

  return (
    <div>
      <button onClick={()=> navigate("/love")
      }>button</button>
    </div>
  )
}

export default RoutiingButton
