export default function Navbar() {
  return (
    <nav className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4">

        <ul className="flex gap-8 h-12 items-center text-sm font-medium">

          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/products">Products</a>
          </li>

          <li>
            <a href="/categories">Categories</a>
          </li>

          <li>
            <a href="/companies">Suppliers</a>
          </li>

          <li>
            <a href="/rfq">Post RFQ</a>
          </li>

          <li>
            <a href="/membership">Membership</a>
          </li>

        </ul>

      </div>
    </nav>
  );
}