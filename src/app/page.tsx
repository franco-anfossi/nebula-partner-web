"use client";

import FooterLink from "@/components/FooterLink";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-8 gap-8 text-center">
        {user ? (
          <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
        ) : (
          <h1 className="text-2xl font-bold">Welcome to Nebula Partner</h1>
        )}
      </main>

      <footer className="flex gap-4 items-center justify-center p-4 border-t">
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
