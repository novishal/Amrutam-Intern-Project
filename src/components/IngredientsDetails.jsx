import { useParams } from "react-router-dom";
import { CheckCircle, MapPin, Star } from "lucide-react";
import Header from "./Header";
import NavBar from "./NavBar";
import StoreSection from "./StoreSection";
import DownloadAppSection from "./AppSection";
import Footer from "./Footer";

const ingredientsData = {
  Amla: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0sp-ycuTDrdswJgg3rZP2PNVjA4f1jR2_g&s",
    desc: "Rich in Vitamin C, Amla strengthens hair roots and prevents premature graying. It has been used in Ayurvedic practices for centuries to promote overall scalp health and natural shine.",
    benefits: [
      "Strengthens hair follicles",
      "Boosts scalp circulation",
      "Prevents premature greying",
    ],
    why: [
      "100% Natural & Organic",
      "Backed by Ayurvedic Tradition",
      "Trusted by Thousands of Users",
    ],
    location: "Sourced from organic farms in India",
  },
  Bhringraj: {
    img: "data:image/jpeg;base64,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",
    desc: "Known as the 'King of Herbs' for hair, Bhringraj promotes growth and reduces hair fall.",
    benefits: ["Promotes hair growth", "Reduces dandruff", "Nourishes the scalp"],
    why: [
      "Clinically Proven Benefits",
      "Herbal, Chemical-free",
      "Supports Healthy Hair Cycle",
    ],
    location: "Harvested in rural regions of Madhya Pradesh",
  },
  Shikakai: {
    img: "data:image/jpeg;base64,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",
    desc: "A natural cleanser that adds shine and softness while keeping scalp healthy.",
    benefits: ["Acts as natural shampoo", "Adds shine & softness", "Maintains scalp pH balance"],
    why: [
      "Gentle on Scalp",
      "Eco-friendly & Sustainable",
      "Traditionally Recommended",
    ],
    location: "Collected from forest-rich areas of South India",
  },
};

export default function IngredientsDetails() {
  const { name } = useParams();
  const ingredient = ingredientsData[name];

  if (!ingredient) return <h2 className="text-center mt-10">Ingredient not found</h2>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header + Nav */}
      <Header />
      <NavBar />
      <StoreSection />

      {/* Ingredient Section */}
      <div className="max-w-6xl mx-auto p-8 mt-6 bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-8">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={ingredient.img}
            alt={name}
            className="w-72 h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 space-y-8">
          {/* Title + Description */}
          <div>
            <h1 className="text-4xl font-bold text-green-800 mb-4">{name}</h1>
            <p className="text-lg text-gray-700">{ingredient.desc}</p>
          </div>

          {/* Why this product */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Why Choose {name}?</h2>
            <ul className="space-y-3">
              {ingredient.why.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Benefits</h2>
            <div className="flex flex-wrap gap-3">
              {ingredient.benefits.map((b, i) => (
                <div
                  key={i}
                  className="px-4 py-2 border rounded-full text-gray-700 bg-gray-50 shadow-sm"
                >
                  <CheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Location */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Geographic Origin</h2>
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-red-500" />
              {ingredient.location}
            </p>
          </div>
        </div>
      </div>
      {/*App Section  */}
      <DownloadAppSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
