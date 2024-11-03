// src/components/Footer.js
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-extrabold mb-4">
              Ray Of Hope Foundation
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Empowering communities through education, skills training, and
              support programs.
            </p>
            <p className="text-gray-500 text-xs italic">
              Join us in making a difference in lives.
            </p>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "Education",
                "Skills Training",
                "Ration Program",
                "Employment",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-indigo-300 transition duration-300 text-sm flex items-center space-x-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h8M8 16h8M8 8h8"
                      />
                    </svg>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">
              Support Us
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/donate"
                  className="text-gray-400 hover:text-indigo-300 transition duration-300 flex items-center space-x-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v8m0 0H9m3 0h3"
                    />
                  </svg>
                  <span>Donate</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/volunteer"
                  className="text-gray-400 hover:text-indigo-300 transition duration-300 flex items-center space-x-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v8m0 0H9m3 0h3"
                    />
                  </svg>
                  <span>Volunteer</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-indigo-300 transition duration-300 flex items-center space-x-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v8m0 0H9m3 0h3"
                    />
                  </svg>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-indigo-300 transition duration-300 flex items-center space-x-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v8m0 0H9m3 0h3"
                    />
                  </svg>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>contact@RayOfHope.org</li>
              <li>+92 (370) 917-1729</li>
              <li>123 Ray Of Hope Street, City</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Ray Of Hope Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
