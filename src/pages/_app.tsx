import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.jpeg" />
                <title>Vzkaz fialové vládě</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
