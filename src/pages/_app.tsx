import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import CookieConsent from '@components/CookieConsent/CookieConsent';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1872562528039384"
                    crossOrigin="anonymous"
                />
                <link rel="icon" href="/favicon.jpeg" />
                <title>Vzkaz fialové vládě</title>
            </Head>
            <Component {...pageProps} />
            <CookieConsent />
        </>
    );
};

export default App;
