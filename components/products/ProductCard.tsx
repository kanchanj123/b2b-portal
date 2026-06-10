import Image from "next/image";
interface ProductCardProps {
  name: string;
  image: string;
  supplier: string;
  location: string;
}

export default function ProductCard({
  name,
  image,
  supplier,
  location,
}: ProductCardProps) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
      <Image
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {name}
        </h3>
        <p className="text-gray-600 mt-2">
          {supplier}
        </p>
        <p className="text-sm text-gray-500">
          {location}
        </p>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg">
          Get Quote
        </button>
      </div>
    </div>
  );
}