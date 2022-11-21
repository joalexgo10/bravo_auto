import React from 'react'
import '../css/About.css'

function About(props) {
    return(
        <div>
            <h2>
                {props.title}
            </h2>
            <h3>
                {props.title2}
            </h3>
            <p>
                {props.paragraph}
            </p>
        </div>
    )
}
           
export default About