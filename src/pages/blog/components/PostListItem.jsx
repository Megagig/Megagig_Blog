import Image from '../../../components/Image';
import { Link } from 'react-router-dom';

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      {/* content */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="test" className="text-4xl font-bold text-gray-800">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written By</span>
          <Link className="text-blue-800">Anthony Obi</Link>
          <span>On</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 Days ago</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut
          pariatur nobis optio repudiandae tempora dolores. Dolorem consectetur
          reprehenderit, blanditiis eius aspernatur porro recusandae totam atque
          eos rerum, voluptate distinctio.
        </p>
        <Link className="underline text-blue-800 text-sm">Read more</Link>
      </div>
    </div>
  );
};

export default PostListItem;
