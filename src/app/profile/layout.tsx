export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 light:bg-gray-900 light:text-gray-200">
      <main className="flex-grow w-full max-w-4xl flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
