import React from 'react';
import '../Hojas de estilos/Cabecera.css'
import logoHeader from '../logos/logo-header.svg'
import logoMenu from '../logos/menu.svg'
function Cabecera(){
    
    return(
        <div className='header-container'>
            <img src={logoHeader}
            className='header-image' alt="Logo-BravoAuto" />
            <img src={logoMenu}
            className='header-image--menu' alt="Menu" />
        

        </div>
    )
}

export default Cabecera 
