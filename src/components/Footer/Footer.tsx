import styles from '../../pages/Homepage.module.scss';
import React from 'react';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.left}>
            Provozuje: Freetech Ltd.,New Horizon Building, Ground Floor, 31⁄2
            Miles Philip S.W. Goldson Highway, Belize City, Belize
        </div>
        <div className={styles.right}>
            <a href="/obchodni-podminky">Obchodní podmínky</a>
        </div>
    </footer>
);

export default Footer;
