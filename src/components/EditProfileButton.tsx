"use client";

import { useRouter } from "next/navigation";

export default function EditProfileButton() {
  const router = useRouter();

  const handleEditProfileClick = () => {
    router.push("/profile/edit");
  };

  return (
    <button
      onClick={handleEditProfileClick}
      className="w-full px-6 py-3 text-sm font-medium rounded-lg bg-blue-500 text-white transition-colors duration-200 ease-in-out hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
      aria-label="Edit Profile"
    >
      Edit Profile
    </button>
  );
}
