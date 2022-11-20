import React from 'react'
import '../Hojas de estilos/Portada.css'
import family from '../Imagenes/family-with-little-daughter-travelling-by-car 2.svg'
                

function Portada(props){
    return(
        <div>
            
            <img className='image-cover--container' src={family} alt="" />
                <span>hbsicbihabs</span>
            <div className='cover-container'>
                <h1>
                    {props.title}
                </h1>
                <p className='cover-container--description'>
                    {props.description}
                </p>

                <button className='button-portada'>{props.button}</button>
            </div>
            

        </div>
    )
}

export default Portada