const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    company: "ABC Industries",
    review:
      "We found reliable suppliers within a few days. The platform helped us reduce procurement time significantly.",
  },
  {
    id: 2,
    name: "Amit Verma",
    company: "Tech Solutions",
    review:
      "The quality of buyer inquiries is excellent. We generated several new business opportunities.",
  },
  {
    id: 3,
    name: "Priya Gupta",
    company: "Green Energy",
    review:
      "A simple and effective marketplace to connect with verified manufacturers and buyers.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by businesses across India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-sm border"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.company}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
