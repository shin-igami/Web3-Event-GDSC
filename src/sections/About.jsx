import React from 'react'
import image1 from '../utils/Images/image1.png'
import image2 from '../utils/Images/image2.png'
import image3 from '../utils/Images/image3.png'
import image4 from '../utils/Images/image4.png'
import '../styles/sections/About.css'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
const About  = () => {
  return (
	<div className='about'>
      <div className="about-content">
         
		 <div className="about-leftContent">
		 <h1>About W3Website</h1>
		 <hr />
			<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reiciendis, vero soluta vel perferendis doloremque perspiciatis neque reprehenderit ratione error voluptatibus a consequatur quia ipsa suscipit, totam molestiae nulla nostrum iure debitis magni harum porro. Reprehenderit ipsum rem obcaecati illum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,<br /><br /><br /> reiciendis, vero soluta vel perferendis doloremque perspiciatis neque reprehenderit ratione error voluptatibus a consequatur quia ipsa suscipit, totam molestiae nulla nostrum iure debitis magni harum porro. Reprehenderit ipsum rem obcaecati illum!</p>
		 </div>
		 <div className="about-leftImage">
         <div> <img src={image1} alt="" /></div>
          <div><img src={image2} alt="" /></div>
		 </div>
	  </div>
	  <div className="about-content">
	  <div className="about-rightImage">
         <div><img src={image3} alt="" /></div>
         <div><img src={image4} alt="" /></div>
		 </div>
		 <div className="about-rightContent">
		 <h2>Why you should attend ?</h2>
		<div className="about-contentList"><TaskAltOutlinedIcon style={{color : 'rgba(58, 160, 243, 1)',width :'20px',height:'20px'}}/>  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
		<div className="about-contentList"><TaskAltOutlinedIcon style={{color : 'rgba(58, 160, 243, 1)',width :'20px',height:'20px'}}/>  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
		<div className="about-contentList"><TaskAltOutlinedIcon style={{color : 'rgba(58, 160, 243, 1)',width :'20px',height:'20px'}}/>  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
		<div className="about-contentList"><TaskAltOutlinedIcon style={{color : 'rgba(58, 160, 243, 1)',width :'20px',height:'20px'}}/>  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
		<div className="about-contentList"><TaskAltOutlinedIcon style={{color : 'rgba(58, 160, 243, 1)',width :'20px',height:'20px'}}/>  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
		
		 </div>
	  </div>
	</div>
  )
}

export default About 