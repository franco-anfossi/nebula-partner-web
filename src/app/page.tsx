'use client';

import Image from 'next/image';
import NavButton from '../components/NavButton';
import FooterLink from '../components/FooterLink';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, isLoading } = useUser();
  console.log(user);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 gap-10">
      <main className="text-center flex flex-col items-center gap-6">
        <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="dark:invert"
        />
        <h1 className="text-2xl font-bold">Welcome to Your Next.js App</h1>
        <div className="flex gap-4">
          {user ? (
            <>
              <NavButton href="/profile" label="Profile" />
              <NavButton href="/api/auth/logout" label="Logout" />
            </>
          ) : (
            <NavButton href="/api/auth/login" label="Login" />
          )}
        </div>
      </main>

      <footer className="flex gap-4 items-center">
        <FooterLink
          href="https://nextjs.org/learn"
          label="Learn"
          iconSrc="https://nextjs.org/icons/file.svg"
        />
        <FooterLink
          href="https://vercel.com/templates?framework=next.js"
          label="Examples"
          iconSrc="https://nextjs.org/icons/window.svg"
        />
        <FooterLink
          href="https://nextjs.org"
          label="Next.js"
          iconSrc="https://nextjs.org/icons/globe.svg"
        />
      </footer>
    </div>
  );
}