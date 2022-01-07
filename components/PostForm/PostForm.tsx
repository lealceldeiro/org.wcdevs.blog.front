import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/dist/client/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg'
const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false });
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import { generateRandomId } from '../../helpers';
import { Post } from '../../types/Post';

import '/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

type PostFormProps = {
  onCreatePost: (newPost: Post) => void;
  post: Post;
}

type NewPostData = Pick<Post, 'title'>

export const PostForm: React.FC<PostFormProps> = ({ post, onCreatePost }) => {
  const router = useRouter();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { register, handleSubmit, formState: { errors } } = useForm<NewPostData>();

  const isNewPost = post.id === '';

  useEffect(() => {
    const postStored = sessionStorage.getItem(post.id);
  }, [])

  useEffect(() => {
    if (post.content !== '') {
      const rawState = convertFromRaw(JSON.parse(post.content));
      setEditorState(EditorState.createWithContent(rawState))
    }
  }, [post.content])

  const onSubmit: SubmitHandler<NewPostData> = (formData) => {
    const newPost: Post = {
      id: post.id || generateRandomId(),
      title: formData.title,
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      summary: 'You sales force can use the app on any smartphone platform without compatibility issues',
      image: {
        src: '/static/pavo/images/features-icon-1.svg',
        alt: 'alternative'
      }
    }
    onCreatePost(newPost);
  }

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  }

  const goBack = () => {
    router.back();
  }

  return (
    <form
      className='form mt-16 flex flex-col border-1 p-5'
      onSubmit={handleSubmit(onSubmit)}>

      <div className=''>
        <input
          className='w-full text-lg h-10 border-2 p-5'
          placeholder='Title here...'
          defaultValue={post.title}
          {...register('title', { required: true })}
        />
        {errors.title && <span>This field is required</span>}
      </div>


      <div className="">
        <Editor
          editorState={editorState}
          wrapperClassName="blog-editor-wrapper mt-5 border"
          editorClassName="blog-editor pl-5"
          onEditorStateChange={onEditorStateChange}
          placeholder="The message goes here..."
        />
      </div>

      <div
        className="border mt-5 p-5 rdw-editor-main"
        dangerouslySetInnerHTML={{ __html: draftToHtml(convertToRaw(editorState.getCurrentContent())) }}>
      </div>

      <div className='mt-5 flex'>
        <button className='bg-indigo-50 p-1 rounded px-4' type="submit">{isNewPost ? 'Create' : 'Update'}</button>
        <button className='bg-indigo-50 p-1 ml-3 rounded px-4'
          onClick={goBack}
          type="button">
          Back
        </button>
      </div>
    </form>
  );
}