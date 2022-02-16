import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/dist/client/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg'
const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false });
import draftToHtml from 'draftjs-to-html';
import { Post } from '../../types/Post';

import '/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { CreateOrUpdatePostRequest } from '../../types/index';

type PostFormProps = {
  onCreateOrUpdatePost: (post: CreateOrUpdatePostRequest) => void;
  post: Post | CreateOrUpdatePostRequest;
}

type NewPostData = Pick<Post, 'title'>

export const PostForm: React.FC<PostFormProps> = ({ post, onCreateOrUpdatePost }) => {
  const router = useRouter();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { register, handleSubmit, formState: { errors } } = useForm<NewPostData>();

  useEffect(() => {
    if (post.body !== '') {
      const rawState = convertFromRaw(JSON.parse(post.body));
      setEditorState(EditorState.createWithContent(rawState))
    }
  }, [post])

  const onSubmit: SubmitHandler<NewPostData> = (formData) => {
    console.log({ formData })
    const newPost: CreateOrUpdatePostRequest = {
      title: formData.title,
      body: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      excerpt: 'Summary of the blog',
    }

    onCreateOrUpdatePost(newPost);
  }

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  }

  const goBack = () => {
    router.back();
  }

  return (
    <form
      className='form mt-24 flex flex-col border-1 p-5'
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
        <button className='border px-5 py-2 cursor-pointer mr-5 rounded hover:bg-gray-100' type="submit">{post.slug ? 'Update' : 'Create'}</button>
        <button className='border px-5 py-2 cursor-pointer mr-5 rounded hover:bg-gray-100'
          onClick={goBack}
          type="button">
          Back
        </button>
      </div>
    </form>
  );
}