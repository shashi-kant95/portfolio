import React from 'react'
import ContactOptions from '../Component/ContactOptions'
import CurrentCompany from '../Component/CurrentCompany'
import HomeDetails from '../Component/HomeDetails'
import ProfileImage from '../Component/ProfileImage'
import '../Styles/home.css'
import { Languages } from '../Shared/Constant'
import Buttons from '../Component/Buttons'
// import Skills from '../Component/Skills'


function Home() {
    return (
        <div className='dp'>
            <div className='top-home-cont'>
                <div className='mob-profile'>
                    <ProfileImage />
                </div>

                <HomeDetails />

            </div>
            {/* <Skills/> */}
            <div className='dfc'>
                
            </div>
            <div className='bottom-home-cont'>
                <ContactOptions />
            </div>
        </div>
    )
}

export default Home