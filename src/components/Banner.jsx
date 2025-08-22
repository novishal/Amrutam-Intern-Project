import { Phone } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="hidden lg:flex w-full bg-gray-900 text-gray-200 relative flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 py-4 lg:py-5">
      {/* Center Message */}
      <p className="text-lg sm:text-xl lg:text-2xl font-medium tracking-wide text-center flex-1">
        Your first 5 minutes instant call is free
      </p>

      {/* Button */}
      <button className="mt-3 lg:mt-0 lg:absolute lg:right-8 flex items-center gap-2 sm:gap-3 bg-green-800 text-white font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-2xl shadow-lg hover:bg-green-700 transition text-base sm:text-lg">
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        Try Instant Free Call Now
      </button>
    </div>
  );
}
