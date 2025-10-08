'use client';

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { useEffect, useState } from 'react';
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
interface Props {
    value: string;
    onChange: (value: string) => void;
}
const RichTextEditor = ({ value, onChange }: Props) => {
    const [content, setContent] = useState(value)
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Highlight.configure({ multicolor: true }),
            Document,
            Paragraph,
            Text,
            Heading.configure({
                levels: [1, 2, 3],
            }),
            Underline,
        ],
        content: value,
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML())
        },
        immediatelyRender: false,
    });
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value)
            setContent(value)
        }
    }, [editor, value])


    useEffect(() => {
        onChange(content)
    }, [content, onChange])

    if (!editor) {
        return null;
    }

    const buttonStyle = (isActive:boolean) =>{
     return   `px-3 py-1 rounded transition-colors ${isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`
    }


    return (
        <div className='border p-4 rounded-lg bg-white shadow-sm'>
            <div className='flex flex-wrap gap-2 mb-3 border-b pb-2'>
                <button
                    type='button'
                    className={buttonStyle(editor.isActive('bold'))}
                    onClick={() => editor.chain().focus().toggleBold().run()}>
                    B
                </button>
                <button
                    type='button'
                    className={buttonStyle(editor.isActive('italic'))}
                    onClick={() => editor.chain().focus().toggleItalic().run()}>
                    I
                </button>
                <button
                    type='button'
                    className={buttonStyle(editor.isActive('underline'))}
                    onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    U
                </button>
                <button
                    type='button'
                    className={buttonStyle(editor.isActive('strike'))}
                    onClick={() => editor.chain().focus().toggleStrike().run()}>
                    S
                </button>
                    <button
                    type='button'
                    className={buttonStyle(editor.isActive('heading', { level: 1 }))}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                    H1
                </button>
                    <button
                    type='button'
                    className={buttonStyle(editor.isActive('heading', { level: 2 }))}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                    H2
                </button>
                    <button
                    type='button'
                    className={buttonStyle(editor.isActive('heading', { level: 3 }))}
                    onClick={() => editor.chain().focus().toggleHeading({ level:3 }).run()}>
                    H3
                </button>
                <button
                    type='button'
                    className={buttonStyle(editor.isActive('highlight'))}
                    onClick={() => editor.chain().focus().toggleHighlight().run()}>
                    Highlight
                </button>
                <button
                    type='button'
                    className={buttonStyle(editor.isActive('text-align', { align: 'left' }))}
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                    Left
                </button>
                <button
                    type='button'
                    className={buttonStyle(editor.isActive('text-align', { align: 'center' }))}
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                    Center
                </button>
                <button
                    type='button'
                    className={buttonStyle(editor.isActive('text-align', { align: 'right' }))}
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                    Right
                </button>
                
                <button
                    type='button'
                    className={buttonStyle(false)}
                    onClick={() => editor.chain().focus().undo().run()}>
                Undo
                </button>
                <button
                    type='button'
                    className={buttonStyle(false)}
                    onClick={() => editor.chain().focus().redo().run()}>
                   Redo
                </button>
            </div>
            <EditorContent editor={editor} className="prose focus:outline-none min-h-[200px]" />
        </div>
    );
};

export default RichTextEditor;