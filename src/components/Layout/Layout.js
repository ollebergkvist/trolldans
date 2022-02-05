import * as React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
            <main className="">{children}</main>
        </div>
    );
};

export default Layout;
