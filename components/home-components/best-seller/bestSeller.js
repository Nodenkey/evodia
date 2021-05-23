import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useRouter} from "next/router";
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
import {addItem} from "../../../lib/redux/cart/cart.actions";
import {gsap} from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const BestSeller = ({getSpecialPerfumes, specialPerfumes, isLoadingSpecialPerfumes, specialPerfumesError, addItem}) => {
    const router = useRouter();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.best-seller', {opacity: 0, y: 100, duration: 1.5, stagger: {
            each: .3,
            from: "center",
            }, ease: 'back.out(1.7)', scrollTrigger: {
            trigger: '.best-seller',
            }})
    })

    useEffect(() => {
        getSpecialPerfumes();
    }, [getSpecialPerfumes]);

    const viewDetails = (e, perfume) => {
        e.target.id !== 'best-cart-button' && router.push(`/perfume-details/${perfume.name}`);
    }

    return (
        <BestSellerWrapper>
            <Container>
                <HeaderTwo>Best seller</HeaderTwo>
                <Grid num={['1.2fr 2fr 1.2fr']} gap='50px' phoneGap='30px' oneColumnIPad>
                    {
                        specialPerfumes?.map(perfume => (
                            <div style={{width: '100%', cursor: 'pointer'}} className='best-seller' key={perfume.id} onClick={(e) => viewDetails(e, perfume)}>
                                <ImageFillContainer fixedHeight='300px' phoneHeight='300px' className='image-container'>
                                    <Image src={perfume?.image} alt={perfume?.name} layout='fill' />
                                </ImageFillContainer>
                                <HeaderFour>{perfume?.name} Perfume</HeaderFour>
                                <Paragraph id='best-description'>
                                    {perfume?.description}
                                </Paragraph>
                                <Flex spaceBetween className='buy'>
                                    <Paragraph>
                                        GHS {perfume?.price.toFixed(2)}
                                    </Paragraph>
                                    <Button id='best-cart-button' onClick={() => addItem(perfume)} type='secondary'>Add to cart</Button>
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
    getSpecialPerfumes: () => dispatch(getSpecialPerfumesStart()),
    addItem: (item) => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);