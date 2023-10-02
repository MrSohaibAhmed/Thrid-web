import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../styles/work.css'
import WorkImg from '../../assets/images/How-it-Works-1-1.png'
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import MonitorRoundedIcon from '@mui/icons-material/MonitorRounded';
import WorkCards from '../../components/WorkCards';
function Work() {
  return (
    <>
    <h1>Our Work Areas</h1>
    <br></br>
    <WorkCards/>
    <br></br>
    <br></br>
    <br></br>
    <div className='work'>
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-6'>
        <h1>THE WAY OF OUR WORK</h1>
        <br></br><br></br>
        <div className='row'>
          
          <div className=' offset-1 col-md-1'>
    <EventNoteRoundedIcon color='primary'  sx={{ fontSize: 45 }}/>
          </div>
          <div className='col-md-9 steps'><h4>Step 1. Schedule</h4>
          <p>Our certified photographers arrive, set up the property, and capture all requested panoramic views, still photos, and aerial images.</p>
          </div>
          
          <div className=' offset-1 col-md-1'>
    <CameraAltRoundedIcon color='primary'  sx={{ fontSize: 45 }}/>
          </div>
          <div className='col-md-9 steps'><h4>Step 2. Shoot</h4>
          <p>Our certified photographers arrive, set up the property, and capture all requested panoramic views, still photos, and aerial images.</p>

          </div>
          <div className=' offset-1 col-md-1'>
    <AttachEmailRoundedIcon color='primary'  sx={{ fontSize: 45 }}/>
          </div>
          <div className='col-md-9 steps'><h4>	Step 3. Produce</h4>
          <p>Our certified photographers arrive, set up the property, and capture all requested panoramic views, still photos, and aerial images.</p>

          </div>
          <div className=' offset-1 col-md-1'>
    <MonitorRoundedIcon color='primary'  sx={{ fontSize: 45 }}/>
          </div>
          <div className='col-md-9 steps'><h4>	Step 4. Deliver</h4>
          <p>Our certified photographers arrive, set up the property, and capture all requested panoramic views, still photos, and aerial images.</p>

          </div>

        </div>
      </div>
      <div className='col-md-6'>
        <img src={WorkImg} height='800px' width='650px' className='img'/>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Work