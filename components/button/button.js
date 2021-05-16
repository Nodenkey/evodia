import React from 'react';
import {ButtonWrapper} from "./buttonStyles";
import Link from "next/link";

const Button = ({children, type, fontSize, squared, fluid, link}) => {
    return link ? (
            <Link href={link}>
                <ButtonWrapper type={type} fontSize={fontSize} squared={squared} fluid={fluid}>
                    {children}
                </ButtonWrapper>
            </Link>
        ) :
        <ButtonWrapper type={type} fontSize={fontSize} squared={squared} fluid={fluid}>
            {children}
        </ButtonWrapper>
};

export default Button;