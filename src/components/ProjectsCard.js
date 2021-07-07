import React, { useState } from "react";
import SingleProjects from "./SingleProjects";
// import "./singleProjects.css";

import { FaAngleDoubleRight } from "react-icons/fa";


function ProjectsCard({ title, image,github,imageSecond, domain, description, tech }) {
  const [modal, openModal] = useState(false);
  const handleModal = () => {
    openModal(!modal);
  };

  return (
    <div className="container">
 
       <div className="col-center col-sm-6"   >
       <img   height="300px" width="300px" src={image} alt="test" style={{padding:'1rem'}}/>
       </div>
   
         <div style={{ textAlign: "center" , padding:'1rem', color:'white', fontFamily:'lato', fontSize:'1rem'}}>
         {title}
     
         <button onClick={()=>{window.open(github);}} style={{background:'#3d3b3b27',height:'1rem', color:'yellow', marginLeft:'3px', padding:'5px', cursor:'pointer', border:'none', borderRadius:'3px'}} ><FaAngleDoubleRight /></button>
         
         </div>
       
</div>
       
  
  );
}

export default ProjectsCard;

// <div style={{background:'red'}}> 
                     
           
// <div style={{background:'blue'}}> 
                
//   <img src="https://cdn.pling.com/img/d/c/0/2/e4fff450a6306e045f5c26801ce31c3efaeb.jpg" alt="test" />

//   </div>

  
//   </div>
//   </div>