import React from 'react';
import {FooterWrapper} from "./footerStyles";
import {Container, Flex, HeaderFive} from "../../globals/globalStyles";
import Logo from "../svg/logo/logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <Flex spaceBetween>
                    <Logo/>
                    <Flex>
                        <HeaderFive>Men</HeaderFive>
                        <HeaderFive>Women</HeaderFive>
                        <HeaderFive>Cart</HeaderFive>
                    </Flex>
                    <Flex>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </Flex>
                </Flex>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;