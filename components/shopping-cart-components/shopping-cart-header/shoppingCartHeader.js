import React from 'react';
import {ShoppingCartTitle} from "../shoppingCartStyles";
import {HeaderFive} from "../../../globals/globalStyles";

const ShoppingCartHeader = () => {
    return (
        <ShoppingCartTitle num={['2fr 1fr 1fr .2fr']} justifyFlexStart>
            <HeaderFive>Product</HeaderFive>
            <HeaderFive>Quantity</HeaderFive>
            <HeaderFive>Total</HeaderFive>
        </ShoppingCartTitle>
    );
};

export default ShoppingCartHeader;