import React from 'react'
import '../../styles/about.css'
import BenifitCards from '../../components/BenifitCards'
import  Carousel  from '../../components/Carousel'
import QualityCards from '../../components/QualityCards'
function About() {
  return (
    <>
    <div className='about container-fluid'>
      <div className='height container'>
  <div className='center'>
        <h1>About Us</h1>
        </div>
        <div>
        <h4>   WELCOME TO THE FUTURE!</h4>
        <p>  With our new breed of 3D / 360 virtual tours we are aiming to change the way that people and businesses buy property and show off their premises or products – for the better.</p>

<p>Our new scanning technology creates a realistic, immersive experience, allowing prospective buyers to visit and explore properties online as if they had physically stepped foot inside the building itself. Panoramas, virtual tours, photography & videos have been around for years, however we can now create fully immersive 360 virtual tours in high resolution (4K HDR), with clear perspective and definition that allows the user to effectively judge size, space and dimension. We have future proofed the service by ensuring it is ready for use on virtual reality (VR) headsets.</p>

<p>Our Virtual Tours are now compatible with Google Street View therefor we can publish them to your Google My Business listing as well.</p>
</div>
</div>
<BenifitCards/>
<br></br>
<br></br>
<Carousel/>
<br></br>
<QualityCards/>
</div>

    </>
  )
}

export default About