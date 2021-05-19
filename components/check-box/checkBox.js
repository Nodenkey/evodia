import React from 'react';
import {CategoryItemsCheck, CategoryItemsLabel} from "./checkBoxStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const CheckBox = ({label, id, name, value, category, onChange}) => {
    return (
        <CategoryItemsLabel onChange={() => onChange(category, value)}>
            <CategoryItemsCheck type='checkbox' id={id} name={name} value={value}/>
            {label}
            <FontAwesomeIcon icon={faCheck}/>
        </CategoryItemsLabel>
    );
};

export default CheckBox;