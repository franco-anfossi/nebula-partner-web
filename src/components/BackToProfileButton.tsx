import { useRouter } from "next/navigation";

export default function BackToProfileButton() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/profile");
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
    >
      Back to Profile
    </button>
  );
}
