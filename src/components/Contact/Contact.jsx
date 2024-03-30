import React from 'react'

const Contact = () => {


  return (

    <div id='contact' className='section-wrapper' style={{minHeight:'0vh'}}>
        <form className='contact-form' action="https://formspree.io/f/xknadnql" method="POST">
            <div className='title'>get in touch</div>
            <div className='contact-section'>
            <label>name - company <span className='green'>*</span></label>
            <input type="text" name='name' required/>
            </div>

            <div className='contact-section'>
            <label>contact email address <span className='green'>*</span></label>
            <input type="email" name="email" required/>
            </div>

            <div className='contact-section'>
            <label>your message <span>*</span></label>
            <textarea type="text" name="message" required/>
            </div>
            <button type='submit'>SUBMIT</button>
        </form>
    </div>

  )
}

export default Contact