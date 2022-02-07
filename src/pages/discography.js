import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
    query RecordsPageQuery {
        allContentfulRecords {
            nodes {
                artist
                contentful_id
                title
                catalogueNumber
                type
                coverArt {
                    gatsbyImageData(placeholder: DOMINANT_COLOR)
                    description
                }
            }
        }
    }
`;

const Records = ({ data }) => {
    const { nodes } = data.allContentfulRecords;

    return (
        <Layout>
            <section>
                <h2>Our records</h2>
                <div className="md:grid grid-cols-2 gap-10">
                    {nodes.length > 0 ? (
                        nodes.map((item) => {
                            const coverArt = getImage(item.coverArt);

                            return (
                                <div
                                    className="card"
                                    key={item.catalogueNumber}
                                >
                                    <Link to="/records">
                                        <GatsbyImage
                                            alt={item.coverArt?.description}
                                            image={coverArt}
                                        />
                                    </Link>

                                    <p>{item.artist}</p>
                                    <p>{item.title}</p>
                                    <p>{item.catalogueNumber}</p>
                                    <p>{item.type}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p>No records to display</p>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Records;
