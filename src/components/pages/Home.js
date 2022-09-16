import React from 'react'
import { NavLink } from 'react-router-dom'




export const Home = () => {
  const elm ={
    textDecoration: "none",
    color:"white",
  }
    
  return (
   
    <div className='home'>
      <img src="/images/s.jpg" alt="shariq" />
      <div className='disc'>
        <div className="hello">Hello i am</div>
        <div className="shariq"><h2>Mohd shariq Ansari</h2></div>
        <div className="in">Developer,Quick-learner and Professional</div>
        <div className="subin">Utilize my technical skills and provide a professional service by applying and honning my knowledge and working in a challenging and motivating working environment. </div>
        
          <button id='cv'>
          <a href="Resume.pdf.pdf" style={elm}>Download cv</a>
          </button>
          <button id='con'>
           <NavLink to="/Contact"style={elm}>Contact</NavLink>
            </button>
    
      </div>
    </div>
  )
}
