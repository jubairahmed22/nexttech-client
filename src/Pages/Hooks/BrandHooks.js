import { useEffect, useState } from "react";


const BrandHooks = () => {

    const [brand, setbrand] = useState([]);
    useEffect(() => {
        fetch('Brand.json')
            .then(res => res.json())
            .then(data => setbrand(data))
    }, [])
    return { brand }



};

export default BrandHooks;