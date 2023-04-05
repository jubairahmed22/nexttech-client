import axios from 'axios';
import React from 'react';

const ContactTwo = () => {

    const [state, setState] = React.useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        success: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, address, message } = state;

        axios({
            method: 'POST',
            url: 'https://api.mailgun.net/v3/sandbox0d9c1405d0e14bb0a8f7a87b5be6798b.mailgun.org/messages',
            auth: {
                username: 'api',
                password: '1379a6a28031b1a0aad5a61ac173f92c-30344472-95f638bc'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: `from=jubairahmed060@gmail.com` +
                `&to=jubairahmed060@gmail.com` +
                `&subject=New Contact Form Submission` +
                `&text=${message}` +
                `&phone=${phone}` +
                `&address=${address}`

        })
            .then(() => {
                setState({ ...state, success: true });
            })
            .catch(() => {
                setState({ ...state, success: false });
            });
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }
    return (
        <div className='mt-20'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Name" />
                </div>
                <div>
                    <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Email" />
                </div>
                <div>
                    <input type="tel" name="phone" value={state.phone} onChange={handleChange} placeholder="Phone" />
                </div>
                <div>
                    <input type="text" name="address" value={state.address} onChange={handleChange} placeholder="Address" />
                </div>
                <div>
                    <textarea name="message" value={state.message} onChange={handleChange} placeholder="Message"></textarea>
                </div>
                <button type="submit">Submit</button>
                {state.success && <p>Message sent successfully.</p>}
                {!state.success && <p>Oops! Something went wrong. Please try again later.</p>}
            </form>
        </div>
    );
};

export default ContactTwo;