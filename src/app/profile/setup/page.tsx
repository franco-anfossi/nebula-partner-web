"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/services/user.api";
import { User } from "@/types/user.types";

export default function ProfileSetup() {
  const router = useRouter();
  const [formData, setFormData] = useState<User>({
    first_name: "",
    last_name: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUser(formData);
      alert("Profile created successfully!");
      router.push("/profile");
    } catch (error) {
      console.error("Failed to create profile:", error);
      alert("Error creating profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md w-full space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
          Complete Your Profile
        </h1>

        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          required
        />

        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          required
        />

        <input
          type="text"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          placeholder="Phone (optional)"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        />

        <button
          type="submit"
          className="w-full px-6 py-3 text-sm font-medium rounded-lg bg-blue-500 text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
}
