"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserUpdate } from "@/types/user.types";
import { updateUser, getUser } from "@/services/user.api";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function EditProfileForm() {
  const { user } = useUser();
  const router = useRouter();
  const [initialData, setInitialData] = useState<UserUpdate | null>(null);
  const [formData, setFormData] = useState<UserUpdate>({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    nickname: "",
    password: "",
  });

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      getUser()
        .then((data) => {
          if (data) {
            const userData = {
              ...data,
              email: user.email || "",
              nickname: user.nickname || "",
              password: "",
            };
            setInitialData(userData);
            setFormData(userData);
          } else {
            router.push("/profile/setup");
          }
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
          alert("Could not load user data.");
        });
    }
  }, [user, router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!initialData) {
      alert("Data is still loading. Please wait.");
      return;
    }

    const updatedData: Partial<UserUpdate> = {};
    for (const key in formData) {
      if (
        formData[key as keyof UserUpdate] !==
        initialData[key as keyof UserUpdate]
      ) {
        updatedData[key as keyof UserUpdate] =
          formData[key as keyof UserUpdate];
      }
    }

    if (Object.keys(updatedData).length === 0) {
      alert("No changes were made.");
      return;
    }

    try {
      await updateUser(updatedData);
      setInitialData({ ...initialData, ...updatedData });
      alert("Profile updated successfully!");
      router.push("/profile");
    } catch (error) {
      console.error("Failed to update user data:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 max-w-lg w-full"
    >
      {/* First Name */}
      <div>
        <label
          htmlFor="first_name"
          className="block text-sm font-medium text-white"
        >
          First Name
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name || ""}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
        />
      </div>

      {/* Last Name */}
      <div>
        <label
          htmlFor="last_name"
          className="block text-sm font-medium text-white"
        >
          Last Name
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name || ""}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
        />
      </div>

      {/* Email */}
      {/* <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
        />
      </div> */}

      {/* Username (Nickname) */}
      {/* <div>
        <label htmlFor="nickname" className="block text-sm font-medium text-white">Username</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
        />
      </div> */}

      {/* Password */}
      {/* <div>
        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password || ""}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
        />
      </div> */}

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Save Changes
      </button>
    </form>
  );
}
