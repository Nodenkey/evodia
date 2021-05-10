import React from 'react';
import {HomeBannerTextContainer, HomeBannerWrapper} from "./homeBannerStyles";
import {Container, Grid, HeaderOne, ImageFillContainer, Paragraph} from "../../../globals/globalStyles";
import Image from "next/image";
import Button from "../../button/button";

const HomeBanner = () => {
    return (
        <HomeBannerWrapper>
            <Container>
                <Grid num='2' fullHeight phoneGap='50px'>
                    <HomeBannerTextContainer>
                        <HeaderOne>
                            Evodia <br/>
                            Perfume <br/>
                            Collection
                        </HeaderOne>
                        <Paragraph>
                            Discover the latest and most elegant scents
                            right here in the Evodia Collection
                        </Paragraph>
                        <Button>Shop Now</Button>
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