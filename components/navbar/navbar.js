import React, {useEffect, useState} from 'react';
import {MenuButton, NavbarWrapper, ShoppingBagContainer} from "./navbarStyles";
import {Container, Flex, Paragraph} from "../../globals/globalStyles";
import ShoppingBag from "../svg/shopping-bag/shoppingBag";
import Logo from "../svg/logo/logo";
import Menu from "../menu/menu";
import NavShoppingBag from "../shopping-bag/navShoppingBag";
import {useGlobalHooks} from "../../hooks/globalHooks";

const Navbar = () => {
    const num = 2;
    const [openMenu, setOpenMenu] = useState(false);
    const [openShoppingBag, setOpenShoppingBag] = useState(true);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const toggleCart = () => {
        setOpenShoppingBag(!openShoppingBag);
    }

    const closeShoppingCart = () => {
        setOpenShoppingBag(false);
    }

    useEffect(() => {
        const html = document.querySelector('html');
        if (openMenu) {
            html.style.width = '100vw';
            html.style.height = '100vh';
            html.style.overflow = 'hidden';
        } else {
            html.style.width = 'initial';
            html.style.height = 'initial';
            html.style.overflowX = 'hidden';
            html.style.overflowY = 'auto';
        }
    }, [openMenu])

    //use hideDropDownOnCLick function
    const {hideDropDownOnClick} = useGlobalHooks();

    hideDropDownOnClick('shopping-cart', closeShoppingCart);

    return (
        <>
            <NavbarWrapper>
                <Container>
                    <Flex spaceBetween>
                        <Logo/>
                        <MenuButton onClick={toggleMenu} open={openMenu}>
                            <div/>
                            <div/>
                            <div/>
                        </MenuButton>
                        <ShoppingBagContainer onClick={toggleCart} className='shopping-cart'>
                            <ShoppingBag className='shopping-cart'/>
                            <Paragraph>{num}</Paragraph>
                        </ShoppingBagContainer>
                    </Flex>
                    {
                        openShoppingBag && <NavShoppingBag num={num}/>
                    }
                </Container>
            </NavbarWrapper>
            {
                openMenu && <Menu/>
            }
        </>
    );
};

export default Navbar;