import { useQuery } from '@tanstack/react-query';
import PostListItem from './PostListItem';
import axiosInstance from '../../../api/axiosInstance';
// import axios from 'axios';

const fetchPosts = async () => {
  const response = await axiosInstance.get('/blogs');
  return response.data;
};

const PostList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  console.log(data);
  return (
    <div className="flex flex-col gap-12 mb-8">
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  );
};

export default PostList;
