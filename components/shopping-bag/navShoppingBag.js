import React from 'react';
import {NavShoppingBagWrapper} from "./navShoppingBagStyles";
import {Paragraph} from "../../globals/globalStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const NavShoppingBag = () => {
    return (
        <NavShoppingBagWrapper vertical>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <Paragraph>Your cart is empty</Paragraph>
        </NavShoppingBagWrapper>
    );
};

export default NavShoppingBag;