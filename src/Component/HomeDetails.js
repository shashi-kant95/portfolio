import React from 'react'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import CurrentCompany from './CurrentCompany'

function HomeDetails() {
    const downloadCwHandler = () => {

    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='f4 df text-shadow'>SHASHI KANT</div>
            <div className='f1 df'>And I Am A Full-Stack-Software Developer.</div>
            <CurrentCompany />
            <div className='frame f1' style={{ width: '100%', height: '10vh', marginTop: '5vh', padding: '10px' }}>
                Experience: 4 Years 5 months<br />
                Skills: NET CORE, C#, REACT JS, JAVASCRIPT, <br /> ANGULAR, JQUERY, HTML, CSS,
SQL, JIRA, SVN, GIT<br />
            </div>
            <div className='df' style={{ width: '100%', marginTop: '5vh' }}>
                <div className='neu-btn cv-download' style={{ width: '10vw', marginBottom: '3vh' }}>
                    <Link to="/Shashi_Kant_Resume.pdf" target="_blank" download>Download CV</Link>
                </div>
            </div>

        </div>
    )
}

export default HomeDetails