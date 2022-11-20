import React from 'react';
import '../css/Header.css'
import logoHeader from '../assets/logos/logo-header.svg'
import logoMenu from '../assets/logos/menu.svg'

function Header(){
    
    return(
        <div className='header-container'>
            <img src={logoHeader}
            className='header-image' alt="Logo-BravoAuto" />
            <img src={logoMenu}
            className='header-image--menu' alt="Menu" />
        

        </div>
    )
}

export default Header 
