import React from 'react';
import {MenuLink, MenuWrapper} from "./menuStyles";

const Menu = () => {
    return (
        <MenuWrapper>
            <MenuLink>Men</MenuLink>
            <MenuLink>Women</MenuLink>
            <MenuLink>Shop</MenuLink>
            <MenuLink>Cart</MenuLink>
        </MenuWrapper>
    );
};

export default Menu;