import React from 'react'
import '../../styles/home.css'
import  Navbar  from '../../components/NavBar'
import LOGO from '../../assets/images/Android-removebg-preview.png'
function Home() {
  return (
    <>
    
    <header className="header">
    <Navbar/>
    <img src={LOGO} height='330'/>

	<div className="text-box">
		<h1 className="heading-primary animate__animated animate__bounceInLeft animate__delay-1s">
			<span className="heading-primary-main">The Best App You Have Ever Seen</span>
      <br></br>
			<span className="heading-primary-sub">You Will be Blown away with all it does</span>
		</h1>
		{/* <button href="#" className="btn btn-white btn-animated">Discover</button> */}
	</div>
</header>
    
    </>
  )
}

export default Home