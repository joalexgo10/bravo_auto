import React from 'react';
// import {useState} from 'react';
// import TextField, {Input} from '@material/react-text-field';

// import '@material/react-text-field/dist/text-field.css';
import formPhoto from '../assets/Imagenes/car-buyer-testing-trunk-space-of-new-car-at-local-vehicle-dealership-showroom-2.png';
import '../css/Form.css';


function Form(props) {

   return (
        <div className='form-container'>
            <img className='form-photo' src={formPhoto} alt="carros en concesionario"/>
            <h2 className='form-title'> {props.title} </h2>

            
            <form className='form-inputs'>
                <div className='form-label--container'>
                    <span className='form-label--input' >
                    
                        <label>
                            
                            <input type="text" placeholder='Name*' />
                        </label>
                    </span>
                    <span className='form-label--input'>
                        <label  >
                            
                            <input type="text"  placeholder="E-Mail*"/>
                        </label>
                    </span>

                    <span className='form-label--input'>
                        <label  >
                    
                            <input type="text"  placeholder="City*" />
                        </label>
                    </span>
                    <span className='form-label--input'>
                        <label  >
                    
                            <input type="text"  placeholder="Last Name*" />
                        </label>
                    </span>
                    <span className='form-label--input'>
                        <label  >
                    
                            <input type="number"  placeholder="Mobile Phone*" />
                        </label>
                    </span>
                    <span className='form-label--input'>
                        <label  >
                    
                            <input type="text"  placeholder="Postal Code*" />
                        </label>
                    </span>

                    
                    <span className='form-checkbox'>
                        <label>
                            <input type="checkbox" placeholder="Postal Code*" />
                            I agree with the terms and condictions and the policy privacy.

                        </label>
                    </span>

                    <button type="submit" className='button-form'>{props.buttonForm}</button>
                    
                </div>
                
                {/* <div className='input-container'>
                    <TextField
                        label='Name*'
                        className='text-field'
                        lineRippleClassName='input-ripple'
                        floatingLabelClassName='input-label'
                    >
                        <Input
                            value={state.name}
                            className='form-input'
                            onChange={(e) => setState({...state, name: e.currentTarget.value})}/>
                    </TextField>
                    <TextField
                        
                        label='Last Name*'
                        className='text-field'
                        lineRippleClassName='input-ripple'
                        floatingLabelClassName='input-label'
                    >
                        <Input
                            value={state.email}
                            className='form-input'
                            onChange={(e) => setState({...state, email: e.currentTarget.value})}/>
                    </TextField>
              
                
                    <TextField
                        label='Email*'
                        className='text-field'
                        lineRippleClassName='input-ripple'
                        floatingLabelClassName='input-label'
                    >
                        <Input
                            value={state.last_name}
                            className='form-input'
                            onChange={(e) => setState({...state, last_name: e.currentTarget.value})}/>
                    </TextField> 
                </div> */}
                
            </form>
        </div>
    )
}

export default Form