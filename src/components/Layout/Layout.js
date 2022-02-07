import * as React from 'react';
import Header from './Header';
import CookieConsent from 'react-cookie-consent';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <div className="container">
                <Header />
                <main className="">{children}</main>
                <Footer />
            </div>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                enableDeclineButton
                declineButtonText="Decline"
                cookieName="gatsby-gdpr-google-analytics"
                style={{
                    background: '#2B373B',
                    color: 'f1f1f1',
                    fontSize: '12px',
                }}
                buttonStyle={{
                    color: '#FFFFFF',
                    backgroundColor: '#7289da',
                    fontSize: '14px',
                }}
                expires={150}
            >
                This website stores cookies on your computer. These cookies are
                used to collect information about how you interact with this
                website and allow us to remember you. We use this information in
                order to improve and customize your browsing experience and for
                analytics and metrics about our visitors on this website. If you
                decline, your information won’t be tracked when you visit this
                website. A single cookie will be used in your browser to
                remember your preference not to be
            </CookieConsent>
        </>
    );
};

export default Layout;
