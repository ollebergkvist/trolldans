import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import BurgerIcon from '../UI/BurgerIcon';
import * as styles from './Header.module.css';

const Header = () => {
    return (
        <header className="flex justify-between py-6">
            <div className={styles.brand}>
                <StaticImage
                    src="../../images/trolldans-logotype__text.png"
                    alt="Trolldans logotype text only"
                    placeholder="blurred"
                    loading="eager"
                />
            </div>
            <div className="menu">
                <BurgerIcon />
            </div>
        </header>
    );
};

export default Header;
