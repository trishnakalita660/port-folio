import React, { useState, useEffect } from "react";
 
import './projects.css'
import data from '../shared/data'
 
import ProjectsCard from "./ProjectsCard";

function Projects() {
  const projectsData = data;
  
  
  return (
    <div style={{marginTop:'1.5rem'}} >
      <section>
      <div
      className="col-7 offset-1 col-sm-5 col-center "
      style={{ display: "flex", justifyContent: "center" }}
    >
      <h1>
        <span
          style={{
            color: "white",
            fontFamily: "Lato",
            fontStyle: "italic",
            fontSize: "2.6rem",
          }}
        >
          Projects 
        </span>
      </h1>
    </div>
       <div className="col-7  col-sm-6  col-center" style={ {margin: 'auto',padding:'1rem',marginLeft:'5%', float:'center'
       
      }}>
        {projectsData.map((projects)=>(
          <div  style={{
            background: "#3d3b3b27",
            display:'inline-block ',
            color: "white",
            fontFamily: "Lato", 
            margin:'1rem'
          }}> 
          <ProjectsCard 
          title={projects.title}  
          image={projects.image}
          github={projects.github}
          imageSecond={projects.images.image1}
          domain={projects.category}
          tech={projects.techStack}
          description={projects.description}
          />
          </div>
        ))}
       </div>

      </section>
    </div>
  );
}

export default Projects;


// <div  style={{width:'80%' }}>
    
       

// {projectsData.map((projects) => (
//  <div
//    className="col col-sm col-center "
//    style={{
//      background: "#3d3b3b27",
//      display:'inline ',
//      color: "white",
//      fontFamily: "Lato",
//      marginBottom: "2rem",
      
//      marginLeft:'1rem'
//    }}
//  >
//  <ProjectsCard 
//  title={projects.title}  
//  image={projects.image}
//  github={projects.github}
//  imageSecond={projects.images.image1}
//  domain={projects.category}
//  tech={projects.techStack}
//  description={projects.description}
//  />
//  </div>
// ))}
// </div>
