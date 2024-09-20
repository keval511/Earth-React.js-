import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
    <div className='bi3 col-md-12' >
<div className='pt-5'><p style={{fontSize:"70px"}} className='text-center pt-5 '>WHO ARE WE?</p></div>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='col-md-12'>
            <img src='img/7.jpg'  className='col-md-10 col-12 mt-5 pt-5' />
          </div>' 
        </div>
        <div className='col-md-6'>
<div className='col-md-12'>
 <div className='pt-3 ms-3'><p style={{fontSize:"45px"}} className='pt-5 mt-5'>OUR MISSION</p></div> 
 <div className='ms-3'> <p>Hello, my name is Tyler Moore and with the help of many <br/>people I made this template. I made it so it is super easy<br/> to update and so that it flows perfectly with my tutorials.<br/> Lots of love and hundreds of hours went into making it. I<br/> hope you love it as much as I do.<br/><br/>

 

I wish you the best of luck with your business, enjoy the <br/>adventure.</p> </div>
</div>
        </div>
      </div>
    </div>

    
   <div className='container-fluid pt-5 mt-4' >
   <div className='bi4 col-md-12 mt-5 '>

    <p className='text-center pt-5' style={{fontSize:"45px"}}> TALK TO US</p>

    <p className='text-center'>Have any questions? We are always open to talk about your business,<br/> new projects, creative opportunities and how we can help you.</p>

    <div className='text-center mt-5'> <button className='pt-2 ps-5 pb-2 pe-5' style={{backgroundColor:"#2c541d"}}>GET IN TOUCH</button> </div>
   </div>
   </div>

   <div className='container'>
<div className='row'>
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
