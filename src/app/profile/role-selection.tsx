"use client";

import { useRouter } from "next/navigation";
import api from "@/services/api";

export default function RoleSelectionPage() {
  const router = useRouter();

  const handleRoleSelection = async (role: "company" | "individual") => {
    try {
      // Enviar selección de rol a la API para guardar el estado del usuario
      await api.post("/profile/setup/role-selection", { role });

      // Redirigir al perfil o a otra página según el rol
      router.push(role === "company" ? "/profile/company-setup" : "/profile");
    } catch (error) {
      console.error("Error selecting role:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Choose Your Role</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Would you like to create a company or continue as an individual?
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => handleRoleSelection("company")}
            className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Create a Company
          </button>

          <button
            onClick={() => handleRoleSelection("individual")}
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Continue as Individual
          </button>
        </div>
      </div>
    </div>
  );
}
