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
                    <input type="text" id="name" />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message"></textarea>
                    <input type="textarea" id="subject" />
                    <button type="submit">Send message</button>
                </form>
            </section>
        </Layout>
    );
};

export default Contact;
