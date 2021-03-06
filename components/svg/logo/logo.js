import React from 'react';
import {LogoWrapper} from "./logoStyles";
import Link from "next/link";


const Logo = () => {
    return (
        <Link href='/'><LogoWrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 972.55 757.71">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <g id="logo">
                        <g id="Ellipse_1" data-name="Ellipse 1">
                            <circle cx="420.53" cy="307.14" r="294.47" fill="none"/>
                            <circle cx="420.53" cy="307.14" r="289.3" fill="none" stroke="#fff" strokeWidth="5"/>
                        </g>
                        <g id="Ellipse_2" data-name="Ellipse 2">
                            <circle cx="294.49" cy="463.22" r="294.47" fill="none"/>
                            <circle cx="294.49" cy="463.22" r="289.3" fill="none" stroke="#fff" strokeWidth="5"/>
                        </g>
                        <g id="Ellipse_3" data-name="Ellipse 3">
                            <circle cx="678.07" cy="327.02" r="294.47" fill="none"/>
                            <circle cx="676.77" cy="291.82" r="289.3" fill="none" stroke="#fff" strokeWidth="5"/>
                        </g>
                    </g>
                </g>
            </g>
        </LogoWrapper>
        </Link>
    );
};

export default Logo;