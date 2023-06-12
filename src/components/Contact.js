import React from 'react'
import '../styles/App.css'

const Contact = () => {


  return (

    <div className='d-flex justify-content-center w-100 bg-black' style={{paddingTop:'100px', paddingBottom:'100px'}}>
        <form className='d-flex align-items-center flex-column w-100' action="https://formspree.io/f/xknadnql" method="POST">
            <div className='contact-title text-center' style={{lineHeight:'1'}}>CONTACT</div>
            <div className='d-flex flex-column py-1 w-75'>
            <label className='contact-label w-100'>name - company <span className='green'>*</span></label>
            <input type="text" name='name' className='contact-input' required/>
            </div>

            <div className='d-flex flex-column py-1 w-75'>
            <label className='contact-label w-100'>contact email address <span className='green'>*</span></label>
            <input type="email" name="email" className='contact-input' required/>
            </div>

            <div className='d-flex flex-column py-1 w-75'>
            <label className='contact-label w-100'>your message <span className='green'>*</span></label>
            <textarea type="text" name="message" className='contact-text' required/>
            </div>
            <button className='contact-button' type='submit'>SUBMIT</button>
        </form>
    </div>

  )
}

export default Contact