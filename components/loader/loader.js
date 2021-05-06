import React, {useEffect} from 'react';
import {LoaderWrapper} from "./loaderStyles";
import {gsap} from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";


const Loader = () => {
    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin);
        const R = 300

        const ellipse1 = document.querySelector('#Ellipse_1');
        const ellipse2 = document.querySelector('#Ellipse_2');
        const ellipse3 = document.querySelector('#Ellipse_3');
        gsap.to(ellipse1, {duration: 2, motionPath: {
                path: [{x:0,y:0},{x:R/2,y:R/2},{x:0,y:R},{x:-R/2,y:R/2},{x:0,y:0}], // you probably want more points here...or just use an SVG <path>!
                curviness: 1.5,
            }, transformOrigin: "center", ease:"power0.easeNone", repeat: -1, yoyo: true});
        gsap.to(ellipse2, {duration: 2, motionPath: {
                path: [{x:0,y:0},{x:R/2,y:R/2},{x:0,y:R},{x:-R/2,y:R/2},{x:0,y:0}], // you probably want more points here...or just use an SVG <path>!
                curviness: 1.5,
            }, transformOrigin: "center", ease:"power0.easeNone", repeat: -1, yoyo: true, delay: .5});
        gsap.to(ellipse3, {duration: 2, motionPath: {
                path: [{x:0,y:0},{x:R/2,y:R/2},{x:0,y:R},{x:-R/2,y:R/2},{x:0,y:0}], // you probably want more points here...or just use an SVG <path>!
                curviness: 1.5,
            }, transformOrigin: "center", ease:"power0.easeNone", repeat: -1, yoyo: true, delay: 1});
    });
    return (
        <LoaderWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 972.55 757.71">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <g id="logo">
                            <g id="Ellipse_1" data-name="Ellipse 1">
                                <circle cx="420.53" cy="307.14" r="294.47" fill="none"/>
                                <circle cx="420.53" cy="307.14" r="289.3" fill="none" stroke="#fff"
                                        strokeWidth="5"/>
                            </g>
                            <g id="Ellipse_2" data-name="Ellipse 2">
                                <circle cx="294.49" cy="463.22" r="294.47" fill="none"/>
                                <circle cx="294.49" cy="463.22" r="289.3" fill="none" stroke="#fff"
                                        strokeWidth="5"/>
                            </g>
                            <g id="Ellipse_3" data-name="Ellipse 3">
                                <circle cx="678.07" cy="327.02" r="294.47" fill="none"/>
                                <circle cx="676.77" cy="291.82" r="289.3" fill="none" stroke="#fff"
                                        strokeWidth="5"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </LoaderWrapper>
    );
};

export default Loader;