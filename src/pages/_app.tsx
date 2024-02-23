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
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-QT9WNYYE4D"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-QT9WNYYE4D');
            `,
                    }}
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
