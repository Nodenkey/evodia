import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {BestSellerWrapper} from "./bestSellerStyles";
import {
    Container,
    Flex,
    Grid,
    HeaderFour,
    HeaderTwo,
    ImageFillContainer,
    Paragraph
} from "../../../globals/globalStyles";
import Image from "next/image";
import Button from "../../button/button";
import {createStructuredSelector} from "reselect";
import {
    selectIsLoadingSpecialPerfumes,
    selectSpecialPerfumes,
    selectSpecialPerfumesError
} from "../../../lib/redux/perfume/perfume.selectors";
import {getSpecialPerfumesStart} from "../../../lib/redux/perfume/perfume.actions";

const BestSeller = ({getSpecialPerfumes, specialPerfumes, isLoadingSpecialPerfumes, specialPerfumesError}) => {

    useEffect(() => {
        getSpecialPerfumes();
    }, [getSpecialPerfumes]);

    return (
        <BestSellerWrapper>
            <Container>
                <HeaderTwo>Best seller</HeaderTwo>
                <Grid num={['1.2fr 2fr 1.2fr']} gap='50px' phoneGap='30px' oneColumnIPad>
                    {
                        specialPerfumes?.map(perfume => (
                            <div style={{width: '100%'}}>
                                <ImageFillContainer fixedHeight='300px' phoneHeight='300px' className='image-container'>
                                    <Image src={perfume?.image} alt={perfume?.name} layout='fill' />
                                </ImageFillContainer>
                                <HeaderFour>{perfume?.name} Perfume</HeaderFour>
                                <Paragraph>
                                    {perfume?.description}
                                </Paragraph>
                                <Flex spaceBetween className='buy'>
                                    <Paragraph>
                                        ${perfume?.price.toFixed(2)}
                                    </Paragraph>
                                    <Button type='secondary'>Add to cart</Button>
                                </Flex>
                            </div>
                        ))
                    }
                </Grid>
            </Container>
        </BestSellerWrapper>
    );
};

const mapStateToProps = createStructuredSelector({
    specialPerfumes: selectSpecialPerfumes,
    isLoadingSpecialPerfumes: selectIsLoadingSpecialPerfumes,
    specialPerfumesError: selectSpecialPerfumesError
});

const mapDispatchToProps = dispatch => ({
    getSpecialPerfumes: () => dispatch(getSpecialPerfumesStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);