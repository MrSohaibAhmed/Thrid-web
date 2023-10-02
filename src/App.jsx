import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './sections/Home'
import About from './sections/About'
import Offering from './sections/Offering'
import Work from './sections/Work'
import Footer from './sections/Footer/Footer'
import 'animate.css';
import { useState } from 'react'
import NavBar from './components/NavBar'

function App() {
 
  const [activeSection, setActiveSection] = useState('');
  const handleNavigation = (section) => {
    setActiveSection(section);
  };
  return (
    <>
    {/* <NavBar/> */}
    <Home/>
    <About/>
    {/* <Offering/> */}
    <Work/>
    <Footer/>
    {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'work' && <Work />}
      {activeSection === 'contact' && <Footer/>}
    {/* <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/offering' element={<Offering/>}/>
    <Route path='/work' element={<Work/>}/>
    <Route path='/contact' element={<Footer/>}/>
    </Routes > */}
    </>
  )
}

export default App
