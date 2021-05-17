import React from 'react';
import {GoUp, ShoppingMenu, ShoppingSideBarWrapper} from "./shoppingSideBarStyles";
import {HeaderFour} from "../../../globals/globalStyles";
import CheckBox from "../../check-box/checkBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

const ShoppingSideBar = ({open, toggleMenu}) => {
    const closeSideBar = e => {
        e.target.classList.contains('shopping-wrapper') && toggleMenu();
    }
    return (
        <ShoppingSideBarWrapper open={open} className='shopping-wrapper' onClick={closeSideBar}>
            <div>
                <ShoppingMenu onClick={toggleMenu}>
                    <div/>
                    <div/>
                    <div/>
                </ShoppingMenu>
                <HeaderFour>Products (15)</HeaderFour>
                <HeaderFour style={{marginBottom: 0}}>Sex</HeaderFour>
                <CheckBox label='Men' id="men" name="men"/>
                <CheckBox label='Women' id="women" name="women"/>
                <HeaderFour style={{marginBottom: 0}}>Categories</HeaderFour>
                <CheckBox label='Normal' id="normal" name="normal"/>
                <CheckBox label='Special edition' id="special" name="special"/>
                <HeaderFour style={{marginBottom: 0}}>Scents</HeaderFour>
                <CheckBox label='Citrus' id="citrus" name="citrus"/>
                <CheckBox label='Floral' id="floral" name="floral"/>
                <CheckBox label='Green' id="green" name="green"/>
                <CheckBox label='Oceanic' id="oceanic" name="oceanic"/>
                <CheckBox label='Spicy' id="spicy" name="spicy"/>
                <CheckBox label='Wood' id="wood" name="wood"/>
                <GoUp>
                    <FontAwesomeIcon icon={faAngleUp}/>
                </GoUp>
            </div>
        </ShoppingSideBarWrapper>
    );
};

export default ShoppingSideBar;