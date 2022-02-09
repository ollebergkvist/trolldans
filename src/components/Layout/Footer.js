import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Subscribe from './Subscribe';

const Footer = () => {
    return (
        <footer className="relative -z-10 grid grid-cols-3 gap-10">
            <StaticImage
                src="../../images/trolldans-logotype__icon.png"
                alt="add alt"
            />
            <address>
                <a href="mailto:hello@trolldansrecords.com">
                    hello@trolldansrecords.com
                </a>
            </address>
            <Subscribe />
        </footer>
    );
};

export default Footer;
