/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-script-in-document */
// TODO: Remove this line above and the scripts form the document
// TODO: remove styles form this page

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
                    <link href="/static/pavo/css/fontawesome-all.css" rel="stylesheet" />
                    <link href="/static/pavo/css/styles.css" rel="stylesheet" />
                </Head>
                <body data-spy="scroll" data-target=".fixed-top">
                    <a href="body" className="back-to-top page-scroll">Back to Top</a>
                    <Main />
                    <NextScript />
                    <Script src="/static/pavo/js/jquery.min.js"></Script>
                    <Script src="/static/pavo/js/jquery.easing.min.js"></Script>
                    <Script src="/static/pavo/js/custom.js"></Script>
                </body>
            </Html>
        )
    }
}

export default CustomDocument;