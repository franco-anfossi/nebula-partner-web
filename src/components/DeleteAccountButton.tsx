"use client";

import { useRouter } from "next/navigation";
// Importa la función deleteUser, aunque actualmente no está funcionando.
// import { deleteUser } from "@/services/user.api";

export default function DeleteAccountButton() {
  const router = useRouter();

  const handleDeleteUser = async () => {
    if (
      confirm(
        "Are you sure you want to delete your account? This action cannot be undone.",
      )
    ) {
      try {
        // Llamada a deleteUser (comentar esta línea mientras la funcionalidad no está activa)
        // await deleteUser();

        // Simula un mensaje para el usuario mientras la funcionalidad no está activa
        alert(
          "This feature is currently not functioning. Account deletion is under maintenance or development.",
        );

        // Redirige al usuario al logout (si deseas mantener esta parte funcional)
        router.push("/api/auth/logout");
      } catch (error) {
        console.error("Failed to delete user:", error);
        alert("There was an error deleting your account.");
      }
    }
  };

  return (
    <button
      onClick={handleDeleteUser}
      className="w-full px-6 py-3 text-sm font-medium rounded-lg bg-red-500 text-white transition-colors hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      Delete Account
    </button>
  );
}
