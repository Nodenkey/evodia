import React from 'react';
import {CardList, MainShoppingWrapper} from "./shoppingMainStyles";
import ShoppingCard from "../shopping-card/shoppingCard";
import {ShoppingMenu} from "../shopping-side-bar/shoppingSideBarStyles";

const ShoppingMain = ({toggleMenu, open}) => {
    return (
        <MainShoppingWrapper justifyFlexStart>
            <ShoppingMenu id='shopping-menu-main' onClick={toggleMenu}>
                <div/>
                <div/>
                <div/>
            </ShoppingMenu>
            <CardList>
                <ShoppingCard/>
            </CardList>
        </MainShoppingWrapper>
    );
};

export default ShoppingMain;