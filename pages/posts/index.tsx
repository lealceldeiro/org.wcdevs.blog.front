import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { mockPosts } from '../../mocks';
import { Post } from '../../types/Post';

type Result = {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<Result> = async () => {
  // Call an external API endpoint to get posts.
  // const res = await fetch('https://.../posts');
  // const posts = await res.json();

  return {
    props: {
      posts: mockPosts
    }
  }
}

type BlogsPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const BlogsPage: NextPage<BlogsPageProps> = ({ posts }) => {
  return (
    <div className='container py-16'>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogsPage;