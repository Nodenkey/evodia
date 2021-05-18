import React, {useEffect} from 'react'
import {useRouter} from "next/router";
import {connect} from "react-redux";
import {PerfumeDetailsContainer, PerfumeDetailsWrapper, PerfumeTextContainer} from "./perfumeDetailsStyles";
import Image from "next/image";
import {
    Container,
    Flex,
    HeaderFive,
    HeaderThree,
    HeaderTwo,
    ImageFillContainer,
    Paragraph
} from "../../globals/globalStyles";
import Button from "../button/button";
import {palette} from "../../utils";
import {createStructuredSelector} from "reselect";
import {getPerfumeDetailsStart} from "../../lib/redux/perfume/perfume.actions";
import {selectIsLoadingPerfume, selectPerfumeDetails} from "../../lib/redux/perfume/perfume.selectors";
import {addItem} from "../../lib/redux/cart/cart.actions";

const PerfumeDetailsComponent = ({perfumeDetails, isLoading, getPerfumeDetails, addItem}) => {
    const router = useRouter();
    const perfumeName = router.query['perfume-name'];

    useEffect(() => {
        if (perfumeName) {
            getPerfumeDetails(perfumeName);
        }
    }, [getPerfumeDetails, perfumeName]);

    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <PerfumeDetailsContainer>
            <Container>
                <PerfumeDetailsWrapper num='2' gap='100px' justifyFlexStart phoneGap='30px' oneColumnIPad>
                    <ImageFillContainer id='details-image'>
                        <Image src={perfumeDetails?.image ?? '/assets/images/jpg/bvlgari.jpg'} alt={perfumeDetails?.name} layout='fill'/>
                    </ImageFillContainer>
                    <PerfumeTextContainer>
                        <HeaderTwo>{perfumeDetails?.name}</HeaderTwo>
                        <HeaderFive><span style={{color: `${palette.lightGrey}`}}>Sex:</span> {perfumeDetails?.perfumeCollection.name}</HeaderFive>
                        <HeaderThree>${perfumeDetails?.price.toFixed(2)}</HeaderThree>
                        <Flex justifyFlexStart>
                            <Button>Buy Now</Button>
                            <Button type='tertiary' onClick={() => addItem(perfumeDetails)}>Add to cart</Button>
                        </Flex>
                        <Paragraph>{perfumeDetails?.description}</Paragraph>
                    </PerfumeTextContainer>
                </PerfumeDetailsWrapper>
            </Container>
        </PerfumeDetailsContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    perfumeDetails: selectPerfumeDetails,
    isLoading: selectIsLoadingPerfume
});

const mapDispatchToProps = dispatch => ({
    getPerfumeDetails: perfumeName => dispatch(getPerfumeDetailsStart(perfumeName)),
    addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(PerfumeDetailsComponent);