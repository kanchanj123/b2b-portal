const blogs = [
  {
    id: 1,
    title: "Top Manufacturing Trends in India",
    image: "/images/blogs/blog1.jpg",
    date: "10 June 2026",
  },
  {
    id: 2,
    title: "How to Choose Reliable Suppliers",
    image: "/images/blogs/blog2.jpg",
    date: "08 June 2026",
  },
  {
    id: 3,
    title: "Benefits of B2B Marketplaces",
    image: "/images/blogs/blog3.jpg",
    date: "05 June 2026",
  },
];

export default function LatestBlogs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold">
              Industry Insights
            </h2>

            <p className="text-gray-600 mt-2">
              Latest news, trends and business guides
            </p>
          </div>

          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">
            View All Blogs
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <p className="text-sm text-gray-500">
                  {blog.date}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {blog.title}
                </h3>

                <button className="mt-4 text-blue-600 font-medium">
                  Read More →
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}