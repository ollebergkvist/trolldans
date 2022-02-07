import * as React from 'react';
import Layout from '../components/Layout/Layout';

const Subscribe = () => {
    const formHandler = (e) => {
        e.preventDefault();
        console.log('test');
    };

    return (
        <Layout>
            <section className="prose">
                <h1>Contact us</h1>
                <form onSubmit={formHandler}>
                    <label htmlFor="name">First name</label>
                    <input type="text" id="name" />
                    <label htmlFor="name">Last name</label>
                    <input type="text" id="name" />
                    <label htmlFor="name">Email</label>
                    <input type="email" id="email" />
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        </Layout>
    );
};

export default Subscribe;
