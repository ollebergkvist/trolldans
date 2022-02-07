import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Subscribe from './Subscribe';

const Footer = () => {
    return (
        <div>
            <StaticImage src="../../images/trolldans-logotype__icon.png" />
            <address>
                <a href="mailto:hello@trolldansrecords.com">
                    hello@trolldansrecords.com
                </a>
            </address>
            <Subscribe />
        </div>
    );
};

export default Footer;
