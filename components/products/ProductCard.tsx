<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> d97df21dd9c3c0246eb81c74343f1327b8ad49d1
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
<<<<<<< HEAD
      <Image
=======
      <img
>>>>>>> d97df21dd9c3c0246eb81c74343f1327b8ad49d1
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />
<<<<<<< HEAD
=======

>>>>>>> d97df21dd9c3c0246eb81c74343f1327b8ad49d1
      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {name}
        </h3>
<<<<<<< HEAD
        <p className="text-gray-600 mt-2">
          {supplier}
        </p>
        <p className="text-sm text-gray-500">
          {location}
        </p>
=======

        <p className="text-gray-600 mt-2">
          {supplier}
        </p>

        <p className="text-sm text-gray-500">
          {location}
        </p>

>>>>>>> d97df21dd9c3c0246eb81c74343f1327b8ad49d1
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg">
          Get Quote
        </button>
      </div>
    </div>
  );
}