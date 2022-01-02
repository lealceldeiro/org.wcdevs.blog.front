import type {
    GetStaticProps,
    InferGetStaticPropsType,
    NextPage,
} from 'next';
import { Header } from '../components/layout/Header'; // TODO: remove this from the layout
import {
    IntroductionSection,
    BlogSection,
} from '../components/sections';
import { mockPosts } from '../mocks';
import { Post } from '../types';

type Result = {
    posts: Post[]
}

export const getStaticProps: GetStaticProps<Result> = () => {
    return {
        props: {
            posts: mockPosts
        }
    }
}

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
    return (
        <>
            <Header />
            <IntroductionSection />
            <BlogSection posts={posts} />
        </>
    )
}

export default HomePage;