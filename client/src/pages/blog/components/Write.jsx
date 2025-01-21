import 'react-quill-new/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill-new';

// Register the code block format
const Block = Quill.import('blots/block');

class CodeBlock extends Block {
  static create(value) {
    const node = super.create(value);
    node.setAttribute(
      'class',
      'relative bg-gray-800 text-white p-4 rounded-md overflow-auto'
    );

    // Create a copy button
    const button = document.createElement('button');
    button.innerText = 'Copy';
    button.className =
      'absolute top-2 right-2 bg-blue-500 text-white text-xs py-1 px-2 rounded';
    button.onclick = () => {
      navigator.clipboard.writeText(value);
      button.innerText = 'Copied!';
      setTimeout(() => (button.innerText = 'Copy'), 2000); // Reset button text after 2 seconds
    };

    node.appendChild(button);

    return node;
  }

  static formats(node) {
    return {};
  }
}

CodeBlock.blotName = 'code-block';
CodeBlock.tagName = 'pre';
Quill.register(CodeBlock);

const Write = () => {
  // const { isLoaded, isSignedIn } = useUser();

  // if (!isLoaded) {
  //   return (
  //     <div className="flex items-center justify-center h-full">Loading...</div>
  //   );
  // }

  // if (!isSignedIn) {
  //   return (
  //     <div className="flex items-center justify-center h-full">
  //       Sign in to write a blog post
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen flex flex-col p-6 md:p-12 lg:p-24 bg-[#F9FAFB]">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Create a New Post
      </h1>
      <form
        className="bg-white shadow-md rounded-lg p-6 md:p-12 lg:p-24 flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <button className="w-full p-2 shadow-md rounded-xl text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 transition">
          Add A Cover Image
        </button>

        <input
          className="text-2xl font-semibold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="New Blog Post"
          name="title"
        />

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="category"
              className="text-sm text-gray-600 block mb-2"
            >
              Choose a category:
            </label>
            <select
              name="category"
              id="category"
              className="mt-1 p-2 rounded-xl bg-gray-50 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="general">General</option>
              <option value="web-design">Web Design</option>
              <option value="development">Development</option>
              <option value="databases">Databases</option>
              <option value="wordpress">WordPress</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="desc" className="text-sm text-gray-600 block mb-2">
              Short Description:
            </label>
            <textarea
              className="p-4 rounded-xl bg-gray-50 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              name="desc"
              placeholder="A Short Description"
            />
          </div>
        </div>

        <ReactQuill
          theme="snow"
          className="h-64 md:h-96 lg:h-128"
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }, { font: [] }],
              ['bold', 'italic', 'underline', 'strike'],
              ['code-block', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image'],
              ['clean'], // remove formatting button
            ],
          }}
        />

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Write;
