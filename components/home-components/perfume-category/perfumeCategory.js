import React from 'react';
import {HeaderTwo, ImageFillContainer, Paragraph, Section} from "../../../globals/globalStyles";
import {CategoryGrid, PerfumeCategoryWrapper} from "./perfumeCategoryStyles";
import Image from "next/image";
import Button from "../../button/button";

const PerfumeCategory = () => {
    return (
        <PerfumeCategoryWrapper>
            <Section>
                <CategoryGrid num='2' alignFlexStart phoneGap='30px'>
                    <ImageFillContainer className='image' fixedHeight='500px' phoneHeight='300px'>
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
                        <Button type='secondary' link='/collection/all'>Shop Now</Button>
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
                        <Button type='secondary' link='/collection/all'>Shop Now</Button>
                    </div>
                    <ImageFillContainer className='image' fixedHeight='500px' phoneHeight='300px'>
                        <Image src='/assets/images/jpg/perfume-girl.jpg' layout='fill' alt='male model'
                               objectPosition="50% 10%" />
                    </ImageFillContainer>
                </CategoryGrid>
            </Section>
        </PerfumeCategoryWrapper>
    );
};

export default PerfumeCategory;