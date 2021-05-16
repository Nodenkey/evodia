import React from 'react';
import {ShoppingCartWrapper} from "../components/shopping-cart-components/shoppingCartStyles";
import {Container, Divider, HeaderTwo} from "../globals/globalStyles";
import ShoppingCartHeader from "../components/shopping-cart-components/shopping-cart-header/shoppingCartHeader";
import ShoppingCartList from "../components/shopping-cart-components/shopping-card-list/shoppingCartList";
import ShoppingCartTotal from "../components/shopping-cart-components/shopping-cart-total/shoppingCartTotal";

const ShoppingCart = () => {
    return (
        <ShoppingCartWrapper>
            <Container>
                <HeaderTwo>Shopping cart.</HeaderTwo>
                <ShoppingCartHeader/>
                <Divider/>
                <ShoppingCartList/>
                <Divider style={{marginTop: 50}}/>
                <ShoppingCartTotal/>
            </Container>
        </ShoppingCartWrapper>
        );
};

export default ShoppingCart;