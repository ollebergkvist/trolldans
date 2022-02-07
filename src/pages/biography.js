import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
    query BiographyPageQuery {
        allContentfulBiography {
            nodes {
                biography {
                    raw
                }
                title
            }
        }
    }
`;

const Biography = ({ data }) => {
    const { title, biography } = data.allContentfulBiography.nodes[0];
    console.log(biography);

    return (
        <Layout>
            <section className="prose">
                <h1>{title}</h1>
                {documentToReactComponents(JSON.parse(biography.raw))}
            </section>
        </Layout>
    );
};

export default Biography;
