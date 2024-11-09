"use client";

import FooterLink from "@/components/FooterLink";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUser } from "@/services/user.api";

export default function Home() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [loadingUserData, setLoadingUserData] = useState(false);

  useEffect(() => {
    const checkUserProfile = async () => {
      if (user) {
        setLoadingUserData(true);
        try {
          const userData = await getUser();
          if (!userData) {
            router.push("/profile/setup");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          router.push("/profile/setup");
        } finally {
          setLoadingUserData(false);
        }
      }
    };

    checkUserProfile();
  }, [user, router]);

  if (isLoading || loadingUserData) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <main className="flex-grow flex flex-col items-center justify-center p-8 gap-8 text-center">
        {user ? (
          <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
        ) : (
          <h1 className="text-2xl font-bold">Welcome to Nebula Partner</h1>
        )}
      </main>

      <footer className="flex gap-4 items-center justify-center p-4 border-t border-gray-300 dark:border-gray-700">
        <FooterLink href="https://nextjs.org/learn" label="Learn" />
        <FooterLink
          href="https://vercel.com/templates?framework=next.js"
          label="Examples"
        />
        <FooterLink href="https://nextjs.org" label="Next.js" />
      </footer>
    </div>
  );
}
