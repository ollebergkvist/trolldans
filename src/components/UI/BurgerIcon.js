import * as React from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';

const BurgerIcon = ({ isMenuOpen }) => {
    return <Burger isOpen={isMenuOpen}></Burger>;
};

export default BurgerIcon;
