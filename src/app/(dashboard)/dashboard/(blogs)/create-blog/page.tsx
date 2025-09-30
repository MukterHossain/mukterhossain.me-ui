import CreateBlogForm from '@/components/modules/Blogs/CreateBlogForm';
import React from 'react';

const CreateBlog = () => {
    return (
        <div className='w-full'>
            <h1>Create Blog</h1>
            <CreateBlogForm></CreateBlogForm>
        </div>
    );
};

export default CreateBlog;