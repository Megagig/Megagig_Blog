//code the Comment component here
import Image from '../../../components/Image';

const Comment = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-xl">
      <div className="flex items-center gap-4">
        <Image
          src="profile.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium"> Anthony Obi</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          facere vitae optio atque fuga nisi officiis possimus magni sunt
          dolorum pariatur adipisci fugit beatae, praesentium dolor excepturi
          earum totam. Aspernatur?
        </p>
      </div>
    </div>
  );
};

export default Comment;
