import React from "react";
import "./home.css";
import aboutme from "../shared/aboutme";
import achievements from "../shared/achievements";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

function About() {
  const aboutData = aboutme;
  const achieve = achievements;
  return (
    <div >
      <div
        className="col-7 offset-1 col-sm-5 col-center "
        style={{ display: "flex",justifyContent: "center",  width: "75%" }}
      >
        <h1>
          <span
            style={{
              color: "white",
              fontFamily: "Lato",
              fontStyle: "italic",
              fontSize: "2.4rem",
              
            }}
          >
            About <span style={{ color: "yellow" }}>Me?</span>
          </span>
        </h1>
      </div>

      <div style={{ color: "yellow", fontFamily: "Lato"}}>
      <div style={{textAlign:'center', marginLeft:'0.5rem',fontSize:'1.3rem'}}>
      <span classname="col-12 offset-1 col-sm-5" ><FaAngleDoubleRight /><strong> EXPERIENCE   </strong><FaAngleDoubleLeft/></span>
     
       
    </div>
    <div style={{marginLeft:'3%' }}>
        {aboutData.map((item, index) => (
          <div
            className="col-7 offset-1 col-sm-5 col-center "
            style={{
              background: "#3d3b3b27",
              fontSize:'1rem',
              justifyContent: "center",
              width: "75%",
              color: "white",
              fontFamily: "Lato",
              marginBottom: "2rem",
              paddingBottom: "1rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
            }}
          >
            <div className="col-12 col-sm-5 mr-1 ml-1 d-inline-block" style={{textAlign:"center"}}>
              <h3 style={{ paddingTop: "1rem"}}>
                <FaAngleDoubleRight /> {item.position}
                <br />
                <span style={{   color: "yellow" }}>
                  {item.company}
                </span>
                <br />
                <span style={{ color: "white" }}>
                  {item.time}
                </span>
              </h3>
            </div>
            <p classname="d-inline-block"style={{ color: "white" }}>{item.description}</p>
          </div>
        ))}
        </div>
      </div>

      <div>
      <div style={{textAlign:'center', marginLeft:'0.5rem'}}>
        <span classname="col-12 offset-2 col-sm-5" style={{ color: "yellow",  fontFamily: "lato", fontSize:'1.3rem'}}><FaAngleDoubleRight /><strong> ACHIEVEMENTS   </strong><FaAngleDoubleLeft/></span>
      </div>
      <div style={{marginLeft:'3%',marginBottom:'1rem' }}>
      {achieve.map((item, index) => (
        <div
          className="col-7 offset-1 col-sm-9 col-center "
          style={{
            background: "#3d3b3b27",
            fontSize:'1rem',
            justifyContent: "center",
            width: "75%",
            color: "white",
            fontFamily: "Lato",
             
            paddingBottom: "1rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <div className="col-12 col-sm-5 mr-1 ml-1 d-inline-block">
            <h3 style={{ paddingTop: "1rem" }}>
              <FaAngleDoubleRight /> {item.title}
              <br />
              <span style={{   color: "yellow" }}>
              {item.position}
              </span>
              <br />
              <span style={{ color: "white" }}>
                {item.time}
              </span>
            </h3>
          </div>
          <p classname="d-inline-block"style={{ color: "white" }}>{item.description}</p>
        </div>
      ))}
    </div>
    </div>
</div>
  );
}

export default About;
