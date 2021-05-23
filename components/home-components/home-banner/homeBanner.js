import React, {useEffect} from 'react';
import {HomeBannerTextContainer, HomeBannerWrapper} from "./homeBannerStyles";
import {Container, Grid, HeaderOne, ImageFillContainer, Paragraph} from "../../../globals/globalStyles";
import Image from "next/image";
import Button from "../../button/button";
import {gsap, Power4} from "gsap/dist/gsap";

const HomeBanner = () => {
    useEffect(() => {
        gsap.to('.hide-text', {y: 0, duration: 1.5, ease: Power4.easeOut, stagger: .3})
    }, [])
    return (
        <HomeBannerWrapper>
            <Container>
                <Grid num='2' fullHeight phoneGap='50px'>
                    <HomeBannerTextContainer>
                        <HeaderOne>
                            <span className='hide-text'>Evodia</span>
                        </HeaderOne>
                        <HeaderOne>
                            <span className='hide-text'>Perfume</span>
                        </HeaderOne>
                        <HeaderOne>
                            <span className='hide-text'>Collection</span>
                        </HeaderOne>
                        <Paragraph>
                            Discover the latest and most elegant scents
                            right here in the Evodia Collection
                        </Paragraph>
                        <Button link='/collection/all'>Shop Now</Button>
                    </HomeBannerTextContainer>
                    <ImageFillContainer phoneHeight='50vh'>
                        <Image src='/assets/images/jpg/evodia-home.jpg' layout='fill' alt='perfumes'/>
                    </ImageFillContainer>
                </Grid>
            </Container>
        </HomeBannerWrapper>
    );
};

export default HomeBanner;