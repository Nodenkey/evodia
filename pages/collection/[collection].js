import React, {useEffect, useState} from 'react';
import {ShoppingWrapper} from "../../components/shopping/shopppingStyles";
import ShoppingSideBar from "../../components/shopping/shopping-side-bar/shoppingSideBar";
import ShoppingMain from "../../components/shopping/shopping-main/shoppingMain";

const Collection = ({setPath, setDescription}) => {
    const [openShopMenu, setOpenShopMenu] = useState(false);
    const toggleMenu = () => {
        setOpenShopMenu(!openShopMenu);
    }
    useEffect(() => {
        setPath('perfume-collection');
        setDescription('Evodia presents different range of perfumes for all sexes');
    })
    return (
        <ShoppingWrapper num={['1fr 3.5fr']} alignFlexStart gap='50px'>
            <ShoppingSideBar open={openShopMenu} toggleMenu={toggleMenu}/>
            <ShoppingMain toggleMenu={toggleMenu} open={openShopMenu}/>
        </ShoppingWrapper>
    );
};

export default Collection;