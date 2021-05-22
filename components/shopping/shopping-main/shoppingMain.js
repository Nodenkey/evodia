import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { useRouter } from 'next/router'
import {MainShoppingWrapper} from "./shoppingMainStyles";
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
import {selectIsLoadingResults, selectResults, selectResultsMessage} from "../../../lib/redux/filter/filter.selectors";
import {clearFilters, getResultsStart} from "../../../lib/redux/filter/filter.actions";
import {Grid, Paragraph} from "../../../globals/globalStyles";
import Loader from "../../loader/loader";

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
        resultsMessage,
    }
) => {
    const router = useRouter();
    const collection = router.query.collection;

    useEffect(() => {
        if (collection) {
            collection === 'all' && getAllPerfumes();
        }
    }, [getAllPerfumes, collection]);

    const perfumes = searchResults.length >= 0 && resultsMessage === "done" ? searchResults : collection === 'all' ? allPerfumes : collectionItems?.perfumes;

    if (isLoadingAllPerfumes || isLoadingCollection || isLoadingResults) {
        return <Loader width='100%' height='calc(100vh - 80px)'/>
    }

    if (allPerfumesError || collectionError) {
        return <h1>An error occurred. Please try refreshing</h1>
    }

    return (
        <MainShoppingWrapper justifyFlexStart>
            <ShoppingMenu id='shopping-menu-main' className='glass-back' onClick={toggleMenu}>
                <div/>
                <div/>
                <div/>
            </ShoppingMenu>
            {
                perfumes?.length > 0
                    ? (
                        <Grid num={['repeat(auto-fill, minmax(300px, 1fr))']} gap='50px' phoneGap='30px' justifyFlexStart className='item-list'>
                            {
                                perfumes?.map(perfume => (
                                    <ShoppingCard key={perfume.id} perfume={perfume}/>
                                ))
                            }
                        </Grid>
                    )
                    : (
                        <Paragraph style={{color: 'white', marginTop: 50}}>No results found</Paragraph>
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
    clearFilters: () => dispatch(clearFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingMain);