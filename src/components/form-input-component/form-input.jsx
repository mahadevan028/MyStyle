import React  from 'react';

import './form-input.scss';


const formInput = ({label, handleChange, ...otherFormInputProps}) => {
    return(
        <div className="group">
            <input className='form-input' onChange={handleChange} {...otherFormInputProps}></input>
            {
                label?<label className={`${otherFormInputProps.value.length?'shrink' : ''} form-input-label`}>{label}</label> : null
            }

        </div>
    )
}

export default formInput;