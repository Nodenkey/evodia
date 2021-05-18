import React from 'react';
import {connect} from "react-redux";
import {NavShoppingBagWrapper, ShoppingItems, ShoppingItemTextContainer} from "./navShoppingBagStyles";
import {HeaderFive, Paragraph} from "../../globals/globalStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Button from "../button/button";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../lib/redux/cart/cart.selectors";

const NavShoppingBag = ({num, cartItems}) => {
        return (
            <NavShoppingBagWrapper vertical justifyFlexStart>
                {
                    num === 0 ? <>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            <Paragraph>Your cart is empty</Paragraph>
                        </> :
                        <>
                            {
                                cartItems.map((perfume) =>
                                    <ShoppingItems key={perfume.id} justifyFlexStart>
                                        <Image src={perfume.image} alt={perfume.name} width={140} height={120}
                                               objectFit='cover'/>
                                        <ShoppingItemTextContainer>
                                            <HeaderFive>{perfume.name}</HeaderFive>
                                            <Paragraph>
                                                {perfume.quantity} x ${perfume.price}
                                            </Paragraph>
                                        </ShoppingItemTextContainer>
                                    </ShoppingItems>
                                )
                            }
                        <Button fontSize='1rem' squared={true} type='secondary' fluid={true} link='shopping-cart'>Go to checkout</Button>
                        </>
                }

            </NavShoppingBagWrapper>
        );
    }
;

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(NavShoppingBag);