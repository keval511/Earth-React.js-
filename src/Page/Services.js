import React from 'react'
import { Link } from 'react-router-dom'
export default function Services() {
  return (
    <>
    <div className='bi5 '>
      <div className='pt-5 '><p style={{fontSize:"70px"}} className='pt-5 text-center'>SERVICES</p></div> 
    </div>
    <div className='container mt-5 pt-5'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='col-md-12'>
            <div className='mt-3'> <p style={{fontSize:"30px"}}><b>Web Design</b></p> </div>
            <div className='mt-3'> <p style={{fontSize:"18px"}}>We create custom web design for small businesses, this<br/> will help you capture new audiences and increase your <br/>sales. Contact us by calling, emailing or filling out our <br/>form. You will receive a free quote by email within 24 <br/>hours.</p> </div>
            <div className='pb-5'> <button className='pt-2 ps-5 pb-2 pe-5 mt-2 ' style={{background:"#2c541d",border:"none"}}>EXPLORE</button> </div>
          </div>
        </div>
        <div className='col-md-6'>
<div className='col-md-12'>
  <img src='img/10.jpg' className='col-md-10 col-12'/>
</div>

        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='col-md-12'>
            <img src='img/11.jpg' className='col-md-12 mt-5 col-12 pt-5'/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='col-md-12'>
            <div className='mt-5 pt-5'> <p className='pt-5 ps-3 ms-3' style={{fontSize:"35px"}}><b>Graphic Design</b></p></div>
            <div className='ms-3 ps-3'><p>We specialize in logos, merchandise and more. Anyone <br/>can create nice graphics but it’s much better to create<br/> memorable ones. Contact us by calling, emailing or filling<br/> out our form. You will receive a free quote by email within<br/> 24 hours.</p></div>
          </div>
          <div className='ms-3 ps-3 mt-2'> <button className='pt-2 pb-2 ps-4 pe-4' style={{background:"#2c541d"}}>EXPLORE</button> </div>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='col-md-12'>
            <div className='mt-5 pt-5'><p style={{fontSize:"35px"}}><b>Content Writing</b></p></div>
            <div><p>Want to attract people to your website? You have to have<br/> the best content in the world. Our content writers will<br/> create award willing content for you. Contact us by calling,<br/> emailing or filling out our form. You will receive a free<r/> quote by email within 24 hours.</p></div>
            <div className=' mt-2'> <button className='pt-2 pb-2 ps-4 pe-4' style={{background:"#2c541d"}}>EXPLORE</button> </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='col-md-12'>
            <img src='img/12.jpg' className='col-md-12 col-12 mt-5'/>
          </div>
        </div>
      </div>
    </div>

    <div className='container-fluid'>
      <div className='bi6 mt-5 pt-5'>

       <p className='text-center' style={{fontSize:"35px"}}><b>TALK TO US</b></p> 
       <p className='text-center'>Have any questions? We are always open to talk about your business,<br/> new projects, creative opportunities and how we can help you.</p>
       <div className='text-center mt-4'> <button className=' ps-5 pb-2 pe-5' style={{backgroundColor:"#2c541d"}}>GET IN TOUCH</button> </div>
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
