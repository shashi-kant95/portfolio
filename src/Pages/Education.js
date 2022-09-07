import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faLink, faBook, faSoccerBall, faGraduationCap } from '@fortawesome/free-solid-svg-icons'


function Education() {
    return (
        <div className='dp education'>

            <VerticalTimeline lineColor='#d2e3d2'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#000000',borderRadius: '1rem',
                    boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', background:"#e6e6e6", padding: '1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e6e6e6' }}
                    date="2010 - 2011"
                    iconStyle={{ background: '#e6e6e6', color: 'darkcyan', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
                >
                    <h3 className="vertical-timeline-element-title">Secondary Education</h3>
                    <h4 className="vertical-timeline-element-subtitle">Leeds's Asian Public School, Patna, Bihar</h4>
                    <p>
                       Board: CBSE<br/>
                       CGPA: 9.2/10.00
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#000000',borderRadius: '1rem',
                    boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', background:"#e6e6e6", padding: '1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e6e6e6' }}
                    date="2011 - 2013"
                    iconStyle={{ background: '#e6e6e6', color: 'darkcyan', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
                >
                    <h3 className="vertical-timeline-element-title">Higher Secondary Education</h3>
                    <h4 className="vertical-timeline-element-subtitle">K. S. S. College, Samastipur, Bihar</h4>
                    <p>
                       Board: BSEB, Bihar<br/>
                       Percentage: 66.7%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#000000',borderRadius: '1rem',
                    boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', background:"#e6e6e6", padding: '1.1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e6e6e6' }}
                    date="2014 - 2018"
                    iconStyle={{ background: '#e6e6e6', color: 'darkcyan', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Engineering (Computer Science &  Enginnering)</h3>
                    <h4 className="vertical-timeline-element-subtitle">TGPCET, Nagpur, Maharashtra</h4>
                    <p>
                    Board: RTMNU, Nagpur<br/>
                       CGPA:7.31
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Education