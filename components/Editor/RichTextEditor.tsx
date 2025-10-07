'use client';

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react';
interface Props {
    value: string;
    onChange: (value: string) => void;
}
const RichTextEditor = ({ value, onChange }: Props) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
        immediatelyRender: false,
    });
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value)
        }
    }, [editor, value])

    if (!editor) {
        return null;
    }


    return (
        <div className='border p-4 rounded-lg bg-white shadow-sm'>
            <div className='flex gap-2 mb-3 border-b pb-2'>
                <button
                    type='button'
                    className={`px-3 py-1 rounded ${editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}>
                    B
                </button>
                <button
                    type='button'
                    className={`px-3 py-1 rounded ${editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}>
                    I
                </button>
                <button
                    type='button'
                    className={`px-3 py-1 rounded ${editor.isActive('strike') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}>
                    S
                </button>
                <button
                    type='button'
                    className={`px-3 py-1 rounded ${editor.isActive('bulletList') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    disabled={!editor.can().chain().focus().toggleBulletList().run()}>
                    • List
                </button>
            </div>
            <EditorContent editor={editor} className="prose focus:outline-none min-h-[200px]" />
        </div>
    );
};

export default RichTextEditor;