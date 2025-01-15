import { Link } from 'react-router-dom';
import Image from '../../../components/Image';

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />
        {/* Details */}
        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
          <h1 className="font-semibold">02.</h1>
          <Link className="text-blue-800">Web Design</Link>
          <span className="text-gray-500 text-sm">2 Days ago</span>
        </div>
        {/* Title */}
        <Link
          to="test"
          className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
        </Link>
      </div>
      {/* Other */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* image */}
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* Details and Title */}
          <div className="w-2/3">
            {/* details  */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">3 Days ago</span>
            </div>
            {/* title */}
            <Link
              to="test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* image */}
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* Details and Title */}
          <div className="w-2/3">
            {/* details  */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">3 Days ago</span>
            </div>
            {/* title */}
            <Link
              to="test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* Fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* image */}
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* Details and Title */}
          <div className="w-2/3">
            {/* details  */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">3 Days ago</span>
            </div>
            {/* title */}
            <Link
              to="test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
