import React from 'react';
import {ShoppingCardWrapper} from "./shoppingCardStyles";
import {Flex, HeaderFive, HeaderFour, Small} from "../../../globals/globalStyles";
import Image from "next/image";
import Button from "../../button/button";

const ShoppingCard = () => {
    return (
        <ShoppingCardWrapper>
            <Small>Fruity</Small>
            <HeaderFour>Bvlgari</HeaderFour>
            <Image src='/assets/images/jpg/bvlgari.jpg' alt='perfume' width={300} height={250}/>
            <Flex spaceBetween id='card-price'>
                <HeaderFive>$700</HeaderFive>
                <Button type='secondary' fontSize='.8rem'>Add to cart</Button>
            </Flex>
        </ShoppingCardWrapper>
    );
};

export default ShoppingCard;