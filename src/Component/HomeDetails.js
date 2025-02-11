import React from 'react'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import CurrentCompany from './CurrentCompany'

function HomeDetails() {
    const downloadCwHandler = () => {

    }


    const calculateExperience = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();

        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth() + 1;

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        // Return formatted string
        if (months === 0) {
            return `${years} Years`;
        } else if (years === 0) {
            return `${months} Months`;
        }
        return `${years} Years ${months} Months`;
    }

    const experience = calculateExperience("2019-11-01");

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} >
            {/* <div className='home-boy-img'></div> */}
            <div className='f4 df text-shadow'>SHASHI KANT</div>
            <div className='f1 df'>And I Am A Full-Stack-Software Developer.</div>
            <CurrentCompany />
            <div className='frame f1' style={{ width: '100%', height: '10vh', marginTop: '5vh', padding: '10px' }}>
                Experience: {experience}<br />
                Skills: NET CORE, C#, REACT JS, JAVASCRIPT, <br />
                Azure, AWS
                <br />ANGULAR, JQUERY, HTML, CSS,
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