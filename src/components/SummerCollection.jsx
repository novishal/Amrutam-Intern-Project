import { useEffect, useState } from "react";
import { Star, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function SummerCollection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="w-full py-8 sm:py-12 bg-[#fff7e2] flex justify-center">
      <div className="w-full px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-900 mb-6 sm:mb-8 text-left">
          Summer Collection
        </h2>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
            {products.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <div className="rounded-2xl flex flex-col items-center h-full w-full bg-white shadow-sm hover:shadow-md transition cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-t-xl w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                  />
                  <div className="p-4 flex flex-col items-center text-center">
                    <h3 className="mt-2 text-lg sm:text-xl font-semibold text-green-900">
                      {product.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {product.quantity || "200ml"}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-green-800">
                      ₹{product.price}
                    </p>

                    {/* Rating Stars */}
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < (product.rating || 4)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
