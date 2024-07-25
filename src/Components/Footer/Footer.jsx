import React from 'react'
import './Footer.css'
import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <div>
      <div className="footer_main">
        <footer className='container'>
          <div className="top_footer">
            <div className="footer_logo">
              <span>Blood Tabs</span>
            </div>
            <div className="footer_cta_donate">
              <p>Ready to get started?</p>
              <button>Donate Now</button>
            </div>
          </div>
        
          <hr />
          <div className="middle_footer">
            <div className="row"> 
              <div className="col">
                <div className="footer_newsLetter">
                  <h3>Subscribe to newsletter</h3>

                  <form >
                    <input type="email" name="" id="" placeholder='Email Address'/>
                    <button><FaChevronRight/></button>
                  </form>
                </div>
              </div>

              <div className="col">
  <div className="footerlinks">
    <div className="footer_services">
      <h3>Services</h3>
      <div className='footer_link'>
        <p>Email Marketing</p>
        <p>Campaigns</p>
        <p>Branding</p>
        <p>Offline</p>
      </div>
    </div>
    <div className="footer_about">
      <h3>About</h3>
      <div className='footer_link'>
        <p>Our Story</p>
        <p>Benefits</p>
        <p>Team</p>
        <p>Careers</p>
      </div>
    </div>
    <div className="footer_help">
      <h3>Help</h3>
      <div className='footer_link'>
        <p>FAQS</p>
        <p>Contact us</p>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>

          <div className="bottom_footer">
            <div className="footer_terms">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>

            <div className="footer_social_icons">
<FaFacebookF/>
<FaTwitter/>
<FaInstagram/>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer