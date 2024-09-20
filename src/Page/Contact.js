import React from 'react'
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <>
    <div className='bi7'>
<div className='pt-5'>
<p style={{fontSize:"70px"}} className='text-center pt-5 mt-5'><b>CONTACT US</b> </p> 
</div>
    </div>
<div className='container'>
  <div className='row'>
    <div className='col-md-6'>
      <div className='col-md-12 pb-5'>
      <div className='pt-5'><p style={{fontSize:"37px"}} className='pt-5'><b>Get In Touch</b></p></div>  
      <input type='text' placeholder='Your Name' style={{height:"50px",width:"70%"}} className='ms-5 mt-5 ' />

      <input type='number' placeholder='Phone Number' style={{height:"50px",width:"70%"}} className='ms-5 mt-4 ' />

      <input type='email' placeholder='Email' style={{height:"50px",width:"70%"}} className='ms-5 mt-4 ' />

      <textarea className='ms-5 mt-4 ' style={{height:"100px ",width:"70%"}}placeholder='Message'>Message</textarea>

      <button className='ms-5 pt-2 pb-2 ps-5 pe-5 mt-4' style={{background:"#2c541d",color:"white",border:"none"}}>SEND NOW</button>
      </div>
    </div>

    <div className='col-md-6'>
      <div className='col-md-12'>
      <div className='pt-5'><p style={{fontSize:"37px"}} className='pt-5'><b>Talk To Us</b></p></div>  

<div className='row' >
  <div style={{height:"50px"} } className='col-md-1'> <button className='rounded-5' style={{height:"40px"}} ><i class="fa fa-envelope-o" aria-hidden="true"></i>
</button> </div>
<div className='col-md-2'> <span>EMAIL</span> <br/><p style={{fontSize:"20px"}}>kevalprajapati511@gmail.com</p>

</div>

</div>

<div className='row mt-4' >
  <div style={{height:"50px"} } className='col-md-1'> <button className='rounded-5' style={{height:"40px"}} ><i class="fa fa-phone" aria-hidden="true"></i>
</button> </div>
<div className='col-md-10'> <span>PHONE NUMBER</span> <br/><p style={{fontSize:"20px"}}>7226824797</p>

</div>

</div>


<div className='row mt-4' >
  <div style={{height:"50px"} } className='col-md-1'> <button className='rounded-5' style={{height:"40px"}} ><i class="fa fa-map-marker" aria-hidden="true"></i>
</button> </div>
<div className='col-md-10'> <span>ADDRESS</span> <br/><p style={{fontSize:"20px"}}>2727 Ocean Road,<br/>
india, gujarat - 382330</p>

</div>

</div>
     
     <div className='ms-5 mt-3' style={{fontSize:"23px"}}><b>follow us</b></div>
     <div className='row mt-3'>
      <div className='col-md-12 '>
<button className='rounded-5 ms-5' style={{color:"white",background:"#72b159",border:"none"}}><i class="fa fa-facebook" aria-hidden="true"></i></button>

<button className='rounded-5 ms-2' style={{color:"white",background:"#72b159",border:"none"}}><i class="fa fa-twitter" aria-hidden="true"></i></button>

<button className='rounded-5 ms-2' style={{color:"white",background:"#72b159",border:"none"}}><i class="fa fa-linkedin" aria-hidden="true"></i></button>

<button className='rounded-5 ms-2' style={{color:"white",background:"#72b159",border:"none"}}><i class="fa fa-play" aria-hidden="true"></i>
</button>
      </div>
     </div>
</div>
    
      </div>
    </div>
  </div>


  <div className='container'>
<div className='row pt-5 mt-5'>
  <div className='col-md-4'>
    <div  className='col-md-12 col-12'>
      <button style={{border:"none",background:"none"}} className='mt-3 pb-4 ms-2 ps-5'>Home</button>
      <button style={{border:"none",background:"none"}} className='mt-3 pb-4 ms-2'>About</button>
      <button style={{border:"none",background:"none"}} className='mt-3 pb-4 ms-2 '>Services</button>
      <button style={{border:"none",background:"none"}} className='mt-3 pb-4 ms-2'>Contact</button>
    </div>
  </div>

  <div className='col-md-4 col-12' >
    <div className='col-md-12'>
      <img src='img/2.png' className='ms-5 ps-5 mt-3' />
    </div>
  </div>

  <div className='col-md-4 col-12'>
    <div className='col-md-12'>
    <p className='ms-5 mt-3'>© 2024 kevalPrajapati</p>
    </div>
  </div>
</div>

</div>
    </>
  )
}
