import React from 'react'
import { useState, useEffect } from 'react';
import './header.css'
import HeaderSocials from './HeaderSocials'
import logo from '../../assets/DM_logo_2.png'

const Header = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Robotics Perception Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const period = 1000;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.5)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }

    useEffect(() => {
      let ticker = setInterval(() => {
          tick();
      }, delta)
      return () => { clearInterval(ticker)};
    }, [text])


  return (
    <header id='home'>
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="container header__container">
        <div className="header__intro">
          <div className="header__name">
            <h1>Dhiraj Maji</h1>
          </div>
          <div className="header__role">
            <h2>
                <span>| {text} |</span>
            </h2>
          </div>
          <div className='header__description'>
            <h4>
              Building Intelligent systems that see, understand, and interact with the world 
              through advanced Computer Vision and Deep Learning.
            </h4>
          </div>
          
          {/* <HeaderSocials/> */}
          {/* <div className='header__email'>
            <a href='#contact'>Contact Me</a>
          </div> */}
        </div>
        <div className="me-container">
          <div className="ring ring-top"></div>
          <div className="ring ring-bottom"></div>
          <div className="me">
            <img src={require('../../assets/my_photo_2.jpg')} alt="My Photo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header