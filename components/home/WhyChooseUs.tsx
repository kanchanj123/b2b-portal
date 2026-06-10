const features = [
  {
    title: "Verified Suppliers",
    description: "Connect with trusted and verified suppliers across India.",
  },
  {
    title: "Genuine Buyer Leads",
    description: "Receive high-quality business inquiries and RFQs.",
  },
  {
    title: "Secure Communication",
    description: "Communicate directly with buyers and suppliers securely.",
  },
  {
    title: "Fast RFQ Process",
    description: "Submit requirements and receive quotations quickly.",
  },
  {
    title: "Nationwide Network",
    description: "Expand your business reach across multiple cities and states.",
  },
  {
    title: "Business Growth",
    description: "Increase visibility, sales, and business opportunities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>

          <p className="text-gray-600 mt-3">
            Everything you need to connect buyers and suppliers efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl mb-4">
                ✓
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}