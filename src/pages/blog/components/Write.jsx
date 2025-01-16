import { useUser } from '@clerk/clerk-react';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>You should login</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to write a blog post</div>;
  }
  return (
    <div className="">
      <h1>Create a New Post</h1>
      <form>
        <button>Add A cover Image</button>
        <input type="text" placeholder="New blog Post" />
        <div className="">
          <label htmlFor="">Choose A Category</label>
          <select name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="wordpress">Wordpress</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" placeholder="A Short Description" />
        <ReactQuill theme="snow" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Write;
