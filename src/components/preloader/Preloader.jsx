import React, { useEffect } from 'react'
import './preloader.css'
import DM_logo from '../../assets/DM_logo_2.png'
import { preLoaderAnim } from '../../animations'

const Preloader = () => {

    useEffect (() => {
        preLoaderAnim()
    }, [])


  return (
    <div className="preloader">
        <div className="preloader__container">
            <div className="preloader__img">
                <img src={DM_logo} alt='Logo' />
            </div>
            <div className="preloader__text">
                <span className='first_name'>DHIRAJ </span>
                <span className='last_name'>MAJI </span>
            </div>
        </div>
    </div>
  )
}

export default Preloader