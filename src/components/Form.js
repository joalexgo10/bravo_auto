import React from 'react';
// import {useState} from 'react';
// import TextField, {Input} from '@material/react-text-field';

import '@material/react-text-field/dist/text-field.css';
import formPhoto from '../assets/Imagenes/car-buyer-testing-trunk-space-of-new-car-at-local-vehicle-dealership-showroom-2.png';
import '../css/Form.css';


function Form(props) {

    // const [state, setState] = useState({name: "", last_name: ""});

    return (
        <div className='form-container'>
            <img className='form-photo' src={formPhoto} alt=""/>
            <h2 className='form-title'> {props.title} </h2>
            <form action="" className='form-inputs'></form>
            {/* <form className='form-inputs' action="" method="post">
                <div className='input-container'>
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
                </div>
                <div className='input-container'>
                    <TextField
                        label='Last Name*'
                        className='text-field'
                        lineRippleClassName='input-ripple'
                        floatingLabelClassName='input-label'
                    >
                        <Input
                            value={state.last_name}
                            className='form-input'
                            onChange={(e) => setState({...state, last_name: e.currentTarget.value})}/>
                    </TextField>
                </div>
                <div className='input-container'>
                    <TextField
                        label='Email*'
                        className='text-field'
                        lineRippleClassName='input-ripple'
                        floatingLabelClassName='input-label'
                    >
                        <Input
                            value={state.email}
                            className='form-input'
                            onChange={(e) => setState({...state, email: e.currentTarget.value})}/>
                    </TextField>
                </div>
            </form> */}
        </div>
    )
}

export default Form