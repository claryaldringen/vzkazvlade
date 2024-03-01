import styles from './Homepage.module.scss';
import Footer from '@components/Footer/Footer';
import React from 'react';
import Message from '@components/Message/Message';
import { Item, prepareToPublish } from '@components/News/News';
import Header from '@components/Header/Header';
import { GetServerSideProps } from 'next';

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

export const getServerSideProps: GetServerSideProps<ItemPageProps> = async ({
    query,
}) => {
    let slug = query.slug;
    if (Array.isArray(slug)) {
        slug = slug[0];
    }

    // Zavolejte váš API endpoint pro získání dat
    const url =
        process.env.NODE_ENV === 'develop'
            ? 'http://localhost:3000'
            : 'https://vzkazvlade.cz/';
    const res = await fetch(`${url}/api/news`);
    const data: Item[] = await res.json();

    // Najděte konkrétní článek v RSS feedu podle slugu
    const item = data.find(item =>
        item.link.replace(/\/$/, '').endsWith(String(slug)),
    );

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
