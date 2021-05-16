import React from 'react';
import {Divider, Flex, Greyed, HeaderFive, Paragraph} from "../../../globals/globalStyles";
import {ShoppingCartTotalWrapper} from "./shoppingCartTotalStyles";
import Button from "../../button/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ShoppingCartTotal = () => {
    return (
        <ShoppingCartTotalWrapper>
            <Flex spaceBetween>
                <div/>
                <div>
                    <Paragraph><Greyed>Subtotal:</Greyed> <span className='left'>$318.00</span></Paragraph>
                    <Paragraph><Greyed>Shipping:</Greyed> <span className='left'>Free</span></Paragraph>
                    <Divider/>
                    <HeaderFive>Total: <span className='left'>$318.00</span></HeaderFive>
                </div>
            </Flex>
            <Flex spaceBetween style={{marginTop: 30}}>
               <Link href='/shopping'><Flex style={{cursor: 'pointer'}}><FontAwesomeIcon icon={faAngleLeft}/><HeaderFive style={{margin: 0}}>Continue shopping</HeaderFive></Flex></Link>
                <Button type='secondary' squared>Make payment</Button>
            </Flex>
        </ShoppingCartTotalWrapper>
    );
};

export default ShoppingCartTotal;