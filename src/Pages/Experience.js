import React from 'react'
import ProgressBar from '../Component/ProgressBar'
import '../Styles/Experience.css'

function Experience() {
  return (
    <div className='dp experience df' style={{flexDirection:'column'}}>
      <div className='f4 df text-shadow'>ABOUT ME</div>
      <div className='exp-top df'>
        <div className='left-exp' >
          <div className='neu-btn neu-btn-1 df' style={{ width: '100%', height:'8vh', flexDirection:'column' }}>
          Current Company: Kantar Analytics Practice, Bangalore <br/>
 Designation: Software Developer <br/>
 Duration : November 2019 to Present
           
           
          
          </div>
          
          <div className='neu-btn neu-btn-2 df' style={{ width: '10vw', height:'8vh', flexDirection:'column' }}>
          <div className='f3 text-shadow'>3 +</div>
            <br/>
            <div className='f1 df'>Years of experience</div>


          </div>

          <div className='neu-btn neu-btn-2 df' style={{ width: '10vw', height:'8vh', flexDirection:'column' }}>
            <div className='f3 text-shadow'>4 +</div>
            <br/>
            <div className='f1 df'>Projects Completed</div>

          </div>
          
          <div className='neu-btn neu-btn-2 df' style={{ width: '10vw', height:'8vh', flexDirection:'column' }}>
            <div className='f3 text-shadow'>2 times</div>
            <br/>
            <div className='f1 df'>Employee of the year</div>

          </div>
        </div>
        {/* <div className='right-exp'></div> */}

      </div>
      <div className='exp-bottom'>
        <div className='exp-bottom-left df'>
          <ProgressBar percent="90%" title='React JS'/>
          <ProgressBar percent="90%" title='Javascript'/>
          <ProgressBar percent="90%" title='HTML'/>
          <ProgressBar percent="80%" title='CSS'/>
          <ProgressBar percent="80%" title='.Net Core'/>
          <ProgressBar percent="80%" title='MS SQL'/>

        </div>
      </div>
    </div>
   
  )
}

export default Experience