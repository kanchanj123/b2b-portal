const suppliers = [
  {
    id: 1,
    name: "ABC Industries",
    city: "Delhi",
    products: 125,
    logo: "/images/companies/company1.png",
  },
  {
    id: 2,
    name: "Green Energy Pvt Ltd",
    city: "Noida",
    products: 86,
    logo: "/images/companies/company2.png",
  },
  {
    id: 3,
    name: "Tech Machines",
    city: "Pune",
    products: 210,
    logo: "/images/companies/company3.png",
  },
  {
    id: 4,
    name: "Farm Equipments",
    city: "Lucknow",
    products: 74,
    logo: "/images/companies/company4.png",
  },
];

export default function TopSuppliers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold">
              Top Suppliers
            </h2>

            <p className="text-gray-600 mt-2">
              Connect with trusted manufacturers and suppliers
            </p>
          </div>

          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {suppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-white rounded-xl border p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center">
                <img
                  src={supplier.logo}
                  alt={supplier.name}
                  className="w-20 h-20 rounded-full object-cover border"
                />
              </div>

              <div className="text-center mt-4">

                <h3 className="font-bold text-lg">
                  {supplier.name}
                </h3>

                <p className="text-gray-500">
                  {supplier.city}
                </p>

                <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  Verified Supplier
                </span>

                <p className="mt-3 text-sm text-gray-600">
                  {supplier.products} Products
                </p>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  View Profile
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}