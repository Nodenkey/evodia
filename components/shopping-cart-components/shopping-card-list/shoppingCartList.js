import React from 'react';
import {connect} from "react-redux";
import {AddMinus, DesktopGridList, PhoneListContainer, PhoneListWrapper} from "../shoppingCartStyles";
import {Flex, HeaderFive, Paragraph, Sub} from "../../../globals/globalStyles";
import Image from "next/image";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../../lib/redux/cart/cart.selectors";
import {addItem, clearItemFromCart, removeItem} from "../../../lib/redux/cart/cart.actions";

const ShoppingCartList = ({removeItem, clearItem, cartItems, addItem}) => {
    return cartItems.map((perfume) =>{
        const perfumeCollection = perfume.perfumeCollection.id ?? perfume.perfumeCollection;
        return (
            <div key={perfume.id}>
                <DesktopGridList num={['2fr 1fr 1fr .2fr']} justifyFlexStart className='item-row'>
                    <Flex>
                        <Image src={perfume.image} width={150} height={150} objectFit='cover'/>
                        <div className='shopping-cart-text'>
                            <HeaderFive>{perfume.name}</HeaderFive>
                            <Sub>{perfumeCollection.endsWith("17") ? "male" : "female"}</Sub>
                        </div>
                    </Flex>
                    <AddMinus>
                        <img onClick={() => removeItem(perfume)} src='/assets/images/SVG/minus.svg' alt='minus-sign'/>
                        <Paragraph>{perfume.quantity}</Paragraph>
                        <img onClick={() => addItem(perfume)} src='/assets/images/SVG/plus.svg' alt='plus-sign'/>
                    </AddMinus>
                    <Paragraph style={{fontWeight: 600}}>${perfume.price.toFixed(2)}</Paragraph>
                    <img onClick={() => clearItem(perfume)} src="/assets/images/SVG/close.svg" alt="close" style={{cursor: 'pointer'}}/>
                </DesktopGridList>
                <PhoneListWrapper>
                    <PhoneListContainer className='item-row'>
                        <Image src={perfume.image} width={150} height={150} objectFit='cover'/>
                        <div className='shopping-cart-text'>
                            <HeaderFive>{perfume.name}</HeaderFive>
                            <Sub>{perfumeCollection.endsWith("17") ? "male" : "female"}</Sub>
                        </div>
                        <AddMinus>
                            <img onClick={() => removeItem(perfume)} src='/assets/images/SVG/minus.svg' alt='minus-sign'/>
                            <Paragraph>{perfume.quantity}</Paragraph>
                            <img onClick={() => addItem(perfume)} src='/assets/images/SVG/plus.svg' alt='plus-sign'/>
                        </AddMinus>
                        <Paragraph style={{fontWeight: 600}}>${perfume.price.toFixed(2)}</Paragraph>
                    </PhoneListContainer>
                    <img onClick={() => clearItem(perfume)} src="/assets/images/SVG/close.svg" alt="close" style={{cursor: 'pointer'}} id='list-close'/>
                </PhoneListWrapper>
            </div>
        );
    })

};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartList);