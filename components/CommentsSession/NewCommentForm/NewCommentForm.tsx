import { FormEvent, useState } from "react";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { EditorProps } from 'react-draft-wysiwyg'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false });

import { CreateCommentRequest } from "../../../types";

type NewCommentFormProps = {
    onCancel: () => void;
    onSubmitComment: (newComment: CreateCommentRequest) => void;
};

export const NewCommentForm: React.FC<NewCommentFormProps> = (props) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        props.onSubmitComment({
            body: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        });
    }

    const onEditorStateChange = (newEditorState: EditorState) => {
        setEditorState(newEditorState);
    }

    return (
        <form className="mb-3" onSubmit={onSubmit}>
            <div className="flex items-center gap-5">
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName border-0 border-b"
                    wrapperClassName="wrapperClassName border w-full"
                    editorClassName="editorClassName px-5 appearance-none rounded w-full leading-tight"
                    onEditorStateChange={onEditorStateChange}
                    placeholder="Leave your comment here"
                    toolbar={{
                        options: ['inline', 'link', 'emoji',],
                        inline: {
                            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
                        },
                    }}
                />
            </div>
            <div className="flex justify-end mt-3">
                <button
                    onClick={props.onCancel}
                    className="border px-5 py-2 cursor-pointer mr-5 rounded hover:bg-gray-100"
                    type="button">
                    Cancel
                </button>
                <button
                    className="border bg-gray-100 text-gray-500 px-4 py-2 cursor-pointer rounded"
                    type="submit">
                    Comment
                </button>
            </div>
        </form>
    )
}