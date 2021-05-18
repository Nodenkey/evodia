import React from 'react';
import {connect} from "react-redux";
import {Divider, Flex, Greyed, Grid, HeaderFive, Paragraph} from "../../../globals/globalStyles";
import {PaymentButtonContainer, PriceContainer, ShoppingCartTotalWrapper} from "./shoppingCartTotalStyles";
import Button from "../../button/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {createStructuredSelector} from "reselect";
import {selectCartTotal} from "../../../lib/redux/cart/cart.selectors";

const ShoppingCartTotal = ({total}) => {
    return (
        <ShoppingCartTotalWrapper>
                <PriceContainer>
                    <Grid num='2' phoneNum='2' justifyFlexStart gap='50px'><Paragraph><Greyed>Subtotal:</Greyed></Paragraph> <Paragraph>${total.toFixed(2)}</Paragraph></Grid>
                    <Grid num='2' phoneNum='2' justifyFlexStart gap='50px'><Paragraph><Greyed>Shipping:</Greyed></Paragraph> <Paragraph>Free</Paragraph></Grid>
                    <Divider/>
                   <Grid num='2' phoneNum='2' justifyFlexStart gap='50px'><Paragraph className='total'>Total: </Paragraph><Paragraph className='total'>${total.toFixed(2)}</Paragraph></Grid>
                </PriceContainer>
            <PaymentButtonContainer spaceBetween>
               <Link href='/shopping'><Flex style={{cursor: 'pointer'}}><FontAwesomeIcon icon={faAngleLeft}/><HeaderFive style={{margin: 0}}>Continue shopping</HeaderFive></Flex></Link>
                <div><Button type='secondary' squared fluid>Make payment</Button></div>
            </PaymentButtonContainer>
        </ShoppingCartTotalWrapper>
    );
};

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal
});

export default connect(mapStateToProps)(ShoppingCartTotal);