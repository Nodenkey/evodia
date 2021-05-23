import React from 'react';
import {connect} from "react-redux";
import {usePaystackPayment} from "react-paystack";
import {Divider, Flex, Greyed, Grid, HeaderFive, Paragraph} from "../../../globals/globalStyles";
import {PaymentButtonContainer, PriceContainer, ShoppingCartTotalWrapper} from "./shoppingCartTotalStyles";
import Button from "../../button/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {createStructuredSelector} from "reselect";
import {selectCartTotal} from "../../../lib/redux/cart/cart.selectors";
import {clearCart} from "../../../lib/redux/cart/cart.actions";

const ShoppingCartTotal = ({total, clearCart}) => {
    const paymentConfig = {
        reference: String((new Date()).getTime()),
        email: "alfredasare101@gmail.com",
        amount: total * 100,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        currency: "GHS"
    };

    const initializePayment = usePaystackPayment(paymentConfig);

    const onSuccess = (reference) => {
        clearCart();
    };

    const onClose = () => {
        console.log('closed')
    }

    const handlePayment = () => {
        initializePayment(onSuccess, onClose);
    };

    return (
        <ShoppingCartTotalWrapper>
                <PriceContainer>
                    <Grid num={['.5fr 1fr']} phoneNum='2' justifyFlexStart gap='50px'><Paragraph><Greyed>Subtotal:</Greyed></Paragraph> <Paragraph>GHS {total.toFixed(2)}</Paragraph></Grid>
                    <Grid num={['.5fr 1fr']} phoneNum='2' justifyFlexStart gap='50px'><Paragraph><Greyed>Shipping:</Greyed></Paragraph> <Paragraph>Free</Paragraph></Grid>
                    <Divider/>
                   <Grid num={['.5fr 1fr']} phoneNum='2' justifyFlexStart gap='50px'><Paragraph className='total'>Total: </Paragraph><Paragraph className='total'>GHS {total.toFixed(2)}</Paragraph></Grid>
                </PriceContainer>
            <PaymentButtonContainer spaceBetween>
               <Link href='/collection/all'><Flex style={{cursor: 'pointer'}}><FontAwesomeIcon icon={faAngleLeft}/><HeaderFive style={{margin: 0}}>Continue shopping</HeaderFive></Flex></Link>
                <div><Button onClick={handlePayment} type='secondary' squared fluid>Make payment</Button></div>
            </PaymentButtonContainer>
        </ShoppingCartTotalWrapper>
    );
};

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTotal);