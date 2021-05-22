import React from 'react';
import {ButtonWrapper} from "./buttonStyles";
import Link from "next/link";

const Button = ({children, type, fontSize, squared, fluid, link, onClick, id}) => {
    return link ? (
            <Link href={link}>
                <ButtonWrapper onClick={onClick} type={type} fontSize={fontSize} squared={squared} fluid={fluid} id={id}>
                    {children}
                </ButtonWrapper>
            </Link>
        ) :
        <ButtonWrapper onClick={onClick} type={type} fontSize={fontSize} squared={squared} fluid={fluid} id={id}>
            {children}
        </ButtonWrapper>
};

export default Button;