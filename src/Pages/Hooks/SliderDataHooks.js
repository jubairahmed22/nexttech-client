import { useEffect, useState } from "react";

const SliderDataHooks = () => {
    const [slideData, setSlideData] = useState([]);


    useEffect(() => {
        fetch('SliderData.json')
            .then(res => res.json())
            .then(data => setSlideData(data))
    }, [])




    return { slideData }
   
   
   
   
};

export default SliderDataHooks;