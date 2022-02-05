import * as React from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import styles from './Burger.module.css';

const BurgerIcon = (props) => {
    return <Burger isOpen={false}></Burger>;
};

export default BurgerIcon;
