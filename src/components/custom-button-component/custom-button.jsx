import React from 'react';

import './custom-button.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherCutomButtonProps}) => {

    return(
        <button className={`${isGoogleSignIn ? 'google-button' : ''} custom-button`} {...otherCutomButtonProps}>
          {children}
        </button>
    )

}

export default CustomButton;