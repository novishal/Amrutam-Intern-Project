import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Wallet, ShoppingCart, Bell, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fff7e2] text-lg px-4 sm:px-6 md:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium mx-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "hover:text-green-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/find-doctors"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "hover:text-green-600"
              }
            >
              Find Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lab-tests"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "hover:text-green-600"
              }
            >
              Lab Tests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "hover:text-green-600"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forum"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "hover:text-green-600"
              }
            >
              Forum
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "hover:text-green-600"
              }
            >
              About us
            </NavLink>
          </li>
        </ul>

        {/* Icons (always visible) */}
        <div className="flex space-x-4 sm:space-x-6 text-green-800">
          <Wallet className="w-6 h-6 cursor-pointer hover:text-green-600" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-green-600" />
          <Bell className="w-6 h-6 cursor-pointer hover:text-green-600" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-4 font-medium md:hidden">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "hover:text-green-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/find-doctors"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "hover:text-green-600"
              }
            >
              Find Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lab-tests"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "hover:text-green-600"
              }
            >
              Lab Tests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "hover:text-green-600"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forum"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "hover:text-green-600"
              }
            >
              Forum
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "hover:text-green-600"
              }
            >
              About us
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
