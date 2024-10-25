export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
      >
        Go back home
      </a>
    </div>
  );
}
