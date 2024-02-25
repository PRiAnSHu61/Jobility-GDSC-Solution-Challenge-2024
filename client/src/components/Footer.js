import React from 'react'
import './Css/Footer.css'
import Facebook from '../assets/Facebook.svg'
import Instagram from '../assets/Instagram.svg'
import Twitter from '../assets/Twitter.svg'
import LinkedIn from '../assets/Linkdin.svg'

const Footer = () => {
  return (
    <div className='FooterSection'>
        <div className='DiscoverSection'>
            <div className='Heading'>Discover</div>
            <div className='Links'>
                <div className='Link'>Service By City</div>
                <div className='Link'>All Services</div>
                <div className='Link'>Help</div>
            </div>
        </div>
        <div className='CompanySection'>
            <div className='Heading'>Company</div>
            <div className='Links'>
                <div className='Link'>About Us</div>
                <div className='Link'>Careers</div>
                <div className='Link'>Privacy Policy</div>
            </div>
        </div>
        <div className='SocialSection'>
            <div className='FollowUS'>Follow Us!!</div>
            <div className='TagLine'>We're friendly :) </div>
            <div className='SocialLinks'>
                <div className='SocialLink'>
                    <img src={Facebook} alt=''/>
                </div>
                <div className='SocialLink'>
                    <img src={Twitter} alt=''/>
                </div>
                <div className='SocialLink'>
                    <img src={Instagram} alt=''/>
                </div>
                <div className='SocialLink'>
                    <img src={LinkedIn} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
