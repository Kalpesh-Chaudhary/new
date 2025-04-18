import React, { useState } from 'react'

const Login = (props) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [emailError,setEmailError]=useState('')
    const [passwordError,setPasswordError]=useState('')


    const onButtonClick=()=>{

    }

  return (
    <div className="maincontainer">
     <div className="titlrcontainer">
    <div> Login</div>
    </div>
    <br />
    <div className="inputcontainer">
        <input value={email} placeholder='Enter Your  email here' onChange={(e) =>setEmail(e.target.value)} className='inputBox' />
        <label className='errorlabel'> {emailError}</label>
    </div>
    <br />
    <div className="inputcontainer">
        <input value={password} placeholder='Enter Your  password here' onChange={(e) =>setPassword(e.target.value)} className='inputBox' />
        <label className='errorlabel'> {passwordError}</label>
    </div>
    <br />
    <div className="inputContainer">
        <input type="button"  className='inputButton' onClick={onButtonClick} value={'log in'}/>
    </div>
    </div>
     
  )
}

export default Login