import React from 'react';
import formPhoto from '../assets/Imagenes/car-buyer-testing-trunk-space-of-new-car-at-local-vehicle-dealership-showroom 2 (1).svg';
import '../css/Form.css';


function Form(props){
    return(
        <div className='form-container'>
            <img className='form-photo' src={formPhoto} alt="" />
            <h2 className='form-title'> {props.title} </h2>
        </div>
    )
}

export default Form