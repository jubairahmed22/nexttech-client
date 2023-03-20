import React, { useEffect, useState } from 'react';

const BlogDetailsHook = id => {
    const [details, setdetails] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/fullStack/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setdetails(data))
    }, [id]);
    return [details]

};

export default BlogDetailsHook;