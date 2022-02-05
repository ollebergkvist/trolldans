import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// export const pageQuery = graphql``;

// markup
const IndexPage = () => {
    return (
        <Layout>
            <section>
                <h1>News</h1>
            </section>
            <section>
                <h1>Event</h1>
            </section>
            <section>
                <h1>Featured Records</h1>
                <div className="md:grid grid-cols-2 gap-10">
                    <div className="card">
                        <img
                            src="../images/trolldans-logotype__icon.png"
                            alt=""
                        />
                        <div>Recondite</div>
                        <div>Waldluft</div>
                        <div>EP</div>
                        <div>TROLLDANS001</div>
                    </div>
                    <div className="card">
                        <img
                            src="../images/trolldans-logotype__icon.png"
                            alt=""
                        />
                        <div>Recondite</div>
                        <div>Waldluft</div>
                        <div>TROLLDANS001</div>
                    </div>
                    <div className="card">
                        <img
                            src="../images/trolldans-logotype__icon.png"
                            alt=""
                        />
                        <div>Recondite</div>
                        <div>Waldluft</div>
                        <div>EP</div>
                        <div>TROLLDANS001</div>
                    </div>
                    <div className="card">
                        <img
                            src="../images/trolldans-logotype__icon.png"
                            alt=""
                        />
                        <div>Recondite</div>
                        <div>Waldluft</div>
                        <div>EP</div>
                        <div>TROLLDANS001</div>
                    </div>
                    <div className="card">
                        <img
                            src="../images/trolldans-logotype__icon.png"
                            alt=""
                        />
                        <div>Recondite</div>
                        <div>Waldluft</div>
                        <div>EP</div>
                        <div>TROLLDANS001</div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;
