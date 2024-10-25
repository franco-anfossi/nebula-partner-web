export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl py-6">
        <h1 className="text-3xl font-bold text-center">Profile</h1>
      </header>

      <main className="w-full max-w-4xl flex-grow">{children}</main>

      <footer className="w-full max-w-4xl py-4 text-center">
        <p>© 2024 Nebula Partner Web. All rights reserved.</p>
      </footer>
    </div>
  );
}
