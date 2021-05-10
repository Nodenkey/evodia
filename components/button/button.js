import React from 'react';
import {ButtonWrapper} from "./buttonStyles";

const Button = ({children, type, fontSize, squared, fluid}) => {
    return (
        <ButtonWrapper type={type} fontSize={fontSize} squared={squared} fluid={fluid}>
            {children}
        </ButtonWrapper>
    );
};

export default Button;