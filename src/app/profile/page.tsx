'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!user) {
    // Redirige al login si el usuario no está autenticado
    router.push('/api/auth/login');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8">
      <Image
        src={user.picture || '/placeholder-profile.png'}
        alt={user.name || 'User Avatar'}
        width={100}
        height={100}
        className="rounded-full"
      />
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-lg">{user.email}</p>

      <div className="mt-4">
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 rounded-full border transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}