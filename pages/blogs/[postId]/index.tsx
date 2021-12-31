import { GetStaticProps, NextPage, InferGetStaticPropsType, GetStaticPaths } from 'next';
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
  const post: Post = {
    id: postId,
    title: 'Platform Integration',
    summary: 'You sales force can use the app on any smartphone platform without compatibility issues',
    image: {
      src: '/static/pavo/images/features-icon-1.svg',
      alt: 'alternative'
    }
  }

  return {
    props: {
      post
    }
  }
}

type PostIdParams = {
  params: {
    postId: string
  }
}

export const getStaticPaths: GetStaticPaths<{postId: string}> = async (context) => {
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
    <div className='container py-16'>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
    </div>
  )
}

export default PostPage;