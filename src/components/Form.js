import React from 'react';
import formPhoto from '../assets/Imagenes/car-buyer-testing-trunk-space-of-new-car-at-local-vehicle-dealership-showroom-2.png';
import '../css/Form.css';
import TextField from '@mui/material/TextField'
import { useState } from 'react';




function Form(props){

    const [state, setState] = useState({name:""});
    return(
        <div className='form-container'>
            <img className='form-photo' src={formPhoto} alt="" />
            <h2 className='form-title'> {props.title} </h2>
            <form className='form-inputs' action="" method="post">

            <TextField 
                 label="Name*" 
                 variant="standard" 

                 />
             </form>
        </div>
    )
}

export default Form