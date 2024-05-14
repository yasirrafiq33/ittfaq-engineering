'use client';
import React, { useState } from 'react';
import Bounded from '../Bounded';
import { Shapes } from '../Shapes';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { name, email, message };

        // Post form data to the API
        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error(res.statusText);
            alert('Message sent successfully!');
            // Reset form or handle response further
        } catch (error) {
            console.error('Failed to send message:', error);
            alert('Failed to send the message.');
        }
    };

    return (
        <Bounded component-type='Contact' className='bg-neutral-900'>
            <div className="flex flex-wrap w-full">
                <div className="w-full mt-12 md:w-1/2 p-4">
                    <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="appearance-none block w-full border rounded py-3 px-4 leading-tight focus:outline-none" id="name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea className="no-resize appearance-none block w-full border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none h-48 resize-none" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-1/2 p-4 hidden sm:block">
                    {/* Placeholder for the Shapes component */}
                    <Shapes />
                </div>
            </div>

        </Bounded>
    );
};

export default ContactForm;