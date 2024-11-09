"use client";

import { useRouter } from "next/navigation";

export default function BackToHomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="w-full px-6 py-3 text-sm font-medium rounded-lg border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Back to Home
    </button>
  );
}
