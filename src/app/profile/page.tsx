"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EditProfileButton from "@/components/EditProfileButton";
import BackToHomeButton from "@/components/BackToHomeButton";
import DeleteAccountButton from "@/components/DeleteAccountButton";
import { getUser } from "@/services/user.api";
import { User } from "@/types/user.types";

export default function ProfilePage() {
  const { user } = useUser();
  const router = useRouter();
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      getUser()
        .then((data) => {
          if (data) {
            setUserData(data);
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

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <main className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 flex flex-col max-w-3xl w-full space-y-6">
        {/* User Profile Image */}
        <div className="flex items-center gap-6">
          <Image
            src={user.picture || "/placeholder-profile.png"}
            alt={user.nickname || "User Avatar"}
            width={140}
            height={140}
            className="rounded-full shadow-md border-4 border-blue-500 dark:border-blue-400"
          />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            {userData
              ? `${userData.first_name} ${userData.last_name}`
              : user.name}
          </h1>
        </div>

        {/* User Details */}
        <div className="flex flex-col items-start text-lg text-gray-600 dark:text-gray-400 space-y-2">
          <p>
            <strong>Username:</strong> {user.nickname}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {userData?.phone || "Not provided"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col gap-2 w-full">
          <EditProfileButton />
          <DeleteAccountButton />
          <BackToHomeButton />
        </div>
      </main>
    </div>
  );
}
