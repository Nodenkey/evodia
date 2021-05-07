import React from 'react';
import {ButtonWrapper} from "./buttonStyles";

const Button = ({children}) => {
    return (
        <ButtonWrapper>
            {children}
        </ButtonWrapper>
    );
};

export default Button;