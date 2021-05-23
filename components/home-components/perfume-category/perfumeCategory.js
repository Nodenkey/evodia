import React, {useEffect} from 'react';
import {HeaderTwo, ImageFillContainer, Paragraph, Section} from "../../../globals/globalStyles";
import {CategoryGrid, PerfumeCategoryWrapper} from "./perfumeCategoryStyles";
import Image from "next/image";
import Button from "../../button/button";
import {gsap} from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const PerfumeCategory = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.men-image', {scale: .6, duration: 1, ease: 'back.out(1.7)', scrollTrigger: {
            trigger: '.men-image',
            start: '50% bottom'
            }})
        gsap.from('.women-image', {scale: .6, duration: 1, ease: 'back.out(1.7)', scrollTrigger: {
            trigger: '.women-image',
            start: '50% bottom'
            }})
    }, [])
    return (
        <PerfumeCategoryWrapper>
            <Section>
                <CategoryGrid num='2' alignFlexStart phoneGap='30px'>
                    <ImageFillContainer className='image men-image' fixedHeight='500px' phoneHeight='300px'>
                        <Image src='/assets/images/jpg/perfume-guy.jpg' layout='fill' alt='male model'
                               objectPosition="50% 10%"/>
                    </ImageFillContainer>
                    <div>
                        <HeaderTwo>Men’s perfume category</HeaderTwo>
                        <Paragraph>
                            Discover our fantastic range of men’s products here at Evodia. There is a wide selection of
                            perfume products to choose from right here! See our catalogue and pick what is perfect for
                            you.
                            Online orders come with free delivery.
                        </Paragraph>
                        <Button type='secondary' link='/collection/men'>Shop Now</Button>
                    </div>
                </CategoryGrid>
            </Section>
            <Section>
                <CategoryGrid num='2' alignFlexStart phoneGap='30px' verticalReversePhone>
                    <div>
                        <HeaderTwo>Women’s perfume category</HeaderTwo>
                        <Paragraph>
                            We bring you fragrances and scents from top designer brands all over the world. Our
                            sensational scents include citrus, floral, green, oceanic, oriental, spicy and woody
                            flavours. Our fragrances ensure you are always fully dressed for any occasion.
                        </Paragraph>
                        <Button type='secondary' link='/collection/women'>Shop Now</Button>
                    </div>
                    <ImageFillContainer className='image women-image' fixedHeight='500px' phoneHeight='300px'>
                        <Image src='/assets/images/jpg/perfume-girl.jpg' layout='fill' alt='male model'
                               objectPosition="50% 10%" />
                    </ImageFillContainer>
                </CategoryGrid>
            </Section>
        </PerfumeCategoryWrapper>
    );
};

export default PerfumeCategory;