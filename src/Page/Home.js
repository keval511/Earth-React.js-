import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    <div className='bi1 col-md-12 col-10'>
      <p className='text-center pt-5 pb-0' style={{fontSize:"80px"}}>EARTH</p>
      <p className='text-center ' style={{fontSize:"40px",padding:"0px"}}>ENDLESS POTENTIAL</p>
    <div className='text-center'> <button className='pt-2 ps-4 pb-2 pe-4' style={{border:"none",background:"#2c541d"}}>EXPLORE</button></div> 
    </div>
   
   <div className='container mt-5 pt-5'>
    <div className='row'>
      <div className='col-md-4'>
        <div className='col-md-12'>
          <img src='img/2.jpg' className='col-md-12 col-12' />

          <h3 className='mt-4 col-12'>Web Design</h3>
          <p className='col-12'>Custom web design for small businesses, <br/>we help you capture new audiences and <br/>increase your sales.</p>
        </div>
      </div>

      <div className='col-md-4'>
        <div className='col-md-12'>
          <img src='img/3.jpg' className='col-md-12 col-12' />

          <h3 className='mt-4 col-12'>Graphic Design</h3>
          <p className='col-12'>Custom web design for small businesses, <br/>we help you capture new audiences and <br/>increase your sales.</p>
        </div>
      </div>


      <div className='col-md-4'>
        <div className='col-md-12'>
          <img src='img/3.jpg' className='col-md-12 col-12' />

          <h3 className='mt-4 col-12'>Content Creation</h3>
          <p className='col-12'>Custom web design for small businesses, <br/>we help you capture new audiences and <br/>increase your sales.</p>
        </div>
      </div>


    </div>

   </div>


   <div className='container mt-5 pt-5'> 
    <div className='row'>
      <div className='col-md-6'>
        <div className='col-md-12'>
        <p style={{fontSize:"40px"}} className='pt-5 mt-5 ms-3'><b>ABOUT US</b></p>
    <p style={{fontSize:"18px"}} className='ms-3'>I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do. I wish you the best of luck with your business, enjoy the adventure.</p>

        </div>
      </div>


      <div className='col-md-6'>
        <div className='col-md-12'>
        <img src='img/4.jpg'className='col-md-10 col-11 ms-3' />
        </div>
      </div>
    </div>

   </div>


   <div className='container-fluid pt-5 mt-4' >
   <div className='bi2 col-md-12 mt-5 '>

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
