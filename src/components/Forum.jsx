import Navbar from "./NavBar";
import TopBanner from "./Banner";
import Header from "./Header";
import StoreSection from "./StoreSection";
import BodyPartsSection from "./BodyParts";
import { useState } from "react";
import { Star, MessageCircle } from "lucide-react";
import SummerCollection from "./SummerCollection";
import MeetOurExperts from "./Doctors";
import DownloadAppSection from "./AppSection";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Forum() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="bg-[#fff7e2] text-green-900 min-h-screen">
      {/* Top Banner */}
      <TopBanner />
      {/* Top Header */}
      <Header />
      {/* Navigation */}
      <Navbar />
      {/* Store Section */}
      <StoreSection />
      {/* Body Parts Section */}
      <BodyPartsSection
        onSelectConcern={(concern) => console.log("Selected concern:", concern)}
      />

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mt-6 px-4">
        {/* Left Side - Product Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://amrutam.co.in/cdn/shop/products/Kuntal-Care-Hair-Spa-Re-shot-1-scaled_7f929764-2411-431f-ba16-0cc8f9a761dd.jpg?v=1716801347&width=700"
            alt="Product"
            className="w-full max-w-sm md:max-w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
          {/* Product Name and Rating */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-snug">
              Amrutam Kuntal Care Hair Spa | Do-It-Yourself Hair Treatment
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-500 text-xs sm:text-sm">
                (123 Reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-green-800">
            {" "}
            ₹ 649{" "}
          </div>

          {/* Quantity Options */}
          <div className="flex flex-col gap-2 flex-wrap">
            <div className="flex gap-4">
              <button className="px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed">
                200ml
              </button>
              <button className="px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed">
                100ml
              </button>
              <button className="px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed">
                Pack of 3
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-stretch gap-3 mt-2 w-full">
              {/* Quantity Selector */}
              <div className="flex items-center border rounded-lg overflow-hidden w-[150px] sm:w-[180px]">
                {/* Minus */}
                <button
                  className="flex-1 py-2 text-xl font-semibold bg-gray-100 hover:bg-gray-200"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </button>

                {/* Number */}
                <span className="w-12 text-center text-lg font-medium">
                  {quantity}
                </span>

                {/* Plus */}
                <button
                  className="flex-1 py-2 text-xl font-semibold bg-gray-100 hover:bg-gray-200"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button className="w-full md:flex-1 px-6 py-3 text-lg font-semibold bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Product Description</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Amrutam Kuntal Care Hair Spa is a rejuvenating Ayurvedic treatment
              designed to nourish your hair from root to tip. Infused with
              natural herbs and essential oils, it strengthens hair follicles,
              reduces dryness, and restores natural shine.
              <br />
              Experience the goodness of Ayurveda with this DIY hair spa
              treatment that revitalizes your hair and scalp.
            </p>
          </div>

          {/* Product Highlights */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Product Highlights</h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                "Helps with dry and fizzy hair",
                "Relaxes the scalp",
                "Makes the hair smooth and shiny",
                "Improves Hair Health",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border border-green-700 text-green-700 rounded-2xl px-6 py-4"
                >
                  <MessageCircle className="w-7 h-14" />
                  <span className="text-lg font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Ingredients */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold">Key Ingredients</h2>
              <button className="text-green-700 text-sm font-medium hover:underline">
                View All Ingredients
              </button>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              Each ingredient is carefully chosen from Ayurvedic traditions to
              restore your hair’s natural health and vitality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Amla",
                  img: "data:image/jpeg;base64,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",
                  desc: "Rich in Vitamin C, Amla strengthens hair roots and prevents premature graying.",
                },
                {
                  name: "Bhringraj",
                  img: "data:image/jpeg;base64,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",
                  desc: "Known as the 'King of Herbs' for hair, Bhringraj promotes growth and reduces hair fall.",
                },
                {
                  name: "Shikakai",
                  img: "data:image/jpeg;base64,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",
                  desc: "A natural cleanser that adds shine and softness while keeping scalp healthy.",
                },
              ].map((ing, i) => (
                <Link key={i} to={`/ingredient/${ing.name}`}>
                  <div className="flex items-start gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                    <img
                      src={ing.img}
                      alt={ing.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-green-700">
                        {ing.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {ing.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* How to Use */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">How to Use</h2>
            <p className="text-xl text-gray-700 bg-green-50 shadow-md leading-relaxed mb-4 p-4 rounded-lg">
              Mix one or two tablespoons of Herbal Care Malt with milk or
              100-200ml warm water and then consume twice a day or consult our
              Ayurvedic Expert to find the right Ayurvedic recipe for you.
            </p>
          </div>

          {/* General Instruction */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">General Instruction</h2>
            <p className="text-xl text-gray-700 bg-green-50 shadow-md leading-relaxed mb-4 p-4 rounded-lg">
              Store in a cool and dry place away from direct sunlight. Not
              advisable for diabetic patients.
            </p>
          </div>

          {/* Commonly Asked Questions */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">
              Commonly Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How often should I use this hair spa?",
                  a: "You can use it 2–3 times a week depending on your hair condition. For best results, follow the recommended usage.",
                },
                {
                  q: "Is this suitable for all hair types?",
                  a: "Yes, it works well for all hair types including dry, oily, and normal scalp.",
                },
                {
                  q: "Can I use it if I have colored hair?",
                  a: "Absolutely! The Ayurvedic herbs nourish your hair without affecting hair color treatments.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-green-50 border border-green-200"
                >
                  <h3 className="text-lg font-semibold text-green-700">
                    Q: {item.q}
                  </h3>
                  <p className="text-gray-700 mt-2">{item.a}</p>
                </div>
              ))}
            </div>
            {/*  */}
            {/* Button to Full Q/A Portal */}
            <div className="mt-4 flex justify-center">
              <a
                href="/forum/qa"
                className="px-6 py-3 bg-white text-green-500 text-lg font-semibold rounded-lg hover:bg-green-700 hover:text-white transition"
              >
                Explore All Questions &gt;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews & Ratings Section */}
      <div className="mt-8">
        <div className="p-6 rounded-2xl shadow-md bg-white">
          <div className="flex justify-between items-center mb-6">
            {/* Left: Average Rating */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Customer Reviews
              </h2>
              <p className="text-2xl text-yellow-600 font-semibold mt-1">
                4.5 / 5 ⭐
              </p>
              <p className="text-base text-gray-600">Based on 120 reviews</p>
            </div>

            {/* Right: Add Review */}
            <div className="text-right">
              <button className="bg-white text-green-500 px-4 py-2 rounded-lg shadow-md hover:bg-green-700 hover:text-white mr-2">
                See more Reviews
              </button>
              <button className="bg-white text-green-500 px-4 py-2 rounded-lg shadow-md hover:bg-green-700 hover:text-white">
                Write a Review
              </button>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-50 shadow-sm">
              <p className="text-gray-800 font-semibold">
                ⭐️⭐️⭐️⭐️⭐️ - Riya Sharma
              </p>
              <p className="text-gray-700 mt-1">
                Absolutely loved this product! My hair feels softer and
                healthier after just two uses.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 shadow-sm">
              <p className="text-gray-800 font-semibold">
                ⭐️⭐️⭐️⭐️ - Amit Verma
              </p>
              <p className="text-gray-700 mt-1">
                Good product with natural ingredients. Helped reduce dryness but
                took some time to show results.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 shadow-sm">
              <p className="text-gray-800 font-semibold">
                ⭐️⭐️⭐️⭐️⭐️ - Sneha Patel
              </p>
              <p className="text-gray-700 mt-1">
                Worth the price! I will definitely repurchase. Highly recommend
                to anyone with frizzy hair.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* People has also bought */}
      <SummerCollection />
      {/* Meet Our Experts   */}
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Experts</h2>
      <MeetOurExperts />
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-white text-green-500 text-lg font-semibold rounded-lg hover:bg-green-700 hover:text-white transition">
          Find More Experts &gt;
        </button>
      </div>
      {/* App Section */}
      <DownloadAppSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
