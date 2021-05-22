import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {connect} from "react-redux";
import {GoUp, ShoppingMenu, ShoppingSideBarWrapper} from "./shoppingSideBarStyles";
import {HeaderFour} from "../../../globals/globalStyles";
import CheckBox from "../../check-box/checkBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {getResultsStart, setFilters} from "../../../lib/redux/filter/filter.actions";
import {createStructuredSelector} from "reselect";
import {selectAllPerfumes} from "../../../lib/redux/perfume/perfume.selectors";
import {selectFilters, selectResults, selectResultsMessage} from "../../../lib/redux/filter/filter.selectors";
import {selectCollectionItems} from "../../../lib/redux/collection/collection.selectors";
import Link from "next/link";

const ShoppingSideBar = ({
                             open,
                             toggleMenu,
                             search,
                             searchResults,
                             resultsMessage,
                             collectionItems,
                             setFilters,
                             filters,
                             allPerfumes
                         }) => {
    const router = useRouter();
    const collection = router.query.collection;
    const perfumes = searchResults.length >= 0 && resultsMessage ? searchResults.length : collection === 'all' ? allPerfumes.length : collectionItems?.perfumes?.length;


    useEffect(() => {
        if (resultsMessage === "search") {
            search(filters);
        }
    }, [resultsMessage]);

    useEffect(() => {
        if (collection && collection !== 'all') {
            setFilters('sex', collection);
        }
    }, [collection]);

    const handleCheckBox = (category, value) => {
        setFilters(category, value);
    }

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
                <HeaderFour>Products ({perfumes ?? 0})</HeaderFour>
                {
                    collection === 'all' && (
                        <>
                            <HeaderFour style={{marginBottom: 0}}>Sex</HeaderFour>
                            <CheckBox label='Men' id="men" name="men" value="men" category="sex"
                                      onChange={handleCheckBox}/>
                            <CheckBox label='Women' id="women" name="women" value="women" category="sex"
                                      onChange={handleCheckBox}/>
                        </>
                    )
                }
                <HeaderFour style={{marginBottom: 0}}>Categories</HeaderFour>
                <CheckBox label='Normal' id="normal" name="normal" value="normal" category="edition"
                          onChange={handleCheckBox}/>
                <CheckBox label='Special edition' id="special" name="special" value="special" category="edition"
                          onChange={handleCheckBox}/>
                <HeaderFour style={{marginBottom: 0}}>Scents</HeaderFour>
                <CheckBox label='Citrus' id="citrus" name="citrus" value="citrus" category="scent"
                          onChange={handleCheckBox}/>
                <CheckBox label='Floral' id="floral" name="floral" value="floral" category="scent"
                          onChange={handleCheckBox}/>
                <CheckBox label='Green' id="green" name="green" value="green" category="scent"
                          onChange={handleCheckBox}/>
                <CheckBox label='Oceanic' id="oceanic" name="oceanic" value="oceanic" category="scent"
                          onChange={handleCheckBox}/>
                <CheckBox label='Spicy' id="spicy" name="spicy" value="spicy" category="scent"
                          onChange={handleCheckBox}/>
                <CheckBox label='Woody' id="woody" name="woody" value="woody" category="scent"
                          onChange={handleCheckBox}/>
                <CheckBox label='Fruity' id="fruity" name="fruity" value="fruity" category="scent"
                          onChange={handleCheckBox}/>
                <CheckBox label='Oriental' id="oriental" name="oriental" value="oriental" category="scent"
                          onChange={handleCheckBox}/>
            </div>
            <Link href='/collection/all'>
                <GoUp>
                    <FontAwesomeIcon icon={faAngleUp}/>
                </GoUp>
            </Link>
        </ShoppingSideBarWrapper>
    );
};

const mapStateToProps = createStructuredSelector({
    allPerfumes: selectAllPerfumes,
    searchResults: selectResults,
    collectionItems: selectCollectionItems,
    resultsMessage: selectResultsMessage,
    filters: selectFilters
});

const mapDispatchToProps = dispatch => ({
    search: (filters) => dispatch(getResultsStart(filters)),
    setFilters: (category, value) => dispatch(setFilters(category, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingSideBar);