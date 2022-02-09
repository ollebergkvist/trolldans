import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import BurgerIcon from '../UI/BurgerIcon';
import * as styles from './Header.module.css';

const Header = ({ onOpenMenu, menuIsOpen }) => {
    return (
        <>
            <header className="flex justify-between py-6 z-0">
                <div className={styles.brand}>
                    <StaticImage
                        src="../../images/trolldans-logotype__text.png"
                        alt="Trolldans logotype text only"
                        loading="eager"
                        placeholder="blurred"
                    />
                </div>
                <div className={styles.menu}>
                    <BurgerIcon isMenuOpen={menuIsOpen} />
                    <button onClick={onOpenMenu}>Click me</button>
                </div>
            </header>
        </>
    );
};

export default Header;
