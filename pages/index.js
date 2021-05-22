import HomeBanner from "../components/home-components/home-banner/homeBanner";
import React,{useEffect} from "react";
import PerfumeCategory from "../components/home-components/perfume-category/perfumeCategory";
import BestSeller from "../components/home-components/best-seller/bestSeller";
import ReachOut from "../components/home-components/reach-out/reachOut";

export default function Home({setPath, setDescription}) {
    useEffect(() => {
        setPath('Home');
        setDescription('Evodia web app');
    })
    return (
        <>
            <HomeBanner/>
            <PerfumeCategory/>
            <BestSeller/>
            <ReachOut/>
        </>
    )
}
