import React from 'react';
import {connect} from "react-redux";
import {ShoppingCardWrapper} from "./shoppingCardStyles";
import {Flex, HeaderFive, HeaderFour, Small} from "../../../globals/globalStyles";
import Image from "next/image";
import Button from "../../button/button";
import {addItem} from "../../../lib/redux/cart/cart.actions";

const ShoppingCard = ({perfume, addItem}) => {
    return (
        <ShoppingCardWrapper>
            <Small>{perfume.scent}</Small>
            <HeaderFour>{perfume.name}</HeaderFour>
            <Image src={perfume.image} alt={perfume.name} width={300} height={250}/>
            <Flex spaceBetween id='card-price'>
                <HeaderFive>${perfume.price.toFixed(2)}</HeaderFive>
                <Button onClick={() => addItem(perfume)} type='secondary' fontSize='.8rem'>Add to cart</Button>
            </Flex>
        </ShoppingCardWrapper>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ShoppingCard);