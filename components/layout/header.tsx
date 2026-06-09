import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo  new */}
          <div className="flex items-center">
            
              <Image
                src="/images/vidyalive_logo.webp"
                alt="B2B Portal Logo"
                width={150}
                height={150}
                className="inline-block ml-2"
              />
               
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <input
              type="text"
              placeholder="Search Products, Suppliers..."
              className="w-full border rounded-l-lg px-4 py-2 outline-none"
            />

            <button className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700">
              Search
            </button>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-3">

            <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
              Login
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Register
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}