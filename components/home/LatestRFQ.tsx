const rfqs = [
  {
    id: 1,
    title: "Need Solar Panels",
    quantity: "500 Units",
    location: "Delhi",
    posted: "2 Hours Ago",
  },
  {
    id: 2,
    title: "Industrial Water Pumps",
    quantity: "100 Units",
    location: "Mumbai",
    posted: "5 Hours Ago",
  },
  {
    id: 3,
    title: "Agricultural Sprayers",
    quantity: "200 Units",
    location: "Lucknow",
    posted: "1 Day Ago",
  },
  {
    id: 4,
    title: "CNC Machine Parts",
    quantity: "50 Units",
    location: "Pune",
    posted: "2 Days Ago",
  },
];

export default function LatestRFQ() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold">
              Latest RFQs
            </h2>

            <p className="text-gray-600 mt-2">
              Latest buyer requirements from across India
            </p>
          </div>

          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">
            View All RFQs
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {rfqs.map((rfq) => (
            <div
              key={rfq.id}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">
                {rfq.title}
              </h3>

              <div className="mt-3 space-y-2 text-gray-600">
                <p>
                  Quantity: {rfq.quantity}
                </p>

                <p>
                  Location: {rfq.location}
                </p>

                <p>
                  Posted: {rfq.posted}
                </p>
              </div>

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Send Quote
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}