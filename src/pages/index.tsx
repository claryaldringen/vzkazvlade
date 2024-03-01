import React from 'react';
import styles from './Homepage.module.scss';
import 'react-quill/dist/quill.snow.css';
import News from '@components/News/News';
import Message from '@components/Message/Message';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';

const HomePage = () => {
    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <Header />
                <News />
                <Message />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
