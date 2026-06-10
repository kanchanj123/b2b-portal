const products = [
  {
    id: 1,
    name: "Industrial Water Pump",
    image: "/images/products/pump.jpg",
    company: "ABC Industries",
    location: "Delhi",
  },
  {
    id: 2,
    name: "Solar Panel",
    image: "/images/products/solar.jpg",
    company: "Green Energy",
    location: "Noida",
  },
  {
    id: 3,
    name: "CNC Machine",
    image: "/images/products/cnc.jpg",
    company: "Tech Machines",
    location: "Pune",
  },
  {
    id: 4,
    name: "Agriculture Sprayer",
    image: "/images/products/sprayer.jpg",
    company: "Farm Equipments",
    location: "Lucknow",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold">
              Featured Products
            </h2>

            <p className="text-gray-600 mt-2">
              Explore trending products from verified suppliers
            </p>
          </div>

          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">

                <h3 className="font-semibold text-lg">
                  {product.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {product.company}
                </p>

                <p className="text-sm text-gray-500">
                  {product.location}
                </p>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Get Quote
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}