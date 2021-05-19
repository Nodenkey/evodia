import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { useRouter } from 'next/router'
import {CardList, MainShoppingWrapper} from "./shoppingMainStyles";
import ShoppingCard from "../shopping-card/shoppingCard";
import {ShoppingMenu} from "../shopping-side-bar/shoppingSideBarStyles";
import {createStructuredSelector} from "reselect";
import {getCollectionStart} from "../../../lib/redux/collection/collection.actions";
import {getAllPerfumesStart} from "../../../lib/redux/perfume/perfume.actions";
import {
    selectAllPerfumes,
    selectAllPerfumesError,
    selectIsLoadingAllPerfumes
} from "../../../lib/redux/perfume/perfume.selectors";
import {
    selectCollectionError,
    selectCollectionIsLoading,
    selectCollectionItems
} from "../../../lib/redux/collection/collection.selectors";
import {DesktopGridList} from "../../shopping-cart-components/shoppingCartStyles";
import {selectIsLoadingResults, selectResults, selectResultsMessage} from "../../../lib/redux/filter/filter.selectors";
import {getResultsStart} from "../../../lib/redux/filter/filter.actions";

const ShoppingMain = (
    {
        toggleMenu,
        open,
        allPerfumes,
        isLoadingAllPerfumes,
        allPerfumesError,
        collectionItems,
        isLoadingCollection,
        collectionError,
        getAllPerfumes,
        getCollection,
        searchResults,
        isLoadingResults,
        resultsMessage
    }
) => {
    const router = useRouter();
    const collection = router.query.collection;

    useEffect(() => {
        if (collection) {
            collection === 'all' ? getAllPerfumes() : getCollection(collection);
        }
    }, [collection, getAllPerfumes, getCollection]);

    const perfumes = searchResults.length >= 0 && resultsMessage === "done" ? searchResults : collection === 'all' ? allPerfumes : collectionItems?.perfumes;

    if (isLoadingAllPerfumes || isLoadingCollection || isLoadingResults) {
        return <h1>Loading</h1>
    }

    if (allPerfumesError || collectionError) {
        return <h1>An error occurred. Please try refreshing</h1>
    }

    return (
        <MainShoppingWrapper justifyFlexStart>
            <ShoppingMenu id='shopping-menu-main' onClick={toggleMenu}>
                <div/>
                <div/>
                <div/>
            </ShoppingMenu>
            {
                perfumes?.length > 0
                    ? (
                        <DesktopGridList num={['1fr 1fr 1fr']} justifyFlexStart className='item-row'>
                            {
                                perfumes?.map(perfume => (
                                    <ShoppingCard key={perfume.id} perfume={perfume}/>
                                ))
                            }
                        </DesktopGridList>
                    )
                    : (
                        <h1 style={{color: 'white'}}>No results found</h1>
                    )
            }
        </MainShoppingWrapper>
    );
};

const mapStateToProps = createStructuredSelector({
    allPerfumes: selectAllPerfumes,
    isLoadingAllPerfumes: selectIsLoadingAllPerfumes,
    allPerfumesError: selectAllPerfumesError,
    collectionItems: selectCollectionItems,
    isLoadingCollection: selectCollectionIsLoading,
    collectionError: selectCollectionError,
    searchResults: selectResults,
    isLoadingResults: selectIsLoadingResults,
    resultsMessage: selectResultsMessage
});

const mapDispatchToProps = dispatch => ({
    getCollection: (collectionName) => dispatch(getCollectionStart(collectionName)),
    getAllPerfumes: () => dispatch(getAllPerfumesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingMain);