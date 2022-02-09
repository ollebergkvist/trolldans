import * as React from 'react';
import Layout from '../components/Layout/Layout';

const Contact = () => {
    const formHandler = (e) => {
        e.preventDefault();
        console.log('test');
    };

    return (
        <Layout>
            <section className="prose">
                <h1>Contact us</h1>
                <form onSubmit={formHandler}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="block" />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" className="block" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="block"></textarea>
                    <button
                        type="submit"
                        className="block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                        Send message
                    </button>
                </form>
            </section>
        </Layout>
    );
};

export default Contact;
