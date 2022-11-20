import React from 'react'
import '../css/Section.css'

function Section(props){
    
    return(
        <div>
        <h2 className='section-title'>
                {props.title}
            </h2>
            <p className='section-description'>
                {props.description}
            </p>
        <div className='section-container'>
            
            
                <img className='section-image' alt="" src={props.image} />
                
                <h2 className='section-image--title'>
                    {props.type_car}
                </h2>
                <button className='section-image--button'>
                    {props.submit}
                </button>
            
        </div>
        </div>
    )
}

export default Section