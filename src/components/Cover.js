import React from 'react'
import '../css/Cover.css'
import family from '../assets/Imagenes/family-with-little-daughter-travelling-by-car-2.png'
                

function Cover(props){
    return(
        <div>
            
            <img className='image-cover--container' src={family} alt="" />
                <span className='cover-shadow'></span>
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

export default Cover