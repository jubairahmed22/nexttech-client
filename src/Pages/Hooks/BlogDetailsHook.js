import React, { useEffect, useState } from 'react';

const BlogDetailsHook = id => {
        const [details, setdetails] = useState([]);
        useEffect(() => {

                const url = `https://server-nexttech.vercel.app/full/${id}`;


                fetch(url)
                        .then(res => res.json())
                        .then(data => setdetails(data))
        }, [id]);
        return [details]

};

export default BlogDetailsHook;