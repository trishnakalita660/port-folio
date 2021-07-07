import React from 'react'
import './singleProjects.css'
import { SocialIcon } from 'react-social-icons';

function SingleProjects({modal,description,domain,title, hide,github,imageSecond,tech}) {
  return (
    modal? <div  className="modal_body_border">
    <button type='button' className='modal-close-button' data-dismiss='modal' aria-label='Close' onClick={hide} className="button_modal" >
        x
      </button>
    <div className="modal_body">
     <h3 style={{color:'white', fontFamily:'lato',fontSize:'1.5rem'}}> <SocialIcon style={{marginRight:'5px'}} url={github}/>{title} <br/> <span style={{color:'yellow'}}> {domain} </span></h3>
    
    <div style={{display:'flex',marginBottom:'3rem', marginLeft:'3rem', marginRight:'3rem'}}>
      <div style={{height:'100%'}}><img src={imageSecond}/></div>
      <div className="item_description">
      <div style={{margin:'1rem'}}><span style={{color:'yellow'}}>Tech-Stack</span> : {tech}</div>
      <div style={{margin:'1rem'}}>{description}</div>
      </div>   
    </div>
    
      
      
    </div>
  </div> : null
  )
}

export default SingleProjects

// <div className="modal__body">
// <button type='button' className='modal-close-button' data-dismiss='modal' aria-label='Close' onClick={hide} style={{ float: 'right', border: 'none', backgroundColor: 'white', cursor: 'pointer' }}>
//           &times;
//         </button>
// <div>DOMAIN: {category}</div>
// <div>{description}</div>

// </div>:null