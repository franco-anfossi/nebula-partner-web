export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <section className="w-full max-w-4xl p-4 flex-grow flex flex-col items-center">
        {children}
      </section>
    </div>
  );
}
