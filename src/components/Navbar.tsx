"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Navbar() {
  const { user, isLoading } = useUser();

  return (
    <nav className="w-full bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Nebula Partner
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/features" className="text-gray-700 hover:text-gray-900">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Botones de autenticación */}
        <div className="flex items-center space-x-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : user ? (
            <>
              <Link
                href="/profile"
                className="text-gray-700 hover:text-gray-900"
              >
                Profile
              </Link>
              <Link
                href="/api/auth/logout"
                className="text-gray-700 hover:text-gray-900"
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              href="/api/auth/login"
              className="text-gray-700 hover:text-gray-900"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
