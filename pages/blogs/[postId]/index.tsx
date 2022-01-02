import { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { PostInfo } from '../../../components/PostInfo';
import { mockPosts } from '../../../mocks';
import { Post } from '../../../types';

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
  const post = mockPosts.find(item => item.id === postId);

  // TODO: how to handle this  (post === undefined)
  // POST not found

  return {
    props: {
      post: post as Post
    }
  }
}

type PostIdParams = {
  params: {
    postId: string
  }
}

export const getStaticPaths: GetStaticPaths<{ postId: string }> = async (context) => {
  const paths: PostIdParams[] = [
    {
      params: {
        postId: 'q'
      }
    }
  ];

  return {
    paths,
    fallback: 'blocking'
  }
}

// infer the types from getStaticProps
type PostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return (
    <PostInfo post={post} />
  )
}

export default PostPage;