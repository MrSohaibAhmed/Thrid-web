import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import '../../styles/footer.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='footer_top'>
                <div className='col-md-12 mt-4'>
                    <h1 className='h1'>Connect With Us</h1>
     <div class="wrapper center-div">
         <div class="button">
            <div class="icon">
               <FacebookIcon sx={{ fontSize: 40 }}/>
            </div>
            <span>Facebook</span>
         </div>
         <div class="button">
            <div class="icon">
              <TwitterIcon sx={{ fontSize: 40 }}/>
            </div>
            <span>Twitter</span>
         </div>
         <div class="button">
            <div class="icon">
              <InstagramIcon sx={{ fontSize: 40 }}/>
            </div>
            <span>Instagram</span>
         </div>
        
         <div class="button">
            <div class="icon">
              <EmailRoundedIcon sx={{ fontSize: 40 }}/>
            </div>
            <span>Gmail</span>
         </div>
         <div class="button">
            <div class="icon">
              <YouTubeIcon sx={{ fontSize: 40 }}/>
            </div>
            <span>Youtube</span>
         </div>
      </div>
      </div>
      </div>
      <div className='col-md-12 contact-form'>
      
                    <div className="row">
                    <div className="col-md-6">
                    <form method="post">

                    <h4 className='message'>Leave Us a Message</h4>
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control mt-2" placeholder="Your Name *" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control mt-2" placeholder="Your Email *" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control  mt-2" placeholder="Your Phone Number *" />
                        </div>
                       
                  
                     <div className="form-group">
                            <textarea name="txtMsg" class="form-control  mt-2" placeholder="Your Message *" ></textarea>
                        </div>
                        <div className="form-group">
                            <button  name="btnSubmit" className="btnContact  mt-3">SEND MESSAGE</button>
                        </div>
                        </form>
                        </div>
                        
                        <div className='col-md-6'>
                          <div className='location'>
                    <h4 className='find contact-form '>Find us</h4>
                         
                        </div>
                        </div>
                </div>
           
    
</div>
      </div>
     
      </div>
      
      </div>
     
    </>
  )
}

export default Footer