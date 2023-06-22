import React, { useState } from 'react'

function Validaion() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[nameerror,setNameerror]=useState(false)
    const[emailerror,setEmailerror]=useState(false)
    const[passerror,setpasserror]=useState(false)


   

    const emailRegex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


    const handleChange=(e)=>{
        setName(e.target.value)
         }
        const emailhandleChange=(e)=>{
           setEmail(e.target.value)
           if(email?.match(emailRegex)){
            setEmailerror(false)
        }
        else{
            setEmailerror(true)
        }}
        const passhandleChange=(e)=>{
            setPassword(e.target.value)
            if(password?.match(passwordRex)){
                setpasserror(false)
         }
         else{
            setpasserror(true)
         }

        }

           const handleSubmit=()=>{
            if(name==""){
                setNameerror(true)
            }
            else{
               setNameerror(false)
            }
           

           }

    
    console.log(emailerror,"emailerror")
  return (
    <div>

<form>
<input type='text' placeholder='Name' onChange={handleChange} value={name}/>
      {nameerror?<span>tisis not valid</span>:null}
      
      <br/>
      <input type='text' placeholder='email' onChange={emailhandleChange}/><br/>
      {emailerror?<span style={{color:"red"}}>invalid email</span>:null
      }
      <input type='password' placeholder='password' onChange={passhandleChange}/><br/>
      {passerror?<span>invalid password</span>:null}

 
</form>
<button onClick={handleSubmit}>submit</button>


        </div>
  )
}

export default Validaion
