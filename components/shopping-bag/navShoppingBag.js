import React from 'react';
import {NavShoppingBagWrapper, ShoppingItems, ShoppingItemTextContainer} from "./navShoppingBagStyles";
import {HeaderFive, Paragraph} from "../../globals/globalStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {CartPerfumes} from "../../utils/staticData";
import Image from "next/image";
import Button from "../button/button";

const NavShoppingBag = ({num}) => {
        return (
            <NavShoppingBagWrapper vertical justifyFlexStart>
                {
                    num === 0 ? <>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            <Paragraph>Your cart is empty</Paragraph>
                        </> :
                        <>
                            {
                                CartPerfumes.map((perfume, index) =>
                                    <ShoppingItems key={index} justifyFlexStart>
                                        <Image src={perfume.image} alt={perfume.name} width={140} height={120}
                                               objectFit='cover'/>
                                        <ShoppingItemTextContainer>
                                            <HeaderFive>{perfume.name}</HeaderFive>
                                            <Paragraph>
                                                {perfume.numberSelected} x ${perfume.price}
                                            </Paragraph>
                                        </ShoppingItemTextContainer>
                                    </ShoppingItems>
                                )
                            }
                        <Button fontSize='1rem' squared={true} type='secondary' fluid={true}>Go to checkout</Button>
                        </>
                }

            </NavShoppingBagWrapper>
        );
    }
;

export default NavShoppingBag;