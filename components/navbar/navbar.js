import React from 'react';
import {MenuButton, NavbarWrapper} from "./navbarStyles";
import Image from "next/image";
import {Container, Flex} from "../../globals/globalStyles";
import ShoppingBag from "../svg/shopping-bag/shoppingBag";

const Navbar = () => {
    return (
        <NavbarWrapper fluid>
            <Container>
                <Flex spaceBetween>
                    <Image src='/assets/images/svg/logo.svg' width={70} height={70} alt='evodia logo'/>
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