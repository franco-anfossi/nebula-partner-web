"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import api from "@/services/api";

export default function ProfilePage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/api/auth/login");
    }
  }, [user, router]);

  if (!user) return null;

  const handleDeleteUser = async () => {
    if (
      confirm(
        "Are you sure you want to delete your account? This action cannot be undone.",
      )
    ) {
      try {
        await api.delete(`/profile/delete/${user.sub}`); // Cambia esto a la ruta de eliminación de usuario
        alert("Your account has been deleted.");
        router.push("/api/auth/logout"); // Redirige al logout después de eliminar la cuenta
      } catch (error) {
        console.error("Failed to delete user:", error);
        alert("There was an error deleting your account.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <main className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 flex flex-col items-center max-w-md w-full text-center space-y-6">
        <Image
          src={user.picture || "/placeholder-profile.png"}
          alt={user.name || "User Avatar"}
          width={140}
          height={140}
          className="rounded-full shadow-md border-4 border-blue-500 dark:border-blue-400"
        />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          {user.name}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{user.email}</p>

        <div className="mt-4 flex flex-col gap-2 w-full">
          <button
            onClick={() => router.push("/profile/edit")}
            className="w-full px-6 py-3 text-sm font-medium rounded-lg bg-blue-500 text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Edit Profile
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-full px-6 py-3 text-sm font-medium rounded-lg border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Back to Home
          </button>
          <button
            onClick={handleDeleteUser}
            className="w-full px-6 py-3 text-sm font-medium rounded-lg bg-red-500 text-white transition-colors hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 mt-4"
          >
            Delete Account
          </button>
        </div>
      </main>
    </div>
  );
}
