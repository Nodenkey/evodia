import React from 'react';
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

const PerfumeDetailsComponent = () => {
    return (
        <PerfumeDetailsContainer>
            <Container>
                <PerfumeDetailsWrapper num='2' gap='100px' justifyFlexStart phoneGap='30px' oneColumnIPad>
                    <ImageFillContainer id='details-image'>
                        <Image src='/assets/images/jpg/giorgio-armani.jpg' layout='fill'/>
                    </ImageFillContainer>
                    <PerfumeTextContainer>
                        <HeaderTwo>Giorgio Armani</HeaderTwo>
                        <HeaderFive><span style={{color: `${palette.lightGrey}`}}>Sex:</span> Men</HeaderFive>
                        <HeaderThree>$700.00</HeaderThree>
                        <Flex justifyFlexStart>
                            <Button>Buy Now</Button>
                            <Button type='tertiary'>Add to cart</Button>
                        </Flex>
                        <Paragraph>An intense new facet of the COCO MADEMOISELLE personality emerges to forge a
                            powerful,
                            deep, addictive fragrance that is irresistible in several flavours including citrus and
                            fruity.</Paragraph>
                    </PerfumeTextContainer>
                </PerfumeDetailsWrapper>
            </Container>
        </PerfumeDetailsContainer>
    );
};

export default PerfumeDetailsComponent;