import React from 'react';
import { Link } from 'gatsby';

const SiteNavigation = () => (
    <nav>
        <Link to="/" activeClassName="active">
            Home
        </Link>
        <Link to="/discography/" activeStyle={{ color: 'red' }}>
            Discography
        </Link>
        <Link to="/events/" activeClassName="active">
            Events
        </Link>
        <Link to="/artists/" activeClassName="active">
            Artists
        </Link>
        <Link to="/biography/" activeClassName="active">
            Biography
        </Link>
        <Link to="/john-bauer/" activeClassName="active">
            John Bauer
        </Link>
        <Link to="/contact/" activeClassName="active">
            Contact
        </Link>
        <Link to="/subscribe/" activeClassName="active">
            Subscribe
        </Link>
    </nav>
);

export default SiteNavigation;
