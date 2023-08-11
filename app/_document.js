// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
                <meta name="theme-color" content="#fff" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}