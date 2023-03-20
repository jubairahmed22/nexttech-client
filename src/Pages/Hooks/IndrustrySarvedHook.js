import { useEffect, useState } from "react";

const IndrustrySarvedHook = () => {
    
    const [indrustryData, setindrustryData] = useState([]);
    useEffect(() => {
    fetch('IndrustryData.json')
        .then(res => res.json())
        .then(data => setindrustryData(data))
    }, [])
    return { indrustryData }
    
    

};

export default IndrustrySarvedHook;