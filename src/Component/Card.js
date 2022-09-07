import React ,{useState} from 'react'
import '../Styles/Card.css'

function Card(props) {

  // const [projectDetails , setProjectDetails] = useState(props.preview);
  let projectDet = props.details;

  


  return (
    <div className="card" 
    // onMouseOver={()=>{projectDet = props.details}} 
    // onMouseOut={()=>{projectDet = props.preview} }
    >
      
      
        <div className='box'>
            {/* <div className='content'> */}
            <div className='f2 p1'>{projectDet}
              </div>
              <h2>{props.pno}</h2>
            {/* </div> */}
        
       </div>
      
    
    </div>    
  )
}

export default Card