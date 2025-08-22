import Footer from "./Footer";
import TopBanner from "./Banner";
import Navbar from "./NavBar";
import Header from "./Header";
import { Link } from "react-router-dom";
import SummerCollection from "./SummerCollection";

export default function HomePage() {
  return (
    <div className="bg-[#fff7e2] text-green-900 min-h-screen">
      {/* Top Banner */}
      <TopBanner />

      {/* Top Header */}
      <Header />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[80vh] px-6 text-center overflow-hidden">
        {/* Static Background Image */}
        <img
          src="https://t4.ftcdn.net/jpg/02/42/02/73/240_F_242027349_P2eKu6v7izNR4iInAcieWmOAce7EIHOY.jpg"
          alt="Ayurvedic Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay for better visibility */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text Content */}
        <div className="relative z-10 text-gray-100 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Amrutam
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover the healing power of Ayurveda. Find doctors, book lab
            tests, explore Ayurvedic products, and connect with the community.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-8 py-12 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10 text-green-900">
          Our Best Seller Products
        </h2>

        {/* SummerCollection component handles backend fetching */}
        <SummerCollection />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
