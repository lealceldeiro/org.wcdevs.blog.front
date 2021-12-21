import Document, { Html, Head, Main, NextScript } from 'next/document';


class CustomDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
                    <link href="/static/pavo/css/fontawesome-all.css" rel="stylesheet" />
                    {/* // <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" /> */}
                    <link href="/static/pavo/css/swiper.css" rel="stylesheet" />
                    <link href="/static/pavo/css/magnific-popup.css" rel="stylesheet" />
                    <link href="/static/pavo/css/styles.css" rel="stylesheet" />
                </Head>
                <body data-spy="scroll" data-target=".fixed-top">
                    <Main />
                    <NextScript />
                    <script src="/static/pavo/js/jquery.min.js"></script>
                    <script src="/static/pavo/js/jquery.easing.min.js"></script>
                    <script src="/static/pavo/js/swiper.min.js"></script>
                    <script src="/static/pavo/js/jquery.magnific-popup.js"></script>
                    <script src="/static/pavo/js/scripts.js"></script>
                </body>
            </Html>
        )
    }
}

export default CustomDocument;