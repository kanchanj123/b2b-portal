const categories = [
  "Electronics",
  "Machinery",
  "Chemicals",
  "Agriculture",
  "Textiles",
  "Construction",
  "Medical",
  "Automobile",
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Popular Categories
          </h2>

          <p className="text-gray-600 mt-3">
            Explore products from top business categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {categories.map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6 text-center cursor-pointer"
            >
              <h3 className="font-semibold text-lg">
                {category}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}