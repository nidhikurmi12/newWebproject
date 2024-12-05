import React from 'react';
import { Facebook, Twitter, Instagram, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold gradient-text">Random</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Transforming the future of work through innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-900 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-900 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-900 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
             
            </ul>
          </div>

          {/* Social Media and Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-900 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-900 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-900 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-900 dark:text-gray-400">Contact us:</p>
              <a
                href="#"
                className="text-purple-500 hover:text-purple-300 dark:text-purple-400 dark:hover:text-purple-300"
              >
                contact@Random.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Random. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
