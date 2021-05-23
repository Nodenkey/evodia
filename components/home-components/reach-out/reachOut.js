import React, {useEffect} from 'react';
import {Circle, Glass, GlassContainer, ReachOutWrapper} from "./reachOutStyles";
import {HeaderFive, HeaderOne, HeaderThree} from "../../../globals/globalStyles";
import {gsap} from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ReachOut = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.circle', {
            duration: 6, stagger: .5, y: 30, yoyo: true,
            repeat: -1, repeatDelay: .5, ease: "linear"
        })
    }, [])
    return (
        <ReachOutWrapper>
            <GlassContainer>
                <Glass>
                    <HeaderThree>Reach out to us</HeaderThree>
                    <HeaderFive>
                        Evodia was designed and developed by <a href='https://wevops.co' target='_blank'
                                                                rel='noopener noreferrer'>wevops</a>. <br/> Feel free to
                        reach us for a chat via:
                    </HeaderFive>
                    <a href="mailto: w3vops@gmail.com" target='_blank'
                       rel='noopener noreferrer'><HeaderOne>w3vops@gmail.com</HeaderOne></a>
                </Glass>
                <Circle size='100px' right='-30px' top='-30px' className='circle'/>
                <Circle size='200px' right='calc(100% - 100px)' className='circle' top='calc(100% - 130px)'/>
            </GlassContainer>
        </ReachOutWrapper>
    );
};

export default ReachOut;