import React from 'react';
import {MenuButton, NavbarWrapper} from "./navbarStyles";
import {Container, Flex} from "../../globals/globalStyles";
import ShoppingBag from "../svg/shopping-bag/shoppingBag";
import Logo from "../svg/logo/logo";

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Container>
                <Flex spaceBetween>
                    <Logo/>
                    <MenuButton>
                        <div/>
                        <div/>
                        <div/>
                    </MenuButton>
                    <ShoppingBag/>
                </Flex>
            </Container>
        </NavbarWrapper>
    );
};

export default Navbar;