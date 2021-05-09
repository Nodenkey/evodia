import React from 'react';
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

const BestSeller = () => {
    return (
        <BestSellerWrapper>
            <Container>
                <HeaderTwo>Best seller</HeaderTwo>
                <Grid num={['1.2fr 2fr 1.2fr']} gap='50px' phoneGap='30px' oneColumnIPad>
                    <div style={{width: '100%'}}>
                        <ImageFillContainer fixedHeight='300px' phoneHeight='300px' className='image-container'>
                            <Image src='/assets/images/jpg/jaguar-red.jpg' alt='jaguar-red perfume' layout='fill' priority={true}/>
                        </ImageFillContainer>
                        <HeaderFour>Jaguar Red men’s perfume</HeaderFour>
                        <Paragraph>
                            Created with a perfect blend of spicy, fruity and floral notes.
                        </Paragraph>
                        <Flex spaceBetween className='buy'>
                            <Paragraph>
                                $85.00
                            </Paragraph>
                            <Button type='secondary'>Add to cart</Button>
                        </Flex>
                    </div>
                    <div style={{width: '100%'}}>
                        <ImageFillContainer fixedHeight='500px' phoneHeight='300px' className='image-container'>
                            <Image src='/assets/images/jpg/giorgio-armani.jpg' alt='giorgio armani perfume'
                                   layout='fill' priority={true}/>
                        </ImageFillContainer>
                        <HeaderFour>Giorgio Armani women’s perfume</HeaderFour>
                        <Paragraph>
                            The scent for the modern seducer, is a warm and sensual fragrance, featuring the addictive
                            and intoxicating tonka bean.
                        </Paragraph>
                        <Flex spaceBetween className='buy'>
                            <Paragraph>
                                $ 186.99
                            </Paragraph>
                            <Button type='secondary'>Add to cart</Button>
                        </Flex>
                    </div>
                    <div style={{width: '100%'}}>
                        <ImageFillContainer fixedHeight='300px' phoneHeight='300px' className='image-container'>
                            <Image src='/assets/images/jpg/bvlgari.jpg' alt='bvlgari perfume' layout='fill' priority={true}/>
                        </ImageFillContainer>
                        <HeaderFour>Bvlgari men’s perfume</HeaderFour>
                        <Paragraph>
                            Exquisite and unmistakable fragrances and perfumes.
                        </Paragraph>
                        <Flex spaceBetween className='buy'>
                            <Paragraph>
                                $ 115.00
                            </Paragraph>
                            <Button type='secondary'>Add to cart</Button>
                        </Flex>
                    </div>
                </Grid>
            </Container>
        </BestSellerWrapper>
    );
};

export default BestSeller;