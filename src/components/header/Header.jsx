import React from 'react'
import { useState, useEffect } from 'react';
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Robotics Engineer", "Perception Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const space = " ";

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }

    useEffect(() => {
      let ticker = setInterval(() => {
          tick();
      }, delta)
      return () => { clearInterval(ticker)};
    }, [text])


  return (
    <header>
      <div className="container header__container">
        <h4>Hi, my name is</h4>
        <h1>Dhiraj Maji</h1>
        <h2>
            <span>| {text} |</span>
        </h2>
        <HeaderSocials/>
        <div className="me"></div>
        <div className='header__email'>
            <a href='#contact'>dhirajmaji7@gmail.com</a>
        </div>
      </div>
    </header>
  )
}

export default Header