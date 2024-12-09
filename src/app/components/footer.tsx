import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">

      {/* Support Section */}
      <div className="container mx-auto px-4 py-6 border-b border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-0 text-center md:text-left">
            <span className="text-orange-500">Still</span> You Need Our Support ?
          </h3>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors duration-300">
            Contact Us Today
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400 mb-4">
              Fresh food and tender breasts chicken, dying on Discounts for dependabledeals, and protectings though and important to high.
            </p>
            <div className="bg-gray-900 p-4 rounded">
              <h5 className="text-orange-500 font-semibold mb-2">Opening Hours</h5>
              <p className="text-sm">Mon - Sat: 8:00 - 17:00</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {['About', 'News', 'Partners', 'Team', 'Menu', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="hover:text-orange-500 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Help?</h4>
            <ul className="space-y-2">
              {['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="hover:text-orange-500 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Post */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Recent Post</h4>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4">

                  <div className="w-16 h-16 bg-[url('/images/footer-img.png')] rounded" />
                  <div>
                    <Link 
                    
                      href="#" 
                      className="text-sm hover:text-orange-500 transition-colors duration-200"
                    >
                      Is fastfood good for your body?
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">October 14, 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0 text-center md:text-left">
              Copyright © 2024 by Muhammad Ibrahim . All Rights Reserved.
            </p>
            <div className="flex space-x-4">
            <Link
                  href="https://www.facebook.com/"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://www.youtube.com/"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="https://pk.linkedin.com/"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

