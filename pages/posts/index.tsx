import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { PostCard2 } from '../../components';
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
    <div className="text-gray-600  mt-24 body-font overflow-hidden">
      <div className="container px-5 sm:py-24 mx-auto">
        <div className="flex flex-wrap">
          {
            posts.map(post => <PostCard2 key={post.slug} post={post} />)
          }
        </div>
      </div>
    </div>
  )
}

export default BlogsPage;