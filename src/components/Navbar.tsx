"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Navbar() {
  const { user, isLoading } = useUser();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-gray-200"
        >
          Nebula Partner
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/features"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
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
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Profile
              </Link>
              <Link
                href="/api/auth/logout"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              href="/api/auth/login"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
