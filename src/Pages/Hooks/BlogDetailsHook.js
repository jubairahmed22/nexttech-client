import React, { useEffect, useState } from 'react';

const BlogDetailsHook = id => {
    const [details, setdetails] = useState([]);
    useEffect(() => {
        const url = `https://jubair-portfolio-server-jubairahmed22.vercel.app/fullStack/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setdetails(data))
    }, [id]);
    return [details]

};

export default BlogDetailsHook;