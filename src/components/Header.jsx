import { Phone, Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3 shadow-md bg-white">
      {/* Phone Number (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-2 font-medium text-green-800">
        <Phone className="w-5 h-5" />
        <span>+91 98765 43210</span>
      </div>

      {/* Logo (always visible, centered on desktop) */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-center flex-1">
        A M R U T A M
      </h1>

      {/* Spacer for balance (desktop only, same width as phone section) */}
      <div className="hidden md:block w-[150px]" />
    </div>
  );
}
