import React from 'react'

import { NavLink } from "react-router-dom";
import { Button } from 'reactstrap';
function Buttons() {
    return (
        <div>
       
        <nav>
        <Button style={{background:'#008B8B',border:'none',padding:'8px', textAlign:'center', fontSize:'1rem',color:'brown',cursor:'pointer', width:'8rem', margin:'1rem',borderRadius:'3px'}}>
          <NavLink
          exact to="/projects"
            
             
            className="nav__links"
          >
            PROJECTS
          </NavLink>
          </Button>
           <Button style={{background:'#008B8B',border:'none',padding:'8px' ,textAlign:'center', fontSize:'1rem',color:'brown',cursor:'pointer', width:'8rem', margin:'1rem',borderRadius:'3px'}}>
          <NavLink
            to="/about"
            activeClassName="active__link"
            className="nav__links"
          >
            ABOUT ME!
          </NavLink>
          </Button>

          <Button onClick={() => {window.open('https://drive.google.com/file/d/1Mo8CAWd2Ln6awelRHSbEoUbDB74OMGvG/view?usp=sharing');}} className="nav__links" style={{background:'#008B8B',border:'none',padding:'8px', textAlign:'center', fontSize:'1rem',color:'white',cursor:'pointer', width:'8rem', margin:'1rem',borderRadius:'3px'}}>
            MY RESUME
          
          </Button>
        </nav>
   
   
    </div>
    )
}

export default Buttons
