import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Skills Training", href: "/skills-training" },
  { name: "Ration Program", href: "/ration-program" },
  { name: "Empowerment Programs", href: "/employment" },
  { name: "Community", href: "/community" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition duration-300 ease-in-out"
            >
              Ray Of Hope
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === item.href
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/donate"
              className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
            >
              Donate Now
            </Link>

            {/* Profile Menu */}
            <div className="relative hidden sm:block">
              <button
                onClick={toggleProfileMenu}
                className="flex items-center rounded-full text-gray-500 hover:text-indigo-600 transition-colors duration-300 ease-in-out"
              >
                <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 z-20 mt-2 w-52 rounded-xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 ease-out transform origin-top-right scale-95">
                  <Link
                    to="/signin"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-t-xl transition-colors duration-200 ease-in-out"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-b-xl transition-colors duration-200 ease-in-out"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white mb-8 pb-4">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  location.pathname === item.href
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-4 justify-center items-center">
            <Link
              to="/signin"
              className="border border-gray-300 text-gray-700 bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-full px-6 py-2 text-base font-semibold shadow-lg"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="border border-gray-300 text-gray-700 bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-full px-6 py-2 text-base font-semibold shadow-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
