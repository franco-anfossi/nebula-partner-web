export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
      >
        Go back home
      </a>
    </div>
  );
}
