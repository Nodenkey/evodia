import React from 'react';
import {AddMinus, DesktopGridList, PhoneListContainer, PhoneListWrapper} from "../shoppingCartStyles";
import {Flex, HeaderFive, Paragraph, Sub} from "../../../globals/globalStyles";
import Image from "next/image";
import {CartPerfumes} from "../../../utils/staticData";

const ShoppingCartList = () => {
    return CartPerfumes.map((perfume, index) =>
        <div key={index}>
            <DesktopGridList num={['2fr 1fr 1fr .2fr']} justifyFlexStart className='item-row'>
                <Flex>
                    <Image src={perfume.image} width={150} height={150} objectFit='cover'/>
                    <div className='shopping-cart-text'>
                        <HeaderFive>{perfume.name}</HeaderFive>
                        <Sub>{perfume.gender}</Sub>
                    </div>
                </Flex>
                <AddMinus>
                    <img src='/assets/images/SVG/minus.svg' alt='minus-sign'/>
                    <Paragraph>2</Paragraph>
                    <img src='/assets/images/SVG/plus.svg' alt='plus-sign'/>
                </AddMinus>
                <Paragraph style={{fontWeight: 600}}>$200.00</Paragraph>
                <img src="/assets/images/SVG/close.svg" alt="close" style={{cursor: 'pointer'}}/>
            </DesktopGridList>
            <PhoneListWrapper>
                <PhoneListContainer className='item-row'>
                    <Image src={perfume.image} width={150} height={150} objectFit='cover'/>
                    <div className='shopping-cart-text'>
                        <HeaderFive>{perfume.name}</HeaderFive>
                        <Sub>{perfume.gender}</Sub>
                    </div>
                    <AddMinus>
                        <img src='/assets/images/SVG/minus.svg' alt='minus-sign'/>
                        <Paragraph>2</Paragraph>
                        <img src='/assets/images/SVG/plus.svg' alt='plus-sign'/>
                    </AddMinus>
                    <Paragraph style={{fontWeight: 600}}>$200.00</Paragraph>
                </PhoneListContainer>
                <img src="/assets/images/SVG/close.svg" alt="close" style={{cursor: 'pointer'}} id='list-close'/>
            </PhoneListWrapper>
        </div>
    )

};

export default ShoppingCartList;