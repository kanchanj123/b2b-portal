const stats = [
  {
    number: "50,000+",
    title: "Verified Suppliers",
  },
  {
    number: "100,000+",
    title: "Products Listed",
  },
  {
    number: "25,000+",
    title: "Active Buyers",
  },
  {
    number: "150,000+",
    title: "RFQs Generated",
  },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Trusted By Businesses Across India
          </h2>

          <p className="mt-4 text-blue-100">
            Growing every day with buyers and suppliers nationwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-5xl font-bold">
                {stat.number}
              </h3>

              <p className="mt-3 text-lg">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}