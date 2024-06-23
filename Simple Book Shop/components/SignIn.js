import React from 'react'
import './SignIn.css'
export default function SignIn() {
  return (
    <div className='SignInPad'>
      <input className='SIN' type='text' placeholder='Please Enter Valid Mail'/>
      <input className='SIP' type='password'placeholder='Please Enter The Password'/>
      <button className='SINButton'>SignIn</button>
    </div>
  )
}
