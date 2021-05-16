import React, {useEffect} from 'react';
import {ShoppingCartWrapper} from "../components/shopping-cart-components/shoppingCartStyles";
import {Container, Divider, HeaderTwo} from "../globals/globalStyles";
import ShoppingCartHeader from "../components/shopping-cart-components/shopping-cart-header/shoppingCartHeader";
import ShoppingCartList from "../components/shopping-cart-components/shopping-card-list/shoppingCartList";
import ShoppingCartTotal from "../components/shopping-cart-components/shopping-cart-total/shoppingCartTotal";
import EmptyCart from "../components/shopping-cart-components/empty-cart/emptyCart";

const ShoppingCart = ({setPath, setDescription}) => {
    useEffect(() => {
        setPath('Shopping cart');
        setDescription('Evodia web app');
    })
    const empty = false;
    return (
        <ShoppingCartWrapper>
            <Container>
                <HeaderTwo>Shopping cart.</HeaderTwo>
                {
                    !empty ?
                        <>
                            <ShoppingCartHeader/>
                            <Divider/>
                            <ShoppingCartList/>
                            <Divider style={{marginTop: 50}}/>
                            <ShoppingCartTotal/>
                        </> :
                        <EmptyCart/>
                }

            </Container>
        </ShoppingCartWrapper>
        );
};

export default ShoppingCart;