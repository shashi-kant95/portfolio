import React from 'react'
import Card from '../Component/Card'
import  '../Styles/Projects.css'

function Projects() {
  return (
    <div className='dp project' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card pno='01'
        preview="In this project, we develop a platform where all the internal project details/status are
maintained."
        details={<div>In this project, we develop a platform where all the internal project details/status are
          maintained.<br />
          My role was to develop user management with three types of user with different
          permissions and excel export of all modules with the use of EPPlus library.<br />
          <b>Language used:</b> REACT JS, .NET, MSSQL</div>} />

          <Card pno='02'
        preview="This is Unilever Project, where they can simulate, compare, forecast the investment and
        market status of all their brands."
        details={<div>In this project, where they can simulate, compare, forecast the investment and
          market status of all their brands.<br />
          MMy role was to build a simulation page ui where user can simulate between different 
brands and also implemented sso login using Msal react library.<br />
          <b>Language used:</b> REACT JS, .NET CORE, MSSQL, PYTHON</div>} />


          <Card pno='03'
        preview="This is Unilever Project, where they can optimize the future expenses in different ways."
        details={<div>In this project, where they can optimize the future expenses in different ways.<br />
          My role was to export dynamic data to excel and develop form based login and merge with
sso login to avoid testing issues.<br />
          <b>Language used:</b> REACT JS, .NET, MSSQL, PYTHON
</div>} />


          <Card pno='04'
        preview="This is Unilever Project, where we have survey data and we are showing users those data in 
        different aspects as per requirement."
        details={<div>In this project, where we have survey data and we are showing users those data in 
          different aspects as per requirement.<br />
          My role was to create ui charts to represent data to user ,used highchart to show 10 
different type of chart.<br />
          <b>Language used:</b> JAVASCRIPT, JQUERY .NET CORE 6, MSSQL, PYTHON</div>} />
    </div>
  )
}

export default Projects