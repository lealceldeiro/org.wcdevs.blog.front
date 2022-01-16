import { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPaths } from 'next';
import { PostInfo } from '../../../components';
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

  // TODO: how to handle this  (post === undefined)
  // POST not found

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

  return (
    <div className='mb-24'>
      {
        postFromStorage && <PostInfo post={postFromStorage} />
      }
    </div>
  )
}

export default PostPage;