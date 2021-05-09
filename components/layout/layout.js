import React, {useEffect, useState} from 'react';
import Navbar from "../navbar/navbar";
import Head from "next/head";
import Footer from "../footer/footer";
import {LayoutWrapper} from "./layoutStyles";

const Layout = ({children}) => {
    const [path, setPath] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const nav = document.querySelector('nav');
        window.onscroll = () => {
            window.pageYOffset > 300 ? nav.classList.add('glass-back') : nav.classList.add('glass-back');
        }
    })
    return (
        <LayoutWrapper>
            <Head>
                <title>Evodia | {path}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    rel="preload"
                    href="/fonts/rockwen.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"/>
            </Head>
            <Navbar/>
            {React.cloneElement(children, {setPath, setDescription})}
            <Footer/>
        </LayoutWrapper>
    );
};

export default Layout;