import React from 'react'
import '../css/Cover.css'
import family from '../assets/Imagenes/family-with-little-daughter-travelling-by-car-2.png'
                

function Cover(props){
    return(
        <div >
            <div className='cover-container'>
                <img className='image-cover--container' src={family} alt="Familia viajando con su hijo en carro" />
                    <span className='cover-shadow'></span>
                <div className='cover-container--text'>
                    <h1>
                        {props.title}
                    </h1>
                    <p className='cover-container--description'>
                        {props.description}
                    </p>

                    <button type='submit' className='button-portada'>{props.button}</button>
            </div>
            
            </div>
            

        </div>
    )
}

export default Cover