import { useEffect, useState } from "react";

const CustomerSaysHook = () => {
    const [customer, setcustomer] = useState([]);
    useEffect(() => {
        fetch('CustomerSays.json')
            .then(res => res.json())
            .then(data => setcustomer(data))
    }, [])
    return { customer }




};

export default CustomerSaysHook;