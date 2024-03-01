import React, { useCallback } from 'react';
import styles from './Header.module.scss'; // Importujte SCSS modul

const Header = () => {
    const scrollToMessage = useCallback(() => {
        const element = document.getElementById('message');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className={styles.header}>
            <h1 className={styles.h1}>Vzkaz Fialové vládě!!!</h1>
            <button className={styles.button} onClick={scrollToMessage}>
                Poslat vzkaz
            </button>
        </div>
    );
};

export default Header;
