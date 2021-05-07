import HomeBanner from "../components/home-components/home-banner/homeBanner";
import {useEffect} from "react";

export default function Home({setPath, setDescription}) {
    useEffect(() => {
        setPath('Home');
        setDescription('Evodia web app');
    })
    return (
        <HomeBanner/>
    )
}
