export default function CTA() {
  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Grow Your Business?
        </h2>

        <p className="mt-5 text-lg text-blue-100">
          Join thousands of buyers, suppliers, manufacturers and wholesalers
          already growing their business on our platform.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Register as Supplier
          </button>

          <button className="bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600">
            Post Your Requirement
          </button>

        </div>

      </div>
    </section>
  );
}