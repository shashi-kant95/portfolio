import React from 'react'
import Buttons from '../Component/Buttons'
import '../Styles/home.css'
import { Link } from 'react-router-dom'


function ContactOptions() {
  return (
    <div class="frame">
                    <Link
                        to='#'
                        onClick={(e) => {
                            window.location.href = "mailto:kantshashi.sk8@gmail.com";
                            e.preventDefault();
                        }}
                    >
                        <Buttons text={<div className='logos mail'></div>} width='2vw' height='7vh' />
                    </Link>




                    <a href='https://www.linkedin.com/in/shashi-kant-7a3706184/' target="_blank">
                        <Buttons text={<div className='logos linkedin'></div>} width='2vw' height='7vh' />
                    </a>
                    <a href='tel:+918999847096'>
                        <Buttons text={<div className='logos call'></div>} width='2vw' height='7vh' />
                    </a>
                    {/* <a href='tel:+918999847096' className='disable'>
                        <Buttons text={<div className='logos github'></div>} width='2vw' height='7vh' />
                    </a> */}
                    <a href="https://api.whatsapp.com/send?phone=8999847096" target="_blank">
                        <Buttons text={<div className='logos wts'></div>} width='2vw' height='7vh' />
                    </a>

                </div>
  )
}

export default ContactOptions