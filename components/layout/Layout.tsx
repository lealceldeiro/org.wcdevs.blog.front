import Head from 'next/head';
import React from 'react';
import Footer from './footer';
import { Header } from './Header';
import { Nav } from './Nav';

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Nav />
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}