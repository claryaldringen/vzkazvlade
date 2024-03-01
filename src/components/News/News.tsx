import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './News.module.scss'

const fetchNews = async () => {
    const res = await fetch('/api/news');
    const data = await res.json();

    console.log(data);

    return data;
};

export const prepareToPublish = (text: string): string => {
    // Odstranění všeho za " -VK-" včetně
    const truncatedText = text.split(' -VK-')[0];

    // Kontrola, zda zkrácený řetězec obsahuje "Text"
    if (truncatedText.includes('Text')) {
        const parts = truncatedText.split('Text');

        // Zahodit první část a spojit zbytek
        const remainingParts = parts.slice(1).join('Text');

        return remainingParts;
    }

    // Vrátit zkrácený text, pokud neobsahuje "Text"
    return truncatedText;
};

const prepareTitle = (title: string) => {
    return `${title.split('!')[0]}!`;
};

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews().then(setNews);
    }, []);

    return (
        <div>
            {news.map((item, index) => (
                <div
                    key={index}
                    style={{
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    <h2>{prepareTitle(item.title)}</h2>
                    <p className={styles.snippet}>{prepareToPublish(item.contentSnippet)}</p>
                    <Link
                        href={`/${item.link.replace(/\/$/, '').split('/').pop()}`}
                        passHref
                    >
                        Číst více
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default News;