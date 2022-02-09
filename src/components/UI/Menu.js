import { Link } from 'gatsby';
import * as React from 'react';
import * as styles from './Menu.module.css';

const Menu = ({ menuIsOpen }) => {
    const menuClasses = `${styles.menu} ${
        menuIsOpen ? styles.open : styles.closed
    }`;

    const menuItems = [
        { label: 'Home', route: '/' },
        { label: 'Events', route: '/events' },
        { label: 'Records', route: '/records' },
        { label: 'Artists', route: '/artists' },
        { label: 'Biography', route: '/biography' },
        { label: 'John Bauer', route: '/john-bauer' },
        { label: 'Subscribe', route: '/subscribe' },
        { label: 'Contact', route: '/contact' },
    ];

    return (
        <nav aria-label="navigation" className={menuClasses}>
            {}
            {menuItems.map((item) => (
                <Link
                    to={`"${item.route}"`}
                    activeClassName="active"
                    className="block uppercase font-semibold text-4xl text-center pb-2 hover:text-blue"
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};

export default Menu;
