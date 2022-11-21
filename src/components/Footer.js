import React from 'react';
import '../css/Footer.css'
import fb from '../assets/logos/fb.svg'
import ig from '../assets/logos/ig.svg'
import yt from '../assets/logos/yt.svg'



function Footer(){
    return(
        <div>
        <div className='footer-container'>
            <div className='principal-grid'>
                <ul>Advice</ul>
                <ul>About us</ul>
                <ul>Contact</ul>
                <ul>Why Bravoauto?</ul>
                <ul>Finance</ul>
                <ul>Customer Care</ul>
                <ul>Express Service</ul>
                <ul>Sell My Car</ul>
                <ul>Covid 19</ul>
            </div>
            <div className='secondary-grid'>
                <ul>Terms</ul>
                <ul>Privacy Policy</ul>
                <ul>Cookie Policy</ul>
            </div>
            <div className='footer-paragraph'>
                <p>
                    © 2022 Inchcape Group - All rights reserved
                </p>
                <p>
                    Inchcape Retail includes the following companies, all of which have the VAT Registration No. GB243611193, are Registered in England & Wales and have their Registered Office at First Floor, Unit 3140 Park Square, Solihull Parkway, Birmingham Business Park, Birmingham, B37 7YN :-
                </p>
                <p>
                Inchcape Retail Limited (Co.No. 194561) is authorised and regulated by the Financial Conduct Authority. Inchcape Retail is a credit broker and not a lender. It has the Appointed Representatives of Chapelgate Motors Limited (Co.No. 2841981), Gerard Mann Limited (Co.No. 660644), Inchcape Park Lane Limited (Co.No. 4560841) and Armstrong-Massey Holdings Limited (Co.No. 2474466).
                </p>
            
            <div className='footer-social_media'>
                <span>
                    <img src={fb} alt="" />
                </span>
                <span>
                    <img src={ig} alt="" />
                </span>
                <span>
                    <img src={yt} alt="" />
                </span>
            </div>
            </div>
        </div>
            
            
        </div>
    )
}

export default Footer