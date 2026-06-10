import ProductCard from "@/components/products/ProductCard";

const products = [
  {
    id: 1,
    name: "Industrial Water Pump",
    image: "/images/products/pump.jpg",
    supplier: "ABC Industries",
    location: "Delhi",
  },
  {
    id: 2,
    name: "Solar Panel",
    image: "/images/products/solar.jpg",
    supplier: "Green Energy",
    location: "Noida",
  },
  {
    id: 3,
    name: "CNC Machine",
    image: "/images/products/cnc.jpg",
    supplier: "Tech Machines",
    location: "Pune",
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-10">
        Products
      </h1>

      <div className="grid lg:grid-cols-4 gap-8">

        {/* Filters */}
        <aside className="lg:col-span-1 border rounded-xl p-5">
          <h2 className="font-semibold text-xl mb-4">
            Filters
          </h2>

          <div className="space-y-3">
            <label className="block">
              <input type="checkbox" /> Electronics
            </label>

            <label className="block">
              <input type="checkbox" /> Machinery
            </label>

            <label className="block">
              <input type="checkbox" /> Agriculture
            </label>
          </div>
        </aside>

        {/* Products */}
        <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}

        </div>

      </div>

    </div>   
  );
}