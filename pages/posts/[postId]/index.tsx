import { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { PostDetails } from '../../../components';
import { usePost } from '../../../hooks';
import { mockPosts } from '../../../mocks';
import { Post, PostIdParams } from '../../../types';

type Result = {
  post: Post;
};

type PostPageParams = {
  postId: string;
}

export const getStaticProps: GetStaticProps<Result, PostPageParams> = async (context) => {
  const postId = context.params?.postId || '';
  // Call an external API endpoint to get posts.
  // const res = await fetch('https://.../posts/postId');
  // const post = await res.json();
  const post = mockPosts.find(item => item.slug === postId);

   // FIXME: check how to do this with a middleware to avoid duplicate the same line of code in severals places
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: post as Post
    }
  }
}

export const getStaticPaths: GetStaticPaths<{ postId: string }> = async (context) => {
  // TODO: check if we need to add some of the post pre-rendered here
  const paths: PostIdParams[] = [];
  return {
    paths,
    fallback: 'blocking'
  }
}

// infer the types from getStaticProps
type PostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const { postFromStorage } = usePost(post);

  return postFromStorage && <PostDetails post={postFromStorage} />
}

export default PostPage;