import React from 'react';
import {FooterWrapper} from "./footerStyles";
import {Container, Flex, HeaderFive} from "../../globals/globalStyles";
import Logo from "../svg/logo/logo";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <Flex spaceBetween>
                    <Logo/>
                    <Flex>
                        <Link href='/collection/men'><HeaderFive>Men</HeaderFive></Link>
                        <Link href='/collection/women'><HeaderFive>Women</HeaderFive></Link>
                        <Link href='/shopping-cart'><HeaderFive>Cart</HeaderFive></Link>
                    </Flex>
                    <Flex>
                        <a href="https://twitter.com/_wevops" target='_blank' rel='noopener'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://web.facebook.com/Wevops-104263934675793" target='_blank' rel='noopener'><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="https://www.instagram.com/wevops/" target='_blank' rel='noopener'><FontAwesomeIcon icon={faTwitter}/></a>
                    </Flex>
                </Flex>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;