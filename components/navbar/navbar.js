import React, {useEffect, useState} from 'react';
import {MenuButton, NavbarWrapper} from "./navbarStyles";
import {Container, Flex} from "../../globals/globalStyles";
import ShoppingBag from "../svg/shopping-bag/shoppingBag";
import Logo from "../svg/logo/logo";
import Menu from "../menu/menu";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        const html = document.querySelector('html');
        if(openMenu) {
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
                        <ShoppingBag/>
                    </Flex>
                </Container>
            </NavbarWrapper>
            {
                openMenu && <Menu/>
            }
        </>
    );
};

export default Navbar;