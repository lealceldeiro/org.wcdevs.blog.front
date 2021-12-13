import React from 'react';
import Header from './header';
import Footer from './footer';
import styles from '../styles/Home.module.css'

const Layout: React.FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </main>
        </div>
    )
}

export default Layout;