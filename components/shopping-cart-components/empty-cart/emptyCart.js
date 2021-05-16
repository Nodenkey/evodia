import React from 'react';
import {EmptyCartWrapper} from "./emptyCartStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {HeaderFive, Paragraph} from "../../../globals/globalStyles";
import Link from "next/link";

const EmptyCart = () => {
    return (
        <EmptyCartWrapper vertical>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <HeaderFive>Your cart is currently empty</HeaderFive>
           <Link href='/shopping'><Paragraph>Continue shopping</Paragraph></Link>
        </EmptyCartWrapper>
    );
};

export default EmptyCart;