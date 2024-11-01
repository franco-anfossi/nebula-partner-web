export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center space-x-2">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      <p className="text-xl font-semibold">Loading your profile...</p>
    </div>
  );
}
