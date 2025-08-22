import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section - Get in Touch */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
          <p className="mb-2">📧 Email: support@amrutum.com</p>
          <p className="mb-2">📞 Phone: +91 98765 43210</p>
          <p className="mb-4">🏠 Address:Amrutam Pharmaceuticals Pvt Ltd, Chitragupt Ganj,Nai Sadak,Lashkar,Gwalior - 4740001</p>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600">About Us</a></li>
            <li><a href="#" className="hover:text-green-600">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-600">International Delivery</a></li>
            <li><a href="#" className="hover:text-green-600">Shipping</a></li>
            <li><a href="#" className="hover:text-green-600">Return & Cancellation Policy</a></li>
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold mb-4">Join Amrutum Family</h3>
          <p className="mb-4">Subscribe to our newsletter today!</p>
          <div className="flex items-center md:justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-300 pt-4">
        © 2025 Amrutum Ayurvedic. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
