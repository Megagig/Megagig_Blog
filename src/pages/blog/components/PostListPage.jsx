import { useState } from 'react';
import SideMenu from '../../../components/SideMenu';
import PostList from './PostList';

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-50">
      <h1 className="mb-8 text-3xl font-semibold text-gray-800">
        Development Blog
      </h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-full mb-4 md:hidden transition duration-200 hover:bg-blue-700"
      >
        {open ? 'Close' : 'Filter or Search'}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between items-start">
        <div className="flex-1">
          <PostList />
        </div>
        <div className={`md:w-1/4 ${open ? 'block' : 'hidden'} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
