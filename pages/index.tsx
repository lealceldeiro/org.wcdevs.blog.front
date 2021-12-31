import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Header } from '../components/layout/Header'; // TODO: remove this from the layout
import {
    IntroductionSection,
    BlogSection,    
} from '../components/sections';
import { Post } from '../types';

const Home: NextPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        setPosts([
            {
                id: 'q',
                title: 'Platform Integration',
                summary: 'You sales force can use the app on any smartphone platform without compatibility issues',
                image: {
                    src: '/static/pavo/images/features-icon-1.svg',
                    alt: 'alternative'
                }
            },
            {
                id: 'w',
                title: 'Easy On Resources',
                summary: 'Works smoothly even on older generation hardware due to our optimization efforts',
                image: {
                    src: '/static/pavo/images/features-icon-2.svg',
                    alt: 'alternative'
                }
            },
            {
                id: 'e',
                title: 'Great Performance',
                summary: 'Optimized code and innovative technology insure no delays and ultra-fast responsiveness',
                image: {
                    src: '/static/pavo/images/features-icon-3.svg',
                    alt: 'Alternative'
                }
            },
            {
                id: 'r',
                title: 'Multiple Languages',
                summary: 'Choose from one of the 40 languages that come pre-installed and start selling smarter',
                image: {
                    src: '/static/pavo/images/features-icon-4.svg',
                    alt: 'Alternative'
                }
            },
            {
                id: 't',
                title: 'Free Updates',
                summary: 'Don\'t worry about future costs, pay once and receive all future updates at no extra cost',
                image: {
                    src: '/static/pavo/images/features-icon-5.svg',
                    alt: 'Alternative'
                }
            },
            {
                id: 'y',
                title: 'Community Support',
                summary: 'Register the app and get acces to knowledge and ideas from the Pavo online community',
                image: {
                    src: '/static/pavo/images/features-icon-6.svg',
                    alt: 'Alternative'
                }
            }
        ]);
    }, []);
    
    return (
        <>
            <Header />
            <IntroductionSection />
            <BlogSection posts={posts} />
        </>
    )
}

export default Home;