import React from 'react'
import '../Hojas de estilos/Portada.css'
                

function Portada(props){
    return(
        <div>
            <div className='image-container'>            
                <img className='image-cover--container'  alt="" />
            </div>
            <div className='cover-container'>
                <h1>
                    {props.title}
                </h1>
                <p className='cover-container--description'>
                    {props.description}
                </p>

                <button>{props.button}</button>
            </div>
            

        </div>
    )
}

export default Portada