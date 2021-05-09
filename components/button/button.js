import React from 'react';
import {ButtonWrapper} from "./buttonStyles";

const Button = ({children, type}) => {
    return (
        <ButtonWrapper type={type}>
            {children}
        </ButtonWrapper>
    );
};

export default Button;