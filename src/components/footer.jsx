import MaxWidthWrapper from "../components/max-width-wrapper";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Anonymous Gallery
            </h3>
            <p className="text-gray-400">
              The simplest way to share images without compromising your
              privacy. No tracking. No names. Just freedom.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-400 hover:text-white transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-xl"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
            <p className="text-gray-400 mt-4">contact@anonymousgallery.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Anonymous Gallery. All rights reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
