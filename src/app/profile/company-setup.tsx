"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";

export default function CompanySetupPage() {
  const [form, setForm] = useState({
    companyName: "",
    industry: "",
    employeeCount: "",
    website: "",
    description: "",
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Enviar los datos de la empresa a la API
      await api.post("/profile/setup/company", form);

      // Marcar el setup como completado en el almacenamiento local
      localStorage.setItem("profileSetupCompleted", "true");

      // Redirigir al perfil
      router.push("/profile");
    } catch (error) {
      console.error("Error setting up company profile:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Setup Your Company Profile
        </h1>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Company Name</span>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Industry</span>
          <input
            type="text"
            name="industry"
            value={form.industry}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">
            Employee Count
          </span>
          <input
            type="number"
            name="employeeCount"
            value={form.employeeCount}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Website</span>
          <input
            type="url"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Description</span>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Save and Continue
        </button>
      </form>
    </div>
  );
}
