import React from 'react';
import {MenuLink, MenuWrapper} from "./menuStyles";
import Link from "next/link";

const Menu = ({closeMenu}) => {
    return (
        <MenuWrapper>
           <Link href='/collection/men'><MenuLink onClick={closeMenu}>Men</MenuLink></Link>
            <Link href='/collection/women'><MenuLink onClick={closeMenu}>Women</MenuLink></Link>
            <Link href='/collection/all'><MenuLink onClick={closeMenu}>Shop</MenuLink></Link>
            <Link href='/shopping-cart'><MenuLink onClick={closeMenu}>Cart</MenuLink></Link>
        </MenuWrapper>
    );
};

export default Menu;