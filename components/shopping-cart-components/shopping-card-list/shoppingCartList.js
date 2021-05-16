import React from 'react';
import {AddMinus} from "../shoppingCartStyles";
import {Flex, Grid, HeaderFive, Paragraph, Sub} from "../../../globals/globalStyles";
import Image from "next/image";
import {CartPerfumes} from "../../../utils/staticData";

const ShoppingCartList = () => {
   return CartPerfumes.map((perfume, index) =>
                        <Grid num={['2fr 1fr 1fr .2fr']} justifyFlexStart className='item-row' key={index}>
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
                        </Grid>
    )

};

export default ShoppingCartList;