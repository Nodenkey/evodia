import React, {useEffect} from 'react';
import PerfumeDetailsComponent from "../../components/perfume-details/perfumeDetailsComponent";
import {useRouter} from "next/router";

const PerfumeDetails = ({setPath, setDescription}) => {
    const router = useRouter();
    const perfumeName = router.query['perfume-name'];

    useEffect(() => {
        setPath(perfumeName);
        setDescription(`Details about ${perfumeName} perfume`);
    })

    return (
        <PerfumeDetailsComponent/>
    );
};

export default PerfumeDetails;