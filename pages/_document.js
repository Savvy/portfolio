import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html style={{ scrollBehavior:'smooth' }}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&family=Poppins:wght@700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}