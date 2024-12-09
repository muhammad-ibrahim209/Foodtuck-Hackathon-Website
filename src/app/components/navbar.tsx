"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, User, ShoppingCart, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold"
            >
              <span className="text-white">Food</span>
              <span className="text-orange-500">tuck</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-orange-500 hover:text-orange-400 transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-orange-400 transition-colors">
              Menu
            </Link>
            <Link href="/blog" className="text-white hover:text-orange-400 transition-colors">
              Blog
            </Link>
            <Link href="/pages" className="text-white hover:text-orange-400 transition-colors">
              Pages
            </Link>
            <Link href="/about" className="text-white hover:text-orange-400 transition-colors">
              About
            </Link>
            <Link href="/shop" className="text-white hover:text-orange-400 transition-colors">
              Shop
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-orange-400 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="hover:text-orange-400 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="hover:text-orange-400 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-400 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-orange-500 block px-3 py-2 text-base font-medium hover:text-orange-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-white block px-3 py-2 text-base font-medium hover:text-orange-400 transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/blog"
              className="text-white block px-3 py-2 text-base font-medium hover:text-orange-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/pages"
              className="text-white block px-3 py-2 text-base font-medium hover:text-orange-400 transition-colors"
            >
              Pages
            </Link>
            <Link
              href="/about"
              className="text-white block px-3 py-2 text-base font-medium hover:text-orange-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/shop"
              className="text-white block px-3 py-2 text-base font-medium hover:text-orange-400 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-white block px-3 py-2 text-base font-medium hover:text-orange-400 transition-colors"
            >
              Contact
            </Link>
            <div className="flex space-x-4 px-3 py-2">
              <button className="text-white hover:text-orange-400 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-white hover:text-orange-400 transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="text-white hover:text-orange-400 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

