import React from 'react'
import '../css/About.css'
import cars from'../assets/Imagenes/cars.png'

function About(props) {
    return(
        <div>
            <div className='about-container'>

                <h2 className='about-container--title'>
                    {props.title}
                </h2>
                <h2 className='about-container--title'>
                    {props.title2}
                </h2>
                <h3 className='about-container--titleh3'>
                    {props.titleh3}
                </h3>
                <p className='about-container--paragraph'>
                    {props.paragraph}
                </p>
                <p className='about-container--paragraph'>
                    {props.paragraph2}
                </p>
                <img className='about-container--image' src={cars} alt="Imagen autos en consecionario" />
            </div>
        </div>
    )
}
           
export default About