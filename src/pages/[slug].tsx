import styles from './Homepage.module.scss';
import Footer from '@components/Footer/Footer';
import React from 'react';
import Message from '@components/Message/Message';
import { prepareToPublish } from '@components/News/News';
import Header from "@components/Header/Header";

interface ItemPageProps {
    content: string;
    title: string;
}

const ItemPage = ({ content, title }: ItemPageProps) => {
    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <Header />
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
                <Message />
            </div>
            <Footer />
        </div>
    );
};

export const getServerSideProps = async context => {
    const { slug } = context.params;

    // Zavolejte váš API endpoint pro získání dat
    const res = await fetch(`http://localhost:3000/api/news`);
    const data = await res.json();

    // Najděte konkrétní článek v RSS feedu podle slugu
    const item = data.find(item => item.link.replace(/\/$/, '').endsWith(slug));

    // Zkontrolujte, zda byl článek nalezen
    if (!item) {
        return {
            notFound: true,
        };
    }

    // Předání obsahu článku do props komponenty
    return {
        props: {
            content:
                prepareToPublish(item.content) ||
                prepareToPublish(item['content:encoded']) ||
                'Obsah nenalezen',
            title: item.title,
        },
    };
};

export default ItemPage;
