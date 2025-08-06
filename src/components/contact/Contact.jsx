import React from 'react'
import { useState, useRef } from 'react'
import './contact.css'

const Contact = () => {
  const formInitialDetails = {
    fullName: '',
    email: '',
    message: ''
  }

  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxQgrOTu4YVZMrUYB2L7GvFjc76lexlYLh-h6tAR-48HVTG8qAJObJU3gtK-cCg8fCD/exec"
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send Message')
  const [statusMsg, setStatusMsg] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...')

    fetch(scriptUrl, {
    method: 'POST', 
    body: new FormData(formRef.current),
    }).then(res => {
        setStatusMsg('Message Sent Successfully!')
        setButtonText('Send Message')
        setFormDetails(formInitialDetails)
        setTimeout(function(){
          setStatusMsg('')
        }, 5000)
    })
    .catch(err => {
        console.log(err)
        setStatusMsg('Something Went Wrong, Please Try Again Later.')
        setButtonText('Send Message')
        setFormDetails(formInitialDetails)
        setTimeout(function(){
          setStatusMsg('')
        }, 5000)
    })
  }

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]:value
    })
  }

  return (
    <section id='contact'>
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__text">
          <p>
            My inbox is always open for everyone. Whether you want to reach out or just want to 
            say Hi, shoot me a message and I’ll try my best to get back to you !
          </p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} name='google-sheet'>
          <input type='text' name='Name' value={formDetails.fullName} placeholder='Your Full Name' onChange={(e) => onFormUpdate('fullName', e.target.value)} required />
          <input type='email' name='Email' value={formDetails.email} placeholder='Your Email' onChange={(e) => onFormUpdate('email', e.target.value)} required />
          <textarea name='Message' rows='7' value={formDetails.message} placeholder='Your Message' onChange={(e) => onFormUpdate('message', e.target.value)} required ></textarea>
          <div className="form__button">
            <button type='submit' className='contact__btn'><span>{buttonText}</span></button>
            <span id='status_msg'>{statusMsg}</span>
          </div> 
        </form>
      </div>
    </section>
  )
}

export default Contact