import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';

export const query = graphql`
    {
        contentfulBiography {
            body {
                body
            }
            title
        }
    }
`;

const Biography = ({ data }) => {
    const { title } = data.contentfulBiography;
    const { body } = data.contentfulBiography.body;

    return (
        <Layout>
            <section>
                <div>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
            </section>
        </Layout>
    );
};

export default Biography;
