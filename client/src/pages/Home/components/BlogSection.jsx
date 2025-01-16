const blogPosts = [
  {
    title: 'The Future of Web Development in 2024',
    excerpt: 'Exploring upcoming trends and technologies in web development',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    date: 'March 15, 2024',
    category: 'Web Development',
  },
  {
    title: 'Mastering React Performance',
    excerpt: 'Tips and tricks for optimizing your React applications',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd',
    date: 'March 10, 2024',
    category: 'React',
  },
  {
    title: 'Building Scalable Backend Systems',
    excerpt: 'Best practices for creating robust backend architectures',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    date: 'March 5, 2024',
    category: 'Backend',
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Blog Posts
          </h2>
          <p className="text-xl text-gray-600">
            Insights and tutorials from my experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
