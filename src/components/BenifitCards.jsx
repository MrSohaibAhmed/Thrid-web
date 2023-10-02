import React from 'react'
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import WifiCallingRoundedIcon from '@mui/icons-material/WifiCallingRounded';
import '../styles/benifitsCards.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function BenifitCards() {
  return (
    <>
    <div className='benifits container-fluid'>
    <h1>BENIFITS OF VIRTUAL TOUR</h1>
    <div className='set'>
    <div className='row  '>
    <div className='col-md-4 cards'>
    <div className='icon'>
    <SignalCellularAltRoundedIcon color='primary' sx={{ fontSize: 45 }}/>
    </div>
    <div>
        <h4>Engagement</h4>
        <p className='para'>Virtual Tours are 4 – times more engaging than traditional video</p>
    </div>
    </div>
    <div className='col-md-4 cards'>
    <div className='icon'>
    <ScheduleOutlinedIcon color='primary' sx={{ fontSize: 45 }}/>
    </div>
    <div>
        <h4>Browsing Time</h4>
        <p className='para'>Users spend 52% longer on web pages that feature Virtual Tours on them.</p>
    </div>
    </div>
    <div className='col-md-4 cards'>
    <div className='icon'>
    <WifiCallingRoundedIcon color='primary' sx={{ fontSize: 45 }}/>
    </div>
    <div>
        <h4>Enquirers</h4>
        <p className='para'>	With Virtual Tours it is estimated to have 80% increase in enquirers.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default BenifitCards