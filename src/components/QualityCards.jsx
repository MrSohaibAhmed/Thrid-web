import React from 'react'
import Innonative from '../assets/images/Innovative.jpg'
import Passionate from '../assets/images/Passionate.jpg'
import Versatile from '../assets/images/VERSATILE.jpeg'
import '../styles/qualitycards.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
 
function QualityCards() {
  return (
    <>
    <br></br>
    <br></br>
    <div className='container'>
    <div className='row q_card'>
    <div className='col-md-6'>
        <div className='img'>
    <img  src={Innonative} height='300' width='520'/>
    </div>
    </div>
    <div className='col-md-6'>
        <div className='row animate__animated animate__bounceInLeft animate__delay-4s'>
            <div className='col-md-12'><h1>WE ARE INNOVATIVE</h1></div>
            <div className='col-md-12 mt-5'> <p>We strive to push boundaries with both our production and editing techniques. We are big advocates of ‘knowledge is power’, you will regularly catch us researching new styles or creating weird and wonderful camera mounts & accessories to keep your content original!</p></div>

        </div>
    </div>

    </div>
    <div className='row q_card versatile'>
    <div className='col-md-6 '>
        <div className='row animate__animated animate__bounceInRight'>
            <div className='col-md-12'><h1>WE ARE VERSATILE</h1></div>
            <div className='col-md-12 mt-5'> <p>You will never hear us say no! We take our skill sets with us everywhere to fulfill the customer needs and whether we tackle difficulties we are not afraid to “shift gears” an came up with solutions “out of the box”. Our specialist equipment allows us to tackle anything at any time!</p></div>

        </div>
    </div>
    <div className='col-md-6'>
    <img className='img' src={Versatile} height='300' width='520'/>
    </div>
   

    </div>
    <div className='row q_card'>
    <div className='col-md-6'>
    <img className='img' src={Passionate} height='300' width='520'/>
    </div>
    <div className='col-md-6'>
        <div className='row animate__animated animate__bounceInLeft'>
            <div className='col-md-12'><h1>WE ARE PASSIONATE</h1></div>
            <div className='col-md-12 mt-5'> <p>Being innovative and versatile not enough? Well our team are passionate about all things video and anything even remotely geeky. We all take personal pride in every aspect of your project, from start to finish and beyond!</p></div>

        </div>
    </div>

    </div>
    </div>
    
    </>
  )
}

export default QualityCards