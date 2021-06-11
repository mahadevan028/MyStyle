import React from 'react';

import './custom-button.scss'

const CustomButton = ({children, ...otherCutomButtonProps}) => {

    return(
        <button className="custom-button" {...otherCutomButtonProps}>
          {children}
        </button>
    )

}

export default CustomButton;