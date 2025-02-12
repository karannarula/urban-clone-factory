
const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Essential Home Maintenance Tips",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      excerpt: "Keep your home in top condition with these maintenance tips.",
      date: "Mar 15, 2024",
    },
    {
      id: 2,
      title: "Choosing the Right Service Provider",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      excerpt: "How to select the best professional for your needs.",
      date: "Mar 10, 2024",
    },
    {
      id: 3,
      title: "Home Improvement on a Budget",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5",
      excerpt: "Smart ways to upgrade your home without breaking the bank.",
      date: "Mar 5, 2024",
    },
  ];

  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Latest Home Services News and Articles</h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Stay updated with the latest trends and tips in home maintenance
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover-lift fade-in">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-secondary mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
