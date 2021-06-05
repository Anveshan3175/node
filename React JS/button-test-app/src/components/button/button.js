import React from 'react';
import './button.css';

function Button({label}){
    //To differentiate between regular ids and ids used for testing use  data-testid
    return <div className='button-style' data-testid='button' >{label}</div>
}

export default Button;