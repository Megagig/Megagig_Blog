import { Link } from 'react-router-dom';
import Image from '../components/Image';
import PostMenuActions from '../pages/Home/components/PostMenuActions';
import Search from '../components/Search';

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8 lg:p-12">
      {/* details */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm">
            <span>Written By</span>
            <Link className="text-blue-800">Anthony Obi</Link>
            <span>On</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 Days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
            consequuntur reprehenderit ipsam ratione iure expedita vitae, alias
            beatae magnam esse aliquam ipsum libero aspernatur deserunt a, fuga
            fugiat enim est.
          </p>
        </div>
        <div className="lg:w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* contents */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nam
            id, veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates.Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Vero nam id,
            veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nam
            id, veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates.Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Vero nam id,
            veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nam
            id, veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Vero nam id,
            veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nam
            id, veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates.Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Vero nam id,
            veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nam
            id, veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates.Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Vero nam id,
            veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nam
            id, veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Vero nam id,
            veniam obcaecati tempore sunt blanditiis labore autem ullam sit
            quaerat officia iste, aspernatur quo exercitationem distinctio optio
            consequatur illum. Quisquam, voluptates. Quisquam, voluptates.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800"></Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Wordpress
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
