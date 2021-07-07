import React from "react";
import "./home.css";
import TypeAnimation from 'react-type-animation';
import { Button } from "reactstrap";
import Navbar from "./Navbar";
import Buttons from "./Buttons";

import { SocialIcon } from 'react-social-icons';

function Home() {
  return (
    <div className="home__main">
    
      <h2>
        {" "}
        Hi All, I'm <span style={{ color: "yellow" }}> Trishna</span>
        <br />
        <span style={{ color: "#ffbf00", fontSize: "2rem" }}>
        <TypeAnimation
        cursor={true}
        sequence={[
          'Front-End Enthusiast',
          2000,
          'React Developer',
          2000,
          'NIT, Silchar',
        ]}
        wrapper="a"
        repeat={3}
       />
        </span>
        
      </h2>

      <div
        className="home col-sm-8"
        style={{
          background: "#3d3b3b27",
          display: "inline-block",
          justifyContent: "center",
          color: "white",
          fontFamily: "Lato",
        }}
      >
        <div className="col-sm-3" style={{ padding: "1rem" }}>
          {" "}
          <span style={{ color: "white", fontSize: "1.5rem" }}>
            {" "}
            LET'S HAVE A SMALL{" "}
          </span>
          <span style={{ color: "yellow", fontSize: "1.5rem" }}>
            INTRODUCTION!
          </span>
        </div>

        <div className="container">
        <div className="row">
        <div className="col-12 col-6 col-sm"> 
        <img
        src="https://avatars.githubusercontent.com/u/54037204?s=400&u=a4b639b676e49406352e49333be63fd0521f963c&v=4"
        alt="trishna"
        className="home2 row col-center col-sm-4"
      />
        </div>
        
        
          
          <div
            className="row col-center col-sm-4"
            style={{ marginBottom: "1.2rem" }}
          >
            <p
              style={{
                fontSize: "1rem",
                fontStyle: "italic",
                fontFamily: "lato",
                color: "white",
              }}
            >
              Hi, I'm a tech-enthusiast from National Institute of Technology,
              Silchar, who is currently in 4th year of her academic year!Talking
              about my development journey, I started off as an Android
              developer in the 2nd academic year and gradually started exploring
              the web domain. I hold the postion of Android Moderator in the
              Google Developers Club, NIT Silchar in the 2nd academic year
              itself. I'm sure if you go through this website, you will get to know more
              about my techy side!
              <br />
            </p>
            <p
              style={{
                fontSize: "1rem",
                fontStyle: "italic",
                fontFamily: "lato",
                color: "white",
              }}
            >
              Another thing that I don't think will mention much, I'm a Kathak
              Dancer!{" "}
            </p>
          </div>
          </div>
        </div>
        <div className="col-12 col-sm-4  ">
        <div >
        <SocialIcon  className="social" url="https://www.linkedin.com/in/trishna-k-565216b6/" />
        <SocialIcon className="social" url="https://github.com/trishnakalita660"/>
        <SocialIcon className="social" url="https://www.facebook.com/trishna.kalita.184007/" />
        <SocialIcon className="social" url="https://www.instagram.com/trishna__01/" />
    
        </div>
    </div>
       <Buttons/>
      </div>
    </div>
  );
}

export default Home;

// <div className="home__main">
// <FadeTransform in transformProps={{
//   exitTransform: 'scale(1.0) translateY(-50%)'
// }}>
// <div className="row">
// <div className="col-6 col-sm">

//   <h2 style={{fontSize :'3vw'}}>
//     HELLO VISITOR...! <br />
//     <span style={{fontSize:'4vw',marginTop:'1rem',fontFamily:'Yusei Magic'}}>
//       {" "}
//       I'm TRISHNA <span style={{ color: "yellow" }}>KALITA</span>
//     </span>

//   <div >
//   <img
//   src="https://miro.medium.com/max/1838/0*xMaFF2hSXpf_kIfG.jpg"
//   alt="trishna"
//   style={{
    // height: "18rem",
    // width: "18rem",
    // paddingRight: "5rem",
    // marginTop: "3rem",
    // marginRight: "5rem",
    // borderRadius: "50%",
    // padding: "3rem",
    // position:'inherit'
//   }}
// />
//  </div>
//  </h2> </div>
//  </div>

//         <div
//           className="col-7 offset-1 col-sm-5 col-center home "
//           style={{
//             background: "#3d3b3b27",
//             display: "inline-block",
//             justifyContent: "center",
//             width: "79%",
//             color: "white",
//             fontFamily: "Lato",
//           }}
//         >
//           <div className="col-sm-3">
//           <h3 style={{textAlign:'center'}}>
//           {" "}
//           LET'S HAVE A SMALL{" "}
//           <span style={{ color: "yellow" }}>INTRODUCTION!</span>
//         </h3>
//           </div>

// <div
//   className="row col-center col-sm-4"
//   style={{ marginBottom: "1rem" }}
// >
//   <p
//     style={{
//       fontSize: "1rem",
//       fontStyle: "italic",
//       fontFamily: "lato",
//       color: "aquamarine",
//     }}
//   >

//   I'm a tech-enthusiast from National Institute of Technology,
//   Silchar, who is currently in 3rd year of her academic year!Talking
//   about my development journey, I started off as an Android developer
//   in the 2nd academic year and gradually started exploring the
//   web domain. I hold the postion of Android Moderator in the Google
//   Developers Club, NIT Silchar in the 2nd academic year itself and is
//   now working as a ReactJs Intern at Tekie Labs. I'm sure if you go
//   through this website, you will get to know more about my techy side!
//   <br/>
//   </p>
//   <p style={{
//     fontSize: "1rem",
//     fontStyle: "italic",
//     fontFamily: "lato",
//     color: "aquamarine",
//   }}>Another thing that I don't think will mention much, I'm a
//   Kathak Dancer!  </p>
// </div>
//           <div
//             className="col-12 col-center col-sm-4 align-item-center"
//             style={{ marginBottom: "1rem" }}
//           >
//           </div>
//         </div>

// </FadeTransform>

// </div>
